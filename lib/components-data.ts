export interface ComponentSpec {
  label: string
  value: string
}

export interface PartGroup {
  id: string
  slug: string
  name: string
  description: string
  specs: ComponentSpec[]
  image: string
}

export const ALL_PART_GROUPS: Record<string, PartGroup> = {
  'dryer-components': {
    id: 'dryer-components',
    slug: 'dryer-components',
    name: 'Dryer Components',
    description: 'High-temperature drum lifter flights, trunnion rollers, tire rings, and drive assemblies engineered for severe thermal and sliding wear.',
    specs: [
      { label: 'Material', value: 'High-Chrome (Cr 18–28%) & 42CrMo4' },
      { label: 'Hardness', value: '400–500 BHN' },
      { label: 'Max Temperature', value: 'Up to 950°C Continuous' },
    ],
    image: '/images/dryer-combo.webp',
  },
  'filter-components': {
    id: 'filter-components',
    slug: 'filter-components',
    name: 'Filter & Baghouse Components',
    description: 'High-temp woven membrane filter bags, CNC galvanized wire cages, and venturi plenum plates engineered to eliminate bag blinding and draft restrictions.',
    specs: [
      { label: 'Material', value: 'PTFE / Nomex / SS316 Cages' },
      { label: 'Hardness', value: 'Acid & Alkali Resistant' },
      { label: 'Max Temperature', value: 'Up to 400°C Rated' },
    ],
    image: '/images/filter-combo.webp',
  },
  'mixer-components': {
    id: 'mixer-components',
    slug: 'mixer-components',
    name: 'Mixer Components',
    description: 'Precision cast Ni-Hard 4 and Cr 28% paddle blades, floor wear tiles, and shaft protection sleeves engineered for high-shear batch mixing.',
    specs: [
      { label: 'Material', value: 'High-Chrome & Ni-Hard 4 Alloys' },
      { label: 'Hardness', value: '600–680 BHN (60–64 HRC)' },
      { label: 'Max Temperature', value: 'Up to 450°C Service' },
    ],
    image: '/images/mixer-components-composite.webp',
  },
  'wear-liners-transfer-protection': {
    id: 'wear-liners-transfer-protection',
    slug: 'wear-liners-transfer-protection',
    name: 'Wear Liners & Transfer Protection',
    description: 'Chromium carbide overlay (CCO) clad plates, 92% alumina ceramic-rubber composite tiles, and modular wear blocks for severe impact drop points.',
    specs: [
      { label: 'Material', value: 'CCO Clad Plate & Al₂O₃ Ceramic' },
      { label: 'Hardness', value: '60–62 HRC / 9 Mohs Scale' },
      { label: 'Max Temperature', value: 'Up to 350°C Rated' },
    ],
    image: '/images/custom-chute-protection.webp',
  },
  'bucket-elevators-drag-conveyors': {
    id: 'bucket-elevators-drag-conveyors',
    slug: 'bucket-elevators-drag-conveyors',
    name: 'Bucket Elevators & Drag Conveyors',
    description: 'Reinforced AR400 elevator buckets, drop-forged drag flights, induction-hardened sprockets, and alloy casing liners for continuous bulk conveyance.',
    specs: [
      { label: 'Material', value: 'AR400 & Drop-Forged Alloy Steel' },
      { label: 'Hardness', value: '450–600 BHN' },
      { label: 'Max Temperature', value: 'Up to 400°C Service' },
    ],
    image: '/images/elevator-combo.webp',
  },
  'earthmoving-bucket-tips': {
    id: 'earthmoving-bucket-tips',
    slug: 'earthmoving-bucket-tips',
    name: 'Earthmoving Bucket Tips',
    description: 'Engineered penetration and wear protection for excavator and loader buckets in abrasive rock and ore handling. Reduces change-outs and protects adapters.',
    specs: [
      { label: 'Material', value: 'Austenitic Mn18Cr2 & Cr-Mo Alloy' },
      { label: 'Hardness', value: '500–600 BHN' },
      { label: 'Max Temperature', value: 'Ambient Extraction Shock' },
    ],
    image: '/images/earth-moving-bucket-tips-4.webp',
  },
}

export const INDUSTRY_COMPONENT_MAPPING: Record<string, string[]> = {
  asphalt: [
    'dryer-components',
    'filter-components',
    'mixer-components',
    'wear-liners-transfer-protection',
    'bucket-elevators-drag-conveyors',
  ],
  concrete: [
    'filter-components',
    'mixer-components',
    'wear-liners-transfer-protection',
  ],
  'process-industries': [
    'dryer-components',
    'filter-components',
    'mixer-components',
    'wear-liners-transfer-protection',
    'bucket-elevators-drag-conveyors',
  ],
  mining: [
    'dryer-components',
    'filter-components',
    'wear-liners-transfer-protection',
    'bucket-elevators-drag-conveyors',
    'earthmoving-bucket-tips',
  ],
}

export function getComponentsForIndustry(industrySlug: string): PartGroup[] {
  const componentKeys = INDUSTRY_COMPONENT_MAPPING[industrySlug] || []
  return componentKeys
    .map((key) => ALL_PART_GROUPS[key])
    .filter((comp): comp is PartGroup => Boolean(comp))
}
