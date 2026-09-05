'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow } from '@/components/site/ui'

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
    image: '/images/drag-conveyors-3d.png',
    href: '/applications/drag-conveyors-feeders',
  },
  {
    id: 'get-tips',
    category: 'G.E.T. TIPS',
    categoryLabel: 'G.E.T. GROUND ENGAGING',
    title: 'Heavy Excavator & Loader Tooth Systems',
    material: 'High-Manganese Cast',
    life: 'Severe Impact Grade',
    description: 'Self-sharpening bucket teeth and corner adapters cast in work-hardening manganese alloy for quarry rock.',
    image: '/images/asphalt-plant-hero.png',
    href: '/custom-parts',
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
  const [openCardSpecs, setOpenCardSpecs] = useState<Record<string, boolean>>({})

  const toggleCardSpecs = (id: string) => {
    setOpenCardSpecs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

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
        item.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesMaterial && matchesSearch
    })

    if (sortBy === 'az') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'za') {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title))
    }

    return result
  }, [selectedCategory, selectedMaterial, sortBy, searchQuery])

  const hasActiveFilters =
    selectedCategory !== 'ALL COMPONENTS' ||
    selectedMaterial !== 'ALL METALLURGIES' ||
    searchQuery.trim() !== '' ||
    sortBy !== 'featured'

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        {/* TOP HEADER */}
        <div className="catalog-header">
          <div className="catalog-eyebrow-badge">
            <span className="gear-icon" aria-hidden="true">⚙</span>
            <span>Industrial Equipment Components Catalog</span>
          </div>

          <h1 className="catalog-main-title">
            Precision Wear Components &amp;
            <br />
            Replacement Assemblies
          </h1>

          <p className="catalog-subtitle">
            Engineered replacement parts for rotary drums, pugmills, pan mixers, chute transfer points, bucket elevators, baghouses, and heavy excavation machinery. Compatible with any OEM brand.
          </p>
        </div>

        {/* MINIMAL SWISS DROPDOWN CONTROL BAR */}
        <div className="catalog-dropdown-toolbar">
          {/* SEARCH INPUT */}
          <div className="catalog-search-wrap">
            <svg
              className="catalog-search-icon"
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
              className="catalog-search-input"
              placeholder="Search components or OEM specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* DROPDOWN SELECTORS GROUP */}
          <div className="catalog-dropdown-group">
            {/* 1. SECTOR DROPDOWN */}
            <div className="custom-dropdown-wrap">
              <label htmlFor="sector-select" className="dropdown-label">SECTOR</label>
              <div className="dropdown-select-box">
                <select
                  id="sector-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="clean-dropdown-select"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <span className="dropdown-arrow-icon" aria-hidden="true">▾</span>
              </div>
            </div>

            {/* 2. METALLURGY DROPDOWN */}
            <div className="custom-dropdown-wrap">
              <label htmlFor="material-select" className="dropdown-label">METALLURGY</label>
              <div className="dropdown-select-box">
                <select
                  id="material-select"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="clean-dropdown-select"
                >
                  {MATERIALS_LIST.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat === 'ALL METALLURGIES' ? 'All Metallurgies' : mat}
                    </option>
                  ))}
                </select>
                <span className="dropdown-arrow-icon" aria-hidden="true">▾</span>
              </div>
            </div>

            {/* 3. SORT ORDER DROPDOWN */}
            <div className="custom-dropdown-wrap">
              <label htmlFor="sort-select" className="dropdown-label">SORT</label>
              <div className="dropdown-select-box">
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'featured' | 'az' | 'za')}
                  className="clean-dropdown-select"
                >
                  <option value="featured">Featured Order</option>
                  <option value="az">Name (A → Z)</option>
                  <option value="za">Name (Z → A)</option>
                </select>
                <span className="dropdown-arrow-icon" aria-hidden="true">▾</span>
              </div>
            </div>

            {/* RESET FILTERS */}
            {hasActiveFilters && (
              <button
                type="button"
                className="dropdown-reset-btn"
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
        <div className="catalog-status-bar">
          <span className="catalog-count-badge">
            <strong>{filteredItems.length}</strong> components available
          </span>
          <Link href="/contact" className="catalog-quick-rfq-pill">
            <span>Request Custom Batch RFQ</span>
            <Arrow />
          </Link>
        </div>

        {/* 4-COLUMN CARDS GRID WITH DROPDOWN SPEC DRAWERS */}
        <motion.div layout className="catalog-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isSpecsOpen = !!openCardSpecs[item.id]

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="catalog-card"
                >
                  {/* IMAGE CONTAINER */}
                  <div className="catalog-card-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="catalog-card-img"
                      loading="lazy"
                    />
                  </div>

                  {/* CARD BODY */}
                  <div className="catalog-card-body">
                    <span className="catalog-category-tag">{item.categoryLabel}</span>
                    <h3 className="catalog-card-title">
                      <Link href={item.href}>{item.title}</Link>
                    </h3>
                    <p className="catalog-card-desc">{item.description}</p>

                    {/* COLLAPSIBLE SPECIFICATION ACCORDION / DROPDOWN */}
                    <div className="card-spec-accordion-wrap">
                      <button
                        type="button"
                        className={`card-spec-toggle-btn ${isSpecsOpen ? 'open' : ''}`}
                        onClick={() => toggleCardSpecs(item.id)}
                        aria-expanded={isSpecsOpen}
                      >
                        <span>{isSpecsOpen ? 'Hide Engineering Specs' : 'Engineering Specifications'}</span>
                        <span className="spec-chevron-icon" aria-hidden="true">
                          {isSpecsOpen ? '▲' : '▼'}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isSpecsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="card-spec-drawer-content"
                          >
                            <div className="card-spec-matrix">
                              <div className="spec-row">
                                <span className="spec-lbl">Metallurgy:</span>
                                <span className="spec-val">{item.material}</span>
                              </div>
                              <div className="spec-row">
                                <span className="spec-lbl">Wear Life:</span>
                                <span className="spec-val">{item.life}</span>
                              </div>
                              <div className="spec-row">
                                <span className="spec-lbl">Compatibility:</span>
                                <span className="spec-val">OEM Direct Drop-in</span>
                              </div>
                              <div className="spec-row">
                                <span className="spec-lbl">Lead Time:</span>
                                <span className="spec-val">In-Stock / 14 Days</span>
                              </div>
                            </div>
                            <Link href="/contact" className="spec-drawer-rfq-link">
                              Request Part Drawing &amp; Quote →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="catalog-empty-state">
            <p>No components found matching your selected dropdown filters.</p>
            <button
              type="button"
              className="catalog-clear-btn"
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
    </section>
  )
}
