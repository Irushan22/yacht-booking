import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Pricing from "@/components/Pricing";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
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

  return (
    <div className="min-h-screen">
      <Header onBookNow={scrollToFleet} />
      <main>
        <Hero onBookNow={scrollToFleet} />
        <About />
        <Fleet onSelectYacht={handleSelectYacht} />
        <Pricing onBookNow={scrollToFleet} />
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
