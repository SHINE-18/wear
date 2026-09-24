'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow } from '@/components/site/ui'
import styles from './catalog-grid.module.css'

export interface CatalogItem {
  id: string
  category: string
  categoryLabel: string
  title: string
  material: string
  life: string
  description: string
  image: string
  href: string
}

export interface SectorGroup {
  id: string
  name: string
  shortName: string
  tagline: string
  compositeImage: string
  items: CatalogItem[]
}

export const SECTOR_GROUPS: SectorGroup[] = [
  {
    id: 'dryers',
    name: 'DRYERS COMPONENTS',
    shortName: 'Dryers',
    tagline: 'ANY BRAND. ANY ERA. NO EXCUSES.',
    compositeImage: '/images/dryer-combo.webp',
    items: [
      {
        id: 'dryer-sprockets',
        category: 'DRYERS',
        categoryLabel: 'DRYER COMPONENTS',
        title: 'Dryer Drum Sprockets & Trunnion',
        material: 'WearGuard P450',
        life: '2.5× Standard Life',
        description:
          'Heavy-duty trunnion wheels and rollers, dryer rings, girth gears and machined components, heat-treated to meet rigorous performance requirements.',
        image: '/images/dryer-sprockets.webp',
        href: '/applications/dryer-components',
      },
      {
        id: 'drum-flights',
        category: 'DRYERS',
        categoryLabel: 'DRYER COMPONENTS',
        title: 'Drum Internals and Discharge Flights',
        material: 'WearGuard P450',
        life: '3.0× Standard Life',
        description:
          'All types of dryer drum internal flights, dam plates, exit chutes, discharge flights, RAP inlets and covers in high wear-resistant alloy steels.',
        image: '/images/drum-internal-discharge-flights.webp',
        href: '/applications/dryer-components',
      },
      {
        id: 'trunnion-wheels',
        category: 'DRYERS',
        categoryLabel: 'DRYER COMPONENTS',
        title: 'Thrust & Trunnion Wheels',
        material: 'Wearcast 600',
        life: '2.2× Standard Life',
        description:
          'Available in machined and cast options, complete with bearings and assemblies to enable quick change-out and lower downtime.',
        image: '/images/trunnion-wheels.webp',
        href: '/applications/dryer-components',
      },
    ],
  },
  {
    id: 'filters',
    name: 'FILTER COMPONENTS',
    shortName: 'Filters',
    tagline: 'DUST FILTRATION & AIRFLOW PROTECTION',
    compositeImage: '/images/filter-combo.webp',
    items: [
      {
        id: 'ss-protection',
        category: 'FILTERS',
        categoryLabel: 'FILTER COMPONENTS',
        title: 'Stainless Steel Filter Protection',
        material: 'SS316 / Stainless Alloy',
        life: 'Extended Bag Life',
        description:
          'Heavy-duty stainless steel cage collars, bottom cups, and sacrificial wear sleeves protecting filter bags against abrasive particulate impact.',
        image: '/images/stainless-steel-protection.webp',
        href: '/applications/filter-components',
      },
      {
        id: 'filter-cages',
        category: 'FILTERS',
        categoryLabel: 'FILTER COMPONENTS',
        title: 'Precision Welded Filter Cages',
        material: 'Galvanized / SS304',
        life: '3× Bag Life',
        description:
          'Robotically welded with zero internal weld splatter or burrs for smooth, tear-free pulse-jet cleaning cycles.',
        image: '/images/filter-cages.webp',
        href: '/applications/filter-components',
      },
      {
        id: 'filter-bags',
        category: 'FILTERS',
        categoryLabel: 'FILTER COMPONENTS',
        title: 'High-Temperature Filter Bags',
        material: 'Nomex / PTFE',
        life: 'Up to 300°C Peak',
        description:
          'Engineered needle felt and woven membrane bags tailored for asphalt baghouses, cement kilns, and smelters.',
        image: '/images/filter-bags.webp',
        href: '/applications/filter-components',
      },
      {
        id: 'exhaust-fan-liners',
        category: 'FILTERS',
        categoryLabel: 'FILTER COMPONENTS',
        title: 'Exhaust & Fan Housing Liners',
        material: 'WearGuard CCO 62 HRC',
        life: '3× Over Mild Steel',
        description:
          'Hardfaced chromium carbide and wear-resistant scroll liners protecting high-velocity ID fan housings.',
        image: '/images/exhaust-fan.webp',
        href: '/applications/filter-components',
      },
    ],
  },
  {
    id: 'mixers',
    name: 'MIXER COMPONENTS',
    shortName: 'Mixers',
    tagline: 'ASPHALT & CONCRETE MIXER SYSTEMS',
    compositeImage: '/images/mixer-components-composite.webp',
    items: [
      {
        id: 'paddle-arms',
        category: 'MIXERS',
        categoryLabel: 'MIXER COMPONENTS',
        title: 'Mixer Paddle Arms & Scrapers',
        material: 'Austempered Ductile Iron',
        life: 'High Impact Shock',
        description:
          'Cast with heavy reinforcing ribs to absorb tramp aggregate shock without fracturing. Precision-broached hubs.',
        image: '/images/mixer-paddle-arms.webp',
        href: '/applications/mixer-components',
      },
      {
        id: 'arm-protection',
        category: 'MIXERS',
        categoryLabel: 'MIXER COMPONENTS',
        title: 'Sacrificial Arm Protection Guards',
        material: 'Cast Ni-Hard & Z-Core',
        life: '80% Faster Change-out',
        description:
          'Sacrificial protective sleeves and honeycomb wear tiles shielding structural mixer arms from abrasive sand wash erosion.',
        image: '/images/arm-protection-guard.webp',
        href: '/applications/mixer-components',
      },
      {
        id: 'mixer-tips',
        category: 'MIXERS',
        categoryLabel: 'MIXER COMPONENTS',
        title: 'High-Chrome Mixer Tips & Blades',
        material: 'High-Chrome Cr 28%',
        life: '62 HRC Hardness',
        description:
          'Hyper-eutectic chromium cast blades with razor-edge profile retention for uniform batching and zero buildup.',
        image: '/images/mixer-tips.webp',
        href: '/applications/mixer-components',
      },
    ],
  },
  {
    id: 'elevators-conveyors',
    name: 'BUCKET ELEVATORS & DRAG CONVEYORS',
    shortName: 'Elevators & Conveyors',
    tagline: 'HEAVY MATERIAL ELEVATION & CHAIN CONVEYING',
    compositeImage: '/images/elevator-combo.webp',
    items: [
      {
        id: 'drive-sprockets',
        category: 'ELEVATORS',
        categoryLabel: 'ELEVATOR COMPONENTS',
        title: 'Elevator Traction Wheels & Sprockets',
        material: 'Flame Hardened 55 HRC',
        life: 'Segmented Replaceable',
        description:
          'Segmented rim sprockets that allow tooth replacement without removing the central hub or disassembling shafts.',
        image: '/images/drive-sprockets.webp',
        href: '/applications/bucket-elevators',
      },
      {
        id: 'elevator-buckets',
        category: 'ELEVATORS',
        categoryLabel: 'ELEVATOR COMPONENTS',
        title: 'Reinforced Heavy Elevator Buckets',
        material: 'AR400 / Hardox',
        life: 'Reinforced Wear Lip',
        description:
          'High-capacity continuous and centrifugal buckets with welded wear lips engineered to scoop dense aggregate.',
        image: '/images/elevator-buckets.webp',
        href: '/applications/bucket-elevators',
      },
      {
        id: 'drag-links',
        category: 'DRAG CONVEYORS',
        categoryLabel: 'DRAG CONVEYOR COMPONENTS',
        title: 'Heavy Cast Drag Links & Conveyor Chains',
        material: 'Forged Alloy 8620',
        life: 'Case Hardened 60 HRC',
        description:
          'Precision-cast flight links with induction-hardened pins engineered for extreme continuous tensile loads.',
        image: '/images/wearguard-parts.webp',
        href: '/applications/drag-conveyors',
      },
    ],
  },
  {
    id: 'liners',
    name: 'CHUTE & BIN WEAR LINERS',
    shortName: 'Wear Liners',
    tagline: 'IMPACT, SLIDING & GOUGING ABRASION DEFENSE',
    compositeImage: '/images/material-technologies-whole-set.webp',
    items: [
      {
        id: 'liner-flow-control',
        category: 'LINERS',
        categoryLabel: 'LINER COMPONENTS',
        title: 'Liner Flow Control & Floor Segments',
        material: 'WearGuard P450',
        life: 'High Velocity Flow Grade',
        description:
          'Engineered floor and wall wear segments with precision countersunk bolt holes, guiding material flow and preventing wall washout.',
        image: '/images/liner-control-the-low.webp',
        href: '/applications/wear-liners-transfer-protection',
      },
      {
        id: 'custom-chute-protection',
        category: 'LINERS',
        categoryLabel: 'LINER COMPONENTS',
        title: 'Custom Curved Chute Protection Panels',
        material: 'Interlocking Ni-Hard / P450',
        life: 'Targeted Impact Defense',
        description:
          'Bespoke radiused wear panels and interlocking liner tiles precision-fabricated to fit discharge chutes and transfer hoppers.',
        image: '/images/custom-chute-protection.webp',
        href: '/applications/wear-liners-transfer-protection',
      },
      {
        id: 'hardfaced-plate',
        category: 'LINERS',
        categoryLabel: 'LINER COMPONENTS',
        title: 'Chromium Carbide Overlay (CCO) Plate',
        material: '62 HRC CCO Cladding',
        life: '5x vs Mild Steel',
        description:
          'Fused primary chromium carbide hardfacing on a ductile weldable steel backing plate for drop chutes.',
        image: '/images/hardfaced-plate.webp',
        href: '/applications/wear-liners-transfer-protection',
      },
      {
        id: 'ceramic-rubber',
        category: 'LINERS',
        categoryLabel: 'LINER COMPONENTS',
        title: 'Ceramic-Rubber Composite Panels',
        material: '92% Al2O3 Alumina',
        life: 'Zero Tile Cracking',
        description:
          'Hexagonal 92% alumina ceramic blocks vulcanized into a resilient natural rubber matrix with steel backing.',
        image: '/images/ceramic-liners.webp',
        href: '/applications/wear-liners-transfer-protection',
      },
    ],
  },
  {
    id: 'get-tips',
    name: 'G.E.T. GROUND ENGAGING BUCKET TIPS',
    shortName: 'Bucket Tips',
    tagline: 'ENGINEERED PENETRATION & IMPACT RESISTANCE',
    compositeImage: '/images/earth-moving-bucket-tips-4.webp',
    items: [
      {
        id: 'penetration-tips',
        category: 'G.E.T. TIPS',
        categoryLabel: 'G.E.T. GROUND ENGAGING',
        title: 'Heavy Penetration & Excavation Tips',
        material: 'High Shock Absorbing Alloy',
        life: 'Penetration Grade',
        description:
          'Engineered for dependable ground penetration and high impact resistance in harsh earthmoving and excavation conditions.',
        image: '/images/earth-moving-bucket-tips-2.webp',
        href: '/applications/earthmoving-bucket-tips',
      },
      {
        id: 'rock-tips',
        category: 'G.E.T. TIPS',
        categoryLabel: 'G.E.T. GROUND ENGAGING',
        title: 'Abrasive Rock & Quarry Tips',
        material: 'High Wear Resistant Alloys',
        life: 'Extended Lip Shield',
        description:
          'Built for strength, consistent fitment and reliable performance where wear, shock and material flow demand maximum life.',
        image: '/images/earth-moving-bucket-tips-1.webp',
        href: '/applications/earthmoving-bucket-tips',
      },
      {
        id: 'custom-tips',
        category: 'G.E.T. TIPS',
        categoryLabel: 'G.E.T. GROUND ENGAGING',
        title: 'Custom-Engineered Tip Solutions',
        material: 'Application-Matched Alloy',
        life: 'Reduced Change-Outs',
        description:
          'WearGuard can design and custom build bucket tips in profiles and wear materials matched to your machine and abrasive challenges.',
        image: '/images/custom-earth-moving-bucket-tips-3.webp',
        href: '/applications/earthmoving-bucket-tips',
      },
    ],
  },
]

