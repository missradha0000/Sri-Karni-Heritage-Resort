/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  ArrowUpRight,
  Compass,
  Utensils,
  Sparkles,
  Check,
  X,
  ChevronRight,
} from 'lucide-react';
import {
  ROOMS_DATA,
  GALLERY_ITEMS,
  TESTIMONIALS,
  RESORT_CONTACT,
  RESORT_IMAGES,
  RoomSuite,
  GalleryItem,
  buildWhatsAppUrl,
} from './data/resortData';
import { ResilientImage } from './components/ResilientImage';
import { RoomDetailModal } from './components/RoomDetailModal';
import { WeddingPlannerSection } from './components/WeddingPlannerSection';

export default function App() {
  // Quick-Booking Bar State
  const [checkInDate, setCheckInDate] = useState('2026-11-24');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-26');
  const [selectedGuests, setSelectedGuests] = useState('2 Adults');
  const [inquiryPurpose, setInquiryPurpose] = useState('Royal Suite / Family Stay');
  const [availabilityBanner, setAvailabilityBanner] = useState<string | null>(null);

  // Suite Filtering & Modal State
  const [roomCategoryFilter, setRoomCategoryFilter] = useState<'all' | 'suites' | 'haveli' | 'family' | 'transit'>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<RoomSuite | null>(null);

  // Gallery Filtering & Lightbox State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'architecture' | 'suites' | 'weddings' | 'dining'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Filtered Lists
  const filteredRooms =
    roomCategoryFilter === 'all'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((room) => room.category === roomCategoryFilter);

  const filteredGallery =
    galleryFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  const quickBookingWhatsAppText = `Namaste Sri Karni Heritage Resort! 🙏
I would like to check availability & royal tariff:

• Purpose: ${inquiryPurpose}
• Check-In: ${checkInDate}
• Check-Out: ${checkOutDate}
• Guests / Scale: ${selectedGuests}

Please share available rooms and package details.`;

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setAvailabilityBanner(
      `Suites & Event Lawns are available for ${checkInDate} to ${checkOutDate} (${selectedGuests}). Select a suite below or message our desk on WhatsApp for instant confirmation.`
    );
    const suitesEl = document.getElementById('suites');
    if (suitesEl) {
      suitesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#231710]">
      {/* 3-Zone Top Bar Contract: [Brand title, one line] — [5 single-line nav links] — [1 primary action] */}
      <header className="sticky top-0 z-40 h-16 flex items-center justify-between gap-8 px-4 sm:px-8 lg:px-12 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#DECBB3]">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif-royal text-xl sm:text-2xl font-bold tracking-tight text-[#231710] whitespace-nowrap shrink-0"
        >
          Sri Karni Heritage
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C493E]">
          <a
            href="#suites"
            className="hover:text-[#231710] hover:underline underline-offset-4 decoration-[#B8860B] transition-colors whitespace-nowrap shrink-0"
          >
            Suites & Rooms
          </a>
          <a
            href="#weddings"
            className="hover:text-[#231710] hover:underline underline-offset-4 decoration-[#B8860B] transition-colors whitespace-nowrap shrink-0"
          >
            Weddings & Events
          </a>
          <a
            href="#dining"
            className="hover:text-[#231710] hover:underline underline-offset-4 decoration-[#B8860B] transition-colors whitespace-nowrap shrink-0"
          >
            Royal Dining
          </a>
          <a
            href="#gallery"
            className="hover:text-[#231710] hover:underline underline-offset-4 decoration-[#B8860B] transition-colors whitespace-nowrap shrink-0"
          >
            Gallery
          </a>
          <a
            href="#location"
            className="hover:text-[#231710] hover:underline underline-offset-4 decoration-[#B8860B] transition-colors whitespace-nowrap shrink-0"
          >
            Location
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <a
            href={buildWhatsAppUrl(quickBookingWhatsAppText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#231710] hover:bg-[#3A271C] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-[#180F0A] text-[#FAF6F0] overflow-hidden">
          {/* 16:9 Architectural Hero Backdrop */}
          <div className="relative min-h-[580px] lg:min-h-[660px] w-full flex items-end">
            <div className="absolute inset-0">
              <ResilientImage
                src={RESORT_IMAGES.heroPalace}
                alt="Sri Karni Heritage Resort illuminated Dulmera sandstone palace facade and courtyard reflection pool at twilight"
                priority
                className="w-full h-full object-cover object-center"
              />
              {/* Measured Contrast Scrim for 4.5:1+ legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#160E09] via-[#160E09]/65 to-[#160E09]/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#160E09]/85 via-[#160E09]/40 to-transparent" />
            </div>

            {/* Hero Editorial Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pb-16">
              <div className="max-w-3xl space-y-5">
                {/* Unboxed Regional & Heritage Kicker */}
                <p className="text-xs sm:text-sm tracking-wide text-[#E6C674] font-medium">
                  NH-11 Jaipur–Bikaner Highway · Sri Dungargarh, Bikaner · पधारो म्हारे देश
                </p>

                <h1
                  className="font-serif-royal font-semibold text-[#FAF6F0] tracking-wide leading-[1.08]"
                  style={{
                    fontSize: 'clamp(2.35rem, 4.3vw, 3.85rem)',
                    textWrap: 'balance',
                  }}
                >
                  Timeless Bikaneri Sandstone Grandeur & Royal Marwari Hospitality
                </h1>

                <p className="text-base sm:text-lg text-[#E5D9C8] leading-relaxed max-w-2xl">
                  Set amidst serene desert dunes near Hanuman Dhora in Sri Dungargarh, Sri Karni Heritage Resort unites
                  hand-carved red sandstone architecture, <span className="font-mono-tabular text-white">125</span>{' '}
                  regal suites and rooms, and grand illuminated marriage lawns on a single palatial estate.
                </p>

                {/* Single Dominant Focal CTA + Secondary Anchor */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppUrl(
                      'Namaste Sri Karni Heritage Resort! 🙏 I would like to inquire about booking a royal stay / destination wedding at your resort.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#B8860B] hover:bg-[#9E7208] text-[#FAF6F0] text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Direct WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="#weddings"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 text-[#FAF6F0] border border-[#E6C674]/40 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 backdrop-blur-sm"
                  >
                    <span>Explore Royal Weddings & Lawns</span>
                    <ChevronRight className="w-4 h-4 text-[#E6C674]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FULL-WIDTH 4-COLUMN ROYAL BOOKING & AVAILABILITY STRIP */}
          <div className="relative z-20 bg-[#231710] border-t border-[#3D291D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <form
                onSubmit={handleCheckAvailability}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
              >
                <div>
                  <label className="block text-xs text-[#D4AF37] mb-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5" />
                    Check-In / Event Date
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-mono-tabular bg-[#180F0A] border border-[#4A3323] rounded-lg text-[#FAF6F0] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#D4AF37] mb-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5" />
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-mono-tabular bg-[#180F0A] border border-[#4A3323] rounded-lg text-[#FAF6F0] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#D4AF37] mb-1.5 font-medium">Reservation Type</label>
                  <select
                    value={inquiryPurpose}
                    onChange={(e) => setInquiryPurpose(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#180F0A] border border-[#4A3323] rounded-lg text-[#FAF6F0] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Royal Suite / Family Stay">Royal Suite / Family Stay</option>
                    <option value="Destination Wedding (Lawn + Rooms)">Destination Wedding (Lawn + Rooms)</option>
                    <option value="Marriage Garden & Reception">Marriage Garden & Reception</option>
                    <option value="Group Wing (10–40 Rooms)">Group Wing (10–40 Rooms)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#D4AF37] mb-1.5 font-medium">
                    <Users className="w-3.5 h-3.5 inline mr-1.5" />
                    Guests / Scale
                  </label>
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#180F0A] border border-[#4A3323] rounded-lg text-[#FAF6F0] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                    <option value="Family Group (8–15 Guests)">Family Group (8–15 Guests)</option>
                    <option value="Wedding Barat (200–500 Guests)">Wedding Barat (200–500 Guests)</option>
                    <option value="Grand Celebration (800–1,500+ Guests)">Grand Celebration (800–1,500+ Guests)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 bg-[#B8860B] hover:bg-[#9E7208] text-[#FAF6F0] text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Check Availability
                  </button>
                </div>
              </form>

              {availabilityBanner && (
                <div className="mt-4 p-3.5 bg-[#180F0A] border border-[#B8860B]/50 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#FAF6F0]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{availabilityBanner}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={buildWhatsAppUrl(quickBookingWhatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#E6C674] hover:underline whitespace-nowrap"
                    >
                      Confirm Immediately on WhatsApp →
                    </a>
                    <button
                      type="button"
                      onClick={() => setAvailabilityBanner(null)}
                      className="text-[#C9B8A6] hover:text-white cursor-pointer"
                      aria-label="Dismiss availability notification"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ARCHITECTURAL HERITAGE & ESTATE PILLARS */}
        <section className="py-16 sm:py-24 border-b border-[#E2D5C3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm text-[#8C6200] font-medium mb-2">
                  The Jewel of Sri Dungargarh · श्री करणी हेरिटेज रिसॉर्ट
                </p>
                <h2
                  className="font-serif-royal text-3xl sm:text-5xl font-semibold text-[#231710] leading-[1.12]"
                  style={{ textWrap: 'balance' }}
                >
                  Crafted in the Grand Tradition of Rajasthan’s Royal Desert Palaces
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#5C493E] leading-relaxed">
                  Positioned along National Highway 11 near Hanuman Dhora, our estate spares your guests the congestion
                  of narrow city streets while surrounding them in authentic Bikaneri sandstone jharokhas, tranquil
                  courtyard waters, and five-star Marwari warmth.
                </p>
              </div>
            </div>

            {/* 4 Numbered Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-[#F3ECE1] rounded-xl border border-[#DECBB3] flex flex-col justify-between">
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#8C6200] block mb-2">
                    01. Architectural Lineage
                  </span>
                  <h3 className="font-serif-royal text-2xl font-semibold text-[#231710] mb-2">
                    Carved Dulmera Sandstone
                  </h3>
                  <p className="text-sm text-[#5C493E] leading-relaxed">
                    Hand-chiselled red and golden sandstone arches, chhatri cupolas, and pierced jaali corridors built
                    by master artisans of Bikaner.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DECBB3] text-xs font-mono-tabular text-[#231710] font-medium">
                  100% Authentic Heritage Masonry
                </div>
              </div>

              <div className="p-6 bg-[#F3ECE1] rounded-xl border border-[#DECBB3] flex flex-col justify-between">
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#8C6200] block mb-2">
                    02. Residential Scale
                  </span>
                  <h3 className="font-serif-royal text-2xl font-semibold text-[#231710] mb-2">
                    125 Royal Rooms & Suites
                  </h3>
                  <p className="text-sm text-[#5C493E] leading-relaxed">
                    From Maharaja four-poster suites to interconnected group wings capable of housing an entire wedding
                    barat and family entourage under one roof.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DECBB3] text-xs font-mono-tabular text-[#231710] font-medium">
                  Up to 350+ Overnight Wedding Guests
                </div>
              </div>

              <div className="p-6 bg-[#F3ECE1] rounded-xl border border-[#DECBB3] flex flex-col justify-between">
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#8C6200] block mb-2">
                    03. Celebration Lawns
                  </span>
                  <h3 className="font-serif-royal text-2xl font-semibold text-[#231710] mb-2">
                    48,000 sq. ft. Marriage Garden
                  </h3>
                  <p className="text-sm text-[#5C493E] leading-relaxed">
                    Expansive manicured lawns with the illuminated palace facade as your varmala backdrop, paired with
                    climate-controlled indoor banquet halls.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DECBB3] text-xs font-mono-tabular text-[#231710] font-medium">
                  1,600+ Guest Reception Capacity
                </div>
              </div>

              <div className="p-6 bg-[#F3ECE1] rounded-xl border border-[#DECBB3] flex flex-col justify-between">
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#8C6200] block mb-2">
                    04. Culinary Manuhar
                  </span>
                  <h3 className="font-serif-royal text-2xl font-semibold text-[#231710] mb-2">
                    Royal Vegetarian Dining
                  </h3>
                  <p className="text-sm text-[#5C493E] leading-relaxed">
                    Celebrated along the Jaipur–Bikaner corridor for pure vegetarian Marwari royal thalis, Jain menus,
                    and multi-cuisine wedding banquets.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DECBB3] text-xs font-mono-tabular text-[#231710] font-medium">
                  24-Hour Hospitality & Highway Parking
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUITES & ROOMS GALLERY SECTION */}
        <section id="suites" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs sm:text-sm text-[#8C6200] font-medium mb-2">
                  Royal Chambers & Sanctuary · शाही सुइट्स और रूम्स
                </p>
                <h2
                  className="font-serif-royal text-3xl sm:text-5xl font-semibold text-[#231710]"
                  style={{ textWrap: 'balance' }}
                >
                  Heritage Suites & Haveli Residences
                </h2>
              </div>

              {/* Interactive Room Category Filter Controls */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EFE6D8] rounded-xl border border-[#DECBB3] w-fit">
                {[
                  { id: 'all', label: 'All Accommodations' },
                  { id: 'suites', label: 'Royal Suites' },
                  { id: 'haveli', label: 'Haveli Rooms' },
                  { id: 'family', label: 'Family & Group Wings' },
                  { id: 'transit', label: 'NH-11 Deluxe' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setRoomCategoryFilter(tab.id as typeof roomCategoryFilter)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      roomCategoryFilter === tab.id
                        ? 'bg-[#231710] text-[#FAF6F0] shadow-sm'
                        : 'text-[#5C493E] hover:text-[#231710]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredRooms.map((room) => {
                const roomWhatsAppMsg = `Namaste Sri Karni Heritage Resort! 🙏 I want to inquire about booking the *${room.name}* (${room.hindiTitle}) for Check-In: ${checkInDate}, Check-Out: ${checkOutDate}. Please share availability.`;

                return (
                  <article
                    key={room.id}
                    className="group bg-[#F3ECE1] rounded-xl border border-[#DECBB3] overflow-hidden flex flex-col justify-between transition-colors hover:border-[#B8860B]"
                  >
                    <div>
                      {/* 4:3 Room Image */}
                      <div
                        onClick={() => setActiveModalRoom(room)}
                        className="relative aspect-[4/3] w-full overflow-hidden bg-[#231710] cursor-pointer"
                      >
                        <ResilientImage
                          src={room.image}
                          alt={`${room.name} interior at Sri Karni Heritage Resort`}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#180F0A]/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-[#FAF6F0]">
                          <div>
                            <span className="text-xs text-[#E6C674] block">{room.hindiTitle}</span>
                            <span className="text-xs text-[#E5D9C8]">{room.view}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] text-[#E5D9C8] block">Tariff from</span>
                            <span className="font-mono-tabular text-xl font-bold text-[#FAF6F0]">
                              ₹{room.pricePerNight.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-[#E5D9C8]"> / night</span>
                          </div>
                        </div>
                      </div>

                      {/* Room Body */}
                      <div className="p-6 sm:p-7 space-y-4">
                        {/* Unboxed Metadata with · separators */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E5A4F]">
                          <span className="font-medium text-[#8C6200]">{room.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono-tabular font-medium text-[#231710]">{room.areaSqFt} sq. ft.</span>
                          <span aria-hidden="true">·</span>
                          <span>{room.maxGuests}</span>
                          <span aria-hidden="true">·</span>
                          <span>{room.bedType}</span>
                        </div>

                        <h3 className="font-serif-royal text-2xl sm:text-3xl font-semibold text-[#231710]">
                          <button
                            type="button"
                            onClick={() => setActiveModalRoom(room)}
                            className="text-left hover:text-[#8C6200] transition-colors cursor-pointer"
                          >
                            {room.name}
                          </button>
                        </h3>

                        <p className="text-sm text-[#5C493E] leading-relaxed">{room.shortDescription}</p>

                        <div className="pt-2 text-xs text-[#6E5A4F]">
                          Inclusions: {room.inclusions.join(' · ')}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="px-6 sm:px-7 py-4 bg-[#EAE0D0] border-t border-[#DECBB3] flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveModalRoom(room)}
                        className="px-4 py-2 bg-[#231710] hover:bg-[#3A271C] text-[#FAF6F0] text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        Inspect Suite & Book
                      </button>

                      <a
                        href={buildWhatsAppUrl(roomWhatsAppMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1F5E3B] hover:text-[#144027] hover:underline whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* MARRIAGE GARDEN & ROYAL EVENTS SECTION */}
        <WeddingPlannerSection />

        {/* ROYAL DARBAR DINING & POOLSIDE HOSPITALITY SECTION */}
        <section id="dining" className="py-20 sm:py-28 border-b border-[#E2D5C3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-[#8C6200] font-medium">
                    Royal Darbar & Courtyard Dining · शाही मारवाड़ी मनुहार
                  </p>
                  <h2
                    className="font-serif-royal text-3xl sm:text-5xl font-semibold text-[#231710] leading-[1.12]"
                    style={{ textWrap: 'balance' }}
                  >
                    Authentic Bikaneri & Multi-Cuisine Feasts Beside the Lantern-Lit Pool
                  </h2>
                  <p className="text-sm sm:text-base text-[#5C493E] leading-relaxed">
                    In Rajasthan, hospitality is measured by the warmth of the <em>Manuhar</em>. Whether you are
                    stopping along NH-11 with family for a royal vegetarian thali or hosting a 1,200-guest wedding
                    banquet, our master Maharaj chefs prepare timeless delicacies using pure desi ghee and hand-ground
                    Bikaneri spices.
                  </p>

                  <div className="pt-4 space-y-3 border-t border-[#E2D5C3]">
                    <div className="flex items-start gap-3">
                      <Utensils className="w-4 h-4 text-[#B8860B] shrink-0 mt-1" />
                      <div>
                        <h3 className="text-sm font-semibold text-[#231710]">
                          The Royal Marwari Thali & Desert Specialties
                        </h3>
                        <p className="text-xs text-[#5C493E] mt-0.5">
                          Panchmel Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, Bikaneri Bhujia Parathas, and hot
                          Kesar Jalebi served in traditional brass and silver-plated ware.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-1" />
                      <div>
                        <h3 className="text-sm font-semibold text-[#231710]">
                          Pure Vegetarian & Dedicated Jain Kitchen Capability
                        </h3>
                        <p className="text-xs text-[#5C493E] mt-0.5">
                          Separate preparation counters for strict Jain & Marwari wedding feasts alongside live Italian,
                          Continental, Oriental, and Chaat pavilions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppUrl(
                      'Namaste Sri Karni Heritage Resort! 🙏 I would like to reserve a table / inquire about Royal Darbar Dining and Catering menus.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#231710] hover:bg-[#3A271C] text-[#FAF6F0] text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                    <span>Reserve Royal Dining / Catering Menu</span>
                  </a>
                  <span className="text-xs text-[#6E5A4F]">
                    Open Daily · <span className="font-mono-tabular text-[#231710]">07:00 AM – 11:30 PM</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[360px] rounded-xl overflow-hidden border border-[#DECBB3] bg-[#231710]">
                  <ResilientImage
                    src={RESORT_IMAGES.royalDining}
                    alt="Royal Darbar dining table with silver thali beside the sandstone courtyard pool at Sri Karni Heritage Resort"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180F0A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-[#FAF6F0]">
                    <p className="text-xs text-[#E6C674]">Courtyard Cloister · Poolside Candlelight</p>
                    <p className="font-serif-royal text-2xl font-semibold">
                      Evening Thali & Folk Music by the Reflection Pool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL GALLERY & LIGHTBOX SECTION */}
        <section id="gallery" className="py-20 sm:py-28 border-b border-[#E2D5C3] bg-[#F3ECE1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs sm:text-sm text-[#8C6200] font-medium mb-2">
                  Architectural Chronicle · रॉयल फोटो गैलरी
                </p>
                <h2
                  className="font-serif-royal text-3xl sm:text-5xl font-semibold text-[#231710]"
                  style={{ textWrap: 'balance' }}
                >
                  Glimpses of the Sandstone Estate
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF6F0] rounded-xl border border-[#DECBB3] w-fit">
                {[
                  { id: 'all', label: 'All Views' },
                  { id: 'architecture', label: 'Palace Facade' },
                  { id: 'weddings', label: 'Royal Weddings' },
                  { id: 'suites', label: 'Suites & Havelis' },
                  { id: 'dining', label: 'Dining & Pool' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setGalleryFilter(tab.id as typeof galleryFilter)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      galleryFilter === tab.id
                        ? 'bg-[#231710] text-[#FAF6F0] shadow-sm'
                        : 'text-[#5C493E] hover:text-[#231710]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Asymmetric Bento Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {filteredGallery.map((item, idx) => {
                const isWide = item.aspect === 'wide' && galleryFilter === 'all' && idx < 2;
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxItem(item)}
                    className={`${
                      isWide ? 'md:col-span-6' : 'md:col-span-4'
                    } group relative rounded-xl overflow-hidden border border-[#DECBB3] bg-[#231710] cursor-pointer flex flex-col justify-between`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <ResilientImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#180F0A]/90 via-[#180F0A]/20 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 text-[#FAF6F0]">
                        <p className="text-xs text-[#E6C674] mb-0.5">
                          {item.categoryLabel} · {item.locationTag}
                        </p>
                        <h3 className="font-serif-royal text-xl sm:text-2xl font-semibold text-[#FAF6F0]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ATTRIBUTABLE SOCIAL PROOF & GUEST CHRONICLES */}
        <section className="py-20 sm:py-24 border-b border-[#E2D5C3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-xs sm:text-sm text-[#8C6200] font-medium mb-2">
                Royal Guest Chronicles · अतिथि अनुभव
              </p>
              <h2
                className="font-serif-royal text-3xl sm:text-4xl font-semibold text-[#231710]"
                style={{ textWrap: 'balance' }}
              >
                Trusted by Wedding Families & Discerning Travelers Across India
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-6 sm:p-7 bg-[#F3ECE1] rounded-xl border border-[#DECBB3] flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="text-xs text-[#8C6200] font-mono-tabular font-medium">
                      {t.outcomeMetric}
                    </div>
                    <p className="text-sm text-[#3D2B20] leading-relaxed">“{t.quote}”</p>
                  </div>

                  <div className="pt-4 border-t border-[#DECBB3]">
                    <p className="font-serif-royal text-lg font-semibold text-[#231710]">{t.guestName}</p>
                    <p className="text-xs text-[#6E5A4F]">
                      {t.roleOrFamily} · {t.originCity}
                    </p>
                    <p className="text-[11px] text-[#8C6200] mt-1">
                      {t.eventOrStay} · {t.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION, NH-11 DIRECTIONS & DIRECT GOOGLE MAPS SECTION */}
        <section id="location" className="py-20 sm:py-28 bg-[#FAF6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left: Location & Connectivity Details */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-[#8C6200] font-medium">
                    Estate Location & Highway Access · स्थान और मार्ग
                  </p>
                  <h2
                    className="font-serif-royal text-3xl sm:text-5xl font-semibold text-[#231710] leading-[1.12]"
                    style={{ textWrap: 'balance' }}
                  >
                    Commanding Presence on the Jaipur–Bikaner National Highway 11
                  </h2>
                  <p className="text-sm sm:text-base text-[#5C493E] leading-relaxed">
                    Located directly on NH-11 near the sacred Hanuman Dhora temple in Sri Dungargarh, Sri Karni Heritage
                    Resort offers effortless highway access for wedding convoys, luxury coaches, and road travelers
                    between Jaipur, Sikar, Salasar Balaji, and Bikaner.
                  </p>
                </div>

                {/* Tabular Distance Matrix */}
                <div className="bg-[#F3ECE1] rounded-xl border border-[#DECBB3] p-6 space-y-4">
                  <h3 className="font-serif-royal text-xl font-semibold text-[#231710]">
                    Key Distances & Travel Landmarks
                  </h3>
                  <div className="divide-y divide-[#DECBB3] text-xs sm:text-sm">
                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-[#3D2B20]">Hanuman Dhora Temple, Sri Dungargarh</span>
                      <span className="font-mono-tabular font-semibold text-[#231710]">0.8 km · 2 mins</span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-[#3D2B20]">Sri Dungargarh Railway Station</span>
                      <span className="font-mono-tabular font-semibold text-[#231710]">4.2 km · 7 mins</span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-[#3D2B20]">Bikaner City & Junagarh Fort</span>
                      <span className="font-mono-tabular font-semibold text-[#231710]">74 km · 60 mins via NH-11</span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-[#3D2B20]">Nal Civil Airport (BKB), Bikaner</span>
                      <span className="font-mono-tabular font-semibold text-[#231710]">88 km · 75 mins</span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-[#3D2B20]">Jaipur International Airport (JAI)</span>
                      <span className="font-mono-tabular font-semibold text-[#231710]">260 km · 3.5 hrs via NH-11</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact & Google Maps Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={RESORT_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#231710] hover:bg-[#3A271C] text-[#FAF6F0] text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Compass className="w-4 h-4 text-[#D4AF37]" />
                    <span>Open Verified Location & Photos on Google Maps</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </a>

                  <a
                    href={buildWhatsAppUrl(
                      'Namaste Sri Karni Heritage Resort! 🙏 Please share the live Google Maps location pin and directions to the resort.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Request Live Location on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right: Architectural Estate Map Card */}
              <div className="lg:col-span-6">
                <div className="h-full bg-[#231710] text-[#FAF6F0] rounded-xl border border-[#3D291D] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs text-[#D4AF37] block">{RESORT_CONTACT.coordinatesLabel}</span>
                        <h3 className="font-serif-royal text-2xl sm:text-3xl font-semibold text-[#FAF6F0] mt-1">
                          {RESORT_CONTACT.name}
                        </h3>
                      </div>
                      <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                    </div>

                    <p className="text-sm text-[#D8C9B8] leading-relaxed">
                      {RESORT_CONTACT.addressLine1}, {RESORT_CONTACT.addressLine2}
                    </p>

                    <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#4A3323]">
                      <ResilientImage
                        src={RESORT_IMAGES.heroPalace}
                        alt="Sri Karni Heritage Resort aerial view on NH-11 Sri Dungargarh"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#180F0A]/90 via-[#180F0A]/30 to-transparent flex flex-col justify-end p-5">
                        <p className="text-xs text-[#E6C674] font-medium">
                          Google Maps Verified Heritage Property · NH-11 Highway Frontage
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <span className="text-xs text-[#FAF6F0]">
                            Near Hanuman Dhora, Sri Dungargarh, Bikaner 331803
                          </span>
                          <a
                            href={RESORT_CONTACT.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-[#B8860B] hover:bg-[#9E7208] text-[#FAF6F0] text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0"
                          >
                            View on Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Desk Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3D291D] text-xs">
                    <div className="space-y-1">
                      <span className="text-[#C9B8A6] block">24/7 Reservations & Wedding Desk</span>
                      <a
                        href={`tel:+${RESORT_CONTACT.phoneRaw}`}
                        className="inline-flex items-center gap-2 font-mono-tabular text-sm font-semibold text-[#FAF6F0] hover:text-[#D4AF37]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {RESORT_CONTACT.phoneDisplay}
                      </a>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[#C9B8A6] block">Official Concierge Email</span>
                      <a
                        href={`mailto:${RESORT_CONTACT.email}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF6F0] hover:text-[#D4AF37] break-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        {RESORT_CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET HERITAGE FOOTER */}
      <footer className="bg-[#180F0A] text-[#C9B8A6] border-t border-[#3D291D] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#2E1E14]">
            <div className="md:col-span-5 space-y-3">
              <p className="font-serif-royal text-2xl font-bold text-[#FAF6F0]">{RESORT_CONTACT.name}</p>
              <p className="text-xs text-[#D4AF37]">{RESORT_CONTACT.hindiTagline}</p>
              <p className="text-xs text-[#A89684] max-w-sm leading-relaxed">
                {RESORT_CONTACT.addressLine1}, {RESORT_CONTACT.addressLine2}
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs">
              <p className="font-semibold text-[#FAF6F0] uppercase tracking-wider mb-3">Estate Navigation</p>
              <div className="grid grid-cols-2 gap-2">
                <a href="#suites" className="hover:text-[#FAF6F0] transition-colors">
                  Suites & Rooms
                </a>
                <a href="#weddings" className="hover:text-[#FAF6F0] transition-colors">
                  Marriage Lawns
                </a>
                <a href="#dining" className="hover:text-[#FAF6F0] transition-colors">
                  Royal Darbar Dining
                </a>
                <a href="#gallery" className="hover:text-[#FAF6F0] transition-colors">
                  Photo Gallery
                </a>
                <a href="#location" className="hover:text-[#FAF6F0] transition-colors">
                  NH-11 Location
                </a>
                <a
                  href={RESORT_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF6F0] transition-colors"
                >
                  Google Maps
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3 text-xs">
              <p className="font-semibold text-[#FAF6F0] uppercase tracking-wider">Direct Reservations</p>
              <p className="font-mono-tabular text-sm text-[#FAF6F0]">{RESORT_CONTACT.phoneDisplay}</p>
              <p className="text-[#A89684]">{RESORT_CONTACT.email}</p>
              <div className="pt-1">
                <a
                  href={buildWhatsAppUrl(
                    'Namaste Sri Karni Heritage Resort! 🙏 I would like to connect with the reservations desk.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E6C674] hover:underline font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat with Front Desk on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
            <p>© {new Date().getFullYear()} Sri Karni Heritage Resort, Sri Dungargarh (Bikaner). All rights reserved.</p>
            <p>Check-In: 12:00 PM · Check-Out: 11:00 AM · 24-Hour Highway Reception</p>
          </div>
        </div>
      </footer>

      {/* COMPACT FLOATING WHATSAPP CONCIERGE BUTTON (Respects 15% Mobile Sticky Cap) */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={buildWhatsAppUrl(
            'Namaste Sri Karni Heritage Resort! 🙏 I am visiting your website and would like to inquire about rooms / marriage lawn booking.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Inquiry"
          className="inline-flex items-center gap-2.5 px-4 py-3 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xl border border-[#D4AF37]/40 transition-transform hover:scale-[1.02] whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#180F0A]/90 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#231710] border border-[#4A3323] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#3D291D]">
              <div>
                <p className="text-xs text-[#D4AF37]">
                  {lightboxItem.categoryLabel} · {lightboxItem.hindiSubtitle}
                </p>
                <h3 className="font-serif-royal text-2xl font-semibold text-[#FAF6F0]">{lightboxItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close gallery preview"
                className="p-2 text-[#C9B8A6] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] w-full bg-[#180F0A]">
              <ResilientImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4 bg-[#180F0A] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#E5D9C8] max-w-2xl">{lightboxItem.caption}</p>
              <a
                href={buildWhatsAppUrl(
                  `Namaste Sri Karni Heritage Resort! 🙏 I am admiring "${lightboxItem.title}" on your website and would like to inquire about booking.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
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
