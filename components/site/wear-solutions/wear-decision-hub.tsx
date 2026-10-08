'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import styles from './wear-decision-hub.module.css'

export interface RecommendedMetallurgyRow {
  grade: string
  hardness: string
  application: string
}

export interface WearTabScenario {
  id: string
  code: string
  tabLabel: string
  category: string
  title: string
  equipmentScope: string
  mechanismSummary: string
  metallurgyTable: RecommendedMetallurgyRow[]
  whyMechanismHappens: string
  whyAlloyResists: string
  engineeringConsideration: string
}

const WEAR_TABS: WearTabScenario[] = [
  {
    id: 'mixing-slurry',
    code: '01',
    tabLabel: 'Asphalt Batch Plants',
    category: 'Asphalt Batch Plants',
    title: 'Severe Gouging Abrasion & Sand Slurry Wear',
    equipmentScope: 'Asphalt batch plant mixer paddle tips, floor tiles, mixer arms, shaft protection sleeves, scraper blades',
    mechanismSummary: 'Abrasive quartz, sand, and coarse aggregates trapped in high-shear aggregate slurries continually scour mixer paddles and floor liners under heavy compressive torque. The hard particles act as microscopic cutting tools, steadily grooving metal surfaces and rounding leading-edge blade geometry.',
    metallurgyTable: [
      {
        grade: 'Wearcast 600',
        hardness: '600–680 BHN',
        application: 'Mixer paddle tips, scraper blades, and high-abrasion leading edges',
      },
      {
        grade: 'WearGuard P450',
        hardness: '450 BHN',
        application: 'Mixer floor tiles, tub liners, and side wall wear plates',
      },
      {
        grade: 'EnduraCast Z-Core Liners',
        hardness: '58–65 HRC',
        application: 'Extreme abrasive and recycling mixer zones',
      },
    ],
    whyMechanismHappens: 'When aggregate particle hardness exceeds the matrix hardness of standard cast iron or mild steel, abrasive grains penetrate the surface and cut micro-furrows. Over time, tip rounding increases blade-to-floor clearance, reducing mixing uniformity and causing material slippage.',
    whyAlloyResists: 'Wearcast 600 features an ultra-dense network of eutectic M7C3 chromium carbides embedded within a martensitic matrix. These hard carbides resist micro-cutting from sharp silica particles, preserving blade profile geometry significantly longer than standard low-alloy cast iron.',
    engineeringConsideration: 'Tramp iron or oversized rock bypassing feed screens can deliver shock impacts that fracture brittle cast iron. Using shock-tough ductile iron arm mountings alongside sacrificial high-chrome wear sleeves shields the structural components while maintaining maximum wear resistance on the leading edge.',
  },
  {
    id: 'chute-impact',
    code: '02',
    tabLabel: 'Impact & Chute Protection',
    category: 'Drop Chutes, Feed Hoppers, Rock Boxes & Skirt Liners',
    title: 'High-Drop Kinetic Impact & Severe Sliding Scour',
    equipmentScope: 'Primary truck dump hoppers, crusher feed chutes, conveyor transfer boxes, skirt liners',
    mechanismSummary: 'Heavy rock and coarse aggregate falling from transfer conveyor heights exert localized kinetic shock upon striking chute walls, followed by high-velocity sliding friction along discharge slopes. Single-phase materials rarely resist both forces effectively: brittle plates crack under drop impact, while soft steels wear through rapidly under sliding friction.',
    metallurgyTable: [
      {
        grade: 'Ceramic-Rubber Composite Liners',
        hardness: '9 Mohs (~1400 HV)',
        application: 'Direct impact zones and high-drop transfer chutes',
      },
      {
        grade: 'WearGuard P500',
        hardness: '500 BHN',
        application: 'Deflector baffles, rock-box shelves, and sliding skirts',
      },
      {
        grade: 'Chrome-Carbide Overlay (CCO)',
        hardness: '58–64 HRC',
        application: 'High-velocity sliding discharge aprons',
      },
    ],
    whyMechanismHappens: 'Impact and sliding represent contrasting mechanical stresses. Monolithic high-hardness ceramics or white iron lack the fracture toughness to absorb dynamic rock shocks without chipping, whereas ductile carbon steels deform and scour through under continuous abrasive ore flow.',
    whyAlloyResists: 'Ceramic-rubber composites combine high-alumina ceramic tiles with an energy-absorbing vulcanized rubber matrix. The rubber matrix elastically cushions dynamic impact shocks, while the hard alumina ceramic surface resists sliding aggregate wear.',
    engineeringConsideration: 'In wet aggregate operations, fine clay buildup can bridge chute throats. Installing rubber-backed composite panels provides enough elasticity to help shed caked material while protecting chute structural walls from mechanical cleaning strikes.',
  },
  {
    id: 'dryer-thermal',
    code: '03',
    tabLabel: 'High-Temperature Thermal Cycling',
    category: 'Rotary Dryer Drums, Burner Chambers & Discharge Inlets',
    title: 'Direct Flame Radiation & Hot Cascading Abrasion',
    equipmentScope: 'CFD lifter flights, drum shell liners, drive girth gears, sprockets, trunnions, RAP inlets',
    mechanismSummary: 'Rotary drying drums expose internal components to hot combustion gases and continuous aggregate tumbling. Metal surfaces undergo thermal expansion, cyclic surface oxidation, and temperature-induced temper loss, accelerating metal loss across cascading lifters.',
    metallurgyTable: [
      {
        grade: 'Wearcast 600 / Ultra 800',
        hardness: '550–680+ BHN',
        application: 'Combustion zone lifter flights (up to 950°C)',
      },
      {
        grade: 'WearGuard P450',
        hardness: '450 BHN',
        application: 'Mid-drum cascading flights and shell wear liners',
      },
      {
        grade: 'Wearcast High-Chrome Castings',
        hardness: '600–680 BHN',
        application: 'RAP feed collars and burner discharge liners',
      },
    ],
    whyMechanismHappens: 'Standard structural steels and low-alloy plates lose structural yield strength and hardness at elevated temperatures. Once heat softens the metal matrix, abrasive aggregate cascading across the lifters thins the flight profiles, causing lifter warpage and collapsing the aggregate veil.',
    whyAlloyResists: 'Wearcast high-chromium cast alloys contain elevated chromium levels that form a protective, adherent chromium oxide scale at elevated temperatures. This layer resists thermal oxidation, while the stable carbide microstructure retains hardness under continuous thermal cycling.',
    engineeringConsideration: 'Adding Reclaimed Asphalt Pavement (RAP) introduces sticky binder residues that can bake onto hot surfaces. Angled, self-shedding lifter profiles cast in oxidation-resistant alloys prevent material caking and maintain an unbroken aggregate curtain across the burner flame.',
  },
  {
    id: 'baghouse-corrosion',
    code: '04',
    tabLabel: 'Acid Dew-Point & Dust Erosion',
    category: 'Asphalt Baghouses, Exhaust Fans, Ductwork & Scrubber Plenums',
    title: 'Flue Gas Acid Condensation & High-Velocity Particulate Erosion',
    equipmentScope: 'Precision welded filter cages, high-temp filter bags, induced draft fan liners, scroll plates',
    mechanismSummary: 'Exhaust gas streams containing sulfur oxides and water vapor can fall below the acid dew point during startup and shutdown cycles, forming corrosive condensates. Concurrently, fine entrained mineral dust carried at high gas velocities erodes fan blades, scrolls, and ductwork transitions.',
    metallurgyTable: [
      {
        grade: 'Chrome-Carbide Overlay (CCO)',
        hardness: '58–64 HRC',
        application: 'Exhaust fan blades, housing scrolls, and duct transitions',
      },
      {
        grade: 'WearGuard P400',
        hardness: '400 BHN',
        application: 'Baghouse hopper cone liners and drop-out boxes',
      },
      {
        grade: 'Electro-Coated / Stainless Wire',
        hardness: 'Burr-Free Finish',
        application: 'Acid-resistant 12 to 24-wire filter star cages',
      },
    ],
    whyMechanismHappens: 'Fine mineral particulates traveling at high velocity generate solid-particle impingement erosion on duct transitions and fan impellers. If acidic condensates form on mild steel surfaces, chemical corrosion removes protective oxide films, exposing fresh metal to immediate mechanical erosion.',
    whyAlloyResists: 'Chrome-carbide overlay plates feature dense chromium carbide crystals fused to a weldable structural steel backplate. The high carbide volume resists fine particle erosion, while the alloy chemistry withstands acidic combustion moisture.',
    engineeringConsideration: 'Filter cage surface quality is critical to bag durability. Wire cages with rough spot-weld burrs abrade and cut filter fabric during pulse-jet cleaning cycles; robotic CNC welding produces a burr-free finish that preserves filter media integrity.',
  },
  {
    id: 'elevator-tension',
    code: '05',
    tabLabel: 'Elevator & Drag Conveyance',
    category: 'Bucket Elevators, Hot Drag Conveyors & Return Rails',
    title: 'High-Tension Cyclic Fatigue & Boot Scooping Abrasion',
    equipmentScope: 'Heavy elevator buckets, drop-forged drag flights, induction-hardened sprockets, matched chain links',
    mechanismSummary: 'Elevator buckets and drag flights dig through packed bulk solids in boot sections while operating under continuous cyclic chain tension. Sliding friction across conveyor trough floors combined with material packing in sprocket teeth accelerates wear on chain links and sprockets.',
    metallurgyTable: [
      {
        grade: 'WearGuard P450',
        hardness: '450 BHN',
        application: 'Conveyor trough bottoms, side liners, and return rails',
      },
      {
        grade: 'WearGuard P500',
        hardness: '500 BHN',
        application: 'Reinforced bucket digging lips and scraper edges',
      },
      {
        grade: 'Induction-Hardened Alloy Steel',
        hardness: '50–55 HRC',
        application: 'Segmented drive sprockets and chain track components',
      },
    ],
    whyMechanismHappens: 'Scooping abrasive aggregate under high mechanical tension produces sliding wear on bucket leading edges and tension fatigue in chain sidebars. Uneven chain elongation can cause surging, sprocket tooth scrub, and premature drive component failure.',
    whyAlloyResists: 'Through-hardened WearGuard P450 and P500 steel plates offer a uniform martensitic microstructure with balanced toughness and hardness. They resist groove formation under sliding bulk material while tolerating cyclic tension without cracking.',
    engineeringConsideration: 'Dual-strand elevators require closely matched chain lengths. Operating with mismatched chain strands concentrates driving tension onto the shorter strand, causing uneven sprocket tooth wear and increasing chain fatigue.',
  },
  {
    id: 'get-ground',
    code: '06',
    tabLabel: 'Ground Engaging Tools',
    category: 'Excavator Bucket Tips, Wheel Loader Teeth, Lip & Heel Shrouds',
    title: 'High Compressive Penetration & Impact Gouging',
    equipmentScope: 'Penetration chisel tips, heavy rock teeth, excavator lip shrouds, heel shrouds, weld-on adapters',
    mechanismSummary: 'Excavator and loader bucket teeth experience heavy compressive forces, gouging abrasion against blasted rock, and severe prying loads when breaking into consolidated material. Abrasive mineral contact blunts penetrating edges while high shock loading tests casting toughness.',
    metallurgyTable: [
      {
        grade: 'Wearcast High-Toughness Alloys',
        hardness: '52–56 HRC',
        application: 'Rock chisel and heavy penetration bucket teeth',
      },
      {
        grade: 'WearGuard P500',
        hardness: '500 BHN',
        application: 'Bucket wear strips, heel plates, and liner packages',
      },
      {
        grade: 'Austenitic Manganese Steel',
        hardness: 'Work-Hardening',
        application: 'High-impact bucket lip protectors and cast shrouds',
      },
    ],
    whyMechanismHappens: 'Soft steel teeth blunt rapidly under quartz abrasive friction, increasing machine hydraulic resistance and fuel burn. Conversely, overly brittle high-hardness castings can snap across the adapter pocket under sudden corner-prying leverage.',
    whyAlloyResists: 'Differential heat-treating provides a high-hardness outer wear face to resist abrasive rock gouging, combined with a tough, ductile inner core around the adapter pocket to absorb severe prying shock loads without catastrophic fracture.',
    engineeringConsideration: 'Matching the tip profile to the operating geology is critical: sharp penetration profiles excel in dense, compacted ground where breakout force is prioritized, whereas heavy rock profiles with extra sacrificial wear metal provide longer life in abrasive blasted stone.',
  },
]

