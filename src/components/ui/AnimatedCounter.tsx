'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' })
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!isInView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * end).toFixed(decimals)))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isInView, end, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('th-TH')}
      {suffix}
    </span>
  )
}
