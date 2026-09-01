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

const CATEGORIES = [
  'ALL COMPONENTS',
  'DRYERS',
  'FILTERS',
  'MIXERS',
  'LINERS',
  'ELEVATORS',
  'DRAG CONVEYORS',
  'G.E.T. TIPS',
] as const

export function CatalogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL COMPONENTS')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = useMemo(() => {
    return catalogItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL COMPONENTS' || item.category === selectedCategory

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

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

        {/* SEARCH & CONTROL BAR */}
        <div className="catalog-control-bar">
          <div className="catalog-search-wrap">
            <svg
              className="catalog-search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="catalog-search-input"
              placeholder="Search components or OEM brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="catalog-status-cta">
            <span className="catalog-count-text">
              Showing <strong>{filteredItems.length}</strong> components
            </span>
            <Link href="/contact" className="catalog-quick-rfq-btn">
              Quick RFQ
            </Link>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="catalog-filter-tabs" role="tablist">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'ALL COMPONENTS'
                ? catalogItems.length
                : catalogItems.filter((i) => i.category === cat).length

            const isActive = selectedCategory === cat

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`catalog-tab-btn ${isActive ? 'active' : ''}`}
              >
                {cat} {cat === 'ALL COMPONENTS' ? `(${count})` : ''}
              </button>
            )
          })}
        </div>

        {/* 4-COLUMN CARDS GRID */}
        <motion.div layout className="catalog-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="catalog-card"
              >
                {/* IMAGE CONTAINER WITH BADGES */}
                <div className="catalog-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="catalog-card-img"
                    loading="lazy"
                  />

                  {/* OVERLAY BADGES (TOP RIGHT) */}
                  <div className="catalog-badges-overlay">
                    <span className="catalog-spec-badge material-badge">
                      {item.material}
                    </span>
                    <span className="catalog-spec-badge life-badge">
                      {item.life}
                    </span>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="catalog-card-body">
                  <span className="catalog-category-tag">{item.categoryLabel}</span>
                  <h3 className="catalog-card-title">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="catalog-card-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="catalog-empty-state">
            <p>No components found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              type="button"
              className="catalog-clear-btn"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('ALL COMPONENTS')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
