export const heroImage = '/images/asphalt-plant-hero.png'
export const aboutImage = '/images/wearguard-hero-new.png'
export const plantImage = '/images/wearguard-hero-3d.png'

export const navItems = [
  { label: 'Industries', href: '/industries' },
  { label: 'Applications', href: '/applications' },
  { label: 'Materials', href: '/materials' },
  { label: 'Custom Parts', href: '/custom-parts' },
  { label: 'About Us', href: '/about' },
]

export type SubComponent = {
  id: string
  title: string
  subtitle: string
  image: string
  description: string
  specs: { label: string; value: string }[]
}

export type Application = {
  slug: string
  num: string
  title: string
  tagline: string
  summary: string
  eyebrow: string
  description: string[]
  specs: { label: string; value: string }[]
  image: string
  subComponents: SubComponent[]
  engineeringSupport: {
    title: string
    text: string
    image: string
    points: string[]
  }
}

export const applications: Application[] = [
  {
    slug: 'dryer-components',
    num: '01',
    title: 'Dryer Components',
    tagline: 'High-Temperature Drum Internals, Trunnions & Drive Assemblies',
    summary: 'Trunnion wheels, rollers, flights, rings, gears, chutes and complete assemblies engineered for heat transfer and abrasive service.',
    eyebrow: 'Application 01 / 06',
    description: [
      "We don't just rebuild or supply dryer drums; we engineer better drying performance. WearGuard retrofits combine CFD-analyzed flighting, optimized material curtains, and wear-reducing technologies to improve heat transfer, moisture removal, retention time, and mixing while lowering fuel, power, and energy consumption.",
      'Struggling with filter clogs, unstable temperatures, or low productivity? We tune the drying process for better control, higher uptime, and consistent output across modern batch and continuous-flow dryer systems.',
    ],
    specs: [
      { label: 'Typical Hardness', value: '400–500 BHN' },
      { label: 'Service Temperature', value: 'Up to 950°C' },
      { label: 'Lead Time', value: '6–8 Weeks' },
      { label: 'Batch Size', value: '1–10 Units Supported' },
    ],
    image: '/images/dryer-combo.webp',
    subComponents: [
      {
        id: 'dryer-sprockets',
        title: 'Dryer Drum Sprockets & Trunnion',
        subtitle: 'High-Torque Drive Rings & Pinions',
        image: '/images/dryer-sprockets.webp',
        description: 'CNC-machined and induction-hardened forged alloy sprockets designed for high-torque rotary dryers. 100% direct drop-in match for all major OEM drum drive assemblies.',
        specs: [
          { label: 'Material', value: 'Forged 42CrMo4 / Alloy Steel' },
          { label: 'Heat Treat', value: 'Induction Hardened Teeth (50–55 HRC)' },
          { label: 'Compatibility', value: 'All Major OEM Drums' },
        ],
      },
      {
        id: 'drum-flights',
        title: 'Drum Internals & Discharge Flights',
        subtitle: 'CFD-Optimized Material Curtain Lifters',
        image: '/images/drum-internal-discharge-flights.webp',
        description: 'Engineered in high-chrome and heat-resistant martensitic alloys. Creates an optimal dense material veil across the combustion zone, maximizing thermal transfer and eliminating cold aggregate drop.',
        specs: [
          { label: 'Material', value: 'Cr 18–28% High Chrome / Wear Plate' },
          { label: 'Thermal Rating', value: 'Up to 950°C Continuous' },
          { label: 'Lifespan', value: '2.5x vs Standard Carbon Steel' },
        ],
      },
      {
        id: 'trunnion-wheels',
        title: 'Thrust & Trunnion Wheels',
        subtitle: 'Heavy Machined & Cast Assemblies',
        image: '/images/trunnion-wheels.webp',
        description: 'Available in machined and cast alloy options, complete with heavy spherical roller bearings and pillow block assemblies to enable quick change-out and prevent unplanned plant downtime.',
        specs: [
          { label: 'Construction', value: 'Forged / Cast Alloy Rim with Shaft' },
          { label: 'Bearing Type', value: 'Heavy Duty Spherical Roller' },
          { label: 'Maintenance', value: 'Grease-Purged Labyrinth Sealing' },
        ],
      },
    ],
    engineeringSupport: {
      title: 'Engineering Assistance & Support',
      text: 'At WearGuard, you receive more than high-quality replacement parts. You gain access to global specialists in dryer engineering who bring the knowledge, analysis, and practical support required to diagnose operating challenges, identify the right upgrades, and improve the efficiency and reliability of your drying system.',
      image: '/images/dryer-sprockets.webp',
      points: [
        'CFD flight veil modeling & thermal efficiency audit',
        '24-Hour drawing review & 3D CAD modeling',
        'Complete pre-assembled trunnion & bearing units',
      ],
    },
  },
  {
    slug: 'filter-components',
    num: '02',
    title: 'Filter & Baghouse Components',
    tagline: 'High-Temperature Cages, Bags & Corrosion-Resistant Housings',
    summary: 'Filter bags, precision cages, housings and plenum plates for corrosive, humid and high-temperature environments.',
    eyebrow: 'Application 02 / 06',
    description: [
      'Filtration systems fail early when cages corrode, bags abrade against rough wire welds, or housings warp under thermal cycling. WearGuard manufactures precision CNC-welded filter cages, high-temp seamless bags, and laser-cut plenum tube sheets engineered for dimensional stability.',
      'Corrosion-resistant electro-coatings and alloy choices are matched to process gas chemistry, acid dew point, and pulse-jet pressure for maximum airflow and zero filter blowouts.',
    ],
    specs: [
      { label: 'Corrosion Class', value: 'High Acid & Moisture Resistance' },
      { label: 'Service Temperature', value: 'Up to 400°C' },
      { label: 'Lead Time', value: '6–8 Weeks' },
      { label: 'Batch Size', value: '1–10 Units Supported' },
    ],
    image: '/images/filter-combo.webp',
    subComponents: [
      {
        id: 'filter-cages',
        title: 'Precision Welded Filter Cages',
        subtitle: 'Burr-Free Heavy Wire Construction',
        image: '/images/filter-cages.webp',
        description: 'Robotically welded with zero internal weld splatter or burrs. Prevents premature bag mechanical wear during high-frequency pulse-jet cleaning cycles.',
        specs: [
          { label: 'Material', value: 'Galvanized / SS316 / Epoxy Coated' },
          { label: 'Wire Count', value: '8, 10, 12, 20 & 24 Wire Star Designs' },
          { label: 'Top Collar', value: 'Venturi Integrated Direct Fit' },
        ],
      },
      {
        id: 'filter-bags',
        title: 'High-Temperature Filter Bags',
        subtitle: 'PTFE, Nomex & Ryton Media',
        image: '/images/filter-bags.webp',
        description: 'Engineered needle felt and woven membrane bags tailored for asphalt baghouses, cement kilns, and smelters. Resists acid attack and abrasive dust cake penetration.',
        specs: [
          { label: 'Media', value: 'Nomex / Aramid / PTFE Membrane' },
          { label: 'Permeability', value: 'Custom Matched CFM Rating' },
          { label: 'Temperature', value: 'Continuous 260°C / Peak 300°C' },
        ],
      },
      {
        id: 'exhaust-dampers',
        title: 'Exhaust & Fan Housing Liners',
        subtitle: 'High-Velocity Gas Path Protection',
        image: '/images/exhaust-fan.webp',
        description: 'Hardfaced chromium carbide and wear-resistant scroll liners protecting high-flow induced draft fan housings from abrasive quartz particulate erosion.',
        specs: [
          { label: 'Liner Plate', value: 'WearGuard CCO 62 HRC' },
          { label: 'Velocity Limit', value: 'Up to 45 m/s Particulate Flow' },
          { label: 'Service Life', value: '3x Over Mild Steel Housings' },
        ],
      },
    ],
    engineeringSupport: {
      title: 'Baghouse Optimization Support',
      text: 'Our engineers analyze differential pressure (ΔP), gas velocity, moisture levels, and particulate grain loading to eliminate bag blinding and draft restrictions across your asphalt or cement plant.',
      image: '/images/filter-cages.webp',
      points: [
        'Venturi airflow velocity modeling',
        'Custom tube sheet laser-cutting to ±0.2mm tolerance',
        'High-temp fabric chemical compatibility testing',
      ],
    },
  },
  {
    slug: 'mixer-components',
    num: '03',
    title: 'Mixer Components',
    tagline: 'High-Chrome Ni-Hard Liners, Paddle Arms, Blades & Shafts',
    summary: 'Ni-Hard and high-chrome liners, paddle arms, tips, shafts and arm-protection systems built for longer wear life.',
    eyebrow: 'Application 03 / 06',
    description: [
      'Concrete and asphalt mixer wear parts absorb the highest combined abrasion, shear friction, and impact loads in modern manufacturing. WearGuard manufactures precision cast Ni-Hard 4 and Cr 28% paddle blades, floor tiles, and shaft protection sleeves designed for extended campaign life.',
      'Our segmented arm-protection guards and reversible tiles allow localized replacements right in the high-wear zone without tearing out the entire mixer shaft.',
    ],
    specs: [
      { label: 'Typical Hardness', value: '600–680 BHN (60–64 HRC)' },
      { label: 'Wear Improvement', value: '45–70% Over Standard OEM' },
      { label: 'Interchangeability', value: '100% Direct Bolt-On Match' },
      { label: 'Lead Time', value: '4–6 Weeks Available' },
    ],
    image: '/images/mixer-shaft-&-arms.webp',
    subComponents: [
      {
        id: 'paddle-arms',
        title: 'Mixer Paddle Arms & Scrapers',
        subtitle: 'Shock-Absorbing Ductile Iron & Alloy Castings',
        image: '/images/mixer-paddle-arms.webp',
        description: 'Cast with heavy reinforcing ribs to absorb tramp aggregate shock without fracturing. Precision-broached spline hubs for zero drive play.',
        specs: [
          { label: 'Material', value: 'Austempered Ductile Iron / Alloy Cast' },
          { label: 'Torque Rating', value: 'High Shock Impact Certified' },
          { label: 'Fitment', value: 'BHS, Sicoma, Liebherr, Teka, Simem' },
        ],
      },
      {
        id: 'mixer-tips',
        title: 'High-Chrome Paddle Tips & Blades',
        subtitle: 'Cr 28% Maximum Abrasion Resistance',
        image: '/images/mixer-tips.webp',
        description: 'Hyper-eutectic chromium cast blades with razor-edge profile retention. Maintains tight clearance against bottom floor tiles for uniform mixing and zero aggregate buildup.',
        specs: [
          { label: 'Hardness', value: '620–680 BHN / 62 HRC' },
          { label: 'Chemistry', value: 'High-Chrome (Cr 26–28%, C 3.2%)' },
          { label: 'Design', value: 'Reversible Wear Edge Profile' },
        ],
      },
      {
        id: 'arm-protection',
        title: 'Arm Protection Guards & Wall Liners',
        subtitle: 'Field-Replaceable Modular Wear Sleeves',
        image: '/images/arm-protection.webp',
        description: 'Quick-clamp sacrificial protective sleeves that shield the structural arm from abrasive sand wash, eliminating costly full arm replacements.',
        specs: [
          { label: 'Installation', value: '2-Bolt Quick Release Clamp' },
          { label: 'Liner Tiles', value: 'Cast Ni-Hard & Z-Core Composite' },
          { label: 'Downtime Savings', value: '80% Faster Field Change-Out' },
        ],
      },
    ],
    engineeringSupport: {
      title: 'Mixer Metallurgy & Wear Audit',
      text: 'Our technical team verifies paddle angles, tile clearance tolerances, and alloy metallurgy to double your concrete or asphalt batching tonnage between scheduled relines.',
      image: '/images/mixer-tips.webp',
      points: [
        '100% direct bolt-on interchangeability guarantee',
        'Custom slotted mounting holes for field clearance adjustment',
        'Express emergency replacement casting program',
      ],
    },
  },
  {
    slug: 'wear-liners-transfer-protection',
    num: '04',
    title: 'Wear Liners & Transfer Protection',
    tagline: 'Ceramic-Rubber Composites, CCO Hardfaced Plate & Drop Chutes',
    summary: 'Application-matched protection for chutes, hoppers, bins, skirts, impact zones and critical transfers.',
    eyebrow: 'Application 04 / 06',
    description: [
      'Transfer points, aggregate bins, and drop chutes suffer the fastest material loss in heavy processing plants. WearGuard matches liner composition, thickness, and fastening method to your specific material flow trajectory and lump size.',
      'From 92% high-alumina ceramic tiles vulcanized in shock-absorbing rubber to heavy chromium-carbide overlay (CCO) plates, we stop structural steel burn-through permanently.',
    ],
    specs: [
      { label: 'Coverage', value: 'Chutes, Hoppers, Skirts & Impact Feeders' },
      { label: 'Hardness Range', value: '60 HRC (CCO) / 9 Mohs (Ceramic)' },
      { label: 'Fastening', value: 'Countersunk Weld-Studs / Bolt-In' },
      { label: 'Lead Time', value: '4–6 Weeks' },
    ],
    image: '/images/wear-liners-3d.png',
    subComponents: [
      {
        id: 'ceramic-rubber',
        title: 'Ceramic-Rubber Composite Panels',
        subtitle: 'High-Impact Kinetic Energy Deflection',
        image: '/images/ceramic-liners.webp',
        description: 'Hexagonal 92% Al2O3 alumina ceramic blocks vulcanized into a resilient natural rubber matrix with steel backing plate. Eliminates tile cracking from high-velocity rock drop.',
        specs: [
          { label: 'Ceramic Grade', value: '92% / 95% Al2O3 High Alumina' },
          { label: 'Rubber Elasticity', value: 'High Damping Natural Matrix' },
          { label: 'Mounting', value: 'Rear Welded M16/M20 Studs' },
        ],
      },
      {
        id: 'hardfaced-plate',
        title: 'Chromium Carbide Overlay (CCO) Plate',
        subtitle: '62 HRC Fused Wear Cladding',
        image: '/images/hardfaced-plate.webp',
        description: 'Fused primary chromium carbide hardfacing on a ductile weldable steel backing. Can be custom plasma-cut, countersunk, and rolled into conical chute transitions.',
        specs: [
          { label: 'Hardness', value: '58–62 HRC (600–700 BHN)' },
          { label: 'Base Metal', value: 'Weldable Structural Q235 / S275' },
          { label: 'Customization', value: 'CNC Plasma Cut to Exact CAD' },
        ],
      },
      {
        id: 'modular-tiles',
        title: 'Modular Cast Ni-Hard Chute Tiles',
        subtitle: 'Interlocking Bolt-On Liners',
        image: '/images/rubber-ceramic.webp',
        description: 'Standard and bespoke interlocking alloy wear blocks that protect aggregate bins, skip hoists, and feeder throats against gouging quartz abrasion.',
        specs: [
          { label: 'Material', value: 'Ni-Hard IV / High Chrome' },
          { label: 'Pattern', value: 'Interlocking Flush Joints' },
          { label: 'Wear Life', value: 'Up to 5x vs Mild Steel' },
        ],
      },
    ],
    engineeringSupport: {
      title: 'Chute Trajectory & Impact Review',
      text: 'Share your drop heights, feed rates, lump sizes, and abrasive characteristics. We calculate impact forces and deliver a 3D liner layout that prevents material hang-ups and premature wear-through.',
      image: '/images/ceramic-liners.webp',
      points: [
        'Complete 3D CAD chute modeling with cut lists',
        'Pre-engineered plug-weld and countersunk bolt layouts',
        'Custom modular tile kits tagged for fast on-site installation',
      ],
    },
  },
  {
    slug: 'bucket-elevators',
    num: '05',
    title: 'Bucket Elevators',
    tagline: 'Heavy-Duty Buckets, Hardened Chains, Sprockets & Guides',
    summary: 'Long-life buckets, reinforced lips, wear strips, chain and sprocket components for dependable material flow.',
    eyebrow: 'Application 05 / 06',
    description: [
      'Vertical material transport depends on buckets and drive components maintaining tight geometric alignment under thousands of continuous load cycles. WearGuard reinforces bucket digging lips and manufactures matched case-hardened alloy chains, sprockets, and wear guides.',
      'Eliminating uneven sprocket wear directly prevents chain derailment, belt slippage, and catastrophic elevator outages.',
    ],
    specs: [
      { label: 'Chain Hardness', value: '55–60 HRC (Case Depth 2.5mm)' },
      { label: 'Bucket Metallurgy', value: 'Fabricated Hardox / Cast Manganese' },
      { label: 'Lead Time', value: '6–8 Weeks' },
      { label: 'Batch Size', value: '1–10 Units Supported' },
    ],
    image: '/images/elevator-combo.webp',
    subComponents: [
      {
        id: 'elevator-buckets',
        title: 'Reinforced Heavy Elevator Buckets',
        subtitle: 'Hardened Digging Lip Assemblies',
        image: '/images/elevator-buckets.webp',
        description: 'High-capacity continuous and centrifugal buckets with welded wear lips and reinforced corners engineered to scoop dense aggregate without deformation.',
        specs: [
          { label: 'Material', value: 'AR400 / AR500 / Cast Alloy' },
          { label: 'Lip Reinforcement', value: 'High-Chrome Hardfaced Edge' },
          { label: 'Types', value: 'Deep Bottom, Shallow, Continuous' },
        ],
      },
      {
        id: 'drive-sprockets',
        title: 'Elevator Traction Wheels & Sprockets',
        subtitle: 'Segmented Replaceable Rim Wheels',
        image: '/images/drive-sprockets.webp',
        description: 'Segmented rim sprockets that allow tooth replacement without removing the central hub or disassembling the elevator head shaft.',
        specs: [
          { label: 'Design', value: 'Segmented Bolt-On Rim' },
          { label: 'Tooth Hardness', value: 'Flame / Induction Hardened 55 HRC' },
          { label: 'Hub Fitment', value: 'Taper-Lock / Keyed Bored Shaft' },
        ],
      },
      {
        id: 'elevator-chains',
        title: 'Round Link & Bush Conveyor Chains',
        subtitle: 'High Fatigue Strength Alloy Links',
        image: '/images/elevator-plant.webp',
        description: 'Heat-treated forged alloy chains engineered with tight pitch tolerances to ensure smooth sprocket meshing and long service life in hot cement and aggregate elevators.',
        specs: [
          { label: 'Grade', value: 'High-Strength Case-Hardened Alloy' },
          { label: 'Pitch Precision', value: 'Matched Pairs (±0.05% Pitch)' },
          { label: 'Corrosion Shield', value: 'Special High-Temp Anti-Oxidant' },
        ],
      },
    ],
    engineeringSupport: {
      title: 'Elevator Drive & Chain Sizing',
      text: 'We inspect drive speeds, tension requirements, and bucket discharge angles to specify the correct bucket spacing, chain grade, and sprocket profile for 100% spillage-free lifting.',
      image: '/images/drive-sprockets.webp',
      points: [
        'Matched-pair chain tolerance certification',
        'Segmented rim kits for express 2-hour field replacements',
        'On-site chain stretch and alignment inspection guide',
      ],
    },
  },
  {
    slug: 'drag-conveyors',
    num: '06',
    title: 'Drag Conveyors',
    tagline: 'Replaceable Bottom Liners, Drag Flights, Sprockets & Return Rails',
    summary: 'Replaceable strips, chain-related parts and sprocket wear components that keep drives aligned and reliable.',
    eyebrow: 'Application 06 / 06',
    description: [
      'Drag conveyor downtime is almost always caused by bottom trough liner wear compounding into flight twisting and drive chain misalignment. WearGuard manufactures precision CNC-profiled bottom liners, forged drag flights, and matched sprocket teeth for harsh hot-mix asphalt and mining duty.',
      'Consistent tolerances across our wear kits keep chain tracking straight and reduce motor electrical amp draw.',
    ],
    specs: [
      { label: 'Trough Hardness', value: '450–600 BHN' },
      { label: 'Flight Design', value: 'Forged & Fabricated Box Flights' },
      { label: 'Lead Time', value: '6–8 Weeks' },
      { label: 'Batch Size', value: '1–10 Units Supported' },
    ],
    image: '/images/wearguard-parts.png',
    subComponents: [
      {
        id: 'trough-liners',
        title: 'Conveyor Bottom Trough & Side Liners',
        subtitle: 'Ultra-Smooth Sliding Wear Plates',
        image: '/images/liner-control-the-low.webp',
        description: 'Precision pre-drilled liner plates in WearGuard P450 and CCO alloy that drop straight into existing conveyor casing with zero field torching or grinding.',
        specs: [
          { label: 'Material', value: 'P450 Martensitic / CCO Clad' },
          { label: 'Fastening', value: 'Countersunk T-Bolts / Plug Welded' },
          { label: 'Friction Coeff.', value: 'Low Friction Abrasion Resistant' },
        ],
      },
      {
        id: 'drag-flights',
        title: 'Forged Drag Flights & Attachments',
        subtitle: 'Heavy-Duty Material Moving Paddles',
        image: '/images/wearguard.png',
        description: 'Drop-forged drag flights designed to carry high-tonnage bulk materials without bending or galling against the conveyor casing walls.',
        specs: [
          { label: 'Construction', value: 'Forged Alloy Steel / Reinforced Hardox' },
          { label: 'Attachments', value: 'Standard & Custom Chain Mounts' },
          { label: 'Wear Strip', value: 'Hardfaced Bottom Edge Option' },
        ],
      },
      {
        id: 'tail-sprockets',
        title: 'Head & Tail Shaft Sprocket Assemblies',
        subtitle: 'Induction-Hardened Splined Hubs',
        image: '/images/drive-sprockets.webp',
        description: 'CNC tooth-cut sprockets manufactured with deep tooth root clearance to prevent sticky asphalt or wet aggregate buildup from derailing the chain.',
        specs: [
          { label: 'Tooth Hardness', value: '52–56 HRC Induction Hardened' },
          { label: 'Hub Design', value: 'Solid / Split Hub for Fast Reline' },
          { label: 'Self-Cleaning', value: 'Mud Relief Tooth Root Pockets' },
        ],
      },
    ],
    engineeringSupport: {
      title: 'Conveyor Alignment & Reline Kits',
      text: 'Order a complete pre-packaged reline kit (bottom liners, side plates, flights, chain, sprockets, and hardware) packaged and tagged for your planned shutdown turnaround.',
      image: '/images/liner-control-the-low.webp',
      points: [
        'Complete turn-key shutdown reline packages',
        '100% direct drop-in fit with zero on-site modifications',
        '24-Hour emergency dispatch for critical breakdown components',
      ],
    },
  },
]

