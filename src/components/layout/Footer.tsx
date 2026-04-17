import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0F]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="text-[#00D4FF]">AI</span>
              <span className="text-white/40">•</span>
              <span>ADV</span>
            </div>
            <p className="text-sm leading-relaxed text-[#A0A0B0] font-body">
              ที่ปรึกษา AI และ Automation ครบวงจร<br />
              สำหรับ SME ไทยและ อปท.<br />
              พิสูจน์ผลได้จริง ราคาสมเหตุสมผล
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#60607A]">
              เมนู
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#A0A0B0] transition-colors hover:text-[#00D4FF] font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#60607A]">
              ติดต่อ
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[#A0A0B0] font-body">
              <a href="mailto:hello@ai-advisor.th" className="transition-colors hover:text-[#00D4FF]">
                hello@ai-advisor.th
              </a>
              <a href="https://line.me/ti/p/~@ai-advisor" className="transition-colors hover:text-[#00D4FF]">
                LINE OA: @ai-advisor
              </a>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-[#00D4FF]/30 px-4 py-2 text-[#00D4FF] transition-all hover:bg-[#00D4FF]/10"
              >
                ขอรับคำปรึกษาฟรี →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-[#60607A] font-body">
          จัดทำด้วย Claude Code | AI &amp; Automation Advisor © 2569
        </div>
      </div>
    </footer>
  )
}
