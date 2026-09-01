import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button } from '@/components/site/ui'
import { heroImage } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Industries | WearGuard',
  description: 'Heavy wear-resistant components and custom alloy castings engineered for asphalt, concrete batching, process industries, and primary mining crushers.',
}

interface IndustrySectionData {
  id: string
  num: string
  title: string
  subtitle: string
  desc: string[]
  specs: { label: string; value: string }[]
  features: string[]
  image: string
  imageAlt: string
  hudTag: string
  badgeText: string
  appLink: string
  theme: 'dark' | 'steel' | 'white' | 'dark-carbon'
}

const detailedIndustries: IndustrySectionData[] = [
  {
    id: 'asphalt-paving',
    num: '01',
    title: 'Asphalt',
    subtitle: 'High-Temperature Drum Dryers, Continuous Pugmills & Asphalt Plants',
    desc: [
      'Asphalt production subjects wear surfaces to intense combined abrasive wear, high shear friction, and continuous thermal cycling up to 950°C. OEM standard castings rapidly lose dimensional tolerance, causing mix contamination, uneven binder coating, and unplanned shutdown cycles.',
      'WearGuard engineers custom high-chrome (Cr 18–28%) and Ni-Hard 4 mixing arms, paddle tips, dryer flights, and discharge chute liners that double operational campaign life and maintain razor-sharp tolerances under peak asphalt tonnage production.',
    ],
    specs: [
      { label: 'Operating Temp', value: 'Up to 950°C' },
      { label: 'Hardness Range', value: '550–650 BHN' },
      { label: 'Alloy Chemistry', value: 'High-Chrome (Cr 18–28%) & Ni-Hard 4' },
      { label: 'Typical Wear Gain', value: '+45% vs Standard OEM' },
    ],
    features: [
      'Pugmill mixer paddle arms, tips & bottom trough liners',
      'Rotary drying drum flights, trunnion rollers & tire rings',
      'Cold feed aggregate hopper drop liners & transfer chutes',
      'Corrosion-resistant baghouse filter cages & high-temp housings',
    ],
    image: '/images/asphalt-plant-hero.png',
    imageAlt: 'High capacity modern asphalt batching and mixing plant',
    hudTag: 'ASPHALT SECTOR // HEAT & SEVERE ABRASION',
    badgeText: 'HEAT & SEVERE ABRASION',
    appLink: '/applications/mixer-components',
    theme: 'dark',
  },
  {
    id: 'concrete-batching',
    num: '02',
    title: 'Concrete',
    subtitle: 'Planetary Mixers, Twin-Shaft Blenders & Batching Plants',
    desc: [
      'Concrete mixing is one of the most punishing gouging abrasion environments in modern manufacturing. Aggressive sharp sand, coarse quartz aggregate, and cementitious slurry wear down floor tiles and mixing paddles rapidly.',
      'WearGuard provides EnduraCast Z-Core liners and precision-machined cast alloy paddle blades designed for 100% bolt-on interchangeability with all major planetary and twin-shaft mixers (BHS, Sicoma, Liebherr, Teka).',
    ],
    specs: [
      { label: 'Abrasion Mode', value: 'Severe Gouging & Impact' },
      { label: 'Hardness Range', value: '600–700 BHN' },
      { label: 'Liner Technology', value: 'EnduraCast Z-Core & Ceramic Matrix' },
      { label: 'Interchangeability', value: '100% Direct Bolt-On Match' },
    ],
    features: [
      'Twin-shaft & planetary mixer paddle blades & scraper arms',
      'Reversible floor and wall wear tiles for double service life',
      'Composite ceramic and chromium carbide discharge chutes',
      'Skip hoist transfer liners and aggregate weighing bins',
    ],
    image: '/images/mixer-shaft-&-arms.webp',
    imageAlt: 'WearGuard precision mixer shaft and heavy alloy arms assembly',
    hudTag: 'CONCRETE SECTOR // GOUGING ABRASION',
    badgeText: 'SEVERE GOUGING & IMPACT',
    appLink: '/applications/mixer-components',
    theme: 'steel',
  },
  {
    id: 'process-industries',
    num: '03',
    title: 'Process Industries',
    subtitle: 'Bulk Material Handling, Cyclones, Chutes & Heavy Processing',
    desc: [
      'Bulk materials, recycling, and heavy processing operations create unpredictable shock loads, high localized stress, and corrosive wear that rapidly degrade standard catalog replacement components.',
      'WearGuard engineers bespoke ceramic-rubber composite chutes, hopper wear plates, heavy-duty rotor caps, and pneumatic transfer elbows designed for extreme continuous throughput.',
    ],
    specs: [
      { label: 'Shock Resistance', value: 'High Fracture Toughness' },
      { label: 'Surface Hardness', value: '58–62 HRC' },
      { label: 'Batch Flexibility', value: '1–10 Units Prototype / Trial Runs' },
      { label: 'Delivery Lead Time', value: 'Express 4–6 Weeks Available' },
    ],
    features: [
      'Ceramic-embedded composite wear plates and transfer liners',
      'Heavy cast alloy hammer heads for processing and shredders',
      'Rotor protector caps, anvil grate bars & breaker blocks',
      'Custom reverse-engineered wear attachments with no OEM markup',
    ],
    image: '/images/dryer-combo.webp',
    imageAlt: 'WearGuard industrial heavy component assemblies',
    hudTag: 'PROCESS SECTOR // BULK HANDLING',
    badgeText: 'HIGH IMPACT & CORROSION',
    appLink: '/custom-parts',
    theme: 'white',
  },
  {
    id: 'mining-mineral',
    num: '04',
    title: 'Mining',
    subtitle: 'Primary Crushers, Ball Mills, Sag Liners & Heavy Extraction Circuits',
    desc: [
      'Heavy mineral processing demands metallurgical components that absorb devastating dynamic impact without brittle fracturing, while maintaining extreme abrasive wear resistance against sharp crushed rock.',
      'WearGuard manufactures formulated austenitic manganese steels (Mn 14–22% with Cr additions), chrome-moly martensitic alloys, and ceramic-embedded wear blocks for high-tonnage primary and secondary crushing circuits.',
    ],
    specs: [
      { label: 'Impact Dynamic', value: 'Extreme Shock Load' },
      { label: 'Hardness Rating', value: '500–620 BHN' },
      { label: 'Metallurgy', value: 'Mn18Cr2, Mn22 & Martensitic Cr-Mo' },
      { label: 'Field Reliability', value: 'Zero Catastrophic Failure Record' },
    ],
    features: [
      'Impact crusher blow bars, curtain wear plates & side liners',
      'Jaw crusher fixed and movable die plates with optimized tooth profiles',
      'Vibrating screen grizzly bars, feeder decks & transfer funnels',
      'Slurry pump volute liners, impellers and suction throatbushes',
    ],
    image: '/images/custom-casting-engineering.jpg',
    imageAlt: 'Precision CNC alloy wear casting for mining equipment',
    hudTag: 'MINING SECTOR // HEAVY CRUSHING CIRCUITS',
    badgeText: 'DYNAMIC SHOCK & IMPACT',
    appLink: '/applications/wear-liners-transfer-protection',
    theme: 'dark-carbon',
  },
]

