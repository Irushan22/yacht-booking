# 🛥️ Yacht Charter — Website Template

A modern, fully responsive **yacht charter & booking website** built with React,
TypeScript, Tailwind CSS, and shadcn/ui. Bookings and custom-package enquiries
are sent straight to your **WhatsApp** — no backend, no database, and no payment
gateway to set up. Deploy it as a static site anywhere.

> **Make it yours in minutes:** edit one config file
> ([`src/config/site.ts`](src/config/site.ts)) and your yacht list
> ([`src/data/yachts.ts`](src/data/yachts.ts)).

---

## ✨ Features

- ⚡️ **Vite + React 18 + TypeScript** — fast dev server, instant HMR.
- 🎨 **Tailwind CSS + shadcn/ui** — 40+ accessible, themeable UI components.
- 📱 **Fully responsive** — looks great on mobile, tablet, and desktop.
- 💬 **WhatsApp bookings** — the booking form and package builder open a
  pre-filled WhatsApp chat. Zero backend required.
- 🧮 **Interactive package builder** — guests/duration sliders + add-ons with a
  live budget estimate.
- 🛥️ **Fleet listing + detail pages** — each yacht gets its own SEO-friendly page.
- 🔍 **SEO-ready** — per-page meta tags, Open Graph/Twitter cards, JSON-LD
  structured data (LocalBusiness + Product), `sitemap.xml`, and `robots.txt`.
- 🎬 **Smooth animations** with Framer Motion.

## 🧱 Tech Stack

| Area        | Choice                                   |
| ----------- | ---------------------------------------- |
| Build tool  | Vite 5                                   |
| Framework   | React 18 + TypeScript                    |
| Styling     | Tailwind CSS 3 + `tailwindcss-animate`   |
| Components  | shadcn/ui (Radix UI primitives)          |
| Routing     | React Router 6                           |
| Forms       | React Hook Form + Zod validation         |
| SEO         | react-helmet-async                       |
| Animation   | Framer Motion                            |
| Testing     | Vitest + Testing Library                 |

---

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 18 or newer (and npm).

```sh
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:8080)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🛠️ Make It Yours (Customization Guide)

### 1. Business details — `src/config/site.ts`

This is the **single source of truth**. Set your brand name, domain, contact
info, social links, and SEO defaults here, and the entire site updates. Most
importantly:

```ts
whatsappNumber: "971556530484", // ← your number, international format, digits only
```

This is where every booking and enquiry is sent.

### 2. The fleet — `src/data/yachts.ts`

Add, remove, or edit yachts. Each entry needs an `id`, `name`, `type`, `image`,
`capacity`, `length`, `pricePerHour`, `features`, and `description`.

```ts
{
  id: "sport-cruiser",                       // used in the URL: /yacht/sport-cruiser
  name: "Azure Spirit",
  type: "Sport Cruiser",
  image: unsplash("1569263979104-865ab7cd8d13"), // Unsplash photo ID (see below)
  capacity: 8,
  length: "45 ft",
  pricePerHour: 150,
  features: ["High Speed", "Sun Deck", "Premium Sound"],
  description: "Sleek and fast, perfect for thrill-seekers.",
}
```

Images use **Unsplash** out of the box via the `unsplash(id)` helper at the top
of the file — just swap the photo ID. You can also point `image` at any full URL
(`image: "https://cdn.yoursite.com/boat.jpg"`) or import a local file from
`src/assets/`. Full instructions are in the file header. **The demo photos are
for preview only — replace them with images you're licensed to use before going
live.**

### 3. Images — `src/data/yachts.ts` and `public/`

- **Yacht photos** are configured per-yacht in `src/data/yachts.ts` (Unsplash IDs
  by default; remote URLs or local `src/assets/` imports also supported — see
  step 2).
- The **hero background** is a local file: `src/assets/hero-yacht.jpg`.
- Replace `public/og-image.png` (1200×630) — the social-share preview image.
- Replace `public/favicon.ico` with your own favicon.

### 4. Colors & fonts — `src/index.css`

Brand colors are defined as CSS variables (HSL). Change `--primary`, `--cta`,
`--background`, etc., and the whole theme follows. Fonts are configured in
[`tailwind.config.ts`](tailwind.config.ts).

### 5. Package builder pricing — `src/components/PackageBuilder.tsx`

The estimate constants live at the top of the component
(`BASE_RATE_PER_HOUR`, `PER_HEAD_CATERING`, etc.). Adjust to your pricing.

### 6. SEO — `public/sitemap.xml` & `public/robots.txt`

Update the domain in both files to match `siteConfig.url`. If you add or remove
yachts, update the URLs in `sitemap.xml` accordingly.

---

## 💳 Want real online payments instead of WhatsApp?

This template is intentionally backend-free. To take payments you can swap the
`buildWhatsAppUrl(...)` call in `BookingModal.tsx` / `PackageBuilder.tsx` for a
link to Stripe Payment Links, a Calendly/booking widget, or a form service such
as Formspree. The booking data is already assembled into a message string — just
send it where you need it.

---

## 📦 Deployment

This is a static SPA. Run `npm run build` and deploy the `dist/` folder to any
static host — **Vercel, Netlify, Cloudflare Pages, GitHub Pages**, etc.

Most hosts auto-detect Vite. If you deploy somewhere that needs explicit config,
set the build command to `npm run build` and the output directory to `dist`.

> **SPA routing note:** because the app uses client-side routing, configure your
> host to rewrite all unknown paths to `index.html` (Vercel/Netlify do this for
> Vite projects automatically).

---

## 🧪 Scripts

| Command            | What it does                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start the dev server on port 8080     |
| `npm run build`    | Production build to `dist/`           |
| `npm run preview`  | Preview the production build          |
| `npm run lint`     | Run ESLint                            |
| `npm run test`     | Run the Vitest test suite             |

---

## 📄 License

Commercial template — see [LICENSE.md](LICENSE.md). In short: build unlimited
client/personal websites with it, but don't resell the source code itself.
Sample photos are for demo purposes only; replace them before going live.
