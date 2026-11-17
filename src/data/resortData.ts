export interface RoomSuite {
  id: string;
  name: string;
  hindiTitle: string;
  category: 'suites' | 'haveli' | 'family' | 'transit';
  isSuite: boolean;
  categoryLabel: string;
  rateNote: string;
  pricePerNight: number;
  memberRate: number;
  areaSqFt: number;
  areaSqM: string;
  maxGuests: string;
  bedType: string;
  view: string;
  image: string;
  secondaryImage: string;
  shortDescription: string;
  architecturalNotes: string;
  specsList: string[];
  highlights: string[];
  inclusions: string[];
}

export interface EventVenue {
  id: string;
  indexNumber: string;
  romanNumeral: string;
  name: string;
  hindiName: string;
  subtitle: string;
  SeatedCapacity: number;
  floatingCapacity: number;
  areaSqFt: number;
  setting: string;
  image: string;
  secondaryImage: string;
  description: string;
  idealFor: string[];
  signatureFeatures: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  hindiSubtitle: string;
  category: 'architecture' | 'suites' | 'weddings' | 'dining';
  categoryLabel: string;
  locationTag: string;
  image: string;
  aspect: 'wide' | 'standard';
  caption: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  roleOrFamily: string;
  originCity: string;
  eventOrStay: string;
  date: string;
  quote: string;
  outcomeMetric: string;
}

export interface RoyalOffer {
  id: string;
  title: string;
  subtitle: string;
  validity: string;
  rateNote: string;
  image: string;
  description: string;
  inclusions: string[];
}

export interface HotelExperience {
  id: string;
  title: string;
  kicker: string;
  duration: string;
  image: string;
  description: string;
}

export interface PilgrimageDistance {
  km: string;
  place: string;
  note: string;
}

export interface ResortFAQ {
  question: string;
  answer: string;
}

/**
 * High-Resolution Clear Images uploaded directly by the user (/assets/aistudio/*)
 * + Official Resort Interior Photographs (/assets/karni/*)
 */
export const RESORT_IMAGES = {
  // Official Clear Circular Royal Crest Medallion Logo
  logo: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_5.19.51_PM_2d45687d.jpeg',
  logoSquare: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_8.29.55_AM_c37fb715.jpg',

  // Exterior Architecture, Chhatris, Lawns & Cottages (High-Res Clear Uploads)
  heroPalace: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.30.47_PM_7705c485.jpg',
  facadeElevation: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.22.44_PM_a584123c.jpg',
  facadeDaylightBlueSky: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_5.11.13_PM_521378fd.jpg',
  facadeWideLawnBlueSky: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_5.12.20_PM_5f60ed30.jpg',
  facadeAerialDunes: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.25.01_PM_15967b52.jpg',
  facadeNightLawn: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.31.34_PM_f93c6148.jpg',
  facadeMainHotelLawn: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.32.24_PM_01ce055b.jpg',
  facadeChhatriSunset: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_4.56.52_PM_1493fa2c.jpg',
  heritageCottagesRow: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.21.56_PM_97d58c51.jpg',
  weddingLawn: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_5.12.20_PM_5f60ed30.jpg',
  grandLawnAerialWalkway: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.27.52_PM_6f7ebed8.jpg',

  // Rooms, Suites & Jharokha Veranda Lounges (High-Res Clear Uploads)
  roomFamilySuite: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.18.10_PM_33590b20.jpg',
  roomHeritageLuxury: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.20.12_PM_d956cecb.jpg',
  roomCrimsonDeluxe: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_5.09.40_PM_be01bc9b.jpg',
  roomDeluxeGroup: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.21.56_PM_97d58c51.jpg',
  jharokhaGrandBaithak: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.17.13_PM_18f34eb5.jpg',
  jharokhaSunsetVeranda: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.27.13_PM_d09d43ed.jpg',
  maharajaSuite: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.18.10_PM_33590b20.jpg',
  courtyardHaveli: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.20.12_PM_d956cecb.jpg',

  // Dining, Culinary Delicacies & Banquet Hall (High-Res Clear Uploads)
  royalDining: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.21.16_PM_d5f4a5be.jpg',
  dishKadhaiPaneer: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.34.19_PM_51680fd3.jpg',
  dishNavratanKorma: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.33.44_PM_2acfa86a.jpg',

  // Additional Interior Salons & Pool Courtyard
  diningPeacockHall: '/assets/karni/dining-peacock-royal.jpg',
  diningPichwaiHall: '/assets/karni/dining-pichwai-hall.jpg',
  loungePetalChandelier: '/assets/karni/lounge-petal-chandelier.jpg',
  billiardsSalon: '/assets/karni/billiards-heritage-salon.jpg',
  poolView: '/assets/karni/pool-view.jpg',
  receptionGrandDesk: '/assets/karni/reception-grand-desk.jpg',
  sandstoneLanternWalkway: '/assets/karni/sandstone-lantern-walkway.jpg',
  gardenPavilionCanopy: '/assets/karni/garden-pavilion-canopy.jpg',
};

