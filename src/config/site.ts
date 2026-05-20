/**
 * ============================================================================
 *  SITE CONFIGURATION  —  EDIT THIS FILE TO MAKE THE TEMPLATE YOURS
 * ============================================================================
 *
 * This is the single source of truth for all business details (name, contact,
 * WhatsApp number, social links, SEO defaults). Change the values below and the
 * whole site updates — you should not need to touch any component to rebrand.
 *
 * To change the yachts shown in the fleet, edit `src/data/yachts.ts`.
 * To change colors/fonts, edit the CSS variables in `src/index.css`.
 */

export const siteConfig = {
  /** Brand name shown in the header, footer, and page titles. */
  name: "Paradise Yacht",

  /** Short tagline used in the hero and meta descriptions. */
  tagline: "Premium Yacht Experience",

  /**
   * Production domain, WITHOUT a trailing slash, e.g. "https://yourdomain.com".
   * Used to build canonical URLs, the sitemap, and Open Graph image links.
   */
  url: "https://paradiseyacht.ae",

  /**
   * Destination WhatsApp number in INTERNATIONAL format, digits only.
   * Booking and enquiry forms open a WhatsApp chat to this number.
   * Example: "971556530484" (UAE) or "14155552671" (US).
   */
  whatsappNumber: "971556530484",

  /** Public contact details shown in the footer. */
  contact: {
    phoneDisplay: "+971 55 653 0484", // human-friendly version shown to users
    email: "hello@paradiseyacht.com",
    address: "Dubai Marina, Dubai, UAE",
  },

  /** Geographic info used for local-business structured data (SEO). */
  location: {
    city: "Dubai",
    region: "Dubai",
    country: "AE", // ISO 3166-1 alpha-2 country code
    postalCode: "00000",
    latitude: 25.0805,
    longitude: 55.1403,
  },

  /** Operating hours shown in the footer. */
  hours: {
    days: "Monday - Sunday",
    time: "8:00 AM - 8:00 PM",
  },

  /** Social links. Leave a value empty ("") to hide that link. */
  social: {
    instagram: "",
    facebook: "",
    twitter: "", // X / Twitter handle WITHOUT the @, e.g. "paradiseyacht"
  },

  /** Default SEO metadata used as fallbacks across pages. */
  seo: {
    defaultTitle: "Yacht Charter | Luxury Boat Rental",
    defaultDescription:
      "Book the finest luxury yachts. Perfect for private parties, sunset cruises, and corporate events. Best prices for yacht rental.",
    /** OG/social share image. Path is relative to the site root (in /public). */
    ogImage: "/og-image.png",
    priceCurrency: "USD", // ISO 4217 currency code used in pricing
    priceRange: "$$$",
  },

  /** Founding year — used in the footer copyright and "since" copy. */
  foundedYear: 2014,
} as const;

/**
 * Builds a WhatsApp click-to-chat URL with a pre-filled message.
 * @param message Plain text message; it is URL-encoded for you.
 */
export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
