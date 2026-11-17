import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, contactData, villageProfile } from '../data/wisataData';

const NAV_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Destinasi', href: '#destinasi' },
  { label: 'Paket', href: '#paket' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(contactData.defaultWhatsappMessage);

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-outline/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zona 1: Wordmark Merek Satu Baris */}
        <a
          href="#beranda"
          className="font-display text-2xl font-bold tracking-tight text-primary whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
        >
          {villageProfile.brandName}
        </a>

        {/* Zona 2: 5 Tautan Navigasi Satu Baris (Desktop) */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] font-medium text-on-surface-variant hover:text-primary hover:underline underline-offset-4 decoration-2 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: 1 Aksi Utama + Tombol Menu Mobile */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white text-[15px] font-semibold rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Pesan WA</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-outline/80 bg-surface text-primary hover:bg-surface-variant transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Laci Navigasi Mobile */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi Mobile"
          className="md:hidden border-t border-outline/70 bg-surface px-4 py-3"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center min-h-[44px] px-3 rounded-lg text-[16px] font-medium text-on-surface hover:bg-surface-variant hover:text-primary transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
