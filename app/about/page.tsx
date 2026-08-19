import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp, Stagger, StaggerItem } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { aboutImage, faqs, whyPoints } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About WearGuard | Metallurgical Engineering & Wear Solutions',
  description: 'WearGuard engineers and manufactures custom wear-resistant components, specialized metallurgy, and wear solutions for demanding industrial plants.',
}

export default function AboutPage() {
  return (
    <main id="top">
      <SiteNav />
      <PageHero
        eyebrow="Engineering Heritage"
        title={
          <>
            Driven by precision.
            <br />
            Powered by <em>metallurgy.</em>
          </>
        }
        image={aboutImage}
        imageAlt="Engineering team collaborating around industrial plans"
        badge="20+ years heavy industry experience"
      />

      {/* --- MANIFESTO & PHILOSOPHY --- */}
      <section className="about-manifesto-section section-light">
        <div className="manifesto-split-layout">
          <FadeUp className="manifesto-split-left">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2>
              We solve the wear zone,
              <br />
              not just the <em>part number.</em>
            </h2>
            <p className="manifesto-lead-p">
              WearGuard was established with a single engineering focus: eliminating recurring plant downtime caused by generic OEM parts.
            </p>
            <p className="manifesto-body-p">
              Off-the-shelf components are manufactured to average tolerances using standardized low-cost alloys. When exposed to high-velocity silica aggregate, severe pugmill grinding, or 800°C thermal cycling, standard parts fail predictably.
            </p>
            <p className="manifesto-body-p">
              We analyze the true tribological wear mechanism — impact fracture, micro-gouging, fine-slurry erosion, or chemical corrosion — and formulate bespoke wear alloys that dramatically extend service intervals.
            </p>
            <div className="manifesto-action-wrap">
              <Button href="/contact">Talk to a Metallurgist</Button>
            </div>
          </FadeUp>

          <FadeUp className="manifesto-split-right">
            <div className="about-stats-matrix">
              <div className="about-stat-item">
                <span className="stat-num-large">6–8</span>
                <span className="stat-unit">WEEKS</span>
                <p>Standard lead time from confirmed drawing to delivered part</p>
              </div>
              <div className="about-stat-item">
                <span className="stat-num-large">1–10</span>
                <span className="stat-unit">UNITS</span>
                <p>Small-batch manufacturing flexibility without OEM minimum order surcharges</p>
              </div>
              <div className="about-stat-item">
                <span className="stat-num-large">60%</span>
                <span className="stat-unit">LONGER LIFE</span>
                <p>Documented wear improvement across severe aggregate & pugmill service</p>
              </div>
              <div className="about-stat-item">
                <span className="stat-num-large">100%</span>
                <span className="stat-unit">INSPECTED</span>
                <p>Full CMM dimensional verification & certified hardness test reports</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* --- 3 CORE ENGINEERING PILLARS --- */}
      <section className="about-pillars-section section-dark">
        <FadeUp className="section-heading">
          <SectionLabel>Foundational Standards</SectionLabel>
          <h2>
            Built for <em>operational results.</em>
          </h2>
          <p>
            Three uncompromising engineering principles that distinguish WearGuard across the heavy industrial manufacturing sector.
          </p>
        </FadeUp>

        <Stagger className="why-grid">
          {whyPoints.map((point) => (
            <StaggerItem key={point.n} className="why-card">
              <span className="why-num-pill">{point.n}</span>
              <h3>{point.t}</h3>
              <p>{point.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* --- TECHNICAL FAQ --- */}
      <section className="about-faq-section section-light">
        <div className="faq-stage">
          <FadeUp className="faq-left-col">
            <SectionLabel>FAQ & Engineering Insights</SectionLabel>
            <h2>
              Frequently asked
              <br />
              <em>questions.</em>
            </h2>
            <p>
              Everything you need to know about working with WearGuard, submitting reverse-engineering drawings, and scheduling alloy trials.
            </p>
            <div className="faq-left-action">
              <Button href="/contact">Contact Support</Button>
            </div>
          </FadeUp>

          <div className="faq-accordion-col">
            {faqs.map((faq, i) => (
              <FadeUp key={i} className="faq-card-item">
                <div className="faq-q-row">
                  <span className="faq-num">0{i + 1}</span>
                  <h3>{faq.q}</h3>
                </div>
                <p className="faq-answer">{faq.a}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="page-cta section-dark">
        <h2>
          Ready to eliminate your <em>wear bottlenecks?</em>
        </h2>
        <p style={{ color: '#8c92a4', maxWidth: '34rem', margin: '1rem auto 2.5rem', lineHeight: 1.6 }}>
          Direct technical consultation with experienced metallurgists and mechanical engineers.
        </p>
        <Button href="/contact">Start an Enquiry</Button>
      </section>

      <SiteFooter />
    </main>
  )
}
