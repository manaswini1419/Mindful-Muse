import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/chat", label: "Chat Companion" },
    { to: "/mood", label: "Mood Tracker" },
    { to: "/wellness", label: "Wellness Tips" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-smooth">
            <Heart className="w-6 h-6 text-primary animate-breathe" />
            <span>MindCompanion</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <Button variant="calm" size="sm">
              Get Support
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
                activeClassName="text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button variant="calm" size="sm" className="w-full">
              Get Support
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
