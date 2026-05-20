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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background shadow-elevated"
        >
          {/* Decorative blur accent */}
          <div className="absolute inset-0 -z-0 opacity-20 pointer-events-none">
            <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Anchor className="w-7 h-7 text-cta" />
              <span className="text-white/90 uppercase tracking-[0.3em] text-sm font-medium">
                Your Voyage Awaits
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-5 leading-tight">
              Ready to Set Sail?
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Book your private yacht charter today. No payment required to
              inquire — we'll confirm availability with you directly on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" onClick={onBookNow}>
                Browse Our Fleet
              </Button>
              <Button variant="heroOutline" size="xl" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
