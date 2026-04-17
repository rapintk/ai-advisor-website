import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CaseStudySection from '@/components/sections/CaseStudySection'
import AudienceSection from '@/components/sections/AudienceSection'
import PricingSection from '@/components/sections/PricingSection'
import ToolsTeaser from '@/components/sections/ToolsTeaser'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <CaseStudySection />
      <AudienceSection />
      <PricingSection />
      <ToolsTeaser />
      <CTASection />
    </>
  )
}
