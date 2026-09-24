export interface IndustrySpec {
  label: string
  value: string
}

export interface IndustryComparisonMetric {
  label: string
  oem: string
  wearguard: string
}

export interface IndustryData {
  slug: string
  num: string
  title: string
  cardTitle: string
  subtitle: string
  eyebrow: string
  cardDesc: string
  desc: string[]
  specs: IndustrySpec[]
  features: string[]
  cardImage: string
  bannerImage: string
  imageAlt: string
  hudTag: string
  badgeText: string
  appLink: string
  appLabel: string
  oemComparison: {
    oemLimitation: string
    wearguardSolution: string
    campaignMetrics: IndustryComparisonMetric[]
  }
}

export const industriesData: IndustryData[] = [
  {
    slug: 'asphalt',
    num: '01',
    title: 'Hot Mix Batching',
    cardTitle: 'Hot Mix Batching',
    subtitle: 'High-Temperature Drum Dryers, Continuous Pugmills & Asphalt Batching Plants',
    eyebrow: 'Services',
    cardDesc: 'High-temp pugmill paddle tips, flighting liners, and slinger arms engineered for 400°C–950°C abrasive aggregate mixing.',
    desc: [
      'Asphalt production subjects wear surfaces to intense combined abrasive wear, high shear friction, and continuous thermal cycling up to 950°C. Standard OEM castings rapidly lose dimensional tolerance, causing mix contamination, uneven binder coating, and unplanned shutdown cycles.',
      'WearGuard engineers custom high-chrome (Cr 18–28%) and Ni-Hard 4 mixing arms, paddle tips, dryer flights, and discharge chute liners that double operational campaign life and maintain razor-sharp tolerances under peak asphalt tonnage production.',
    ],
    specs: [
      { label: 'Operating Temp', value: 'Up to 950°C' },
      { label: 'Hardness Range', value: '550–650 BHN' },
      { label: 'Alloy Chemistry', value: 'High-Chrome (Cr 18–28%) & Ni-Hard 4' },
      { label: 'Typical Wear Gain', value: '+45% vs Standard OEM' },
    ],
    features: [
      'Pugmill mixer paddle arms, tips & bottom trough liners',
      'Rotary drying drum flights, trunnion rollers & tire rings',
      'Cold feed aggregate hopper drop liners & transfer chutes',
      'Corrosion-resistant baghouse filter cages & high-temp housings',
    ],
    cardImage: '/images/asphalt-plant-tower.jpg',
    bannerImage: '/images/asphalt-plant-tower.jpg',
    imageAlt: 'High capacity modern asphalt batching and mixing plant tower',
    hudTag: 'Asphalt Sector — Heat & Severe Abrasion',
    badgeText: 'HEAT & SEVERE ABRASION',
    appLink: '/applications',
    appLabel: 'Mixer Components & Assemblies',
    oemComparison: {
      oemLimitation: 'Standard OEM cast iron arms suffer rapid face wash-out within 40,000 tonnes. Severe thermal cycling at 950°C causes catastrophic flight micro-cracking and drum imbalance.',
      wearguardSolution: 'Formulated Cr 28% eutectic carbide network creates a dense, dislocation-resistant matrix that resists shear friction and retains dimensional geometry past 120,000 tonnes.',
      campaignMetrics: [
        { label: 'Campaign Tonnage Life', oem: '40,000 Tonnes', wearguard: '120,000+ Tonnes' },
        { label: 'Wear Face Hardness', oem: '420–480 BHN', wearguard: '620–680 BHN' },
        { label: 'Annual Changeovers', oem: '3 to 4 Cycles/Yr', wearguard: '1 Scheduled Cycle' },
      ],
    },
  },
  {
    slug: 'concrete',
    num: '02',
    title: 'Concrete Industries',
    cardTitle: 'Concrete Industries',
    subtitle: 'Planetary Mixers, Twin-Shaft Blenders & High-Production Concrete Plants',
    eyebrow: 'Services',
    cardDesc: 'Heavy-duty pan mixer floor tiles, scraper blades, and discharge chutes built to resist punishing quartz aggregate grinding.',
    desc: [
      'Concrete mixing is one of the most punishing gouging abrasion environments in modern manufacturing. Aggressive sharp sand, coarse quartz aggregate, and cementitious slurry wear down floor tiles and mixing paddles rapidly.',
      'WearGuard provides EnduraCast Z-Core liners and precision-machined cast alloy paddle blades designed for 100% bolt-on interchangeability with all major planetary and twin-shaft mixers (BHS, Sicoma, Liebherr, Teka).',
    ],
    specs: [
      { label: 'Abrasion Mode', value: 'Severe Gouging & Impact' },
      { label: 'Hardness Range', value: '600–700 BHN' },
      { label: 'Liner Technology', value: 'EnduraCast Z-Core & Ceramic Matrix' },
      { label: 'Interchangeability', value: '100% Direct Bolt-On Match' },
    ],
    features: [
      'Twin-shaft & planetary mixer paddle blades & scraper arms',
      'Reversible floor and wall wear tiles for double service life',
      'Composite ceramic and chromium carbide discharge chutes',
      'Skip hoist transfer liners and aggregate weighing bins',
    ],
    cardImage: '/images/concrete-batching-silos.jpg',
    bannerImage: '/images/concrete-batching-silos.jpg',
    imageAlt: 'Concrete batch plant storage silos, ready-mix truck, and mixing assembly',
    hudTag: 'Concrete Sector — Gouging Abrasion',
    badgeText: 'SEVERE GOUGING & IMPACT',
    appLink: '/applications',
    appLabel: 'Mixer Shaft & Paddle Assemblies',
    oemComparison: {
      oemLimitation: 'Sharp quartz sand and coarse aggregates create continuous micro-machining scratches, grooving OEM blades down by 15mm in months and destroying mix consistency.',
      wearguardSolution: 'EnduraCast Z-Core combines hard M7C3 primary carbides embedded in a retained martensite matrix, blocking abrasive indentation and cutting edge loss.',
      campaignMetrics: [
        { label: 'Mixer Batch Campaign', oem: '60,000 m³', wearguard: '150,000+ m³' },
        { label: 'Surface Micro-Hardness', oem: '500–550 BHN', wearguard: '650–700 BHN' },
        { label: 'Blade Clearance Stability', oem: 'Degrades at 3 mos', wearguard: 'Retains Tol. 12+ mos' },
      ],
    },
  },
  {
    slug: 'process-industries',
    num: '03',
    title: 'Process Industries',
    cardTitle: 'Process Industries',
    subtitle: 'Bulk Material Handling, Cyclones, Transfer Chutes & Shredding Circuits',
    eyebrow: 'Services',
    cardDesc: 'Custom ceramic-rubber composite chutes, hopper wear plates, and pneumatic transfer elbows designed for continuous throughput.',
    desc: [
      'Bulk materials, recycling, and heavy processing operations create unpredictable shock loads, high localized stress, and corrosive wear that rapidly degrade standard catalog replacement components.',
      'WearGuard engineers bespoke ceramic-rubber composite chutes, hopper wear plates, heavy-duty rotor caps, and pneumatic transfer elbows designed for extreme continuous throughput.',
    ],
    specs: [
      { label: 'Shock Resistance', value: 'High Fracture Toughness' },
      { label: 'Surface Hardness', value: '58–62 HRC' },
      { label: 'Batch Flexibility', value: '1–10 Units Prototype / Trial Runs' },
      { label: 'Delivery Lead Time', value: 'Express 6–8 Weeks Available' },
    ],
    features: [
      'Ceramic-embedded composite wear plates and transfer liners',
      'Heavy cast alloy hammer heads for processing and shredders',
      'Rotor protector caps, anvil grate bars & breaker blocks',
      'Custom reverse-engineered wear attachments with no OEM markup',
    ],
    cardImage: '/images/process-chemical-refinery.jpg',
    bannerImage: '/images/process-chemical-refinery.jpg',
    imageAlt: 'Process industry high-pressure chemical refinery piping and distillation towers',
    hudTag: 'Process Sector — Bulk Material Handling',
    badgeText: 'HIGH IMPACT & CORROSION',
    appLink: '/custom-parts',
    appLabel: 'Custom 3D Engineered Parts',
    oemComparison: {
      oemLimitation: 'High-velocity bulk transfer quickly punches holes through thin fabricated steel chutes, forcing emergency plant shutoffs and hazardous dust leaks.',
      wearguardSolution: 'Engineered composite tile layouts break the momentum of falling material and create a dead-box rock-on-rock cushion that shields structural steel indefinitely.',
      campaignMetrics: [
        { label: 'Chute Continuous Service', oem: '6 to 8 Months', wearguard: '28+ Months Continuous' },
        { label: 'Impact Acoustic Damping', oem: '98 dB (High Echo)', wearguard: '79 dB (Quiet Absorbing)' },
        { label: 'Unscheduled Plant Outages', oem: '4 Outages/Yr', wearguard: 'Zero Chute Outages' },
      ],
    },
  },
  {
    slug: 'mining',
    num: '04',
    title: 'Mining & Quarrying',
    cardTitle: 'Mining & Quarrying',
    subtitle: 'Primary Crushers, Ball Mills, Sag Liners & Heavy Extraction Circuits',
    eyebrow: 'Services',
    cardDesc: 'Hyper-eutectic high-chrome crusher liners, grizzly bars, and severe impact wear plates that absorb devastating dynamic shock.',
    desc: [
      'Heavy mineral processing demands metallurgical components that absorb devastating dynamic impact without brittle fracturing, while maintaining extreme abrasive wear resistance against sharp crushed rock.',
      'WearGuard manufactures formulated austenitic manganese steels (Mn 14–22% with Cr additions), chrome-moly martensitic alloys, and ceramic-embedded wear blocks for high-tonnage primary and secondary crushing circuits.',
    ],
    specs: [
      { label: 'Impact Dynamic', value: 'Extreme Shock Load' },
      { label: 'Hardness Rating', value: '500–620 BHN' },
      { label: 'Metallurgy', value: 'Mn18Cr2, Mn22 & Martensitic Cr-Mo' },
      { label: 'Field Reliability', value: 'Zero Catastrophic Failure Record' },
    ],
    features: [
      'Impact crusher blow bars, curtain wear plates & side liners',
      'Jaw crusher fixed and movable die plates with optimized tooth profiles',
      'Vibrating screen grizzly bars, feeder decks & transfer funnels',
      'Slurry pump volute liners, impellers and suction throatbushes',
    ],
    cardImage: '/images/mining-quarry-excavation.jpg',
    bannerImage: '/images/mining-quarry-excavation.jpg',
    imageAlt: 'Mining open pit rock face excavation with heavy wheel loader and haul truck',
    hudTag: 'Mining Sector — Heavy Crushing Circuits',
    badgeText: 'DYNAMIC SHOCK & IMPACT',
    appLink: '/applications',
    appLabel: 'Transfer Liners & Chute Protection',
    oemComparison: {
      oemLimitation: 'Standard high-chrome blow bars fracture under tramp iron, causing catastrophic crusher chamber destructions costing upwards of $150,000 in repair and downtime.',
      wearguardSolution: 'Dual-phase ceramic composite metallurgy combines shock-absorbing martensitic steel backing with ultra-hard ceramic cutting faces, delivering zero catastrophic breakage in the field.',
      campaignMetrics: [
        { label: 'Primary Tonnage Crushed', oem: '280,000 Tonnes', wearguard: '520,000+ Tonnes' },
        { label: 'Catastrophic Failure Rate', oem: '4.2% Risk Rate', wearguard: '0.00% Proven Record' },
        { label: 'Product Sizing Consistency', oem: 'Drops after 40%', wearguard: 'Maintains 90%+ Spec' },
      ],
    },
  },
]
