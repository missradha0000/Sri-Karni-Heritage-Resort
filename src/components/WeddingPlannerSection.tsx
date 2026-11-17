import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles, Calendar, Users, Building2, PhoneCall } from 'lucide-react';
import { EVENT_VENUES, RESORT_CONTACT, buildWhatsAppUrl } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

const CELEBRATION_EXPERIENCES = [
  'Poolside Haldi & Rain Dance',
  'Rajasthani Folk Evening & Baarat Swagat',
  'Pre-Wedding Architectural Shoot',
  'Deshnoke / Toliyasar / Salasar Darshan Excursion',
];

export const WeddingPlannerSection: React.FC = () => {
  const [selectedVenueId, setSelectedVenueId] = useState<string>(EVENT_VENUES[0].id);
  const [venuePhotoIndex, setVenuePhotoIndex] = useState<0 | 1>(0);
  const [buyoutScope, setBuyoutScope] = useState('3-Day Full Estate Buyout (All 125 Rooms + All Venues)');
  const [guestCount, setGuestCount] = useState('500 – 1,000 Guests');
  const [cateringStyle, setCateringStyle] = useState('In-House Multi-Cuisine & Royal Rajasthani Feast');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'Poolside Haldi & Rain Dance',
    'Rajasthani Folk Evening & Baarat Swagat',
  ]);
  const [eventDate, setEventDate] = useState('2026-12-14');
  const [hostName, setHostName] = useState('');
  const [hostPhone, setHostPhone] = useState('');
  const [hostCity, setHostCity] = useState('');
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [validationMsg, setValidationMsg] = useState('');

  const selectedVenue = EVENT_VENUES.find((v) => v.id === selectedVenueId) || EVENT_VENUES[0];
  const venuePhotos = [selectedVenue.image, selectedVenue.secondaryImage];

  const toggleAddOn = (item: string) => {
    setSelectedAddOns((prev) => (prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]));
  };

  const getScopeSummary = (): { badge: string; inclusionsSummary: string } => {
    if (buyoutScope.includes('3-Day Full Estate')) {
      return {
        badge: 'Full 125-Room Estate Buyout',
        inclusionsSummary:
          'All 125 AC Rooms, Grand Illuminated Front Lawn, Two Indoor Pichwai Halls, Poolside Deck & Marble Lounge',
      };
    }
    if (buyoutScope.includes('2-Day Partial')) {
      return {
        badge: '40 – 75 Rooms + Venues',
        inclusionsSummary:
          'Contiguous Wedding Residence Wing, Front Celebration Lawn, Two Indoor AC Halls & Full Generator Backup',
      };
    }
    if (buyoutScope.includes('Standalone')) {
      return {
        badge: 'Single-Day Lawn & Hall Hire',
        inclusionsSummary:
          'Grand Illuminated Front Lawn or Indoor Banquet Hall for Reception, Sagai, or Milestone Celebration',
      };
    }
    return {
      badge: 'Group Retreat & Conference',
      inclusionsSummary:
        'Contiguous Group Room Block, Indoor AC Conference/Banquet Hall, Multi-Cuisine Meals & Coach Parking',
    };
  };

  const scopeSummary = getScopeSummary();

  const weddingWhatsAppText = `Khamma Ghani Sri Karni Heritage Resort! 🙏✨
We would like to request a *Custom Wedding & Celebration Dossier*:

• Estate Scope: ${buyoutScope}
• Primary Venue Focus: ${selectedVenue.romanNumeral}. ${selectedVenue.name}
• Preferred Date / Saya Season: ${eventDate}
• Expected Guest Scale: ${guestCount}
• Catering / Halwai Preference: ${cateringStyle}
• Curated Experiences: ${selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'Standard Setup'}
${hostName ? `• Host Family Name: ${hostName}` : ''}
${hostCity ? `• City: ${hostCity}` : ''}
${hostPhone ? `• Contact Number: ${hostPhone}` : ''}

Please share date availability and a tailored celebration proposal.`;

  const handleProposalRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName.trim() || hostPhone.trim().length < 10) {
      setValidationMsg('Please enter the host family name and a valid 10-digit mobile number.');
      return;
    }
    setValidationMsg('');
    setProposalSubmitted(true);
  };

  return (
    <section id="weddings" className="py-16 sm:py-24 bg-[#F7F6F2] text-[#292826] border-t border-[#E6E3DD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Taj-Style Two-Line Serif Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-6">
            <span className="w-12 sm:w-16 h-[1px] bg-[#7A7770] inline-block shrink-0" />
            <span className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight">
              WEDDINGS &
            </span>
          </div>
          <h2 className="font-serif-royal text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase text-[#3D3C3A] leading-tight mt-1">
            CELEBRATION VENUES
          </h2>
          <p className="mt-4 text-sm sm:text-[15px] text-[#4A4843] leading-relaxed">
            Designed on a grand architectural scale along National Highway 11, Sri Karni Heritage Resort unites{' '}
            <strong className="font-mono-tabular text-[#292826]">125</strong> air-conditioned rooms with four signature
            celebration venues—allowing an entire wedding party and extended family to celebrate under one roof.
          </p>
        </div>

        {/* Taj-Style Underline Venue Tabs (All 4 Real Venues from karniresort.com) */}
        <div className="flex flex-wrap items-center gap-6 border-b border-[#DCD8D0] mb-10">
          {EVENT_VENUES.map((venue) => {
            const isActive = venue.id === selectedVenueId;
            return (
              <button
                key={venue.id}
                type="button"
                onClick={() => {
                  setSelectedVenueId(venue.id);
                  setVenuePhotoIndex(0);
                }}
                className={`pb-3.5 text-xs tracking-[0.12em] uppercase font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 border-b-[3px] -mb-[1px] ${
                  isActive
                    ? 'border-[#A3853D] text-[#A3853D] font-semibold'
                    : 'border-transparent text-[#6E6A63] hover:text-[#292826]'
                }`}
              >
                {venue.romanNumeral}. {venue.name}
              </button>
            );
          })}
        </div>

        {/* 2-Column Split: Active Venue Showcase + Interactive Celebration Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Selected Venue Deep Dive with Real Photos */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-[#E6E3DD] shadow-xs overflow-hidden">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1C1B19]">
                <ResilientImage
                  src={venuePhotos[venuePhotoIndex]}
                  alt={selectedVenue.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Photo Switcher Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/75 p-1 border border-[#A3853D]/60">
                  <button
                    type="button"
                    onClick={() => setVenuePhotoIndex(0)}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-medium cursor-pointer ${
                      venuePhotoIndex === 0 ? 'bg-[#A3853D] text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Primary View
                  </button>
                  <button
                    type="button"
                    onClick={() => setVenuePhotoIndex(1)}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-medium cursor-pointer ${
                      venuePhotoIndex === 1 ? 'bg-[#A3853D] text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Alternate Angle
                  </button>
                </div>

                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-xs text-[#E5C878] tracking-wider uppercase mb-1">
                    Venue {selectedVenue.romanNumeral} · {selectedVenue.hindiName}
                  </p>
                  <h3 className="font-serif-royal text-2xl sm:text-3xl font-normal text-white">
                    {selectedVenue.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Unboxed Venue Capacity Metadata */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#6E6A63] border-b border-[#E6E3DD] pb-4">
                  <span>
                    <strong className="font-mono-tabular text-[#292826]">
                      {selectedVenue.SeatedCapacity.toLocaleString('en-IN')}
                    </strong>{' '}
                    Seated Setup
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong className="font-mono-tabular text-[#292826]">
                      {selectedVenue.floatingCapacity.toLocaleString('en-IN')}+
                    </strong>{' '}
                    Reception Capacity
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedVenue.setting}</span>
                </div>

                <p className="text-sm sm:text-[15px] text-[#4A4843] leading-relaxed">{selectedVenue.description}</p>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-[#A3853D] mb-3 font-semibold">
                    Venue Highlights & Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedVenue.signatureFeatures.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4843]">
                        <span className="text-[#A3853D] text-xs mt-1 leading-none">◆</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Venue Proof Strip */}
            <div className="px-6 sm:px-8 py-4 bg-[#FBF9F6] border-t border-[#E6E3DD] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6E6A63]">
              <span>Ideal For: {selectedVenue.idealFor.join(' · ')}</span>
              <span className="font-mono-tabular text-[#A3853D] font-semibold">
                Own Halwai & Decorator Welcome
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Celebration Configurator (from karniresort.com #planner) */}
          <div className="lg:col-span-5 bg-white text-[#292826] border border-[#E6E3DD] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="border-b border-[#E6E3DD] pb-4 mb-5">
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#A3853D] block mb-1">
                  Celebration Configurator
                </span>
                <h3 className="font-serif-royal text-2xl sm:text-3xl font-normal text-[#292826]">
                  Design Your Royal Celebration
                </h3>
                <p className="text-xs text-[#6E6A63] mt-1">
                  Select your estate buyout scope, guest scale, and wedding experiences to request a custom dossier on
                  WhatsApp.
                </p>
              </div>

              {proposalSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#A3853D] text-white flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-royal text-2xl font-normal text-[#292826]">
                    Celebration Dossier Ready
                  </h4>
                  <p className="text-sm text-[#4A4843] leading-relaxed">
                    Khamma Ghani, <strong>{hostName}</strong>. Our Events Desk at Sri Karni Heritage Resort (
                    <span className="font-mono-tabular">{RESORT_CONTACT.phoneDisplay}</span>) has prepared your inquiry
                    for <strong>{buyoutScope}</strong>.
                  </p>
                  <div className="p-4 bg-[#FBF9F6] border border-[#E6E3DD] text-left text-xs space-y-1.5 text-[#4A4843]">
                    <div>
                      <strong>Primary Venue:</strong> {selectedVenue.name}
                    </div>
                    <div>
                      <strong>Preferred Date:</strong> <span className="font-mono-tabular">{eventDate}</span>
                    </div>
                    <div>
                      <strong>Guest Scale:</strong> {guestCount}
                    </div>
                    <div>
                      <strong>Experiences:</strong> {selectedAddOns.join(', ') || 'Custom'}
                    </div>
                  </div>
                  <div className="pt-3 flex flex-col gap-2.5">
                    <a
                      href={buildWhatsAppUrl(weddingWhatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Dossier Request on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setProposalSubmitted(false)}
                      className="text-xs text-[#6E6A63] hover:text-[#292826] underline cursor-pointer py-1"
                    >
                      Modify Celebration Configuration
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleProposalRequest} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A4843] mb-1">
                      <Building2 className="w-3.5 h-3.5 inline mr-1 text-[#A3853D]" />
                      1. Estate Buyout & Celebration Scope
                    </label>
                    <select
                      value={buyoutScope}
                      onChange={(e) => setBuyoutScope(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                    >
                      <option value="3-Day Full Estate Buyout (All 125 Rooms + All Venues)">
                        3-Day Full Estate Buyout (All 125 Rooms + All Venues)
                      </option>
                      <option value="2-Day Partial Estate Block (40–75 Rooms + Lawn & Halls)">
                        2-Day Partial Estate Block (40–75 Rooms + Lawn & Halls)
                      </option>
                      <option value="Standalone Lawn & Banquet Hall Event">
                        Standalone Lawn & Banquet Hall Event
                      </option>
                      <option value="Corporate & Family Gathering (10–40 Rooms)">
                        Corporate & Family Gathering (10–40 Rooms)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A4843] mb-1">
                        <Users className="w-3.5 h-3.5 inline mr-1 text-[#A3853D]" />
                        2. Expected Guests
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                      >
                        <option value="150 – 300 Guests">150 – 300 Guests</option>
                        <option value="300 – 500 Guests">300 – 500 Guests</option>
                        <option value="500 – 1,000 Guests">500 – 1,000 Guests</option>
                        <option value="1,000 – 1,500+ Guests">1,000 – 1,500+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A4843] mb-1">
                        <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#A3853D]" />
                        3. Preferred Date (Saya)
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono-tabular bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A4843] mb-1">
                      4. Catering & Halwai Preference
                    </label>
                    <select
                      value={cateringStyle}
                      onChange={(e) => setCateringStyle(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                    >
                      <option value="In-House Multi-Cuisine & Royal Rajasthani Feast">
                        In-House Multi-Cuisine & Royal Rajasthani Feast
                      </option>
                      <option value="Pure Vegetarian, Jain & Satvik Wedding Menu">
                        Pure Vegetarian, Jain & Satvik Wedding Menu
                      </option>
                      <option value="Bring Own Family Halwai / Maharaj & Custom Decorator">
                        Bring Own Family Halwai / Maharaj & Custom Decorator
                      </option>
                    </select>
                  </div>

                  {/* Signature Experiences Multi-Select from karniresort.com */}
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A4843] mb-1.5">
                      5. Curated Celebration Experiences
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {CELEBRATION_EXPERIENCES.map((item) => {
                        const checked = selectedAddOns.includes(item);
                        return (
                          <label
                            key={item}
                            className={`flex items-start gap-2 p-2 border text-[11px] cursor-pointer transition-colors ${
                              checked
                                ? 'border-[#A3853D] bg-[#FBF9F6] text-[#292826] font-medium'
                                : 'border-[#E6E3DD] text-[#6E6A63]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleAddOn(item)}
                              className="mt-0.5 accent-[#A3853D]"
                            />
                            <span className="leading-tight">{item}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scope Summary Banner */}
                  <div className="p-3 bg-[#FBF9F6] border border-[#E6E3DD]">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-[#A3853D] font-semibold">
                        Selected Configuration
                      </span>
                      <span className="font-mono-tabular text-xs font-bold text-[#292826]">{scopeSummary.badge}</span>
                    </div>
                    <p className="text-[11px] text-[#6E6A63] mt-1 leading-snug">{scopeSummary.inclusionsSummary}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Host Name *"
                      value={hostName}
                      onChange={(e) => setHostName(e.target.value)}
                      className="px-3 py-2 text-xs bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile No. *"
                      value={hostPhone}
                      onChange={(e) => setHostPhone(e.target.value)}
                      className="px-3 py-2 text-xs font-mono-tabular bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={hostCity}
                      onChange={(e) => setHostCity(e.target.value)}
                      className="px-3 py-2 text-xs bg-[#FBF9F6] border border-[#D8CEBE] text-[#292826] focus:outline-none focus:border-[#A3853D]"
                    />
                  </div>

                  {validationMsg && <p className="text-xs text-[#9E2A2B] font-medium">{validationMsg}</p>}

                  <div className="pt-1 space-y-2">
                    <a
                      href={buildWhatsAppUrl(weddingWhatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#A3853D] hover:bg-[#8C7030] text-white text-xs tracking-[0.14em] uppercase font-semibold transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Request Proposal on WhatsApp</span>
                    </a>

                    <button
                      type="submit"
                      className="w-full px-5 py-2.5 bg-transparent hover:bg-[#F7F6F2] text-[#292826] border border-[#A3853D] text-xs tracking-[0.14em] uppercase font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Register Callback Request
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#E6E3DD] flex items-center justify-between text-xs text-[#6E6A63]">
              <span>24×7 Reception & Events Desk:</span>
              <a
                href={`tel:+${RESORT_CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-[#292826] hover:text-[#A3853D]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#A3853D]" />
                {RESORT_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