export default function IndustriesPage() {
  return (
    <main id="top" className="industries-page-root">
      <SiteNav />

      {/* 1. HERO HEADER */}
      <PageHero
        eyebrow="Industries Served"
        title={
          <>
            Engineered for the hardest
            <br />
            working <em>environments.</em>
          </>
        }
        description="Bespoke high-chrome, Ni-Hard, and composite wear solutions tailored for continuous asphalt pugmills, heavy concrete batching, primary mining crushers, and severe process industries."
        image={heroImage}
        imageAlt="Heavy industrial asphalt plant and wear engineering workshop"
        badge="4 Core Industrial Sectors"
        quickJumps={[
          { code: '01', label: 'Asphalt', href: '#asphalt-paving' },
          { code: '02', label: 'Concrete', href: '#concrete-batching' },
          { code: '03', label: 'Process Industries', href: '#process-industries' },
          { code: '04', label: 'Mining', href: '#mining-mineral' },
        ]}
      />

      {/* 2. TELEMETRY STATUS DOCK */}
      <div className="industries-telemetry-dock">
        <div className="telemetry-dock-grid">
          <div className="telemetry-dock-item">
            <span className="dock-item-lbl">ENGINEERED SECTORS</span>
            <strong className="dock-item-val">04 Dedicated Divisions</strong>
          </div>
          <div className="telemetry-dock-item">
            <span className="dock-item-lbl">WEAR EXTENSION</span>
            <strong className="dock-item-val">+45% vs Standard OEM</strong>
          </div>
          <div className="telemetry-dock-item">
            <span className="dock-item-lbl">INTERCHANGEABILITY</span>
            <strong className="dock-item-val">100% Direct Bolt-On Match</strong>
          </div>
          <div className="telemetry-dock-item">
            <span className="dock-item-lbl">FIELD RECORD</span>
            <strong className="dock-item-val">Zero Catastrophic Failure</strong>
          </div>
        </div>
      </div>

      {/* 3. 4 IMMERSIVE FULL-SECTION INDUSTRY SHOWCASES */}
      <div className="industries-sections-container">
        {detailedIndustries.map((ind, index) => {
          const isEven = index % 2 === 1
          const themeClass = `industry-theme-${ind.theme}`

          return (
            <section
              key={ind.id}
              id={ind.id}
              className={`industry-immersive-section ${themeClass}`}
            >
              <div className={`industry-immersive-stage ${isEven ? 'stage-reversed' : ''}`}>
                {/* CONTENT COLUMN */}
                <FadeUp className="industry-content-col">
                  <div className="industry-sector-header">
                    <span className="industry-sector-num">{ind.num}</span>
                    <span className="industry-sector-divider" aria-hidden="true" />
                    <span className="industry-sector-badge">{ind.badgeText}</span>
                  </div>

                  <h2 className="industry-display-title">
                    {ind.title}
                  </h2>
                  <h3 className="industry-subtitle">
                    {ind.subtitle}
                  </h3>

                  <div className="industry-desc-block">
                    {ind.desc.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* SPECS MATRIX */}
                  <div className="industry-specs-matrix">
                    {ind.specs.map((spec) => (
                      <div key={spec.label} className="industry-spec-box">
                        <span className="spec-lbl">{spec.label}</span>
                        <strong className="spec-val">{spec.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* FEATURE CHECKLIST */}
                  <div className="industry-features-list">
                    <span className="features-head">Engineered Wear Components:</span>
                    <ul>
                      {ind.features.map((feat) => (
                        <li key={feat}>
                          <span className="feat-check" aria-hidden="true">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ACTIONS */}
                  <div className="industry-actions-bar">
                    <Button href="/contact">
                      Request Industry Wear Audit
                    </Button>
                    <Link href={ind.appLink} className="about-sub-link">
                      <span>Explore matching components</span>
                      <Arrow />
                    </Link>
                  </div>
                </FadeUp>

                {/* CINEMATIC VISUAL COLUMN */}
                <FadeUp className="industry-visual-col">
                  <div className="industry-visual-card">
                    <img
                      src={ind.image}
                      alt={ind.imageAlt}
                      className="industry-card-img"
                    />
                    {/* CAD CORNER CROSSHAIRS */}
                    <span className="cad-corner tl" aria-hidden="true">+</span>
                    <span className="cad-corner tr" aria-hidden="true">+</span>
                    <span className="cad-corner bl" aria-hidden="true">+</span>
                    <span className="cad-corner br" aria-hidden="true">+</span>

                    {/* HUD TAG BADGE */}
                    <div className="industry-spec-badge">
                      <span className="spec-tag-accent">{ind.hudTag}</span>
                      <strong>CAD Spec: WG-IND-{ind.num}</strong>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </section>
          )
        })}
      </div>

      <SiteFooter />
    </main>
  )
}
