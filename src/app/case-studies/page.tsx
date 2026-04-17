import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUp, Clock, Wrench } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { CASE_STUDY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'กรณีศึกษา',
  description: 'ผลลัพธ์จริงจาก AI & Automation: TTFB จาก 2.3s เหลือ 96ms, SEO 100/100 ใน 5 วัน',
}

const UPCOMING = [
  { title: 'คลินิกความงาม เพิ่ม Booking 300%', category: 'คลินิก', status: 'กำลังดำเนินการ' },
  { title: 'ร้านอาหาร ระบบ AI รับออเดอร์อัตโนมัติ', category: 'ร้านอาหาร', status: 'เร็วๆ นี้' },
  { title: 'อบต. ระบบรับเรื่องร้องเรียนอัตโนมัติ', category: 'อปท.', status: 'เร็วๆ นี้' },
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-[#0A0A0F]">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              label="กรณีศึกษา"
              title="ผลลัพธ์จริง ไม่ใช่แค่คำสัญญา"
              subtitle="ตัวเลขจริง จากโปรเจกต์จริง ที่พิสูจน์ได้"
            />
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {CASE_STUDY.metrics.map((metric, i) => (
              <FadeUp key={metric.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-[#00D4FF]/20 bg-[#12121A]/80 p-6 text-center">
                  <div className="mb-2 text-xs uppercase tracking-widest text-[#60607A] font-body">{metric.label}</div>
                  <div className="mb-1 flex items-center justify-center gap-2">
                    <span className="font-display text-sm text-[#60607A] line-through">{metric.before}</span>
                    <ArrowRight size={14} className="text-[#00D4FF]" />
                    <span className="font-display text-2xl font-bold text-[#00D4FF]">{metric.after}</span>
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
            <div className="rounded-2xl border border-[#00D4FF]/20 bg-[#12121A]/80 p-8 md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3 py-1 text-xs font-semibold text-[#FF6B35]">
                  {CASE_STUDY.subtitle}
                </span>
                <span className="rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-xs font-semibold text-[#00D4FF]">
                  บ้านพักผู้สูงอายุ
                </span>
              </div>

              <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
                {CASE_STUDY.title}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-[#A0A0B0] font-body max-w-3xl">
                {CASE_STUDY.story}
              </p>

              <div className="mb-8">
                <h3 className="mb-4 font-display text-lg font-semibold text-white flex items-center gap-2">
                  <Clock size={18} className="text-[#00D4FF]" /> Timeline
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {CASE_STUDY.timeline.map((item, i) => (
                    <div key={item.day} className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00D4FF]/10 font-display text-xs font-bold text-[#00D4FF]">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#00D4FF] font-body">{item.day}</div>
                        <div className="mt-1 text-sm text-[#A0A0B0] font-body">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-display text-lg font-semibold text-white flex items-center gap-2">
                  <Wrench size={18} className="text-[#00D4FF]" /> เครื่องมือที่ใช้
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CASE_STUDY.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-4 py-1.5 text-sm text-[#00D4FF] font-body"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[#0D0D15]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              label="กำลังมา"
              title="กรณีศึกษาถัดไป"
              subtitle="โปรเจกต์ที่กำลังดำเนินการและจะเผยแพร่เร็วๆ นี้"
            />
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-3">
            {UPCOMING.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-[#12121A]/80 p-6">
                  <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#A0A0B0] font-body">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#FF6B35] animate-pulse" />
                    <span className="text-xs text-[#FF6B35] font-body">{item.status}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0F]">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              อยากให้ธุรกิจคุณเป็นกรณีศึกษาถัดไป?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00D4FF] px-8 py-4 font-display font-semibold text-[#0A0A0F] transition-all hover:bg-[#33DDFF]"
            >
              เริ่มต้นวันนี้ <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
