'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0F]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-800 text-white">
          <span className="text-[#00D4FF]">AI</span>
          <span className="text-white/40">•</span>
          <span>ADV</span>
          <span className="ml-1 h-2 w-2 rounded-full bg-[#00D4FF] animate-pulse-glow" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200 font-body',
                pathname === link.href
                  ? 'text-[#00D4FF]'
                  : 'text-[#A0A0B0] hover:text-[#F0F0F0]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-[#00D4FF] px-4 py-2 text-sm font-semibold text-[#0A0A0F] transition-all duration-200 hover:bg-[#33DDFF] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            ปรึกษาฟรี
          </Link>
        </nav>

        <button
          className="flex items-center justify-center rounded-lg border border-white/10 p-2 text-[#A0A0B0] transition-colors hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0A0A0F]/95 px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-base font-medium font-body py-2',
                  pathname === link.href ? 'text-[#00D4FF]' : 'text-[#A0A0B0]'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[#00D4FF] px-4 py-3 text-center text-sm font-semibold text-[#0A0A0F]"
            >
              ขอรับคำปรึกษาฟรี 30 นาที
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
