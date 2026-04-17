export const NAV_LINKS = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'บริการ', href: '/services' },
  { label: 'กรณีศึกษา', href: '/case-studies' },
  { label: 'เครื่องมือฟรี', href: '/tools' },
  { label: 'ติดต่อ', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'audit',
    icon: 'Search',
    title: 'AI Strategy & Audit',
    titleTh: 'วิเคราะห์และวางกลยุทธ์ AI',
    price: '฿15,000 – ฿50,000',
    unit: 'ต่อโปรเจกต์',
    description: 'วิเคราะห์กระบวนการธุรกิจทั้งหมด หาจุดที่ AI ช่วยได้ และวาง AI Roadmap ที่ปฏิบัติได้จริงสำหรับธุรกิจของคุณ',
    includes: [
      'Workshop 1 วัน กับทีมงานของคุณ',
      'รายงานวิเคราะห์ 20+ หน้า',
      'AI Roadmap 6-12 เดือน',
      'รายชื่อเครื่องมือ AI ที่เหมาะสม',
      'ประเมิน ROI เบื้องต้น',
      'Follow-up call 1 ครั้ง',
    ],
    forWho: 'เหมาะสำหรับธุรกิจที่อยากเริ่มต้นใช้ AI แต่ไม่รู้จะเริ่มจากไหน',
    color: 'accent',
  },
  {
    id: 'implementation',
    icon: 'Zap',
    title: 'AI Implementation',
    titleTh: 'ติดตั้งและพัฒนาระบบ AI',
    price: '฿30,000 – ฿150,000',
    unit: 'ต่อโปรเจกต์',
    description: 'ติดตั้งและพัฒนาระบบ AI จริง ตั้งแต่ AI Agent Teams, n8n Automation, SEO อัตโนมัติ ไปจนถึงการเชื่อมต่อระบบที่มีอยู่',
    includes: [
      'AI Agent Teams สำหรับงานซ้ำๆ',
      'n8n Automation Workflows',
      'เชื่อมต่อ Gmail, LINE, Stripe, CRM',
      'SEO อัตโนมัติ + ระบบสร้างคอนเทนต์',
      'Dashboard รายงานผลลัพธ์',
      'Training ทีมงาน 2 ชั่วโมง',
      'Support 30 วันหลังติดตั้ง',
    ],
    forWho: 'เหมาะสำหรับธุรกิจที่พร้อมลงมือทำ ต้องการเห็นผลจริงภายใน 30-60 วัน',
    color: 'secondary',
    featured: true,
  },
  {
    id: 'retainer',
    icon: 'RefreshCw',
    title: 'Monthly Retainer',
    titleTh: 'ดูแลระบบรายเดือน',
    price: '฿8,000 – ฿25,000',
    unit: 'ต่อเดือน',
    description: 'ดูแลระบบ AI และ Automation ที่ติดตั้งแล้ว พร้อม Weekly Report และ Support ไม่จำกัด ให้คุณมั่นใจว่าระบบทำงานได้เต็มประสิทธิภาพ',
    includes: [
      'ดูแลและ Monitor ระบบตลอด 24/7',
      'Weekly Performance Report',
      'Support ไม่จำกัด (LINE, Email)',
      'ปรับปรุง Workflow ตามความต้องการ',
      'Monthly Strategy Review 1 ชั่วโมง',
      'อัปเดตเครื่องมือ AI ใหม่ๆ',
    ],
    forWho: 'เหมาะสำหรับธุรกิจที่ต้องการพาร์ทเนอร์ AI ระยะยาว ไม่ต้องจ้างทีม IT เพิ่ม',
    color: 'accent',
  },
]