export interface MaterialGrade {
  code: string
  name: string
  category: string
  hardness: string
  impactResistance: string
  tempLimit: string
  composition: string
  primaryUse: string
  desc: string
  highlights: string[]
  image: string
}

export const materialGrades: MaterialGrade[] = [
  {
    code: '01',
    name: 'WearGuard P400 / P450 Plate',
    category: 'Quenched & Tempered Martensitic Alloy Steel',
    hardness: '400–475 BHN',
    impactResistance: 'High (30 J at -40°C)',
    tempLimit: 'Up to 250°C',
    composition: '0.22% C · 1.50% Mn · 1.20% Cr · 0.25% Mo · Boron micro-alloyed',
    primaryUse: 'Hopper chutes, transfer bins, loader bucket liners & truck beds',
    desc: 'High-toughness martensitic structural wear plate combining excellent weldability and cold bendability with outstanding sliding abrasion resistance.',
    highlights: [
      'Precision CNC profile cutting & beveling to ±0.5mm',
      'Countersunk pre-drilled holes for rapid bolt-on installation',
      'Engineered for mixed impact & continuous sliding wear',
    ],
    image: '/images/hardfaced-plate.webp',
  },
  {
    code: '02',
    name: 'WearGuard P500 Extreme Plate',
    category: 'High-Hardness Quenched & Tempered Steel',
    hardness: '480–540 BHN',
    impactResistance: 'Moderate-High',
    tempLimit: 'Up to 250°C',
    composition: '0.28% C · 1.60% Mn · 1.50% Cr · 0.40% Mo · 0.004% B',
    primaryUse: 'Screen decks, crusher discharge chutes, aggregate reclaimer skirts',
    desc: 'Ultra-high hardness plate designed specifically for severe abrasion where material gouging and fine particle erosion cause rapid wall thinning.',
    highlights: [
      'Extends liner changeout intervals by up to 50%',
      'Custom pre-rolled radial shapes for drum and silo liners',
      'Compatible with stud welding & countersunk fastener systems',
    ],
    image: '/images/wear-liners-3d.png',
  },
  {
    code: '03',
    name: 'EnduraCast™ 28% Chrome White Iron',
    category: 'High-Chromium Martensitic White Iron (AS2027 / ASTM A532)',
    hardness: '600–680 BHN (60–65 HRC)',
    impactResistance: 'Low-Medium (High-hardness matrix)',
    tempLimit: 'Up to 450°C (Up to 800°C in high-temp variant)',
    composition: '2.8–3.2% C · 26–29% Cr · 1.5% Mo · 0.8% Ni',
    primaryUse: 'Mixer paddle tips, asphalt pugmill liners, slurry pump impellers',
    desc: 'Dense matrix of hexagonal M7C3 primary carbides embedded in a hardened martensitic/austenitic matrix for unmatched resistance to slurry grinding.',
    highlights: [
      'Micro-hardness of carbides exceeds 1500–1800 HV',
      'Precision investment and resin-sand castings with internal steel inserts',
      'Exceptional performance against crushed quartz, granite and silica sand',
    ],
    image: '/images/mixer-shaft-&-arms.webp',
  },
  {
    code: '04',
    name: 'Wearcast Max™ Ni-Hard Class IV',
    category: 'Nickel-Chromium Martensitic Alloy Iron',
    hardness: '550–650 BHN (55–62 HRC)',
    impactResistance: 'Medium',
    tempLimit: 'Up to 350°C',
    composition: '3.0–3.6% C · 8.0–10.0% Cr · 4.5–6.5% Ni · 1.5% Si',
    primaryUse: 'Cement grinding rings, drag conveyor wear bars, concrete mixer floor tiles',
    desc: 'Classic metallurgical workhorse featuring refined eutectic carbides supported by nickel-stabilized martensite for heavy abrasive material handling.',
    highlights: [
      'High compressive yield strength resistant to deformation under heavy crush loads',
      'Field-proven reliability across concrete batching and raw mill processing',
      'Segmented modular tile systems for localized high-wear replacements',
    ],
    image: '/images/custom-casting-engineering.jpg',
  },
  {
    code: '05',
    name: 'Ceramic-Rubber Matrix Composites',
    category: 'Hexagonal Alumina Tiles Bonded in Resilient Rubber Matrix',
    hardness: 'Alumina 92–95% (9 Mohs / ~1400 HV)',
    impactResistance: 'Superior (Energy-absorbing rubber cushion)',
    tempLimit: 'Up to 120°C',
    composition: '95% Al2O3 high-purity alumina sintered tiles + vulcanized chloroprene',
    primaryUse: 'High-drop aggregate chutes, conveyor deflectors, cyclone feed boxes',
    desc: 'Combines the extreme sliding wear resistance of dense alumina ceramics with the kinetic impact absorption and noise dampening of vulcanized rubber.',
    highlights: [
      'Absorbs kinetic shock from heavy ore boulders up to 300mm lump size',
      'Dramatically reduces noise levels (up to 15 dB acoustic reduction)',
      'Steel backing plate with welded studs for fast mechanical bolt-in',
    ],
    image: '/images/dark-noise-texture.png',
  },
  {
    code: '06',
    name: 'Chrome-Carbide Overlay (CCO) Clad Plate',
    category: 'Bimetallic Cladding on Structural Weldable Substrate',
    hardness: '58–64 HRC (Carbides ~1750 HV)',
    impactResistance: 'Medium-High (Ductile steel backing plate)',
    tempLimit: 'Up to 600°C',
    composition: 'Overlay: 4.5% C · 28–32% Cr · Bal Fe on S275/S355 structural base',
    primaryUse: 'Induced draft fan blades, cyclone cones, grizzly feed troughs',
    desc: 'Dense primary chromium carbide deposit fused onto a ductile steel backing plate, delivering severe abrasion resistance with structural weldability.',
    highlights: [
      'Engineered stress-relief hairline cracks ensure flatness without compromising wear life',
      'Can be rolled into small-diameter pipes, elbows and transitional cones',
      'Easily field-welded using standard carbon steel backing electrodes',
    ],
    image: '/images/hand-titanium.jpg',
  },
]

