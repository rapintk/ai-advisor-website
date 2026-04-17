import { X, Check } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'

const COMPARISON = [
  { feature: 'ความโปร่งใสของราคา', agency: false, us: true },
  { feature: 'รายงานผลลัพธ์ที่วัดได้', agency: false, us: true },
  { feature: 'ทีมงานเฉพาะทาง AI', agency: false, us: true },
  { feature: 'ปรับแผนตาม ROI จริง', agency: false, us: true },
  { feature: 'ราคาสมเหตุสมผล', agency: false, us: true },
  { feature: 'ไม่มีสัญญาผูกมัดระยะยาว', agency: false, us: true },
  { feature: 'Support ภาษาไทย', agency: true, us: true },
  { feature: 'เจ้าของธุรกิจเข้าใจเอง', agency: false, us: true },
]

export default function PricingSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F]">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="ROI"
            title="ROI ที่คุณได้รับ"
            subtitle="ต้นทุนเราต่ำ → คุณได้ราคาดีกว่า Agency ทั่วไป 50–80%"
          />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#12121A]/80">
            <div className="grid grid-cols-3 border-b border-white/8">
              <div className="p-4 text-sm font-semibold text-[#60607A] font-body">คุณสมบัติ</div>
              <div className="border-l border-white/8 p-4 text-center text-sm font-semibold text-[#60607A] font-body">
                Agency ทั่วไป
              </div>
              <div className="border-l border-white/8 bg-[#00D4FF]/5 p-4 text-center text-sm font-semibold text-[#00D4FF] font-body">
                AI Advisor
              </div>
            </div>

            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-white/5 ${
                  i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                }`}
              >
                <div className="p-4 text-sm text-[#A0A0B0] font-body">{row.feature}</div>
                <div className="flex items-center justify-center border-l border-white/5 p-4">
                  {row.agency ? (
                    <Check size={18} className="text-[#A0A0B0]" />
                  ) : (
                    <X size={18} className="text-[#FF6B35]/60" />
                  )}
                </div>
                <div className="flex items-center justify-center border-l border-white/5 bg-[#00D4FF]/5 p-4">
                  {row.us ? (
                    <Check size={18} className="text-[#00D4FF]" />
                  ) : (
                    <X size={18} className="text-[#FF6B35]/60" />
                  )}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 border-t border-white/8 bg-[#0D0D15]">
              <div className="p-4 text-sm font-semibold text-white font-body">ค่าใช้จ่ายเฉลี่ย</div>
              <div className="flex items-center justify-center border-l border-white/8 p-4">
                <span className="font-display text-sm font-bold text-[#FF6B35]">฿30,000+/เดือน</span>
              </div>
              <div className="flex items-center justify-center border-l border-white/8 bg-[#00D4FF]/5 p-4">
                <span className="font-display text-sm font-bold text-[#00D4FF]">฿8,000+/เดือน</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
