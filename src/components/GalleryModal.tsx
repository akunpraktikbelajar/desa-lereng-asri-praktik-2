import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../data/wisataData';
import { SafeImage } from './SafeImage';

interface GalleryModalProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function GalleryModal({
  items,
  selectedIndex,
  onClose,
  onSelectIndex,
}: GalleryModalProps) {
  const isOpen = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < items.length;
  const currentItem = isOpen ? items[selectedIndex] : null;

  useEffect(() => {
    if (!isOpen || selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onSelectIndex((selectedIndex + 1) % items.length);
      } else if (event.key === 'ArrowLeft') {
        onSelectIndex((selectedIndex - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || !currentItem || selectedIndex === null) {
    return null;
  }

  const handlePrev = () => {
    onSelectIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onSelectIndex((selectedIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-gallery-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-outline/80 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-4 pb-3 border-b border-outline/70">
          <h3
            id="modal-gallery-title"
            className="text-xl font-bold text-primary leading-snug"
          >
            {currentItem.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau foto"
            className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </header>

        <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-surface-variant">
          <SafeImage
            src={currentItem.imageUrl}
            alt={currentItem.imageAlt}
            loading="eager"
            className="w-full h-full object-cover"
          />

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Foto sebelumnya"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Foto berikutnya"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <p className="text-[16px] text-on-surface-variant leading-relaxed">
          {currentItem.description}
        </p>

        <footer className="pt-3 border-t border-outline/70 flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-secondary tabular-nums">
            Foto {selectedIndex + 1} dari {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 min-h-[44px] bg-primary hover:bg-primary-hover text-white text-[16px] font-semibold rounded-xl transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Tutup
          </button>
        </footer>
      </div>
    </div>
  );
}