export const materials = [
  { name: 'WearGuard P400 Plate', hardness: '400 BHN', desc: 'CNC profiled and cut-to-shape grade for moderate to heavy abrasive impact service.' },
  { name: 'WearGuard P500 Plate', hardness: '500 BHN', desc: 'Ultra-high hardness plate engineered for sustained sliding aggregate abrasion.' },
  { name: 'EnduraCast™ 28% Chrome', hardness: '650 BHN', desc: 'High-chromium white iron engineered for severe slurry and pugmill grinding.' },
  { name: 'Wearcast Max™ Ni-Hard', hardness: '600 BHN', desc: 'Nickel-stabilized martensitic alloy iron for concrete batching and raw mills.' },
  { name: 'Ceramic-Rubber Matrix', hardness: '9 Mohs / 95% Al2O3', desc: 'Alumina ceramic tiles vulcanized in rubber for high-drop impact chutes.' },
  { name: 'CCO Clad Overlay Plate', hardness: '62 HRC', desc: 'Fused primary chromium carbide overlay on weldable structural steel base.' },
]

export const industries = [
  { name: 'Asphalt', desc: 'Wear protection for drum, mixing and handling equipment exposed to abrasive aggregate.' },
  { name: 'Concrete', desc: 'Components engineered for constant abrasive contact with cementitious material.' },
  { name: 'Process industries', desc: 'Custom wear solutions for continuous processing environments.' },
  { name: 'Mining', desc: 'Heavy-duty liners and components for the highest-impact extraction environments.' },
  { name: 'Cement', desc: 'High-temperature, high-abrasion parts built for kiln and mill service.' },
  { name: 'Steel', desc: 'Wear-resistant components for high-temperature material handling.' },
  { name: 'Recycling', desc: 'Durable parts engineered for mixed-material, high-impact processing.' },
  { name: 'Aggregate', desc: 'Long-life liners and transfer protection for crushing and screening lines.' },
]

