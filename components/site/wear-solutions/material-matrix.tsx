import styles from './wear-solutions-page.module.css'

interface MaterialRow {
  name: string
  type: string
  hardness: string
  impact: 'Low' | 'Moderate' | 'High' | 'Very High'
  abrasion: 'Low' | 'Moderate' | 'High' | 'Very High'
  maxTemp: string
  bestFor: string
  industries: string
}

const MATRIX_DATA: MaterialRow[] = [
  {
    name: 'WearGuard P400',
    type: 'Quenched & Tempered Martensitic Plate',
    hardness: '400 BHN',
    impact: 'High',
    abrasion: 'Moderate',
    maxTemp: 'Up to 250°C',
    bestFor: 'Liners, chutes, buckets and standard plant wear components',
    industries: 'Asphalt, Mining, Steel',
  },
  {
    name: 'WearGuard P450',
    type: 'Quenched & Tempered Martensitic Plate',
    hardness: '450 BHN',
    impact: 'High',
    abrasion: 'High',
    maxTemp: 'Up to 250°C',
    bestFor: 'Mixer liners, drag troughs and heavy-duty sliding components',
    industries: 'Asphalt, Mining, Steel',
  },
  {
    name: 'WearGuard P500',
    type: 'High-Hardness Quenched & Tempered Steel',
    hardness: '500 BHN',
    impact: 'Moderate',
    abrasion: 'Very High',
    maxTemp: 'Up to 250°C',
    bestFor: 'Mixer tips, wear edges, screen decks & crusher chutes',
    industries: 'Asphalt, Concrete, Mining, Steel',
  },
  {
    name: 'EnduraCast Z-Core Liners',
    type: 'Abrasion-Resistant Cast Liners',
    hardness: '58–65 HRC',
    impact: 'High',
    abrasion: 'Very High',
    maxTemp: 'High-Temperature Rated',
    bestFor: 'Extreme abrasive zones, recycling mixers, and shell liners',
    industries: 'Asphalt, Concrete, Mining, Recycling',
  },
  {
    name: 'Wearcast 600 / Ultra 800 / Max 1100',
    type: 'High-Chrome & Carbide-Lined Foundry Grades',
    hardness: '550–680+ BHN',
    impact: 'Moderate',
    abrasion: 'Very High',
    maxTemp: 'Up to 950°C',
    bestFor: 'Mixer paddle tips, pugmill arms, dryer flights, burner lifters',
    industries: 'Asphalt, Concrete, Mining, Steel',
  },
  {
    name: 'Ceramic-Rubber Composite Liners',
    type: '92–95% Al2O3 Hexagonal Tiles in Resilient Rubber',
    hardness: '9 Mohs (~1400 HV)',
    impact: 'Very High',
    abrasion: 'Very High',
    maxTemp: 'Up to 120°C',
    bestFor: 'High-drop transfer chutes, rock boxes, and conveyor discharge skirts',
    industries: 'Mining, Aggregate, Process',
  },
  {
    name: 'Chrome-Carbide Overlay (CCO) Clad Plate',
    type: 'Bimetallic Chromium Carbide Cladding on Steel Substrate',
    hardness: '58–64 HRC',
    impact: 'Moderate',
    abrasion: 'Very High',
    maxTemp: 'Up to 600°C',
    bestFor: 'Induced draft fan blades, casing scrolls, and fine dry sliding chutes',
    industries: 'Asphalt, Process, Steel',
  },
]

export function MaterialSelectionMatrix() {
  return (
    <div>
      {/* VISIBLE DISCLAIMER DIRECTLY UNDER SECTION HEADER AS REQUIRED BY GLOBAL RULE 4 */}
      <div className={styles.matrixDisclaimerBox}>
        <p className={styles.matrixDisclaimerText}>
          <strong>Engineering Notice:</strong> Hardness, temperature, and alloy figures reflect standard grade specifications. Actual service life depends on particle size, velocity, impact angle, moisture, and operating conditions specific to your plant. Contact our engineers for a site-specific recommendation.
        </p>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th scope="col">Metallurgical Grade</th>
              <th scope="col">Typical Hardness</th>
              <th scope="col">Impact Resistance</th>
              <th scope="col">Abrasion Resistance</th>
              <th scope="col">Max Temp</th>
              <th scope="col">Primary Engineering Role</th>
              <th scope="col">Sectors</th>
            </tr>
          </thead>
          <tbody>
            {MATRIX_DATA.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <div className={styles.matrixGradeCol}>
                    <span className={styles.gradeName}>{row.name}</span>
                    <span className={styles.gradeType}>{row.type}</span>
                  </div>
                </td>
                <td style={{ fontFamily: 'var(--font-mono, monospace)', fontWeight: 600 }}>
                  {row.hardness}
                </td>
                <td>
                  <span
                    className={`${styles.ratingBadge} ${
                      row.impact === 'Very High' || row.impact === 'High'
                        ? styles.ratingHigh
                        : row.impact === 'Moderate'
                        ? styles.ratingMid
                        : styles.ratingLow
                    }`}
                  >
                    {row.impact}
                  </span>
                </td>
                <td>
                  <span
                    className={`${styles.ratingBadge} ${
                      row.abrasion === 'Very High' || row.abrasion === 'High'
                        ? styles.ratingHigh
                        : row.abrasion === 'Moderate'
                        ? styles.ratingMid
                        : styles.ratingLow
                    }`}
                  >
                    {row.abrasion}
                  </span>
                </td>
                <td style={{ fontFamily: 'var(--font-mono, monospace)', fontWeight: 600 }}>
                  {row.maxTemp}
                </td>
                <td style={{ maxWidth: '280px' }}>{row.bestFor}</td>
                <td style={{ color: '#475569' }}>{row.industries}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
