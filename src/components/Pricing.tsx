import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PricingProps {
  onBookNow: () => void;
}

const packages = [
  {
    name: "Sunset Cruise",
    duration: "3 Hours",
    price: 299,
    popular: false,
    features: [
      "Up to 6 passengers",
      "Welcome drinks included",
      "Stunning sunset views",
      "Professional captain",
    ],
  },
  {
    name: "Half-Day Adventure",
    duration: "4 Hours",
    price: 449,
    popular: true,
    features: [
      "Up to 8 passengers",
      "Light refreshments",
      "Snorkeling equipment",
      "Swimming stops",
      "Photo package",
    ],
  },
  {
    name: "Full-Day Escape",
    duration: "8 Hours",
    price: 799,
    popular: false,
    features: [
      "Up to 10 passengers",
      "Gourmet lunch included",
      "All water activities",
      "Multiple destinations",
      "Premium bar service",
    ],
  },
];

const Pricing = ({ onBookNow }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-wider text-sm font-medium">
            Our Packages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-semibold mt-3 mb-4">
            Choose Your <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the perfect charter package for your group. All packages include
            safety equipment and an experienced crew.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft transition-all duration-300 hover:shadow-elevated ${
                pkg.popular ? "ring-2 ring-cta scale-[1.02]" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl text-foreground font-semibold mb-1">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm">{pkg.duration}</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-4xl lg:text-5xl font-bold font-display text-foreground">
                  ${pkg.price}
                </span>
                <span className="text-muted-foreground"> / trip</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "cta" : "outline"}
                size="lg"
                className="w-full"
                onClick={onBookNow}
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
