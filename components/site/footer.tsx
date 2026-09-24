'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

interface SiteFooterProps {
  showCta?: boolean
}

export function SiteFooter({ showCta = true }: SiteFooterProps) {
  return (
    <footer className={`${styles['footer-root']} footer-root`}>
      {/* 1. TOP VIBRANT ORANGE CTA BANNER */}
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
              Ready to <span className={styles['cta-headline-accent']}>Modernize Your</span>
              <br />
              Industrial Operations?
            </p>
          </Link>
        </div>
      )}

      {/* 2. MAIN FOOTER BODY */}
      <div className={`${styles['footer-main-dark']} footer-main-dark`}>
        <div className={styles['footer-main-grid']}>
          {/* COL 1: BRAND BIO & SLEEK SQUARE BACK TO TOP */}
          <div className={styles['footer-brand-col']}>
            <Link className={styles['footer-logo-link']} href="/" aria-label="WearGuard Home">
              <img
                src="/logo/wearwhite.svg"
                alt="WearGuard"
                className={styles['footer-brand-logo-img']}
                style={{ height: '38px', width: 'auto', maxHeight: '42px', objectFit: 'contain', display: 'block' }}
                width={130}
                height={38}
              />
            </Link>
            <p className={styles['footer-bio-text']}>
              Precision high-wear metallurgy &amp; bespoke cast components engineered to eliminate plant downtime.
            </p>
            <button
              type="button"
              className={styles['footer-square-btt']}
              aria-label="Scroll back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>

          {/* COL 2: NAVIGATION */}
          <div className={styles['footer-links-col']}>
            <h4>Navigation</h4>
            <ul className={styles['footer-links-list']}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/applications">Applications</Link></li>
              <li><Link href="/materials">Materials</Link></li>
              <li><Link href="/custom-parts">Custom Parts</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* COL 3: INDUSTRIES */}
          <div className={styles['footer-links-col']}>
            <h4>Industries</h4>
            <ul className={styles['footer-links-list']}>
              <li><Link href="/industries#asphalt-paving">Hot Mix Batching</Link></li>
              <li><Link href="/industries#concrete-batching">Concrete Industries</Link></li>
              <li><Link href="/industries#process-industries">Process Industries</Link></li>
              <li><Link href="/industries#mining-mineral">Mining &amp; Quarrying</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. FOOTER BOTTOM BAR */}
        <div className={styles['footer-bottom-bar']}>
          <div className={styles['footer-copyright']}>
            © 2026 WearGuard. All rights reserved.
          </div>

          <div className={styles['footer-legal-links']}>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles['footer-credit']}>Created by <strong>WearGuard</strong></span>
          </div>

          <div className={styles['footer-social-icons']}>
            <a href="https://www.linkedin.com/company/wearguard" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@wearguard" target="_blank" rel="noopener noreferrer nofollow" aria-label="YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
