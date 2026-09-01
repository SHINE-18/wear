import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp, Stagger, StaggerItem } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { customFeatures, plantImage, processSteps } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Custom Parts & Reverse Engineering | WearGuard',
  description: 'Reverse engineering, tailored wear alloys and 1–10 unit small-batch flexibility, delivered with hands-on metallurgical support.',
}

export default function CustomPartsPage() {
  return (
    <main id="top">
      <SiteNav />
      <PageHero
        eyebrow="Custom Manufacturing & Metallurgy"
        title={
          <>
            Engineered to
            <br />
            <em>suit your needs.</em>
          </>
        }
        image={plantImage}
        imageAlt="Custom industrial part in production"
        badge="1–10 unit small-batch flexibility"
      />

      {/* --- WHAT WE OFFER: 4 PILLARS --- */}
      <section className="custom-pillars-section section-light">
        <FadeUp className="section-heading">
          <SectionLabel>Capabilities</SectionLabel>
          <h2>
            Bespoke wear parts
            <br />
            <em>without OEM penalties.</em>
          </h2>
          <p>
            When OEM suppliers quote 26-week lead times or refuse small quantities, WearGuard reverse-engineers, optimizes metallurgy, and manufactures replacement assemblies in 6–8 weeks.
          </p>
        </FadeUp>

        <Stagger className="custom-pillars-grid">
          {customFeatures.map((f, i) => (
            <StaggerItem key={f.title} className="custom-pillar-card">
              <span className="pillar-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* --- 4-STAGE REVERSE-ENGINEERING TIMELINE --- */}
      <section className="custom-process-section section-dark">
        <FadeUp className="section-heading">
          <SectionLabel>Lifecycle Process</SectionLabel>
          <h2>
            From worn physical part
            <br />
            to <em>precision casting.</em>
          </h2>
          <p>
            Our in-house metrology and foundry engineers follow an exact 4-stage engineering lifecycle to verify dimensions, optimize chemical alloys, and eliminate historical weak points.
          </p>
        </FadeUp>

        <div className="custom-steps-grid">
          {processSteps.map((step) => (
            <FadeUp key={step.n} className="custom-step-card">
              <div className="custom-step-header">
                <span className="step-badge">STAGE {step.n}</span>
                <span className="step-status">Verified QA</span>
              </div>
              <h3>{step.t}</h3>
              <p>{step.d}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* --- SPECIFICATION CHECKLIST --- */}
      <section className="custom-spec-checklist section-light">
        <div className="checklist-layout">
          <FadeUp className="checklist-left">
            <SectionLabel>RFQ Submission Guide</SectionLabel>
            <h2>
              What our engineers need
              <br />
              to <em>quote your part.</em>
            </h2>
            <p className="checklist-lead">
              We can work from full 3D CAD files (.STEP / .IGES), 2D manufacturing drawings (.DWG / .PDF), or worn physical samples sent directly to our Australian metrology lab.
            </p>
            <Button href="/contact">Submit Drawings / RFQ</Button>
          </FadeUp>

          <FadeUp className="checklist-right">
            <div className="checklist-card">
              <h3 className="checklist-card-title">Engineering Checklist</h3>
              <div className="checklist-items">
                <div className="checklist-item">
                  <span className="chk-box">✓</span>
                  <div>
                    <strong>Equipment OEM & Model</strong>
                    <p>Machine type, original part number, and plant installation location.</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="chk-box">✓</span>
                  <div>
                    <strong>Operating Environment & Material Handled</strong>
                    <p>Particle sizing (lump mm), tonnage per hour, temperature, and moisture content.</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="chk-box">✓</span>
                  <div>
                    <strong>Historical Failure Mode</strong>
                    <p>Gouging impact, abrasive sliding thinning, cracking, or thermal fatigue.</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="chk-box">✓</span>
                  <div>
                    <strong>Desired Batch Quantity</strong>
                    <p>Trial batch (1–10 units) or scheduled campaign replacement volumes.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
