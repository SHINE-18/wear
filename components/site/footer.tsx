'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './ui'

interface SiteFooterProps {
  showCta?: boolean
}

export function SiteFooter({ showCta = true }: SiteFooterProps) {
  return (
    <footer className="footer-root">
      {/* 1. TOP VIBRANT ORANGE CTA BANNER */}
      {showCta && (
        <div className="footer-cta-banner">
          <svg
            viewBox="0 0 24 24"
            className="footer-morph-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" className="icon-head" />
            <line x1="7" y1="17" x2="17" y2="7" className="icon-stem" />
          </svg>
          <Link href="/contact" className="footer-cta-content" aria-label="Contact WearGuard Engineering">
            <h2>
              Ready to <span className="cta-headline-accent">Modernize</span> Your
              <br />
              Industrial Operations?
            </h2>
          </Link>
        </div>
      )}

      {/* 2. MAIN FOOTER BODY */}
      <div className="footer-main-dark">
        <div className="footer-main-grid">
          {/* COL 1: BRAND BIO & SLEEK SQUARE BACK TO TOP */}
          <div className="footer-brand-col">
            <Link className="footer-logo-link" href="/" aria-label="WearGuard Home">
              <img
                src="/images/screen.svg"
                alt="WearGuard"
                className="footer-brand-logo-img"
                style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </Link>
            <p className="footer-bio-text">
              Precision high-wear metallurgy &amp; bespoke cast components engineered to eliminate plant downtime.
            </p>
            <button
              type="button"
              className="footer-square-btt"
              aria-label="Scroll back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>

          {/* COL 2: NAVIGATION */}
          <div className="footer-links-col">
            <h4>Navigation</h4>
            <ul className="footer-links-list">
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
          <div className="footer-links-col">
            <h4>Industries</h4>
            <ul className="footer-links-list">
              <li><Link href="/industries#asphalt-paving">Asphalt Plants</Link></li>
              <li><Link href="/industries#concrete-batching">Concrete Batching</Link></li>
              <li><Link href="/industries#process-industries">Process Industries</Link></li>
              <li><Link href="/industries#mining-mineral">Mining &amp; Quarrying</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. FOOTER BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 WearGuard. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link href="/contact">Terms of Use</Link>
            <Link href="/contact">Privacy Policy</Link>
            <span className="footer-credit">Created by <strong>WearGuard</strong></span>
          </div>

          <div className="footer-social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X / Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
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
