'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp, Stagger, StaggerItem } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { aboutStats, customFeatures, teamMembers } from '@/lib/site-data'
import styles from './about-page-client.module.css'

export function AboutPageClient() {
  return (
    <main id="top" className={`${styles['about-page-root']} about-page-root`}>
      <SiteNav />

      {/* 1. HERO SECTION */}
      <section className={styles['about-hero-section']}>
        <div className={styles['about-hero-container']}>
          <FadeUp className={styles['about-hero-header']}>
            <div className={styles['about-eyebrow']}>
              <span>Heavy Wear Metallurgy</span>
            </div>
            <h1 className={styles['about-hero-title']}>About WearGuard</h1>
          </FadeUp>

          <FadeUp delay={0.1} className={styles['about-hero-image-wrap']}>
            <div className={styles['about-image-frame']}>
              <Image
                src="/images/workplace-cad-meeting.jpg"
                alt="WearGuard metallurgy and wear component engineers in design session"
                fill
                priority
                className={styles['about-hero-img']}
              />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-tl']}`} />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-tr']}`} />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-bl']}`} />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-br']}`} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. CORE MISSION / MANIFESTO: HIGH-WEAR COMPONENTS */}
      <section className={styles['about-mission-section']}>
        <div className={styles['about-mission-container']}>
          <FadeUp>
            <blockquote className={styles['about-mission-statement']}>
              &ldquo;We engineer custom high-wear metallurgy and precision-cast components that outlast OEM standards — eliminating recurring plant downtime across asphalt, mining, concrete, and heavy processing operations.&rdquo;
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* 3. KPI / METRICS MATRIX (4 DARK TEXTURED CARDS) */}
      <section className={styles['about-kpi-section']}>
        <div className={styles['about-kpi-container']}>
          <Stagger className={styles['about-kpi-grid']}>
            {aboutStats.map((stat, idx) => (
              <StaggerItem key={stat.label} className={styles['about-kpi-card']}>
                <div className={styles['kpi-card-inner']}>
                  <div className={styles['kpi-card-header']}>
                    <span className={styles['kpi-number']}>{stat.num}</span>
                    <span className={styles['kpi-corner-num']}>0{idx + 1}</span>
                  </div>
                  <div className={styles['kpi-card-bottom']}>
                    <h3 className={styles['kpi-label']}>{stat.label}</h3>
                    <p className={styles['kpi-desc']}>{stat.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. FOUNDING STORY & LEADERSHIP SHOWCASE */}
      <section className={styles['about-story-section']}>
        <div className={styles['about-story-container']}>
          {/* LEFT: FOUNDER PORTRAIT */}
          <FadeUp className={styles['about-story-left']}>
            <div className={styles['founder-portrait-frame']}>
              <Image
                src="/images/founder-david-vance.jpg"
                alt="David Vance, Principal Metallurgist & Founder of WearGuard"
                fill
                className={styles['founder-img']}
              />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-tl']}`} />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-tr']}`} />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-bl']}`} />
              <div className={`${styles['cad-corner-tick']} ${styles['tick-br']}`} />
            </div>
          </FadeUp>

          {/* RIGHT: STORY NARRATIVE & SIGNATURE */}
          <FadeUp delay={0.12} className={styles['about-story-right']}>
            <div className={styles['about-eyebrow']}>
              <span>Our Philosophy</span>
            </div>

            <h2 className={styles['about-story-heading']}>
              Engineering the Wear Zone,
              <br />
              <span className={styles['title-muted-slate']}>Not Just the Part Number</span>
            </h2>

            <div className={styles['about-story-body']}>
              <p>
                WearGuard was established with a singular engineering mandate: ending the costly, continuous cycle of premature wear part failures in high-throughput heavy processing plants.
              </p>
              <p>
                Standard off-the-shelf OEM components are cast using baseline alloys designed for mass catalog distribution. When subjected to abrasive quartz aggregates, high-velocity impact gouging, or severe 600°C thermal cycling, standard parts degrade rapidly.
              </p>
              <p>
                We reverse-engineer worn geometries via 3D coordinate laser scanning and formulate custom chemistries — from 680 BHN high-chrome iron to kinetic ceramic-rubber matrices — engineered specifically for your plant duty cycle.
              </p>
            </div>

            <div className={styles['founder-signoff']}>
              <div className={styles['founder-info']}>
                <strong>David Vance</strong>
                <span>Principal Metallurgist &amp; Founder</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 5. TECHNICAL LEADERSHIP TEAM (8 WEAR SPECIALISTS) */}
      <section className={styles['about-team-section']}>
        <div className={styles['about-team-container']}>
          <FadeUp className={styles['about-team-header']}>
            <div className={styles['about-eyebrow']}>
              <span>Technical Leadership</span>
            </div>
            <h2 className={styles['about-team-title']}>
              Meet Our <span className={styles['title-muted-slate']}>Metallurgists &amp; Engineers</span>
            </h2>
          </FadeUp>

          <Stagger className={styles['about-team-grid']}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name} className={styles['team-member-card']}>
                <div className={styles['team-card-image-wrap']}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles['team-member-img']}
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['team-linkedin-btn']}
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <div className={`${styles['cad-corner-tick']} ${styles['tick-tl']}`} />
                  <div className={`${styles['cad-corner-tick']} ${styles['tick-tr']}`} />
                  <div className={`${styles['cad-corner-tick']} ${styles['tick-bl']}`} />
                  <div className={`${styles['cad-corner-tick']} ${styles['tick-br']}`} />
                </div>
                <div className={styles['team-card-info']}>
                  <h3 className={styles['team-member-name']}>{member.name}</h3>
                  <span className={styles['team-member-role']}>{member.role}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 6. THE 4 CORE ENGINEERING CAPABILITIES & CUSTOM SERVICES */}
      <section className={styles['about-services-section']}>
        <div className={styles['about-services-container']}>
          <FadeUp className={styles['about-services-header']}>
            <div className={styles['about-eyebrow']}>
              <span>Core Capabilities</span>
            </div>
            <h2 className={styles['about-services-title']}>
              Our 4 Engineering <span className={styles['title-muted-slate']}>Services &amp; Custom Parts</span>
            </h2>
            <p className={styles['about-services-lead']}>
              Beyond our core component catalogue, we deliver 4 dedicated custom manufacturing and reverse engineering services to guarantee continuous plant uptime.
            </p>
          </FadeUp>

          <div className={styles['about-services-grid']}>
            {customFeatures.map((svc, idx) => (
              <div key={svc.title} className={styles['about-service-card']}>
                <div className={styles['service-card-top']}>
                  <span className={styles['service-step-num']}>0{idx + 1}</span>
                  <span className={styles['service-simple-tag']}>CAPABILITY</span>
                </div>

                <h3 className={styles['service-card-title']}>{svc.title}</h3>
                <p className={styles['service-card-text']}>{svc.text}</p>

                <div className={styles['service-card-bottom']}>
                  <Link href="/custom-parts" className={styles['service-link']}>
                    <span>Explore Specification</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER WITH ORANGE CTA BANNER */}
      <SiteFooter />
    </main>
  )
}
