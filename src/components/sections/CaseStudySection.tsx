import { ArrowRight, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { CASE_STUDY } from '@/lib/constants'

export default function CaseStudySection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F]">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="กรณีศึกษา"
            title="ผลลัพธ์จริง ไม่ใช่แค่คำสัญญา"
            subtitle="ตัวเลขที่พิสูจน์ได้จริง จากโปรเจกต์จริง"
          />
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {CASE_STUDY.metrics.map((metric, i) => (
            <FadeUp key={metric.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/8 bg-[#12121A]/80 p-6 text-center">
                <div className="mb-2 text-xs uppercase tracking-widest text-[#60607A] font-body">
                  {metric.label}
                </div>
                <div className="mb-1 flex items-center justify-center gap-2">
                  <span className="font-display text-sm text-[#60607A] line-through">
                    {metric.before}
                  </span>
                  <ArrowRight size={14} className="text-[#00D4FF]" />
                  <span className="font-display text-xl font-bold text-[#00D4FF]">
                    {metric.after}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 text-xs text-[#FF6B35] font-body">
                  <ArrowUp size={12} />
                  <span>{metric.improvement}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="rounded-2xl border border-[#00D4FF]/20 bg-[#12121A]/80 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3 py-1 text-xs font-semibold text-[#FF6B35]">
                  {CASE_STUDY.subtitle}
                </span>
                <h3 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
                  {CASE_STUDY.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#A0A0B0] font-body">
                  {CASE_STUDY.story}
                </p>
                <div className="flex flex-wrap gap-2">
                  {CASE_STUDY.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#A0A0B0]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {CASE_STUDY.timeline.map((item, i) => (
                  <div key={item.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00D4FF]/10 text-xs font-semibold text-[#00D4FF] flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < CASE_STUDY.timeline.length - 1 && (
                        <div className="mt-1 h-full w-px bg-[#00D4FF]/10" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs font-semibold text-[#00D4FF] font-body">{item.day}</div>
                      <div className="mt-1 text-sm text-[#A0A0B0] font-body">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#00D4FF] transition-colors hover:text-[#33DDFF] font-body"
            >
              อ่านกรณีศึกษาเต็มๆ <ArrowRight size={16} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
