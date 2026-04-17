import { Search, Zap, RefreshCw, Check } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: string
  title: string
  titleTh: string
  price: string
  unit: string
  description: string
  includes: string[]
  forWho: string
  featured?: boolean
}

const ICONS = { Search, Zap, RefreshCw }

export default function ServiceCard({
  icon,
  title,
  titleTh,
  price,
  unit,
  description,
  includes,
  forWho,
  featured = false,
}: ServiceCardProps) {
  const Icon = ICONS[icon as keyof typeof ICONS] ?? Zap

  return (
    <GlowCard featured={featured} className={cn('flex flex-col', featured && 'pt-8')}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D4FF]/10">
        <Icon size={24} className="text-[#00D4FF]" />
      </div>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-[#A0A0B0] font-body">{titleTh}</p>

      <div className="my-4 flex items-baseline gap-1">
        <span className="font-display text-2xl font-bold text-[#00D4FF]">{price}</span>
        <span className="text-xs text-[#60607A] font-body">{unit}</span>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-[#A0A0B0] font-body">{description}</p>

      <ul className="mb-6 flex flex-col gap-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm font-body">
            <Check size={15} className="mt-0.5 flex-shrink-0 text-[#00D4FF]" />
            <span className="text-[#F0F0F0]">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto rounded-xl bg-[#00D4FF]/5 border border-[#00D4FF]/10 p-3">
        <p className="text-xs text-[#A0A0B0] font-body">{forWho}</p>
      </div>
    </GlowCard>
  )
}
