/**
 * ============================================================================
 *  YACHT FLEET DATA  —  EDIT THIS FILE TO CHANGE THE BOATS SHOWN ON THE SITE
 * ============================================================================
 *
 * Images use Unsplash. Each yacht's `image` is built from an Unsplash photo ID
 * via the `unsplash()` helper below, so you only manage a short ID per yacht.
 *
 * To use your OWN photo for a yacht, you have two options:
 *   1. Remote URL — set `image` to any full URL, e.g.
 *        image: "https://cdn.yoursite.com/azure-spirit.jpg",
 *   2. Local file — drop the image in `src/assets/`, import it at the top, e.g.
 *        import azureSpirit from "@/assets/azure-spirit.jpg";
 *      ...then set `image: azureSpirit`.
 *
 * To find an Unsplash photo ID: open a photo on unsplash.com and copy the code
 * at the end of its URL (e.g. unsplash.com/photos/...-Vv4Jmweocg → the ID is the
 * trailing slug). Or copy the `photo-XXXX` part from any images.unsplash.com URL.
 *
 * NOTE: The Unsplash photos below are for DEMO purposes. Replace them with
 * licensed images you own before launching a commercial site.
 */

/** Build an optimized (auto-format, cropped) Unsplash image URL from a photo ID. */
const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

export interface Yacht {
  id: string;
  name: string;
  type: string;
  image: string;
  capacity: number;
  length: string;
  pricePerHour: number;
  features: string[];
  description: string;
}

export const yachts: Yacht[] = [
  {
    id: "sport-cruiser",
    name: "Azure Spirit",
    type: "Sport Cruiser",
    image: unsplash("1569263979104-865ab7cd8d13"),
    capacity: 8,
    length: "45 ft",
    pricePerHour: 150,
    features: ["High Speed", "Sun Deck", "Premium Sound", "Snorkeling Gear"],
    description: "Sleek and fast, perfect for thrill-seekers who want speed and style.",
  },
  {
    id: "sailing-yacht",
    name: "Wind Dancer",
    type: "Sailing Yacht",
    image: unsplash("1561728130-afd430af0493"),
    capacity: 6,
    length: "52 ft",
    pricePerHour: 120,
    features: ["Traditional Sailing", "Wooden Deck", "Romantic Ambiance", "Sunset Tours"],
    description: "Classic elegance meets the open sea. Ideal for romantic getaways.",
  },
  {
    id: "catamaran",
    name: "Ocean Breeze",
    type: "Luxury Catamaran",
    image: unsplash("1581271164789-7c97932822d3"),
    capacity: 12,
    length: "60 ft",
    pricePerHour: 200,
    features: ["Stable Ride", "Spacious Deck", "BBQ Grill", "Water Toys"],
    description: "Maximum stability and space. Perfect for groups and families.",
  },
  {
    id: "mega-yacht",
    name: "Royal Horizon",
    type: "Mega Yacht",
    image: unsplash("1535024966840-e7424dc2635b"),
    capacity: 20,
    length: "85 ft",
    pricePerHour: 400,
    features: ["Multiple Decks", "Jacuzzi", "Chef on Board", "VIP Suites"],
    description: "The ultimate luxury experience. For those who demand the finest.",
  },
  {
    id: "sunset-chaser",
    name: "Sunset Chaser",
    type: "Sport Cruiser",
    image: unsplash("1567899378494-47b22a2ae96a"),
    capacity: 10,
    length: "50 ft",
    pricePerHour: 180,
    features: ["Sun Deck", "Bluetooth Audio", "Cooler Box", "Snorkeling Gear"],
    description: "Perfect for chasing sunsets and enjoying a fast, smooth ride along the coast.",
  },
  {
    id: "blue-horizon",
    name: "Blue Horizon",
    type: "Sailing Yacht",
    image: unsplash("1504813205186-380b1235a5d2"),
    capacity: 8,
    length: "55 ft",
    pricePerHour: 140,
    features: ["Sailing Experience", "Teak Deck", "Kitchenette", "Relaxation Net"],
    description: "Experience the tranquility of sailing with modern comforts and style.",
  },
  {
    id: "island-hopper",
    name: "Island Hopper",
    type: "Luxury Catamaran",
    image: unsplash("1522440266570-2a733961e09c"),
    capacity: 15,
    length: "65 ft",
    pricePerHour: 220,
    features: ["Spacious Lounge", "Trampoline Net", "BBQ Station", "Paddle Boards"],
    description: "Built for hosting parties and hopping between islands in ultimate comfort.",
  },
  {
    id: "grand-voyager",
    name: "Grand Voyager",
    type: "Mega Yacht",
    image: unsplash("1605281317010-fe5ffe798166"),
    capacity: 25,
    length: "95 ft",
    pricePerHour: 550,
    features: ["Helipad", "Cinema Room", "Full Crew", "Water Slide"],
    description: "A floating palace designed for grand events and unforgettable voyages.",
  },
  {
    id: "coral-queen",
    name: "Coral Queen",
    type: "Sport Cruiser",
    image: unsplash("1604737637145-48cc31d160eb"),
    capacity: 9,
    length: "48 ft",
    pricePerHour: 165,
    features: ["High Speed", "Swim Platform", "Premium Sound", "Wet Bar"],
    description: "A spirited cruiser made for day trips, swim stops, and coastal escapes.",
  },
  {
    id: "majestic-pearl",
    name: "Majestic Pearl",
    type: "Mega Yacht",
    image: unsplash("1621277224630-81d9af65e40c"),
    capacity: 22,
    length: "90 ft",
    pricePerHour: 480,
    features: ["Sky Lounge", "Jacuzzi", "Master Suite", "Private Chef"],
    description: "Refined luxury across multiple decks for elegant celebrations at sea.",
  },
];
