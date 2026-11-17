export interface RoomSuite {
  id: string;
  name: string;
  hindiTitle: string;
  category: 'suites' | 'haveli' | 'family' | 'transit';
  categoryLabel: string;
  pricePerNight: number;
  areaSqFt: number;
  maxGuests: string;
  bedType: string;
  view: string;
  image: string;
  secondaryImage: string;
  shortDescription: string;
  architecturalNotes: string;
  highlights: string[];
  inclusions: string[];
}

export interface EventVenue {
  id: string;
  indexNumber: string;
  name: string;
  hindiName: string;
  subtitle: string;
  SeatedCapacity: number;
  floatingCapacity: number;
  areaSqFt: number;
  setting: string;
  image: string;
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

export const RESORT_IMAGES = {
  logo: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_8.29.55_AM_c37fb715.jpg',
  heroPalace: '/src/assets/images/hero_palace_facade_1794853203385.jpg',
  maharajaSuite: '/src/assets/images/suite_maharaja_chambers_1794853205582.jpg',
  courtyardHaveli: '/src/assets/images/suite_courtyard_haveli_1794853208139.jpg',
  weddingLawn: '/src/assets/images/wedding_royal_lawn_1794853210141.jpg',
  royalDining: '/src/assets/images/dining_royal_darbar_1794853209711.jpg',
};

export const RESORT_CONTACT = {
  name: 'Sri Karni Heritage Resort',
  hindiTagline: 'पधारो म्हारे देश · राजसी ठाठ और मारवाड़ी मनुहार',
  addressLine1: 'National Highway 11 (Jaipur–Bikaner Highway)',
  addressLine2: 'Near Hanuman Dhora, Sri Dungargarh, District Bikaner, Rajasthan 331803',
  phoneDisplay: '+91 99830 72040',
  phoneRaw: '919983072040',
  email: 'resortsrikarniheritage@gmail.com',
  googleMapsUrl: 'https://maps.app.goo.gl/FaWQm8BPknRTMSsi9',
  coordinatesLabel: '28.0894° N, 74.0028° E · NH-11 Corridor',
  totalKeys: 125,
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${RESORT_CONTACT.phoneRaw}?text=${encoded}`;
}

export const ROOMS_DATA: RoomSuite[] = [
  {
    id: 'maharaja-heritage-suite',
    name: 'Maharaja Heritage Suite',
    hindiTitle: 'महाराजा हेरिटेज सुइट',
    category: 'suites',
    categoryLabel: 'Royal Suite',
    pricePerNight: 8500,
    areaSqFt: 680,
    maxGuests: '2 Adults · 2 Children',
    bedType: 'Hand-Carved Four-Poster King Bed',
    view: 'Central Courtyard Pool & Illuminated Palace Arches',
    image: RESORT_IMAGES.maharajaSuite,
    secondaryImage: RESORT_IMAGES.heroPalace,
    shortDescription:
      'Crown-jewel suite crafted with Bikaneri Dulmera sandstone arches, a hand-carved walnut four-poster bed, and a private jharokha alcove overlooking the central reflection pool.',
    architecturalNotes:
      'Designed in tribute to classical Bikaner royal chambers with lime-plaster araish walls, antique brass hanging lanterns, and custom Marwari woodwork.',
    highlights: [
      'Private sandstone Jharokha seating alcove with garden vistas',
      'Hand-carved teak and walnut four-poster canopy bed',
      'Italian marble bath with brass rain shower & soaking tub',
      'Complimentary royal Marwari welcome thali & evening high tea',
    ],
    inclusions: ['Royal Breakfast Included', '24-Hour Butler Desk', 'High-Speed Wi-Fi', 'Valet Parking'],
  },
  {
    id: 'royal-courtyard-haveli',
    name: 'Royal Courtyard Haveli Room',
    hindiTitle: 'रॉयल हवेली कोठी रूम',
    category: 'haveli',
    categoryLabel: 'Heritage Haveli',
    pricePerNight: 5200,
    areaSqFt: 460,
    maxGuests: '2 Adults · 1 Child',
    bedType: 'Solid Teak Heritage King Bed',
    view: 'Manicured Desert Gardens & Sandstone Veranda',
    image: RESORT_IMAGES.courtyardHaveli,
    secondaryImage: RESORT_IMAGES.royalDining,
    shortDescription:
      'Opening directly onto a pillared sandstone veranda with pierced jaali balustrades, blending historic haveli charm with whisper-quiet modern luxury.',
    architecturalNotes:
      'Features traditional cusped arch doorways, hand-knotted wool rugs, and warm ambient sconce lighting set against textured heritage fresco walls.',
    highlights: [
      'Private step-out sandstone sit-out balcony with garden view',
      'Bespoke gold zari bed runner and 400-thread-count cotton linens',
      'Dedicated writing desk and heritage dressing mirror',
      'Direct access to the courtyard swimming pool and lawns',
    ],
    inclusions: ['Morning Breakfast', 'Evening Chai Service', 'Pool Access', 'Free On-Site Parking'],
  },
  {
    id: 'regal-family-residence',
    name: 'Regal Family Residence Suite',
    hindiTitle: 'शाही परिवार निवास सुइट',
    category: 'family',
    categoryLabel: 'Family & Wedding Wing',
    pricePerNight: 7400,
    areaSqFt: 620,
    maxGuests: '4 Adults · 2 Children',
    bedType: 'Two King Chambers + Diwan Lounge',
    view: 'Surya Bagh Celebration Lawn & Western Chhatris',
    image: RESORT_IMAGES.maharajaSuite,
    secondaryImage: RESORT_IMAGES.courtyardHaveli,
    shortDescription:
      'Expansive interconnected chambers tailored for royal wedding families and multi-generational heritage stays with a private baithak lounge.',
    architecturalNotes:
      'Built within the resort’s dedicated group residence wings (configurable in blocks of 10 to 40 rooms for wedding barats and family entourages).',
    highlights: [
      'Dual sleeping zones with private dressing vestibule for wedding attire',
      'Traditional Rajasthani diwan seating for family gatherings',
      'Twin vanity bathrooms with continuous hot water & power backup',
      'Priority luggage & garment steaming assistance for wedding guests',
    ],
    inclusions: ['Breakfast for 4 Guests', 'Garment Steaming', '24-Hour Room Service', 'Dedicated Wing Security'],
  },
  {
    id: 'imperial-highway-deluxe',
    name: 'Imperial Sandstone Deluxe',
    hindiTitle: 'इम्पीरियल सैंडस्टोन डीलक्स',
    category: 'transit',
    categoryLabel: 'NH-11 Luxury Stay',
    pricePerNight: 3800,
    areaSqFt: 380,
    maxGuests: '2 Adults · 1 Child',
    bedType: 'Plush Heritage King or Twin Beds',
    view: 'Eastern Desert Dunes & Palm Courtyard',
    image: RESORT_IMAGES.courtyardHaveli,
    secondaryImage: RESORT_IMAGES.heroPalace,
    shortDescription:
      'Effortless sanctuary along the Jaipur–Bikaner NH-11 highway offering sound-insulated sandstone walls, restful beds, and 24-hour dining.',
    architecturalNotes:
      'Engineered with thick thermal sandstone masonry that keeps interiors naturally cool during Rajasthan summers and cozy in desert winters.',
    highlights: [
      'Acoustic insulation for tranquil rest along the NH-11 corridor',
      'Flat-screen smart television, electric kettle, and artisanal tea tray',
      '24-hour check-in desk and secure highway-accessible courtyard parking',
      'Steps away from the Royal Darbar multi-cuisine vegetarian restaurant',
    ],
    inclusions: ['Complimentary Breakfast', '24/7 Front Desk', 'Express Check-In', 'Secured Highway Parking'],
  },
];

export const EVENT_VENUES: EventVenue[] = [
  {
    id: 'surya-bagh-lawn',
    indexNumber: '01',
    name: 'Surya Bagh Grand Celebration Lawn',
    hindiName: 'सूर्य बाग़ भव्य मैरिज गार्डन',
    subtitle: 'Illuminated Palace Façade Backdrop · Destination Weddings & Royal Receptions',
    SeatedCapacity: 900,
    floatingCapacity: 1600,
    areaSqFt: 48000,
    setting: 'Open-Air Manicured Royal Lawn under the Desert Sky',
    image: RESORT_IMAGES.weddingLawn,
    description:
      'Framed by the glowing Dulmera sandstone palace facade and carved chhatri domes, Surya Bagh is Sri Dungargarh and Bikaner region’s premier open-air marriage garden for grand varmala stages, crystal chandelier mandaps, and royal reception banquets.',
    idealFor: ['Grand Destination Weddings', 'Royal Barat Welcome & Varmala', 'Starlit Reception Galas'],
    signatureFeatures: [
      'Grand sandstone staircase for royal bride & groom entry processions',
      'Dedicated floral mandap platform with heavy-duty architectural lighting rig',
      'Separate live royal kitchen & Marwari manuhar dining pavilion',
      'Private bridal green room & VIP family lounge adjacent to stage',
    ],
  },
  {
    id: 'rajputana-darbar-hall',
    indexNumber: '02',
    name: 'Rajputana Darbar Indoor Banquet',
    hindiName: 'राजपूताना दरबार बैंक्वेट हॉल',
    subtitle: 'Climate-Controlled Royal Hall · Sangeet, Ring Ceremony & Conclaves',
    SeatedCapacity: 320,
    floatingCapacity: 500,
    areaSqFt: 8500,
    setting: 'Pillarless Climate-Controlled Heritage Hall',
    image: RESORT_IMAGES.royalDining,
    description:
      'An opulent indoor durbar hall adorned with brass chandeliers, arched sandstone colonnades, and acoustic panelling—crafted for high-energy Sangeet nights, ring ceremonies, and round-year daytime wedding rituals.',
    idealFor: ['Sangeet & Cocktail Evenings', 'Engagement & Tilak Ceremonies', 'Corporate & Social Conclaves'],
    signatureFeatures: [
      'Pillarless sightlines with built-in stage and concert-grade sound readiness',
      'Full air-conditioning supported by 100% heavy-duty generator backup',
      'Connected pre-function veranda for welcome mocktails and chaat counters',
      'Custom seating layouts: Royal Durbar, Round-Table Cluster, or Theatre',
    ],
  },
  {
    id: 'bawdi-poolside-courtyard',
    indexNumber: '03',
    name: 'Bawdi Reflection Courtyard & Pool Terrace',
    hindiName: 'बावड़ी पूलसाइड आंगन',
    subtitle: 'Waterside Sandstone Cloister · Haldi, Mehendi & Folk Evenings',
    SeatedCapacity: 220,
    floatingCapacity: 350,
    areaSqFt: 11000,
    setting: 'Open Courtyard around the Central Reflecting Pool',
    image: RESORT_IMAGES.heroPalace,
    description:
      'Surrounded by carved jharokha balconies and tranquil water reflections, the poolside courtyard hosts vibrant daytime Haldi and Mehendi carnivals, pre-wedding shoots, and intimate candlelit Langa-Manganiyar folk music dinners.',
    idealFor: ['Vibrant Haldi & Mehendi Carnivals', 'Pre-Wedding Architectural Shoots', 'Folk Music & Bonfire Dinners'],
    signatureFeatures: [
      '360-degree symmetrical sandstone arches ideal for cinematic photography',
      'Candlelit waterside steps for acoustic Rajasthani folk performances',
      'Direct lift and corridor access to the heritage suite wings above',
      'Bespoke marigold, genda-phool, and brass urli decor packages',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Illuminated Sandstone Palace at Dusk',
    hindiSubtitle: 'संध्या काल में चमकता धुलमेरा पत्थर का महल',
    category: 'architecture',
    categoryLabel: 'Palace Architecture',
    locationTag: 'Main Facade & Reflection Courtyard',
    image: RESORT_IMAGES.heroPalace,
    aspect: 'wide',
    caption:
      'Hand-carved Bikaneri sandstone jharokhas, chhatri cupolas, and symmetrical archways reflected in the central courtyard water body at twilight.',
  },
  {
    id: 'gal-2',
    title: 'Surya Bagh Royal Wedding Mandap',
    hindiSubtitle: 'सूर्य बाग़ में शाही विवाह मंडप',
    category: 'weddings',
    categoryLabel: 'Royal Weddings',
    locationTag: 'Surya Bagh Grand Lawn',
    image: RESORT_IMAGES.weddingLawn,
    aspect: 'wide',
    caption:
      'A floral chandelier mandap and candlelit banquet setup hosting 1,200+ guests beneath the desert stars with the lit heritage palace as backdrop.',
  },
  {
    id: 'gal-3',
    title: 'Maharaja Four-Poster Heritage Chamber',
    hindiSubtitle: 'महाराजा हेरिटेज सुइट का शाही कक्ष',
    category: 'suites',
    categoryLabel: 'Suites & Chambers',
    locationTag: 'Royal Heritage Wing',
    image: RESORT_IMAGES.maharajaSuite,
    aspect: 'standard',
    caption:
      'Intricately carved walnut four-poster bed, araish lime-plaster walls, and private sandstone jharokha overlooking the manicured estate.',
  },
  {
    id: 'gal-4',
    title: 'Haveli Courtyard Veranda & Arches',
    hindiSubtitle: 'हवेली झरोखा और निजी बरामदा',
    category: 'suites',
    categoryLabel: 'Suites & Chambers',
    locationTag: 'East Courtyard Wing',
    image: RESORT_IMAGES.courtyardHaveli,
    aspect: 'standard',
    caption:
      'Private arched sandstone sit-out veranda with pierced jaali railings and warm heritage fresco interiors.',
  },
  {
    id: 'gal-5',
    title: 'Royal Darbar Thali & Poolside Cloister',
    hindiSubtitle: 'शाही राजस्थानी थाली और पूलसाइड डाइनिंग',
    category: 'dining',
    categoryLabel: 'Dining & Courtyard',
    locationTag: 'Darbar Pavilion',
    image: RESORT_IMAGES.royalDining,
    aspect: 'standard',
    caption:
      'Authentic vegetarian Marwari royal thali served on silver-plated ware beside the lantern-lit courtyard pool.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    guestName: 'Rajendra Singh Rathore & Family',
    roleOrFamily: 'Host of 3-Day Royal Destination Wedding',
    originCity: 'Bikaner & Kolkata',
    eventOrStay: 'Full Estate Buyout · 110 Rooms · 1,400 Guests',
    date: 'February 2026',
    quote:
      'We wanted a Taj-level heritage palace experience without forcing our elderly relatives to navigate narrow city lanes. Sri Karni Heritage Resort on NH-11 gave us breathtaking Bikaneri sandstone architecture, effortless parking for 300+ cars, and warm Marwari hospitality.',
    outcomeMetric: '110 Rooms & 5 Royal Functions Executed Seamlessly',
  },
  {
    id: 'test-2',
    guestName: 'Vikramaditya & Neha Bothra',
    roleOrFamily: 'Destination Wedding Couple',
    originCity: 'Jaipur & Mumbai',
    eventOrStay: 'Surya Bagh Lawn + Darbar Hall Sangeet',
    date: 'December 2025',
    quote:
      'When the palace facade lit up behind our varmala mandap at twilight, every single guest from Mumbai was spellbound. The rooms are spotless, the pure vegetarian royal feast was unforgettable, and the management handled every last-minute detail with grace.',
    outcomeMetric: '950 Guests Hosted across Lawn & Poolside Courtyard',
  },
  {
    id: 'test-3',
    guestName: 'Dr. Anिरुद्ध सिंघानिया (Dr. Anirudh Singhania)',
    roleOrFamily: 'Heritage Traveler & Architectural Photographer',
    originCity: 'New Delhi',
    eventOrStay: 'Maharaja Heritage Suite · 4-Night Family Stay',
    date: 'January 2026',
    quote:
      'Situated right near Hanuman Dhora in Sri Dungargarh along the Jaipur–Bikaner highway, this resort feels like a serene 19th-century desert fortress. Waking up to peacock calls and sipping kulhad chai in the private sandstone jharokha was pure magic.',
    outcomeMetric: '4.9 / 5 Verified Guest Hospitality Rating',
  },
];
