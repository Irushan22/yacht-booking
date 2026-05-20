import { describe, it, expect } from "vitest";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { yachts } from "@/data/yachts";

describe("buildWhatsAppUrl", () => {
  it("targets the configured WhatsApp number", () => {
    expect(buildWhatsAppUrl("hi")).toContain(`wa.me/${siteConfig.whatsappNumber}`);
  });

  it("URL-encodes the message", () => {
    const url = buildWhatsAppUrl("Booking for John & Jane");
    expect(url).toContain("Booking%20for%20John%20%26%20Jane");
  });
});

describe("yacht data", () => {
  it("has at least one yacht", () => {
    expect(yachts.length).toBeGreaterThan(0);
  });

  it("uses unique ids (each yacht gets its own /yacht/:id route)", () => {
    const ids = yachts.map((y) => y.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has valid pricing and capacity for every yacht", () => {
    for (const yacht of yachts) {
      expect(yacht.pricePerHour).toBeGreaterThan(0);
      expect(yacht.capacity).toBeGreaterThan(0);
      expect(yacht.features.length).toBeGreaterThan(0);
    }
  });
});
