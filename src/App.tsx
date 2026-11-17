/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContactSection } from './components/ContactSection';
import { DestinationSection } from './components/DestinationSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PackageSection } from './components/PackageSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14 sm:gap-16">
        <HeroSection />
        <DestinationSection />
        <PackageSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
