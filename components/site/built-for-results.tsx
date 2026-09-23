'use client'

import { FadeUp } from './motion'
import styles from './built-for-results.module.css'

export function BuiltForResults() {
  return (
    <section className={styles.sectionRoot}>
      <div className={styles.container}>
        {/* HEADER ROW */}
        <FadeUp className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowBar} aria-hidden="true" />
              <span>Why Choose Us</span>
            </div>
            <h2 className={styles.title}>
              Built for <span className={styles.titleMuted}>Results</span>
            </h2>
          </div>
        </FadeUp>

        {/* 3-CARD CAROUSEL / GRID */}
        <div className={styles.cardsTrack}>
          {/* CARD 1: Industry Expertise */}
          <FadeUp delay={0.08} className={styles.resultCard}>
            <div className={styles.diagramWrap}>
              <svg
                viewBox="0 0 280 220"
                className={styles.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Outer dashed orbit circle */}
                <circle
                  cx="140"
                  cy="110"
                  r="86"
                  stroke="rgba(255, 255, 255, 0.18)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                />
                {/* Counter-clockwise orbit curved arrows */}
                <path
                  d="M 64 110 A 76 76 0 0 1 140 34"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 60 102 L 64 110 L 72 108"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M 216 110 A 76 76 0 0 1 140 186"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 220 118 L 216 110 L 208 112"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />

                {/* Central Industrial Gear (Orange stroke) */}
                <g transform="translate(140, 110)">
                  {/* Gear teeth outline */}
                  <path
                    d="M -12 -38 L 12 -38 L 14 -28 L 26 -22 L 35 -29 L 49 -15 L 42 -2 L 44 12 L 54 18 L 47 34 L 34 32 L 24 40 L 26 53 L 8 57 L 2 46 L -12 46 L -18 57 L -36 53 L -34 40 L -44 32 L -57 34 L -54 18 L -44 12 L -42 -2 L -49 -15 L -35 -29 L -26 -22 L -14 -28 Z"
                    stroke="var(--orange, #C8370B)"
                    strokeWidth="1.75"
                    strokeLinejoin="miter"
                  />
                  {/* Outer hub circle */}
                  <circle cx="0" cy="0" r="24" stroke="var(--orange, #C8370B)" strokeWidth="1.4" />
                  {/* Inner bore */}
                  <circle cx="0" cy="0" r="11" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" />
                </g>
              </svg>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Industry Expertise</h3>
              <p className={styles.cardDesc}>
                Decades of experience delivering consistent, severe-service metallurgy and custom high-wear casting solutions that reliably outlast standard OEM components in complex abrasive environments.
              </p>
            </div>
          </FadeUp>

          {/* CARD 2: Tailored Scalability */}
          <FadeUp delay={0.16} className={styles.resultCard}>
            <div className={styles.diagramWrap}>
              <svg
                viewBox="0 0 280 220"
                className={styles.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Background base wireframe orbit curve */}
                <path
                  d="M 38 180 A 110 110 0 0 1 242 165"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1.2"
                />
                <path
                  d="M 48 180 A 90 90 0 0 1 232 170"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />

                {/* 4 Ascending Industrial Bar Columns */}
                <rect
                  x="78"
                  y="136"
                  width="20"
                  height="44"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.4"
                />
                <rect
                  x="108"
                  y="114"
                  width="20"
                  height="66"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.4"
                />
                <rect
                  x="138"
                  y="86"
                  width="20"
                  height="94"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.4"
                />
                <rect
                  x="168"
                  y="52"
                  width="20"
                  height="128"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.4"
                />

                {/* Sweeping Dynamic Orange Parabolic Growth Arrow */}
                <path
                  d="M 54 162 C 90 148, 142 98, 186 28"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                {/* Arrowhead */}
                <path
                  d="M 174 29 L 187 27 L 189 40"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2.4"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Tailored Scalability</h3>
              <p className={styles.cardDesc}>
                Flexible 1–10 unit low-volume production runs and bespoke pattern tooling with zero minimum order penalties, allowing urgent trial upgrades or scheduled plant campaign replenishments.
              </p>
            </div>
          </FadeUp>

          {/* CARD 3: Precision Execution */}
          <FadeUp delay={0.24} className={styles.resultCard}>
            <div className={styles.diagramWrap}>
              <svg
                viewBox="0 0 280 220"
                className={styles.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* High-speed horizontal velocity lines */}
                <line
                  x1="44"
                  y1="96"
                  x2="152"
                  y2="96"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />
                <line
                  x1="76"
                  y1="112"
                  x2="218"
                  y2="112"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.7"
                />
                <line
                  x1="52"
                  y1="128"
                  x2="168"
                  y2="128"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />

                {/* Main piercing arrow head */}
                <path
                  d="M 204 100 L 222 112 L 204 124"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="1.7"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />

                {/* Orange Circular Shockwave Boundary Penetrated by Arrow */}
                <path
                  d="M 208 64 A 86 86 0 0 1 208 160"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Secondary outer shockwave halo */}
                <path
                  d="M 218 54 A 105 105 0 0 1 218 170"
                  stroke="rgba(200, 55, 11, 0.28)"
                  strokeWidth="1.2"
                  strokeDasharray="4 5"
                />
              </svg>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Precision Execution</h3>
              <p className={styles.cardDesc}>
                Sub-millimeter 3D coordinate laser metrology, ultrasonic testing, and precision CNC finish-machining ensuring 100% direct bolt-on fitment with zero torching, shimming, or site rework.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
