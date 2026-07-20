import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { AboutSection } from '@/components/about-section'
import { FounderSection } from '@/components/founder-section'
import { PracticesSection } from '@/components/practices-section'
import { StatsBand } from '@/components/stats-band'
import { ApproachSection } from '@/components/approach-section'
import { CasesSection } from '@/components/cases-section'
import { InsightsSection } from '@/components/insights-section'
import { TeamSection } from '@/components/team-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeStrip />
        <AboutSection />
        <FounderSection />
        <PracticesSection />
        <StatsBand />
        <ApproachSection />
        <CasesSection />
        <TeamSection />
        <TestimonialsSection />
        <InsightsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
