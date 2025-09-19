"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/ui/LoadingScreen"

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowContent(true)
  }

  // Prevent flash of content during hydration
  useEffect(() => {
    // Small delay to ensure smooth loading experience
    const timer = setTimeout(() => {
      if (!showContent && !isLoading) {
        setShowContent(true)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isLoading, showContent])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div 
        className={`transition-opacity duration-300 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  )
}