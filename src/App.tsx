/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Calendar,
  Users,
  Utensils,
  Sparkles,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Plus,
  Minus,
} from 'lucide-react';
import {
  ROOMS_DATA,
  GALLERY_ITEMS,
  TESTIMONIALS,
  ROYAL_OFFERS,
  HOTEL_EXPERIENCES,
  FOUNDERS_STORY_PILLARS,
  RESORT_FAQS,
  RESORT_CONTACT,
  RESORT_IMAGES,
  RoomSuite,
  GalleryItem,
  buildWhatsAppUrl,
} from './data/resortData';
import { ResilientImage } from './components/ResilientImage';
import { RoomDetailModal } from './components/RoomDetailModal';
import { WeddingPlannerSection } from './components/WeddingPlannerSection';
import {
  TajHotelInformation,
  TajFacilitiesSection,
  TajLocationDirections,
} from './components/TajSignatureSections';

type TajPageTab =
  | 'rooms'
  | 'suites'
  | 'overview'
  | 'offers'
  | 'dining'
  | 'venues'
  | 'wellness'
  | 'experiences';

const TAJ_TABS: {
  id: TajPageTab;
  label: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImgKey: keyof typeof RESORT_IMAGES;
}[] = [
  {
    id: 'rooms',
    label: 'ROOMS',
    heroKicker: 'ACCOMMODATIONS · 125 ROOMS & SUITES',
    heroTitle: 'HERITAGE LUXURY ROOMS',
    heroSubtitle:
      'Air-conditioned sanctuaries appointed with Queen beds, dark-wood cabinetry, LED TVs, and marble-tiled en-suite baths.',
    heroImgKey: 'roomHeritageLuxury',
  },
  {
    id: 'suites',
    label: 'SUITES',
    heroKicker: 'FAMILY QUARTERS & EXCLUSIVE WINGS',
    heroTitle: 'ROYAL FAMILY SUITES & WINGS',
    heroSubtitle:
      'Spacious family suites overlooking the central lawn and contiguous 10 to 125-room wings for destination weddings.',
    heroImgKey: 'roomFamilySuite',
  },
  {
    id: 'overview',
    label: 'OVERVIEW',
    heroKicker: 'EST. 2019 · NH-11 NEAR HANUMAN DHORA · SRI DUNGARGARH, BIKANER',
    heroTitle: 'SRI KARNI HERITAGE RESORT',
    heroSubtitle:
      'Named with the blessings of Deshnoke Maa Karni Ji—125 air-conditioned rooms, illuminated pink-sandstone celebration lawns, two indoor banquet halls, and warm Marwari hospitality.',
    heroImgKey: 'heroPalace',
  },
  {
    id: 'offers',
    label: 'OFFERS',
    heroKicker: 'FULL ESTATE BUYOUTS & PILGRIMAGE SOJOURNS',
    heroTitle: 'ROYAL OFFERS & PACKAGES',
    heroSubtitle:
      '3-day 125-room wedding buyouts, 40–75 room partial blocks, and family retreats along the Deshnoke–Toliyasar–Salasar circuit.',
    heroImgKey: 'facadeElevation',
  },
  {
    id: 'dining',
    label: 'DINING',
    heroKicker: 'CULINARY CRAFT & PRIVATE SALONS',
    heroTitle: 'MULTI-CUISINE ROYAL DINING',
    heroSubtitle:
      'Adorned with Rajasthani peacock and baradari art—serving authentic Marwari preparations, signature Navratan Korma, and bespoke wedding feasts.',
    heroImgKey: 'royalDining',
  },
  {
    id: 'venues',
    label: 'VENUES',
    heroKicker: 'FOUR SIGNATURE CELEBRATION SPACES',
    heroTitle: 'WEDDINGS & GRAND VENUES',
    heroSubtitle:
      'The Grand Illuminated Front Lawn (1,500+ guests), Sandstone Jharokha Portico, Two Indoor Pichwai Halls, and Poolside Rain Dance Courtyard.',
    heroImgKey: 'weddingLawn',
  },
  {
    id: 'wellness',
    label: 'WELLNESS',
    heroKicker: 'LEISURE, POOL & PRIVATE CLUB SALONS',
    heroTitle: 'POOL, BILLIARDS & LOUNGE',
    heroSubtitle:
      'Turquoise outdoor swimming pool with rain-dance deck, wood-panelled Heritage Billiards Salon, and Grand Petal-Chandelier Marble Lounge.',
    heroImgKey: 'poolView',
  },
  {
    id: 'experiences',
    label: 'HOTEL EXPERIENCES',
    heroKicker: 'CULTURE, PILGRIMAGE & ARCHITECTURE',
    heroTitle: 'ESTATE EXPERIENCES',
    heroSubtitle:
      'Sunset sandstone chhatri shoots, Jharokha veranda baithaks, billiards evenings, and darshan at Hanuman Dhora, Toliyasar & Deshnoke.',
    heroImgKey: 'facadeChhatriSunset',
  },
];

const HOMEPAGE_HERO_SLIDES: {
  id: string;
  image: string;
  objectPosition: string;
  kicker: string;
  hindiBadge: string;
  title: string;
  subtitle: string;
}[] = [
  {
    id: 'slide-1',
    image: RESORT_IMAGES.facadeMainHotelLawn,
    objectPosition: 'object-[center_35%]',
    kicker: 'EST. 2019 · NH-11 NEAR HANUMAN DHORA · SRI DUNGARGARH, BIKANER',
    hindiBadge: 'पधारो म्हारे देश · श्री करणी हेरिटेज रिसॉर्ट',
    title: 'SRI KARNI HERITAGE RESORT',
    subtitle:
      'Named with the blessings of Deshnoke Maa Karni Ji—125 air-conditioned rooms, carved red-sandstone chhatris, and a 32,000 sq. ft. emerald celebration lawn.',
  },
  {
    id: 'slide-2',
    image: RESORT_IMAGES.heroPalace,
    objectPosition: 'object-[center_35%]',
    kicker: 'ILLUMINATED PALACE ARCHITECTURE & GRAND COURTYARD',
    hindiBadge: 'राजसी ठाठ · जगमगाती लाल पत्थर की भव्य हवेली',
    title: 'ROYAL NIGHT ILLUMINATION',
    subtitle:
      'Experience the timeless grandeur of illuminated pink-sandstone jharokha verandas, pillared corridors, and royal courtyard walkways under the desert stars.',
  },
  {
    id: 'slide-3',
    image: RESORT_IMAGES.facadeElevation,
    objectPosition: 'object-[center_30%]',
    kicker: 'FOUR SIGNATURE CELEBRATION VENUES · 1,500+ GUEST CAPACITY',
    hindiBadge: 'शाही विवाह एवं भव्य समारोहों का संगम स्थल',
    title: 'GRAND ROYAL WEDDINGS & LAWNS',
    subtitle:
      'Host unforgettable Marwari destination weddings across our sprawling manicured front lawns, sandstone portico, and two air-conditioned indoor banquet halls.',
  },
  {
    id: 'slide-4',
    image: RESORT_IMAGES.roomFamilySuite,
    objectPosition: 'object-center',
    kicker: 'ACCOMMODATIONS · 125 LUXURY ROOMS & FAMILY SUITES',
    hindiBadge: '125 वातानुकूलित शाही कमरे एवं फैमिली सुइट्स',
    title: 'PALATIAL SUITES & SANCTUARIES',
    subtitle:
      'Thoughtfully appointed sanctuaries featuring plush Queen beds, carved dark-wood seating, marble-tiled baths, and contiguous wings for wedding guests.',
  },
  {
    id: 'slide-5',
    image: RESORT_IMAGES.royalDining,
    objectPosition: 'object-center',
    kicker: 'AUTHENTIC MARWARI MANUHAR & FINE DINING',
    hindiBadge: 'शुद्ध शाकाहारी राजस्थानी स्वाद और शाही मनुहार',
    title: 'ROYAL DINING & BANQUET SALONS',
    subtitle:
      'Savour authentic Rajasthani delicacies, signature Navratan Korma, and curated wedding feasts beneath crystal chandeliers and royal gold-damask interiors.',
  },
];

