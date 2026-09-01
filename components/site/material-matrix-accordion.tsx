'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow, Button } from '@/components/site/ui'
import { materialGrades, MaterialGrade } from '@/lib/site-data'

export function MaterialMatrixAccordion() {
  // Allow toggling expanded row (default to first grade open or null)
  const [expandedCode, setExpandedCode] = useState<string | null>('01')

  const toggleRow = (code: string) => {
    setExpandedCode((prev) => (prev === code ? null : code))
  }

  return (
    <div className="matrix-table-wrap">
      <table className="matrix-table">
        <thead>
          <tr>
            <th style={{ width: '60px' }}></th>
            <th>Grade Code</th>
            <th>Alloy Family</th>
            <th>Hardness</th>
            <th>Impact Toughness</th>
            <th>Max Temp</th>
            <th>Primary Wear Mechanism</th>
          </tr>
        </thead>
        <tbody>
          {materialGrades.map((grade) => {
            const isExpanded = expandedCode === grade.code
            return (
              <MaterialRowGroup
                key={grade.code}
                grade={grade}
                isExpanded={isExpanded}
                onToggle={() => toggleRow(grade.code)}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function MaterialRowGroup({
  grade,
  isExpanded,
  onToggle,
}: {
  grade: MaterialGrade
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <>
      <tr
        className={`matrix-interactive-row ${isExpanded ? 'row-active' : ''}`}
        onClick={onToggle}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
      >
        <td className="matrix-toggle-cell">
          <button
            type="button"
            className={`matrix-chevron-btn ${isExpanded ? 'rotated' : ''}`}
            aria-label={`Toggle details for ${grade.name}`}
            onClick={(e) => {
              e.stopPropagation()
              onToggle()
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </td>
        <td>
          <span className="matrix-code-badge">{grade.code}</span>
        </td>
        <td>
          <strong>{grade.name}</strong>
          <span className="matrix-cat-sub">{grade.category}</span>
        </td>
        <td>
          <span className="matrix-val-chip">{grade.hardness}</span>
        </td>
        <td>{grade.impactResistance}</td>
        <td>{grade.tempLimit}</td>
        <td>
          <div className="matrix-primary-use-wrap">
            <span>{grade.primaryUse}</span>
            <span className="matrix-row-cta-hint">
              {isExpanded ? 'Close details ▴' : 'View specs ▾'}
            </span>
          </div>
        </td>
      </tr>

      {/* EXPANDABLE DETAIL DRAWER ROW */}
      {isExpanded && (
        <tr className="matrix-expanded-tr">
          <td colSpan={7} className="matrix-expanded-td">
            <div className="material-detail-stage inside-table-stage">
              <div className="material-stage-inner">
                {/* LEFT CONTENT COLUMN */}
                <div className="material-content-col">
                  <div className="material-code-row">
                    <span className="material-code-pill">GRADE {grade.code} / 06</span>
                    <span className="material-hardness-badge">{grade.hardness}</span>
                  </div>

                  <h3 className="material-grade-title">{grade.name}</h3>
                  <p className="material-category-tag">{grade.category}</p>

                  <p className="material-grade-desc">{grade.desc}</p>

                  {/* TELEMETRY SPECS MATRIX */}
                  <div className="material-specs-box">
                    <div className="spec-row-item">
                      <span className="spec-label">Chemical Matrix</span>
                      <span className="spec-val-mono">{grade.composition}</span>
                    </div>
                    <div className="spec-row-item">
                      <span className="spec-label">Impact Resistance</span>
                      <span className="spec-val">{grade.impactResistance}</span>
                    </div>
                    <div className="spec-row-item">
                      <span className="spec-label">Thermal Limit</span>
                      <span className="spec-val">{grade.tempLimit}</span>
                    </div>
                    <div className="spec-row-item">
                      <span className="spec-label">Primary Application</span>
                      <span className="spec-val">{grade.primaryUse}</span>
                    </div>
                  </div>

                  {/* KEY ENGINEERING HIGHLIGHTS */}
                  <div className="material-highlights-list">
                    {grade.highlights.map((h, i) => (
                      <div key={i} className="material-highlight-item">
                        <span className="material-check-icon">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="material-action-row">
                    <Button href="/contact">
                      Request Grade {grade.code} Quote
                    </Button>
                    <Link href="/custom-parts" className="about-sub-link">
                      <span>Custom drawing submission</span>
                      <Arrow />
                    </Link>
                  </div>
                </div>

                {/* RIGHT VISUAL COLUMN */}
                <div className="material-visual-col">
                  <div className="material-visual-frame">
                    <img
                      src={grade.image}
                      alt={grade.name}
                      className="material-visual-img"
                    />

                    {/* SPEC BADGE OVERLAY */}
                    <div className="material-visual-badge">
                      <strong>{grade.hardness}</strong>
                      <span>{grade.category.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
