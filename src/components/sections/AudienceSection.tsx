import { Store, Building2, Check } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'

const SME_LIST = [
  'ร้านค้าปลีก / ร้านอาหาร',
  'โรงแรมและที่พัก',
  'คลินิกและสถานพยาบาล',
  'ธุรกิจบริการทุกประเภท',
  'ธุรกิจครอบครัว',
  'สตาร์ทอัพและ SME ทั่วไป',
]

const GOVT_LIST = [
  'เทศบาล ทั่วประเทศ',
  'อบต. (องค์การบริหารส่วนตำบล)',
  'อบจ. (องค์การบริหารส่วนจังหวัด)',
  'หน่วยงานรัฐที่ต้องการ Digital Transformation',
  'สำนักงานต่างๆ ในระดับท้องถิ่น',
  'ทั้งหมด 7,852 แห่งทั่วประเทศไทย',
]

export default function AudienceSection() {
  return (
    <section className="relative py-24 bg-[#0D0D15]">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="กลุ่มเป้าหมาย"
            title="เราช่วยใครได้บ้าง?"
            subtitle="ออกแบบมาเพื่อ 2 กลุ่มหลักที่มีความต้องการแตกต่างกัน"
          />
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-[#00D4FF]/20 bg-[#12121A]/80 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D4FF]/10">
                  <Store size={24} className="text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">สำหรับ SME</h3>
                  <p className="text-sm text-[#A0A0B0] font-body">ธุรกิจเอกชนทุกขนาด</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {SME_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-body">
                    <Check size={16} className="text-[#00D4FF] flex-shrink-0" />
                    <span className="text-[#F0F0F0]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-[#00D4FF]/5 p-4">
                <p className="text-xs text-[#A0A0B0] font-body">
                  เหมาะสำหรับธุรกิจที่ต้องการลดต้นทุน เพิ่มยอดขาย และแข่งขันได้กับรายใหญ่
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-2xl border border-[#FF6B35]/20 bg-[#12121A]/80 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/10">
                  <Building2 size={24} className="text-[#FF6B35]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">สำหรับ อปท.</h3>
                  <p className="text-sm text-[#A0A0B0] font-body">องค์กรปกครองส่วนท้องถิ่น</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {GOVT_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-body">
                    <Check size={16} className="text-[#FF6B35] flex-shrink-0" />
                    <span className="text-[#F0F0F0]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-[#FF6B35]/5 p-4">
                <p className="text-xs text-[#A0A0B0] font-body">
                  เชี่ยวชาญด้านกฎระเบียบ อปท. งบประมาณจำกัด และการทำงานร่วมกับระบบราชการ
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
