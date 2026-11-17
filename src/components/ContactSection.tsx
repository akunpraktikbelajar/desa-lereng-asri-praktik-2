import {
  Clock,
  Headset,
  Info,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import {
  buildWhatsAppUrl,
  contactData,
  villageProfile,
} from '../data/wisataData';

export function ContactSection() {
  const defaultWaUrl = buildWhatsAppUrl(contactData.defaultWhatsappMessage);

  return (
    <section
      id="kontak"
      aria-labelledby="section-kontak-title"
      className="scroll-mt-24 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 border-b border-outline/70 pb-4">
        <p className="text-sm font-semibold text-secondary">Akses & Layanan</p>
        <h2
          id="section-kontak-title"
          className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight text-balance"
        >
          Kontak & Lokasi Desa
        </h2>
        <p className="text-[16px] text-on-surface-variant max-w-2xl">
          {contactData.accessNotes}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Kolom Lokasi & Google Maps (FR-06) */}
        <div className="lg:col-span-7 bg-surface rounded-2xl overflow-hidden border border-outline/80 flex flex-col justify-between">
          {/* Visual Peta Topografi Sederhana */}
          <div className="relative w-full h-56 sm:h-64 bg-primary-container/55 flex items-center justify-center overflow-hidden border-b border-outline/70">
            <svg
              className="absolute inset-0 w-full h-full opacity-45"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="lereng-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#1B4D3E"
                    strokeWidth="0.8"
                    opacity="0.28"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lereng-grid)" />
              <path
                d="M -40 120 Q 160 35 320 110 T 680 75"
                fill="none"
                stroke="#1B4D3E"
                strokeWidth="2"
                strokeDasharray="6,4"
                opacity="0.4"
              />
              <path
                d="M -20 190 Q 200 110 380 165 T 720 130"
                fill="none"
                stroke="#1B4D3E"
                strokeWidth="2.2"
                strokeDasharray="6,4"
                opacity="0.3"
              />
              <path
                d="M 80 260 Q 220 180 310 120 T 480 25"
                fill="none"
                stroke="#C25E28"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-primary text-white px-4 py-2 rounded-xl shadow-md text-[15px] font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{villageProfile.fullName}</span>
              </div>
              <div className="w-3 h-3 bg-primary rotate-45 -mt-1.5" />
            </div>

            <div className="absolute bottom-3 left-3 bg-surface/95 px-3 py-1.5 rounded-lg text-sm font-medium text-on-surface border border-outline/70">
              {contactData.elevation}
            </div>
          </div>

          <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary leading-snug">
                    {contactData.streetAddress}
                  </h3>
                  <p className="text-[16px] text-on-surface-variant mt-0.5">
                    {contactData.regionAddress}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-outline/60 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-secondary">
                {contactData.facilities.map((facility, idx) => (
                  <span key={facility} className="inline-flex items-center gap-2">
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-outline">
                        ·
                      </span>
                    )}
                    <span>{facility}</span>
                  </span>
                ))}
              </div>
            </div>

            <a
              href={contactData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] bg-primary hover:bg-primary-hover active:scale-[0.98] text-white text-[16px] font-semibold rounded-xl shadow-xs transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Map className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Buka Lokasi di Google Maps</span>
            </a>
          </div>
        </div>

        {/* Kolom Kontak Pengelola Pokdarwis (FR-05) */}
        <div className="lg:col-span-5 bg-secondary-container/45 rounded-2xl p-6 border border-outline/80 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <Headset className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary leading-snug">
                  Dikelola Oleh {contactData.managerName}
                </h3>
                <p className="text-[16px] text-on-surface-variant mt-1 leading-relaxed">
                  {contactData.managerTagline}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-outline/70 flex flex-col gap-3 text-[16px] text-on-surface">
              <div className="flex items-start gap-3">
                <MessageCircle
                  className="w-5 h-5 text-whatsapp shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-sm text-on-surface-variant">
                    Nomor WhatsApp Resmi
                  </span>
                  <span className="font-semibold text-primary tabular-nums">
                    {contactData.whatsappDisplay}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="w-5 h-5 text-secondary shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-sm text-on-surface-variant">
                    Jam Layanan Informasi
                  </span>
                  <span className="font-medium text-on-surface">
                    {contactData.serviceHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-outline/70 flex flex-col gap-2.5 text-[16px] text-on-surface leading-relaxed">
              {contactData.bookingNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Info
                    className="w-5 h-5 text-secondary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={defaultWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[48px] bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white text-[16px] font-semibold rounded-xl shadow-xs transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Tanya Pengelola via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
