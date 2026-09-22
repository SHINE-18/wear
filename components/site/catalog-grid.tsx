'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow } from '@/components/site/ui'
import styles from './catalog-grid.module.css'

export interface CatalogItem {
  id: string
  category: 'DRYERS' | 'FILTERS' | 'MIXERS' | 'LINERS' | 'ELEVATORS' | 'DRAG CONVEYORS' | 'G.E.T. TIPS'
  categoryLabel: string
  title: string
  material: string
  life: string
  description: string
  image: string
  href: string
}

export const catalogItems: CatalogItem[] = [
  {
    id: 'dryer-sprockets',
    category: 'DRYERS',
    categoryLabel: 'DRYER COMPONENTS',
    title: 'Dryer Drum Sprockets & Trunnion Assemblies',
    material: 'WearGuard P450',
    life: '2.5x Standard Life',
    description: 'WearGuard manufactures heavy-duty trunnion wheels, rollers, and sprocket assemblies with induction-hardened alloy teeth.',
    image: '/images/dryer-sprockets.webp',
    href: '/applications/dryer-components',
  },
  {
    id: 'drum-flights',
    category: 'DRYERS',
    categoryLabel: 'DRYER COMPONENTS',
    title: 'Drum Internals & Discharge Flights',
    material: 'WearGuard P450',
    life: '3.0x Standard Life',
    description: 'We do not just rebuild or supply dryer drums; we engineer better drying performance with CFD-analyzed material lifters.',
    image: '/images/drum-internal-discharge-flights.webp',
    href: '/applications/dryer-components',
  },
  {
    id: 'trunnion-wheels',
    category: 'DRYERS',
    categoryLabel: 'DRYER COMPONENTS',
    title: 'Thrust & Trunnion Wheels Assembly',
    material: 'Wearcast 600',
    life: '2.2x Standard Life',
    description: 'WearGuard thrust rollers and trunnion wheel units are supplied complete with heavy spherical roller bearings.',
    image: '/images/trunnion-wheels.webp',
    href: '/applications/dryer-components',
  },
  {
    id: 'drum-shells',
    category: 'DRYERS',
    categoryLabel: 'DRYER COMPONENTS',
    title: 'Complete Dryer Drum Shells & Retrofit Structures',
    material: 'Pressure Vessel Boiler Plate',
    life: '10+ Years Operational Life',
    description: 'Precision-rolled structural drum shells with welded tire rings, heavy tire tracks, and internal flight mounting systems.',
    image: '/images/dryer-combo.webp',
    href: '/applications/dryer-components',
  },
  {
    id: 'filter-cages',
    category: 'FILTERS',
    categoryLabel: 'FILTER COMPONENTS',
    title: 'Precision Welded Filter Cages',
    material: 'Galvanized / SS316',
    life: '3x Bag Life',
    description: 'Robotically welded with zero internal weld splatter or burrs for smooth, tear-free pulse-jet cleaning cycles.',
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
    description: 'Engineered needle felt and woven membrane bags tailored for asphalt baghouses, cement kilns, and smelters.',
    image: '/images/filter-bags.webp',
    href: '/applications/filter-components',
  },
  {
    id: 'exhaust-fan-liners',
    category: 'FILTERS',
    categoryLabel: 'FILTER COMPONENTS',
    title: 'Exhaust & Fan Housing Liners',
    material: 'WearGuard CCO 62 HRC',
    life: '3x Over Mild Steel',
    description: 'Hardfaced chromium carbide and wear-resistant scroll liners protecting high-velocity ID fan housings.',
    image: '/images/exhaust-fan.webp',
    href: '/applications/filter-components',
  },
  {
    id: 'paddle-arms',
    category: 'MIXERS',
    categoryLabel: 'MIXER COMPONENTS',
    title: 'Mixer Paddle Arms & Scrapers',
    material: 'Austempered Ductile Iron',
    life: 'High Impact Shock',
    description: 'Cast with heavy reinforcing ribs to absorb tramp aggregate shock without fracturing. Precision-broached hubs.',
    image: '/images/mixer-paddle-arms.webp',
    href: '/applications/mixer-components',
  },
  {
    id: 'mixer-tips',
    category: 'MIXERS',
    categoryLabel: 'MIXER COMPONENTS',
    title: 'High-Chrome Paddle Tips & Blades',
    material: 'High-Chrome Cr 28%',
    life: '62 HRC Hardness',
    description: 'Hyper-eutectic chromium cast blades with razor-edge profile retention for uniform batching and zero buildup.',
    image: '/images/mixer-tips.webp',
    href: '/applications/mixer-components',
  },
  {
    id: 'arm-protection',
    category: 'MIXERS',
    categoryLabel: 'MIXER COMPONENTS',
    title: 'Arm Protection Guards & Wall Liners',
    material: 'Cast Ni-Hard & Z-Core',
    life: '80% Faster Change-out',
    description: 'Quick-clamp sacrificial protective sleeves shielding structural arms from abrasive sand wash erosion.',
    image: '/images/arm-protection.webp',
    href: '/applications/mixer-components',
  },
  {
    id: 'ceramic-rubber',
    category: 'LINERS',
    categoryLabel: 'LINER COMPONENTS',
    title: 'Ceramic-Rubber Composite Panels',
    material: '92% Al2O3 Alumina',
    life: 'Zero Tile Cracking',
    description: 'Hexagonal 92% alumina ceramic blocks vulcanized into a resilient natural rubber matrix with steel backing.',
    image: '/images/ceramic-liners.webp',
    href: '/applications/wear-liners-transfer-protection',
  },
  {
    id: 'hardfaced-plate',
    category: 'LINERS',
    categoryLabel: 'LINER COMPONENTS',
    title: 'Chromium Carbide Overlay (CCO) Plate',
    material: '62 HRC CCO Cladding',
    life: '5x vs Mild Steel',
    description: 'Fused primary chromium carbide hardfacing on a ductile weldable steel backing plate for drop chutes.',
    image: '/images/hardfaced-plate.webp',
    href: '/applications/wear-liners-transfer-protection',
  },
  {
    id: 'modular-tiles',
    category: 'LINERS',
    categoryLabel: 'LINER COMPONENTS',
    title: 'Modular Cast Ni-Hard Chute Tiles',
    material: 'Ni-Hard IV / High Chrome',
    life: 'Heavy Gouging Grade',
    description: 'Standard and bespoke interlocking alloy wear blocks protecting aggregate bins against gouging abrasion.',
    image: '/images/rubber-ceramic.webp',
    href: '/applications/wear-liners-transfer-protection',
  },
  {
    id: 'elevator-buckets',
    category: 'ELEVATORS',
    categoryLabel: 'ELEVATOR COMPONENTS',
    title: 'Reinforced Heavy Elevator Buckets',
    material: 'AR400 / Hardox',
    life: 'Reinforced Wear Lip',
    description: 'High-capacity continuous and centrifugal buckets with welded wear lips engineered to scoop dense aggregate.',
    image: '/images/elevator-buckets.webp',
    href: '/applications/bucket-elevators',
  },
  {
    id: 'drive-sprockets',
    category: 'ELEVATORS',
    categoryLabel: 'ELEVATOR COMPONENTS',
    title: 'Elevator Traction Wheels & Sprockets',
    material: 'Flame Hardened 55 HRC',
    life: 'Segmented Replaceable',
    description: 'Segmented rim sprockets that allow tooth replacement without removing the central hub or disassembling shafts.',
    image: '/images/drive-sprockets.webp',
    href: '/applications/bucket-elevators',
  },
  {
    id: 'drag-links',
    category: 'DRAG CONVEYORS',
    categoryLabel: 'DRAG CONVEYOR COMPONENTS',
    title: 'Heavy Cast Drag Links & Conveyor Pins',
    material: 'Forged Alloy 8620',
    life: 'Case Hardened 60 HRC',
    description: 'Precision-cast flight links with induction-hardened pins engineered for extreme continuous tensile loads.',
    image: '/images/wearguard-parts.png',
    href: '/applications/drag-conveyors',
  },
  {
    id: 'get-tips',
    category: 'G.E.T. TIPS',
    categoryLabel: 'G.E.T. GROUND ENGAGING',
    title: 'Earthmoving Bucket Tips & Adapters',
    material: 'High Wear Resistant Alloys',
    life: 'Engineered Penetration Grade',
    description: 'Dependable penetration, impact resistance and long service life in harsh earthmoving and rock excavation conditions.',
    image: '/brochure/page-14.png',
    href: '/applications/earthmoving-bucket-tips',
  },
]

