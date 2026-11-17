import React, { useState } from 'react';
import { X, Check, MessageCircle, Calendar, Users, Sparkles } from 'lucide-react';
import { RoomSuite, buildWhatsAppUrl, RESORT_CONTACT, RESORT_IMAGES } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

interface RoomDetailModalProps {
  room: RoomSuite | null;
  onClose: () => void;
  defaultCheckIn: string;
  defaultCheckOut: string;
  defaultGuests: string;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  defaultCheckIn,
  defaultCheckOut,
  defaultGuests,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<0 | 1>(0);
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(defaultGuests);
  const [roomsCount, setRoomsCount] = useState('1');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formError, setFormError] = useState('');

  if (!room) return null;

  const photos = [room.image, room.secondaryImage];

  const calculateNights = (): number => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const numRooms = parseInt(roomsCount, 10) || 1;
  const estimatedTotal = room.pricePerNight * nights * numRooms;

  const whatsappMessage = `Namaste Sri Karni Heritage Resort! 🙏
I would like to inquire about booking the *${room.name}* (${room.hindiTitle}).

• Check-In: ${checkIn}
• Check-Out: ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})
• Rooms Required: ${numRooms} Room${numRooms > 1 ? 's' : ''}
• Guests: ${guests}
• Estimated Tariff: ₹${estimatedTotal.toLocaleString('en-IN')} + taxes
${guestName ? `• Guest Name: ${guestName}` : ''}
${guestPhone ? `• Phone: ${guestPhone}` : ''}
${specialRequest ? `• Special Request: ${specialRequest}` : ''}

Please confirm availability and royal tariff details.`;

  const handleDirectReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || guestPhone.trim().length < 10) {
      setFormError('Please enter your full name and a valid 10-digit mobile number.');
      return;
    }
    setFormError('');
    setBookingConfirmed(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-suite-title"
    >
      <div className="relative w-full max-w-4xl bg-[#FBF9F6] border border-[#AD8B3A] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1C1B19] text-white border-b border-[#AD8B3A]">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-white border border-[#AD8B3A] overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
              <img
                src={RESORT_IMAGES.logo}
                alt="Sri Karni Heritage Resort Royal Crest"
                className="w-full h-full object-cover scale-[1.02]"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#E5C878]">
                {room.categoryLabel} · {room.hindiTitle}
              </p>
              <h2 id="modal-suite-title" className="font-serif-royal text-2xl sm:text-3xl font-normal text-white">
                {room.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close room details"
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visuals & Architectural Notes */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1B19]">
                <ResilientImage
                  src={photos[activePhotoIndex]}
                  alt={`${room.name} view ${activePhotoIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-sm p-1 border border-[#AD8B3A]/60">
                  <button
                    type="button"
                    onClick={() => setActivePhotoIndex(0)}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      activePhotoIndex === 0
                        ? 'bg-[#AD8B3A] text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Suite Chamber
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhotoIndex(1)}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      activePhotoIndex === 1
                        ? 'bg-[#AD8B3A] text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Estate View
                  </button>
                </div>
              </div>

              {/* Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#7A6747] pt-1">
                <span className="font-mono-tabular font-medium text-[#3D3122]">{room.areaSqFt} sq. ft.</span>
                <span aria-hidden="true">·</span>
                <span>{room.maxGuests}</span>
                <span aria-hidden="true">·</span>
                <span>{room.bedType}</span>
                <span aria-hidden="true">·</span>
                <span>{room.view}</span>
              </div>

              <p className="text-sm sm:text-base text-[#4A3C2A] leading-relaxed">{room.shortDescription}</p>

              <div className="pt-4 border-t border-[#E2D5C3]">
                <h3 className="font-serif-royal text-xl font-semibold text-[#3D3122] mb-2">
                  Rajasthani Architectural Craftsmanship
                </h3>
                <p className="text-sm text-[#5C4B35] leading-relaxed">{room.architecturalNotes}</p>
              </div>

              <div className="pt-4 border-t border-[#E2D5C3]">
                <h3 className="font-serif-royal text-xl font-semibold text-[#3D3122] mb-3">
                  Signature Suite Privileges
                </h3>
                <ul className="space-y-2">
                  {room.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#4A3C2A]">
                      <Check className="w-4 h-4 text-[#917C58] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 text-xs text-[#7A6747]">
                Complimentary Inclusions: {room.inclusions.join(' · ')}
              </div>
            </div>

            {/* Right Column: Instant Stay Configurator & WhatsApp Inquiry */}
            <div className="lg:col-span-5 bg-[#F3ECE1] p-6 rounded-lg border border-[#D5C5AE] space-y-5">
              <div className="flex items-baseline justify-between border-b border-[#D5C5AE] pb-4">
                <div>
                  <span className="text-xs text-[#7A6747] block">Royal Nightly Tariff</span>
                  <span className="font-mono-tabular text-2xl font-bold text-[#3D3122]">
                    ₹{room.pricePerNight.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#7A6747]"> / night</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A6747] block">Estimated ({nights}N × {numRooms}R)</span>
                  <span className="font-mono-tabular text-lg font-semibold text-[#917C58]">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {bookingConfirmed ? (
                <div className="py-6 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#917C58] text-[#FAF6F0] flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-royal text-2xl font-semibold text-[#3D3122]">
                    Royal Reservation Request Logged
                  </h4>
                  <p className="text-sm text-[#5C4B35] leading-relaxed">
                    Khamma Ghani, <strong className="text-[#3D3122]">{guestName}</strong>. Our reservations desk at Sri
                    Karni Heritage Resort has registered your request for <strong>{numRooms} × {room.name}</strong> from{' '}
                    <span className="font-mono-tabular">{checkIn}</span> to{' '}
                    <span className="font-mono-tabular">{checkOut}</span>.
                  </p>
                  <p className="text-xs text-[#7A6747]">
                    For instant priority confirmation from our Front Office Manager ({RESORT_CONTACT.phoneDisplay}), tap
                    below to send your booking pass on WhatsApp.
                  </p>
                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href={buildWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Booking Pass on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(false)}
                      className="text-xs text-[#7A6747] hover:text-[#3D3122] underline cursor-pointer py-1"
                    >
                      Modify dates or room count
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDirectReservationSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#4A3C2A] mb-1">
                        <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#917C58]" />
                        Check-In
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono-tabular bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#4A3C2A] mb-1">
                        <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#917C58]" />
                        Check-Out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono-tabular bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#4A3C2A] mb-1">Rooms Required</label>
                      <select
                        value={roomsCount}
                        onChange={(e) => setRoomsCount(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                      >
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="5">5 Rooms (Family Block)</option>
                        <option value="15">15+ Rooms (Wedding Wing)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#4A3C2A] mb-1">
                        <Users className="w-3.5 h-3.5 inline mr-1 text-[#917C58]" />
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                      >
                        <option value="2 Adults">2 Adults</option>
                        <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                        <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                        <option value="4 Adults (Family)">4 Adults (Family)</option>
                        <option value="Group / Barat Wing">Group / Barat Wing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#4A3C2A] mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Kunwar Harshvardhan"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#4A3C2A] mb-1">Mobile / WhatsApp No.</label>
                      <input
                        type="tel"
                        placeholder="+91 98XXX XXXXX"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono-tabular bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A3C2A] mb-1">
                      Special Preferences (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Jain meals, ground floor room, late NH-11 arrival..."
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#C9B89E] rounded-md text-[#3D3122] focus:outline-none focus:border-[#917C58]"
                    />
                  </div>

                  {formError && <p className="text-xs text-[#9E2A2B] font-medium">{formError}</p>}

                  <div className="pt-2 space-y-2.5">
                    <a
                      href={buildWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1F5E3B] hover:bg-[#17492D] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Inquire Directly on WhatsApp</span>
                    </a>

                    <button
                      type="submit"
                      className="w-full px-5 py-2.5 bg-[#917C58] hover:bg-[#7D6949] text-[#FAF6F0] text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Request Desk Callback
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