function WearPatternIcon({ code }: { code: string }) {
  switch (code) {
    case '01':
      // Abrasion scratch / sliding grooves
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="10" />
          <line x1="4" y1="12" x2="20" y2="16" />
          <line x1="4" y1="18" x2="16" y2="21" />
        </svg>
      )
    case '02':
      // Kinetic impact crater / point impact
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <path d="M12 2v9M7 7l5 4 5-4" />
          <path d="M4 19l4-3 4 4 4-4 4 3" />
        </svg>
      )
    case '03':
      // Heat thermal radiation waves
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <path d="M8 4c-1.5 3-1.5 5 0 8s1.5 5 0 8" />
          <path d="M12 4c-1.5 3-1.5 5 0 8s1.5 5 0 8" />
          <path d="M16 4c-1.5 3-1.5 5 0 8s1.5 5 0 8" />
        </svg>
      )
    case '04':
      // Acid droplet / chemical pitting
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <path d="M12 3c-4 5.5-6 8.5-6 12a6 6 0 0012 0c0-3.5-2-6.5-6-12z" />
          <path d="M9.5 15a2.5 2.5 0 002.5 2.5" />
        </svg>
      )
    case '05':
      // Conveyor chain link / tension link
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <rect x="7" y="3" width="10" height="7" />
          <rect x="7" y="14" width="10" height="7" />
          <line x1="12" y1="10" x2="12" y2="14" />
        </svg>
      )
    case '06':
      // Chisel / tooth profile
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <path d="M4 19h16l-3-12H7L4 19z" />
          <line x1="10" y1="7" x2="10" y2="19" />
          <line x1="14" y1="7" x2="14" y2="19" />
        </svg>
      )
    default:
      return null
  }
}

