'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const STATS = [
  { value: 96, suffix: '%', label: 'เร็วขึ้น (TTFB)', prefix: '' },
  { value: 100, suffix: '/100', label: 'SEO Score', prefix: '' },
  { value: 0, suffix: '', label: 'Agency Fee', prefix: '฿' },
]

const HIGHLIGHTS = [
  'พิสูจน์ผลด้วยตัวเลขจริง',
  'ไม่มีค่า Retainer ซ่อน',
  'เริ่มเห็นผลใน 30 วัน',
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0F] pt-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0F]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-sm text-[#00D4FF] font-body">พร้อมให้บริการแล้ววันนี้</span>
          </div>

          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            หยุดเสียเงิน<span className="text-[#FF6B35]">ค่า Agency</span>
            <br />
            <span className="gradient-text">ที่ไม่รู้ว่าได้อะไรคืน</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-[#A0A0B0] md:text-xl font-body max-w-2xl mx-auto">
            AI &amp; Automation Advisor สำหรับ SME ไทย ที่พิสูจน์ผลได้จริง
            <br />
            ลดต้นทุน เพิ่มประสิทธิภาพ และแข่งขันได้ในยุค AI
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {HIGHLIGHTS.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-[#A0A0B0] font-body">
                <CheckCircle size={16} className="text-[#00D4FF] flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-xl bg-[#00D4FF] px-8 py-4 font-display font-semibold text-[#0A0A0F] transition-all duration-300 hover:bg-[#33DDFF] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] text-base"
            >
              ขอรับคำปรึกษาฟรี 30 นาที
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl border border-white/10 px-8 py-4 text-base font-semibold text-[#F0F0F0] transition-all duration-300 hover:border-white/30 hover:bg-white/5 font-body"
            >
              ดูกรณีศึกษา →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 rounded-2xl border border-white/5 bg-[#12121A]/50 p-6 backdrop-blur-md">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-extrabold text-[#00D4FF] md:text-3xl lg:text-4xl">
                  {stat.prefix}
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="mt-1 text-xs text-[#A0A0B0] font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
