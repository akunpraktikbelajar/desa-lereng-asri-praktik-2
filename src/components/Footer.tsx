import { Trees } from 'lucide-react';
import { villageProfile } from '../data/wisataData';

const FOOTER_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Destinasi', href: '#destinasi' },
  { label: 'Paket', href: '#paket' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-outline/80 bg-surface mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col gap-1.5 items-center md:items-start">
          <div className="flex items-center gap-2 text-primary font-display text-xl font-bold">
            <Trees className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{villageProfile.fullName}</span>
          </div>
          <p className="text-[15px] text-on-surface-variant max-w-md">
            {villageProfile.footerTagline}
          </p>
        </div>

        <nav aria-label="Navigasi Footer" className="flex flex-wrap items-center justify-center gap-5">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-outline/60 py-4 px-4 text-center text-sm text-secondary">
        {villageProfile.copyrightText}
      </div>
    </footer>
  );
}
