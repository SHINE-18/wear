'use client'

import { useState } from 'react'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { Arrow, SectionLabel } from '@/components/site/ui'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <main id="top">
      <SiteNav />
      <section className="contact-hero section-slate">
        <FadeUp>
          <SectionLabel>Engineering enquiry</SectionLabel>
          <h1>
            Ready to
            <br />
            outlast the <em>grind?</em>
          </h1>
          <p>Tell us about your equipment, operating conditions and wear challenge. We&apos;ll help identify the right path forward.</p>
        </FadeUp>
      </section>

      <section id="contact" className="contact section-orange">
        <FadeUp>
          <SectionLabel>Direct contact</SectionLabel>
          <h2>
            Speak with an
            <br />
            <em>engineer.</em>
          </h2>
          <p>Share your equipment specifications, part numbers, drawings or CAD models. Our technical team is ready to analyze your application.</p>
          
          <ul className="contact-details">
            <li>
              <a href="mailto:engineering@wearguard.com.au">engineering@wearguard.com.au</a>
            </li>
            <li>
              <a href="tel:+61437433890">+61 437 433 890</a>
            </li>
          </ul>

          <div className="contact-meta-badge">
            <span aria-hidden="true" />
            <span>24-Hour Engineering Response Guaranteed</span>
          </div>

          <div className="contact-hubs">
            <strong>Headquarters & Dispatch:</strong>
            Melbourne, Australia — Serving National & Global Industrial Sites
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          {sent ? (
            <div className="form-success">
              <h3>Enquiry sent.</h3>
              <p>Our engineering team will review your specifications and be in touch within 24 business hours.</p>
            </div>
          ) : (
            <form
              className="contact-form-container"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <label>
                Enquiry Type
                <select defaultValue="engineering">
                  <option value="engineering">General Engineering Enquiry</option>
                  <option value="cad">Reverse Engineering / CAD Quote</option>
                  <option value="spare-parts">Replacement Wear Parts Order</option>
                  <option value="site-audit">On-Site Wear & Maintenance Audit</option>
                </select>
              </label>
              <label>
                Name
                <input required placeholder="Your name" />
              </label>
              <label>
                Company
                <input placeholder="Company or site name" />
              </label>
              <label>
                Email
                <input required type="email" placeholder="you@company.com" />
              </label>
              <label>
                What can we help with?
                <textarea required placeholder="Tell us about your application, equipment model, and wear challenges..." rows={4} />
              </label>

              <label>
                Drawing / Spec Sheet Attachment (Optional)
                <div className="file-upload-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span>Attach 2D/3D Drawings or CAD (.step, .dwg, .dxf, .pdf)</span>
                  <small>Files up to 25MB supported</small>
                  <input type="file" style={{ display: 'none' }} />
                </div>
              </label>

              <button className="submit" type="submit">
                Send enquiry <Arrow />
              </button>
            </form>
          )}
        </FadeUp>
      </section>

      <SiteFooter />
    </main>
  )
}
