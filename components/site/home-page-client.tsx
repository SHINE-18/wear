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
import styles from './home-page-client.module.css'

interface MaterialCardItem {
  id: string
  title: string
  subtitle: string
  specimenImg: string
  plantImg: string
  desc: string
  specs: { label: string; val: string }[]
  cta: string
}

const materialCards: MaterialCardItem[] = [
  {
    id: 'plate',
    title: 'WearPlate™ 400/500 — Precision Profiled Steel',
    subtitle: 'Through-Hardened Quenched & Tempered Martensitic Plate',
    specimenImg: '/images/materials-plate-specimen.jpg',
    plantImg: '/images/materials-plate-plant.jpg',
    desc: 'High-durability precision profiled wear steel, CNC bevelled, drilled, and rolled to exact machine tolerances for chutes, hoppers, and impact decks.',
    specs: [
      { label: 'Hardness Rating', val: '400–500 BHN (Quenched & Tempered)' },
      { label: 'Impact Toughness', val: '45 J @ -20°C (Charpy V-Notch)' },
      { label: 'Service Life', val: '3.5x Extension vs Carbon Steel' },
      { label: 'Machining & Fit', val: 'Pre-Drilled Countersunk & Bevelled' },
    ],
    cta: 'Request Cut-to-Shape Quote',
  },
  {
    id: 'ceramic',
    title: 'EnduraCast™ Ceramic — Shock-Damped Hybrid Liners',
    subtitle: 'High-Alumina Hexagonal Tiles Vulcanized in Rubber',
    specimenImg: '/images/materials-ceramic-specimen.jpg',
    plantImg: '/images/materials-ceramic-plant.jpg',
    desc: 'Ultra-tough hybrid liners engineered with specialized abrasion-resistant matrix for severe high-velocity slurry, sliding aggregate, and pneumatic wear zones.',
    specs: [
      { label: 'Matrix Metallurgy', val: '92% Al₂O₃ Ceramic + Matrix' },
      { label: 'Impact Absorption', val: 'High-Elastic Shock Damping' },
      { label: 'Slurry Velocity', val: 'Rated up to 28 m/s Resistance' },
      { label: 'Wear Factor', val: '3x to 5x vs Mild Carbon Steel' },
    ],
    cta: 'Enquire on Z-Core Liners',
  },
  {
    id: 'castings',
    title: 'WearCast™ Alloys — High-Chrome & Ni-Hard Castings',
    subtitle: 'Martensitic White Iron & 28% Chrome Foundry Alloys',
    specimenImg: '/images/materials-cast-specimen.jpg',
    plantImg: '/images/materials-cast-plant.jpg',
    desc: 'Proprietary foundry cast alloys (Ni-Hard and High-Chrome) engineered for maximum hardness in continuous crushing, grinding, and severe erosive environments.',
    specs: [
      { label: 'Hardness Range', val: '550–650+ BHN (58–64 HRC)' },
      { label: 'Alloy System', val: 'High-Chrome (Cr 15–28%) & Ni-Hard' },
      { label: 'Thermal Rating', val: 'Up to 950°C Continuous Service' },
      { label: 'Assembly Fit', val: 'Direct Match for Crushers & Mills' },
    ],
    cta: 'Enquire on Cast Grades',
  },
]

