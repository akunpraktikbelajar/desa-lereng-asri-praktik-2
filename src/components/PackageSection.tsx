import { CheckCircle2, MessageCircle } from 'lucide-react';
import {
  buildPackageWhatsAppMessage,
  buildWhatsAppUrl,
  formatRupiah,
  packagesData,
} from '../data/wisataData';

export function PackageSection() {
  return (
    <section
      id="paket"
      aria-labelledby="section-paket-title"
      className="scroll-mt-24 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 border-b border-outline/70 pb-4">
        <p className="text-sm font-semibold text-accent">Harga Transparan</p>
        <h2
          id="section-paket-title"
          className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight text-balance"
        >
          Pilihan Paket Wisata
        </h2>
        <p className="text-[16px] text-on-surface-variant max-w-2xl">
          Semua paket sudah termasuk tiket masuk, pemandu warga lokal, dan fasilitas desa. Pemesanan langsung dilayani melalui WhatsApp pengelola Pokdarwis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {packagesData.map((pkg) => {
          const waUrl = buildWhatsAppUrl(buildPackageWhatsAppMessage(pkg));

          return (
            <article
              key={pkg.id}
              className={`bg-surface rounded-2xl p-6 flex flex-col justify-between gap-6 ${
                pkg.isFeatured
                  ? 'border-2 border-primary shadow-sm'
                  : 'border border-outline/80'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    <span>{pkg.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pkg.duration}</span>
                  </div>
                  {pkg.isFeatured && pkg.featuredLabel && (
                    <span className="text-sm font-semibold text-accent">
                      {pkg.featuredLabel}
                    </span>
                  )}
                </div>

                <header>
                  <h3 className="text-xl font-bold text-primary leading-snug">
                    {pkg.name}
                  </h3>
                  <p className="text-[16px] text-on-surface-variant mt-1.5 leading-relaxed">
                    {pkg.description}
                  </p>
                </header>

                <div className="pt-3 border-t border-outline/60 flex flex-col gap-2.5">
                  <p className="text-sm font-semibold text-primary">
                    {pkg.includedTitle}:
                  </p>
                  <ul className="flex flex-col gap-2 text-[16px] text-on-surface leading-relaxed">
                    {pkg.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-5 h-5 text-whatsapp shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className="pt-4 border-t border-outline/70 flex flex-col gap-4">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <span className="block text-sm text-on-surface-variant">
                      Harga Per Orang
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-bold text-accent tabular-nums">
                        {formatRupiah(pkg.pricePerPerson)}
                      </span>
                      <span className="text-[16px] text-on-surface-variant">
                        / orang
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-secondary">
                    {pkg.minParticipants}
                  </span>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[48px] bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white text-[16px] font-semibold rounded-xl shadow-xs transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{pkg.ctaLabel}</span>
                </a>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}
