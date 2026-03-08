import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-lg font-bold flex items-center gap-1">
          <span className="text-foreground">John</span>
          <span className="text-primary">Lu</span>
          <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 cosmic-button text-sm py-2 px-5">
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground z-50 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/97 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="cosmic-button mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
