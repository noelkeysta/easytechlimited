import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto section-padding pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Easy Technologies Logo" className="w-9 h-9 rounded-md object-cover" />
              <span className="ml-2 font-heading font-bold text-navy-foreground text-base">EasyTech</span>
            </div>
            <p className="text-navy-foreground/60 text-sm leading-relaxed">
              Premier consultancy firm specializing in technology solutions and expert API integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-navy-foreground/40">Navigation</h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-navy-foreground/40">Services</h4>
            <div className="space-y-2">
              {[
                { label: "Software & Data", path: "/services/software-data" },
                { label: "Infrastructure & Security", path: "/services/infrastructure-security" },
                { label: "API Integration", path: "/services/api-integration" },
                { label: "Systems & Hardware", path: "/services/systems-hardware" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-navy-foreground/40">Contact</h4>
            <div className="space-y-3 text-sm text-navy-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>Lilongwe, Malawi</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:info.easytech@yahoo.com" className="hover:text-primary transition-colors break-all">info.easytech@yahoo.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+265884199870" className="hover:text-primary transition-colors">(+265) 884199870</a>
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
