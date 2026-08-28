'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CinematicHero } from '@/components/site/cinematic-hero'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp, Marquee, ParallaxImage, Stagger, StaggerItem } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { ApplicationInspector } from '@/components/site/application-inspector'
import { CustomPartsOverview } from '@/components/site/custom-parts-overview'
import { IndustryStackingCards } from '@/components/site/stacking-cards'
import { ProcessTimeline } from '@/components/site/process-timeline'
import { aboutImage, applications, faqs, industries, materials, tickerItems } from '@/lib/site-data'

export default function Page() {
  const [faq, setFaq] = useState(0)
  const [annual, setAnnual] = useState(false)

  return (
    <main id="top">
      <SiteNav />

      <CinematicHero />

      <div className="page-content-layer">
        {/* <Marquee items={tickerItems} speed={36} /> */}

        <section id="about-us" className="about section-slate-steel">
        <FadeUp className="about-copy">
          <SectionLabel>Engineering Excellence</SectionLabel>
          <h2>
            Driven by precision.
            <br />
            Powered by experience.
          </h2>
          <p className="about-lead">
            WearGuard engineers and manufactures bespoke wear-resistant castings, custom-profile liners, and high-impact alloys for critical machinery across asphalt, concrete, mining, and heavy process industries.
          </p>

          <div className="about-pillars">
            <div className="about-pillar-card">
              <span className="pillar-num">01</span>
              <h4>Custom Metallurgy</h4>
              <p>High-chrome & manganese alloys formulated for severe abrasion & impact zones.</p>
            </div>
            <div className="about-pillar-card">
              <span className="pillar-num">02</span>
              <h4>OEM Interchangeability</h4>
              <p>Precise 3D scanning & reverse engineering guarantees 100% fit accuracy.</p>
            </div>
            <div className="about-pillar-card">
              <span className="pillar-num">03</span>
              <h4>6–8 Wk Turnaround</h4>
              <p>Small batch flexibility (1–10 units) through to plant-wide fleet restocking.</p>
            </div>
            <div className="about-pillar-card">
              <span className="pillar-num">04</span>
              <h4>Lifecycle Analysis</h4>
              <p>Proven 20%–60% wear life improvement reducing costly unscheduled downtime.</p>
            </div>
          </div>

          <div className="about-cta-row">
            <Button dark href="/about">
              Learn our process
            </Button>
            <Link href="/contact" className="about-sub-link">
              <span>Request technical consultation</span>
              <Arrow />
            </Link>
          </div>
        </FadeUp>

        <div className="about-image-frame">
          <div className="about-image">
            <ParallaxImage src={aboutImage} alt="WearGuard engineered wear plates and industrial components" className="media-fill" />
            <div className="about-img-badge">
              <span className="badge-spec">SPECIFICATION</span>
              <strong>WG-A420 Chrome-Carbide</strong>
            </div>
            <span className="image-note">
              Application-Specific
              <br />
              Engineering
            </span>
          </div>
        </div>
      </section>

      <section id="industries" className="industries-stack-section section-light">
        <IndustryStackingCards />
      </section>

      <section id="applications" className="applications section-dark">
        <FadeUp className="section-heading">
          <SectionLabel>Application Engineering</SectionLabel>
          <h2>
            Protection where
            <br />
            <em>wear happens.</em>
          </h2>
          <p>
            Explore the 4 primary high-wear operational assemblies engineered to eliminate maintenance downtime. Scroll through each stage to inspect technical metallurgy and component assemblies.
          </p>
        </FadeUp>

        <ApplicationInspector applications={applications} />

        <div className="page-link-row">
          <Button dark href="/applications">
            View all applications & components
          </Button>
        </div>
      </section>

      <section id="materials" className="materials section-slate">
        <div className="materials-sticky-layout">
          {/* LEFT: PINNED / STICKY HEADLINE & INTRO */}
          <div className="materials-sticky-left">
            <FadeUp>
              <SectionLabel>Materials & engineered alloys</SectionLabel>
              <h2>
                The right material
                <br />
                for the <em>right wear zone.</em>
              </h2>
              <p className="materials-sticky-lead">
                Technology is selected according to impact, abrasion, erosion, temperature, corrosion, material flow, and service-life targets.
              </p>
              <div className="materials-left-action">
                <Button href="/materials">
                  Explore all material metallurgy
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: SCROLLABLE 3 VERTICAL PRODUCT CARDS */}
          <div className="materials-scroll-list">
            {/* CARD 01 */}
            <FadeUp className="material-scroll-card">
              <div className="material-scroll-header">
                <div>
                  <span className="material-card-num">01</span>
                  <h3>WearGuard Designed & Cut to Shape Parts</h3>
                </div>
                <span className="material-badge">400–500 BHN</span>
              </div>

              <div className="material-scroll-img-wrap">
                <img src="/images/hardfaced-plate.webp" alt="WearGuard Designed & Cut to Shape Parts" />
              </div>

              <p className="material-scroll-desc">
                High-durability precision profiled wear steel, CNC bevelled, drilled, and rolled to exact machine tolerances for chutes, hoppers, and impact decks.
              </p>

              <div className="material-features-grid">
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Custom CNC profiling, drilling & rolling</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>P400, P450 & P500 quenched & tempered plate</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Direct OEM replacement for chutes, bins & skirts</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Ready-to-install with pre-drilled countersunk holes</span>
                </div>
              </div>

              <div className="material-card-footer">
                <Button href="/contact">
                  Request Cut-to-Shape Quote
                </Button>
                <Link href="/materials" className="about-sub-link">
                  <span>View plate metallurgy</span>
                  <Arrow />
                </Link>
              </div>
            </FadeUp>

            {/* CARD 02 */}
            <FadeUp className="material-scroll-card">
              <div className="material-scroll-header">
                <div>
                  <span className="material-card-num">02</span>
                  <h3>EnduraCast Z-Core Liners - Tough Specially Abrasion Resistant Lined Parts</h3>
                </div>
                <span className="material-badge">Z-CORE HYBRID</span>
              </div>

              <div className="material-scroll-img-wrap">
                <img src="/images/ceramic-liners.webp" alt="EnduraCast Z-Core Liners - Tough specially abrasion resistant lined parts" />
              </div>

              <p className="material-scroll-desc">
                Ultra-tough hybrid liners engineered with specialized abrasion-resistant matrix for severe high-velocity slurry, sliding aggregate, and pneumatic wear zones.
              </p>

              <div className="material-features-grid">
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Ceramic-composite matrix with elastic backing</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Designed for severe high-velocity slurry & fine aggregate</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Damps catastrophic mechanical impact and vibration</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>3x to 5x lifespan extension over standard mild steel</span>
                </div>
              </div>

              <div className="material-card-footer">
                <Button href="/contact">
                  Enquire on Z-Core Liners
                </Button>
                <Link href="/materials" className="about-sub-link">
                  <span>Explore composite specs</span>
                  <Arrow />
                </Link>
              </div>
            </FadeUp>

            {/* CARD 03 */}
            <FadeUp className="material-scroll-card">
              <div className="material-scroll-header">
                <div>
                  <span className="material-card-num">03</span>
                  <h3>Wearcast Grades</h3>
                </div>
                <span className="material-badge">550–650+ BHN</span>
              </div>

              <div className="material-scroll-img-wrap">
                <img src="/images/material-technologies-whole-set.webp" alt="Wearcast Grades" />
              </div>

              <p className="material-scroll-desc">
                Proprietary foundry cast alloys (Ni-Hard and High-Chrome) engineered for maximum hardness in continuous crushing, grinding, and severe erosive environments.
              </p>

              <div className="material-features-grid">
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>High-Chrome (Cr 15–28%) & Ni-Hard foundry castings</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Maximum resistance to severe gouging and abrasion</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Stable metallurgical structure up to 950°C</span>
                </div>
                <div className="material-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Reverse-engineered for crushers, mills & mixer blades</span>
                </div>
              </div>

              <div className="material-card-footer">
                <Button href="/contact">
                  Enquire on Cast Grades
                </Button>
                <Link href="/materials" className="about-sub-link">
                  <span>View foundry alloy grades</span>
                  <Arrow />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CUSTOM ENGINEERING OVERVIEW WITH SCROLL TRANSITION */}
      <CustomPartsOverview />

      {/* FAQ / QUESTIONS SECTION */}
      <section className="faq-section section-light">
        <div className="faq-stage">
          {/* LEFT: STICKY TITLE & ENGINEER SUPPORT */}
          <div className="faq-left-col">
            <FadeUp>
              <SectionLabel>Questions & Support</SectionLabel>
              <h2>
                Frequently asked
                <br />
                <em>questions.</em>
              </h2>
              <p className="faq-lead-text">
                Clear technical answers on custom metallurgy, lead times, interchangeability, and global delivery.
              </p>

              <div className="faq-help-card">
                <strong>Have a custom challenge?</strong>
                <p>Speak directly with our technical metallurgy and reverse engineering specialists.</p>
                <Button href="/contact">
                  Talk to an Engineer
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: ACCORDION LIST */}
          <div className="faq-list-wrap">
            {faqs.map((item, i) => (
              <FadeUp key={item.q} className={`faq-accordion-card ${faq === i ? 'selected' : ''}`}>
                <button onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i}>
                  <span>{item.q}</span>
                  <span className="faq-toggle-icon">{faq === i ? '−' : '+'}</span>
                </button>
                {faq === i && (
                  <p className="faq-answer">{item.a}</p>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL PROCESS TIMELINE WITH SCROLL-LINKED FILLING BAR */}
      <ProcessTimeline />

      <SiteFooter />
    </div>
  </main>
)
}
