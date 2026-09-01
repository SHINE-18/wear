'use client'

import { useState } from 'react'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'

const INQUIRY_TYPES = [
  '3D Laser Scan & Audit',
  'Custom Alloy Casting',
  'Small-Batch Run (1–10)',
  'Urgent Breakdown Repair',
]

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0])
  const [sent, setSent] = useState(false)
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [equipment, setEquipment] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main id="top" className="contact-page-root">
      <SiteNav />

      {/* CLEAN EDITORIAL SPLIT CONTACT SECTION */}
      <section className="contact-editorial-section">
        <div className="contact-editorial-container">
          {/* LEFT COLUMN: EDITORIAL HEADLINE & DIRECT METALLURGIST CARDS */}
          <FadeUp className="contact-editorial-left">
            <div className="contact-eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span>DIRECT ENGINEERING CONTACT</span>
            </div>

            <h1 className="contact-editorial-title">
              Let&apos;s Talk
              <br />
              Direct <span className="title-muted-slate">Engineering</span>
            </h1>

            <p className="contact-editorial-lead">
              Connect directly with our metallurgy and wear design specialists in Melbourne. No commission sales reps — work straight with the engineers who fabricate your parts.
            </p>

            {/* DIRECT CONTACT CARDS */}
            <div className="contact-direct-cards-grid">
              <div className="contact-direct-card">
                <div className="card-top-tag">
                  <span className="tag-pipe" />
                  <span>DIRECT METALLURGIST LINE</span>
                </div>
                <a href="tel:+61437433890" className="card-primary-val">
                  +61 437 433 890
                </a>
                <span className="card-sub-info">Available 08:00–18:00 AEST for plant emergency audits</span>
              </div>

              <div className="contact-direct-card">
                <div className="card-top-tag">
                  <span className="tag-pipe" />
                  <span>CAD & TOOLING INBOX</span>
                </div>
                <a href="mailto:engineering@wearguard.com.au" className="card-primary-val">
                  engineering@wearguard.com.au
                </a>
                <span className="card-sub-info">Direct engineering dispatch · Guaranteed &lt; 24 hr review</span>
              </div>

              <div className="contact-direct-card">
                <div className="card-top-tag">
                  <span className="tag-pipe" />
                  <span>WORKS & PATTERN FACILITY</span>
                </div>
                <div className="card-primary-val card-address">
                  2450 Industrial Park Drive
                  <br />
                  Melbourne, VIC 3000 Australia
                </div>
                <span className="card-sub-info">Pattern tooling, CMM verification, and alloy test lab</span>
              </div>
            </div>

            {/* SLA TELEMETRY BADGE */}
            <div className="contact-telemetry-banner">
              <div className="telemetry-live-dot" />
              <div className="telemetry-text">
                <strong>GUARANTEED 24-HOUR RFQ RESPONSE</strong>
                <span>All CAD models, wear photos, and part specs evaluated same-day</span>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT COLUMN: CAD-BORDERED RFQ INQUIRY FORM */}
          <FadeUp delay={0.12} className="contact-editorial-right">
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3>Submit Technical RFQ</h3>
                <p>Attach your operational specs or request a drawing reverse-engineering review.</p>
              </div>

              {sent ? (
                <div className="contact-form-success">
                  <div className="success-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D94B2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>RFQ Transmitted Successfully.</h3>
                  <p>A senior WearGuard wear engineer will review your operational parameters and contact you within 24 business hours.</p>
                  <button
                    type="button"
                    className="contact-reset-btn"
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
                <form className="contact-cad-form" onSubmit={handleSubmit}>
                  {/* INQUIRY CATEGORY PILLS */}
                  <div className="inquiry-type-group">
                    <span className="field-group-label">INQUIRY DISCIPLINE</span>
                    <div className="inquiry-pills-row">
                      {INQUIRY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`inquiry-pill ${selectedType === type ? 'active' : ''}`}
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* FORM FIELDS */}
                  <div className="form-fields-grid">
                    <div className="form-row-two">
                      <label className="cad-field-label">
                        <span>Full Name *</span>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Marcus Vance"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="cad-input"
                        />
                      </label>

                      <label className="cad-field-label">
                        <span>Company / Plant Name *</span>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Apex Asphalt Ltd"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="cad-input"
                        />
                      </label>
                    </div>

                    <div className="form-row-two">
                      <label className="cad-field-label">
                        <span>Work Email *</span>
                        <input
                          required
                          type="email"
                          placeholder="marcus@apexasphalt.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="cad-input"
                        />
                      </label>

                      <label className="cad-field-label">
                        <span>Phone / Direct Line</span>
                        <input
                          type="tel"
                          placeholder="+61 400 000 000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="cad-input"
                        />
                      </label>
                    </div>

                    <label className="cad-field-label">
                      <span>Machinery / Equipment Type</span>
                      <input
                        type="text"
                        placeholder="e.g. Ammann 4-Ton Pugmill Mixer / Barmac VSI Crusher"
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value)}
                        className="cad-input"
                      />
                    </label>

                    <label className="cad-field-label">
                      <span>Wear Challenge / Project Scope *</span>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe the operational wear failure, current OEM part lifespan, alloy target (e.g. Ni-Hard / Chrome), or required quantity..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="cad-textarea"
                      />
                    </label>
                  </div>

                  {/* SUBMIT BUTTON WITH DIAGONAL STRIPES AND MORPH ICON */}
                  <button type="submit" className="contact-submit-cta">
                    <span className="cta-label">Transmit Technical RFQ</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="contact-arrow-icon"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" className="icon-head" />
                      <line x1="7" y1="17" x2="17" y2="7" className="icon-stem" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>

        {/* GLOBAL COORDINATES DISPATCH STRIP */}
        <div className="contact-dispatch-strip">
          <div className="dispatch-strip-inner">
            <span className="dispatch-item"><strong>MELBOURNE (HQ)</strong> 37.8136° S, 144.9631° E</span>
            <span className="dispatch-divider">/</span>
            <span className="dispatch-item"><strong>SYDNEY HUB</strong> 33.8688° S, 151.2093° E</span>
            <span className="dispatch-divider">/</span>
            <span className="dispatch-item"><strong>BRISBANE</strong> 27.4698° S, 153.0251° E</span>
            <span className="dispatch-divider">/</span>
            <span className="dispatch-item"><strong>PERTH</strong> 31.9505° S, 115.8605° E</span>
            <span className="dispatch-divider">/</span>
            <span className="dispatch-item"><strong>GLOBAL AIR &amp; OCEAN FREIGHT</strong></span>
          </div>
        </div>
      </section>

      <SiteFooter showCta={false} />
    </main>
  )
}
