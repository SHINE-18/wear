import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { heroImage } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Industries | WearGuard',
  description: 'Wear-resistant components and materials engineered for asphalt, concrete, mining, cement, steel, recycling and aggregate industries.',
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
}

const detailedIndustries: IndustrySectionData[] = [
  {
    id: 'asphalt-paving',
    num: '01',
    title: 'Asphalt & Road Paving Infrastructure',
    subtitle: 'High-Temperature Drum Dryers, Pugmills & Continuous Asphalt Mixers',
    desc: [
      'Asphalt production subjects wear surfaces to intense combined abrasive wear, high shear friction, and continuous thermal cycling up to 950°C. OEM standard castings rapidly lose dimensional tolerance, causing mix contamination, uneven binder coating, and unplanned shutdown cycles.',
      'WearGuard engineers custom high-chrome (Cr 18–28%) and Ni-Hard 4 mixing arms, paddle tips, dryer flights, and discharge chute liners that double operational campaign life and maintain razor-sharp tolerances under peak asphalt tonnage production.',
    ],
    specs: [
      { label: 'Operating Temp', value: 'Up to 950°C' },
      { label: 'Hardness Range', value: '550–650 BHN' },
      { label: 'Alloy Chemistry', value: 'High-Chrome (Cr 18–28%) & Ni-Hard' },
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
    hudTag: 'ASPHALT & ROAD INFRASTRUCTURE',
    badgeText: 'HEAT & SEVERE ABRASION',
    appLink: '/applications/mixer-components',
  },
  {
    id: 'concrete-batching',
    num: '02',
    title: 'Concrete Batching & Heavy Aggregate',
    subtitle: 'Planetary Mixers, Twin-Shaft Blenders & Concrete Discharge Chutes',
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
    hudTag: 'CONCRETE & BATCHING OPERATIONS',
    badgeText: 'SEVERE GOUGING & IMPACT',
    appLink: '/applications/mixer-components',
  },
  {
    id: 'mining-mineral',
    num: '03',
    title: 'Mining, Quarrying & Mineral Processing',
    subtitle: 'Primary Crushers, Ball Mills, Sag Liners & Vibrating Grizzly Decks',
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
    hudTag: 'MINING & HEAVY CRUSHING',
    badgeText: 'DYNAMIC SHOCK & IMPACT',
    appLink: '/applications/wear-liners-transfer-protection',
  },
  {
    id: 'recycling-shredding',
    num: '04',
    title: 'Recycling, Shredding & Heavy Industry',
    subtitle: 'Auto Shredders, Waste Rotors, Scrap Shears & Demolition Attachments',
    desc: [
      'Material shredding and scrap recycling create unpredictable shock loads, metal-on-metal friction, and high localized stress that destroy standard replacement parts in days.',
      'WearGuard builds heavy-duty alloy shredder hammers, rotor caps, shear knives, and anvil grate bars engineered to absorb extreme tramp metal impact while retaining cutting edge sharpness.',
    ],
    specs: [
      { label: 'Shock Resistance', value: 'High Fracture Toughness' },
      { label: 'Surface Hardness', value: '58–62 HRC' },
      { label: 'Batch Flexibility', value: '1–10 Units Prototype / Trial Runs' },
      { label: 'Delivery Lead Time', value: 'Express 4–6 Weeks Available' },
    ],
    features: [
      'Heavy cast alloy hammer heads for automotive and scrap shredders',
      'Rotor protector caps, anvil grate bars & breaker blocks',
      'Tool-steel scrap metal shearing blades & liner assemblies',
      'Custom reverse-engineered wear attachments with no OEM markup',
    ],
    image: '/images/dryer-combo.webp',
    imageAlt: 'WearGuard industrial heavy component assemblies',
    hudTag: 'RECYCLING & SCRAP PROCESSING',
    badgeText: 'HIGH FRACTURE TOUGHNESS',
    appLink: '/custom-parts',
  },
]

export default function IndustriesPage() {
  return (
    <main id="top" className="industries-page-root">
      <SiteNav />

      {/* HERO BANNER */}
      <PageHero
        eyebrow="Industries Served"
        title={
          <>
            Engineered for the hardest
            <br />
            working <em>environments.</em>
          </>
        }
        description="Bespoke high-chrome, Ni-Hard, and composite wear solutions tailored for continuous asphalt pugmills, heavy concrete batching, primary mining crushers, and severe scrap recycling."
        image={heroImage}
        imageAlt="Heavy industrial asphalt plant and wear engineering workshop"
        badge="4 Core Industrial Sectors"
        quickJumps={[
          { code: '01', label: 'Asphalt & Paving', href: '#asphalt-paving' },
          { code: '02', label: 'Concrete Batching', href: '#concrete-batching' },
          { code: '03', label: 'Mining & Mineral', href: '#mining-mineral' },
          { code: '04', label: 'Recycling & Scrap', href: '#recycling-shredding' },
        ]}
      />

      {/* 4 DEDICATED FULL-SECTION INDUSTRY SHOWCASES */}
      <div className="industries-sections-container">
        {detailedIndustries.map((ind, index) => {
          const isEven = index % 2 === 1
          const bgClass = isEven ? 'industry-section-slate' : 'industry-section-light'

          return (
            <section
              key={ind.id}
              id={ind.id}
              className={`industry-full-section ${bgClass}`}
            >
              <div className={`industry-section-stage ${isEven ? 'stage-reversed' : ''}`}>
                {/* CONTENT COLUMN */}
                <FadeUp className="industry-content-col">
                  <div className="industry-meta-tag">
                    <span className="industry-num-pill">{ind.num}</span>
                    <span className="industry-badge-txt">| {ind.badgeText}</span>
                  </div>

                  <h2 className="industry-display-title">
                    {ind.title}
                  </h2>
                  <h3 className="industry-subtitle">
                    {ind.subtitle}
                  </h3>

                  <div className="industry-desc-block">
                    {ind.desc.map((p, i) => (
                      <p key={i}>{p}</p>
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
                          <span className="feat-check">✓</span>
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

                {/* VISUAL COLUMN */}
                <FadeUp className="industry-visual-col">
                  <div className="industry-visual-card">
                    <img
                      src={ind.image}
                      alt={ind.imageAlt}
                      className="industry-card-img"
                    />
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
