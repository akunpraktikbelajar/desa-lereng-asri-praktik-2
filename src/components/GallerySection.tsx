import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { galleryData } from '../data/wisataData';
import { GalleryModal } from './GalleryModal';
import { SafeImage } from './SafeImage';

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section
      id="galeri"
      aria-labelledby="section-galeri-title"
      className="scroll-mt-24 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 border-b border-outline/70 pb-4">
        <p className="text-sm font-semibold text-secondary">Momen Nyata</p>
        <h2
          id="section-galeri-title"
          className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight text-balance"
        >
          Galeri Kegiatan Wisatawan
        </h2>
        <p className="text-[16px] text-on-surface-variant">
          Ketuk salah satu foto untuk memperbesar dan melihat cerita di balik kegiatannya.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryData.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Perbesar foto ${item.title}`}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-surface-variant border border-outline/80 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <SafeImage
              src={item.imageUrl}
              alt={item.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex items-end p-3.5">
              <div className="flex items-center justify-between w-full gap-2 text-white">
                <span className="text-[15px] font-semibold leading-tight">
                  {item.shortLabel}
                </span>
                <ZoomIn
                  className="w-4 h-4 shrink-0 text-white/90"
                  aria-hidden="true"
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      <GalleryModal
        items={galleryData}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={(idx) => setSelectedIndex(idx)}
      />
    </section>
  );
}
