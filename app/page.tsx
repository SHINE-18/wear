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
import { FAQSection } from '@/components/site/faq-section'
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
              <h4>Custom Metallurgy</h4>
              <p>High-chrome &amp; manganese alloys formulated for severe abrasion &amp; impact zones.</p>
            </div>
            <div className="about-pillar-card">
              <h4>OEM Interchangeability</h4>
              <p>Precise 3D scanning &amp; reverse engineering guarantees 100% fit accuracy.</p>
            </div>
            <div className="about-pillar-card">
              <h4>6–8 Wk Turnaround</h4>
              <p>Small batch flexibility (1–10 units) through to plant-wide fleet restocking.</p>
            </div>
            <div className="about-pillar-card">
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
      </section>

      <section id="industries" className="industries-stack-section section-light">
        <IndustryStackingCards />
      </section>

      <section id="applications" className="applications section-dark">
        <ApplicationInspector applications={applications} />
      </section>

      <section id="materials" className="materials section-slate">
        <div className="materials-sticky-layout">
          {/* LEFT: PINNED / STICKY HEADLINE & INTRO */}
          <div className="materials-sticky-left">
            <FadeUp>
              <SectionLabel>Materials &amp; engineered alloys</SectionLabel>
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

          {/* RIGHT: DESKTOP SCROLLABLE 3 VERTICAL PRODUCT CARDS */}
          <div className="materials-scroll-list home-materials-desktop-only">
            {/* CARD 01 */}
            <FadeUp className="material-scroll-card">
              <div className="material-scroll-header">
                <h3>WearGuard Designed &amp; Cut to Shape Parts</h3>
                <div className="material-badge-group">
                  <span className="material-spec-pill">P400–P500 Q&amp;T</span>
                  <span className="material-badge">400–500 BHN</span>
                </div>
              </div>

              <div className="material-specimen-frame">
                <img src="/images/hardfaced-plate.webp" alt="WearGuard Designed & Cut to Shape Parts" />
                <div className="specimen-crosshair-tag">[CROSS-SECTION: CNC PROFILE &amp; BEVEL]</div>
              </div>

              <p className="material-scroll-desc">
                High-durability precision profiled wear steel, CNC bevelled, drilled, and rolled to exact machine tolerances for chutes, hoppers, and impact decks.
              </p>

              <div className="material-editorial-specs">
                <div className="editorial-spec-row">
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Hardness Rating</span>
                    <span className="editorial-spec-val">400–500 BHN (Quenched &amp; Tempered)</span>
                  </div>
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Impact Toughness</span>
                    <span className="editorial-spec-val">45 J @ -20°C (Charpy V-Notch)</span>
                  </div>
                </div>
                <div className="editorial-spec-row">
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Service Life</span>
                    <span className="editorial-spec-val">3.5x Extension vs Carbon Steel</span>
                  </div>
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Machining &amp; Fit</span>
                    <span className="editorial-spec-val">Pre-Drilled Countersunk &amp; Bevelled</span>
                  </div>
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
                <h3>EnduraCast Z-Core Liners</h3>
                <div className="material-badge-group">
                  <span className="material-spec-pill">MATRIX COMPOSITE</span>
                  <span className="material-badge">Z-CORE HYBRID</span>
                </div>
              </div>

              <div className="material-specimen-frame">
                <img src="/images/ceramic-liners.webp" alt="EnduraCast Z-Core Liners" />
                <div className="specimen-crosshair-tag">[CROSS-SECTION: CERAMIC-ELASTOMER BOND]</div>
              </div>

              <p className="material-scroll-desc">
                Ultra-tough hybrid liners engineered with specialized abrasion-resistant matrix for severe high-velocity slurry, sliding aggregate, and pneumatic wear zones.
              </p>

              <div className="material-editorial-specs">
                <div className="editorial-spec-row">
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Matrix Metallurgy</span>
                    <span className="editorial-spec-val">92% Al₂O₃ Ceramic + Matrix</span>
                  </div>
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Impact Absorption</span>
                    <span className="editorial-spec-val">High-Elastic Shock Damping</span>
                  </div>
                </div>
                <div className="editorial-spec-row">
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Slurry Velocity</span>
                    <span className="editorial-spec-val">Rated up to 28 m/s Resistance</span>
                  </div>
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Wear Factor</span>
                    <span className="editorial-spec-val">3x to 5x vs Mild Carbon Steel</span>
                  </div>
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
                <h3>Wearcast Foundry Castings</h3>
                <div className="material-badge-group">
                  <span className="material-spec-pill">CR 15–28% / NI-HARD</span>
                  <span className="material-badge">550–650+ BHN</span>
                </div>
              </div>

              <div className="material-specimen-frame">
                <img src="/images/material-technologies-whole-set.webp" alt="Wearcast Grades" />
                <div className="specimen-crosshair-tag">[CROSS-SECTION: EUTECTIC ALLOY CASTING]</div>
              </div>

              <p className="material-scroll-desc">
                Proprietary foundry cast alloys (Ni-Hard and High-Chrome) engineered for maximum hardness in continuous crushing, grinding, and severe erosive environments.
              </p>

              <div className="material-editorial-specs">
                <div className="editorial-spec-row">
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Hardness Range</span>
                    <span className="editorial-spec-val">550–650+ BHN (58–64 HRC)</span>
                  </div>
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Alloy System</span>
                    <span className="editorial-spec-val">High-Chrome (Cr 15–28%) &amp; Ni-Hard</span>
                  </div>
                </div>
                <div className="editorial-spec-row">
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Thermal Rating</span>
                    <span className="editorial-spec-val">Up to 950°C Continuous Service</span>
                  </div>
                  <div className="editorial-spec-col">
                    <span className="editorial-spec-label">Assembly Fit</span>
                    <span className="editorial-spec-val">Direct Match for Crushers &amp; Mills</span>
                  </div>
                </div>
              </div>

              <div className="material-card-footer">
                <Button href="/contact">
                  Enquire on Cast Grades
                </Button>
                <Link href="/materials" className="about-sub-link">
                  <span>Explore foundry capabilities</span>
                  <Arrow />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* MOBILE VIEW: COLLAPSIBLE DROPDOWN ACCORDION CARDS */}
          <div className="home-materials-mobile-accordion-group">
            {[
              {
                id: 'plate',
                title: 'WearGuard Designed & Cut to Shape Parts',
                pill: 'P400–P500 Q&T',
                badge: '400–500 BHN',
                img: '/images/hardfaced-plate.webp',
                desc: 'High-durability precision profiled wear steel, CNC bevelled, drilled, and rolled to exact machine tolerances for chutes, hoppers, and impact decks.',
                specs: [
                  { label: 'Hardness', val: '400–500 BHN' },
                  { label: 'Impact', val: '45 J @ -20°C' },
                  { label: 'Service Life', val: '3.5x Extension' },
                  { label: 'Fit', val: 'Pre-Drilled & Bevelled' },
                ],
                cta: 'Request Cut-to-Shape Quote',
              },
              {
                id: 'zcore',
                title: 'EnduraCast Z-Core Liners',
                pill: 'MATRIX COMPOSITE',
                badge: 'Z-CORE HYBRID',
                img: '/images/ceramic-liners.webp',
                desc: 'Ultra-tough hybrid liners engineered with specialized abrasion-resistant matrix for severe high-velocity slurry, sliding aggregate, and pneumatic wear zones.',
                specs: [
                  { label: 'Matrix', val: '92% Al₂O₃ Ceramic' },
                  { label: 'Shock', val: 'High-Elastic Damping' },
                  { label: 'Velocity', val: 'Up to 28 m/s' },
                  { label: 'Wear Factor', val: '3x–5x vs Carbon' },
                ],
                cta: 'Enquire on Z-Core Liners',
              },
              {
                id: 'castings',
                title: 'Wearcast Foundry Castings',
                pill: 'CR 15–28% / NI-HARD',
                badge: '550–650+ BHN',
                img: '/images/material-technologies-whole-set.webp',
                desc: 'Proprietary foundry cast alloys (Ni-Hard and High-Chrome) engineered for maximum hardness in continuous crushing, grinding, and severe erosive environments.',
                specs: [
                  { label: 'Hardness', val: '550–650+ BHN' },
                  { label: 'Alloy System', val: 'High-Cr & Ni-Hard' },
                  { label: 'Thermal Limit', val: 'Up to 950°C' },
                  { label: 'Assembly', val: 'Direct Crusher Match' },
                ],
                cta: 'Enquire on Cast Grades',
              },
            ].map((card, idx) => {
              const isOpen = annual === (idx === 0) ? (annual ? false : true) : faq === idx
              // we can use a dedicated state or local state

              return (
                <div key={card.id} className={`home-mat-accordion-card ${faq === idx ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="home-mat-accordion-header"
                    onClick={() => setFaq(faq === idx ? -1 : idx)}
                    aria-expanded={faq === idx}
                  >
                    <div className="home-mat-title-wrap">
                      <strong>{card.title}</strong>
                      <div className="home-mat-badge-row">
                        <span className="mat-pill">{card.pill}</span>
                        <span className="mat-bhn">{card.badge}</span>
                      </div>
                    </div>
                    <span className="home-mat-chevron" aria-hidden="true">
                      {faq === idx ? '▲' : '▼'}
                    </span>
                  </button>

                  {faq === idx && (
                    <div className="home-mat-accordion-body">
                      <div className="home-mat-body-inner">
                        <p className="home-mat-desc">{card.desc}</p>

                        <div className="home-mat-spec-matrix">
                          {card.specs.map((sp, sIdx) => (
                            <div key={sIdx} className="home-mat-spec-cell">
                              <span className="lbl">{sp.label}</span>
                              <strong className="val">{sp.val}</strong>
                            </div>
                          ))}
                        </div>

                        <div className="home-mat-img-frame">
                          <img src={card.img} alt={card.title} />
                        </div>

                        <div className="home-mat-action-btn">
                          <Button href="/contact">{card.cta}</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CUSTOM ENGINEERING OVERVIEW WITH SCROLL TRANSITION */}
      <CustomPartsOverview />

      {/* INDUSTRIAL PROCESS TIMELINE WITH SCROLL-LINKED FILLING BAR */}
      <ProcessTimeline />

      {/* FAQ / QUESTIONS SECTION WITH ANIMATED MOVING BORDERS */}
      <FAQSection />

      <SiteFooter />
    </div>
  </main>
)
}
