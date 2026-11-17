import { destinationsData } from '../data/wisataData';
import { SafeImage } from './SafeImage';

export function DestinationSection() {
  return (
    <section
      id="destinasi"
      aria-labelledby="section-destinasi-title"
      className="scroll-mt-24 flex flex-col gap-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-outline/70 pb-4">
        <div>
          <p className="text-sm font-semibold text-secondary">Spot Unggulan</p>
          <h2
            id="section-destinasi-title"
            className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight mt-0.5 text-balance"
          >
            Daftar Destinasi
          </h2>
        </div>
        <p className="text-[16px] text-on-surface-variant">
          {destinationsData.length} tempat wisata alam yang ramah keluarga
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinationsData.map((dest) => (
          <article
            key={dest.id}
            className="bg-surface rounded-2xl overflow-hidden border border-outline/80 flex flex-col"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface-variant">
              <SafeImage
                src={dest.imageUrl}
                alt={dest.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2 text-sm text-secondary font-medium">
                  <span>{dest.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{dest.scheduleOrAccess}</span>
                </div>

                <h3 className="text-xl font-bold text-primary leading-snug">
                  {dest.name}
                </h3>

                <p className="text-[16px] text-on-surface-variant leading-relaxed">
                  {dest.description}
                </p>
              </div>

              <div className="pt-3 border-t border-outline/60 flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="text-on-surface-variant font-medium">
                  {dest.featureLabel}
                </span>
                <span className="font-semibold text-accent">
                  {dest.highlightNote}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
