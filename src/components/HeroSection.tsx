import { Compass, MapPin, Thermometer, Users } from 'lucide-react';
import { villageProfile, type VillageHighlight } from '../data/wisataData';
import { SafeImage } from './SafeImage';

function HighlightIcon({ name }: { name: VillageHighlight['iconName'] }) {
  switch (name) {
    case 'thermostat':
      return <Thermometer className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />;
    case 'distance':
      return <MapPin className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />;
    case 'family':
      return <Users className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />;
  }
}

export function HeroSection() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="scroll-mt-20 pt-5 sm:pt-8"
    >
      {/* FR-01: Foto Utama Panorama & Profil Singkat Desa */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-outline/60 shadow-sm aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] bg-surface-variant">
        <SafeImage
          src={villageProfile.heroImageUrl}
          alt={villageProfile.heroImageAlt}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 text-white">
          <div className="max-w-2xl flex flex-col gap-3">
            <p className="text-sm sm:text-[15px] font-medium text-white/90 tracking-wide">
              {villageProfile.elevationLabel}
            </p>
            <h1
              id="hero-title"
              className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-white text-balance"
            >
              {villageProfile.heroTitle}
            </h1>
            <p className="text-[16px] sm:text-lg text-white/95 leading-relaxed max-w-xl">
              {villageProfile.heroDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] bg-accent hover:bg-[#a94f20] active:scale-[0.98] text-white text-[16px] font-semibold rounded-xl shadow-sm transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Lihat Paket Wisata</span>
              </a>
              <a
                href="#destinasi"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/35 text-white text-[16px] font-medium rounded-xl transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Compass className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Jelajahi Destinasi</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ringkasan Karakteristik Desa */}
      <div className="mt-4 bg-surface rounded-2xl border border-outline/80 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-outline/70">
        {villageProfile.highlights.map((item) => (
          <div
            key={item.id}
            className="px-5 py-4 flex items-center sm:justify-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shrink-0">
              <HighlightIcon name={item.iconName} />
            </div>
            <div>
              <p className="text-[17px] font-bold text-primary leading-tight">
                {item.value}
              </p>
              <p className="text-[15px] text-on-surface-variant leading-snug">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
