'use client'

import { useState } from 'react'
import styles from './wear-solutions-page.module.css'

interface DiagnosisItem {
  id: string
  number: string
  question: string
  diagnosis: string
  solutionLabel: string
  solution: string
}

const DIAGNOSIS_ITEMS: DiagnosisItem[] = [
  {
    id: 'mixer-grooving',
    number: '01',
    question: 'Why do pugmill and mixer paddles groove or wash out within months?',
    diagnosis: 'Sharp quartz sand and coarse aggregate particles trapped in high-shear aggregate slurries generate continuous micro-machining abrasion. When aggregate mineral hardness exceeds that of standard cast iron or low-alloy blades, particles gouge the metal surface, rounding blade profiles and widening floor clearance.',
    solutionLabel: 'Engineered Solution',
    solution: 'Wearcast 600 high-chromium eutectic cast alloys with dense M7C3 primary carbides embedded in a martensitic matrix. The chromium carbide network blocks quartz penetration, preserving blade profile geometry and maintaining blade clearance significantly longer than standard low-alloy blades.',
  },
  {
    id: 'ceramic-cracking',
    number: '02',
    question: 'Why do ceramic liner tiles crack or dislodge in transfer chutes?',
    diagnosis: 'Monolithic alumina ceramic tiles possess exceptional sliding abrasion resistance (9 Mohs) but inherently low fracture toughness. Large rock fragments falling from transfer heights deliver concentrated kinetic shock that exceeds the ceramic fracture threshold, shattering unbacked tiles.',
    solutionLabel: 'Engineered Solution',
    solution: 'Dual-phase Ceramic-Rubber Composite panels, where hexagonal alumina tiles are vulcanized in a resilient rubber matrix. The rubber cushions dynamic impact forces, preventing tile fracture while the ceramic surface withstands continuous aggregate scour.',
  },
  {
    id: 'dryer-flight-warp',
    number: '03',
    question: 'Why do rotary dryer flights warp, crack or fail to lift aggregates?',
    diagnosis: 'Continuous exposure to burner radiation and hot tumbling stone causes structural temper loss in carbon steel and low-alloy plates. Thermal cycling promotes surface oxidation scaling and thermal fatigue, causing lifter profiles to deform, sag, and break aggregate veil curtains.',
    solutionLabel: 'Engineered Solution',
    solution: 'Wearcast 600 / Ultra 800 high-temperature cast alloys rated for continuous operation up to 950°C. High chromium content forms a protective, adherent oxide layer that resists scaling and retains rigidity across rigorous thermal duty cycles.',
  },
  {
    id: 'baghouse-blinding',
    number: '04',
    question: 'Why do baghouse filter bags blind and cause severe plant draft drops?',
    diagnosis: 'Exhaust gas temperatures dropping below the acid dew point cause sulfur oxides and moisture to condense into sulfuric acid, creating moist particulate cakes that choke bag permeability. Concurrently, rough or corroded wire cages abrade and slice delicate bag fibers during pulse-jet cycles.',
    solutionLabel: 'Engineered Solution',
    solution: 'High-temperature Nomex and PTFE-membrane needlefelt bags matched to operating gas chemistry, supported by robotically CNC-welded, burr-free electro-coated or stainless wire star cages that provide uniform structural support without mechanical fiber cuts.',
  },
  {
    id: 'conveyor-wear-through',
    number: '05',
    question: 'Why does conveyor casing wear through despite thick carbon steel plates?',
    diagnosis: 'Sliding friction under heavy aggregate beds produces high shear contact along bottom trough plates. When chain stretch or misalignment causes drag flights to track unevenly, localized gouging rapidly thins mild steel plates at trough transitions.',
    solutionLabel: 'Engineered Solution',
    solution: 'Replaceable bolt-in liners in through-hardened WearGuard P450 martensitic plate or Chrome-Carbide Overlay (CCO) clad plate, fastened with countersunk bolts to maintain an unobstructed sliding floor with significantly improved abrasion resistance.',
  },
  {
    id: 'failure-identification',
    number: '06',
    question: 'How do I determine whether my failure is impact fracture or abrasive gouging?',
    diagnosis: 'Visual examination of the worn component reveals the predominant failure mode. Impact failure presents as sharp through-thickness fractures, chipped edges, or brittle cleavage spalls. In contrast, abrasive gouging shows parallel directional furrows, smooth rounded edges, and polished micro-cutting tracks.',
    solutionLabel: 'Engineering Assessment',
    solution: 'Send high-resolution photos, component dimensions, and operational notes to our metallurgical engineering team. We assess the physical wear mechanics and recommend an alloy grade engineered for your site conditions.',
  },
]

export function WearDiagnosisFaq() {
  const [openId, setOpenId] = useState<string | null>('mixer-grooving')

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className={styles.faqList}>
      {DIAGNOSIS_ITEMS.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
            <button
              type="button"
              className={styles.faqTrigger}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span>
                <span className={styles.faqTriggerNumber}>{item.number}</span>
                {item.question}
              </span>
              <span className={styles.faqIcon} aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className={styles.faqBody}>
                <p className={styles.faqDiagnosisText}>{item.diagnosis}</p>
                <div className={styles.faqSolutionBox}>
                  <span className={styles.faqSolutionTitle}>{item.solutionLabel}</span>
                  <p className={styles.faqSolutionText}>{item.solution}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