export default function App() {
  // Active Taj Sub-Page Tab (Default: 'overview', matching the user's screenshots!)
  const [activeTab, setActiveTab] = useState<TajPageTab>('overview');

  // Homepage 5-Photo Automatic 5-Second Slideshow State
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isSlideFlashing, setIsSlideFlashing] = useState(false);

  useEffect(() => {
    if (activeTab !== 'overview') return;
    const timer = window.setInterval(() => {
      setIsSlideFlashing(true);
      setHeroSlideIndex((prev) => (prev + 1) % HOMEPAGE_HERO_SLIDES.length);
      window.setTimeout(() => setIsSlideFlashing(false), 450);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeTab, heroSlideIndex]);

  const handleSelectHeroSlide = (index: number) => {
    if (index === heroSlideIndex) return;
    setIsSlideFlashing(true);
    setHeroSlideIndex(index);
    window.setTimeout(() => setIsSlideFlashing(false), 450);
  };

  // Dual-Header Scroll Handoff State
  const [isPastHero, setIsPastHero] = useState(false);
  const heroBottomRef = useRef<HTMLDivElement | null>(null);
  const contentStartRef = useRef<HTMLDivElement | null>(null);

  // Taj Sub-Navigation Horizontal Scroll State & Ref (for Desktop & Mobile Preview)
  const subNavScrollRef = useRef<HTMLElement | null>(null);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const updateSubNavScrollArrows = () => {
    const el = subNavScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 12);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 12);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroBottomRef.current) {
        const rect = heroBottomRef.current.getBoundingClientRect();
        setIsPastHero(rect.top <= 52);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSubNavScrollArrows, { passive: true });
    handleScroll();
    updateSubNavScrollArrows();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSubNavScrollArrows);
    };
  }, []);

  // Center the active tab smoothly inside the horizontal Taj sub-navigation strip on mobile/tablet
  useEffect(() => {
    const navEl = subNavScrollRef.current;
    const btnEl = tabButtonRefs.current[activeTab];
    if (navEl && btnEl) {
      const targetLeft =
        btnEl.offsetLeft - navEl.clientWidth / 2 + btnEl.clientWidth / 2;
      navEl.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
      setTimeout(updateSubNavScrollArrows, 320);
    }
  }, [activeTab]);

  const scrollSubNav = (direction: 'left' | 'right') => {
    const el = subNavScrollRef.current;
    if (!el) return;
    const delta = direction === 'right' ? 220 : -220;
    el.scrollBy({ left: delta, behavior: 'smooth' });
    setTimeout(updateSubNavScrollArrows, 320);
  };

  // Quick-Booking Bar State
  const [checkInDate, setCheckInDate] = useState('2026-11-24');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-26');
  const [selectedGuests, setSelectedGuests] = useState('2 Adults · 1 Room');
  const [availabilityBanner, setAvailabilityBanner] = useState<string | null>(null);

  // Suite Filtering & Modal State
  const [roomCategoryFilter, setRoomCategoryFilter] = useState<'all' | 'suites' | 'haveli' | 'family'>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<RoomSuite | null>(null);

  // Gallery Filtering & Lightbox State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'architecture' | 'suites' | 'weddings' | 'dining'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const allGalleryItems = GALLERY_ITEMS;
  const filteredGallery =
    galleryFilter === 'all'
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === galleryFilter);

  const currentTabInfo = TAJ_TABS.find((t) => t.id === activeTab) || TAJ_TABS[2];
  const activeHeroImage = RESORT_IMAGES[currentTabInfo.heroImgKey];

  const handleTabSelect = (tabId: TajPageTab) => {
    setActiveTab(tabId);
    if (contentStartRef.current && window.scrollY > 420) {
      contentStartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickBookingWhatsAppText = `Khamma Ghani Sri Karni Heritage Resort! 🙏
I would like to check room availability & direct tariff:

• Property: Sri Karni Heritage Resort, NH-11 Sri Dungargarh (Bikaner)
• Check-In: ${checkInDate}
• Check-Out: ${checkOutDate}
• Guests / Scope: ${selectedGuests}

Please share available rooms and tariff details.`;

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setAvailabilityBanner(
      `125 Air-Conditioned Rooms & Celebration Venues are available for inquiry from ${checkInDate} to ${checkOutDate} (${selectedGuests}). Select a residence below or connect on WhatsApp.`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#292826]">
      {/* =====================================================================
          1. TOP HEADER (Placed cleanly at the top, THEN the Hero Poster below it)
          Never overlaps or covers the Hero Poster photo. When scrolling down,
          this Top Header scrolls away and the Sub-Header Bar locks to `top-0`.
         ===================================================================== */}
      <header className="relative z-40 h-20 w-full flex items-center justify-between gap-8 px-4 sm:px-8 lg:px-14 bg-white border-b border-[#E6E3DD]">
        {/* Zone 1: Single Brand Lockup with Royal Crest Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 font-serif-royal text-xl sm:text-2xl font-normal tracking-[0.08em] uppercase text-[#292826] whitespace-nowrap shrink-0 group"
        >
          <span className="w-14 h-14 rounded-full bg-white border border-[#A3853D]/50 shadow-xs overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={RESORT_IMAGES.logo}
              alt="Sri Karni Heritage Resort Royal Crest"
              className="w-full h-full object-cover scale-[1.02] transition-transform duration-300 group-hover:scale-[1.06]"
            />
          </span>
          <span>Sri Karni Heritage</span>
        </a>

        {/* Zone 2: 5 Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.16em] uppercase font-medium text-[#4A4843]">
          <button
            type="button"
            onClick={() => handleTabSelect('overview')}
            className={`hover:text-[#A3853D] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'overview' ? 'text-[#A3853D] font-semibold' : ''
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => handleTabSelect('rooms')}
            className={`hover:text-[#A3853D] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'rooms' ? 'text-[#A3853D] font-semibold' : ''
            }`}
          >
            Rooms
          </button>
          <button
            type="button"
            onClick={() => handleTabSelect('suites')}
            className={`hover:text-[#A3853D] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'suites' ? 'text-[#A3853D] font-semibold' : ''
            }`}
          >
            Suites
          </button>
          <button
            type="button"
            onClick={() => handleTabSelect('venues')}
            className={`hover:text-[#A3853D] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'venues' ? 'text-[#A3853D] font-semibold' : ''
            }`}
          >
            Venues & Weddings
          </button>
          <button
            type="button"
            onClick={() => handleTabSelect('dining')}
            className={`hover:text-[#A3853D] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'dining' ? 'text-[#A3853D] font-semibold' : ''
            }`}
          >
            Dining
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Taj Gold Rectangular CTA) */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs tracking-[0.12em] uppercase font-semibold text-white bg-[#AD8B3A] hover:bg-[#96772E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>BOOK A STAY</span>
          </button>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* =====================================================================
            HERO POSTER BANNER (Placed directly BELOW the Top Header)
            - On Homepage (`overview`): 5-Photo Automatic 5-Second Royal Slideshow
              with smooth flash/crossfade transitions, bilingual royal text, and
              interactive slide indicators.
            - Starts cleanly after `<header>` so the Header never overlaps the photo.
           ===================================================================== */}
        <section className="relative bg-[#181715] text-white">
          <div className="relative h-[70vh] sm:h-[78vh] min-h-[480px] sm:min-h-[580px] max-h-[760px] w-full flex flex-col justify-end overflow-hidden">
            {activeTab === 'overview' ? (
              <>
                {/* 5 Automatic Slides for Homepage */}
                {HOMEPAGE_HERO_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === heroSlideIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        isCurrent
                          ? 'opacity-100 scale-100 z-10'
                          : 'opacity-0 scale-105 z-0 pointer-events-none'
                      }`}
                    >
                      <ResilientImage
                        src={slide.image}
                        alt={slide.title}
                        priority={idx === 0}
                        className={`w-full h-full object-cover ${slide.objectPosition}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                    </div>
                  );
                })}

                {/* Subtle Royal Golden Flash Overlay on 5-Second Slide Change */}
                <div
                  className={`absolute inset-0 z-20 pointer-events-none bg-[#E5C878]/20 mix-blend-screen transition-opacity duration-500 ${
                    isSlideFlashing ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Left / Right Slide Arrows */}
                <button
                  type="button"
                  onClick={() =>
                    handleSelectHeroSlide(
                      (heroSlideIndex - 1 + HOMEPAGE_HERO_SLIDES.length) %
                        HOMEPAGE_HERO_SLIDES.length
                    )
                  }
                  aria-label="Previous photo"
                  className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/35 hover:bg-[#AD8B3A] border border-white/35 text-white items-center justify-center transition-colors cursor-pointer backdrop-blur-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSelectHeroSlide(
                      (heroSlideIndex + 1) % HOMEPAGE_HERO_SLIDES.length
                    )
                  }
                  aria-label="Next photo"
                  className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/35 hover:bg-[#AD8B3A] border border-white/35 text-white items-center justify-center transition-colors cursor-pointer backdrop-blur-xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Animated Royal Typography for Current Slide */}
                <div className="relative z-30 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 text-center">
                  <div
                    key={`text-${heroSlideIndex}`}
                    className="transition-all duration-700"
                  >
                    {/* Hindi Royal Blessing Badge */}
                    <p className="text-xs sm:text-sm text-[#E5C878] font-medium tracking-wider mb-2 drop-shadow-xs">
                      {HOMEPAGE_HERO_SLIDES[heroSlideIndex].hindiBadge}
                    </p>

                    <div className="inline-flex items-center justify-center gap-3 mb-3">
                      <span className="w-8 sm:w-12 h-[1px] bg-[#E5C878]" />
                      <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#E5C878] font-medium">
                        {HOMEPAGE_HERO_SLIDES[heroSlideIndex].kicker}
                      </span>
                      <span className="w-8 sm:w-12 h-[1px] bg-[#E5C878]" />
                    </div>

                    <h1
                      className="font-serif-royal font-normal text-white tracking-[0.05em] uppercase leading-[1.08] drop-shadow-sm"
                      style={{
                        fontSize: 'clamp(2.1rem, 4.4vw, 4rem)',
                        textWrap: 'balance',
                      }}
                    >
                      {HOMEPAGE_HERO_SLIDES[heroSlideIndex].title}
                    </h1>

                    <p className="mt-3 text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                      {HOMEPAGE_HERO_SLIDES[heroSlideIndex].subtitle}
                    </p>
                  </div>

                  {/* 5-Slide Interactive Gold Indicator Bars */}
                  <div className="mt-6 flex items-center justify-center gap-2.5">
                    {HOMEPAGE_HERO_SLIDES.map((slide, idx) => {
                      const isCurrent = idx === heroSlideIndex;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => handleSelectHeroSlide(idx)}
                          aria-label={`View slide ${idx + 1}: ${slide.title}`}
                          className={`h-1.5 transition-all duration-500 cursor-pointer ${
                            isCurrent
                              ? 'w-10 bg-[#E5C878]'
                              : 'w-3 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0">
                  <ResilientImage
                    src={activeHeroImage}
                    alt={currentTabInfo.heroTitle}
                    priority
                    className="w-full h-full object-cover object-[center_35%] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                </div>

                {/* Centered Taj Mahal Palace Style Hero Poster Typography */}
                <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 text-center">
                  <div className="inline-flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 sm:w-12 h-[1px] bg-[#E5C878]" />
                    <span className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#E5C878] font-medium">
                      {currentTabInfo.heroKicker}
                    </span>
                    <span className="w-8 sm:w-12 h-[1px] bg-[#E5C878]" />
                  </div>

                  <h1
                    className="font-serif-royal font-normal text-white tracking-[0.05em] uppercase leading-[1.08]"
                    style={{
                      fontSize: 'clamp(2.25rem, 4.4vw, 4rem)',
                      textWrap: 'balance',
                    }}
                  >
                    {currentTabInfo.heroTitle}
                  </h1>

                  <p className="mt-3 text-sm sm:text-base text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
                    {currentTabInfo.heroSubtitle}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Sentinel for Dual-Header Scroll Handoff */}
          <div ref={heroBottomRef} className="h-0 w-full" />
        </section>

        {/* =====================================================================
            2. SLIM, STYLISH TAJ SUB-NAVIGATION BAR (DESKTOP & MOBILE)
            [ROOMS | SUITES | OVERVIEW | OFFERS | DINING | VENUES | WELLNESS | HOTEL EXPERIENCES >]
            - No browser scrollbar line (`no-scrollbar` + `scrollbarWidth: 'none'`).
            - Only the sleek thin bottom line (`border-b border-[#E2DFD7]`) and thin
              gold underline (`h-[2px] bg-[#AD8B3A]`) under the active tab.
            - No `BOOK A STAY` button inside this strip—100% clean, slim, and stylish
              on both Mobile and Desktop!
           ===================================================================== */}
        <div
          ref={contentStartRef}
          className={`sticky top-0 z-50 bg-white border-b border-[#E2DFD7] transition-shadow duration-300 ${
            isPastHero ? 'shadow-[0_2px_12px_rgba(0,0,0,0.05)]' : 'shadow-none'
          }`}
        >
          <div className="max-w-[1180px] mx-auto px-2 sm:px-6 lg:px-8 h-[44px] sm:h-[52px] flex items-center">
            <div className="relative w-full h-full flex items-center">
              {/* Left Scroll Chevron (appears when scrolled right) */}
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollSubNav('left')}
                  aria-label="Scroll navigation tabs left"
                  className="h-full pl-1 pr-2 bg-gradient-to-r from-white via-white/95 to-transparent text-[#AD8B3A] hover:text-[#8C7030] inline-flex items-center justify-center shrink-0 z-10 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
                </button>
              )}

              <nav
                ref={subNavScrollRef}
                onScroll={updateSubNavScrollArrows}
                aria-label="Hotel section navigation"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                className="flex items-center justify-start md:justify-between w-full gap-2 sm:gap-5 lg:gap-8 overflow-x-auto no-scrollbar h-full scroll-smooth px-2"
              >
                {TAJ_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      ref={(el) => {
                        tabButtonRefs.current[tab.id] = el;
                      }}
                      type="button"
                      onClick={() => handleTabSelect(tab.id)}
                      className={`relative h-full px-2.5 sm:px-3.5 inline-flex items-center justify-center text-[11px] sm:text-[12px] tracking-[0.09em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'text-[#AD8B3A] font-normal'
                          : 'text-[#4A4843] hover:text-[#AD8B3A] font-normal'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {/* Sleek thin gold bottom line flush with the thin bottom border */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                          isActive ? 'bg-[#AD8B3A] opacity-100' : 'bg-transparent opacity-0'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Subtle Gold Chevron (`>`) on the right */}
              <button
                type="button"
                onClick={() => {
                  if (canScrollRight) {
                    scrollSubNav('right');
                  } else {
                    const currentIndex = TAJ_TABS.findIndex((t) => t.id === activeTab);
                    const nextIndex = (currentIndex + 1) % TAJ_TABS.length;
                    handleTabSelect(TAJ_TABS[nextIndex].id);
                  }
                }}
                aria-label="Next hotel section"
                className="h-full pl-2 pr-1 bg-gradient-to-l from-white via-white/95 to-transparent text-[#AD8B3A] hover:text-[#8C7030] inline-flex items-center justify-center shrink-0 z-10 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PAGE CONTENT ROUTING
           ===================================================================== */}

        {/* --- TAB: OVERVIEW (Default comprehensive view with Founders Story from karniresort.com) --- */}
        {activeTab === 'overview' && (
          <>
            {/* Editorial Overview & Founders Lineage from karniresort.com */}
            <section className="py-16 sm:py-24 bg-[#FBF9F6] border-b border-[#E6E3DD]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-[#A3853D] font-semibold mb-2">
                        EST. 2019 · SRI DUNGARGARH, BIKANER
                      </p>
                      <div className="flex items-center gap-6">
                        <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                        <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
                          A LEGACY OF
                        </span>
                      </div>
                      <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
                        MARWARI HOSPITALITY
                      </h2>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#4A4843] leading-relaxed">
                      <strong>Sri Karni Heritage Resort</strong> carries its sacred name in deep devotion to{' '}
                      <strong>Maa Karni Ji of Deshnoke</strong>—the revered guardian deity of the Bikaner and Marwar
                      region. Envisioned and founded by{' '}
                      <strong>Jagadish Prasad Dhuparr, Pawan Kumar, Ranjeet Kumar and Family</strong>, the estate was
                      conceived to bring a palace-scale sanctuary of traditional hospitality to their hometown of Sri
                      Dungargarh.
                    </p>

                    <p className="text-sm sm:text-[15px] text-[#4A4843] leading-relaxed">
                      Inaugurated in <strong>2019</strong> along <strong>National Highway 11</strong> near the sacred{' '}
                      <strong>Hanuman Dhora Mandir</strong> amidst tranquil desert sand dunes, the residence pairs
                      pink-sandstone <em>jharokha</em> arches and carved balustrades with contemporary comforts. With
                      125 air-conditioned rooms, a vast night-illuminated lawn, two indoor banquet halls, and an outdoor
                      swimming pool, the resort serves as a distinguished setting for royal Marwari weddings, family
                      milestones, and travellers journeying across the Bikaner pilgrimage circuit.
                    </p>

                    {/* Founders' Charter Blockquote from karniresort.com */}
                    <blockquote className="p-5 bg-white border-l-2 border-[#A3853D] shadow-2xs space-y-2">
                      <p className="font-serif-royal italic text-base sm:text-lg text-[#292826] leading-relaxed">
                        “{RESORT_CONTACT.foundersQuote}”
                      </p>
                      <footer className="text-xs tracking-[0.1em] uppercase text-[#A3853D] font-semibold">
                        — {RESORT_CONTACT.founders}, Founders
                      </footer>
                    </blockquote>

                    <div className="pt-2 flex flex-wrap items-center gap-6">
                      <button
                        type="button"
                        onClick={() => handleTabSelect('rooms')}
                        className="px-6 py-3 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors cursor-pointer"
                      >
                        EXPLORE 125 ROOMS & SUITES
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTabSelect('venues')}
                        className="text-xs tracking-[0.14em] uppercase text-[#A3853D] underline underline-offset-4 hover:text-[#7D6428] font-semibold cursor-pointer"
                      >
                        VIEW 4 CELEBRATION VENUES
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Real Estate Photographs + 4 Founders Story Pillars */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="p-3 bg-white border border-[#E6E3DD] shadow-xs">
                      <div className="aspect-[16/10] w-full overflow-hidden bg-[#1C1B19]">
                        <ResilientImage
                          src={RESORT_IMAGES.facadeElevation}
                          alt="Sri Karni Heritage Resort Sandstone Facade and Front Lawn"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-2.5 px-1 flex items-center justify-between text-xs text-[#6E6A63]">
                        <span>Dulmera Pink-Sandstone Elevation & Front Lawn</span>
                        <span className="font-mono-tabular text-[#A3853D] font-semibold">NH-11 · Sri Dungargarh</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {FOUNDERS_STORY_PILLARS.map((pillar, idx) => (
                        <div key={idx} className="p-4 bg-white border border-[#E6E3DD]">
                          <h3 className="font-serif-royal text-lg uppercase tracking-wider text-[#292826] mb-1">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-[#4A4843] leading-relaxed">{pillar.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 1. EXACT SCREENSHOT 1 SECTION: ───── HOTEL INFORMATION */}
            <TajHotelInformation />

            {/* 2. EXACT SCREENSHOT 3 SECTION: ───── FACILITIES */}
            <TajFacilitiesSection />
          </>
        )}

        {/* --- ROOMS & SUITES SECTION (Shown on OVERVIEW, ROOMS, and SUITES tabs) --- */}
        {(activeTab === 'overview' || activeTab === 'rooms' || activeTab === 'suites') && (
          <section id="suites" className="py-16 sm:py-24 bg-white border-t border-[#E6E3DD]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <div className="flex items-center gap-6">
                    <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                    <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
                      {activeTab === 'suites' ? 'FAMILY SUITES' : 'ACCOMMODATIONS'}
                    </span>
                  </div>
                  <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
                    {activeTab === 'suites' ? '& GROUP WINGS' : '125 ROOMS & SUITES'}
                  </h2>
                </div>

                {/* Underline Filter Tabs */}
                <div className="flex flex-wrap items-center gap-6 border-b border-[#E0DDD7]">
                  {[
                    { id: 'all', label: 'ALL (125 KEYS)' },
                    { id: 'haveli', label: 'HERITAGE LUXURY ROOM' },
                    { id: 'suites', label: 'ROYAL FAMILY SUITES' },
                    { id: 'family', label: 'WEDDING GROUP WINGS (10–125)' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setRoomCategoryFilter(tab.id as typeof roomCategoryFilter)}
                      className={`pb-3 text-xs tracking-[0.12em] uppercase font-medium border-b-2 -mb-[1px] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        roomCategoryFilter === tab.id
                          ? 'border-[#A3853D] text-[#A3853D] font-semibold'
                          : 'border-transparent text-[#6E6A63] hover:text-[#292826]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ROOMS_DATA.filter((room) => {
                  if (activeTab === 'suites' && roomCategoryFilter === 'all') return room.isSuite;
                  if (roomCategoryFilter === 'all') return true;
                  return room.category === roomCategoryFilter;
                }).map((room) => {
                  const roomWhatsAppMsg = `Khamma Ghani! 🙏 Please share availability and tariff for the *${room.name}* at Sri Karni Heritage Resort (Check-In: ${checkInDate}, Check-Out: ${checkOutDate}).`;

                  return (
                    <article
                      key={room.id}
                      className="group bg-white border border-[#E6E3DD] flex flex-col justify-between transition-colors hover:border-[#A3853D]"
                    >
                      <div>
                        <div
                          onClick={() => setActiveModalRoom(room)}
                          className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1B19] cursor-pointer"
                        >
                          <ResilientImage
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                          <div className="absolute top-3.5 left-4 bg-black/70 px-3 py-1 border border-[#A3853D]/60">
                            <span className="text-[10px] tracking-[0.16em] uppercase text-[#E5C878] font-medium">
                              {room.categoryLabel}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                            <span className="text-xs tracking-wider uppercase text-[#E5C878]">{room.hindiTitle}</span>
                            <span className="text-xs text-white/90 font-mono-tabular">{room.areaSqM}</span>
                          </div>
                        </div>

                        <div className="p-6 sm:p-8 space-y-4">
                          <h3 className="font-serif-royal text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[#292826]">
                            <button
                              type="button"
                              onClick={() => setActiveModalRoom(room)}
                              className="text-left hover:text-[#A3853D] transition-colors cursor-pointer"
                            >
                              {room.name}
                            </button>
                          </h3>

                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6A63] border-y border-[#F0EDE6] py-2.5">
                            <span className="font-mono-tabular font-semibold text-[#292826]">
                              {room.areaSqM} ({room.areaSqFt} Sq. Ft.)
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{room.maxGuests}</span>
                            <span aria-hidden="true">·</span>
                            <span>{room.bedType}</span>
                          </div>

                          <p className="text-sm text-[#4A4843] leading-relaxed">{room.shortDescription}</p>

                          {/* Exact 6 Room Specs List from karniresort.com */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                            {room.specsList.map((spec, sIdx) => (
                              <div
                                key={sIdx}
                                className="text-[11px] text-[#4A4843] bg-[#FBF9F6] border border-[#EAE5DC] px-2.5 py-1.5 flex items-center gap-1.5"
                              >
                                <span className="text-[#A3853D] text-[10px]">◆</span>
                                <span className="truncate">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="px-6 sm:px-8 py-5 bg-[#F7F6F2] border-t border-[#E6E3DD] flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="block text-[10px] uppercase tracking-[0.14em] text-[#A3853D] font-semibold">
                            {room.rateNote}
                          </span>
                          <span className="font-mono-tabular text-xl font-semibold text-[#292826]">
                            ₹{room.pricePerNight.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-[#8C8984]"> / Night (Indicative)</span>
                        </div>

                        <div className="flex items-center gap-5">
                          <a
                            href={buildWhatsAppUrl(roomWhatsAppMsg)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs tracking-[0.14em] uppercase font-medium text-[#A3853D] underline underline-offset-4 hover:text-[#7D6428] whitespace-nowrap"
                          >
                            WHATSAPP ENQUIRY
                          </a>

                          <button
                            type="button"
                            onClick={() => setActiveModalRoom(room)}
                            className="px-5 py-2.5 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.12em] uppercase font-semibold transition-colors cursor-pointer whitespace-nowrap"
                          >
                            BOOK A STAY
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* --- OFFERS TAB OR OVERVIEW --- */}
        {(activeTab === 'offers' || activeTab === 'overview') && (
          <section className="py-16 sm:py-24 bg-[#F7F6F2] border-t border-[#E6E3DD]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-6 mb-12">
                <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A]">
                  EXCLUSIVE OFFERS & BUYOUTS
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ROYAL_OFFERS.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-white border border-[#E6E3DD] flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full overflow-hidden bg-[#1C1B19]">
                        <ResilientImage
                          src={offer.image}
                          alt={offer.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-3.5">
                        <p className="text-[11px] tracking-[0.14em] uppercase text-[#A3853D] font-semibold">
                          {offer.validity}
                        </p>
                        <h3 className="font-serif-royal text-2xl font-normal uppercase text-[#292826]">
                          {offer.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed">{offer.description}</p>
                        <ul className="space-y-1.5 text-xs text-[#4A4843] pt-2">
                          {offer.inclusions.map((inc, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#A3853D] text-xs mt-0.5">◆</span>
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-[#FBF9F6] border-t border-[#E6E3DD] flex items-center justify-between gap-3">
                      <span className="text-[11px] text-[#6E6A63] font-medium">{offer.rateNote}</span>
                      <a
                        href={buildWhatsAppUrl(
                          `Khamma Ghani Sri Karni Heritage Resort! 🙏 I would like to inquire about "${offer.title}".`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.12em] uppercase font-semibold transition-colors whitespace-nowrap"
                      >
                        ENQUIRE
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- VENUES / TIMELESS WEDDINGS (Shown on VENUES and OVERVIEW) --- */}
        {(activeTab === 'venues' || activeTab === 'overview') && <WeddingPlannerSection />}

        {/* --- DINING & PRIVATE SALONS (Shown on DINING and OVERVIEW — Real Photos from karniresort.com) --- */}
        {(activeTab === 'dining' || activeTab === 'overview') && (
          <section id="dining" className="py-16 sm:py-24 bg-white border-t border-[#E6E3DD]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* Row 1: The Multi-Cuisine Dining Room & Royal Feasts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs tracking-[0.18em] uppercase text-[#A3853D] font-semibold mb-2">
                        CULINARY CRAFT & PRIVATE SALONS
                      </p>
                      <div className="flex items-center gap-6">
                        <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                        <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
                          MULTI-CUISINE
                        </span>
                      </div>
                      <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
                        DINING & ROYAL FEASTS
                      </h2>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#4A4843] leading-relaxed">
                      Adorned with traditional Rajasthani peacock and <em>baradari</em> artwork beneath crystal
                      chandeliers, our air-conditioned dining hall welcomes resident families, highway travellers, and
                      celebration guests throughout the day.
                    </p>

                    <div className="pt-3 space-y-3.5 border-t border-[#E6E3DD]">
                      <div className="flex items-start gap-3">
                        <Utensils className="w-4 h-4 text-[#A3853D] shrink-0 mt-1" />
                        <div>
                          <h3 className="font-serif-royal text-lg uppercase tracking-wider text-[#292826]">
                            Authentic Rajasthani & Signature North Indian Cuisine
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4A4843] mt-0.5">
                            Authentic Rajasthani preparations & rich North Indian curries including our signature{' '}
                            <strong>Navratan Korma</strong>, freshly baked tandoori breads, and Indian & continental
                            morning breakfast.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#A3853D] shrink-0 mt-1" />
                        <div>
                          <h3 className="font-serif-royal text-lg uppercase tracking-wider text-[#292826]">
                            Bespoke Pure Vegetarian, Jain, Satvik & Family Halwai Menus
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4A4843] mt-0.5">
                            Custom <em>halwai</em> wedding feasts, strict Jain & Satvik menus, and attentive 24-hour
                            in-room dining service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-5">
                    <a
                      href={buildWhatsAppUrl(
                        'Khamma Ghani! 🙏 We would like to enquire about dining / wedding catering menus at Sri Karni Heritage Resort.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors whitespace-nowrap"
                    >
                      <span>ENQUIRE ABOUT DINING & MENUS</span>
                    </a>
                    <span className="text-xs text-[#6E6A63]">
                      In-Room & Restaurant Dining · <span className="font-mono-tabular text-[#292826]">24×7 Support</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 aspect-[16/10] overflow-hidden border border-[#E6E3DD] bg-[#1C1B19]">
                    <ResilientImage
                      src={RESORT_IMAGES.royalDining}
                      alt="Multi-Cuisine Fine Dining Hall with teardrop chandelier at Sri Karni Heritage Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden border border-[#E6E3DD] bg-[#1C1B19]">
                    <ResilientImage
                      src={RESORT_IMAGES.dishKadhaiPaneer}
                      alt="Signature Royal Kadhai Paneer at Sri Karni Heritage Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden border border-[#E6E3DD] bg-[#1C1B19]">
                    <ResilientImage
                      src={RESORT_IMAGES.dishNavratanKorma}
                      alt="Chef Special Subz and Paneer Masala at Sri Karni Heritage Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: The Grand Sandstone Jharokha Veranda Baithak & The Heritage Billiards Salon */}
              <div className="pt-12 border-t border-[#E6E3DD] grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-[#FBF9F6] border border-[#E6E3DD] overflow-hidden flex flex-col justify-between">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#1C1B19]">
                    <ResilientImage
                      src={RESORT_IMAGES.jharokhaGrandBaithak}
                      alt="Grand Sandstone Jharokha Veranda Lounge and Family Baithak at Sri Karni Heritage Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-2.5">
                    <p className="text-[11px] tracking-[0.16em] uppercase text-[#A3853D] font-semibold">
                      VIP FAMILY BAITHAK & SUNSET VERANDA
                    </p>
                    <h3 className="font-serif-royal text-2xl font-normal uppercase text-[#292826]">
                      The Grand Sandstone Jharokha Baithak Lounge
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed">
                      Framed by scalloped Bikaneri sandstone arches overlooking the green desert landscape, our expansive
                      veranda lounge with U-shaped sofa seating is crafted for welcoming wedding dignitaries, evening
                      tea rituals, and family elders.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FBF9F6] border border-[#E6E3DD] overflow-hidden flex flex-col justify-between">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#1C1B19]">
                    <ResilientImage
                      src={RESORT_IMAGES.billiardsSalon}
                      alt="Wood-panelled heritage billiards and snooker room at Sri Karni Heritage Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-2.5">
                    <p className="text-[11px] tracking-[0.16em] uppercase text-[#A3853D] font-semibold">
                      PRIVATE CLUB RECREATION
                    </p>
                    <h3 className="font-serif-royal text-2xl font-normal uppercase text-[#292826]">
                      The Heritage Billiards & Leisure Salon
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed">
                      A warm, wood-panelled private club room appointed with a full-size billiards table, tufted leather
                      wingback chairs, and framed heritage art—crafted for unhurried afternoon conversations and evening
                      frames of snooker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- WELLNESS TAB (Pool, Rain Dance & Billiards Salon) --- */}
        {activeTab === 'wellness' && (
          <section className="py-16 sm:py-24 bg-white border-t border-[#E6E3DD]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-6">
                    <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                    <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A]">
                      POOL & LEISURE
                    </h2>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#4A4843] leading-relaxed">
                    Framed by desert sand dunes and manicured resort greenery, our turquoise outdoor swimming pool and
                    rain-dance deck offer a refreshing oasis along NH-11—complemented by our indoor Heritage Billiards
                    & Snooker Salon.
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#4A4843]">
                    <li className="flex items-center gap-2.5">
                      <Flower2 className="w-4 h-4 text-[#A3853D]" />
                      <span>Spacious Turquoise Outdoor Swimming Pool Deck with Festive Canopy Drapes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Flower2 className="w-4 h-4 text-[#A3853D]" />
                      <span>Summer Rain-Dance Courtyard for Family Leisure & Daytime Haldi Rituals</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Flower2 className="w-4 h-4 text-[#A3853D]" />
                      <span>Wood-Panelled Heritage Billiards & Snooker Salon</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 aspect-[16/10] w-full overflow-hidden border border-[#E6E3DD]">
                    <ResilientImage
                      src={RESORT_IMAGES.poolView}
                      alt="Outdoor Swimming Pool and Rain Dance Courtyard at Sri Karni Heritage Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden border border-[#E6E3DD]">
                    <ResilientImage
                      src={RESORT_IMAGES.billiardsSalon}
                      alt="Heritage Billiards Salon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden border border-[#E6E3DD]">
                    <ResilientImage
                      src={RESORT_IMAGES.gardenPavilionCanopy}
                      alt="Courtyard Garden Pavilion Canopy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- HOTEL EXPERIENCES (Shown on EXPERIENCES and OVERVIEW) --- */}
        {(activeTab === 'experiences' || activeTab === 'overview') && (
          <section className="py-16 sm:py-24 bg-[#F7F6F2] border-t border-[#E6E3DD]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <div className="flex items-center gap-6">
                  <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                  <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
                    HOTEL
                  </span>
                </div>
                <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
                  EXPERIENCES
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {HOTEL_EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white border border-[#E6E3DD] flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full overflow-hidden bg-[#1C1B19]">
                        <ResilientImage
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <p className="text-[11px] tracking-[0.14em] uppercase text-[#A3853D] font-semibold">
                          {exp.kicker}
                        </p>
                        <h3 className="font-serif-royal text-2xl font-normal text-[#292826]">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-[#FBF9F6] border-t border-[#E6E3DD] flex items-center justify-between text-xs">
                      <span className="text-[#6E6A63]">{exp.duration}</span>
                      <a
                        href={buildWhatsAppUrl(
                          `Khamma Ghani Sri Karni Heritage Resort! 🙏 I would like to inquire about "${exp.title}".`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase tracking-[0.12em] text-[#A3853D] underline underline-offset-4 font-semibold"
                      >
                        INQUIRE
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- GALLERY WITH REAL PHOTOS FROM KARNIRESORT.COM + UPLOAD SUPPORT --- */}
        <section id="gallery" className="py-16 sm:py-24 bg-white border-t border-[#E6E3DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#A3853D] font-semibold mb-2">
                  VISUAL ARCHIVE · PORTRAITS OF THE ESTATE
                </p>
                <div className="flex items-center gap-6">
                  <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                  <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A]">
                    GALLERY
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 border-b border-[#E0DDD7]">
                {[
                  { id: 'all', label: `ALL SPACES (${allGalleryItems.length})` },
                  { id: 'architecture', label: 'ARCHITECTURE & LAWN' },
                  { id: 'suites', label: 'ROOMS & INTERIORS' },
                  { id: 'weddings', label: 'VENUES' },
                  { id: 'dining', label: 'DINING & POOL' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setGalleryFilter(tab.id as typeof galleryFilter)}
                    className={`pb-3 text-xs tracking-[0.12em] uppercase font-medium border-b-2 -mb-[1px] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      galleryFilter === tab.id
                        ? 'border-[#A3853D] text-[#A3853D] font-semibold'
                        : 'border-transparent text-[#6E6A63] hover:text-[#292826]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {filteredGallery.map((item, idx) => {
                const isWide = item.aspect === 'wide' && galleryFilter === 'all' && idx < 2;
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxItem(item)}
                    className={`${
                      isWide ? 'md:col-span-6' : 'md:col-span-4'
                    } group relative overflow-hidden border border-[#E6E3DD] bg-[#1C1B19] cursor-pointer flex flex-col justify-between`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <ResilientImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-[#E5C878] mb-0.5">
                          {item.categoryLabel} · {item.locationTag}
                        </p>
                        <h3 className="font-serif-royal text-xl font-normal text-white">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <a
                href={RESORT_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#A3853D] text-[#292826] hover:bg-[#A3853D] hover:text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors"
              >
                <span>View Recent Celebrations on Instagram {RESORT_CONTACT.instagramHandle}</span>
              </a>
            </div>
          </div>
        </section>

        {/* When on a non-Overview tab, also render Hotel Information & Facilities at the bottom so every page has complete Taj information */}
        {activeTab !== 'overview' && (
          <>
            <TajHotelInformation />
            <TajFacilitiesSection />
          </>
        )}

        {/* 3. EXACT SCREENSHOT 2 SECTION: ───── LOCATION & DIRECTIONS (Shared across all pages) */}
        <TajLocationDirections />

        {/* Verified Guest Impressions (4.2 Rating Across 780+ Reviews from karniresort.com) */}
        <section className="py-16 sm:py-20 bg-[#F7F6F2] border-t border-[#E6E3DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#A3853D] font-semibold mb-2">
                  GUEST IMPRESSIONS · {RESORT_CONTACT.ratingSummary}
                </p>
                <div className="flex items-center gap-6">
                  <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                  <h2 className="font-serif-royal text-2xl sm:text-4xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A]">
                    WORDS FROM OUR GUESTS & HOSTS
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-6 bg-white border border-[#E6E3DD] flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="text-[11px] text-[#A3853D] font-mono-tabular uppercase tracking-wider font-semibold">
                      {t.outcomeMetric}
                    </div>
                    <p className="text-sm text-[#4A4843] leading-relaxed italic font-serif-royal text-base">
                      “{t.quote}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EDE6]">
                    <p className="font-serif-royal text-lg font-semibold text-[#292826]">{t.guestName}</p>
                    <p className="text-xs text-[#6E6A63]">
                      {t.roleOrFamily} · {t.originCity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section (Exact FAQs from karniresort.com) */}
        <section className="py-16 sm:py-20 bg-white border-t border-[#E6E3DD]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs tracking-[0.18em] uppercase text-[#A3853D] font-semibold mb-2">
                ESSENTIAL INFORMATION
              </p>
              <div className="flex items-center gap-6">
                <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                <h2 className="font-serif-royal text-2xl sm:text-4xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A]">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
              </div>
            </div>

            <div className="divide-y divide-[#E6E3DD] border-y border-[#E6E3DD]">
              {RESORT_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="font-serif-royal text-lg sm:text-xl text-[#292826] font-medium">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#A3853D] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#4A4843] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-[#4A4843] leading-relaxed pr-6">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          SHARED LUXURY FOOTER WITH GRAND ROYAL CREST LOGO ON ALL PAGES
         ===================================================================== */}
      <footer className="bg-[#1C1B19] text-[#D8CEBE] border-t-2 border-[#A3853D] pt-16 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Featured Royal Crest Medallion at Top of Footer */}
          <div className="flex flex-col items-center text-center pb-12 mb-12 border-b border-white/10">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('overview');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Sri Karni Heritage Resort Home"
              className="group relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white border-2 border-[#A3853D] shadow-2xl flex items-center justify-center overflow-hidden mb-6"
            >
              <img
                src={RESORT_IMAGES.logo}
                alt="Sri Karni Heritage Resort Official Royal Crest Logo"
                className="w-full h-full object-cover scale-[1.02] transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </a>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-[#A3853D]" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#E5C878]">
                EST. 2019 · SRI DUNGARGARH · BIKANER, RAJASTHAN
              </span>
              <span className="w-8 h-[1px] bg-[#A3853D]" />
            </div>
            <p className="font-serif-royal text-3xl sm:text-4xl font-normal uppercase tracking-[0.06em] text-white">
              {RESORT_CONTACT.name}
            </p>
            <p className="text-xs sm:text-sm text-[#E5C878] mt-1.5">{RESORT_CONTACT.deityDedication}</p>
            <p className="text-xs text-white/70 max-w-lg mt-2 leading-relaxed">
              {RESORT_CONTACT.addressLine1}, {RESORT_CONTACT.addressLine2} · GPS: {RESORT_CONTACT.coordinatesLabel}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <p className="font-semibold text-[#E5C878] text-xs uppercase tracking-[0.18em]">
                FOUNDERS & LINEAGE
              </p>
              <p className="text-xs text-white/80 max-w-sm leading-relaxed">
                Founded in {RESORT_CONTACT.establishedYear} by <strong>{RESORT_CONTACT.founders}</strong>. A 125-room
                sandstone heritage resort on National Highway 11 near Hanuman Dhora, Sri Dungargarh.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs">
              <p className="font-semibold text-[#E5C878] uppercase tracking-[0.18em] mb-3">
                HOTEL PAGES
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {TAJ_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      handleTabSelect(t.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 space-y-3 text-xs">
              <p className="font-semibold text-[#E5C878] uppercase tracking-[0.18em]">
                CONTACT & RESERVATIONS
              </p>
              <p className="font-mono-tabular text-sm font-semibold text-white">{RESORT_CONTACT.phoneDisplay}</p>
              <p className="text-white/75 break-all">{RESORT_CONTACT.email}</p>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={RESORT_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5C878] hover:underline font-medium uppercase tracking-wider text-[11px]"
                >
                  VIEW LOCATION ON GOOGLE MAPS →
                </a>
                <a
                  href={RESORT_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5C878] hover:underline font-medium uppercase tracking-wider text-[11px]"
                >
                  INSTAGRAM {RESORT_CONTACT.instagramHandle} →
                </a>
                <a
                  href={buildWhatsAppUrl(
                    'Khamma Ghani Sri Karni Heritage Resort! 🙏 I would like to connect with the reception & events desk.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E5C878] hover:underline font-medium uppercase tracking-wider text-[11px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WHATSAPP CONCIERGE</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Sri Karni Heritage Resort, Sri Dungargarh (Bikaner). All rights reserved.</p>
            <p>Check-In: 12:00 PM · Check-Out: 11:00 AM · NH-11 Near Hanuman Dhora</p>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          EXACT ROUND GOLD CHAT / WHATSAPP FLOATING BUTTON FROM SCREENSHOTS 1, 2, 3
         ===================================================================== */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-40">
        <a
          href={buildWhatsAppUrl(
            'Khamma Ghani Sri Karni Heritage Resort! 🙏 I am visiting your website and would like to inquire about rooms / wedding lawn booking.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Concierge"
          title="WhatsApp Concierge (+91 99830 72040)"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#AD8B3A] hover:bg-[#96772E] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/60 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </a>
      </div>

      {/* =====================================================================
          TAJ-STYLE "BOOK A STAY" RESERVATION & TARIFF MODAL
         ===================================================================== */}
      {showBookingModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowBookingModal(false)}
        >
          <div
            className="max-w-xl w-full bg-white border border-[#AD8B3A] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 bg-[#FBF9F6] border-b border-[#E5E0D5] flex items-center justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#AD8B3A] font-semibold">
                  SRI KARNI HERITAGE RESORT · NH-11 SRI DUNGARGARH
                </p>
                <h3 className="font-serif-royal text-2xl sm:text-3xl text-[#292826] mt-0.5 uppercase tracking-[0.04em]">
                  Book Your Stay
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="p-2 text-[#6E6A63] hover:text-[#292826] cursor-pointer"
                aria-label="Close booking dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCheckAvailability} className="p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[0.14em] uppercase text-[#6E6A63] font-medium mb-1.5">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-[#AD8B3A]" />
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#D6D2C9] text-sm font-mono-tabular text-[#292826] focus:outline-none focus:border-[#AD8B3A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.14em] uppercase text-[#6E6A63] font-medium mb-1.5">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-[#AD8B3A]" />
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#D6D2C9] text-sm font-mono-tabular text-[#292826] focus:outline-none focus:border-[#AD8B3A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.14em] uppercase text-[#6E6A63] font-medium mb-1.5">
                  <Users className="w-3.5 h-3.5 inline mr-1.5 text-[#AD8B3A]" />
                  Rooms, Suites & Wedding Blocks
                </label>
                <select
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#D6D2C9] text-sm text-[#292826] bg-white focus:outline-none focus:border-[#AD8B3A]"
                >
                  <option value="2 Adults · 1 Room">Heritage Luxury Room (2 Adults · ₹3,800/night)</option>
                  <option value="Family Suite · 4 Guests">Royal Family Suite (Up to 4 Guests · ₹5,800/night)</option>
                  <option value="Group Wing · 10–40 Rooms">Group Residence Wing (10–40 Rooms · Custom Tariff)</option>
                  <option value="Partial Wedding Block · 40–75 Rooms">Partial Wedding Block (40–75 Rooms)</option>
                  <option value="Full Estate Buyout · All 125 Rooms">Full Estate Buyout (All 125 Rooms & Lawns)</option>
                </select>
              </div>

              {availabilityBanner && (
                <div className="p-3.5 bg-[#FBF9F6] border border-[#AD8B3A]/40 text-xs text-[#45443F] flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#AD8B3A] shrink-0 mt-0.5" />
                  <span>{availabilityBanner}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={buildWhatsAppUrl(quickBookingWhatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 bg-[#AD8B3A] hover:bg-[#96772E] text-white text-xs tracking-[0.14em] uppercase font-semibold text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CONFIRM ON WHATSAPP</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setShowBookingModal(false);
                    handleTabSelect('rooms');
                  }}
                  className="w-full sm:w-auto py-3.5 px-6 border border-[#AD8B3A] text-[#AD8B3A] hover:bg-[#FBF9F6] text-xs tracking-[0.14em] uppercase font-semibold transition-colors cursor-pointer"
                >
                  VIEW ROOMS & RATES
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SUITE DETAIL & INSTANT RESERVATION MODAL */}
      <RoomDetailModal
        room={activeModalRoom}
        onClose={() => setActiveModalRoom(null)}
        defaultCheckIn={checkInDate}
        defaultCheckOut={checkOutDate}
        defaultGuests={selectedGuests}
      />

      {/* GALLERY LIGHTBOX MODAL */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#A3853D] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-[#FBF9F6] border-b border-[#E2D9C8]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#A3853D] font-semibold">
                  {lightboxItem.categoryLabel} · {lightboxItem.hindiSubtitle}
                </p>
                <h3 className="font-serif-royal text-2xl font-normal text-[#1C1B19]">{lightboxItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close gallery preview"
                className="p-2 text-[#57544E] hover:text-[#1C1B19] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] w-full bg-[#1C1B19]">
              <ResilientImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4 bg-white flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#45423D] max-w-2xl">{lightboxItem.caption}</p>
              <a
                href={buildWhatsAppUrl(
                  `Khamma Ghani Sri Karni Heritage Resort! 🙏 I am viewing "${lightboxItem.title}" on your website and would like to inquire about booking.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