export function WearDecisionHub() {
  const [activeTabId, setActiveTabId] = useState<string>(WEAR_TABS[0].id)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const activeScenario = WEAR_TABS.find((tab) => tab.id === activeTabId) || WEAR_TABS[0]

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId)
    setIsExpanded(false) // Reset expansion on tab change
    panelRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.hubContainer}>
      {/* 2. WEAR-TYPE TAB SELECTOR (UNIFIED STICKY SIDEBAR DOCKED ON LEFT) */}
      <nav className={styles.tabSelectorNav} aria-label="Wear pattern classifications">
        <div className={styles.sidebarPanel}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarLabel}>Wear Pattern Navigation</span>
            <span className={styles.sidebarCount}>6 CLASSIFICATIONS</span>
          </div>
          <div className={styles.tabTrack}>
            {WEAR_TABS.map((tab) => {
              const isActive = tab.id === activeTabId
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                >
                  <span className={styles.tabIcon} aria-hidden="true">
                    <WearPatternIcon code={tab.code} />
                  </span>
                  <div className={styles.tabTextGroup}>
                    <span className={styles.tabCode}>TYPE {tab.code}</span>
                    <span className={styles.tabTitleText}>{tab.tabLabel}</span>
                  </div>
                  <span className={styles.tabArrow} aria-hidden="true">
                    →
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* 3. ACTIVE TAB PANEL (NATURAL FULL-HEIGHT INDUSTRIAL CARD) */}
      <div ref={panelRef} className={styles.tabPanel} role="tabpanel">
        {/* PANEL HEADER */}
        <header className={styles.panelHeader}>
          <div className={styles.metaRow}>
            <span className={styles.codeBadge}>WEAR TYPE {activeScenario.code}</span>
            <span className={styles.categoryName}>{activeScenario.category}</span>
          </div>
          <h3 className={styles.panelTitle}>{activeScenario.title}</h3>
        </header>

        {/* ALWAYS VISIBLE CONTENT BLOCK (ABOVE THE FOLD, NO EXPANDING NEEDED) */}
        <div className={styles.alwaysVisibleBlock}>
          {/* EQUIPMENT SCOPE */}
          <div className={styles.scopeBox}>
            <span className={styles.scopeLabel}>Equipment Scope:</span>
            <p className={styles.scopeText}>{activeScenario.equipmentScope}</p>
          </div>

          {/* TRIBOLOGICAL WEAR MECHANISM */}
          <div className={styles.mechanismBox}>
            <h4 className={styles.mechanismHeading}>Tribological Wear Mechanism</h4>
            <p className={styles.mechanismText}>{activeScenario.mechanismSummary}</p>
          </div>

          {/* RECOMMENDED METALLURGY TABLE (3 ROWS MAX, GROUNDED IN /materials) */}
          <div className={styles.metallurgyTableWrap}>
            <h4 className={styles.tableHeading}>Recommended Metallurgy (3-Grade Specification)</h4>
            <div className={styles.tableResponsiveContainer}>
              <table className={styles.specTable}>
                <thead>
                  <tr>
                    <th scope="col">Grade Name</th>
                    <th scope="col">Hardness</th>
                    <th scope="col">Where It Is Used</th>
                  </tr>
                </thead>
                <tbody>
                  {activeScenario.metallurgyTable.map((row, idx) => (
                    <tr key={idx}>
                      <td className={styles.gradeCell}>
                        <strong>{row.grade}</strong>
                      </td>
                      <td className={styles.hardnessCell}>{row.hardness}</td>
                      <td className={styles.applicationCell}>{row.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* COLLAPSED BY DEFAULT IN-DEPTH ACCORDION ("LEARN MORE") */}
        <div className={styles.disclosureSection}>
          <button
            type="button"
            className={styles.disclosureToggleBtn}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            <span>
              {isExpanded
                ? 'Hide In-Depth Failure & Metallurgy Analysis'
                : 'In-Depth Engineering Analysis (Failure Mechanics, Metallurgy & Operational Considerations)'}
            </span>
            <span className={styles.disclosureArrow} aria-hidden="true">
              {isExpanded ? '▲' : '▼'}
            </span>
          </button>

          {isExpanded && (
            <div className={styles.expandedContent}>
              {/* WHY THIS WEAR MECHANISM HAPPENS */}
              <div className={styles.analysisBlock}>
                <h5 className={styles.analysisTitle}>Why This Wear Mechanism Happens</h5>
                <p className={styles.analysisText}>{activeScenario.whyMechanismHappens}</p>
              </div>

              {/* WHY THIS ALLOY RESISTS IT */}
              <div className={styles.analysisBlock}>
                <h5 className={styles.analysisTitle}>Why This Alloy Resists It</h5>
                <p className={styles.analysisText}>{activeScenario.whyAlloyResists}</p>
              </div>

              {/* ENGINEERING CONSIDERATION (REPLACES EDGE CASE) */}
              <div className={styles.considerationBlock}>
                <h5 className={styles.considerationTitle}>Engineering Consideration</h5>
                <p className={styles.considerationText}>{activeScenario.engineeringConsideration}</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA AT BOTTOM OF TAB ONLY */}
        <footer className={styles.panelFooter}>
          <Link href="/contact" className={styles.tabCtaButton}>
            <span>Request a Wear Audit</span>
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </div>
  )
}
