'use client'

import { FadeUp } from './motion'
import styles from './about-built-for-results.module.css'

export function AboutBuiltForResults() {
  return (
    <section className={styles.sectionRoot} id="why-choose-us" aria-label="Why Choose WearGuard">
      <div className={styles.container}>
        {/* HEADER ROW */}
        <FadeUp className={styles.headerRow}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowBar} aria-hidden="true" />
            <span>Why Choose Us</span>
          </div>
          <h2 className={styles.title}>
            Built for <span className={styles.titleMuted}>Results</span>
          </h2>
          <p className={styles.leadText}>
            WearGuard delivers advanced wear solutions that extend component life, reduce downtime, and lower total cost of ownership in the world&apos;s toughest industries.
          </p>
        </FadeUp>

        {/* 4-CARD GRID */}
        <div className={styles.cardsTrack}>
          {/* CARD 1: Built for Extreme Wear Conditions */}
          <FadeUp delay={0.06} className={styles.resultCard}>
            <div className={styles.diagramWrap}>
              <svg
                viewBox="0 0 280 220"
                className={styles.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Outer dashed radar / boundary ring */}
                <circle
                  cx="140"
                  cy="110"
                  r="92"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <circle
                  cx="140"
                  cy="110"
                  r="74"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                />

                {/* Coordinate crosshair ticks */}
                <line x1="38" y1="110" x2="52" y2="110" stroke="rgba(255, 255, 255, 0.32)" strokeWidth="1.2" />
                <line x1="228" y1="110" x2="242" y2="110" stroke="rgba(255, 255, 255, 0.32)" strokeWidth="1.2" />
                <line x1="140" y1="20" x2="140" y2="34" stroke="rgba(255, 255, 255, 0.32)" strokeWidth="1.2" />
                <line x1="140" y1="186" x2="140" y2="200" stroke="rgba(255, 255, 255, 0.32)" strokeWidth="1.2" />

                {/* Outer protective armor shield outline */}
                <path
                  d="M 96 66 L 184 66 L 194 114 C 194 154 140 182 140 182 C 140 182 86 154 86 114 Z"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />

                {/* Inner metallurgical high-wear shield (Orange) */}
                <path
                  d="M 110 80 L 170 80 L 178 118 C 178 146 140 168 140 168 C 140 168 102 146 102 118 Z"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />

                {/* Central deflection chevron / diamond */}
                <path
                  d="M 140 96 L 154 116 L 140 134 L 126 116 Z"
                  stroke="rgba(255, 255, 255, 0.65)"
                  strokeWidth="1.4"
                />

                {/* Particle deflection vectors / impact arcs */}
                <path
                  d="M 64 88 L 86 100 L 70 114"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 216 88 L 194 100 L 210 114"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Built for Extreme Wear Conditions</h3>
              <p className={styles.cardDesc}>
                Advanced materials engineered to perform in the harshest applications.
              </p>
            </div>
          </FadeUp>

          {/* CARD 2: Longer Service Life */}
          <FadeUp delay={0.12} className={styles.resultCard}>
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
                  r="88"
                  stroke="rgba(255, 255, 255, 0.14)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />

                {/* Chronometer circular dial */}
                <circle
                  cx="140"
                  cy="110"
                  r="72"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />

                {/* Radial hour & campaign benchmark ticks */}
                <line x1="140" y1="44" x2="140" y2="52" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
                <line x1="204" y1="110" x2="212" y2="110" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
                <line x1="140" y1="168" x2="140" y2="176" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
                <line x1="68" y1="110" x2="76" y2="110" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

                {/* Diagonal secondary ticks */}
                <line x1="184" y1="66" x2="190" y2="60" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                <line x1="184" y1="154" x2="190" y2="160" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                <line x1="96" y1="154" x2="90" y2="160" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                <line x1="96" y1="66" x2="90" y2="60" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />

                {/* Sweeping extended campaign uptime arc (Orange accent) */}
                <path
                  d="M 140 38 A 72 72 0 0 1 202 146"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Sweeping orbital arrow head */}
                <path
                  d="M 194 152 L 204 148 L 206 158"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2"
                  strokeLinecap="square"
                />

                {/* Dial Center Hub */}
                <circle cx="140" cy="110" r="5" fill="var(--orange, #C8370B)" />
                <circle cx="140" cy="110" r="14" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />

                {/* Clock hands: Standard OEM limit vs WearGuard Extended Lifespan hand */}
                <line
                  x1="140"
                  y1="110"
                  x2="175"
                  y2="110"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <line
                  x1="140"
                  y1="110"
                  x2="182"
                  y2="68"
                  stroke="var(--orange, #C8370B)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Longer Service Life</h3>
              <p className={styles.cardDesc}>
                Maximize uptime and productivity with solutions that last longer.
              </p>
            </div>
          </FadeUp>

          {/* CARD 3: Lower Maintenance */}
          <FadeUp delay={0.18} className={styles.resultCard}>
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
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                />

                {/* Orbital curved cycle arrows */}
                <path
                  d="M 64 110 A 76 76 0 0 1 140 34"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 60 102 L 64 110 L 72 108"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M 216 110 A 76 76 0 0 1 140 186"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 220 118 L 216 110 L 208 112"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />

                {/* Central Industrial Gear (Orange stroke) */}
                <g transform="translate(140, 110)">
                  <path
                    d="M -12 -38 L 12 -38 L 14 -28 L 26 -22 L 35 -29 L 49 -15 L 42 -2 L 44 12 L 54 18 L 47 34 L 34 32 L 24 40 L 26 53 L 8 57 L 2 46 L -12 46 L -18 57 L -36 53 L -34 40 L -44 32 L -57 34 L -54 18 L -44 12 L -42 -2 L -49 -15 L -35 -29 L -26 -22 L -14 -28 Z"
                    stroke="var(--orange, #C8370B)"
                    strokeWidth="1.75"
                    strokeLinejoin="miter"
                  />
                  <circle cx="0" cy="0" r="24" stroke="var(--orange, #C8370B)" strokeWidth="1.4" />
                  <circle cx="0" cy="0" r="11" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" />
                </g>
              </svg>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Lower Maintenance</h3>
              <p className={styles.cardDesc}>
                Reduce maintenance intervals and operating costs with superior wear resistance.
              </p>
            </div>
          </FadeUp>

          {/* CARD 4: Lower Total Ownership Cost */}
          <FadeUp delay={0.24} className={styles.resultCard}>
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

                {/* Datum Baseline */}
                <line x1="60" y1="180" x2="220" y2="180" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="1.2" />

                {/* 4 Ascending Industrial Bar Columns */}
                <rect
                  x="76"
                  y="136"
                  width="18"
                  height="44"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />
                <rect
                  x="106"
                  y="114"
                  width="18"
                  height="66"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />
                <rect
                  x="136"
                  y="86"
                  width="18"
                  height="94"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />
                <rect
                  x="166"
                  y="52"
                  width="18"
                  height="128"
                  stroke="rgba(255, 255, 255, 0.32)"
                  strokeWidth="1.4"
                />

                {/* Sweeping Dynamic Orange Parabolic Growth / ROI Arrow */}
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
              <h3 className={styles.cardTitle}>Lower Total Ownership Cost</h3>
              <p className={styles.cardDesc}>
                Engineered for value through extended life, efficiency and reliability.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
