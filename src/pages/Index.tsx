import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import PackageBuilder from "@/components/PackageBuilder";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Yacht } from "@/data/yachts";

const Index = () => {
  const [selectedYacht, setSelectedYacht] = useState<Yacht | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectYacht = (yacht: Yacht) => {
    setSelectedYacht(yacht);
    setIsModalOpen(true);
  };

  const scrollToFleet = () => {
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Paradise Yacht Charter Dubai",
    "image": "https://paradiseyacht.ae/og-image.png",
    "description": "Premium yacht rental services in Dubai and UAE. Experience luxury yacht charters, sunset cruises, and private boat parties.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Marina",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0805,
      "longitude": 55.1403
    },
    "url": "https://paradiseyacht.ae",
    "telephone": "+971556530484",
    "priceRange": "$$$"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Yacht Charter Dubai | Luxury Boat Rental UAE | Paradise Yacht"
        description="Book the finest luxury yachts in Dubai. Perfect for private parties, sunset cruises, and corporate events. Best prices for yacht rental in UAE."
        schema={schema}
      />
      <Header onBookNow={scrollToFleet} />
      <main>
        <Hero onBookNow={scrollToFleet} />
        <Fleet onSelectYacht={handleSelectYacht} />
        <PackageBuilder />
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
