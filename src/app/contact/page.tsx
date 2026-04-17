import type { Metadata } from 'next'
import { MessageCircle, Mail, Clock, Shield } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'ติดต่อ',
  description: 'ขอรับคำปรึกษา AI ฟรี 30 นาที ตอบกลับภายใน 24 ชั่วโมง',
}

const BENEFITS = [
  { icon: Clock, title: 'ตอบกลับภายใน 24 ชั่วโมง', desc: 'ทุกวันทำการ จันทร์–ศุกร์' },
  { icon: Shield, title: 'ไม่มีข้อผูกมัด', desc: 'ปรึกษาฟรี ไม่มี Hard Sell' },
  { icon: MessageCircle, title: 'ภาษาไทยทั้งหมด', desc: 'สื่อสารง่าย เข้าใจปัญหาคุณ' },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-[#0A0A0F]">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              label="ติดต่อ"
              title="ขอรับคำปรึกษาฟรี 30 นาที"
              subtitle="บอกเราถึงธุรกิจและปัญหาของคุณ เราจะวิเคราะห์และแนะนำแนวทางที่เหมาะสม"
            />
          </FadeUp>

          <div className="grid gap-10 lg:grid-cols-2">
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-white/8 bg-[#12121A]/80 p-8">
                <h2 className="mb-6 font-display text-xl font-bold text-white">
                  ส่งข้อความหาเรา
                </h2>
                <ContactForm />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-white/8 bg-[#12121A]/80 p-6">
                  <h3 className="mb-4 font-display text-lg font-semibold text-white">
                    ช่องทางติดต่อ
                  </h3>
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://line.me/ti/p/~@ai-advisor"
                      className="group flex items-center gap-4 rounded-xl border border-[#06C755]/20 bg-[#06C755]/5 p-4 transition-all hover:border-[#06C755]/40 hover:bg-[#06C755]/10"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06C755]/10">
                        <MessageCircle size={20} className="text-[#06C755]" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-white">LINE OA</div>
                        <div className="text-xs text-[#A0A0B0] font-body">@ai-advisor · ตอบเร็วที่สุด</div>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@ai-advisor.th"
                      className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all hover:border-[#00D4FF]/30 hover:bg-white/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D4FF]/10">
                        <Mail size={20} className="text-[#00D4FF]" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-white">อีเมล</div>
                        <div className="text-xs text-[#A0A0B0] font-body">hello@ai-advisor.th</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#12121A]/80 p-6">
                  <h3 className="mb-4 font-display text-lg font-semibold text-white">
                    ทำไมต้องปรึกษาเรา?
                  </h3>
                  <div className="flex flex-col gap-4">
                    {BENEFITS.map((b) => (
                      <div key={b.title} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#00D4FF]/10">
                          <b.icon size={16} className="text-[#00D4FF]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white font-body">{b.title}</div>
                          <div className="text-xs text-[#A0A0B0] font-body">{b.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#FF6B35]/20 bg-[#FF6B35]/5 p-6">
                  <h3 className="mb-2 font-display text-base font-semibold text-white">
                    นัดหมาย Video Call
                  </h3>
                  <p className="mb-4 text-sm text-[#A0A0B0] font-body">
                    สะดวกคุยผ่าน Zoom หรือ Google Meet ก็ได้
                    ระบุในช่อง &quot;ปัญหาที่ต้องการแก้ไข&quot;
                  </p>
                  <div className="text-xs text-[#FF6B35] font-body">
                    เปิดรับนัดหมาย จันทร์–ศุกร์ 9:00–18:00
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  )
}
