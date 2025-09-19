'use client'

import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary' 
}: AnimatedButtonProps) {
  const baseClasses = "relative px-4 py-2 text-sm font-secondary tracking-widest uppercase transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden group"
  
  const variantClasses = {
    primary: "bg-stone-100 border border-black/30 rounded-full hover:border-black/60",
    secondary: "bg-black text-white border border-black rounded-full hover:bg-black/90"
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-6 text-black/50">
          {children}
        </span>
        <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-6 text-black absolute top-0 left-0 w-full px-4 py-2">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-6 text-black/50">
        {children}
      </span>
      <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-6 text-black absolute top-0 left-0 w-full px-4 py-2">
        {children}
      </span>
    </button>
  )
}

