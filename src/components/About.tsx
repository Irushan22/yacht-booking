import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { yachts } from "@/data/yachts";
import aboutImage from "@/assets/yacht-deck.jpg";

const highlights = [
  "Professional, licensed crew on every charter",
  "Flexible packages for parties, tours & private events",
  "Transparent pricing with no hidden fees",
  "Easy booking — confirm directly on WhatsApp",
];

const About = () => {
  const years = new Date().getFullYear() - siteConfig.foundedYear;

  const stats = [
    { value: `${years}+`, label: "Years of Experience" },
    { value: `${yachts.length}`, label: "Yachts in Our Fleet" },
    { value: "5,000+", label: "Happy Guests" },
  ];

  return (
    <section id="about" className="bg-background overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        {/* Image — full-bleed to the left edge and flush with the hero above */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[34rem] overflow-hidden"
        >
          <img
            src={aboutImage}
            alt={`${siteConfig.name} luxury yacht charter`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="px-6 py-16 sm:px-8 lg:py-24 lg:pl-12 xl:pl-16 lg:pr-8"
        >
          <div className="max-w-xl">
            <span className="text-primary text-sm font-semibold">About Us</span>
            <h2 className="font-display text-3xl sm:text-3xl lg:text-3xl text-foreground font-semibold mt-3 mb-5">
              Your Trusted Partner for{" "}
              <span className="text-primary">Luxury Charters</span>
            </h2>
            <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-8">
              For over {years} years, {siteConfig.name} has been crafting
              unforgettable days at sea. From intimate sunset cruises to grand
              celebrations, our handpicked fleet and dedicated crew make every
              voyage effortless, safe, and truly memorable.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
