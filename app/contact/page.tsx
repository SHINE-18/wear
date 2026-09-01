'use client'

import { useState } from 'react'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <main id="top" className="contact-page-root">
      <SiteNav />

      {/* LIGHT SLATE INDUSTRIAL CONTACT SECTION */}
      <section className="tilanium-contact-section">
        <div className="tilanium-contact-container">
          {/* LEFT COLUMN: HEADLINE & CONTACT METRICS */}
          <FadeUp className="tilanium-contact-left">
            <div className="tilanium-eyebrow">
              <span className="eyebrow-pipe" aria-hidden="true" />
              <span>Contact</span>
            </div>

            <h1 className="tilanium-title">
              Built for Reliable
              <br />
              <span className="title-muted">Partnerships</span>
            </h1>

            <div className="tilanium-info-list">
              <div className="tilanium-info-item">
                <div className="tilanium-label-wrap">
                  <span className="eyebrow-pipe" aria-hidden="true" />
                  <span className="tilanium-info-label">Phone</span>
                </div>
                <a href="tel:+61437433890" className="tilanium-info-val">
                  +61 437 433 890
                </a>
              </div>

              <div className="tilanium-info-item">
                <div className="tilanium-label-wrap">
                  <span className="eyebrow-pipe" aria-hidden="true" />
                  <span className="tilanium-info-label">Email</span>
                </div>
                <a href="mailto:engineering@wearguard.com.au" className="tilanium-info-val">
                  engineering@wearguard.com.au
                </a>
              </div>

              <div className="tilanium-info-item">
                <div className="tilanium-label-wrap">
                  <span className="eyebrow-pipe" aria-hidden="true" />
                  <span className="tilanium-info-label">Address</span>
                </div>
                <div className="tilanium-info-val address-val">
                  2450 Industrial Park Drive
                  <br />
                  Melbourne, VIC 3000 Australia
                </div>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT COLUMN: LEAD STATEMENT & FORM */}
          <FadeUp delay={0.1} className="tilanium-contact-right">
            <p className="tilanium-form-lead">
              Have questions about your project, production process, or technical requirements? Our team is ready to help.
            </p>

            {sent ? (
              <div className="tilanium-form-success">
                <h3>Message Received.</h3>
                <p>An application engineer will review your inquiry and respond within 24 business hours.</p>
                <button
                  type="button"
                  className="tilanium-reset-btn"
                  onClick={() => setSent(false)}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                className="tilanium-contact-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <div className="form-two-col">
                  <label className="tilanium-field-label">
                    Full name
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      className="tilanium-input"
                    />
                  </label>

                  <label className="tilanium-field-label">
                    Email
                    <input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="tilanium-input"
                    />
                  </label>
                </div>

                <label className="tilanium-field-label">
                  Your Message
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, or technical requirements..."
                    className="tilanium-textarea"
                  />
                </label>

                <button type="submit" className="tilanium-submit-btn">
                  <span>Submit</span>
                  <span className="tilanium-submit-corner" aria-hidden="true">⌝</span>
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      <SiteFooter showCta={false} />
    </main>
  )
}
