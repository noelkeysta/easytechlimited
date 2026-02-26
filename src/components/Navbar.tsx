import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-sm">ET</span>
          </div>
          <span className="font-heading font-semibold text-lg text-navy-foreground">
            Easy<span className="text-primary">Tech</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-navy-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-primary/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-navy-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full mt-2">
            <Link to="/contact" onClick={() => setOpen(false)}>Get Started</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
