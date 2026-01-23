import { Anchor, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-6 h-6 text-cta" />
              <span className="font-display text-xl font-semibold">
                Paradise Yacht
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Premium yacht charter experiences. Creating unforgettable memories
              on crystal-clear waters since 2014.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cta" />
                Marina Bay, Paradise Island
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cta" />
                +1 (234) 567-890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cta" />
                hello@paradiseyacht.com
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Operating Hours</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>Monday - Sunday</li>
              <li>8:00 AM - 8:00 PM</li>
              <li className="text-cta font-medium pt-2">
                Available for bookings year-round
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
          <p>© 2024 Paradise Yacht Charter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
