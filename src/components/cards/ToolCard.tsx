import Link from 'next/link'
import { Lock } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { Tool } from '@/lib/constants'

export default function ToolCard({ tool }: { tool: Tool }) {
  const Icon = (LucideIcons[tool.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>) ?? LucideIcons.Sparkles

  if (!tool.isAvailable) {
    return (
      <div className="relative rounded-2xl border border-white/5 bg-[#12121A]/40 p-5 opacity-60">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
          <Icon size={20} className="text-[#60607A]" />
        </div>
        <h3 className="font-display text-sm font-semibold text-[#60607A] leading-snug">{tool.name}</h3>
        <div className="mt-3 flex items-center gap-1.5">
          <Lock size={11} className="text-[#60607A]" />
          <span className="text-xs text-[#60607A] font-body">เร็วๆ นี้</span>
        </div>
      </div>
    )
  }

  return (
    <Link
      href={tool.href ?? '#'}
      className="group flex flex-col rounded-2xl border border-white/8 bg-[#12121A]/80 p-5 transition-all duration-300 hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D4FF]/10 transition-colors group-hover:bg-[#00D4FF]/20">
        <Icon size={20} className="text-[#00D4FF]" />
      </div>
      <h3 className="font-display text-sm font-semibold text-white leading-snug">{tool.name}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-[#A0A0B0] font-body flex-1">{tool.description}</p>
      <div className="mt-3 text-xs font-semibold text-[#00D4FF] font-body">ใช้ฟรี →</div>
    </Link>
  )
}