export const CATEGORIES = [
  { id: 'ALL COMPONENTS', label: 'All Equipment Sectors' },
  { id: 'DRYERS', label: 'Dryer Drums & Trunnions' },
  { id: 'FILTERS', label: 'Dust Filtration & Fans' },
  { id: 'MIXERS', label: 'Asphalt & Concrete Mixers' },
  { id: 'LINERS', label: 'Chute & Bin Wear Liners' },
  { id: 'ELEVATORS', label: 'Bucket Elevators & Drives' },
  { id: 'DRAG CONVEYORS', label: 'Drag Conveyors & Chains' },
  { id: 'G.E.T. TIPS', label: 'Ground Engaging Tips' },
] as const

export const MATERIALS_LIST = [
  'ALL METALLURGIES',
  'WearGuard P450',
  'High-Chrome Cr 28%',
  'Cast Ni-Hard & Z-Core',
  '62 HRC CCO Cladding',
  '92% Al2O3 Alumina',
  'High-Manganese Cast',
] as const

export function CatalogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL COMPONENTS')
  const [selectedMaterial, setSelectedMaterial] = useState<string>('ALL METALLURGIES')
  const [sortBy, setSortBy] = useState<'featured' | 'az' | 'za'>('featured')
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

  const filteredItems = useMemo(() => {
    let result = catalogItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL COMPONENTS' || item.category === selectedCategory

      const matchesMaterial =
        selectedMaterial === 'ALL METALLURGIES' ||
        item.material.toLowerCase().includes(selectedMaterial.toLowerCase())

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesMaterial && matchesSearch
    })

    if (sortBy === 'az') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'za') {
      result.sort((a, b) => b.title.localeCompare(a.title))
    }

    return result
  }, [selectedCategory, selectedMaterial, sortBy, searchQuery])

  const hasActiveFilters =
    selectedCategory !== 'ALL COMPONENTS' ||
    selectedMaterial !== 'ALL METALLURGIES' ||
    sortBy !== 'featured' ||
    searchQuery.trim() !== ''

  return (
    <section className={styles['catalog-section']}>
      <div className={styles['catalog-container']}>
        {/* TOP HEADER */}
        <div className={styles['catalog-header']}>
          <div className={styles['catalog-eyebrow-badge']}>
            <span className={styles['gear-icon']} aria-hidden="true">⚙</span>
            <span>Industrial Equipment Components Catalog</span>
          </div>

          <h1 className={styles['catalog-main-title']}>
            Precision Wear Components &amp;
            <br />
            Replacement Assemblies
          </h1>

          <p className={styles['catalog-subtitle']}>
            Engineered replacement parts for rotary drums, pugmills, pan mixers, chute transfer points, bucket elevators, baghouses, and heavy excavation machinery. Compatible with any OEM brand.
          </p>
        </div>

        {/* MINIMAL SWISS DROPDOWN CONTROL BAR */}
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
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className={styles['catalog-search-input']}
              placeholder="Search components or OEM specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* DROPDOWN SELECTORS GROUP */}
          <div className={styles['catalog-dropdown-group']}>
            {/* 1. SECTOR DROPDOWN */}
            <div className={styles['custom-dropdown-wrap']}>
              <label htmlFor="sector-select" className={styles['dropdown-label']}>SECTOR</label>
              <div className={styles['dropdown-select-box']}>
                <select
                  id="sector-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={styles['clean-dropdown-select']}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <span className={styles['dropdown-arrow-icon']} aria-hidden="true">▾</span>
              </div>
            </div>

            {/* 2. METALLURGY DROPDOWN */}
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
                      {mat === 'ALL METALLURGIES' ? 'All Metallurgies' : mat}
                    </option>
                  ))}
                </select>
                <span className={styles['dropdown-arrow-icon']} aria-hidden="true">▾</span>
              </div>
            </div>

            {/* 3. SORT ORDER DROPDOWN */}
            <div className={styles['custom-dropdown-wrap']}>
              <label htmlFor="sort-select" className={styles['dropdown-label']}>SORT</label>
              <div className={styles['dropdown-select-box']}>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'featured' | 'az' | 'za')}
                  className={styles['clean-dropdown-select']}
                >
                  <option value="featured">Featured Order</option>
                  <option value="az">Name (A → Z)</option>
                  <option value="za">Name (Z → A)</option>
                </select>
                <span className={styles['dropdown-arrow-icon']} aria-hidden="true">▾</span>
              </div>
            </div>

            {/* RESET FILTERS */}
            {hasActiveFilters && (
              <button
                type="button"
                className={styles['dropdown-reset-btn']}
                onClick={() => {
                  setSelectedCategory('ALL COMPONENTS')
                  setSelectedMaterial('ALL METALLURGIES')
                  setSortBy('featured')
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
            <strong>{filteredItems.length}</strong> components available
          </span>
          <Link href="/contact" className={styles['catalog-quick-rfq-pill']}>
            <span>Request Custom Batch RFQ</span>
            <Arrow />
          </Link>
        </div>

        {/* 3-COLUMN RESPONSIVE PRODUCT CARD GRID */}
        <h2 className="sr-only">Browse Components by Equipment Type and Alloy Specification</h2>
        <motion.div layout className={styles['catalog-cards-grid']}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
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
                {/* CARD IMAGE WITH CATEGORY BADGE */}
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

                {/* CARD BODY */}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className={styles['catalog-empty-state']}>
            <p>No components found matching your selected dropdown filters.</p>
            <button
              type="button"
              className={styles['catalog-clear-btn']}
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('ALL COMPONENTS')
                setSelectedMaterial('ALL METALLURGIES')
                setSortBy('featured')
              }}
            >
              Reset all dropdown filters
            </button>
          </div>
        )}
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
