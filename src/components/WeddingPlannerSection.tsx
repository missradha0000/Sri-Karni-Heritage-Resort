import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles, Calendar, Users, Building2, PhoneCall } from 'lucide-react';
import { EVENT_VENUES, RESORT_CONTACT, buildWhatsAppUrl } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

export const WeddingPlannerSection: React.FC = () => {
  const [selectedVenueId, setSelectedVenueId] = useState<string>(EVENT_VENUES[0].id);
  const [eventType, setEventType] = useState('Royal Destination Wedding (2–3 Days)');
  const [guestCount, setGuestCount] = useState('500 – 800 Guests');
  const [roomBlock, setRoomBlock] = useState('40 – 80 Heritage Rooms');
  const [cateringStyle, setCateringStyle] = useState('Royal Marwari Thali + Multi-Cuisine Live Counters');
  const [eventDate, setEventDate] = useState('2026-12-14');
  const [hostName, setHostName] = useState('');
  const [hostPhone, setHostPhone] = useState('');
  const [hostCity, setHostCity] = useState('');
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [validationMsg, setValidationMsg] = useState('');

  const selectedVenue = EVENT_VENUES.find((v) => v.id === selectedVenueId) || EVENT_VENUES[0];

  const getEstimatedPackageRange = (): { range: string; inclusionsSummary: string } => {
    if (roomBlock.includes('Full Estate')) {
      return {
        range: '₹18.5 Lakhs – ₹32 Lakhs',
        inclusionsSummary: 'Includes all 125 Suites & Rooms, Surya Bagh Lawn, Darbar Hall, Poolside Courtyard & Royal Decor Rig',
      };
    }
    if (roomBlock.includes('40 – 80')) {
      return {
        range: '₹9.5 Lakhs – ₹16.5 Lakhs',
        inclusionsSummary: 'Includes Dedicated Wedding Wing Rooms, Grand Marriage Lawn, Indoor Sangeet Hall & Power Backup',
      };
    }
    return {
      range: '₹3.2 Lakhs – ₹7.5 Lakhs',
      inclusionsSummary: 'Includes Celebration Venue Hire, Basic Architectural Illumination, Bridal Lounge & Valet Parking',
    };
  };

  const estimate = getEstimatedPackageRange();

  const weddingWhatsAppText = `Khamma Ghani Sri Karni Heritage Resort! 🙏✨
We would like to inquire about hosting a *Royal Marriage / Celebration* at your estate.

• Celebration Type: ${eventType}
• Preferred Venue: ${selectedVenue.name} (${selectedVenue.hindiName})
• Preferred Date / Saya: ${eventDate}
• Expected Guests: ${guestCount}
• Residential Room Block: ${roomBlock}
• Royal Feast Preference: ${cateringStyle}
${hostName ? `• Host Name: ${hostName}` : ''}
${hostCity ? `• Family City: ${hostCity}` : ''}
${hostPhone ? `• Contact Number: ${hostPhone}` : ''}

Please share auspicious date availability, venue brochure, and a customized royal wedding proposal.`;

  const handleProposalRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName.trim() || hostPhone.trim().length < 10) {
      setValidationMsg('Please enter the host family name and a valid 10-digit phone number.');
      return;
    }
    setValidationMsg('');
    setProposalSubmitted(true);
  };

  return (
    <section id="weddings" className="py-20 sm:py-28 bg-[#231710] text-[#FAF6F0] border-y border-[#3D291D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm tracking-wide text-[#D4AF37] mb-3">
            Royal Marriages & Grand Celebrations · शाही विवाह एवं उत्सव
          </p>
          <h2
            className="font-serif-royal text-3xl sm:text-5xl font-semibold text-[#FAF6F0] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            A Illuminated Sandstone Palace Built for Grand Marwari & Destination Weddings
          </h2>
          <p className="mt-4 text-base text-[#D8C9B8] leading-relaxed">
            From 1,600-guest varmala processions on the manicured Surya Bagh Lawns to full-estate buyouts spanning up to{' '}
            <span className="font-mono-tabular text-[#FAF6F0] font-medium">125</span> private rooms and suites, Sri
            Karni Heritage Resort transforms family milestones into regal history.
          </p>
        </div>

        {/* Venue Selector Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#180F0A] rounded-xl border border-[#3D291D] mb-10 w-fit">
          {EVENT_VENUES.map((venue) => {
            const isActive = venue.id === selectedVenueId;
            return (
              <button
                key={venue.id}
                type="button"
                onClick={() => setSelectedVenueId(venue.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#B8860B] text-[#FAF6F0] shadow-sm'
                    : 'text-[#C9B8A6] hover:text-[#FAF6F0] hover:bg-white/5'
                }`}
              >
                {venue.indexNumber}. {venue.name}
              </button>
            );
          })}
        </div>

        {/* 2-Column Split: Active Venue Showcase + Interactive Wedding & Event Inquiry Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Selected Venue Deep Dive */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#2C1D14] rounded-xl border border-[#422D1F] overflow-hidden">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#180F0A]">
                <ResilientImage
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180F0A]/90 via-[#180F0A]/25 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-xs text-[#E6C674] mb-1">
                    {selectedVenue.hindiName} · {selectedVenue.setting}
                  </p>
                  <h3 className="font-serif-royal text-2xl sm:text-3xl font-semibold text-[#FAF6F0]">
                    {selectedVenue.indexNumber}. {selectedVenue.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Unboxed Venue Capacity Metadata */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#D4AF37] border-b border-[#422D1F] pb-4">
                  <span>
                    <strong className="font-mono-tabular text-[#FAF6F0]">
                      {selectedVenue.SeatedCapacity.toLocaleString('en-IN')}
                    </strong>{' '}
                    Seated Banquet
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong className="font-mono-tabular text-[#FAF6F0]">
                      {selectedVenue.floatingCapacity.toLocaleString('en-IN')}
                    </strong>{' '}
                    Floating Reception
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong className="font-mono-tabular text-[#FAF6F0]">
                      {selectedVenue.areaSqFt.toLocaleString('en-IN')}
                    </strong>{' '}
                    sq. ft. Event Footprint
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#E2D5C3] leading-relaxed">{selectedVenue.description}</p>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C9B8A6] mb-3 font-semibold">
                    Royal Infrastructure & Celebration Specifications
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedVenue.signatureFeatures.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EDE2D4]">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Venue Proof Strip */}
            <div className="px-6 sm:px-8 py-4 bg-[#1E130D] border-t border-[#422D1F] flex flex-wrap items-center justify-between gap-4 text-xs text-[#C9B8A6]">
              <span>Ideal For: {selectedVenue.idealFor.join(' · ')}</span>
              <span className="font-mono-tabular text-[#E6C674]">Parking: 350+ Vehicles on NH-11 Estate</span>
            </div>
          </div>

          {/* Right Column: Interactive Marriage & Event Booking Desk */}
          <div className="lg:col-span-5 bg-[#FAF6F0] text-[#231710] rounded-xl border border-[#DECBB3] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="border-b border-[#E2D5C3] pb-4 mb-6">
                <span className="text-xs font-medium text-[#8C6200] block mb-1">
                  Bespoke Celebration & Saya Inquiry Desk
                </span>
                <h3 className="font-serif-royal text-2xl sm:text-3xl font-semibold text-[#231710]">
                  Plan Your Royal Wedding or Event
                </h3>
                <p className="text-xs text-[#6E5A4F] mt-1">
                  Customize your guest count and room block below to check auspicious date availability directly on
                  WhatsApp.
                </p>
              </div>

              {proposalSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#231710] text-[#D4AF37] flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-royal text-2xl font-semibold text-[#231710]">
                    Wedding Concierge Request Registered
                  </h4>
                  <p className="text-sm text-[#5C493E] leading-relaxed">
                    Thank you, <strong>{hostName}</strong>. Our Senior Wedding & Banquet Director at Sri Karni Heritage
                    Resort will contact you on <span className="font-mono-tabular font-medium">{hostPhone}</span> with a
                    custom floorplan and tariff proposal for <strong>{eventType}</strong>.
                  </p>
                  <div className="p-4 bg-[#F3ECE1] rounded-lg border border-[#DECBB3] text-left text-xs space-y-1 text-[#3D2B20]">
                    <div>
                      <strong>Selected Venue:</strong> {selectedVenue.name}
                    </div>
                    <div>
                      <strong>Preferred Date:</strong> <span className="font-mono-tabular">{eventDate}</span>
                    </div>
                    <div>
                      <strong>Scale:</strong> {guestCount} · {roomBlock}
                    </div>
                  </div>
                  <div className="pt-3 flex flex-col gap-2.5">
                    <a
                      href={buildWhatsAppUrl(weddingWhatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open Direct WhatsApp Chat with Banquet Head</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setProposalSubmitted(false)}
                      className="text-xs text-[#6E5A4F] hover:text-[#231710] underline cursor-pointer py-1"
                    >
                      Edit Event Configuration
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleProposalRequest} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3D2B20] mb-1">Celebration / Event Type</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                    >
                      <option value="Royal Destination Wedding (2–3 Days)">
                        Royal Destination Wedding (2–3 Days)
                      </option>
                      <option value="Grand Marriage Reception & Varmala">
                        Grand Marriage Reception & Varmala
                      </option>
                      <option value="Sangeet, Ring Ceremony & Tilak">
                        Sangeet, Ring Ceremony & Tilak
                      </option>
                      <option value="Pre-Wedding Royal Palace Shoot">
                        Pre-Wedding Royal Palace Shoot
                      </option>
                      <option value="Social Anniversary / Samaj Mahotsav">
                        Social Anniversary / Samaj Mahotsav
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#3D2B20] mb-1">
                        <Users className="w-3.5 h-3.5 inline mr-1 text-[#8C6200]" />
                        Expected Guests
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                      >
                        <option value="150 – 300 Guests">150 – 300 Guests</option>
                        <option value="300 – 500 Guests">300 – 500 Guests</option>
                        <option value="500 – 800 Guests">500 – 800 Guests</option>
                        <option value="800 – 1,200 Guests">800 – 1,200 Guests</option>
                        <option value="1,200 – 1,600+ Guests">1,200 – 1,600+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3D2B20] mb-1">
                        <Building2 className="w-3.5 h-3.5 inline mr-1 text-[#8C6200]" />
                        Residential Rooms
                      </label>
                      <select
                        value={roomBlock}
                        onChange={(e) => setRoomBlock(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                      >
                        <option value="Lawn / Hall Only (10–15 Rooms)">Lawn / Hall Only (10–15 Rooms)</option>
                        <option value="20 – 40 Heritage Rooms">20 – 40 Heritage Rooms</option>
                        <option value="40 – 80 Heritage Rooms">40 – 80 Heritage Rooms</option>
                        <option value="Full Estate Buyout (Up to 125 Rooms)">
                          Full Estate Buyout (Up to 125 Rooms)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#3D2B20] mb-1">
                        <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#8C6200]" />
                        Auspicious Date (Saya)
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono-tabular bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#3D2B20] mb-1">Catering Preference</label>
                      <select
                        value={cateringStyle}
                        onChange={(e) => setCateringStyle(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                      >
                        <option value="Royal Marwari Thali + Multi-Cuisine Live Counters">
                          Royal Marwari + Multi-Cuisine
                        </option>
                        <option value="Pure Vegetarian & Jain Royal Manuhar Menu">
                          Pure Veg & Jain Manuhar Menu
                        </option>
                        <option value="Custom Family Halwai / Bespoke Catering">
                          Custom Halwai / Bespoke Setup
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Indicative Package Band */}
                  <div className="p-3.5 bg-[#F3ECE1] rounded-lg border border-[#DECBB3]">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-[#6E5A4F]">Indicative Buyout / Venue Estimate</span>
                      <span className="font-mono-tabular text-sm font-bold text-[#231710]">{estimate.range}</span>
                    </div>
                    <p className="text-[11px] text-[#6E5A4F] mt-1 leading-snug">{estimate.inclusionsSummary}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <input
                      type="text"
                      placeholder="Host / Family Name *"
                      value={hostName}
                      onChange={(e) => setHostName(e.target.value)}
                      className="px-3 py-2 text-xs bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      value={hostPhone}
                      onChange={(e) => setHostPhone(e.target.value)}
                      className="px-3 py-2 text-xs font-mono-tabular bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                    />
                    <input
                      type="text"
                      placeholder="Your City (e.g. Bikaner)"
                      value={hostCity}
                      onChange={(e) => setHostCity(e.target.value)}
                      className="px-3 py-2 text-xs bg-white border border-[#D5C3AC] rounded-lg text-[#231710] focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>

                  {validationMsg && <p className="text-xs text-[#9E2A2B] font-medium">{validationMsg}</p>}

                  <div className="pt-2 space-y-2.5">
                    <a
                      href={buildWhatsAppUrl(weddingWhatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Send Wedding Inquiry on WhatsApp</span>
                    </a>

                    <button
                      type="submit"
                      className="w-full px-5 py-2.5 bg-[#231710] hover:bg-[#3A271C] text-[#FAF6F0] text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Request Official Wedding Brochure & Callback
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-[#E2D5C3] flex items-center justify-between text-xs text-[#6E5A4F]">
              <span>Direct Banquet Hotline:</span>
              <a
                href={`tel:+${RESORT_CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-[#231710] hover:text-[#B8860B]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#B8860B]" />
                {RESORT_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
