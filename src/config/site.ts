/**
 * ============================================================================
 *  SITE CONFIGURATION  —  EDIT THIS FILE TO MAKE THE TEMPLATE YOURS
 * ============================================================================
 *
 * This is the single source of truth for the whole site: business details
 * (name, contact, WhatsApp, social, SEO) AND every piece of on-page copy
 * (headings, paragraphs, button labels, prices). Change the values below and
 * the site updates — you should not need to touch any component to rebrand or
 * reword anything.
 *
 * To change the yachts shown in the fleet, edit `src/data/yachts.ts`.
 * To change colors/fonts, edit the CSS variables in `src/index.css`.
 */

import aboutImage from "@/assets/yacht-deck.jpg";

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
   * Example: "971501234567" (UAE) or "14155552671" (US).
   */
  whatsappNumber: "971501234567",

  /** Public contact details shown in the footer. */
  contact: {
    phoneDisplay: "+971 50 123 4567", // human-friendly version shown to users
    email: "hello@paradiseyacht.ae",
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

  /**
   * Social links shown as icons in the footer. Leave a value empty ("") to
   * hide that icon. Use the full profile URL for Instagram/Facebook.
   */
  social: {
    instagram: "https://instagram.com/paradiseyacht",
    facebook: "https://facebook.com/paradiseyacht",
    twitter: "paradiseyacht", // X / Twitter handle WITHOUT the @
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

  /**
   * ==========================================================================
   *  PAGE CONTENT  —  all on-page copy in one place
   * ==========================================================================
   * Reword any section by editing the text below. The tokens {name}, {years}
   * and {foundedYear} are filled in automatically wherever they appear.
   */
  content: {
    /** Top navigation links (shared by the desktop header and mobile menu). */
    nav: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#fleet", label: "Our Fleet" },
      { href: "#package-builder", label: "Plan Your Trip" },
    ],

    /** "Book Now" button shown in the header. */
    bookNowLabel: "Book Now",

    hero: {
      eyebrow: "Premium Yacht Experience",
      titleLine1: "Sail Into",
      titleHighlight: "Paradise",
      subtitle:
        "Experience the ultimate luxury yacht charter. Crystal-clear waters, stunning coastlines, and memories that last forever.",
      primaryCta: "Book Your Adventure",
      secondaryCta: "Explore More",
      /** Still image shown while the background video loads. */
      posterImage:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80",
      /** Background video file (mp4). */
      videoUrl:
        "https://videos.pexels.com/video-files/32910542/14026371_3840_2160_60fps.mp4",
    },

    about: {
      eyebrow: "About Us",
      titleLead: "Your Trusted Partner for",
      titleHighlight: "Luxury Charters",
      body:
        "For over {years} years, {name} has been crafting unforgettable days at sea. From intimate sunset cruises to grand celebrations, our handpicked fleet and dedicated crew make every voyage effortless, safe, and truly memorable.",
      image: aboutImage,
      highlights: [
        "Professional, licensed crew on every charter",
        "Flexible packages for parties, tours & private events",
        "Transparent pricing with no hidden fees",
        "Easy booking — confirm directly on WhatsApp",
      ],
      /** Stats row. Years of experience and fleet size are calculated for you. */
      yearsLabel: "Years of Experience",
      fleetLabel: "Yachts in Our Fleet",
      happyGuests: "5,000+",
      happyGuestsLabel: "Happy Guests",
    },

    fleet: {
      eyebrow: "Our Fleet",
      titleLead: "Choose Your",
      titleHighlight: "Vessel",
      subtitle:
        "Select from our premium fleet of yachts, each offering a unique experience tailored to your desires.",
      /** How many yachts to show before the visitor clicks "View All". */
      initialCount: 8,
      viewDetailsLabel: "View Details",
    },

    packageBuilder: {
      eyebrow: "Tailor Made For You",
      titleLead: "Build Your",
      titleHighlight: "Perfect Package",
      subtitle:
        "Customize every detail of your voyage. Select your preferences and get an instant estimated budget.",
      /** Average yacht hourly rate used as the package base price. */
      baseRatePerHour: 200,
      duration: { min: 2, max: 10, default: 4 },
      guests: { min: 2, max: 50, default: 10 },
      /**
       * Optional extras. `fee` is a flat price unless `perGuest` is true, in
       * which case it is charged per guest. `key` must stay unique.
       */
      addOns: [
        { key: "catering", label: "Premium Catering", description: "Exclude food & drinks", fee: 45, perGuest: true },
        { key: "dj", label: "Live DJ", description: "Set the vibe with a pro DJ", fee: 400, perGuest: false },
        { key: "photography", label: "Photography", description: "Capture every moment", fee: 300, perGuest: false },
        { key: "decorations", label: "Custom Decor", description: "Themed decorations", fee: 250, perGuest: false },
      ],
    },

    cta: {
      eyebrow: "Your Voyage Awaits",
      title: "Ready to Set Sail?",
      body:
        "Book your private yacht charter today. No payment required to inquire — we'll confirm availability with you directly on WhatsApp.",
      primaryCta: "Browse Our Fleet",
      secondaryCta: "Chat on WhatsApp",
      /** Pre-filled WhatsApp message for the secondary button. */
      whatsappMessage: "Hi {name}! I'd like to know more about chartering a yacht.",
      image:
        "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1280&q=80",
    },

    footer: {
      description:
        "Premium yacht charter experiences. Creating unforgettable memories on crystal-clear waters since {foundedYear}.",
      contactHeading: "Contact Us",
      hoursHeading: "Operating Hours",
      availabilityNote: "Available for bookings year-round",
    },

    booking: {
      newBookingTitle: "Book Your Charter",
      newBookingType: "New Booking",
      timeSlots: [
        { value: "08:00", label: "8:00 AM - Morning" },
        { value: "10:00", label: "10:00 AM - Mid Morning" },
        { value: "13:00", label: "1:00 PM - Afternoon" },
        { value: "16:00", label: "4:00 PM - Late Afternoon" },
        { value: "18:00", label: "6:00 PM - Sunset" },
      ],
    },

    /**
     * ------------------------------------------------------------------------
     *  LEGAL PAGES  —  /privacy and /terms
     * ------------------------------------------------------------------------
     * IMPORTANT: This is starter boilerplate, NOT legal advice. Have a
     * qualified professional review and adapt it before you go live. Tokens
     * like {name}, {email}, {phone}, {address}, {city} are filled in for you.
     */
    legal: {
      /** Shown as "Last updated" on both pages. Format: YYYY-MM-DD. */
      lastUpdated: "2026-05-20",
      /** Banner shown at the top of every legal page. Set to "" to hide it. */
      disclaimer:
        "This is template content provided as a starting point only and does not constitute legal advice. Please review and adapt it with a qualified professional before publishing.",
      footerHeading: "Legal",

      privacy: {
        title: "Privacy Policy",
        intro:
          "This Privacy Policy explains how {name} collects, uses, and protects the information you provide when you use our website or send us a booking enquiry.",
        sections: [
          {
            heading: "Information We Collect",
            body: "When you submit a booking or custom-package enquiry we collect the details you enter — typically your name, phone number, preferred date, party size, and any message. We do not collect payment information on this website.",
          },
          {
            heading: "How We Use Your Information",
            body: "We use your details solely to respond to your enquiry, confirm availability, and arrange your charter. We do not sell your information.",
          },
          {
            heading: "WhatsApp & Third Parties",
            body: "Booking enquiries are sent through WhatsApp, so the details you submit are shared with WhatsApp/Meta Platforms to deliver your message. Our site also loads fonts from Google and media from third-party providers, which may receive your IP address as part of serving those resources.",
          },
          {
            heading: "Cookies & Tracking",
            body: "This website does not set advertising or analytics cookies by default. [TODO: update this section if you add analytics, a pixel, or a consent banner.]",
          },
          {
            heading: "Data Retention",
            body: "We keep enquiry details only as long as needed to assist you and to meet our legal and business obligations. [TODO: state your retention period.]",
          },
          {
            heading: "Your Rights",
            body: "You may request access to, correction of, or deletion of your personal data. To make a request, contact us using the details below. [TODO: tailor to the privacy laws that apply to you, e.g. UAE PDPL or GDPR.]",
          },
          {
            heading: "Contact Us",
            body: "For any privacy questions, contact {name} at {email} or {phone}, {address}.",
          },
        ],
      },

      terms: {
        title: "Terms of Service",
        intro:
          "These Terms govern your use of the {name} website and the booking enquiries you submit through it. By using the site you agree to these Terms.",
        sections: [
          {
            heading: "Bookings & Enquiries",
            body: "Submitting an enquiry is a request, not a confirmed booking. A charter is only confirmed once we agree the details with you directly (for example, via WhatsApp). We may decline or be unable to fulfil any request.",
          },
          {
            heading: "Pricing & Estimates",
            body: "Prices shown on the site, including any figure produced by the package builder, are estimates for guidance only and are not a binding quote. Final pricing is confirmed before your charter. [TODO: add taxes/fees, deposit, and payment terms.]",
          },
          {
            heading: "Cancellations & Refunds",
            body: "[TODO: describe your cancellation windows, rescheduling policy, and any deposit or refund rules.]",
          },
          {
            heading: "Conduct & Safety",
            body: "Guests must follow the instructions of the captain and crew at all times. [TODO: add your safety rules, guest conduct policy, and any age or capacity limits.]",
          },
          {
            heading: "Liability",
            body: "[TODO: add your liability and limitation-of-liability terms, reviewed by a qualified professional.]",
          },
          {
            heading: "Governing Law",
            body: "These Terms are governed by the laws applicable in {city}. [TODO: confirm the correct governing law and jurisdiction.]",
          },
          {
            heading: "Changes to These Terms",
            body: "We may update these Terms from time to time. The current version is always available on this page, with the date shown above.",
          },
          {
            heading: "Contact",
            body: "Questions about these Terms? Contact {name} at {email} or {phone}.",
          },
        ],
      },
    },
  },
} as const;

/**
 * Builds a WhatsApp click-to-chat URL with a pre-filled message.
 * @param message Plain text message; it is URL-encoded for you.
 */
export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Years the business has been operating (current year − founding year). */
export const yearsInBusiness = (): number =>
  new Date().getFullYear() - siteConfig.foundedYear;

/**
 * Fills the {name}, {foundedYear} and {years} placeholders in any copy string
 * from `siteConfig.content`. Pass `years` to override the calculated value.
 */
export const fillCopy = (text: string, years = yearsInBusiness()): string =>
  text
    .replace(/\{name\}/g, siteConfig.name)
    .replace(/\{email\}/g, siteConfig.contact.email)
    .replace(/\{phone\}/g, siteConfig.contact.phoneDisplay)
    .replace(/\{address\}/g, siteConfig.contact.address)
    .replace(/\{city\}/g, siteConfig.location.city)
    .replace(/\{url\}/g, siteConfig.url)
    .replace(/\{foundedYear\}/g, String(siteConfig.foundedYear))
    .replace(/\{years\}/g, String(years));