export const PAIN_POINTS = [
  {
    icon: 'DollarSign',
    title: 'จ้าง Agency แพง แต่ไม่รู้ว่าได้ผลแค่ไหน',
    description: 'เสียเงินหลักแสนต่อเดือน แต่ไม่มีตัวเลขพิสูจน์ว่าคุ้มค่า',
  },
  {
    icon: 'HelpCircle',
    title: 'อยากใช้ AI แต่ไม่รู้จะเริ่มจากไหน',
    description: 'มีข้อมูลมากเกินไป ไม่รู้เครื่องมือไหนเหมาะกับธุรกิจตัวเอง',
  },
  {
    icon: 'Building2',
    title: 'ระบบ IT ล้าสมัย งบประมาณจำกัด (อปท.)',
    description: 'ต้องการ Digital Transformation แต่ติดกฎระเบียบและงบฯ ที่จำกัด',
  },
  {
    icon: 'Clock',
    title: 'เสียเวลากับงาน Manual ที่ AI ทำแทนได้',
    description: 'งานซ้ำๆ กินเวลาทีมงานหลายชั่วโมงต่อวัน ทั้งที่ Automation ช่วยได้',
  },
]

export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  category: string
  isAvailable: boolean
  href?: string
}

const REAL_TOOLS: Tool[] = [
  {
    id: 'seo-audit',
    name: 'SEO Audit Tool',
    description: 'วิเคราะห์ SEO เว็บไซต์ของคุณฟรี หาจุดอ่อนและแนวทางแก้ไข',
    icon: 'Search',
    category: 'analytics',
    isAvailable: true,
    href: '#',
  },
  {
    id: 'meta-generator',
    name: 'Meta Tag Generator',
    description: 'สร้าง Meta Title และ Description ที่ดีต่อ SEO อัตโนมัติด้วย AI',
    icon: 'Tag',
    category: 'content',
    isAvailable: true,
    href: '#',
  },
  {
    id: 'competitor-analysis',
    name: 'Competitor Analysis',
    description: 'วิเคราะห์คู่แข่งในตลาด หา Gap และโอกาสทางธุรกิจ',
    icon: 'BarChart2',
    category: 'analytics',
    isAvailable: true,
    href: '#',
  },
  {
    id: 'ai-readiness',
    name: 'AI Readiness Assessment',
    description: 'ประเมินความพร้อมของธุรกิจในการนำ AI มาใช้ ใน 5 นาที',
    icon: 'CheckCircle',
    category: 'analytics',
    isAvailable: true,
    href: '#',
  },
  {
    id: 'roi-calculator',
    name: 'ROI Calculator for AI',
    description: 'คำนวณผลตอบแทนจากการลงทุนใน AI Automation',
    icon: 'Calculator',
    category: 'finance',
    isAvailable: true,
    href: '#',
  },
  {
    id: 'content-brief',
    name: 'Content Brief Generator',
    description: 'สร้าง Content Brief สำหรับบทความ SEO ภาษาไทยอัตโนมัติ',
    icon: 'FileText',
    category: 'content',
    isAvailable: true,
    href: '#',
  },
]

const COMING_SOON_NAMES = [
  'Keyword Research Tool', 'Landing Page Analyzer', 'Email Subject Generator',
  'Social Media Caption AI', 'Product Description Writer', 'FAQ Generator',
  'Chatbot Script Builder', 'Ad Copy Generator', 'Blog Title Generator',
  'Customer Persona Builder', 'SWOT Analysis AI', 'Business Name Generator',
  'Price Point Optimizer', 'Review Response Generator', 'Lead Magnet Creator',
  'Video Script Writer', 'Hashtag Generator', 'Press Release Writer',
  'Job Description Writer', 'Policy Document Generator', 'Invoice Template AI',
  'Budget Planner', 'KPI Dashboard Builder', 'Survey Question Generator',
  'Meeting Summary AI', 'Project Proposal Writer', 'Contract Clause Checker',
  'Tax Deduction Finder', 'Grant Application Helper', 'Pitch Deck Outline',
  'Market Size Calculator', 'Supplier Comparison Tool', 'Risk Assessment AI',
  'Employee Handbook Generator', 'Training Material Creator', 'Newsletter Builder',
  'Testimonial Request Writer', 'Referral Program Designer', 'Loyalty Program Builder',
  'Upsell Script Generator', 'Churn Prediction Tool', 'NPS Survey Creator',
  'Support Ticket Classifier', 'Knowledge Base Builder',
]

