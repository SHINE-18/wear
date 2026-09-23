'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import styles from './contact-page-client.module.css'

const INQUIRY_TYPES = [
  '3D Laser Scan & Audit',
  'Custom Alloy Casting',
  'Small-Batch Run (1–10)',
  'Urgent Breakdown Repair',
]

export function ContactPageClient() {
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0])
  const [sent, setSent] = useState(false)
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [equipment, setEquipment] = useState('')
  const [message, setMessage] = useState('')

  const { scrollY } = useScroll()
  const heroParallaxY = useTransform(scrollY, [0, 700], [0, 140])
  const heroOpacity = useTransform(scrollY, [120, 650], [1, 0.45])
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.98])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main id="top" className={`${styles['contact-page-root']} contact-page-root`}>
      <SiteNav />

      {/* 1. TOP LIGHT STEEL-SLATE HERO (DIRECT ENGINEERING CONTACT - STICKY CURTAIN UNDERLAYER) */}
      <section className={styles['contact-hero-light-section']}>
        <motion.div
          className={styles['contact-hero-light-container']}
          style={{ y: heroParallaxY, opacity: heroOpacity, scale: heroScale }}
        >
          <FadeUp className={styles['contact-hero-light-header']}>
            <div className={styles['contact-eyebrow-badge']}>
              <span className={styles['eyebrow-dot']} aria-hidden="true" />
              <span>DIRECT ENGINEERING CONTACT</span>
            </div>

            <h1 className={styles['contact-hero-title']}>
              Let&apos;s Talk
              <br />
              Direct <span className={styles['title-muted-slate']}>Engineering</span>
            </h1>

            <p className={styles['contact-hero-lead']}>
              Connect directly with our metallurgy and wear design specialists in Melbourne. No commission sales reps — work straight with the engineers who fabricate your parts.
            </p>
          </FadeUp>

          {/* 3 DIRECT CONTACT CARDS IN 3-COLUMN INDUSTRIAL GRID */}
          <FadeUp delay={0.08} className={styles['contact-direct-cards-grid']}>
            <div className={styles['contact-direct-card']}>
              <div className={styles['card-top-tag']}>
                <span className={styles['tag-pipe']} />
                <span>DIRECT METALLURGIST LINE</span>
              </div>
              <a href="tel:+61437433890" className={styles['card-primary-val']}>
                +61 437 433 890
              </a>
              <span className={styles['card-sub-info']}>Available 08:00–18:00 AEST for plant emergency audits</span>
            </div>

            <div className={styles['contact-direct-card']}>
              <div className={styles['card-top-tag']}>
                <span className={styles['tag-pipe']} />
                <span>CAD &amp; TOOLING INBOX</span>
              </div>
              <a href="mailto:engineering@wearguard.com.au" className={styles['card-primary-val']}>
                engineering@wearguard.com.au
              </a>
              <span className={styles['card-sub-info']}>Direct engineering dispatch · Guaranteed &lt; 24 hr review</span>
            </div>

            <div className={styles['contact-direct-card']}>
              <div className={styles['card-top-tag']}>
                <span className={styles['tag-pipe']} />
                <span>WORKS &amp; PATTERN FACILITY</span>
              </div>
              <div className={`${styles['card-primary-val']} ${styles['card-address']}`}>
                2450 Industrial Park Drive
                <br />
                Melbourne, VIC 3000 Australia
              </div>
              <span className={styles['card-sub-info']}>Pattern tooling, CMM verification, and alloy test lab</span>
            </div>
          </FadeUp>
        </motion.div>
      </section>

      {/* 2. BOTTOM DARK VELVET WHITE-NOISE TECHNICAL RFQ FORM SECTION */}
      <section className={styles['contact-form-dark-section']}>
        <div className={styles['contact-form-dark-container']}>
          {/* LEFT: RFQ SUBMISSION GUIDELINES */}
          <FadeUp className={styles['contact-specs-col']}>
            <div className={styles['specs-eyebrow-badge']}>
              <span className={styles['eyebrow-dot']} aria-hidden="true" />
              <span>DRAWINGS &amp; SPECIFICATIONS</span>
            </div>

            <h2 className={styles['specs-title']}>
              What our engineers need
              <br />
              to <em>quote your part.</em>
            </h2>

            <p className={styles['specs-lead']}>
              We fabricate directly from 3D CAD files (.STEP / .IGES), 2D workshop drawings (.DWG / .PDF), or worn physical castings sent to our Melbourne pattern works.
            </p>

            <div className={styles['specs-checklist']}>
              <div className={styles['specs-check-item']}>
                <span className={styles['chk-icon']}>✓</span>
                <div>
                  <strong>Drawing &amp; CAD Data</strong>
                  <p>.STEP, .IGES, 2D .DWG / .PDF, or photos of worn sample.</p>
                </div>
              </div>
              <div className={styles['specs-check-item']}>
                <span className={styles['chk-icon']}>✓</span>
                <div>
                  <strong>Operating Conditions</strong>
                  <p>Tonnage per hour, material lump size (mm), moisture, and abrasion type.</p>
                </div>
              </div>
              <div className={styles['specs-check-item']}>
                <span className={styles['chk-icon']}>✓</span>
                <div>
                  <strong>Current Wear Lifespan</strong>
                  <p>Where premature thinning occurs and current OEM changeout intervals.</p>
                </div>
              </div>
              <div className={styles['specs-check-item']}>
                <span className={styles['chk-icon']}>✓</span>
                <div>
                  <strong>Batch Volume</strong>
                  <p>Trial batch (1–10 units) or scheduled campaign maintenance inventory.</p>
                </div>
              </div>
            </div>

            <div className={styles['specs-assistance-card']}>
              <div className={styles['assistance-badge']}>SCAN &amp; REVERSE ENGINEERING</div>
              <strong>Don&apos;t have drawings or CAD files?</strong>
              <p>
                Our engineering team can reverse-engineer directly from physical worn components. We offer on-site 3D laser-scanning or sample metallurgical alloy analysis at our Melbourne laboratory.
              </p>
            </div>
          </FadeUp>

          {/* RIGHT COLUMN: CAD-BORDERED RFQ INQUIRY FORM */}
          <FadeUp delay={0.12} className={styles['contact-form-col']}>
            <div className={styles['contact-form-card']}>
              <div className={styles['form-card-header']}>
                <h3>Submit Engineering RFQ</h3>
                <p>Provide your part requirements or request a drawing review. A metallurgical engineer will respond within 24 hours.</p>
              </div>

              {sent ? (
                <div className={styles['contact-form-success']}>
                  <div className={styles['success-icon-box']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8370B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>RFQ Submitted Successfully</h3>
                  <p>A WearGuard metallurgical engineer will review your operational requirements and get back to you within 24 business hours.</p>
                  <button
                    type="button"
                    className={styles['contact-reset-btn']}
                    onClick={() => {
                      setSent(false)
                      setFullName('')
                      setCompany('')
                      setEmail('')
                      setPhone('')
                      setEquipment('')
                      setMessage('')
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className={styles['contact-cad-form']} onSubmit={handleSubmit}>
                  {/* INQUIRY CATEGORY PILLS */}
                  <div className={styles['inquiry-type-group']}>
                    <span className={styles['field-group-label']}>PROJECT TYPE</span>
                    <div className={styles['inquiry-pills-row']}>
                      {INQUIRY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`${styles['inquiry-pill']} ${selectedType === type ? styles['active'] : ''}`}
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* FORM FIELDS */}
                  <div className={styles['form-fields-grid']}>
                    <div className={styles['form-row-two']}>
                      <label className={styles['cad-field-label']}>
                        <span>Full Name *</span>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Marcus Vance"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={styles['cad-input']}
                        />
                      </label>

                      <label className={styles['cad-field-label']}>
                        <span>Company / Plant Name *</span>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Apex Asphalt Ltd"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className={styles['cad-input']}
                        />
                      </label>
                    </div>

                    <div className={styles['form-row-two']}>
                      <label className={styles['cad-field-label']}>
                        <span>Work Email *</span>
                        <input
                          required
                          type="email"
                          placeholder="marcus@apexasphalt.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={styles['cad-input']}
                        />
                      </label>

                      <label className={styles['cad-field-label']}>
                        <span>Phone / Direct Line</span>
                        <input
                          type="tel"
                          placeholder="+61 400 000 000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={styles['cad-input']}
                        />
                      </label>
                    </div>

                    <label className={styles['cad-field-label']}>
                      <span>Machinery / Equipment Type</span>
                      <input
                        type="text"
                        placeholder="e.g. Ammann 4-Ton Pugmill Mixer / Barmac VSI Crusher"
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value)}
                        className={styles['cad-input']}
                      />
                    </label>

                    <label className={styles['cad-field-label']}>
                      <span>Wear Challenge / Operating Scope *</span>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe the operational wear issue, current OEM part lifespan, machinery model, or target alloy (e.g. Ni-Hard, high-chrome white iron)..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles['cad-textarea']}
                      />
                    </label>
                  </div>

                  {/* SUBMIT BUTTON WITH DIAGONAL STRIPES AND SHARP MORPH ICON */}
                  <button type="submit" className={styles['contact-submit-cta']}>
                    <span className={styles['cta-label']}>Submit Engineering RFQ</span>
                    <svg
                      viewBox="0 0 24 24"
                      className={styles['contact-arrow-icon']}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" className={`${styles['icon-head']} icon-head`} />
                      <line x1="7" y1="17" x2="16" y2="8" className={`${styles['icon-stem']} icon-stem`} strokeLinecap="square" />
                    </svg>
                  </button>

                  <div className={styles['form-security-note']}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Strict Commercial Confidentiality: Drawings, CAD models, and operational specs are protected under mutual NDA.</span>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>

        {/* AUSTRALIAN MANUFACTURING & LOGISTICS DISPATCH STRIP */}
        <div className={styles['contact-dispatch-strip']}>
          <div className={styles['dispatch-strip-inner']}>
            <span className={styles['dispatch-item']}><strong>MELBOURNE FOUNDRY (HQ)</strong> Pattern Shop &amp; Alloy Lab</span>
            <span className={styles['dispatch-divider']}>/</span>
            <span className={styles['dispatch-item']}><strong>SYDNEY LOGISTICS</strong> East Coast Spares Hub</span>
            <span className={styles['dispatch-divider']}>/</span>
            <span className={styles['dispatch-item']}><strong>BRISBANE</strong> Quarry &amp; Asphalt Distribution</span>
            <span className={styles['dispatch-divider']}>/</span>
            <span className={styles['dispatch-item']}><strong>PERTH</strong> Mining &amp; Bulk Handling Depot</span>
            <span className={styles['dispatch-divider']}>/</span>
            <span className={styles['dispatch-item']}><strong>NATIONWIDE FREIGHT</strong> Express Mine-Site Dispatch</span>
          </div>
        </div>
      </section>

      <SiteFooter showCta={false} />
    </main>
  )
}
