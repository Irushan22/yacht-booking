import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  Users,
  Clock,
  Calendar as CalendarIcon,
  Music,
  Utensils,
  Camera,
  Sparkles,
  Calculator,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/config/site";

const PackageBuilder = () => {
  const [duration, setDuration] = useState([4]);
  const [guests, setGuests] = useState([10]);
  const [date, setDate] = useState<Date>();
  const [addOns, setAddOns] = useState({
    catering: false,
    dj: false,
    photography: false,
    decorations: false,
  });

  // Pricing constants (Estimated)
  const BASE_RATE_PER_HOUR = 200; // Average yacht hourly rate
  const PER_HEAD_CATERING = 45;
  const DJ_FLAT_FEE = 400;
  const PHOTOGRAPHY_FLAT_FEE = 300;
  const DECOR_FLAT_FEE = 250;

  const estimatedBudget = useMemo(() => {
    let total = duration[0] * BASE_RATE_PER_HOUR;

    if (addOns.catering) {
      total += guests[0] * PER_HEAD_CATERING;
    }
    if (addOns.dj) total += DJ_FLAT_FEE;
    if (addOns.photography) total += PHOTOGRAPHY_FLAT_FEE;
    if (addOns.decorations) total += DECOR_FLAT_FEE;

    return total;
  }, [duration, guests, addOns]);

  const handleEnquire = () => {
    const formattedDate = date
      ? format(date, "EEEE, MMMM do, yyyy")
      : "Date not selected";
    const selectedAddOns = Object.entries(addOns)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(", ");

    const message = `✨ *Custom Package Enquiry*

📅 *Date:* ${formattedDate}
⏰ *Duration:* ${duration[0]} Hours
👥 *Guests:* ${guests[0]} People

🎨 *Add-ons:*
${selectedAddOns || "None selected"}

💰 *Estimated Budget:* $${estimatedBudget}

_I would like to check availability for this custom package._`;

    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <section
      id="package-builder"
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cta rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold">
            Tailor Made For You
          </span>
          <h2 className="font-display text-3xl sm:text-3xl lg:text-3xl text-foreground font-semibold mt-3 mb-4">
            Build Your <span className="text-primary">Perfect Package</span>
          </h2>
          <p className="text-foreground/80 text-sm font-medium max-w-2xl mx-auto">
            Customize every detail of your voyage. Select your preferences and
            get an instant estimated budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-0 items-stretch max-w-6xl mx-auto">
          {/* Builder Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-card rounded-none p-6 md:p-10 shadow-soft border border-border/50"
          >
            <div className="space-y-10">
              {/* Date */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  When should we set sail?
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-12 text-base",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Duration Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Duration
                  </Label>
                  <span className="text-xl font-bold text-foreground">
                    {duration[0]} Hours
                  </span>
                </div>
                <Slider
                  value={duration}
                  min={2}
                  max={10}
                  step={1}
                  onValueChange={setDuration}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2 Hours</span>
                  <span>10 Hours</span>
                </div>
              </div>

              {/* Guests Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Guest Count
                  </Label>
                  <span className="text-xl font-bold text-foreground">
                    {guests[0]} People
                  </span>
                </div>
                <Slider
                  value={guests}
                  min={2}
                  max={50}
                  step={1}
                  onValueChange={setGuests}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2 People</span>
                  <span>50 People</span>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Enhance Your Experience
                </Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className={`flex items-start space-x-3 p-4 rounded-xl border transition-all cursor-pointer ${addOns.catering ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    onClick={() =>
                      setAddOns((prev) => ({
                        ...prev,
                        catering: !prev.catering,
                      }))
                    }
                  >
                    <Checkbox
                      checked={addOns.catering}
                      id="catering"
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none pointer-events-none">
                      <label
                        htmlFor="catering"
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      >
                        <Utensils className="w-4 h-4 text-cta" /> Premium
                        Catering
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Exclude food & drinks (${PER_HEAD_CATERING}/person)
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-3 p-4 rounded-xl border transition-all cursor-pointer ${addOns.dj ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    onClick={() =>
                      setAddOns((prev) => ({ ...prev, dj: !prev.dj }))
                    }
                  >
                    <Checkbox checked={addOns.dj} id="dj" className="mt-1" />
                    <div className="grid gap-1.5 leading-none pointer-events-none">
                      <label
                        htmlFor="dj"
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      >
                        <Music className="w-4 h-4 text-cta" /> Live DJ
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Set the vibe with a pro DJ (${DJ_FLAT_FEE})
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-3 p-4 rounded-xl border transition-all cursor-pointer ${addOns.photography ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    onClick={() =>
                      setAddOns((prev) => ({
                        ...prev,
                        photography: !prev.photography,
                      }))
                    }
                  >
                    <Checkbox
                      checked={addOns.photography}
                      id="photography"
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none pointer-events-none">
                      <label
                        htmlFor="photography"
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      >
                        <Camera className="w-4 h-4 text-cta" /> Photography
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Capture every moment (${PHOTOGRAPHY_FLAT_FEE})
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-3 p-4 rounded-xl border transition-all cursor-pointer ${addOns.decorations ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    onClick={() =>
                      setAddOns((prev) => ({
                        ...prev,
                        decorations: !prev.decorations,
                      }))
                    }
                  >
                    <Checkbox
                      checked={addOns.decorations}
                      id="decorations"
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none pointer-events-none">
                      <label
                        htmlFor="decorations"
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-cta" /> Custom Decor
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Themed decorations (${DECOR_FLAT_FEE})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Budget Estimator Sticky */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 flex"
          >
            <div className="bg-foreground text-background rounded-none p-8 shadow-elevated w-full flex flex-col justify-center">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-cta flex items-center justify-center text-cta-foreground mb-2">
                  <Calculator className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl font-medium opacity-90">
                    Estimated Budget
                  </h3>
                  <p className="text-4xl md:text-5xl font-bold font-display mt-2">
                    ${estimatedBudget}
                  </p>
                  <p className="text-sm opacity-60 mt-2">
                    *Prices are approximate
                  </p>
                </div>

                <div className="w-full h-px bg-white/10 my-4"></div>

                <ul className="w-full space-y-3 text-sm opacity-80">
                  <li className="flex justify-between">
                    <span>Duration ({duration[0]}h)</span>
                    <span>${duration[0] * BASE_RATE_PER_HOUR}</span>
                  </li>
                  {addOns.catering && (
                    <li className="flex justify-between">
                      <span>Catering ({guests[0]} ppl)</span>
                      <span>${guests[0] * PER_HEAD_CATERING}</span>
                    </li>
                  )}
                  {addOns.dj && (
                    <li className="flex justify-between">
                      <span>Live DJ</span>
                      <span>${DJ_FLAT_FEE}</span>
                    </li>
                  )}
                  {addOns.photography && (
                    <li className="flex justify-between">
                      <span>Photography</span>
                      <span>${PHOTOGRAPHY_FLAT_FEE}</span>
                    </li>
                  )}
                  {addOns.decorations && (
                    <li className="flex justify-between">
                      <span>Decorations</span>
                      <span>${DECOR_FLAT_FEE}</span>
                    </li>
                  )}
                </ul>

                <Button
                  variant="cta"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold mt-6 shadow-lg shadow-cta/20"
                  onClick={handleEnquire}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackageBuilder;
