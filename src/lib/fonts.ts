import { Prompt, Sarabun } from 'next/font/google'

export const promptFont = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-prompt',
  display: 'swap',
  preload: true,
})

export const sarabunFont = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sarabun',
  display: 'swap',
  preload: true,
})
