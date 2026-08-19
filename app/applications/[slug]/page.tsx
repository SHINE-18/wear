import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { ProductComponentAccordion } from '@/components/site/product-component-accordion'
import { applications } from '@/lib/site-data'

export function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const app = applications.find((a) => a.slug === slug)
  if (!app) return {}
  return {
    title: `${app.title} | WearGuard`,
    description: app.summary,
  }
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = applications.find((a) => a.slug === slug)
  if (!app) notFound()

  const related = applications.filter((a) => a.slug !== app.slug).slice(0, 3)

  return (
    <main id="top" className="product-detail-page-root">
      <SiteNav />

      {/* 1. PRODUCT SPLIT HERO */}
      <PageHero
        eyebrow={app.eyebrow}
        title={
          <>
            {app.title}
            <br />
            <em>Engineered Assemblies.</em>
          </>
        }
        description={app.summary}
        image={app.image}
        imageAlt={`${app.title} assembly`}
        badge={`Lead Time ${app.specs.find((s) => s.label === 'Lead Time')?.value ?? '6–8 Weeks'}`}
        quickJumps={app.subComponents.map((sub, i) => ({
          code: `0${i + 1}`,
          label: sub.title,
          href: `#${sub.id}`,
        }))}
      />

      {/* 2. INTERACTIVE PRODUCT COMPONENT ACCORDION & EDITORIAL */}
      <ProductComponentAccordion application={app} />

      {/* 3. RELATED APPLICATIONS STRIP */}
      <section className="related-strip section-light">
        <FadeUp className="section-heading">
          <SectionLabel>Matched Product Lines</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', margin: '0.6rem 0 2rem' }}>
            Explore other <em>wear assemblies.</em>
          </h2>
        </FadeUp>
        <div className="related-grid">
          {related.map((r) => (
            <Link key={r.slug} href={`/applications/${r.slug}`} className="related-card">
              <span className="related-card-num">{r.num}</span>
              <div className="related-card-body">
                <h3>{r.title}</h3>
                <p>{r.tagline ?? r.summary}</p>
              </div>
              <span className="related-card-arrow" aria-hidden="true">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. RFQ / CAD SPEC BOTTOM CTA */}
      <section className="page-cta section-dark">
        <h2>
          Ready to spec this <em>assembly?</em>
        </h2>
        <p style={{ color: '#8c92a4', maxWidth: '36rem', margin: '1rem auto 2.5rem', lineHeight: 1.6 }}>
          Share your equipment model, part number, 2D drawings, or 3D CAD files. Our engineering team responds within 24 hours.
        </p>
        <Button href="/contact">Talk to Our Technical Engineers</Button>
      </section>

      <SiteFooter />
    </main>
  )
}
