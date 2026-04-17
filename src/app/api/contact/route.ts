export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, businessType, message } = await req.json()

    if (!name || !email || !businessType || !message) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rapintk@gmail.com',
      replyTo: email,
      subject: `[AI Advisor] ข้อความจาก ${name} - ${businessType}`,
      html: `
        <!DOCTYPE html>
        <html lang="th">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;padding:0;background:#0A0A0F;font-family:'Sarabun',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0F;padding:32px 16px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#12121A;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:600px;width:100%;">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(255,107,53,0.1));padding:32px 32px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
                      <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#00D4FF;">AI &amp; AUTOMATION ADVISOR</p>
                      <h1 style="margin:0;font-size:22px;font-weight:700;color:#F0F0F0;line-height:1.3;">ข้อความใหม่จากลูกค้า</h1>
                      <p style="margin:8px 0 0;font-size:13px;color:#A0A0B0;">ได้รับผ่านแบบฟอร์มติดต่อบนเว็บไซต์</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:32px;">

                      <!-- Sender info -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                        <tr>
                          <td style="background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.15);border-radius:12px;padding:20px;">
                            <p style="margin:0 0 12px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#00D4FF;">ข้อมูลผู้ส่ง</p>
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                                  <span style="font-size:12px;color:#60607A;width:100px;display:inline-block;">ชื่อ-นามสกุล</span>
                                  <span style="font-size:14px;font-weight:600;color:#F0F0F0;">${name}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                                  <span style="font-size:12px;color:#60607A;width:100px;display:inline-block;">อีเมล</span>
                                  <a href="mailto:${email}" style="font-size:14px;font-weight:600;color:#00D4FF;text-decoration:none;">${email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                                  <span style="font-size:12px;color:#60607A;width:100px;display:inline-block;">เบอร์โทร</span>
                                  <span style="font-size:14px;font-weight:600;color:#F0F0F0;">${phone || '—'}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:6px 0;">
                                  <span style="font-size:12px;color:#60607A;width:100px;display:inline-block;">ประเภทธุรกิจ</span>
                                  <span style="font-size:13px;font-weight:600;color:#FF6B35;background:rgba(255,107,53,0.1);border:1px solid rgba(255,107,53,0.2);border-radius:20px;padding:2px 10px;">${businessType}</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                        <tr>
                          <td>
                            <p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#A0A0B0;">ปัญหาที่ต้องการแก้ไข</p>
                            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-left:3px solid #00D4FF;border-radius:0 8px 8px 0;padding:16px 20px;">
                              <p style="margin:0;font-size:14px;line-height:1.7;color:#F0F0F0;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: ข้อความจาก ${encodeURIComponent(name)}"
                               style="display:inline-block;background:#00D4FF;color:#0A0A0F;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">
                              ตอบกลับ ${name}
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">
                      <p style="margin:0;font-size:11px;color:#60607A;">AI &amp; Automation Advisor · hello@ai-advisor.th</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      return NextResponse.json({ error: 'ไม่สามารถส่งอีเมลได้ กรุณาลองใหม่อีกครั้ง' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' }, { status: 500 })
  }
}
