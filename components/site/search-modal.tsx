'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { applications } from '@/lib/site-data'
import styles from './search-modal.module.css'

interface SearchItem {
  type: 'Page' | 'Application' | 'Material'
  title: string
  subtitle: string
  href: string
}

const staticSearchItems: SearchItem[] = [
  { type: 'Page', title: 'Industries Overview', subtitle: 'Mining, Asphalt, Cement, Recycling & Energy solutions', href: '/industries' },
  { type: 'Page', title: 'Materials & Metallurgy', subtitle: 'Hardox 450/500, Chromium Carbide, Hi-Chrome White Iron', href: '/materials' },
  { type: 'Page', title: 'Custom Engineering & CAD', subtitle: 'Foundry casting, custom CAD drafting, 3D scanning', href: '/custom-parts' },
  { type: 'Page', title: 'About WearGuard', subtitle: 'Manufacturing facility, metallurgy standards, quality assurance', href: '/about' },
  { type: 'Page', title: 'Get a Quote / Contact', subtitle: 'Request technical quotes, CAD reviews, plant audits', href: '/contact' },
  { type: 'Material', title: 'Hardox® 450 / 500 Wear Plate', subtitle: 'Abrasion resistant quench-and-tempered martensitic steel', href: '/materials' },
  { type: 'Material', title: 'Chromium Carbide Overlay (CCO)', subtitle: 'Extreme sliding abrasion protection up to 600°C', href: '/materials' },
  { type: 'Material', title: 'High-Chrome White Iron (27% Cr)', subtitle: 'ASTM A532 Class III Type A for severe abrasive impact', href: '/materials' },
  { type: 'Material', title: 'Austenitic Manganese (Hadfield Steel)', subtitle: 'Work-hardening steel (up to 550 BHN) for crusher jaws', href: '/materials' },
  { type: 'Material', title: 'Ceramic-Polymer Matrix', subtitle: 'Ultra-hard alumina tile liners for slurry pipes & chutes', href: '/materials' },
]

export function SiteSearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')

  // Build searchable index from applications in site-data
  const appItems: SearchItem[] = applications.map((app) => ({
    type: 'Application',
    title: app.title,
    subtitle: app.tagline || app.summary,
    href: `/applications/${app.slug}`,
  }))

  const allItems = [...staticSearchItems, ...appItems]

  const filtered = query.trim() === ''
    ? allItems.slice(0, 6)
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles['search-modal-backdrop']} onClick={onClose} aria-modal="true" role="dialog">
      <div className={styles['search-modal-box']} onClick={(e) => e.stopPropagation()}>
        {/* Top Search Input Bar */}
        <div className={styles['search-modal-header']}>
          <div className={styles['search-input-icon-wrap']}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={styles['search-icon-svg']}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            className={styles['search-modal-input']}
            placeholder="Search materials, parts, applications..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="button" className={styles['search-modal-close']} onClick={onClose} aria-label="Close search">
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className={styles['search-modal-results']}>
          {filtered.length === 0 ? (
            <div className={styles['search-no-results']}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles['search-empty-icon']}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <p>No metallurgy or component results for &quot;{query}&quot;</p>
              <span>Try searching for <em>Hardox</em>, <em>Dryer</em>, <em>Casting</em>, or <em>Mining</em>.</span>
            </div>
          ) : (
            <ul className={styles['search-results-list']}>
              {filtered.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className={styles['search-result-row']} onClick={onClose}>
                    <span className={`${styles['search-type-badge']} ${styles[`search-badge-${item.type.toLowerCase()}`]}`}>
                      {item.type}
                    </span>
                    <div className={styles['search-result-info']}>
                      <strong className={styles['search-result-title']}>{item.title}</strong>
                      <span className={styles['search-result-desc']}>{item.subtitle}</span>
                    </div>
                    <div className={styles['search-row-action']}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={styles['search-arrow-svg']}>
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Command Palette Footer */}
        <div className={styles['search-modal-footer']}>
          <div className={styles['search-footer-shortcuts']}>
            <span className={styles['shortcut-item']}><kbd>↵</kbd> to select</span>
            <span className={styles['shortcut-item']}><kbd>Tab</kbd> to cycle</span>
          </div>
          <span className={styles['shortcut-item']}><kbd>ESC</kbd> to dismiss</span>
        </div>
      </div>
    </div>
  )
}
