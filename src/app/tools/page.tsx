import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import ToolCard from '@/components/cards/ToolCard'
import { TOOLS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'เครื่องมือ AI ฟรี',
  description: '50+ เครื่องมือ AI ฟรีสำหรับ SME ไทย: SEO Audit, Meta Tag Generator, ROI Calculator และอีกมากมาย',
}

export default function ToolsPage() {
  const available = TOOLS.filter((t) => t.isAvailable)
  const coming = TOOLS.filter((t) => !t.isAvailable)

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-[#0A0A0F]">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              label="เครื่องมือฟรี"
              title="เครื่องมือ AI ฟรี สำหรับ SME ไทย"
              subtitle={`${TOOLS.length}+ เครื่องมือ AI ใช้งานได้ฟรี ไม่ต้องสมัคร ไม่ต้องจ่ายเงิน`}
            />
          </FadeUp>

          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1 text-xs font-semibold text-[#00D4FF] font-body">
              พร้อมใช้ {available.length} เครื่องมือ
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-[#60607A] font-body">
              เร็วๆ นี้ {coming.length} เครื่องมือ
            </span>
          </div>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {TOOLS.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