export function HomePageClient() {
  const [faq, setFaq] = useState(0)
  const [annual, setAnnual] = useState(false)
  const [cardViewOverrides, setCardViewOverrides] = useState<{ [key: string]: 'specimen' | 'plant' | null }>({
    plate: null,
    ceramic: null,
    castings: null,
  })

  return (
    <main id="top">
      <SiteNav />

      <CinematicHero />

      <div className={`${styles.pageContentLayer} page-content-layer`}>
        {/* <Marquee items={tickerItems} speed={36} /> */}

        <section id="about-us" className={`${styles.aboutSection} about section-slate-steel`}>
          <div className={styles.aboutGrid}>
            <FadeUp className={styles.aboutLeft}>
              <SectionLabel>About Us</SectionLabel>
              <h2 className={styles.aboutSplitTitle}>
                Driven by <span className={styles.aboutMutedWord}>Precision.</span> Powered
                <br />
                by <span className={styles.aboutMutedWord}>Experience.</span>
              </h2>

              <div className={styles.aboutHatchBar} aria-hidden="true" />

              <p className={styles.aboutSplitLead}>
                We deliver high-quality industrial solutions designed to meet the demands of modern production. From engineering to execution, our focus is on efficiency, reliability, and long-term performance.
              </p>

              <div className={styles.aboutCtaRow}>
                <Link href="/about" className={styles.aboutLearnMoreLink}>
                  <span>Learn More</span>
                  <Arrow />
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className={styles.aboutRight}>
              <div className={styles.aboutImageFrame}>
                <img
                  src="/images/workplace-cad-meeting.jpg"
                  alt="WearGuard engineering team in technical CAD consultation session"
                  width={1200}
                  height={800}
                  className={styles.aboutPhoto}
                />
              </div>
            </FadeUp>
          </div>
        </section>

      <section id="industries" className={`${styles.industriesStackSection} industries-stack-section section-light`}>
        <IndustryStackingCards />
      </section>

      <section id="applications" className={`${styles.applicationsSection} applications section-dark`}>
        <ApplicationInspector applications={applications} />
      </section>

      <section id="materials" className={`${styles.materialsSection} materials section-slate`}>
        <div className={styles.materialsStickyLayout}>
          {/* LEFT: PINNED / STICKY HEADLINE & INTRO */}
          <div className={styles.materialsStickyLeft}>
            <FadeUp>
              <SectionLabel>Materials &amp; engineered alloys</SectionLabel>
              <h2>
                The right material
                <br />
                for the <em>right wear zone.</em>
              </h2>
              <p className={styles.materialsStickyLead}>
                Technology is selected according to impact, abrasion, erosion, temperature, corrosion, material flow, and service-life targets.
              </p>
              <div className={styles.materialsLeftAction}>
                <Button href="/materials" magnetic={false}>
                  Explore all material metallurgy
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: DESKTOP SCROLLABLE 3 VERTICAL PRODUCT CARDS */}
          <div className={`${styles.materialsScrollList} ${styles.homeMaterialsDesktopOnly}`}>
            {materialCards.map((card) => {
              const viewLock = cardViewOverrides[card.id]
              return (
                <FadeUp key={card.id} className={styles.materialScrollCard} data-pinned={viewLock}>
                  <div className={styles.materialScrollHeader}>
                    <h3>{card.title}</h3>
                    <p className={styles.materialCardSubtitle}>{card.subtitle}</p>
                  </div>

                  {/* DUAL-VIEW SPECIMEN & IN-PLANT WEAR ZONE FRAME */}
                  <div className={styles.materialSpecimenFrame}>
                    <img
                      src={card.specimenImg}
                      alt={`${card.title} Lab Specimen`}
                      width={616}
                      height={464}
                      className={styles.specimenImgLayer}
                    />
                    <img
                      src={card.plantImg}
                      alt={`${card.title} In-Plant Wear Zone`}
                      width={616}
                      height={464}
                      className={styles.plantImgLayer}
                    />
                  </div>

                  <p className={styles.materialScrollDesc}>{card.desc}</p>

                  {/* EDITORIAL SPECS TABLE */}
                  <div className={styles.materialEditorialSpecs}>
                    <div className={styles.editorialSpecRow}>
                      <div className={styles.editorialSpecCol}>
                        <span className={styles.editorialSpecLabel}>{card.specs[0].label}</span>
                        <span className={styles.editorialSpecVal}>{card.specs[0].val}</span>
                      </div>
                      <div className={styles.editorialSpecCol}>
                        <span className={styles.editorialSpecLabel}>{card.specs[1].label}</span>
                        <span className={styles.editorialSpecVal}>{card.specs[1].val}</span>
                      </div>
                    </div>
                    <div className={styles.editorialSpecRow}>
                      <div className={styles.editorialSpecCol}>
                        <span className={styles.editorialSpecLabel}>{card.specs[2].label}</span>
                        <span className={styles.editorialSpecVal}>{card.specs[2].val}</span>
                      </div>
                      <div className={styles.editorialSpecCol}>
                        <span className={styles.editorialSpecLabel}>{card.specs[3].label}</span>
                        <span className={styles.editorialSpecVal}>{card.specs[3].val}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.materialCardFooter}>
                    <Button href="/contact" magnetic={false}>{card.cta}</Button>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          {/* MOBILE VIEW: COLLAPSIBLE DROPDOWN ACCORDION CARDS */}
          <div className={styles.homeMaterialsMobileAccordionGroup}>
            {materialCards.map((card, idx) => {
              const isOpen = faq === idx
              const viewLock = cardViewOverrides[card.id]

              return (
                <div key={card.id} className={`${styles.homeMatAccordionCard} ${isOpen ? styles.isOpen : ''}`}>
                  <button
                    type="button"
                    className={styles.homeMatAccordionHeader}
                    onClick={() => setFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.homeMatTitleWrap}>
                      <strong>{card.title}</strong>
                    </div>
                    <span className={styles.homeMatChevron} aria-hidden="true">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.homeMatAccordionBody}>
                      <div className={styles.homeMatBodyInner}>
                        <p className={styles.homeMatDesc}>{card.desc}</p>

                        {/* MOBILE DUAL-VIEW FRAME */}
                        <div
                          className={styles.materialSpecimenFrame}
                          data-view={viewLock || 'auto'}
                          style={{ height: '220px', marginBottom: '1rem', cursor: 'pointer' }}
                          onClick={() => {
                            setCardViewOverrides((prev) => ({
                              ...prev,
                              [card.id]: prev[card.id] === 'plant' ? 'specimen' : 'plant',
                            }))
                          }}
                        >
                          <img
                            src={card.specimenImg}
                            alt={`${card.title} Specimen`}
                            width={616}
                            height={464}
                            className={styles.specimenImgLayer}
                          />
                          <img
                            src={card.plantImg}
                            alt={`${card.title} In-Plant`}
                            width={616}
                            className={styles.plantImgLayer}
                          />
                        </div>

                        <div className={styles.homeMatSpecMatrix}>
                          {card.specs.map((sp, sIdx) => (
                            <div key={sIdx} className={styles.homeMatSpecCell}>
                              <span className="lbl">{sp.label}</span>
                              <strong className="val">{sp.val}</strong>
                            </div>
                          ))}
                        </div>

                        <div className={styles.homeMatActionBtn}>
                          <Button href="/contact" magnetic={false}>{card.cta}</Button>
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
