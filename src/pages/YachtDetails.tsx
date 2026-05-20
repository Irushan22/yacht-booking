import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { yachts } from "@/data/yachts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Users, Ruler, DollarSign, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

const YachtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const yacht = yachts.find((y) => y.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!yacht) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-display font-semibold mb-4">Yacht not found</h1>
        <Button onClick={() => navigate("/")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Fleet
        </Button>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": yacht.name,
    "image": yacht.image, // Ensure this is a full URL or handled in SEO component
    "description": yacht.description,
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": siteConfig.seo.priceCurrency,
      "price": yacht.pricePerHour,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": yacht.pricePerHour,
        "priceCurrency": siteConfig.seo.priceCurrency,
        "unitCode": "HUR" // Per Hour
      },
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${yacht.name} | Luxury Yacht Charter | ${siteConfig.name}`}
        description={`Book ${yacht.name} (${yacht.type}) in Dubai. ${yacht.description} Capacity: ${yacht.capacity} guests. Price: $${yacht.pricePerHour}/hour.`}
        image={yacht.image}
        schema={schema}
        type="product"
        canonical={`/yacht/${yacht.id}`}
      />
      <Header onBookNow={() => setIsModalOpen(true)} alwaysOpaque={true} />
      
      <main>
        {/* Full-height split: image flush to the left edge, content fills the viewport */}
        <section className="relative grid lg:grid-cols-2 lg:h-screen">
          {/* Image — flush to the left/bottom edges, sits directly under the fixed navbar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-72 sm:h-96 lg:h-screen"
          >
            <img
              src={yacht.image}
              alt={yacht.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Details — full viewport height, scrolls internally if the content is tall */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 pt-10 lg:pt-24 pb-12"
          >
            <div className="max-w-xl w-full mx-auto lg:mx-0 space-y-5">
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                className="-ml-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Fleet
              </Button>

              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {yacht.name}
                </h1>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed line-clamp-3">
                  {yacht.description}
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-card rounded-2xl border border-border/50">
                <div className="text-center">
                  <div className="flex justify-center mb-1.5">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-semibold text-base">{yacht.capacity}</div>
                  <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wider">Passengers</div>
                </div>
                <div className="text-center border-l border-border/50">
                  <div className="flex justify-center mb-1.5">
                    <Ruler className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-semibold text-base">{yacht.length}</div>
                  <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wider">Length</div>
                </div>
                <div className="text-center border-l border-border/50">
                  <div className="flex justify-center mb-1.5">
                    <DollarSign className="w-5 h-5 text-cta" />
                  </div>
                  <div className="font-semibold text-base">${yacht.pricePerHour}</div>
                  <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wider">Per Hour</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-base font-semibold mb-2.5">Features & Amenities</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {yacht.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 p-2 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-6 h-6 shrink-0 rounded-full bg-background flex items-center justify-center shadow-sm text-primary">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-1">
                <Button
                  size="lg"
                  variant="cta"
                  className="w-full text-base h-12 shadow-lg shadow-cta/20"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book {yacht.name} Now
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  No payment required to inquire. We'll verify availability via WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <BookingModal
        yacht={yacht}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default YachtDetails;
