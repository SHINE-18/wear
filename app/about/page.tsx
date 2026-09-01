'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp, Stagger, StaggerItem } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { aboutStats, customFeatures, teamMembers } from '@/lib/site-data'

export default function AboutPage() {
  return (
    <main id="top" className="about-page-root">
      <SiteNav />

      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <FadeUp className="about-hero-header">
            <div className="about-eyebrow">
              <span>Heavy Wear Metallurgy</span>
            </div>
            <h1 className="about-hero-title">About WearGuard</h1>
          </FadeUp>

          <FadeUp delay={0.1} className="about-hero-image-wrap">
            <div className="about-image-frame">
              <Image
                src="/images/workplace-cad-meeting.jpg"
                alt="WearGuard metallurgy and wear component engineers in design session"
                fill
                priority
                className="about-hero-img"
              />
              <div className="cad-corner-tick tick-tl" />
              <div className="cad-corner-tick tick-tr" />
              <div className="cad-corner-tick tick-bl" />
              <div className="cad-corner-tick tick-br" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. CORE MISSION / MANIFESTO: HIGH-WEAR COMPONENTS */}
      <section className="about-mission-section">
        <div className="about-mission-container">
          <FadeUp>
            <blockquote className="about-mission-statement">
              &ldquo;We engineer custom high-wear metallurgy and precision-cast components that outlast OEM standards — eliminating recurring plant downtime across asphalt, mining, concrete, and heavy processing operations.&rdquo;
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* 3. KPI / METRICS MATRIX (4 DARK TEXTURED CARDS) */}
      <section className="about-kpi-section">
        <div className="about-kpi-container">
          <Stagger className="about-kpi-grid">
            {aboutStats.map((stat, idx) => (
              <StaggerItem key={stat.label} className="about-kpi-card">
                <div className="kpi-card-inner">
                  <div className="kpi-card-header">
                    <span className="kpi-number">{stat.num}</span>
                    <span className="kpi-corner-num">0{idx + 1}</span>
                  </div>
                  <div className="kpi-card-bottom">
                    <h3 className="kpi-label">{stat.label}</h3>
                    <p className="kpi-desc">{stat.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. FOUNDING STORY & LEADERSHIP SHOWCASE */}
      <section className="about-story-section">
        <div className="about-story-container">
          {/* LEFT: FOUNDER PORTRAIT */}
          <FadeUp className="about-story-left">
            <div className="founder-portrait-frame">
              <Image
                src="/images/founder-john-smith.jpg"
                alt="David Vance, Principal Metallurgist & Founder of WearGuard"
                fill
                className="founder-img"
              />
              <div className="cad-corner-tick tick-tl" />
              <div className="cad-corner-tick tick-tr" />
              <div className="cad-corner-tick tick-bl" />
              <div className="cad-corner-tick tick-br" />
            </div>
          </FadeUp>

          {/* RIGHT: STORY NARRATIVE & SIGNATURE */}
          <FadeUp delay={0.12} className="about-story-right">
            <div className="about-eyebrow">
              <span>Our Philosophy</span>
            </div>

            <h2 className="about-story-heading">
              Engineering the Wear Zone,
              <br />
              <span className="title-muted-slate">Not Just the Part Number</span>
            </h2>

            <div className="about-story-body">
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

            <div className="founder-signoff">
              <div className="founder-info">
                <strong>David Vance</strong>
                <span>Principal Metallurgist &amp; Founder</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 5. TECHNICAL LEADERSHIP TEAM (8 WEAR SPECIALISTS) */}
      <section className="about-team-section">
        <div className="about-team-container">
          <FadeUp className="about-team-header">
            <div className="about-eyebrow">
              <span>Technical Leadership</span>
            </div>
            <h2 className="about-team-title">
              Meet Our <span className="title-muted-slate">Metallurgists &amp; Engineers</span>
            </h2>
          </FadeUp>

          <Stagger className="about-team-grid">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name} className="team-member-card">
                <div className="team-card-image-wrap">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="team-member-img"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin-btn"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <div className="cad-corner-tick tick-tl" />
                  <div className="cad-corner-tick tick-tr" />
                  <div className="cad-corner-tick tick-bl" />
                  <div className="cad-corner-tick tick-br" />
                </div>
                <div className="team-card-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <span className="team-member-role">{member.role}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 6. THE 4 CORE ENGINEERING CAPABILITIES & CUSTOM SERVICES */}
      <section className="about-services-section">
        <div className="about-services-container">
          <FadeUp className="about-services-header">
            <div className="about-eyebrow">
              <span>Core Capabilities</span>
            </div>
            <h2 className="about-services-title">
              Our 4 Engineering <span className="title-muted-slate">Services &amp; Custom Parts</span>
            </h2>
            <p className="about-services-lead">
              Beyond our core component catalogue, we deliver 4 dedicated custom manufacturing and reverse engineering services to guarantee continuous plant uptime.
            </p>
          </FadeUp>

          <div className="about-services-grid">
            {customFeatures.map((svc, idx) => (
              <div key={svc.title} className="about-service-card">
                <div className="service-card-top">
                  <span className="service-step-num">0{idx + 1}</span>
                  <span className="service-simple-tag">CAPABILITY</span>
                </div>

                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-text">{svc.text}</p>

                <div className="service-card-bottom">
                  <Link href="/custom-parts" className="service-link">
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
