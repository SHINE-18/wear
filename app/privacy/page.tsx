import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/site/nav'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'

export const metadata: Metadata = {
  title: 'Privacy Policy | WearGuard Industrial Wear Solutions',
  description: 'WearGuard privacy policy regarding engineering consultations, proprietary CAD drawings, and industrial client data protection.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main id="top" className="legal-page-root" style={{ background: '#0e1014', color: '#FFFFFF', minHeight: '100vh' }}>
      <SiteNav />

      <section style={{ padding: 'clamp(7rem, 11vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem)', maxWidth: '1000px', margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.8rem', background: 'rgba(200, 55, 11, 0.12)', border: '1px solid rgba(200, 55, 11, 0.35)', color: '#C8370B', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8370B' }} />
            <span>Legal &amp; Compliance</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 750, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1rem 0' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: '0 0 3rem 0', fontFamily: 'var(--font-mono, monospace)' }}>
            Effective Date: January 1, 2026 · WearGuard Pty Ltd
          </p>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: 1.7, color: '#CBD5E1', fontSize: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2.5rem' }}>
          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              1. Information We Collect
            </h2>
            <p>
              WearGuard collects information provided directly by plant operators, maintenance managers, and engineering personnel when requesting metallurgical wear audits, custom CAD reverse engineering, or quotations for high-wear castings. This may include:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Full name, corporate email address, plant telephone number, and facility shipping location.</li>
              <li>Operational operating data: equipment brand/model, material feed velocity, aggregate composition, and current wear component lifecycle.</li>
              <li>Technical engineering uploads, 2D blueprints, and 3D CAD/STEP coordinate files submitted for metrology and quotation.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              2. Technical Drawings &amp; Proprietary CAD Protection
            </h2>
            <p>
              We treat all client-submitted drawings, CAD models, scan geometries, and operating telemetry as confidential industrial property. WearGuard does not sell, license, or disclose client-specific equipment specifications to third-party competitors. Engineering files are accessed strictly by our metallurgy and CAD reverse engineering teams for tooling, pattern verification, and casting simulation.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              3. Purpose of Data Processing
            </h2>
            <p>
              Collected client details are utilized exclusively to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Formulate application-tailored metallurgical recommendations (high-chrome, Ni-Hard, manganese, or ceramic composite).</li>
              <li>Deliver precise quotation schedules, pattern manufacturing lead times, and logistical delivery updates.</li>
              <li>Maintain component service lifecycle records to notify plant managers ahead of planned relining shutdowns.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              4. Data Retention &amp; Security
            </h2>
            <p>
              We maintain industry-standard physical, electronic, and administrative safeguards to protect technical specifications and communication records from unauthorized access, modification, or exposure. Production tooling coordinates and metallurgical melt certifications are securely archived to ensure identical batch repeatability for future reorders.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              5. Inquiries &amp; Data Rights
            </h2>
            <p>
              To inspect, modify, or request deletion of your corporate contact records or archived technical files, contact our engineering administration desk at{' '}
              <Link href="/contact" style={{ color: '#C8370B', textDecoration: 'underline' }}>
                wearguard.com.au/contact
              </Link>{' '}
              or by postal mail to WearGuard Australia Headquarters.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
