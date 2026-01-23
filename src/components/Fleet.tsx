import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Ruler, DollarSign } from "lucide-react";
import { yachts, Yacht } from "@/data/yachts";

interface FleetProps {
  onSelectYacht: (yacht: Yacht) => void;
}

const Fleet = ({ onSelectYacht }: FleetProps) => {
  return (
    <section id="fleet" className="py-20 lg:py-28 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-wider text-sm font-medium">
            Our Fleet
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-semibold mt-3 mb-4">
            Choose Your <span className="text-primary">Vessel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select from our premium fleet of yachts, each offering a unique experience
            tailored to your desires.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {yachts.map((yacht, index) => (
            <motion.div
              key={yacht.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-cta text-cta-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {yacht.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {yacht.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {yacht.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{yacht.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4 text-primary" />
                    <span>{yacht.length}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-cta" />
                    <span className="font-semibold text-foreground">
                      ${yacht.pricePerHour}/hr
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {yacht.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                  {yacht.features.length > 2 && (
                    <span className="text-muted-foreground text-xs px-2 py-1">
                      +{yacht.features.length - 2} more
                    </span>
                  )}
                </div>

                <Button
                  variant="cta"
                  className="w-full"
                  onClick={() => onSelectYacht(yacht)}
                >
                  Book This Yacht
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
