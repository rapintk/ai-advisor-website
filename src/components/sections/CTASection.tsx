import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { FadeUp } from '@/components/ui/FadeUp'

export default function CTASection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F]">
      <div className="absolute inset-0 bg-cta-gradient" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeUp>
          <span className="mb-4 inline-block rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00D4FF]">
            พร้อมเริ่มต้น?
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            พร้อมเริ่มต้นหรือยัง?
          </h2>
          <p className="mt-4 text-lg text-[#A0A0B0] font-body">
            ปรึกษาฟรี 30 นาที — ไม่มีข้อผูกมัด ไม่มี Hard Sell
            <br />
            แค่คุยกันว่า AI จะช่วยธุรกิจคุณได้อย่างไร
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-xl bg-[#00D4FF] px-8 py-4 font-display font-semibold text-[#0A0A0F] transition-all duration-300 hover:bg-[#33DDFF] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              ขอรับคำปรึกษาฟรี 30 นาที
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://line.me/ti/p/~@ai-advisor"
              className="flex items-center gap-2 rounded-xl border border-[#06C755]/40 bg-[#06C755]/10 px-8 py-4 font-semibold text-[#06C755] transition-all hover:bg-[#06C755]/20 font-body"
            >
              <MessageCircle size={18} />
              คุยผ่าน LINE
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mt-6 text-xs text-[#60607A] font-body">
            ตอบกลับภายใน 24 ชั่วโมง · ฟรี ไม่มีข้อผูกมัด
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
