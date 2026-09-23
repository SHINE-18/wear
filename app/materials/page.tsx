import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav } from '@/components/site/nav'
import { MaterialsHeroExpand } from '@/components/site/materials-hero-expand'
import { MaterialsMatrix } from '@/components/site/materials-matrix'
import styles from '@/components/site/materials-matrix.module.css'

export const metadata: Metadata = {
  title: 'Materials & Metallurgy Alloys | WearGuard Engineering',
  description: 'High-chrome white iron, Ni-Hard 4, quenched martensitic steel plates, and ceramic composites formulated to defeat extreme impact, slurry, and gouging.',
  alternates: {
    canonical: '/materials',
  },
}

export default function MaterialsPage() {
  return (
    <main id="top" className={`${styles['materials-page-root']} materials-page-root`}>
      <SiteNav />

      {/* 1. SCROLL-DRIVEN EXPANDING HERO (CUSTOM PARTS & ASPHALT PLANTS PARITY) */}
      <MaterialsHeroExpand />

      {/* CONTINUOUS CURTAIN LAYER (STACKS OVER EXPANDED HERO WITH Z-INDEX 40) */}
      <div className={`${styles.pageContentLayer} page-content-layer`}>
        {/* 2. SWISS ENGINEERING ALLOY MATRIX & TELEMETRY */}
        <section id="materials-matrix" className={styles['materials-matrix-section']}>
          <h2 className="sr-only">Engineered Alloy Material Grades & Specifications</h2>
          <MaterialsMatrix />
        </section>

        <SiteFooter />
      </div>
    </main>
  )
}
