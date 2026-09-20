'use client'

import { useEffect, useRef } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function AnimateIn({ children, delay = 0, className = '' }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If the user prefers reduced motion, show content immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)').matches) {
      el.classList.add('in-view')
      return
    }

    let timer: ReturnType<typeof setTimeout>
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => el.classList.add('in-view'), Math.min(delay, 150))
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '120px 0px' }
    )

    observer.observe(el)
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
