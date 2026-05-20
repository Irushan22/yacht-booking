import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig, fillCopy, yearsInBusiness } from "@/config/site";
import { yachts } from "@/data/yachts";

const about = siteConfig.content.about;

const About = () => {
  const years = yearsInBusiness();

  const stats = [
    { value: `${years}+`, label: about.yearsLabel },
    { value: `${yachts.length}`, label: about.fleetLabel },
    { value: about.happyGuests, label: about.happyGuestsLabel },
  ];

  return (
    <section
      id="about"
      className="bg-background overflow-hidden scroll-mt-16 lg:scroll-mt-20 lg:min-h-screen"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch lg:min-h-screen">
        {/* Image — full-bleed to the left edge and flush with the hero above */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[34rem] overflow-hidden"
        >
          <img
            src={about.image}
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
          className="px-6 py-16 sm:px-8 lg:py-24 lg:pl-12 xl:pl-16 lg:pr-8 lg:flex lg:flex-col lg:justify-center"
        >
          <div className="max-w-xl">
            <span className="text-primary text-sm font-semibold">{about.eyebrow}</span>
            <h2 className="font-display text-3xl sm:text-3xl lg:text-3xl text-foreground font-semibold mt-3 mb-5">
              {about.titleLead}{" "}
              <span className="text-primary">{about.titleHighlight}</span>
            </h2>
            <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-8">
              {fillCopy(about.body, years)}
            </p>

            <ul className="space-y-3 mb-10">
              {about.highlights.map((item) => (
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
