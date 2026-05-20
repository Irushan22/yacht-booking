import { Link } from "react-router-dom";
import { Anchor, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, fillCopy } from "@/config/site";

const footer = siteConfig.content.footer;

type IconProps = { className?: string };

/** Brand glyphs (lucide's brand icons are deprecated, so we inline them). */
const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M14 9h3l.5-3H14V4.5c0-.87.27-1.5 1.6-1.5H17.6V.2C17.2.13 16.2 0 15.07 0 12.6 0 11 1.5 11 4.2V6H8v3h3v9h3V9z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  </svg>
);

/** Social icons — only the links set in `siteConfig.social` are shown. */
const socialLinks = [
  { label: "Instagram", Icon: InstagramIcon, url: siteConfig.social.instagram },
  { label: "Facebook", Icon: FacebookIcon, url: siteConfig.social.facebook },
  {
    label: "X (Twitter)",
    Icon: XIcon,
    url: siteConfig.social.twitter
      ? `https://x.com/${siteConfig.social.twitter}`
      : "",
  },
].filter((link) => link.url);

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
                {siteConfig.name}
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              {fillCopy(footer.description)}
            </p>

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map(({ label, Icon, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-background/10 text-background/70 flex items-center justify-center hover:bg-cta hover:text-cta-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{footer.contactHeading}</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cta" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cta" />
                <a href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-cta transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cta" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cta transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">{footer.hoursHeading}</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>{siteConfig.hours.days}</li>
              <li>{siteConfig.hours.time}</li>
              <li className="text-cta font-medium pt-2">
                {footer.availabilityNote}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-background/40 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-cta transition-colors">
              {siteConfig.content.legal.privacy.title}
            </Link>
            <Link to="/terms" className="hover:text-cta transition-colors">
              {siteConfig.content.legal.terms.title}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