export const MATERIALS_LIST = [
  'ALL METALLURGIES',
  'WearGuard P450',
  'High-Chrome Cr 28%',
  'Cast Ni-Hard & Z-Core',
  '62 HRC CCO Cladding',
  '92% Al2O3 Alumina',
  'High Shock Absorbing Alloy',
  'SS316 / Stainless Alloy',
  'Flame Hardened 55 HRC',
] as const

export function CatalogGrid() {
  const [activeSectorTab, setActiveSectorTab] = useState<string>('ALL')
  const [selectedMaterial, setSelectedMaterial] = useState<string>('ALL METALLURGIES')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null)

  // Close sidebar on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null)
      }
    }
    if (selectedProduct) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  // Filtered sectors and items
  const filteredSectors = useMemo(() => {
    return SECTOR_GROUPS.map((sector) => {
      // Check sector tab match
      if (activeSectorTab !== 'ALL' && sector.id !== activeSectorTab) {
        return null
      }

      const matchingItems = sector.items.filter((item) => {
        const matchesMaterial =
          selectedMaterial === 'ALL METALLURGIES' ||
          item.material.toLowerCase().includes(selectedMaterial.toLowerCase())

        const matchesSearch =
          searchQuery.trim() === '' ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sector.name.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesMaterial && matchesSearch
      })

      if (matchingItems.length === 0) {
        return null
      }

      return {
        ...sector,
        items: matchingItems,
      }
    }).filter(Boolean) as SectorGroup[]
  }, [activeSectorTab, selectedMaterial, searchQuery])

  const totalMatchingItems = useMemo(() => {
    return filteredSectors.reduce((acc, s) => acc + s.items.length, 0)
  }, [filteredSectors])

  const hasActiveFilters =
    activeSectorTab !== 'ALL' ||
    selectedMaterial !== 'ALL METALLURGIES' ||
    searchQuery.trim() !== ''

  const handleTabClick = (sectorId: string) => {
    setActiveSectorTab(sectorId)
    if (sectorId !== 'ALL') {
      const el = document.getElementById(`sector-${sectorId}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section className={styles['catalog-section']}>
      <div className={styles['catalog-container']}>
        {/* TOP HEADER */}
        <div className={styles['catalog-header']}>
          <h1 className={styles['catalog-main-title']}>
            Precision Wear Components &amp;
            <br />
            Replacement Assemblies
          </h1>

          <p className={styles['catalog-subtitle']}>
            Engineered replacement parts for rotary drums, dust filtration, pugmills, pan mixers, bucket elevators, transfer chutes, and ground engaging machinery. Any brand. Any era. Direct OEM fitment.
          </p>
        </div>

        {/* QUICK-JUMP SECTOR TABS */}
        <div className={styles['sector-nav-bar']}>
          <button
            type="button"
            className={`${styles['sector-nav-pill']} ${activeSectorTab === 'ALL' ? styles['active'] : ''}`}
            onClick={() => setActiveSectorTab('ALL')}
          >
            All Sectors ({SECTOR_GROUPS.reduce((acc, s) => acc + s.items.length, 0)})
          </button>
          {SECTOR_GROUPS.map((sector) => (
            <button
              key={sector.id}
              type="button"
              className={`${styles['sector-nav-pill']} ${activeSectorTab === sector.id ? styles['active'] : ''}`}
              onClick={() => handleTabClick(sector.id)}
            >
              {sector.shortName}
            </button>
          ))}
        </div>

        {/* MINIMAL CONTROL TOOLBAR (SEARCH + METALLURGY SELECT) */}
        <div className={styles['catalog-dropdown-toolbar']}>
          {/* SEARCH INPUT */}
          <div className={styles['catalog-search-wrap']}>
            <svg
              className={styles['catalog-search-icon']}
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className={styles['catalog-search-input']}
              placeholder="Search components, alloys, or part specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* METALLURGY FILTER */}
          <div className={styles['catalog-dropdown-group']}>
            <div className={styles['custom-dropdown-wrap']}>
              <label htmlFor="material-select" className={styles['dropdown-label']}>METALLURGY</label>
              <div className={styles['dropdown-select-box']}>
                <select
                  id="material-select"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className={styles['clean-dropdown-select']}
                >
                  {MATERIALS_LIST.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
                <span className={styles['dropdown-arrow-icon']} aria-hidden="true">▾</span>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                className={styles['dropdown-reset-btn']}
                onClick={() => {
                  setActiveSectorTab('ALL')
                  setSelectedMaterial('ALL METALLURGIES')
                  setSearchQuery('')
                }}
              >
                Reset ✕
              </button>
            )}
          </div>
        </div>

        {/* STATUS BAR */}
        <div className={styles['catalog-status-bar']}>
          <span className={styles['catalog-count-badge']}>
            Showing <strong>{totalMatchingItems}</strong> components across <strong>{filteredSectors.length}</strong> sectors
          </span>
          <Link href="/contact" className={styles['catalog-quick-rfq-pill']}>
            <span>Request Custom Batch RFQ</span>
            <Arrow />
          </Link>
        </div>

        {/* SECTORS LIST (BROCHURE STYLE) */}
        <div className={styles['sectors-stack']}>
          {filteredSectors.map((sector) => (
            <div
              key={sector.id}
              id={`sector-${sector.id}`}
              className={styles['sector-block']}
            >
              {/* COMPOSITE HERO BANNER (MATCHES BROCHURE TOP BANNER) */}
              <div className={styles['sector-hero-frame']}>
                <img
                  src={sector.compositeImage}
                  alt={`${sector.name} Assembly Overview`}
                  className={styles['sector-hero-image']}
                  loading="lazy"
                  width={1400}
                  height={500}
                />
              </div>

              {/* SECTOR HEADER (MATCHES BROCHURE TITLE & TAGLINE) */}
              <div className={styles['sector-header-bar']}>
                <div className={styles['sector-title-wrap']}>
                  <span className={styles['sector-dot']} aria-hidden="true" />
                  <h2 className={styles['sector-title']}>{sector.name}</h2>
                </div>
                <span className={styles['sector-tagline']}>{sector.tagline}</span>
              </div>

              {/* COMPONENT CARDS GRID */}
              <div className={styles['sector-cards-grid']}>
                {sector.items.map((item) => (
                  <div
                    key={item.id}
                    className={styles['product-card']}
                    onClick={() => setSelectedProduct(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedProduct(item)
                      }
                    }}
                  >
                    {/* CARD IMAGE */}
                    <div className={styles['card-image-wrap']}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles['card-image']}
                        loading="lazy"
                        width={616}
                        height={464}
                      />
                      <span className={styles['card-category-badge']}>
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* CARD CONTENT */}
                    <div className={styles['card-content']}>
                      <h3 className={styles['card-title']}>{item.title}</h3>
                      <p className={styles['card-desc']}>{item.description}</p>

                      <div className={styles['card-specs-row']}>
                        <div className={styles['card-spec-item']}>
                          <span className={styles['card-spec-label']}>Alloy</span>
                          <strong className={styles['card-spec-value']}>{item.material}</strong>
                        </div>
                        <div className={styles['card-spec-item']}>
                          <span className={styles['card-spec-label']}>Wear Life</span>
                          <strong className={styles['card-spec-value']}>{item.life}</strong>
                        </div>
                      </div>

                      <div className={styles['card-footer']}>
                        <span className={styles['card-details-btn']}>
                          <span>View Specifications</span>
                          <span className={styles['card-arrow-icon']} aria-hidden="true">↗</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredSectors.length === 0 && (
            <div className={styles['catalog-empty-state']}>
              <p>No components found matching your search or metallurgy criteria.</p>
              <button
                type="button"
                className={styles['catalog-clear-btn']}
                onClick={() => {
                  setSearchQuery('')
                  setSelectedMaterial('ALL METALLURGIES')
                  setActiveSectorTab('ALL')
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SLIDE-IN SIDEBAR DRAWER WITH FULL PRODUCT DETAILS */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* BACKDROP */}
            <motion.div
              className={styles['drawer-backdrop']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProduct(null)}
              aria-hidden="true"
            />

            {/* SIDEBAR PANEL */}
            <motion.aside
              className={styles['drawer-panel']}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="drawer-product-title"
            >
              <div className={styles['drawer-header']}>
                <div className={styles['drawer-tag-wrap']}>
                  <span className={styles['drawer-category-tag']}>{selectedProduct.categoryLabel}</span>
                  <span className={styles['drawer-fitment-badge']}>100% Bolt-On Fit</span>
                </div>
                <button
                  type="button"
                  className={styles['drawer-close-btn']}
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close product details"
                >
                  ✕
                </button>
              </div>

              <div className={styles['drawer-body']}>
                <div className={styles['drawer-image-frame']}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className={styles['drawer-image']}
                    width={616}
                    height={464}
                  />
                  <div className={styles['drawer-image-badge']}>
                    <span>{selectedProduct.life}</span>
                  </div>
                </div>

                <h2 id="drawer-product-title" className={styles['drawer-title']}>
                  {selectedProduct.title}
                </h2>

                <p className={styles['drawer-description']}>
                  {selectedProduct.description}
                </p>

                <div className={styles['drawer-specs-table']}>
                  <div className={styles['drawer-spec-row']}>
                    <span className={styles['drawer-spec-lbl']}>Metallurgy / Chemistry</span>
                    <span className={styles['drawer-spec-val']}>{selectedProduct.material}</span>
                  </div>
                  <div className={styles['drawer-spec-row']}>
                    <span className={styles['drawer-spec-lbl']}>Expected Wear Life</span>
                    <span className={styles['drawer-spec-val']}>{selectedProduct.life}</span>
                  </div>
                  <div className={styles['drawer-spec-row']}>
                    <span className={styles['drawer-spec-lbl']}>Equipment Sector</span>
                    <span className={styles['drawer-spec-val']}>{selectedProduct.categoryLabel}</span>
                  </div>
                  <div className={styles['drawer-spec-row']}>
                    <span className={styles['drawer-spec-lbl']}>OEM Fitment</span>
                    <span className={styles['drawer-spec-val']}>Direct Drop-in Replacement</span>
                  </div>
                  <div className={styles['drawer-spec-row']}>
                    <span className={styles['drawer-spec-lbl']}>Standard Lead Time</span>
                    <span className={styles['drawer-spec-val']}>6–8 Weeks</span>
                  </div>
                  <div className={styles['drawer-spec-row']}>
                    <span className={styles['drawer-spec-lbl']}>Quality Certification</span>
                    <span className={styles['drawer-spec-val']}>Ultrasonic &amp; Hardness QA</span>
                  </div>
                </div>

                <div className={styles['drawer-actions']}>
                  <Link
                    href={`/contact?part=${encodeURIComponent(selectedProduct.title)}`}
                    className={styles['drawer-primary-btn']}
                    onClick={() => setSelectedProduct(null)}
                  >
                    <span>Request Technical Quote / RFQ</span>
                    <span className={styles['drawer-btn-arrow']} aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`CAD Review: ${selectedProduct.title}`)}`}
                    className={styles['drawer-secondary-btn']}
                    onClick={() => setSelectedProduct(null)}
                  >
                    <span>Send 2D Drawing / 3D CAD Review</span>
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