export const RESORT_CONTACT = {
  name: 'Sri Karni Heritage Resort',
  establishedYear: '2019',
  deityDedication: 'Named with the blessings of Deshnoke Maa Karni Ji',
  founders: 'Jagadish Prasad Dhuparr, Pawan Kumar, Ranjeet Kumar and Family',
  foundersQuote:
    'Named with the blessings of Deshnoke Maa Karni Ji and inaugurated in 2019, our family built Sri Karni Heritage Resort so that every guest arriving in Sri Dungargarh experiences the warmth, dignity, and manuhar of a true Marwari home.',
  hindiTagline: 'पधारो म्हारे देश · राजसी ठाठ और मारवाड़ी मनुहार',
  addressLine1: 'National Highway 11, Near Hanuman Dhora',
  addressLine2: 'Sri Dungargarh, Bikaner District, Rajasthan – 331803, India',
  phoneDisplay: '+91 99830 72040',
  phoneSecondary: '+91 99830 72040 (24×7 Reception & Events Desk)',
  phoneRaw: '919983072040',
  email: 'resortsrikarniheritage@gmail.com',
  instagramUrl: 'https://www.instagram.com/karniresort/',
  instagramHandle: '@karniresort',
  googleMapsUrl: 'https://maps.app.goo.gl/E8xURNbUdeepqrBp8',
  googleDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=28.090992,74.044501',
  coordinatesLabel: '28.090992° N, 74.044501° E',
  totalKeys: 125,
  roomsCount: 95,
  suitesCount: 30,
  ratingSummary: '4.2 Rating Across 780+ Verified Reviews',
  temperature: '29.4°c',
  gstinOrCode: 'EST. 2019 · NH-11 NEAR HANUMAN DHORA, SRI DUNGARGARH – 331803',
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${RESORT_CONTACT.phoneRaw}?text=${encoded}`;
}

export const FOUNDERS_STORY_PILLARS = [
  {
    title: 'Sacred Lineage',
    description:
      'Dedicated to Maa Karni Ji of Deshnoke (~95 km), welcoming families and pilgrims with traditional Marwari grace.',
  },
  {
    title: 'Founded in 2019',
    description:
      'Established by Jagadish Prasad Dhuparr, Pawan Kumar, Ranjeet Kumar and Family as Sri Dungargarh’s premier 125-room heritage estate.',
  },
  {
    title: 'Unmatched Estate Scale',
    description:
      '125 well-appointed rooms & heritage cottages allow an entire wedding entourage and extended family to reside together in privacy.',
  },
  {
    title: 'Architectural Craft',
    description:
      'Hand-finished Dulmera sandstone arcades, chhatri cupolas, manicured lawns, and calm desert vistas directly along the Bikaner–Jaipur highway.',
  },
];

export const PILGRIMAGE_DISTANCES = [
  {
    km: '~3 km',
    place: 'Sri Dungargarh Town & Bus Stand',
    note: '5 mins drive on NH-11 • Near Hanuman Dhora Mandir',
  },
  {
    km: '~12 km',
    place: 'Shri Toliyasar Bheruji Mandir',
    note: '15 mins drive • Ancient Bhairav Siddh Peeth',
  },
  {
    km: '~70 km',
    place: 'Bikaner City (Junagarh Fort)',
    note: 'Direct highway drive via NH-11 West',
  },
  {
    km: '~85 km',
    place: 'Bikaner Airport (Nal / BKB)',
    note: 'Nearest airport via NH-11 for wedding & VIP guests',
  },
  {
    km: '~95 km',
    place: 'Deshnoke Karni Mata Temple',
    note: 'Via Bikaner / Napasar • Kuldevi & Navratri Darshan',
  },
  {
    km: '~100 km',
    place: 'Salasar Balaji Dham',
    note: 'Direct drive via NH-11 East & Sujangarh',
  },
];

export const TAJ_FACILITIES = {
  hotel: {
    title: 'HOTEL',
    initial: [
      '125 Air-Conditioned Rooms, Suites & Heritage Cottages',
      'Grand Illuminated Front Lawn framed by Pink-Sandstone Jharokha Arcades',
      'Two Climate-Controlled Indoor Banquet & Chandelier Halls',
      'Expansive Gated NH-11 Highway Parking for Cars & Tourist Coaches',
    ],
    more: [
      '24-Hour Grand Marble Reception Desk, CCTV Security & Full Power Backup',
      'Panoramic Sandstone Jharokha Veranda Lounge & Family Baithak',
      'Flexibility to Bring Family Halwai, Maharaj & Custom Event Decorators',
      'Rooftop Sandstone Chhatri Sunset Pavilion for Pre-Wedding Photography',
    ],
  },
  dining: {
    title: 'DINING',
    initial: [
      'Multi-Cuisine Chandelier Dining Hall & Restaurant',
      'Authentic Rajasthani Preparations & Rich North Indian Curries (Kadhai Paneer & Navratan Korma)',
      'Freshly Baked Tandoori Breads, Indian & Continental Morning Breakfast',
      'Bespoke Pure Vegetarian, Jain & Satvik Wedding Feast Menus',
    ],
    more: [
      '24-Hour Attentive In-Room Dining Service',
      'Garden Pavilion Royal White Canopy for Al-Fresco Courtyard Banquets',
      'Dedicated Halwai & Catering Kitchen Support for Multi-Day Weddings',
    ],
  },
  wellness: {
    title: 'WELLNESS',
    initial: [
      'Spacious Turquoise Outdoor Swimming Pool Deck with Festive Canopy Drapes',
      'Poolside Rain Dance Courtyard for Haldi, Mehendi & Summer Leisure',
      'The Heritage Billiards & Leisure Salon (Snooker Table & Leather Wingbacks)',
      'Tranquil Desert Sand Dune Vistas & Manicured Morning Walk Lawns',
    ],
    more: [
      'Rajasthani Folk Dhol & Cultural Evening Performances on Request',
      'Peaceful Highway Sanctuary Away from Town Noise near Hanuman Dhora',
    ],
  },
  rooms: {
    title: 'ROOMS',
    initial: [
      'Royal Family Suites with Damask Walls, Marble Floors & Carved Sofa Seating',
      'Heritage Luxury Rooms with Gold & Crimson Brocade Runners, AC & Display Shelving',
      'Rajasthani Folk-Art Heritage Cottages Wing opening onto the Garden Walkway',
      'Contiguous Wedding & Group Residence Blocks (10, 40, 60, or all 125 Keys)',
    ],
    more: [
      'Split Air-Conditioning, Flat-Screen LED TV, Mini-Fridge, Tea Kettle & Direct Intercom',
      'Extra Bed Configuration & Express Laundry / Garment Care for Wedding Guests',
    ],
  },
};

export const ROOMS_DATA: RoomSuite[] = [
  {
    id: 'royal-family-suite',
    name: 'Royal Family Suite',
    hindiTitle: 'रॉयल फैमिली सुइट',
    category: 'suites',
    isSuite: true,
    categoryLabel: 'Spacious Family Quarters',
    rateNote: 'Bespoke Family Plan',
    pricePerNight: 5600,
    memberRate: 5040,
    areaSqFt: 380,
    areaSqM: '35 sq.m',
    maxGuests: 'Up to 4 Guests (Family Configuration)',
    bedType: 'Queen Bed + Carved Sofa & Armchair Lounge',
    view: 'Central Lawn / Sandstone Arcade Perspectives',
    image: RESORT_IMAGES.roomFamilySuite,
    secondaryImage: RESORT_IMAGES.jharokhaGrandBaithak,
    shortDescription:
      'Generously scaled quarters appointed with Italian-style marble-tiled flooring, royal damask feature wallpaper, a plush Queen bed, and a carved dark-wood sofa & armchair lounge for families journeying along NH-11.',
    architecturalNotes:
      'Designed for multi-generational comfort with direct access to the panoramic sandstone jharokha veranda lounge overlooking the manicured green lawn.',
    specsList: [
      'Carved Sofa Lounge',
      'Marble-Tiled Flooring',
      'Split Air-Conditioning',
      'Extra Bed Option',
      'Laundry Service',
      'Private NH-11 Parking',
    ],
    highlights: [
      'Spacious suite with carved wooden sofa and twin armchairs for family baithaks',
      'Adjacent to the covered sandstone Jharokha Veranda Lounge overlooking the desert greens',
      'Split air-conditioning, ceiling fan, recessed warm lighting, and en-suite bath',
      'Ideal for wedding host families and pilgrims visiting Deshnoke, Toliyasar, and Salasar',
    ],
    inclusions: ['Carved Sofa Seating', 'Extra Bed Option', 'Veranda Lounge Access', 'Private NH-11 Parking'],
  },
  {
    id: 'heritage-luxury-room',
    name: 'Heritage Luxury Room & Suite',
    hindiTitle: 'हेरिटेज लग्ज़री रूम एवं सुइट',
    category: 'haveli',
    isSuite: false,
    categoryLabel: 'Couple & Transit Residence',
    rateNote: 'Direct Best Tariff',
    pricePerNight: 3800,
    memberRate: 3420,
    areaSqFt: 225,
    areaSqM: '21 sq.m',
    maxGuests: 'Up to 3 Guests',
    bedType: 'Queen Bed with Gold / Crimson Zari Runner',
    view: 'Sandstone Arcade & Estate View',
    image: RESORT_IMAGES.roomHeritageLuxury,
    secondaryImage: RESORT_IMAGES.roomCrimsonDeluxe,
    shortDescription:
      'An inviting air-conditioned sanctuary featuring a plush Queen-sized bed dressed in gold or crimson brocade, full-height wooden curio cabinetry, flat-screen LED TV, mini-refrigerator, armchair seating, and a private en-suite bathroom.',
    architecturalNotes:
      'Proportioned for unhurried ease along National Highway 11—combining warm sunlit interiors, custom wood cabinetry, and modern amenities.',
    specsList: [
      'Queen Bed',
      'Split Air-Conditioning',
      'LED TV & Mini-Fridge',
      'Wooden Curio Cabinetry',
      'Tea Kettle & Intercom',
      '24-Hour Room Service',
    ],
    highlights: [
      'Plush Queen-sized bed with gold zari or crimson velvet pillows and bed runner',
      'Custom full-height wooden display shelving, wardrobe, and leatherette armchair by the window',
      'Split air-conditioning, flat-screen LED television, mini-refrigerator, and intercom',
      '24-hour in-room dining and direct gated NH-11 parking access',
    ],
    inclusions: ['Split Air-Conditioning', 'Mini-Fridge & LED TV', '24-Hour Room Service', 'Private NH-11 Parking'],
  },
  {
    id: 'heritage-courtyard-cottages',
    name: 'Heritage Courtyard Cottages & Group Wing',
    hindiTitle: 'हेरिटेज कॉटेज एवं वेडिंग ग्रुप विंग (10–125 रूम)',
    category: 'family',
    isSuite: true,
    categoryLabel: '10 to 125 Rooms • Cottages & Wings',
    rateNote: 'Preferential Group Tariff',
    pricePerNight: 3500,
    memberRate: 3150,
    areaSqFt: 250,
    areaSqM: '23 sq.m per key',
    maxGuests: 'Contiguous Blocks of 10, 40, 60, or 125 Keys',
    bedType: 'Queen & Multi-Bed Group Configuration',
    view: 'Direct Garden Lawn & Lantern Walkway View',
    image: RESORT_IMAGES.heritageCottagesRow,
    secondaryImage: RESORT_IMAGES.grandLawnAerialWalkway,
    shortDescription:
      'Charming terracotta-roofed heritage cottages adorned with hand-painted Rajasthani tree-of-life and camel motifs opening directly onto the manicured lawn, paired with our twin sandstone wings for wedding blocks of 10 to 125 rooms.',
    architecturalNotes:
      'Each cottage features traditional Marwari folk mural art, warm brass coach lanterns, private step-out garden access, and contiguous proximity to the Grand Celebration Lawn.',
    specsList: [
      'Up to 125 Rooms & Cottages',
      'Direct Lawn Access',
      'Coach & Fleet Parking',
      'Full Power Backup',
      'Dedicated Hospitality Desk',
      'Curated Meal Plans',
    ],
    highlights: [
      'Row of private terracotta-roofed cottages with traditional Rajasthani mural artwork',
      'Steps away from the Grand Illuminated Marriage Lawn for effortless wedding guest movement',
      'Available in contiguous blocks of 10, 40, 60, or full 125-key estate buyouts',
      'Custom vegetarian, Jain, and Marwari meal plans for wedding entourages and yatri sanghs',
    ],
    inclusions: ['Direct Garden Walkway', 'Coach & Fleet Parking', 'Full Power Backup', 'Flexible Group Check-In'],
  },
  {
    id: 'sandstone-jharokha-suite',
    name: 'Sandstone Jharokha Veranda Suite',
    hindiTitle: 'सैंडस्टोन झरोखा बरामदा सुइट',
    category: 'suites',
    isSuite: true,
    categoryLabel: 'Bridal, Host & VIP Suite',
    rateNote: 'VIP & Bridal Privilege Tariff',
    pricePerNight: 6800,
    memberRate: 6120,
    areaSqFt: 480,
    areaSqM: '45 sq.m',
    maxGuests: 'Up to 4 Guests',
    bedType: 'Queen Bed + Panoramic Jharokha Baithak Lounge',
    view: '360° Cusped Sandstone Arches & Desert Vistas',
    image: RESORT_IMAGES.jharokhaGrandBaithak,
    secondaryImage: RESORT_IMAGES.jharokhaSunsetVeranda,
    shortDescription:
      'Preferred by wedding hosts, brides, grooms, and VIP dignitaries—opening onto the grand pillared sandstone veranda with cusped Rajasthani arches, U-shaped leather lounge seating, and sweeping views of the estate.',
    architecturalNotes:
      'Showcases authentic Bikaneri pink-sandstone colonnades, scalloped archways framing the desert sky, and a private sunset baithak for family ceremonies.',
    specsList: [
      'Panoramic Jharokha Veranda',
      'VIP Sofa Baithak',
      'Bridal & Host Ready',
      'Split Air-Conditioning',
      'Priority Room Service',
      'Sunset Chhatri Access',
    ],
    highlights: [
      'Direct access to the grand cusped-arch sandstone terrace lounge for family gatherings',
      'Sweeping views of the front celebration lawn, desert dunes, and sunset chhatri',
      'Ideal for bridal preparation, groom tilak rituals, and elder family hospitality',
      'Priority 24-hour room service from our Multi-Cuisine Royal Dining Hall',
    ],
    inclusions: ['Jharokha Baithak Access', 'Priority Room Service', 'Rooftop Chhatri Access', 'Gated VIP Parking'],
  },
];

export const EVENT_VENUES: EventVenue[] = [
  {
    id: 'grand-illuminated-front-lawn',
    indexNumber: '01',
    romanNumeral: 'I',
    name: 'The Grand Illuminated Front Lawn',
    hindiName: 'भव्य इल्यूमिनेटेड फ्रंट मैरिज लॉन',
    subtitle: '500 – 1,500+ Guests · Carved Pink-Sandstone Palace & Cottages Backdrop',
    SeatedCapacity: 900,
    floatingCapacity: 1500,
    areaSqFt: 48000,
    setting: 'Open-Air Manicured Green Celebration Lawn',
    image: RESORT_IMAGES.facadeWideLawnBlueSky,
    secondaryImage: RESORT_IMAGES.grandLawnAerialWalkway,
    description:
      'An expansive emerald-green celebration lawn enclosed by the hand-carved pink-sandstone hotel elevation on one side and charming Rajasthani heritage cottages on the other—designed for grand varmala stages, baarat swagat, and starlit wedding receptions for 500 to 1,500+ guests.',
    idealFor: ['Grand Destination Weddings', 'Royal Varmala & Reception Galas', 'Baarat Swagat & Starlit Feasts'],
    signatureFeatures: [
      'Framed by the grand Dulmera sandstone palace facade and illuminated jharokha arches',
      'Geometric patterned ceremonial walkway for royal bride & groom entry processions',
      'Accommodates grand varmala stages, floral mandaps, and 1,500+ guest receptions',
      'Flexibility to bring your own trusted wedding decorator and family halwai team',
    ],
  },
  {
    id: 'sandstone-jharokha-portico',
    indexNumber: '02',
    romanNumeral: 'II',
    name: 'Sandstone Palace Portico & Sunset Chhatri',
    hindiName: 'सैंडस्टोन झरोखा पोर्टिको एवं सूर्यास्त छतरी',
    subtitle: 'Ceremonial Arrival Portico & Rooftop Chhatri · Baarat Welcome & Shoots',
    SeatedCapacity: 250,
    floatingCapacity: 600,
    areaSqFt: 14000,
    setting: 'Hand-Carved Pink Sandstone Elevation, Veranda & Rooftop Chhatri',
    image: RESORT_IMAGES.heroPalace,
    secondaryImage: RESORT_IMAGES.facadeChhatriSunset,
    description:
      'Our illuminated pink-sandstone palace portico, scalloped jharokha verandas, and carved rooftop chhatri pavilion create a regal architectural backdrop for evening baarat welcome rituals, folk dhol processions, and golden-hour pre-wedding cinematography.',
    idealFor: ['Royal Baarat Swagat & Milni', 'Pre-Wedding Architectural Shoots', 'Sunset Chhatri & Veranda High Tea'],
    signatureFeatures: [
      'Hand-carved pink Dulmera sandstone chhatri cupola framing the Bikaner desert sunset',
      'Grand illuminated two-storey sandstone colonnade and arrival portico',
      'Spacious upper-level Jharokha Veranda Baithak with U-shaped sofa seating for 40+ family elders',
      'Dramatic twilight architectural lighting across all arches and balustrades',
    ],
  },
  {
    id: 'indoor-banquet-pichwai-halls',
    indexNumber: '03',
    romanNumeral: 'III',
    name: 'Two Indoor Banquet & Chandelier Halls',
    hindiName: 'दो इनडोर वातानुकूलित बैंक्वेट एवं झूमर हॉल',
    subtitle: 'Climate-Controlled Heritage Halls · Sangeet, Phere, Sagai & Conferences',
    SeatedCapacity: 350,
    floatingCapacity: 550,
    areaSqFt: 9500,
    setting: 'Two All-Weather Air-Conditioned Indoor Halls',
    image: RESORT_IMAGES.royalDining,
    secondaryImage: RESORT_IMAGES.diningPichwaiHall,
    description:
      'Two climate-controlled indoor banquet and dining halls finished with teardrop glass chandeliers, damask walls, arched doorways, and marble floors—ideally suited for daytime rituals, Phere, ring ceremonies (Sagai), milestone anniversaries, and corporate dealer meets.',
    idealFor: ['Sangeet & Ring Ceremonies (Sagai)', 'All-Weather Daytime Rituals & Phere', 'Corporate Conferences & VIP Banquets'],
    signatureFeatures: [
      'Two separate air-conditioned indoor halls for simultaneous wedding rituals and dining',
      'Teardrop glass chandeliers, royal damask wall finishes, and formal banquet seating',
      '100% heavy-duty generator power backup for uninterrupted ceremonies',
      'Adjoining Grand Petal-Chandelier Marble Lounge for VIP family hospitality',
    ],
  },
  {
    id: 'poolside-courtyard-rain-dance',
    indexNumber: '04',
    romanNumeral: 'IV',
    name: 'Poolside Courtyard & Rain Dance Deck',
    hindiName: 'पूलसाइड आंगन एवं रेन डांस डेक',
    subtitle: 'Turquoise Outdoor Pool Deck · Haldi, Mehendi & Summer Leisure',
    SeatedCapacity: 200,
    floatingCapacity: 350,
    areaSqFt: 11000,
    setting: 'Outdoor Turquoise Swimming Pool & Festive Canopy Courtyard',
    image: RESORT_IMAGES.poolView,
    secondaryImage: RESORT_IMAGES.gardenPavilionCanopy,
    description:
      'Our spacious turquoise outdoor swimming pool deck framed by greenery and festive canopy drapes is the signature venue for vibrant daytime Haldi and Mehendi carnivals, summer rain-dance celebrations, folk dhol afternoons, and family leisure.',
    idealFor: ['Poolside Haldi & Mehendi Carnivals', 'Rain Dance & Folk Dhol Afternoons', 'Family Poolside Gatherings'],
    signatureFeatures: [
      'Turquoise outdoor swimming pool with dedicated rain-dance shower rig',
      'Festive yellow-and-crimson canopy drapes for Haldi and Mehendi decor',
      'Open-air courtyard surrounded by desert dunes and resort greenery',
      'Easy access from both the sandstone hotel wings and heritage cottages',
    ],
  },
];

export const ROYAL_OFFERS: RoyalOffer[] = [
  {
    id: 'offer-full-estate-buyout',
    title: '3-Day Full Estate Wedding Buyout (125 Rooms)',
    subtitle: 'All 125 Rooms & Cottages + Grand Front Lawn + Two Banquet Halls + Pool Deck',
    validity: '2026 – 2027 Auspicious Saya Dates',
    rateNote: 'Complete Private Palace Estate Buyout',
    image: RESORT_IMAGES.facadeNightLawn,
    description:
      'Command the entire Sri Karni Heritage Resort exclusively for your family’s destination wedding—including all 125 rooms and cottages, the Grand Illuminated Front Lawn, Two Indoor Banquet Halls, Jharokha Veranda Baithak, and Poolside Haldi Deck.',
    inclusions: [
      'Exclusive buyout of all 125 air-conditioned rooms, suites & heritage cottages',
      'Grand Illuminated Front Lawn (1,500+ guests) + Two Indoor AC Banquet Halls',
      'Rooftop Sandstone Chhatri & Jharokha Veranda for Pre-Wedding Shoots',
      'Flexibility to use in-house catering or bring your own family Halwai & Decorator',
    ],
  },
  {
    id: 'offer-partial-wedding-wing',
    title: '2-Day Partial Estate Wedding Block (40–75 Rooms)',
    subtitle: 'Contiguous Residential Wing / Cottages + Lawn & Indoor Hall Access',
    validity: 'Available Year-Round for Weddings & Sagai',
    rateNote: 'Custom 2-Day Celebration Package',
    image: RESORT_IMAGES.facadeElevation,
    description:
      'Designed for intimate destination weddings, Sagai ceremonies, and milestone family celebrations requiring 40 to 75 contiguous rooms and cottages alongside our indoor banquet halls and front celebration lawn.',
    inclusions: [
      '40 to 75 contiguous air-conditioned rooms & heritage cottages',
      'Access to Indoor Chandelier Banquet Hall & Front Lawn for Varmala / Reception',
      'Upper-level Sandstone Jharokha Veranda Baithak for family elders',
      'Uninterrupted generator power backup & gated NH-11 parking for 300+ cars',
    ],
  },
  {
    id: 'offer-pilgrimage-family-sojourn',
    title: 'Bikaner Pilgrimage Circuit & Family Highway Retreat',
    subtitle: 'Deshnoke Maa Karni Ji • Toliyasar Bheruji • Salasar Balaji • Hanuman Dhora',
    validity: 'Direct Booking Privilege on NH-11',
    rateNote: 'Best Direct Tariff on WhatsApp',
    image: RESORT_IMAGES.facadeChhatriSunset,
    description:
      'Located directly on NH-11 near Hanuman Dhora in Sri Dungargarh, our resort is the premier family base for darshan at Shri Toliyasar Bheruji (~12 km), Deshnoke Karni Mata Temple (~95 km), and Salasar Balaji Dham (~100 km).',
    inclusions: [
      'Spacious Heritage Luxury Rooms, Royal Family Suites, or Garden Cottages',
      'Freshly prepared Kadhai Paneer, Navratan Korma & Tandoori meals at our Restaurant',
      'Outdoor Swimming Pool, Heritage Billiards Salon & Gated Highway Parking',
      'Flexible group tariffs for temple Yatri Sanghs (10 to 60+ rooms)',
    ],
  },
];

export const HOTEL_EXPERIENCES: HotelExperience[] = [
  {
    id: 'exp-sunset-chhatri-shoot',
    title: 'Golden Hour at the Sandstone Chhatri & Jharokha Veranda',
    kicker: 'ARCHITECTURAL HERITAGE & PHOTOGRAPHY',
    duration: 'Golden Hour & Twilight Sessions',
    image: RESORT_IMAGES.facadeChhatriSunset,
    description:
      'Ascend to our hand-carved pink Dulmera sandstone chhatri cupola and arched jharokha veranda as the desert sun sets over Sri Dungargarh—an extraordinary setting for pre-wedding cinematography and evening family high tea.',
  },
  {
    id: 'exp-billiards-marble-lounge',
    title: 'The Heritage Billiards Salon & Petal-Chandelier Lounge',
    kicker: 'PRIVATE CLUB & LOUNGE',
    duration: 'Open Daily for Resident Guests & Wedding Hosts',
    image: RESORT_IMAGES.billiardsSalon,
    description:
      'Unwind over a quiet frame of snooker in our wood-panelled Heritage Billiards & Leisure Salon with tufted leather wingback chairs, or gather with family elders in our panoramic Jharokha Baithak and Marble Lounge.',
  },
  {
    id: 'exp-pilgrimage-darshan',
    title: 'Sacred Deshnoke, Toliyasar & Hanuman Dhora Darshan',
    kicker: 'SPIRITUAL HERITAGE CIRCUIT',
    duration: '3 km to 95 km Smooth Highway Drives',
    image: RESORT_IMAGES.heritageCottagesRow,
    description:
      'Named with the blessings of Deshnoke Maa Karni Ji, the resort sits moments from Hanuman Dhora Mandir and 15 minutes from Shri Toliyasar Bheruji Mandir along the Bikaner–Jaipur highway.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-clear-twilight-palace',
    title: 'Illuminated Pink-Sandstone Palace under the Night Sky',
    hindiSubtitle: 'रात्रि के आकाश में जगमगाता श्री करणी हेरिटेज महल',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'Main Sandstone Wing & Promenade',
    image: RESORT_IMAGES.heroPalace,
    aspect: 'wide',
    caption:
      'High-resolution twilight view of the carved Dulmera pink-sandstone palace facade, arched colonnades, and geometric walkways against the desert night sky.',
  },
  {
    id: 'gal-clear-wide-lawn',
    title: 'The Grand Front Marriage Lawn & Sandstone Hotel Elevation',
    hindiSubtitle: 'भव्य फ्रंट मैरिज लॉन एवं मुख्य होटल भवन',
    category: 'weddings',
    categoryLabel: 'Celebrations & Lawn',
    locationTag: '500 – 1,500+ Guest Marriage Garden',
    image: RESORT_IMAGES.facadeWideLawnBlueSky,
    aspect: 'wide',
    caption:
      'Expansive emerald-green front celebration lawn framed by the multi-storey pink-sandstone hotel facade on National Highway 11.',
  },
  {
    id: 'gal-clear-golden-hour-facade',
    title: 'Golden Hour Sandstone Facade & Royal Palm Gardens',
    hindiSubtitle: 'स्वर्णिम धूप में चमकता लाल पत्थर का महल और उद्यान',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'Palm Courtyard & Portico',
    image: RESORT_IMAGES.facadeElevation,
    aspect: 'standard',
    caption:
      'Warm golden-hour sunlight illuminating the carved sandstone balustrades, arched verandas, stone lamps, and manicured palm gardens.',
  },
  {
    id: 'gal-clear-chhatri-sunset',
    title: 'Carved Dulmera Sandstone Chhatri at Desert Sunset',
    hindiSubtitle: 'सूर्यास्त के समय नक्काशीदार पत्थर की शाही छतरी',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'Rooftop Sunset Pavilion',
    image: RESORT_IMAGES.facadeChhatriSunset,
    aspect: 'standard',
    caption:
      'Hand-carved triple-arched sandstone chhatri dome silhouetted against a dramatic golden Bikaner sunset.',
  },
  {
    id: 'gal-clear-cottages-row',
    title: 'Rajasthani Folk-Art Heritage Cottages & Lawn Walkway',
    hindiSubtitle: 'राजस्थानी लोक-कला से सजे हेरिटेज कॉटेज',
    category: 'suites',
    categoryLabel: 'Rooms & Interiors',
    locationTag: 'Heritage Cottage Wing',
    image: RESORT_IMAGES.heritageCottagesRow,
    aspect: 'standard',
    caption:
      'Terracotta-roofed garden cottages featuring traditional white tree-of-life and camel murals along a lantern-lit lawn walkway.',
  },
  {
    id: 'gal-clear-aerial-lawn-cottages',
    title: 'Aerial View of Marriage Lawn, Geometric Walkway & Cottages',
    hindiSubtitle: 'मैरिज लॉन, पाथवे और कॉटेज विंग का विहंगम दृश्य',
    category: 'weddings',
    categoryLabel: 'Celebrations & Lawn',
    locationTag: 'Full Estate Overview',
    image: RESORT_IMAGES.grandLawnAerialWalkway,
    aspect: 'standard',
    caption:
      'Elevated perspective from the palace terrace showing the vast green marriage lawn, patterned walkway, and cottage wing.',
  },
  {
    id: 'gal-clear-jharokha-baithak',
    title: 'Grand Sandstone Jharokha Veranda & Family Baithak',
    hindiSubtitle: 'शाही झरोखा बरामदा एवं परिवार बैठक लाउंज',
    category: 'suites',
    categoryLabel: 'Rooms & Interiors',
    locationTag: 'Upper Veranda Lounge',
    image: RESORT_IMAGES.jharokhaGrandBaithak,
    aspect: 'standard',
    caption:
      'Spacious pillared veranda lounge framed by scalloped Rajasthani arches with U-shaped sofa seating and floral centerpiece.',
  },
  {
    id: 'gal-clear-family-suite',
    title: 'Royal Family Suite with Damask Wall & Carved Sofa Seating',
    hindiSubtitle: 'रॉयल फैमिली सुइट (मार्बल फ्लोर एवं सोफा सिटिंग)',
    category: 'suites',
    categoryLabel: 'Rooms & Interiors',
    locationTag: 'Spacious Family Suite',
    image: RESORT_IMAGES.roomFamilySuite,
    aspect: 'standard',
    caption:
      'Air-conditioned Royal Family Suite featuring marble-tiled floors, damask wallpaper, plush Queen bed, and carved wooden sofa & armchairs.',
  },
  {
    id: 'gal-clear-heritage-room-gold',
    title: 'Heritage Luxury Room (Gold Brocade & Curio Cabinetry)',
    hindiSubtitle: 'हेरिटेज लग्ज़री रूम (गोल्ड ब्रोकेड)',
    category: 'suites',
    categoryLabel: 'Rooms & Interiors',
    locationTag: 'Heritage Luxury Room',
    image: RESORT_IMAGES.roomHeritageLuxury,
    aspect: 'standard',
    caption:
      'Sunlit air-conditioned room with gold brocade cushions & runner, full-height wooden display shelving, LED TV, mini-fridge, and armchair.',
  },
  {
    id: 'gal-clear-deluxe-room-crimson',
    title: 'Deluxe Heritage Room (Crimson Velvet Edition)',
    hindiSubtitle: 'डीलक्स हेरिटेज रूम (क्रिमसन वेलवेट)',
    category: 'suites',
    categoryLabel: 'Rooms & Interiors',
    locationTag: 'Guest Room Wing',
    image: RESORT_IMAGES.roomCrimsonDeluxe,
    aspect: 'standard',
    caption:
      'Air-conditioned guest chamber dressed in crimson velvet runners and pillows with custom wood cabinetry, LED TV, and mini-refrigerator.',
  },
  {
    id: 'gal-clear-dining-chandelier-hall',
    title: 'Multi-Cuisine Fine Dining & Chandelier Banquet Hall',
    hindiSubtitle: 'मल्टी-कुज़ीन रेस्टोरेंट एवं झूमर बैंक्वेट हॉल',
    category: 'dining',
    categoryLabel: 'Celebrations & Dining',
    locationTag: 'Fine Dining Hall',
    image: RESORT_IMAGES.royalDining,
    aspect: 'standard',
    caption:
      'Indoor air-conditioned dining and banquet hall with teardrop glass chandelier, damask walls, white table linens, and gold cutlery.',
  },
  {
    id: 'gal-clear-kadhai-paneer',
    title: 'Signature Royal Kadhai Paneer Delicacy',
    hindiSubtitle: 'शाही कड़ाही पनीर एवं राजस्थानी जायका',
    category: 'dining',
    categoryLabel: 'Celebrations & Dining',
    locationTag: 'Multi-Cuisine Kitchen',
    image: RESORT_IMAGES.dishKadhaiPaneer,
    aspect: 'standard',
    caption:
      'Rich cottage cheese curry cooked in aromatic Bikaneri spices and served in a traditional kadhai with fresh cream and ginger juliennes.',
  },
  {
    id: 'gal-clear-navratan-korma',
    title: 'Chef’s Special Subz & Paneer Masala',
    hindiSubtitle: 'शेफ स्पेशल मिक्स वेज एवं पनीर मसाला',
    category: 'dining',
    categoryLabel: 'Celebrations & Dining',
    locationTag: 'Multi-Cuisine Kitchen',
    image: RESORT_IMAGES.dishNavratanKorma,
    aspect: 'standard',
    caption:
      'Freshly prepared garden vegetables and paneer simmered in hand-ground spices and garnished with grated paneer and herbs.',
  },
  {
    id: 'gal-clear-aerial-dunes',
    title: 'Sandstone Palace Wing & Desert Sand Dunes Backdrop',
    hindiSubtitle: 'रेतीले धोरों के बीच स्थित लाल पत्थर का महल',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'NH-11 Desert Estate',
    image: RESORT_IMAGES.facadeAerialDunes,
    aspect: 'standard',
    caption:
      'Daylight architectural perspective of the pink-sandstone palace wing set against tranquil Bikaner sand dunes.',
  },
  {
    id: 'gal-clear-night-facade-lawn',
    title: 'Evening Illumination of the Sandstone Haveli & Lawn',
    hindiSubtitle: 'संध्या काल में रोशन हवेली और गार्डन',
    category: 'weddings',
    categoryLabel: 'Celebrations & Lawn',
    locationTag: 'Evening Lawn View',
    image: RESORT_IMAGES.facadeNightLawn,
    aspect: 'standard',
    caption:
      'Warm architectural lighting along the carved rooftop jali railings and sandstone arches overlooking the green lawn at night.',
  },
  {
    id: 'gal-clear-jharokha-veranda-desert',
    title: 'Cusped-Arch Veranda Lounge Overlooking the Desert Greens',
    hindiSubtitle: 'मेहराबदार झरोखा लाउंज से रेगिस्तानी हरियाली का दृश्य',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'Veranda Sit-Out',
    image: RESORT_IMAGES.jharokhaSunsetVeranda,
    aspect: 'standard',
    caption:
      'Open-air sandstone veranda with leather sofa seating framing panoramic views of the surrounding Sri Dungargarh landscape.',
  },
  {
    id: 'gal-clear-blue-sky-hotel',
    title: 'Sri Karni Heritage Resort — Main Sandstone Elevation',
    hindiSubtitle: 'श्री करणी हेरिटेज रिसॉर्ट का मुख्य भवन',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'Main Arrival Building',
    image: RESORT_IMAGES.facadeDaylightBlueSky,
    aspect: 'standard',
    caption:
      'Crisp daylight view of the three-storey pink Dulmera sandstone hotel building and arrival portico.',
  },
  {
    id: 'gal-billiards-salon',
    title: 'The Heritage Billiards & Leisure Salon',
    hindiSubtitle: 'हेरिटेज बिलियर्ड्स एवं रिक्रिएशन सैलून',
    category: 'suites',
    categoryLabel: 'Rooms & Interiors',
    locationTag: 'Private Club Salon',
    image: RESORT_IMAGES.billiardsSalon,
    aspect: 'standard',
    caption:
      'Classic wood-panelled billiards and snooker room with championship table, tufted leather wingback seating, and heritage wall art.',
  },
  {
    id: 'gal-pool-courtyard',
    title: 'Outdoor Swimming Pool & Rain Dance Courtyard',
    hindiSubtitle: 'आउटडोर स्विमिंग पूल एवं रेन डांस आंगन',
    category: 'dining',
    categoryLabel: 'Celebrations & Dining',
    locationTag: 'Poolside Deck',
    image: RESORT_IMAGES.poolView,
    aspect: 'standard',
    caption:
      'Spacious turquoise swimming pool deck framed by greenery and festive canopy drapes for daytime Haldi, Mehendi, and summer leisure.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    guestName: 'Family Celebration Host',
    roleOrFamily: 'Verified Host Family',
    originCity: 'Sri Dungargarh & Bikaner',
    eventOrStay: 'Family Gathering & Celebration Events',
    date: 'Google Review',
    quote:
      'Karni Resort, located in Shri Dungargarh, Rajasthan, is an excellent venue for family gatherings and events. The place offers a pleasant ambiance, well-organized arrangements, and spotless, well-maintained rooms, making it perfect for a memorable experience.',
    outcomeMetric: 'Google Review • 5 / 5 Rating',
  },
  {
    id: 'test-2',
    guestName: 'Piyush',
    roleOrFamily: 'Verified Resort Guest',
    originCity: 'Rajasthan',
    eventOrStay: 'Summer Leisure & Family Stay',
    date: 'Verified Review',
    quote:
      'Good place situated between beautiful sand dunes. Big size swimming pool and rain dance in the summer makes it more attractive. Nice restaurant, luxurious rooms, and big green lawn make it awesome. Calm and peaceful stay away from town noise.',
    outcomeMetric: 'Verified Guest • 5 / 5 Rating',
  },
  {
    id: 'test-3',
    guestName: 'Shilpa',
    roleOrFamily: 'Destination Wedding Guest',
    originCity: '2-Day Destination Wedding',
    eventOrStay: 'Two Party Halls & Grand Open Lawn',
    date: 'Verified Review',
    quote:
      'Went here for a destination wedding for two days. Food served was amazing. Ambience is calm and cozy, ample greenery surrounds the property. They have two party halls and an expansive open ground for the celebrations.',
    outcomeMetric: 'Destination Wedding • 5 / 5 Rating',
  },
  {
    id: 'test-4',
    guestName: 'NH-11 Family Traveller',
    roleOrFamily: 'Highway Transit & Family Stay',
    originCity: 'Jaipur–Bikaner Highway',
    eventOrStay: 'Heritage Luxury Room',
    date: 'Verified Review',
    quote:
      'Situated near Dungargarh on the main highway area, we can easily locate it. Staff and services were great and cleanliness was up to the mark. The design of Sri Karni Heritage Resort and the huge lawn in front makes the hotel look very welcoming. The evening lighting is remarkable.',
    outcomeMetric: 'Verified Review • 4.2 Avg (780+ Reviews)',
  },
];

export const RESORT_FAQS: ResortFAQ[] = [
  {
    question: 'How many rooms and celebration venues does Sri Karni Heritage Resort offer?',
    answer:
      'Sri Karni Heritage Resort comprises 125 air-conditioned rooms, suites, and Rajasthani folk-art heritage cottages, an expansive front wedding lawn framed by sandstone jharokha arches, two indoor air-conditioned banquet halls, a panoramic Jharokha Veranda Baithak, an outdoor swimming pool with a rain-dance courtyard, a heritage billiards salon, and a multi-cuisine restaurant.',
  },
  {
    question: 'Can we reserve only the Banquet Hall or Grand Lawn for a single-day event?',
    answer:
      'Yes. In addition to 2- and 3-day full-estate wedding buyouts (all 125 rooms) and partial room blocks (40–75 rooms), you may book our Grand Illuminated Front Lawn or Two Indoor Air-Conditioned Banquet Halls for standalone receptions, Sagai (ring ceremonies), birthday milestones, community gatherings, or corporate conferences.',
  },
  {
    question: 'Can we bring our own family Halwai / Maharaj or wedding decorator?',
    answer:
      'Absolutely. While our in-house culinary team offers full multi-cuisine, Rajasthani, Jain, and Satvik catering, wedding host families are equally welcome to bring their own trusted family Halwai / Maharaj and preferred tent, floral, sound, and stage decorators.',
  },
  {
    question: 'Where is the resort located and how far are nearby pilgrimage temples?',
    answer:
      'We are located directly on National Highway 11 (Bikaner–Jaipur Highway) near Hanuman Dhora Mandir in Sri Dungargarh, Bikaner District (Pincode 331803). Sri Dungargarh town is ~3 km away, Shri Toliyasar Bheruji Mandir is ~12 km (15 mins), Bikaner City is ~70 km, Bikaner Airport (Nal) is ~85 km, Deshnoke Karni Mata Temple is ~95 km, and Salasar Balaji Dham is ~100 km.',
  },
];
