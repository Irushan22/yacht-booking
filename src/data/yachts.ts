import yachtSport from "@/assets/yacht-sport.jpg";
import yachtSailing from "@/assets/yacht-sailing.jpg";
import yachtCatamaran from "@/assets/yacht-catamaran.jpg";
import yachtMega from "@/assets/yacht-mega.jpg";

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
    image: yachtSport,
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
    image: yachtSailing,
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
    image: yachtCatamaran,
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
    image: yachtMega,
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
    image: yachtSport,
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
    image: yachtSailing,
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
    image: yachtCatamaran,
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
    image: yachtMega,
    capacity: 25,
    length: "95 ft",
    pricePerHour: 550,
    features: ["Helipad", "Cinema Room", "Full Crew", "Water Slide"],
    description: "A floating palace designed for grand events and unforgettable voyages.",
  },
];
