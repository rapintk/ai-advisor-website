import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import ServiceCard from '@/components/cards/ServiceCard'
import { SERVICES } from '@/lib/constants'

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-[#0D0D15]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="บริการ"
            title="บริการของเรา"
            subtitle="เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ ปรับได้ตามงบประมาณจริง"
          />
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeUp key={service.id} delay={i * 0.1}>
              <ServiceCard {...service} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00D4FF]/30 px-6 py-3 text-[#00D4FF] transition-all hover:bg-[#00D4FF]/10"
            >
              ดูรายละเอียดบริการทั้งหมด →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