const COMING_SOON_ICONS = [
  'Lightbulb', 'Globe', 'Mail', 'Share2', 'ShoppingBag', 'MessageSquare',
  'Bot', 'Megaphone', 'PenTool', 'Users', 'TrendingUp', 'Sparkles',
  'DollarSign', 'Star', 'Gift', 'Video', 'Hash', 'Newspaper',
  'Briefcase', 'FileCheck', 'Receipt', 'PiggyBank', 'LayoutDashboard',
  'ClipboardList', 'Calendar', 'FolderOpen', 'Shield', 'Percent',
  'Award', 'Presentation', 'PieChart', 'Truck', 'AlertTriangle',
  'UserCheck', 'BookOpen', 'Mail', 'Heart', 'Link', 'Crown',
  'ArrowUp', 'Activity', 'Ticket', 'Database', 'BookMarked',
]

export const TOOLS: Tool[] = [
  ...REAL_TOOLS,
  ...COMING_SOON_NAMES.map((name, i) => ({
    id: `coming-soon-${i}`,
    name,
    description: 'เร็วๆ นี้ — เครื่องมือ AI ใหม่กำลังพัฒนา',
    icon: COMING_SOON_ICONS[i % COMING_SOON_ICONS.length],
    category: 'other',
    isAvailable: false,
  })),
]

export const CASE_STUDY = {
  title: 'บ้านพักผู้สูงอายุ เลิกจ้าง Agency ได้เลย',
  subtitle: 'สงกรานต์ 2569 — 5 วัน เปลี่ยนทุกอย่าง',
  story: 'เจ้าของธุรกิจบ้านพักผู้สูงอายุที่มีประสบการณ์ 20 ปี ไม่มีพื้นฐาน Code แม้แต่น้อย ใช้เวลาช่วงสงกรานต์เพียง 5 วัน ร่วมกับ Claude Code สร้างระบบ AI Automation ครบวงจร และเลิกพึ่ง Agency ที่เสียเงินหลักหมื่นต่อเดือนได้ทันที',
  timeline: [
    { day: 'วันที่ 1', event: 'Audit เว็บไซต์เดิม พบปัญหา TTFB 2.3 วินาที และ SEO ต่ำกว่า 60' },
    { day: 'วันที่ 2', event: 'ติดตั้ง Cloudflare + WP Super Cache + ปรับ GTM ให้ถูกต้อง' },
    { day: 'วันที่ 3', event: 'TTFB ลดเหลือ 96ms | SEO Score ขึ้น 100/100' },
    { day: 'วันที่ 4-5', event: 'สร้างบทความ SEO ด้วย AI 8 ชิ้น พร้อม Publish' },
  ],
  metrics: [
    { label: 'TTFB', before: '2.3s', after: '96ms', improvement: '96% เร็วขึ้น' },
    { label: 'SEO Score', before: '< 60', after: '100/100', improvement: 'คะแนนเต็ม' },
    { label: 'บทความ', before: '0 ชิ้น', after: '8 ชิ้น', improvement: 'ใน 5 วัน' },
    { label: 'Agency Fee', before: 'หลักหมื่น/เดือน', after: '฿0', improvement: 'ประหยัดได้' },
  ],
  tools: ['Claude Code', 'Cloudflare', 'WP Super Cache', 'Google Tag Manager', 'n8n'],
}

export const BUSINESS_TYPES = [
  'ร้านค้าปลีก / ร้านอาหาร',
  'โรงแรม / ที่พัก',
  'คลินิก / สถานพยาบาล',
  'ธุรกิจบริการ',
  'ธุรกิจครอบครัว / SME ทั่วไป',
  'เทศบาล / อบต. / อบจ.',
  'หน่วยงานรัฐ',
  'อื่นๆ',
]
