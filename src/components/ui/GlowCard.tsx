import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'cyan' | 'orange'
  featured?: boolean
}

export function GlowCard({ children, className, glowColor = 'cyan', featured = false }: GlowCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border bg-[#12121A]/80 p-6 backdrop-blur-md transition-all duration-300',
        featured
          ? 'border-[#00D4FF]/40 shadow-[0_0_30px_rgba(0,212,255,0.15)]'
          : 'border-white/8 hover:border-[#00D4FF]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]',
        glowColor === 'orange' && 'hover:border-[#FF6B35]/40 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)]',
        className
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[#00D4FF] px-3 py-1 text-xs font-semibold text-[#0A0A0F]">
            แนะนำ
          </span>
        </div>
      )}
      {children}
    </div>
  )
}
