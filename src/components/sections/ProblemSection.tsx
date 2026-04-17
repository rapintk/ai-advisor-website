import { DollarSign, HelpCircle, Building2, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { PAIN_POINTS } from '@/lib/constants'

const ICONS = { DollarSign, HelpCircle, Building2, Clock }

export default function ProblemSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F]">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="ปัญหาที่พบบ่อย"
            title="คุณเคยเจอปัญหาเหล่านี้ไหม?"
            subtitle="ปัญหาเหล่านี้เกิดขึ้นทุกวันกับ SME ไทยและองค์กรรัฐ และเราเข้าใจดี"
          />
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point, i) => {
            const Icon = ICONS[point.icon as keyof typeof ICONS]
            return (
              <FadeUp key={point.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/8 bg-[#12121A]/80 p-6 transition-all duration-300 hover:border-[#FF6B35]/30 hover:shadow-[0_0_25px_rgba(255,107,53,0.1)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/10 transition-colors group-hover:bg-[#FF6B35]/20">
                    <Icon size={24} className="text-[#FF6B35]" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A0A0B0] font-body">
                    {point.description}
                  </p>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
