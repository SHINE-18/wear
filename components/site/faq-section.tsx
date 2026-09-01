'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/lib/site-data'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-modern-section">
      <div className="faq-modern-container">
        {/* LEFT COLUMN: TITLE */}
        <div className="faq-modern-left">
          <h2 className="faq-modern-title">
            Frequently
            <br />
            Asked <span className="faq-title-muted">Questions</span>
          </h2>
        </div>

        {/* RIGHT COLUMN: ACCORDION LIST WITH CLEAN ANIMATED BORDER SWEEP */}
        <div className="faq-modern-list" role="region" aria-label="Frequently Asked Questions">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className={`faq-modern-item ${isOpen ? 'is-open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                {/* Clean Animated Border Sweep Line */}
                <span className="faq-line-sweep" aria-hidden="true" />

                {/* QUESTION ROW */}
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFaq(idx)
                  }}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-plus-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* EXPANDABLE ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrap"
                    >
                      <p className="faq-answer-text">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
