import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/site/nav'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'

export const metadata: Metadata = {
  title: 'Terms of Use | WearGuard Industrial Wear Solutions',
  description: 'WearGuard commercial terms of use, engineering specifications, custom manufacturing policies, and component supply conditions.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main id="top" className="legal-page-root" style={{ background: '#0e1014', color: '#FFFFFF', minHeight: '100vh' }}>
      <SiteNav />

      <section style={{ padding: 'clamp(7rem, 11vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem)', maxWidth: '1000px', margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.8rem', background: 'rgba(200, 55, 11, 0.12)', border: '1px solid rgba(200, 55, 11, 0.35)', color: '#C8370B', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8370B' }} />
            <span>Commercial &amp; Engineering Terms</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 750, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1rem 0' }}>
            Terms of Use
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: '0 0 3rem 0', fontFamily: 'var(--font-mono, monospace)' }}>
            Effective Date: January 1, 2026 · WearGuard Pty Ltd
          </p>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: 1.7, color: '#CBD5E1', fontSize: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2.5rem' }}>
          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              1. Acceptance &amp; Scope of Supply
            </h2>
            <p>
              By accessing this website, requesting metallurgical evaluations, or engaging WearGuard for custom casting manufacture, you agree to these Terms of Use. WearGuard designs, reverse-engineers, and manufactures high-performance replacement wear components for asphalt batching, concrete mixing, quarrying, mining, and bulk material handling equipment.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              2. Engineering Tolerances &amp; 3D Reverse Engineering
            </h2>
            <p>
              WearGuard provides coordinate measuring machine (CMM) 3D laser scanning with precision tolerances of ±0.05mm. When parts are reverse-engineered from worn field samples without original equipment manufacturer (OEM) drawings, approval of production CAD drawings or prototype inspection by the client constitutes agreement on dimensions, bolt patterns, and mounting clearances prior to full casting pour.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              3. Metallurgy &amp; Wear Life Projections
            </h2>
            <p>
              Wear-life improvements (such as 20% to 60% extensions over standard OEM specifications) represent engineering estimates derived from metallurgical alloy upgrades (e.g., hyper-eutectic high-chrome white irons, martensitic steels, or manganese alloys) evaluated against standard low-alloy baseline parts. Actual component service life is dependent on uncontrollable site operating variables, including aggregate hardness, quartz silica percentages, impact angles, feed rates, and equipment maintenance practices. Projections do not constitute an absolute or unconditional operating guarantee.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              4. Tooling, Pattern Ownership &amp; Small-Batch Runs
            </h2>
            <p>
              WearGuard supports flexible manufacturing runs with no minimum order barriers (1–10 unit prototype or emergency sets). High-density polyurethane or wooden pattern tooling produced for custom orders remains dedicated to the purchasing client for repeat production cycles unless mutually agreed otherwise in written supply contracts. Standard manufacturing lead times range from 6 to 8 weeks following technical drawing signoff.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              5. Intellectual Property &amp; Trademarks
            </h2>
            <p>
              Reference to third-party machinery brands, OEM model designations, or part numbers on this website or in our catalog serves solely for functional compatibility and identification purposes. WearGuard is an independent metallurgical engineering manufacturer and is not affiliated with or endorsed by referenced OEM manufacturers unless explicitly specified.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall WearGuard Pty Ltd be liable for consequential, incidental, indirect, or downtime damages arising from plant production interruptions, installation inaccuracies, or improper equipment operation. Maximum liability under any supply order is strictly limited to the replacement or repair of non-conforming cast components verified through certified non-destructive testing (NDT).
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              7. Contact &amp; Governing Law
            </h2>
            <p>
              These Terms of Use are governed by the laws of Australia. For questions regarding commercial terms, master supply agreements, or warranty certifications, please contact{' '}
              <Link href="/contact" style={{ color: '#C8370B', textDecoration: 'underline' }}>
                wearguard.com.au/contact
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
