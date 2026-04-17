import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import ServiceCard from '@/components/cards/ServiceCard'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'บริการ',
  description: 'บริการ AI Consulting ครบวงจร: AI Strategy & Audit, AI Implementation, Monthly Retainer ราคาสมเหตุสมผล',
}

const FAQS = [
  {
    q: 'ต้องมีพื้นฐาน IT หรือ Code ไหม?',
    a: 'ไม่จำเป็นเลย เราออกแบบบริการสำหรับเจ้าของธุรกิจที่ไม่มีพื้นฐาน Tech โดยเฉพาะ เราดูแลด้านเทคนิคทั้งหมด คุณแค่บอกเป้าหมายธุรกิจ',
  },
  {
    q: 'ใช้เวลานานแค่ไหนจึงจะเห็นผล?',
    a: 'ขึ้นอยู่กับบริการ: AI Audit เสร็จใน 1-2 สัปดาห์, Implementation 2-4 สัปดาห์, ผลลัพธ์จริงมักเห็นภายใน 30-60 วัน',
  },
  {
    q: 'ถ้าไม่พอใจผลลัพธ์ทำอย่างไร?',
    a: 'เรายืนยันเป้าหมายที่วัดได้ก่อนเริ่มโปรเจกต์ หากไม่ได้ผลตามที่ตกลงกัน เราปรับงานให้จนพอใจโดยไม่คิดค่าใช้จ่ายเพิ่ม',
  },
  {
    q: 'แตกต่างจาก Agency ดิจิทัลทั่วไปอย่างไร?',
    a: 'เราเชี่ยวชาญ AI โดยเฉพาะ ไม่ใช่ทำทุกอย่าง ต้นทุนเราต่ำกว่า (ทีมเล็ก ไม่มี overhead สูง) จึงส่งผ่านราคาที่ดีกว่าให้คุณได้',
  },
  {
    q: 'รองรับธุรกิจขนาดเล็กมากๆ ไหม?',
    a: 'รองรับครับ เราออกแบบแพ็กเกจสำหรับ SME ที่งบจำกัด มีแพ็กเกจเริ่มต้นที่ ฿15,000 และสามารถปรับตามงบได้',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-[#0A0A0F]">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              label="บริการ"
              title="บริการ AI Consulting ครบวงจร"
              subtitle="เลือกแพ็กเกจที่เหมาะกับขั้นตอนของธุรกิจคุณ ปรึกษาฟรีก่อนตัดสินใจ"
            />
          </FadeUp>

          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <FadeUp key={service.id} delay={i * 0.1}>
                <ServiceCard {...service} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D0D15]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              label="FAQ"
              title="คำถามที่พบบ่อย"
              subtitle="ถ้าไม่เจอคำตอบที่ต้องการ ติดต่อเราได้เลย"
            />
          </FadeUp>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/8 bg-[#12121A]/80 p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={18} className="mt-0.5 flex-shrink-0 text-[#00D4FF]" />
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{faq.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#A0A0B0] font-body">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0F]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              ยังไม่แน่ใจว่าแพ็กเกจไหนเหมาะกับคุณ?
            </h2>
            <p className="text-[#A0A0B0] mb-8 font-body">
              ปรึกษาฟรี 30 นาที เราช่วยวิเคราะห์และแนะนำให้ตรงกับธุรกิจของคุณ
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00D4FF] px-8 py-4 font-display font-semibold text-[#0A0A0F] transition-all hover:bg-[#33DDFF] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              ขอรับคำปรึกษาฟรี <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
