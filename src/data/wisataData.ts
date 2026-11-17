/**
 * BERKAS DATA TERPUSAT DESA WISATA LERENG ASRI
 * ------------------------------------------------------------
 * Pengelola (Pokdarwis) cukup mengubah isi berkas ini untuk
 * memperbarui profil desa, destinasi, paket, harga, foto,
 * nomor WhatsApp, dan tautan Google Maps tanpa menyentuh kode UI.
 */

export interface VillageHighlight {
  id: string;
  value: string;
  label: string;
  iconName: 'thermostat' | 'distance' | 'family';
}

export interface DestinationItem {
  id: string;
  name: string;
  categoryLabel: string;
  scheduleOrAccess: string;
  description: string;
  featureLabel: string;
  highlightNote: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PackageItem {
  id: string;
  name: string;
  categoryLabel: string;
  duration: string;
  description: string;
  includedTitle: string;
  activities: string[];
  pricePerPerson: number;
  minParticipants: string;
  ctaLabel: string;
  isFeatured?: boolean;
  featuredLabel?: string;
}

export interface GalleryItem {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappDisplay: string;
  defaultWhatsappMessage: string;
  managerName: string;
  managerTagline: string;
  serviceHours: string;
  streetAddress: string;
  regionAddress: string;
  elevation: string;
  accessNotes: string;
  facilities: string[];
  bookingNotes: string[];
  googleMapsUrl: string;
}

export const villageProfile = {
  brandName: 'Lereng Asri',
  fullName: 'Desa Wisata Lereng Asri',
  elevationLabel: '1.200 mdpl · Udara Sejuk Pegunungan',
  heroTitle: 'Sugeng Rawuh di Desa Wisata Lereng Asri',
  heroDescription:
    'Lepas penat di perbukitan asri, nikmati udara murni, hamparan kebun teh hijau, dan kehangatan tulus warga desa.',
  heroImageUrl: '/src/assets/images/hero_lereng_asri_1794888622236.jpg',
  heroImageAlt: 'Panorama alam perbukitan hijau Desa Wisata Lereng Asri di pagi hari',
  footerTagline: 'Maju bersama warga desa, merawat alam lestari untuk generasi masa depan.',
  copyrightText: '© 2026 Pokdarwis Desa Wisata Lereng Asri. Hak Cipta Dilindungi.',
  highlights: [
    {
      id: 'suhu',
      value: '18° – 22°C',
      label: 'Sejuk Alami',
      iconName: 'thermostat',
    },
    {
      id: 'jarak',
      value: '45 Menit',
      label: 'Dari Pusat Kota',
      iconName: 'distance',
    },
    {
      id: 'keluarga',
      value: 'Ramah Keluarga',
      label: 'Anak & Lansia',
      iconName: 'family',
    },
  ] as VillageHighlight[],
};

export const destinationsData: DestinationItem[] = [
  {
    id: 'kebun-teh-lembah-pinus',
    name: 'Perkebunan Teh Lembah Pinus',
    categoryLabel: 'Paling Asri',
    scheduleOrAccess: '06.00 – 17.00 WIB',
    description:
      'Hamparan teh hijau berkabut dengan jembatan kayu estetik dan spot foto matahari terbit yang ramah bagi seluruh anggota keluarga.',
    featureLabel: 'Spot Foto & Edukasi',
    highlightNote: 'Gratis Tiket Masuk Paket',
    imageUrl: '/src/assets/images/destinasi_kebun_teh_1794888621692.jpg',
    imageAlt: 'Perkebunan Teh Lembah Pinus Desa Wisata Lereng Asri dengan jembatan kayu',
  },
  {
    id: 'curug-wening',
    name: 'Curug Wening & Mata Air Alami',
    categoryLabel: 'Air Alami',
    scheduleOrAccess: 'Jalur Ramah Pemula',
    description:
      'Air terjun berair jernih segar yang mengalir langsung dari mata air pegunungan, dikelilingi pepohonan rindang dan kolam dangkal yang aman untuk anak-anak.',
    featureLabel: 'Kolam Alami Dangkal',
    highlightNote: 'Fasilitas Bilas Bersih',
    imageUrl: '/src/assets/images/destinasi_curug_wening_1794888622471.jpg',
    imageAlt: 'Curug Wening mata air alami di kaki gunung Lereng Asri',
  },
  {
    id: 'puncak-kemah-pinus',
    name: 'Puncak Kemah Pinus Asri',
    categoryLabel: 'Camping & Sunset',
    scheduleOrAccess: 'Buka 24 Jam (Area Kemah)',
    description:
      'Area berkemah dan bersantai di bawah naungan pohon pinus rindang dengan pemandangan senja pegunungan dan hangatnya perapian desa.',
    featureLabel: 'Toilet & Listrik Tersedia',
    highlightNote: 'Tersedia Tenda Sewa',
    imageUrl: '/src/assets/images/destinasi_kemah_pinus_1794888623255.jpg',
    imageAlt: 'Bumi Perkemahan Puncak Kemah Pinus Asri saat matahari terbenam',
  },
];

export const packagesData: PackageItem[] = [
  {
    id: 'paket-jelajah-teh-curug',
    name: 'Paket Jelajah Teh & Curug',
    categoryLabel: 'Paket 1 Hari',
    duration: '08.00 – 16.00 WIB',
    description:
      'Cocok untuk keluarga dan rombongan santai yang ingin menikmati suasana pedesaan yang sejuk tanpa menginap.',
    includedTitle: 'Kegiatan yang Didapat',
    activities: [
      'Keliling kebun teh & praktik memetik pucuk teh segar didampingi warga',
      'Jalan santai ke Curug Wening & bermain air alami pegunungan',
      'Makan siang bersama khas desa (Nasi Liwet komplit daun pisang)',
      'Gratis teh sangrai khas Lereng Asri untuk dibawa pulang',
    ],
    pricePerPerson: 95000,
    minParticipants: 'Min. 4 orang',
    ctaLabel: 'Pesan Paket via WhatsApp',
    isFeatured: true,
    featuredLabel: 'Paling Diminati Keluarga',
  },
  {
    id: 'paket-kemah-pinus',
    name: 'Paket Kemah Pinus & Api Unggun',
    categoryLabel: 'Paket 2D1N',
    duration: '2 Hari 1 Malam',
    description:
      'Pengalaman tidur di bawah langit berbintang lereng gunung dengan tenda lengkap yang nyaman dan hangatnya api unggun.',
    includedTitle: 'Fasilitas Termasuk',
    activities: [
      'Tenda dome kapasitas 4 orang lengkap dengan matras, kasur busa, & sleeping bag',
      'Makan 3 kali (makan malam, sarapan pagi, & sajian jagung bakar api unggun)',
      'Akses toilet bersih, mushola, titik listrik, dan pemandu kemah lokal',
    ],
    pricePerPerson: 185000,
    minParticipants: 'Min. 2 orang',
    ctaLabel: 'Pesan Paket via WhatsApp',
  },
  {
    id: 'paket-rombongan-budaya',
    name: 'Paket Rombongan & Budaya Desa',
    categoryLabel: 'Rombongan / Komunitas',
    duration: '1 Hari Penuh',
    description:
      'Kegiatan fun games outbound di padang rumput, workshop kerajinan bambu bersama pengrajin desa, dan makan siang prasmanan.',
    includedTitle: 'Termasuk Dalam Paket',
    activities: [
      'Fasilitator outbound berpengalaman & permainan kekompakan tim',
      'Bahan workshop anyaman bambu (hasil karya dapat dibawa pulang)',
      'Makan siang prasmanan khas desa & fasilitas pendopo beserta sound system',
    ],
    pricePerPerson: 120000,
    minParticipants: 'Min. 20 orang',
    ctaLabel: 'Konsultasi Rombongan via WA',
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'petik-teh',
    shortLabel: 'Petik Teh',
    title: 'Petik Daun Teh Segar',
    description:
      'Kegiatan memetik pucuk teh segar pagi hari dipandu petani teh lokal dengan suasana ramah dan edukatif untuk anak-anak maupun orang tua.',
    imageUrl: '/src/assets/images/galeri_petik_teh_1794888624416.jpg',
    imageAlt: 'Wisatawan dan petani lokal memetik daun teh segar di kebun teh',
  },
  {
    id: 'kuliner-liwet',
    shortLabel: 'Kuliner Liwet',
    title: 'Kuliner Liwet Desa',
    description:
      'Sajian tradisional nasi liwet hangat di atas daun pisang dengan ikan bakar segar, tempe goreng, lalapan kebun, dan sambal terasi khas lereng.',
    imageUrl: '/src/assets/images/galeri_kuliner_liwet_1794888623920.jpg',
    imageAlt: 'Hidangan nasi liwet khas desa wisata di atas daun pisang',
  },
  {
    id: 'api-unggun',
    shortLabel: 'Api Unggun',
    title: 'Hangatnya Api Unggun Pinus',
    description:
      'Malam kebersamaan di bumi perkemahan pinus di bawah langit malam bertabur bintang dengan udara pegunungan yang sejuk.',
    imageUrl: '/src/assets/images/galeri_api_unggun_1794888624280.jpg',
    imageAlt: 'Suasana hangat api unggun malam hari di perkemahan hutan pinus',
  },
  {
    id: 'kerajinan-bambu',
    shortLabel: 'Anyam Bambu',
    title: 'Workshop Kerajinan Bambu',
    description:
      'Belajar menganyam wadah bambu langsung dari tetua perajin desa yang sabar dan bersahabat di pendopo terbuka.',
    imageUrl: '/src/assets/images/galeri_kerajinan_bambu_1794888624978.jpg',
    imageAlt: 'Pengrajin desa membimbing anak menganyam bambu di pendopo kayu',
  },
];

export const contactData: ContactInfo = {
  whatsappNumber: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  defaultWhatsappMessage:
    'Halo Pengelola Desa Wisata Lereng Asri, saya ingin menanyakan informasi kunjungan dan paket wisata.',
  managerName: 'Pokdarwis Lereng Asri',
  managerTagline: 'Kelompok Sadar Wisata warga desa asli yang siap melayani dengan tulus.',
  serviceHours: 'Setiap hari, 07.00 – 20.00 WIB',
  streetAddress: 'Jl. Perkebunan Pinus No. 12, Lereng Asri',
  regionAddress: 'Kecamatan Bukit Damai, Kabupaten Lereng Gunung, Jawa Tengah 56351',
  elevation: 'Ketinggian: 1.200 mdpl',
  accessNotes:
    'Jalan beraspal mulus hingga area parkir desa wisata. Dapat diakses oleh motor, mobil keluarga, hingga bus medium 30 seat.',
  facilities: ['Parkir Luas (Bus Masuk)', 'Mushola & Toilet Bersih'],
  bookingNotes: [
    'Reservasi disarankan H-2 agar tim desa dapat menyiapkan pemandu dan bahan makan segar petik kebun.',
    'Tanpa proses rumit atau login: konfirmasi jadwal, jumlah peserta, dan konsultasi rute cukup melalui WhatsApp.',
  ],
  googleMapsUrl: 'https://maps.google.com/?q=Desa+Wisata+Lereng+Asri',
};

export function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

export function buildWhatsAppUrl(message: string, phoneNumber = contactData.whatsappNumber): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function buildPackageWhatsAppMessage(pkg: PackageItem): string {
  return `Halo Pengelola ${villageProfile.fullName}, saya ingin memesan ${pkg.name} (${formatRupiah(pkg.pricePerPerson)}/orang). Mohon informasi ketersediaan jadwal.`;
}
