import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Anchor, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  onBookNow: () => void;
  alwaysOpaque?: boolean;
}

const Header = ({ onBookNow, alwaysOpaque = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = siteConfig.content.nav;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const showOpaque = isScrolled || alwaysOpaque;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showOpaque
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Anchor
              className={`w-6 h-6 transition-colors ${
                showOpaque ? "text-primary" : "text-cta"
              }`}
            />
            <span
              className={`font-display text-lg font-semibold transition-colors ${
                showOpaque ? "text-foreground" : "text-white"
              }`}
            >
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors hover:text-cta ${
                  showOpaque ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button variant="cta" size="default" onClick={onBookNow}>
              {siteConfig.content.bookNowLabel}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  showOpaque ? "text-foreground" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  showOpaque ? "text-foreground" : "text-white"
                }`}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background rounded-xl shadow-elevated p-6 mb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="cta" size="lg" onClick={onBookNow} className="mt-2">
                {siteConfig.content.bookNowLabel}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
