import { motion } from "framer-motion";
import { Waves, Users, Clock, Shield } from "lucide-react";
import yachtDeck from "@/assets/yacht-deck.jpg";

const features = [
  {
    icon: Waves,
    title: "Pristine Waters",
    description: "Explore crystal-clear turquoise waters and hidden coves",
  },
  {
    icon: Users,
    title: "Expert Crew",
    description: "Professional captain and crew for a safe, memorable journey",
  },
  {
    icon: Clock,
    title: "Flexible Tours",
    description: "Half-day, full-day, and sunset cruises available",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Modern equipment and certified safety standards",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={yachtDeck}
                alt="Luxury yacht deck with ocean view"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-cta text-cta-foreground px-6 py-4 rounded-xl shadow-glow"
            >
              <div className="text-3xl font-bold font-display">10+</div>
              <div className="text-sm">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-wider text-sm font-medium">
              About Our Charter
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-semibold mt-3 mb-6">
              Unforgettable{" "}
              <span className="text-primary">Ocean Adventures</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Discover the magic of the sea aboard our luxury yacht. Whether
              you're celebrating a special occasion or seeking a peaceful escape,
              we craft personalized experiences that exceed expectations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
