"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollTextFillProps {
  text: string
  className?: string
  delay?: number
}

export default function ScrollTextFill({ 
  text, 
  className = "", 
  delay = 50
}: ScrollTextFillProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])

  // Parse text into words with proper spacing
  const parseText = (text: string) => {
    // Handle bold text markers
    let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // Handle line breaks
    processedText = processedText.replace(/<br\s*\/?>/gi, '<br>')
    
    // Split into lines
    const lines = processedText.split(/<br>|(?=\n)/)
    
    const allWords: Array<{
      word: string
      index: number
      lineIndex: number
      wordIndex: number
      isBold: boolean
      isSpace: boolean
      isLineBreak: boolean
    }> = []
    
    let globalIndex = 0
    
    lines.forEach((line, lineIndex) => {
      if (line.trim() === '') {
        allWords.push({
          word: '<br>',
          index: globalIndex++,
          lineIndex,
          wordIndex: 0,
          isBold: false,
          isSpace: false,
          isLineBreak: true
        })
        return
      }
      
      // Split line into words (preserving spaces)
      const words = line.split(/(\s+)/)
      let wordIndex = 0
      
      words.forEach((word) => {
        if (word.trim() === '') {
          // Handle spaces
          allWords.push({
            word: word,
            index: globalIndex++,
            lineIndex,
            wordIndex,
            isBold: false,
            isSpace: true,
            isLineBreak: false
          })
        } else {
          // Handle actual words
          allWords.push({
            word: word,
            index: globalIndex++,
            lineIndex,
            wordIndex,
            isBold: word.includes('<strong>'),
            isSpace: false,
            isLineBreak: false
          })
          wordIndex++
        }
      })
    })
    
    return allWords
  }

  const words = parseText(text)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const wordElements = wordsRef.current.filter(Boolean)

    // Set initial state - all words invisible
    gsap.set(wordElements, {
      opacity: 0.2,
      y: 20,
      color: '#d1d5db'
    })

    // Group words by lines
    const wordsByLine = words.reduce((acc, word, index) => {
      if (!acc[word.lineIndex]) {
        acc[word.lineIndex] = []
      }
      acc[word.lineIndex].push({ ...word, globalIndex: index })
      return acc
    }, {} as Record<number, Array<typeof words[0] & { globalIndex: number }>>)

    const totalLines = Object.keys(wordsByLine).length

    // Create a timeline that fills words line by line
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const wordsToShow = Math.floor(progress * wordElements.length);

          wordElements.forEach((wordEl, index) => {
            if (index < wordsToShow) {
              gsap.to(wordEl, {
                opacity: 1,
                y: 0,
                color: '#111827',
                duration: 0.3,
                ease: "power2.out"
              });
            } else {
              gsap.to(wordEl, {
                opacity: 0.2,
                y: 20,
                color: '#d1d5db',
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
      }
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [words])

  return (
    <div ref={containerRef} className={`text-content ${className}`}>
      {words.map((word, index) => {
        if (word.isLineBreak) {
          return <br key={index} />
        }
        
        // Determine if this word is part of the heading (first line)
        const isHeading = word.lineIndex === 0
        
        return (
          <span
            key={index}
            ref={el => { if (el) wordsRef.current[index] = el }}
            className={`${word.isBold ? 'font-bold' : ''} ${ 
              isHeading ? 'text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight' : 'text-lg lg:text-xl leading-none text-gray-600'
            }`}
            style={{ 
              display: 'inline',
              whiteSpace: word.isSpace ? 'pre' : 'normal',
              lineHeight: isHeading ? '1.1' : '1.2'
            }}
            dangerouslySetInnerHTML={{ __html: word.word }}
          />
        )
      })}
    </div>
  )
}