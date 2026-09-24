/**
 * site-facts.ts — Single source of truth for all WearGuard business facts.
 *
 * RULE: Every stat, address, phone number, or claim that appears on the
 * website MUST be imported from this file. Never hardcode a business fact
 * directly in a component or page.
 *
 * Values marked TODO(client) need confirmation from WearGuard before launch.
 * Values marked TODO(legal) need legal review.
 * Values marked TODO(metallurgist) need technical sign-off.
 */

// ─── Company Identity ───────────────────────────────────────────────
export const COMPANY_NAME = 'WearGuard'
export const COMPANY_LEGAL_NAME = 'WearGuard Pty Ltd'
export const COMPANY_TAGLINE = 'Precision high-wear metallurgy & bespoke cast components engineered to eliminate plant downtime.'

// TODO(client): confirm ABN and ACN for legal pages
export const ABN = '' // e.g. '12 345 678 901'
export const ACN = '' // e.g. '123 456 789'

// ─── Years & Key Metrics ────────────────────────────────────────────
// TODO(client): confirm exact years in business — hero shows 10+, task brief referenced 20+
export const YEARS_IN_BUSINESS = 10
export const YEARS_LABEL = 'years experience'

// TODO(client): confirm — hero says 100+ projects; about says 1,200+ cast profiles (different metrics?)
export const PROJECTS_DELIVERED = 100
export const PROJECTS_LABEL = 'projects delivered'

export const CUSTOM_CAST_PROFILES = '1,200+'
export const CUSTOM_CAST_PROFILES_LABEL = 'Custom Cast Profiles'

// TODO(client/metallurgist): confirm single headline figure — 60%, 3.5×, and 45–70% all appear
export const SERVICE_LIFE_HEADLINE = '60%'
export const SERVICE_LIFE_LABEL = 'Longer Service Life'
export const SERVICE_LIFE_DESC = 'Documented wear improvements over standard manganese and low-alloy OEM liners.'

export const BATCH_SIZE_RANGE = '1–10'
export const BATCH_SIZE_LABEL = 'Unit Small-Batch Runs'
export const BATCH_SIZE_DESC = 'Rapid custom manufacturing flexibility with zero minimum order penalties.'

export const LEAD_TIME = '6–8 Weeks'

// ─── Contact Details ────────────────────────────────────────────────
// TODO(client): confirm phone number
export const PHONE = '+61 437 433 890'
export const PHONE_DISPLAY = '+61 437 433 890'

// TODO(client): confirm email address
export const EMAIL = 'engineering@wearguard.com.au'

// Timezone — Australia observes both AEST and AEDT
export const TIMEZONE = 'AEST/AEDT'
export const BUSINESS_HOURS = '08:00–18:00'

// ─── Address ────────────────────────────────────────────────────────
// TODO(client): confirm real street address of Melbourne facility
export const ADDRESS = {
  line1: '', // e.g. '2450 Industrial Park Drive'
  suburb: 'Melbourne',
  state: 'VIC',
  postcode: '', // e.g. '3000'
  country: 'Australia',
}

/** Formatted address for display. Returns placeholder if line1 is empty. */
export function getFormattedAddress(): string {
  if (!ADDRESS.line1) {
    return 'Melbourne, VIC Australia — address available on request'
  }
  return `${ADDRESS.line1}\n${ADDRESS.suburb}, ${ADDRESS.state} ${ADDRESS.postcode} ${ADDRESS.country}`
}

// ─── Social Media ───────────────────────────────────────────────────
// TODO(client): confirm these URLs point to real, active profiles
export const SOCIAL_LINKEDIN = '' // e.g. 'https://www.linkedin.com/company/wearguard'
export const SOCIAL_YOUTUBE = '' // e.g. 'https://www.youtube.com/@wearguard'

// ─── People ─────────────────────────────────────────────────────────
// TODO(client): confirm founder name for public use
export const FOUNDER_NAME = '' // e.g. 'David Vance'
export const FOUNDER_TITLE = 'Principal Metallurgist & Founder'

// ─── Feature Gate Flags ─────────────────────────────────────────────
/** Set to true only when real team photos and verified names are supplied */
export const SHOW_TEAM_SECTION = false

/** Set individual offices to true only when real presence is confirmed */
export const SHOW_OFFICES = {
  sydney: false,  // TODO(client): confirm real Sydney presence
  brisbane: false, // TODO(client): confirm
  perth: false,    // TODO(client): confirm
}

// ─── SLA / Promise Claims ───────────────────────────────────────────
// TODO(client): is the < 24 hr email review a firm SLA or a target?
export const EMAIL_RESPONSE_TARGET = '< 24 hr'
export const EMAIL_RESPONSE_QUALIFIER = 'Target' // 'Guaranteed' only if client confirms

// ─── Copyright ──────────────────────────────────────────────────────
export const COPYRIGHT_YEAR = new Date().getFullYear()

// ─── Production Domain ──────────────────────────────────────────────
export const PRODUCTION_DOMAIN = 'https://wearguard.com.au'
