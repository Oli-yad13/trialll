"use client"

import { useEffect, useRef, useMemo, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollTextRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  stagger?: number
  duration?: number
  revealType?: "word" | "line" | "character"
  animationType?: "fade" | "slide" | "scale" | "blur" | "combined"
  easing?: "power1" | "power2" | "power3" | "power4" | "back" | "elastic" | "bounce"
  triggerStart?: string
  triggerEnd?: string
}

export default function ScrollTextReveal({ 
  text, 
  className = "",
  style = {},
  revealType = "word",
  triggerStart = "top 90%",
  triggerEnd = "bottom 10%"
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([])

  // Parse text into elements based on reveal type
  const parseText = useCallback((text: string) => {
    // Handle bold text markers
    let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // Handle line breaks
    processedText = processedText.replace(/<br\s*\/?>/gi, '<br>')
    
    if (revealType === "character") {
      // Split into characters
      return processedText.split('').map((char, index) => ({
        content: char,
        index,
        isSpace: char === ' ',
        isLineBreak: char === '\n',
        isBold: false,
        lineIndex: 0
      }))
    } else if (revealType === "line") {
      // Split into lines
      const lines = processedText.split(/<br>|(?=\n)/)
      return lines.map((line, index) => ({
        content: line,
        index,
        isSpace: false,
        isLineBreak: line.trim() === '',
        isBold: line.includes('<strong>'),
        lineIndex: index
      }))
    } else {
      // Split into words (default)
      const lines = processedText.split(/<br>|(?=\n)/)
      const allWords: Array<{
        content: string
        index: number
        isSpace: boolean
        isLineBreak: boolean
        isBold: boolean
        lineIndex: number
      }> = []
      
      let globalIndex = 0
      
      lines.forEach((line, lineIndex) => {
        if (line.trim() === '') {
          allWords.push({
            content: '<br>',
            index: globalIndex++,
            isSpace: false,
            isLineBreak: true,
            isBold: false,
            lineIndex
          })
          return
        }
        
        // Split line into words (preserving spaces)
        const words = line.split(/(\s+)/)
        
        words.forEach((word) => {
          if (word.trim() === '') {
            // Handle spaces - include them with the previous word
            if (allWords.length > 0) {
              allWords[allWords.length - 1].content += word
            } else {
              allWords.push({
                content: word,
                index: globalIndex++,
                isSpace: true,
                isLineBreak: false,
                isBold: false,
                lineIndex
              })
            }
          } else {
            // Handle actual words
            allWords.push({
              content: word,
              index: globalIndex++,
              isSpace: false,
              isLineBreak: false,
              isBold: word.includes('<strong>'),
              lineIndex
            })
          }
        })
      })
      
      return allWords
    }
  }, [revealType])

  const elements = useMemo(() => {
    const parsed = parseText(text)
    console.log(`Parsed ${parsed.length} elements from text:`, text.substring(0, 50) + '...')
    return parsed
  }, [text, parseText])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const elementNodes = elementsRef.current.filter(Boolean)
    
    console.log(`Found ${elementNodes.length} rendered elements out of ${elements.length} parsed elements`)

    // Create scroll-triggered animation
    ScrollTrigger.create({
      trigger: container,
      start: triggerStart,
      end: triggerEnd,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const totalElements = elementNodes.length
        
        // Calculate how many elements should be revealed
        const elementsToReveal = Math.floor(progress * totalElements)
        
        console.log(`Progress: ${progress.toFixed(2)}, Elements: ${elementsToReveal}/${totalElements}`)
        
        elementNodes.forEach((element, index) => {
          if (!element) return
          
          if (index < elementsToReveal) {
            // Reveal this element completely
            gsap.set(element, {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)"
            })
          } else if (index === elementsToReveal) {
            // Partially reveal current element
            const partialProgress = (progress * totalElements) % 1
            gsap.set(element, {
              opacity: partialProgress,
              y: 20 * (1 - partialProgress),
              scale: 0.98 + (0.02 * partialProgress),
              filter: `blur(${2 * (1 - partialProgress)}px)`
            })
          } else {
            // Keep element hidden
            gsap.set(element, {
              opacity: 0,
              y: 20,
              scale: 0.98,
              filter: "blur(2px)"
            })
          }
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [text, triggerStart, triggerEnd, elements.length])

  return (
    <div ref={containerRef} className={`scroll-text-reveal ${className}`} style={style}>
      {elements.map((element, index) => {
        if (element.isLineBreak) {
          return <br key={index} className="mb-2" />
        }
        
        // Determine styling based on content
        const isHeading = element.lineIndex === 0 || element.content.includes('<strong>')
        
        return (
          <span
            key={index}
            ref={el => { elementsRef.current[index] = el }}
            className={`${element.isBold ? 'font-bold' : ''} ${
              isHeading ? 'font-bold leading-tight' : 'leading-relaxed text-gray-600'
            }`}
            style={{ 
              display: 'inline',
              whiteSpace: element.isSpace ? 'pre' : 'normal',
              lineHeight: isHeading ? '1.1' : '1.6',
              opacity: 0,
              transform: 'translateY(20px) scale(0.98)',
              filter: 'blur(2px)'
            }}
            dangerouslySetInnerHTML={{ __html: element.content }}
          />
        )
      })}
    </div>
  )
}
