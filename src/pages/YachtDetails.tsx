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
      
      <main className="pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <Button 
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fleet
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-elevated aspect-[4/3] relative"
            >
              <img 
                src={yacht.image} 
                alt={yacht.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-cta text-cta-foreground font-semibold px-4 py-2 rounded-full shadow-lg">
                  {yacht.type}
                </span>
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {yacht.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {yacht.description}
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-2xl border border-border/50">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold text-lg">{yacht.capacity}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Passengers</div>
                </div>
                <div className="text-center border-l border-border/50">
                  <div className="flex justify-center mb-2">
                    <Ruler className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold text-lg">{yacht.length}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Length</div>
                </div>
                <div className="text-center border-l border-border/50">
                  <div className="flex justify-center mb-2">
                    <DollarSign className="w-6 h-6 text-cta" />
                  </div>
                  <div className="font-semibold text-lg">${yacht.pricePerHour}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Per Hour</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {yacht.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm text-primary">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="cta" 
                  className="w-full text-lg h-14 shadow-lg shadow-cta/20"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book {yacht.name} Now
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  No payment required to inquire. We'll verify availability via WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
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
