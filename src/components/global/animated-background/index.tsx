'use client'

import React, { useState } from 'react'

export default function AnimatedBackground() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, var(--orange-dark) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, var(--orange-medium) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, var(--orange-light) 0%, transparent 50%)
        `,
        filter: `blur(${isHovered ? '100px' : '50px'})`,
        transition: 'filter 0.5s ease-in-out',
      }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 animate-pulse-slow opacity-50 bg-gradient-to-br from-orange-500 to-transparent"></div>
    </div>
  )
}

