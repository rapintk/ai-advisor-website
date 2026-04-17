import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ label, title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {label && (
        <span className="mb-3 inline-block rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00D4FF]">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[#A0A0B0] md:text-lg font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
