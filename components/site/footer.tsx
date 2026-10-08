'use client'

import Link from 'next/link'
import {
  COPYRIGHT_YEAR,
  COMPANY_LEGAL_NAME,
  COMPANY_TAGLINE,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
} from '@/lib/site-facts'
import styles from './footer.module.css'

interface SiteFooterProps {
  showCta?: boolean
}

export function SiteFooter({ showCta = true }: SiteFooterProps) {
  return (
    <footer className={`${styles['footer-root']} footer-root`}>
      {/* 1. TOP VIBRANT ORANGE PRE-FOOTER CTA BANNER */}
      {showCta && (
        <div className={`${styles['footer-cta-banner']} footer-cta-banner`}>
          <svg
            viewBox="0 0 24 24"
            className={styles['footer-morph-icon']}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" className={styles['icon-head']} />
            <line x1="7" y1="17" x2="16" y2="8" className={styles['icon-stem']} strokeLinecap="square" />
          </svg>
          <Link href="/contact" className={styles['footer-cta-content']} aria-label="Contact WearGuard Engineering">
            <p className={styles['footer-cta-title']}>
              Ready to <span className={styles['cta-headline-accent']}>Extend Wear Life</span>{' '}
              <br className={styles['cta-desktop-br']} />
              Across Your Plant?
            </p>
          </Link>
        </div>
      )}

      {/* 2. MAIN FOOTER BODY (DARK VELVET WHITE-NOISE TEXTURE) */}
      <div className={`${styles['footer-main-dark']} footer-main-dark`}>
        <div className={styles['footer-inner-container']}>
          {/* TOP 3-COLUMN STRUCTURED GRID WITH CONNECTING VERTICAL HAIRLINES */}
          <div className={styles['footer-columns-grid']}>
            {/* COLUMN 1: TAGLINE & DIRECT CONTACT */}
            <div className={styles['footer-col-bio']}>
              <div className={styles['footer-bio-content']}>
                <div>
                  <h3 className={styles['footer-cta-statement']}>
                    Ready to eliminate plant downtime?
                  </h3>
                  <p className={styles['footer-bio-desc']}>
                    {COMPANY_TAGLINE}
                  </p>
                  <div className={styles['footer-brand-logo-wrap']} aria-label="WearGuard">
                    <img
                      src="/logo/final-logo-white.svg"
                      alt="WearGuard"
                      className={styles['footer-brand-logo']}
                      width={170}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles['footer-contact-block']}>
                  <a href={`mailto:${EMAIL}`} className={styles['footer-contact-link']}>
                    <span className={styles['footer-dot']} />
                    <span>{EMAIL}</span>
                  </a>
                  <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className={styles['footer-contact-link']}>
                    <span className={styles['footer-dot']} />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>

              <div className={styles['footer-legal-row']}>
                <Link href="/privacy" className={styles['footer-legal-link']}>Privacy Policy</Link>
                <span className={styles['footer-legal-sep']}>·</span>
                <Link href="/terms" className={styles['footer-legal-link']}>Terms</Link>
              </div>
            </div>

            {/* COLUMN 2: INDUSTRIES */}
            <div className={styles['footer-col-industries']}>
              <div className={styles['footer-sub-group']}>
                <Link href="/industries" className={styles['footer-group-label-link']}>
                  Industries
                </Link>
                <ul className={styles['footer-links-list']}>
                  <li>
                    <Link href="/industries/asphalt" className={styles['footer-nav-link']}>
                      Asphalt Plants
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/concrete" className={styles['footer-nav-link']}>
                      Concrete Batching
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/mining" className={styles['footer-nav-link']}>
                      Mining &amp; Quarrying
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/process-industries" className={styles['footer-nav-link']}>
                      Process Industries
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUMN 3: NAVIGATION */}
            <div className={styles['footer-col-right']}>
              <div className={styles['footer-sub-group']}>
                <p className={styles['footer-group-label']}>Navigation</p>
                <ul className={styles['footer-links-list']}>
                  <li>
                    <Link href="/about" className={styles['footer-nav-link']}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/applications" className={styles['footer-nav-link']}>
                      Wear Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/custom-parts" className={styles['footer-nav-link']}>
                      Custom Parts
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials" className={styles['footer-nav-link']}>
                      Materials &amp; Metallurgy
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={styles['footer-nav-link']}>
                      Request a Quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM SIGNATURE ROW: INDUSTRIAL REEL VIDEO + COLOSSAL WEARGUARD WORDMARK */}
          <Link href="/" className={styles['footer-colossal-link']} aria-label="WearGuard Home">
            <div className={styles['footer-brand-thumb-frame']}>
              <video
                src="/images/wearguard-hero-reel.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles['footer-brand-thumb-img']}
              />
            </div>
            <p className={styles['footer-colossal-wordmark']}>
              WEARGUARD
            </p>
          </Link>

          {/* 4. BOTTOM COPYRIGHT (CENTERED BENEATH COLOSSAL BRANDMARK) */}
          <div className={styles['footer-bottom-copyright']}>
            <span className={styles['footer-copyright']}>© {COPYRIGHT_YEAR} {COMPANY_LEGAL_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
