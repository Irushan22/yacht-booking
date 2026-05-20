import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import PackageBuilder from "@/components/PackageBuilder";
import CTA from "@/components/CTA";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Yacht } from "@/data/yachts";
import { siteConfig } from "@/config/site";

const Index = () => {
  const [selectedYacht, setSelectedYacht] = useState<Yacht | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectYacht = (yacht: Yacht) => {
    setSelectedYacht(yacht);
    setIsModalOpen(true);
  };

  // Nav "Book Now" — open the modal with no yacht pre-selected (visitor picks one).
  const openBookingModal = () => {
    setSelectedYacht(null);
    setIsModalOpen(true);
  };

  const scrollToFleet = () => {
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": `${siteConfig.url}${siteConfig.seo.ogImage}`,
    "description": siteConfig.seo.defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": siteConfig.location.city,
      "addressRegion": siteConfig.location.region,
      "postalCode": siteConfig.location.postalCode,
      "addressCountry": siteConfig.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.location.latitude,
      "longitude": siteConfig.location.longitude
    },
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phoneDisplay,
    "priceRange": siteConfig.seo.priceRange
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${siteConfig.seo.defaultTitle} | ${siteConfig.name}`}
        description={siteConfig.seo.defaultDescription}
        schema={schema}
      />
      <Header onBookNow={openBookingModal} />
      <main>
        <Hero onBookNow={scrollToFleet} />
        <About />
        <Fleet onSelectYacht={handleSelectYacht} />
        <PackageBuilder />
        <CTA onBookNow={scrollToFleet} />
      </main>
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        yacht={selectedYacht}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
