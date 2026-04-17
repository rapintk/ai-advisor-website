import Link from 'next/link'
import { Search, Tag, Calculator } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'

const PREVIEW_TOOLS = [
  { icon: Search, name: 'SEO Audit Tool', description: 'วิเคราะห์ SEO เว็บไซต์ฟรี', href: '/tools' },
  { icon: Tag, name: 'Meta Tag Generator', description: 'สร้าง Meta Tags ด้วย AI', href: '/tools' },
  { icon: Calculator, name: 'ROI Calculator', description: 'คำนวณผลตอบแทน AI', href: '/tools' },
]

export default function ToolsTeaser() {
  return (
    <section className="relative py-24 bg-[#0D0D15]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="เครื่องมือฟรี"
            title="เครื่องมือ AI ฟรี สำหรับ SME ไทย"
            subtitle="50+ เครื่องมือ AI ที่ใช้งานได้ฟรี ไม่ต้องสมัคร ไม่ต้องจ่ายเงิน"
          />
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {PREVIEW_TOOLS.map((tool, i) => (
            <FadeUp key={tool.name} delay={i * 0.1}>
              <Link
                href={tool.href}
                className="group flex flex-col rounded-2xl border border-white/8 bg-[#12121A]/80 p-6 transition-all duration-300 hover:border-[#00D4FF]/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D4FF]/10 transition-colors group-hover:bg-[#00D4FF]/20">
                  <tool.icon size={24} className="text-[#00D4FF]" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{tool.name}</h3>
                <p className="mt-2 text-sm text-[#A0A0B0] font-body">{tool.description}</p>
                <div className="mt-4 text-xs font-semibold text-[#00D4FF] font-body">
                  ใช้ฟรี →
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 px-6 py-3 text-[#00D4FF] transition-all hover:bg-[#00D4FF]/20 font-body"
            >
              ดูเครื่องมือทั้งหมด 50+ ตัว →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
