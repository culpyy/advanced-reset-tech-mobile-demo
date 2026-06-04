const ART_PRODUCTS = [
  {
    id: 'gen5-glock',
    category: 'glock',
    name: 'A.R.T. Trigger Kit — Gen 5 Glock',
    price: 274.99,
    tag: 'Best Seller',
    availability: 'lead',
    leadText: '4–6 Week Lead Time',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/117/420/1__72492.1765690792.png?c=1',
    description: 'The Gen 5 A.R.T. kit leverages your slide\'s movement energy to actively drive the trigger forward after every shot — delivering a fast, crisp reset that tightens your split times and sharpens trigger control. Drop-in installation. No gunsmith needed.',
    features: [
      'Upgraded A.R.T. Trigger Assembly with integrated safety',
      'Dedicated Gen 5 Trigger Housing',
      'Three Tempered Steel Reset Levers',
      'Active mechanical reset using slide energy',
      'Drop-in — no permanent modifications',
      'CNC machined in the USA',
      'Lifetime Warranty'
    ],
    compatibility: [
      'Full-Size 9mm: G17, G17 MOS, G34, G34 MOS, G47 MOS, G49',
      'Full-Size .40 S&W: G22, G35, G35 MOS',
      'Compact 9mm: G19, G19 MOS, G45, G19X',
      'Compact .40 S&W: G23',
      'Subcompact 9mm: G26',
      'Subcompact .40 S&W: G27'
    ],
    specs: { 'Thread': 'Drop-in', 'Material': 'Steel & Polymer', 'Origin': 'USA', 'Lead Time': '4–6 Weeks', 'Warranty': 'Lifetime' }
  },
  {
    id: 'gen4-glock',
    category: 'glock',
    name: 'A.R.T. Trigger Kit — Gen 4 Glock',
    price: 249.99,
    tag: 'Best Seller',
    availability: 'lead',
    leadText: '4–6 Week Lead Time',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/116/418/Glock_ART_advanced_reset_tech_GEN_4_trigger_kit_Glock_FRT_Glock_ART__83170.1764272764.jpg?c=1',
    description: 'Precision drop-in trigger upgrade designed for Gen 4 Glock double-stack models. Harnesses slide movement energy to mechanically assist trigger reset — delivering improved control and faster follow-up shots without permanent modification.',
    features: [
      'Upgraded A.R.T. Trigger Assembly with integrated safety',
      'Dedicated Gen 4 Trigger Housing',
      'Three Tempered Steel Reset Levers',
      'Fast, crisp, tactile reset',
      'Fitment files and polishing pads included',
      'Drop-in installation',
      'Lifetime Warranty'
    ],
    compatibility: [
      'Full-Size 9mm/.40 S&W/.357 SIG: G17, G17C, G34, G34C, G22, G22C, G35, G35C, G31',
      'Compact 9mm/.40 S&W/.357 SIG: G19, G19C, G23, G23C, G32',
      'Subcompact 9mm/.40 S&W/.357 SIG: G26, G27, G33'
    ],
    specs: { 'Thread': 'Drop-in', 'Material': 'Steel & Polymer', 'Origin': 'USA', 'Lead Time': '4–6 Weeks', 'Warranty': 'Lifetime' }
  },
  {
    id: 'gen3-glock',
    category: 'glock',
    name: 'A.R.T. Trigger Kit — Gen 3 Glock',
    price: 264.99,
    tag: null,
    availability: 'lead',
    leadText: '4–6 Week Lead Time',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/115/380/combatmaster_flatface__64607.1764226241.jpg?c=1',
    description: 'Active Reset Technology for Gen 3 Glock platforms. Uses energy from the slide\'s movement to actively drive the trigger forward — giving you a crisp, tactile reset across multiple Glock generations and calibers. Includes files and polishing pads for a perfect fit.',
    features: [
      'Active Reset Technology using slide energy',
      'Crisp, tactile mechanical reset',
      'Three Tempered Steel Reset Levers',
      'Integrated safety mechanism',
      'Files and polishing pads included for fitment',
      'USA built',
      'Lifetime Warranty'
    ],
    compatibility: [
      'Full-Size 9mm/.40 S&W/.357 SIG: G17, G17C, G17L, G34, G22, G22C, G35, G31',
      'Compact 9mm/.40 S&W/.357 SIG: G19, G19C, G23, G23C, G32',
      'Subcompact 9mm/.40 S&W/.357 SIG: G26, G27, G33'
    ],
    specs: { 'Thread': 'Drop-in', 'Material': 'Steel & Polymer', 'Origin': 'USA', 'Lead Time': '4–6 Weeks', 'Warranty': 'Lifetime' }
  },
  {
    id: 'gen6-glock',
    category: 'glock',
    name: 'A.R.T. Trigger Kit — Gen 6/V Glock',
    price: 274.99,
    tag: null,
    availability: 'lead',
    leadText: '4–6 Week Lead Time',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/139/467/IMG_8220__66544.1767695046.jpg?c=1',
    description: 'The latest A.R.T. kit engineered for Gen 6/V Glock platforms. Full trigger bar and short reset connector kit delivering the same crisp mechanical reset A.R.T. is known for — now compatible with the newest Glock generation.',
    features: [
      'A.R.T. Trigger Bar & Short Reset Connector Kit',
      'Engineered for Gen 6/V platform geometry',
      'Fast, consistent mechanical reset',
      'Drop-in compatible',
      'USA built',
      'Lifetime Warranty'
    ],
    compatibility: ['Gen 6/V Glock 9mm and .40 S&W models'],
    specs: { 'Thread': 'Drop-in', 'Material': 'Steel & Polymer', 'Origin': 'USA', 'Lead Time': '4–6 Weeks', 'Warranty': 'Lifetime' }
  },
  {
    id: 'mp5-lever',
    category: 'mp5',
    name: 'MP5-22 A.R.T. Lever + Adjustable Buffer',
    price: 179.99,
    tag: 'Best Seller',
    availability: 'lead',
    leadText: '2–4 Week Lead Time',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/148/515/BA82A9E7-258F-4AB9-B739-558692903280__00479.1772588010.png?c=1',
    description: 'Active Reset Trigger component built specifically for the HK/Umarex MP5 .22LR platform. Installs directly into the factory trigger pack — no proprietary housing, no permanent modifications. The adjustable anti-bounce buffer is tunable for subsonic, standard, and high-velocity .22LR ammo, keeping your timing locked regardless of what you\'re running.',
    features: [
      'Active Reset Mechanism for faster trigger release',
      'Adjustable Anti-Bounce Buffer (3 tuning positions)',
      'Compatible with subsonic, standard, and high-velocity .22LR',
      'Dual tuning points: bolt weight and recoil spring tension',
      'Non-invasive, fully removable installation',
      'Reduces bolt bounce and stabilizes timing',
      'Minimizes split casing risk',
      'Lifetime Warranty'
    ],
    compatibility: [
      'HK/Umarex MP5 .22LR platform',
      'Recommended: Standard velocity CCI .22LR',
      'Not compatible: CCI Stingers, CCI Mini-Mag, extended-case cartridges'
    ],
    specs: { 'Platform': 'HK/Umarex MP5 .22LR', 'Caliber': '.22LR', 'Origin': 'USA', 'Lead Time': '2–4 Weeks', 'Warranty': 'Lifetime' }
  },
  {
    id: 'bolt-catch',
    category: 'ruger',
    name: 'A.R.T. Auto-Release Bolt Catch — 10/22',
    price: 14.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/144/506/8C3BBDD1-0CFF-4F38-B38B-34BCB38A2FFE__69717.1769385709.jpg?c=1',
    description: 'Drop-in auto-release bolt catch upgrade for the Ruger 10/22. Automatically releases the bolt when a loaded magazine is inserted — eliminating the manual bolt release step and speeding up your reload. Simple installation, no modifications required.',
    features: [
      'Automatic bolt release on magazine insertion',
      'Eliminates manual bolt release step',
      'Drop-in installation',
      'Speeds up reload cycle',
      'USA made',
      'Lifetime Warranty'
    ],
    compatibility: ['Ruger 10/22 all standard configurations'],
    specs: { 'Platform': 'Ruger 10/22', 'Installation': 'Drop-in', 'Origin': 'USA', 'Availability': 'In Stock', 'Warranty': 'Lifetime' }
  },
  {
    id: 'thread-adapter',
    category: 'ruger',
    name: '10/22 Slip-On Thread Adapter — 1/2×28',
    price: 29.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/145/507/0F13E74F-69FF-4650-9B20-8EC700279C71__61212.1769500091.png?c=1',
    description: 'Slip-on thread adapter that adds 1/2×28 threading to your Ruger 10/22 barrel — allowing you to run standard 1/2×28 muzzle devices. No permanent modification, no machining. Slips on, locks in.',
    features: [
      '1/2×28 right-hand threading',
      'Slip-on — no permanent modification',
      'Compatible with all standard 1/2×28 muzzle devices',
      'Secure locking mechanism',
      'USA made'
    ],
    compatibility: ['Ruger 10/22 standard barrel profile'],
    specs: { 'Thread Pitch': '1/2×28 RH', 'Platform': 'Ruger 10/22', 'Installation': 'Slip-on', 'Origin': 'USA', 'Availability': 'In Stock' }
  },
  {
    id: 'v-block',
    category: 'ruger',
    name: '10/22 Barrel Mount V-Block',
    price: 34.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/156/534/9345B08C-8B48-4944-8D63-C28AF52A89C6__70087.1773128511.png?c=1',
    description: 'Precision barrel mount V-block for the Ruger 10/22. Clamps and secures the barrel to the receiver during assembly. Essential for new builds, repairs, and replacement installs. Allen wrench included.',
    features: [
      'Secures barrel to receiver',
      'Compact, precise design',
      'Allen wrench included',
      'Essential for new builds and repairs',
      'USA made'
    ],
    compatibility: ['Ruger 10/22 receivers — all standard configurations'],
    specs: { 'Platform': 'Ruger 10/22', 'Included': 'Allen wrench', 'Origin': 'USA', 'Availability': 'In Stock' }
  },
  {
    id: 'flashbang',
    category: 'muzzle',
    name: 'Flashbang Brake — 1/2"×28',
    price: 44.99,
    tag: 'New',
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/157/535/4E401AA5-04BA-4234-913A-407C84930AAE__58850.1773128990.png?c=1',
    description: 'Engineered to vent gases outward and away from the shooter while delivering an intense, highly visible flash signature. Precision-machined 6061-T6 aluminum with black hard-coat anodizing. Crush washer included. Multi-caliber compatible.',
    features: [
      'Aggressive muzzle presence with intense flash signature',
      'Vents gases outward and away from shooter',
      'Precision-machined 6061-T6 aluminum',
      'Black hard-coat anodized finish',
      'Crush washer included',
      'Multi-caliber compatible'
    ],
    compatibility: [
      '.350 Legend, .223/5.56, 5.7×28mm, 9mm, .22LR',
      'Projectile diameters up to ~0.40"',
      '1/2×28 right-hand threaded barrels'
    ],
    specs: { 'Thread': '1/2×28 RH', 'Material': '6061-T6 Aluminum', 'Finish': 'Black Hard-Coat Anodized', 'Bore': '0.43" (11mm)', 'Weight': '2.7 oz' }
  },
  {
    id: 'blast-diverter',
    category: 'muzzle',
    name: 'Aluminum Blast Diverter — 1/2"×28',
    price: 39.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/155/530/09192AEC-2BC4-4AB8-8161-26FEE466E2B1__04127.1773128248.png?c=1',
    description: 'Redirects muzzle blast, concussion, and gases in a forward direction — keeping the shooter\'s environment clear. Lightweight aluminum construction provides functional benefit without adding meaningful weight.',
    features: [
      'Redirects blast, gases, and particulate forward',
      'Lightweight aluminum construction',
      'Disperses gases away from shooter',
      'Fits all 1/2×28 threaded barrels',
      'Clean, purposeful design'
    ],
    compatibility: ['Barrels with 1/2×28 right-hand muzzle threads (rifle and handgun platforms)'],
    specs: { 'Thread': '1/2×28 RH', 'Material': 'Aluminum', 'Function': 'Forward blast redirection', 'Availability': 'In Stock' }
  },
  {
    id: 'golf-ball',
    category: 'muzzle',
    name: 'Thread-On Golf Ball Launcher — 1/2"×28',
    price: 39.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/147/514/DE7662CD-79E7-42A4-9511-99FFC62E6AB8__47189.1768282477.1280.1280__82121.1771113022.png?c=1',
    description: 'Thread-on combination golf ball launcher and blast diverter for 1/2×28 threaded barrels. A unique dual-purpose muzzle device — redirects blast forward and gives you the ability to launch golf balls. Precision machined, ships fast.',
    features: [
      'Dual-purpose: blast diverter and golf ball launcher',
      'Thread-on installation',
      'Precision machined',
      'In stock — ships fast',
      '1/2×28 threaded'
    ],
    compatibility: ['1/2×28 right-hand threaded barrels'],
    specs: { 'Thread': '1/2×28 RH', 'Function': 'Golf ball launcher / blast diverter', 'Availability': 'In Stock' }
  },
  {
    id: 'mega-thumper',
    category: 'muzzle',
    name: '9-Port Mega Thumper Muzzle Brake',
    price: 49.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/137/462/RenderedImage__56052.1767583304.jpg?c=1',
    description: 'Nine-port muzzle brake designed to aggressively reduce muzzle rise and felt recoil. Multi-caliber compatible on 1/2×28 threaded barrels. The 9-port design maximizes gas venting for maximum recoil reduction on every shot.',
    features: [
      '9-port gas venting design',
      'Aggressive muzzle rise reduction',
      'Reduced felt recoil',
      'Multi-caliber compatible',
      '1/2×28 threaded',
      'In stock — ships fast'
    ],
    compatibility: ['Multi-caliber — 1/2×28 right-hand threaded barrels'],
    specs: { 'Thread': '1/2×28 RH', 'Ports': '9', 'Function': 'Muzzle brake / recoil reduction', 'Availability': 'In Stock' }
  },
  {
    id: 'charging-handle',
    category: 'accessories',
    name: 'Extended Knurled Charging Handle',
    price: 24.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/154/528/40ECFFB5-7C62-4288-83C0-A7A63283A11C__93061.1773810836.png?c=1',
    description: 'Extended and knurled charging handle for the Ruger PC Carbine and Charger platforms. The extended length gives you more purchase for reliable chambering under any conditions. Deep knurling ensures a positive grip whether your hands are wet or gloved.',
    features: [
      'Extended length for improved manipulation',
      'Deep knurling for positive grip in any condition',
      'Drop-in installation',
      'Compatible with gloved hands',
      'USA made'
    ],
    compatibility: ['Ruger PC Carbine', 'Ruger Charger'],
    specs: { 'Platform': 'Ruger PC Carbine / Charger', 'Installation': 'Drop-in', 'Origin': 'USA', 'Availability': 'In Stock' }
  },
  {
    id: 'hand-stop',
    category: 'accessories',
    name: 'Ergonomic M-LOK Hand Stop',
    price: 19.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/153/525/6175F262-4E4C-415A-AA3C-93F73C417F70__17828.1773127106.png?c=1',
    description: 'Low-profile ergonomic M-LOK hand stop with install hardware included. Gives your support hand a consistent reference point and prevents hand creep forward of the muzzle. Mounts directly to any M-LOK compatible handguard.',
    features: [
      'Ergonomic low-profile design',
      'Consistent hand position reference point',
      'Prevents hand creep',
      'M-LOK compatible',
      'Install hardware included',
      'USA made'
    ],
    compatibility: ['Any M-LOK compatible handguard or rail'],
    specs: { 'Mount': 'M-LOK', 'Includes': 'Install hardware', 'Origin': 'USA', 'Availability': 'In Stock' }
  },
  {
    id: 'angled-grip',
    category: 'accessories',
    name: 'M-LOK Angled Grip Index',
    price: 22.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/152/522/805419A3-3B34-427D-8E44-A2B52CCAA5C2__32737.1773123050.png?c=1',
    description: 'Angled grip index for M-LOK handguards. The angled design positions your support hand in a more natural and ergonomic angle than a vertical foregrip — improving control and reducing fatigue during extended sessions. Includes all mounting hardware.',
    features: [
      'Angled design for natural hand position',
      'Improves control over vertical grips',
      'Reduces fatigue on extended sessions',
      'M-LOK compatible',
      'Install hardware included',
      'USA made'
    ],
    compatibility: ['Any M-LOK compatible handguard or rail'],
    specs: { 'Mount': 'M-LOK', 'Style': 'Angled grip', 'Includes': 'Install hardware', 'Origin': 'USA', 'Availability': 'In Stock' }
  },
  {
    id: 'picatinny-mount',
    category: 'accessories',
    name: 'M-LOK 8-Slot Picatinny Mount',
    price: 27.99,
    tag: null,
    availability: 'in-stock',
    leadText: 'In Stock',
    image: 'https://cdn11.bigcommerce.com/s-zjikhrk7dh/images/stencil/500x659/products/151/519/CC0A6435-EAF8-4479-9BC1-383189B8F6D4__94484.1773121880.jpg?c=1',
    description: 'Aluminum 8-slot Picatinny rail section for M-LOK handguards. Adds a section of Picatinny rail to any M-LOK position — letting you mount optics, lights, lasers, or any Picatinny-compatible accessory exactly where you want it.',
    features: [
      '8 Picatinny slots',
      'Aluminum construction',
      'Mounts to any M-LOK position',
      'Accepts any Picatinny-compatible accessory',
      'Install hardware included',
      'USA made'
    ],
    compatibility: ['Any M-LOK compatible handguard or rail'],
    specs: { 'Mount': 'M-LOK', 'Rail': '8-slot Picatinny', 'Material': 'Aluminum', 'Origin': 'USA', 'Availability': 'In Stock' }
  }
];
