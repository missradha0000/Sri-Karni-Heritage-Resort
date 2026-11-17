import React, { useState } from 'react';
import {
  Clock,
  Utensils,
  Thermometer,
  BedDouble,
  Flower2,
  MapPin,
  Mail,
  Phone,
  Download,
  Briefcase,
  Plus,
  Minus,
  ChevronRight,
  Maximize2,
  X,
  Check,
  MessageCircle,
} from 'lucide-react';
import {
  RESORT_CONTACT,
  TAJ_FACILITIES,
  PILGRIMAGE_DISTANCES,
  buildWhatsAppUrl,
} from '../data/resortData';

export const TajHotelInformation: React.FC = () => {
  const [activeDocModal, setActiveDocModal] = useState<'factsheet' | 'classification' | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white text-[#292826]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Taj Two-Line Serif Heading: ───── HOTEL / INFORMATION */}
        <div className="mb-14">
          <div className="flex items-center gap-6">
            <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
            <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
              HOTEL
            </span>
          </div>
          <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
            INFORMATION
          </h2>
        </div>

        {/* Exact 3-Column Grid with Vertical and Horizontal Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0">
          {/* COLUMN 1 */}
          <div className="md:pr-8 lg:pr-10 md:border-r border-[#E6E3DD] flex flex-col justify-between">
            <div className="pb-6 border-b border-[#E6E3DD]">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                CHECK IN - CHECK OUT
              </p>
              <div className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292826] font-medium leading-relaxed">
                <Clock className="w-4 h-4 text-[#4A4843] shrink-0 mt-1" />
                <div>
                  <p>Check-in from 12:00 pm</p>
                  <p>Check-out until 11:00 am</p>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-[#E6E3DD]">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                DINING
              </p>
              <div className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292826] font-medium leading-relaxed">
                <Utensils className="w-4 h-4 text-[#4A4843] shrink-0 mt-1" />
                <p>
                  Multi-Cuisine Restaurant (Rajasthani & North Indian), Two Indoor Pichwai Banquet Halls & Poolside
                  Dining
                </p>
              </div>
            </div>

            <div className="py-6 border-b border-[#E6E3DD] flex-1">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                CURRENT TEMPERATURE
              </p>
              <div className="flex items-center gap-3 text-sm sm:text-[15px] text-[#292826] font-medium font-mono-tabular">
                <Thermometer className="w-4 h-4 text-[#4A4843] shrink-0" />
                <span>{RESORT_CONTACT.temperature}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="md:px-8 lg:px-10 md:border-r border-[#E6E3DD] flex flex-col justify-between">
            <div className="pb-6 border-b border-[#E6E3DD]">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                ROOMS & SUITES
              </p>
              <div className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292826] font-medium leading-relaxed">
                <BedDouble className="w-4 h-4 text-[#4A4843] shrink-0 mt-1" />
                <p>
                  {RESORT_CONTACT.totalKeys} air-conditioned rooms and suites ({RESORT_CONTACT.roomsCount} Heritage
                  Luxury Rooms & {RESORT_CONTACT.suitesCount} Royal Family Suites)
                </p>
              </div>
            </div>

            <div className="py-6 border-b border-[#E6E3DD]">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                WELLNESS & LEISURE
              </p>
              <div className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292826] font-medium leading-relaxed">
                <Flower2 className="w-4 h-4 text-[#4A4843] shrink-0 mt-1" />
                <p>
                  Outdoor Swimming Pool with Rain Dance Courtyard, Heritage Billiards & Snooker Salon, and Grand
                  Petal-Chandelier Marble Lounge.
                </p>
              </div>
            </div>

            <div className="py-6 border-b border-[#E6E3DD] flex-1">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                HOTEL ESSENTIALS
              </p>
              <p className="text-sm sm:text-[15px] text-[#292826] font-medium leading-relaxed">
                {RESORT_CONTACT.gstinOrCode}
              </p>
              <p className="text-xs text-[#6E6A63] mt-1">
                Founded in {RESORT_CONTACT.establishedYear} by {RESORT_CONTACT.founders}
              </p>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="md:pl-8 lg:pl-10 flex flex-col justify-between">
            <div className="pb-6 border-b border-[#E6E3DD]">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#8C8984] mb-3 font-medium">
                CONTACT
              </p>
              <div className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292826] font-medium leading-relaxed">
                <MapPin className="w-4 h-4 text-[#292826] shrink-0 mt-1" />
                <div>
                  <p>
                    {RESORT_CONTACT.addressLine1}, {RESORT_CONTACT.addressLine2}
                  </p>
                  <p className="text-xs text-[#6E6A63] font-mono-tabular mt-1">
                    GPS: {RESORT_CONTACT.coordinatesLabel}
                  </p>
                  <a
                    href={RESORT_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-xs tracking-[0.12em] uppercase text-[#A3853D] underline underline-offset-4 hover:text-[#7D6428] font-medium"
                  >
                    VIEW MAP
                  </a>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-[#E6E3DD]">
              <div className="flex items-center gap-3 text-sm sm:text-[15px] text-[#292826] font-medium break-all">
                <Mail className="w-4 h-4 text-[#292826] shrink-0" />
                <a href={`mailto:${RESORT_CONTACT.email}`} className="hover:text-[#A3853D] transition-colors">
                  {RESORT_CONTACT.email}
                </a>
              </div>
            </div>

            <div className="py-6 border-b border-[#E6E3DD] flex-1">
              <div className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292826] font-medium font-mono-tabular">
                <Phone className="w-4 h-4 text-[#292826] shrink-0 mt-1" />
                <div className="space-y-1">
                  <a href={`tel:+${RESORT_CONTACT.phoneRaw}`} className="block hover:text-[#A3853D] transition-colors">
                    {RESORT_CONTACT.phoneDisplay}
                  </a>
                  <a
                    href={RESORT_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs font-sans text-[#6E6A63] hover:text-[#A3853D] transition-colors"
                  >
                    Instagram: {RESORT_CONTACT.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Centered Gold Action Links: DOWNLOAD FACTSHEET & HOTEL CLASSIFICATION */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <button
            type="button"
            onClick={() => setActiveDocModal('factsheet')}
            className="inline-flex items-center gap-2.5 text-xs tracking-[0.14em] uppercase text-[#A3853D] hover:text-[#7D6428] font-medium cursor-pointer group"
          >
            <Download className="w-4 h-4 text-[#A3853D]" />
            <span className="underline underline-offset-4">DOWNLOAD FACTSHEET</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveDocModal('classification')}
            className="inline-flex items-center gap-2.5 text-xs tracking-[0.14em] uppercase text-[#A3853D] hover:text-[#7D6428] font-medium cursor-pointer group"
          >
            <Download className="w-4 h-4 text-[#A3853D]" />
            <span className="underline underline-offset-4">HOTEL CLASSIFICATION</span>
          </button>
        </div>
      </div>

      {/* Factsheet / Classification Modal */}
      {activeDocModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
          onClick={() => setActiveDocModal(null)}
        >
          <div
            className="max-w-lg w-full bg-white border border-[#A3853D] p-6 sm:p-8 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E6E3DD] pb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#A3853D] font-semibold">
                  Official Property Dossier · Est. 2019
                </p>
                <h3 className="font-serif-royal text-2xl text-[#292826] mt-0.5">
                  {activeDocModal === 'factsheet'
                    ? 'Sri Karni Heritage Resort — Estate Factsheet'
                    : 'Heritage Lineage & Founders Charter'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveDocModal(null)}
                className="p-1.5 text-[#6E6A63] hover:text-[#292826] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#4A4843]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3853D] shrink-0 mt-0.5" />
                <span>
                  <strong>Founders & Lineage:</strong> {RESORT_CONTACT.founders} ({RESORT_CONTACT.deityDedication},
                  Inaugurated in {RESORT_CONTACT.establishedYear})
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3853D] shrink-0 mt-0.5" />
                <span>
                  <strong>Accommodations:</strong> 125 Air-Conditioned Rooms & Suites (Heritage Luxury Rooms, Royal
                  Family Suites & Contiguous 10–125 Room Wedding Wings)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3853D] shrink-0 mt-0.5" />
                <span>
                  <strong>Celebration Venues:</strong> Grand Illuminated Front Lawn (500–1,500+ guests), Sandstone
                  Jharokha Arcades & Portico, Two Indoor AC Banquet & Pichwai Halls, Poolside Courtyard & Rain Dance
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3853D] shrink-0 mt-0.5" />
                <span>
                  <strong>Dining & Salons:</strong> Multi-Cuisine Restaurant (Peacock & Baradari Art, Signature Navratan
                  Korma), Grand Petal-Chandelier Marble Lounge & Heritage Billiards Salon
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3853D] shrink-0 mt-0.5" />
                <span>
                  <strong>Location & GPS:</strong> NH-11, Near Hanuman Dhora, Sri Dungargarh, Bikaner – 331803 (
                  {RESORT_CONTACT.coordinatesLabel})
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E3DD] flex flex-wrap items-center justify-between gap-3">
              <a
                href={buildWhatsAppUrl(
                  `Khamma Ghani Sri Karni Heritage Resort! 🙏 Please send the PDF ${
                    activeDocModal === 'factsheet' ? 'Property Factsheet & Brochure' : 'Wedding & Estate Dossier'
                  } on WhatsApp.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Receive PDF on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveDocModal(null)}
                className="text-xs uppercase tracking-wider text-[#6E6A63] hover:text-[#292826] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const TajFacilitiesSection: React.FC = () => {
  const [expandedHotel, setExpandedHotel] = useState(false);
  const [expandedDining, setExpandedDining] = useState(false);
  const [expandedWellness, setExpandedWellness] = useState(false);
  const [expandedRooms, setExpandedRooms] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F2] text-[#292826] border-t border-[#E6E3DD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Taj Heading: ───── FACILITIES */}
        <div className="flex items-center gap-6 mb-12">
          <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
          <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A]">
            FACILITIES
          </h2>
        </div>

        {/* 2x2 Grid with Top, Middle, and Bottom Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* 1. HOTEL */}
          <div className="py-8 border-t border-b border-[#E2DFD9]">
            <div className="flex items-center gap-2.5 mb-5">
              <Briefcase className="w-4 h-4 text-[#4A4843]" />
              <h3 className="font-serif-royal text-lg sm:text-xl tracking-[0.08em] uppercase text-[#3D3C3A]">
                {TAJ_FACILITIES.hotel.title}
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#4A4843]">
              {TAJ_FACILITIES.hotel.initial.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                  <span>{item}</span>
                </li>
              ))}
              {expandedHotel &&
                TAJ_FACILITIES.hotel.more.map((item, i) => (
                  <li key={`more-${i}`} className="flex items-start gap-2.5">
                    <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button
              type="button"
              onClick={() => setExpandedHotel(!expandedHotel)}
              className="mt-3 text-sm tracking-[0.12em] text-[#A3853D] hover:text-[#7D6428] cursor-pointer font-medium"
            >
              {expandedHotel ? '...less' : '...more'}
            </button>
          </div>

          {/* 2. DINING */}
          <div className="py-8 border-t border-b border-[#E2DFD9]">
            <div className="flex items-center gap-2.5 mb-5">
              <Utensils className="w-4 h-4 text-[#4A4843]" />
              <h3 className="font-serif-royal text-lg sm:text-xl tracking-[0.08em] uppercase text-[#3D3C3A]">
                {TAJ_FACILITIES.dining.title}
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#4A4843]">
              {TAJ_FACILITIES.dining.initial.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                  <span>{item}</span>
                </li>
              ))}
              {expandedDining &&
                TAJ_FACILITIES.dining.more.map((item, i) => (
                  <li key={`more-${i}`} className="flex items-start gap-2.5">
                    <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button
              type="button"
              onClick={() => setExpandedDining(!expandedDining)}
              className="mt-3 text-sm tracking-[0.12em] text-[#A3853D] hover:text-[#7D6428] cursor-pointer font-medium"
            >
              {expandedDining ? '...less' : '...more'}
            </button>
          </div>

          {/* 3. WELLNESS */}
          <div className="py-8 border-b border-[#E2DFD9]">
            <div className="flex items-center gap-2.5 mb-5">
              <Flower2 className="w-4 h-4 text-[#4A4843]" />
              <h3 className="font-serif-royal text-lg sm:text-xl tracking-[0.08em] uppercase text-[#3D3C3A]">
                {TAJ_FACILITIES.wellness.title}
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#4A4843]">
              {TAJ_FACILITIES.wellness.initial.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                  <span>{item}</span>
                </li>
              ))}
              {expandedWellness &&
                TAJ_FACILITIES.wellness.more.map((item, i) => (
                  <li key={`more-${i}`} className="flex items-start gap-2.5">
                    <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button
              type="button"
              onClick={() => setExpandedWellness(!expandedWellness)}
              className="mt-3 text-sm tracking-[0.12em] text-[#A3853D] hover:text-[#7D6428] cursor-pointer font-medium"
            >
              {expandedWellness ? '...less' : '...more'}
            </button>
          </div>

          {/* 4. ROOMS */}
          <div className="py-8 border-b border-[#E2DFD9]">
            <div className="flex items-center gap-2.5 mb-5">
              <BedDouble className="w-4 h-4 text-[#4A4843]" />
              <h3 className="font-serif-royal text-lg sm:text-xl tracking-[0.08em] uppercase text-[#3D3C3A]">
                {TAJ_FACILITIES.rooms.title}
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#4A4843]">
              {TAJ_FACILITIES.rooms.initial.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                  <span>{item}</span>
                </li>
              ))}
              {expandedRooms &&
                TAJ_FACILITIES.rooms.more.map((item, i) => (
                  <li key={`more-${i}`} className="flex items-start gap-2.5">
                    <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button
              type="button"
              onClick={() => setExpandedRooms(!expandedRooms)}
              className="mt-3 text-sm tracking-[0.12em] text-[#A3853D] hover:text-[#7D6428] cursor-pointer font-medium"
            >
              {expandedRooms ? '...less' : '...more'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TajLocationDirections: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<'getting-here' | 'airport' | 'transport' | null>('getting-here');

  const toggleAccordion = (key: 'getting-here' | 'airport' | 'transport') => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white text-[#292826] border-t border-[#E6E3DD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: ───── LOCATION & / DIRECTIONS + Accordion */}
          <div className="lg:col-span-6">
            <div className="mb-10">
              <div className="flex items-center gap-6">
                <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
                <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
                  LOCATION &
                </span>
              </div>
              <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
                DIRECTIONS
              </h2>
            </div>

            {/* Accordion 1: GETTING HERE */}
            <div className="border-b border-[#E6E3DD] py-5">
              <button
                type="button"
                onClick={() => toggleAccordion('getting-here')}
                className="w-full flex items-center justify-between text-left cursor-pointer py-1"
              >
                <span className="font-serif-royal text-lg sm:text-xl tracking-[0.06em] uppercase text-[#3D3C3A]">
                  GETTING HERE
                </span>
                {openAccordion === 'getting-here' ? (
                  <Minus className="w-4 h-4 text-[#4A4843]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#4A4843]" />
                )}
              </button>

              {openAccordion === 'getting-here' && (
                <div className="pt-4 pb-2 space-y-3 text-sm text-[#4A4843] leading-relaxed">
                  <p>
                    <strong>{RESORT_CONTACT.name}</strong>, {RESORT_CONTACT.addressLine1}, {RESORT_CONTACT.addressLine2}
                  </p>
                  <p className="text-xs text-[#6E6A63] font-mono-tabular">
                    GPS Coordinates: {RESORT_CONTACT.coordinatesLabel}
                  </p>
                  <div className="flex flex-wrap items-center gap-5 pt-1">
                    <a
                      href={RESORT_CONTACT.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-[#A3853D] hover:text-[#7D6428] font-medium"
                    >
                      <span className="underline underline-offset-4">OPEN GOOGLE MAPS</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={RESORT_CONTACT.googleDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-[#6E6A63] hover:text-[#292826] font-medium"
                    >
                      <span className="underline underline-offset-4">GET ROUTE DIRECTIONS</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: AIRPORT */}
            <div className="border-b border-[#E6E3DD] py-5">
              <button
                type="button"
                onClick={() => toggleAccordion('airport')}
                className="w-full flex items-center justify-between text-left cursor-pointer py-1"
              >
                <span className="font-serif-royal text-lg sm:text-xl tracking-[0.06em] uppercase text-[#3D3C3A]">
                  AIRPORT
                </span>
                {openAccordion === 'airport' ? (
                  <Minus className="w-4 h-4 text-[#4A4843]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#4A4843]" />
                )}
              </button>

              {openAccordion === 'airport' && (
                <div className="pt-4 pb-2 space-y-2 text-sm text-[#4A4843] leading-relaxed">
                  <p>
                    <strong>Bikaner Airport (Nal / BKB):</strong> ~85 km via National Highway 11 West (nearest airport
                    for wedding & VIP guests).
                  </p>
                  <p>
                    <strong>Jaipur International Airport (JAI):</strong> Smooth 4-lane highway connectivity via NH-11
                    East (Sikar & Ratangarh corridor).
                  </p>
                </div>
              )}
            </div>

            {/* Accordion 3: LOCAL TRANSPORT & PILGRIMAGE CIRCUIT */}
            <div className="border-b border-[#E6E3DD] py-5">
              <button
                type="button"
                onClick={() => toggleAccordion('transport')}
                className="w-full flex items-center justify-between text-left cursor-pointer py-1"
              >
                <span className="font-serif-royal text-lg sm:text-xl tracking-[0.06em] uppercase text-[#3D3C3A]">
                  LOCAL TRANSPORT
                </span>
                {openAccordion === 'transport' ? (
                  <Minus className="w-4 h-4 text-[#4A4843]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#4A4843]" />
                )}
              </button>

              {openAccordion === 'transport' && (
                <div className="pt-4 pb-2 space-y-3 text-sm text-[#4A4843] leading-relaxed">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PILGRIMAGE_DISTANCES.map((d, idx) => (
                      <div key={idx} className="border-l-2 border-[#A3853D] pl-3 py-0.5">
                        <div className="font-mono-tabular text-xs font-semibold text-[#A3853D]">{d.km}</div>
                        <div className="font-medium text-[#292826] text-xs sm:text-sm">{d.place}</div>
                        <div className="text-[11px] text-[#6E6A63]">{d.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Map Container matching Screenshot 2 */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] bg-[#E5E3DF] border border-[#D8D5CE] overflow-hidden shadow-xs">
              {/* Embedded Google Map centered on exact GPS coordinates 28.090992, 74.044501 from karniresort.com */}
              <iframe
                title="Sri Karni Heritage Resort NH-11 Sri Dungargarh Google Map"
                src="https://www.google.com/maps?q=28.090992,74.044501&hl=en&z=15&output=embed"
                className="w-full h-full border-0 filter grayscale-[12%] contrast-[98%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Center Gold Teardrop Badge Overlay matching Taj Map UI */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center -mt-8">
                  <div className="w-11 h-11 rounded-full bg-[#A3853D] text-white border-2 border-white shadow-lg flex items-center justify-center font-serif-royal text-[10px] tracking-widest uppercase font-semibold">
                    KARNI
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[9px] border-t-[#A3853D] -mt-0.5" />
                </div>
              </div>

              {/* Bottom-Right Fullscreen Map Button (links directly to https://maps.app.goo.gl/E8xURNbUdeepqrBp8) */}
              <a
                href={RESORT_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Location on Google Maps"
                className="absolute bottom-3 right-3 w-9 h-9 bg-white hover:bg-[#F7F6F2] text-[#3D3C3A] shadow-md border border-[#D8D5CE] flex items-center justify-center transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