export interface TickerItemData {
  code: string
  name: string
  spec: string
}

export const tickerItems: TickerItemData[] = [
  { code: '01', name: 'Asphalt Systems', spec: 'Dryer Drums & Pugmills' },
  { code: '02', name: 'Concrete Batching', spec: 'Planetary & Twin-Shaft' },
  { code: '03', name: 'Mining & Quarrying', spec: 'Severe Impact Crushers' },
  { code: '04', name: 'Process Industries', spec: 'Transfer Chute Protection' },
  { code: '05', name: 'Cement & Kilns', spec: 'Raw Mill & High-Temp' },
  { code: '06', name: 'Steel & Foundry', spec: 'Abrasion Resistant Alloys' },
  { code: '07', name: 'Recycling & Shredding', spec: 'High-Impact Rotor Caps' },
  { code: '08', name: '3D Reverse Engineering', spec: '1–10 Unit Batch Runs' },
  { code: '09', name: 'Ni-Hard & High-Chrome', spec: '600–680 BHN Castings' },
  { code: '10', name: 'Ceramic-Rubber Matrix', spec: 'Kinetic Shock Deflection' },
]

export const faqs = [
  { q: 'What industries does WearGuard work with?', a: 'WearGuard supports asphalt, concrete, cement, mining, steel, recycling, aggregate, material handling, power generation and heavy equipment manufacturing.' },
  { q: 'Can you provide custom industrial solutions?', a: 'Yes. WearGuard reverse-engineers parts from design through prototype, including low-volume requirements and custom wear protection.' },
  { q: 'How do you select the right material?', a: 'Material technology is matched to the actual wear zone, considering impact, abrasion, erosion, temperature, corrosion, material flow and service-life targets.' },
  { q: 'What information should I include in an enquiry?', a: 'Share the equipment type, manufacturer, part number, quantity, operating conditions, wear problem, temperature, material handled and any drawings, CAD files or photographs.' },
  { q: 'Do you offer long-term technical support?', a: 'WearGuard provides engineering assistance, practical recommendations and on-site support where appropriate. Project lead times and support details are confirmed during quotation.' },
]

