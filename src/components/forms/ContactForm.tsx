'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { BUSINESS_TYPES } from '@/lib/constants'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      businessType: (form.elements.namedItem('business_type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (res.ok && json.success) {
        setStatus('success')
        form.reset()
      } else {
        setErrorMsg(json.error ?? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
        setStatus('error')
      }
    } catch {
      setErrorMsg('ไม่สามารถเชื่อมต่อได้ กรุณาตรวจสอบอินเทอร์เน็ตและลองใหม่อีกครั้ง')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#00D4FF]/30 bg-[#00D4FF]/5 p-10 text-center">
        <CheckCircle size={48} className="text-[#00D4FF]" />
        <h3 className="font-display text-xl font-bold text-white">ส่งข้อความเรียบร้อยแล้ว!</h3>
        <p className="text-[#A0A0B0] font-body">
          เราจะติดต่อกลับภายใน 24 ชั่วโมง ขอบคุณที่สนใจบริการของเรา
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#A0A0B0] font-body">
            ชื่อ-นามสกุล <span className="text-[#FF6B35]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="สมชาย ใจดี"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#60607A] outline-none transition-colors focus:border-[#00D4FF]/50 focus:bg-white/8 font-body"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#A0A0B0] font-body">
            อีเมล <span className="text-[#FF6B35]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="somchai@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#60607A] outline-none transition-colors focus:border-[#00D4FF]/50 focus:bg-white/8 font-body"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#A0A0B0] font-body">
          เบอร์โทรศัพท์
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="081-234-5678"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#60607A] outline-none transition-colors focus:border-[#00D4FF]/50 font-body"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#A0A0B0] font-body">
          ประเภทธุรกิจ <span className="text-[#FF6B35]">*</span>
        </label>
        <select
          name="business_type"
          required
          className="w-full rounded-xl border border-white/10 bg-[#12121A] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#00D4FF]/50 font-body appearance-none"
        >
          <option value="">เลือกประเภทธุรกิจ</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#A0A0B0] font-body">
          ปัญหาที่ต้องการแก้ไข <span className="text-[#FF6B35]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="เช่น ต้องการลดเวลางาน Manual, อยากเพิ่มยอดขายด้วย AI, ต้องการ SEO..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#60607A] outline-none transition-colors focus:border-[#00D4FF]/50 font-body resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl border border-[#FF6B35]/30 bg-[#FF6B35]/10 p-3">
          <AlertCircle size={16} className="text-[#FF6B35] flex-shrink-0" />
          <p className="text-sm text-[#FF6B35] font-body">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#00D4FF] px-6 py-4 font-display font-semibold text-[#0A0A0F] transition-all hover:bg-[#33DDFF] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A0F] border-t-transparent" />
            กำลังส่ง...
          </>
        ) : (
          <>
            <Send size={16} />
            ส่งข้อความ
          </>
        )}
      </button>

      <p className="text-center text-xs text-[#60607A] font-body">
        ตอบกลับภายใน 24 ชั่วโมง · ไม่มีข้อผูกมัด
      </p>
    </form>
  )
}
