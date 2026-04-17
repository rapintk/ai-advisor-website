export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Consultant'],
  name: 'AI & Automation Advisor Thailand',
  description: 'ที่ปรึกษา AI และ Automation สำหรับ SME ไทยและองค์กรปกครองส่วนท้องถิ่น (อปท.) ช่วยลดต้นทุน เพิ่มประสิทธิภาพ และแข่งขันได้ในยุค AI',
  url: 'https://ai-advisor.th',
  email: 'hello@ai-advisor.th',
  telephone: '+66-XX-XXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TH',
    addressLocality: 'Thailand',
  },
  areaServed: 'TH',
  serviceType: ['AI Consulting', 'AI Automation', 'Digital Transformation', 'SEO', 'n8n Automation'],
  priceRange: '฿฿',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Business Automation', 'SEO', 'Thai SME', 'อปท.'],
}
