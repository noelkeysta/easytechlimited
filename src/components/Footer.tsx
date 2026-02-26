import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-sm">ET</span>
              </div>
              <span className="font-heading font-semibold text-lg">
                Easy<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-navy-foreground/60 text-sm leading-relaxed">
              Premier consultancy firm specializing in technology solutions and expert API integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-navy-foreground/40">
              Navigation
            </h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-navy-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-navy-foreground/40">
              Services
            </h4>
            <div className="space-y-2 text-sm text-navy-foreground/60">
              <p>Software Development</p>
              <p>API Integration</p>
              <p>Cloud Solutions</p>
              <p>Cybersecurity</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-navy-foreground/40">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-navy-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>Lilongwe, Malawi</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:info.easytech@yahoo.com" className="hover:text-primary transition-colors">
                  info.easytech@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+265884199870" className="hover:text-primary transition-colors">
                  (+265) 884199870
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 pt-8 text-center text-sm text-navy-foreground/40">
          © {new Date().getFullYear()} Easy Technologies Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
