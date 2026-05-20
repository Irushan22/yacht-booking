import { motion } from "framer-motion";
import { Anchor, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";

interface CTAProps {
  /** Scrolls the page to the fleet section (passed down from the page). */
  onBookNow: () => void;
}

const CTA = ({ onBookNow }: CTAProps) => {
  const handleWhatsApp = () => {
    const message = `Hi ${siteConfig.name}! I'd like to know more about chartering a yacht.`;
    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-muted text-foreground">
      {/* Decorative glow across the full bottom edge */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-x-0 -bottom-24 h-80 bg-primary opacity-20 blur-3xl" />
      </div>

      {/* Content — constrained to the same container/width as the Package section */}
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16 lg:py-24 lg:w-1/2 lg:pr-12 lg:min-h-[44rem] flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-5">
                <Anchor className="w-7 h-7 text-cta" />
                <span className="text-foreground/70 uppercase tracking-[0.3em] text-sm font-medium">
                  Your Voyage Awaits
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-3xl lg:text-4xl text-foreground font-semibold mb-5 leading-tight">
                Ready to Set Sail?
              </h2>

              <p className="text-foreground/80 text-md mb-10">
                Book your private yacht charter today. No payment required to inquire
                — we'll confirm availability with you directly on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                <Button variant="hero" size="xl" onClick={onBookNow} className="flex-1">
                  Browse Our Fleet
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={handleWhatsApp}
                  className="flex-1 hover:bg-transparent hover:text-foreground hover:border-input hover:brightness-90"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image — full-bleed to the right and bottom edges on desktop, stacked below on mobile */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-auto"
      >
        <img
          src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1280&q=80"
          alt="Luxury yacht cruising on open blue water"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default CTA;