export const processSteps = [
  { n: '01', t: '3D Laser Scan & Audit', d: 'High-precision coordinate scanning of worn or OEM parts to capture exact working geometries and wear profiles.' },
  { n: '02', t: 'Metallurgical Selection', d: 'Cross-sectional wear analysis and alloy matching (Ni-Hard, 28% Chrome, P500) tailored to your operational duty cycle.' },
  { n: '03', t: 'CAD Tooling & Casting', d: 'CNC pattern tooling, mold simulation, and tight-tolerance casting with ultrasonic and dimensional QA verification.' },
  { n: '04', t: 'Rapid 1–10 Batch Delivery', d: 'Direct plant shipment in 6–8 weeks with complete dimensional inspection certificates and installation fasteners.' },
]

export const whyPoints = [
  { n: '01', t: 'Metallurgical Precision', d: 'Every wear part is alloy-matched to the exact tribological conditions: impact, gouging, slurry grinding, or high-temp oxidation.' },
  { n: '02', t: 'Small-Batch Flexibility', d: 'We manufacture as few as 1–10 units without OEM minimum order penalties, allowing field trials and custom upgrades.' },
  { n: '03', t: 'Direct Engineering Contact', d: 'Work directly with metallurgists and mechanical engineers who understand plant uptime, not commission salespeople.' },
]

export const customFeatures = [
  { title: 'Reverse Engineering & 3D Scanning', text: 'From worn components or physical parts without drawings to production CAD and verified tooling.' },
  { title: 'Custom Wear Metallurgy', text: 'Application-tailored chemistries (Ni-Hard, 28% Chrome, Ceramic Composites) engineered to eliminate recurring failures.' },
  { title: 'Small-Batch Production (1–10 Units)', text: 'Flexible manufacturing runs designed for urgent repairs, prototype upgrades, and niche machinery lines.' },
  { title: 'Full Mechanical & Dimensional QA', text: 'CMM dimensional verification, hardness testing (BHN/HRC), and ultrasonic inspection with certified test reports.' },
]
