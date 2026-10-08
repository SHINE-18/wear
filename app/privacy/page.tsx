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
    <main id="top" className="legal-page-root" style={{ background: '#FFFFFF', color: '#0E1014', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteNav />

      <section style={{ padding: 'clamp(8rem, 12vw, 10.5rem) clamp(1.5rem, 5vw, 5rem) clamp(5rem, 8vw, 8rem)', maxWidth: '960px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <FadeUp>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.8rem', background: 'rgba(200, 55, 11, 0.08)', border: '1px solid rgba(200, 55, 11, 0.25)', color: '#C8370B', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8370B', borderRadius: 0 }} />
            <span>Legal &amp; Compliance</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 750, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1rem 0', color: '#0E1014' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.92rem', margin: '0 0 3rem 0', fontFamily: 'var(--font-mono, monospace)' }}>
            Effective Date: January 1, 2026 · WearGuard Pty Ltd
          </p>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: 1.75, color: '#334155', fontSize: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '2.5rem' }}>
          <div>
            <h2 style={{ color: '#0E1014', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              1. Information We Collect
            </h2>
            <p>
              WearGuard collects information provided directly by plant operators, maintenance managers, and engineering personnel when requesting metallurgical wear audits, custom CAD reverse engineering, or quotations for high-wear castings. This may include:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.85rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.7 }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--orange, #C8370B)', borderRadius: 0, marginTop: '0.62rem', flexShrink: 0 }} />
                <span>Full name, corporate email address, plant telephone number, and facility shipping location.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.7 }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--orange, #C8370B)', borderRadius: 0, marginTop: '0.62rem', flexShrink: 0 }} />
                <span>Operational operating data: equipment brand/model, material feed velocity, aggregate composition, and current wear component lifecycle.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.7 }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--orange, #C8370B)', borderRadius: 0, marginTop: '0.62rem', flexShrink: 0 }} />
                <span>Technical engineering uploads, 2D blueprints, and 3D CAD/STEP coordinate files submitted for metrology and quotation.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: '#0E1014', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              2. Technical Drawings &amp; Proprietary CAD Protection
            </h2>
            <p>
              We treat all client-submitted drawings, CAD models, scan geometries, and operating telemetry as confidential industrial property. WearGuard does not sell, license, or disclose client-specific equipment specifications to third-party competitors. Engineering files are accessed strictly by our metallurgy and CAD reverse engineering teams for tooling, pattern verification, and casting simulation.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#0E1014', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              3. Purpose of Data Processing
            </h2>
            <p>
              Collected client details are utilized exclusively to:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.85rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.7 }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--orange, #C8370B)', borderRadius: 0, marginTop: '0.62rem', flexShrink: 0 }} />
                <span>Formulate application-tailored metallurgical recommendations (high-chrome, Ni-Hard, manganese, or ceramic composite).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.7 }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--orange, #C8370B)', borderRadius: 0, marginTop: '0.62rem', flexShrink: 0 }} />
                <span>Deliver precise quotation schedules, pattern manufacturing lead times, and logistical delivery updates.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.7 }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--orange, #C8370B)', borderRadius: 0, marginTop: '0.62rem', flexShrink: 0 }} />
                <span>Maintain component service lifecycle records to notify plant managers ahead of planned relining shutdowns.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: '#0E1014', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              4. Data Retention &amp; Security
            </h2>
            <p>
              We maintain industry-standard physical, electronic, and administrative safeguards to protect technical specifications and communication records from unauthorized access, modification, or exposure. Production tooling coordinates and metallurgical melt certifications are securely archived to ensure identical batch repeatability for future reorders.
            </p>
          </div>

          <div>
            <h2 style={{ color: '#0E1014', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              5. Inquiries &amp; Data Rights
            </h2>
            <p>
              To inspect, modify, or request deletion of your corporate contact records or archived technical files, contact our engineering administration desk at{' '}
              <Link href="/contact" style={{ color: '#C8370B', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>
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
