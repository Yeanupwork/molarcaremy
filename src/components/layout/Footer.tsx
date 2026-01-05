import { Link } from "react-router-dom";
import { Phone, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold text-primary-foreground">Molar</span>
              <span className="text-2xl font-bold text-accent">Care</span>
              <span className="text-accent text-2xl">✦</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Pioneering oral healthcare solutions with patented biofilm-dissolving technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Products", "About MolarCare", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    to="/"
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4 uppercase text-sm tracking-wider">
              Products
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/rinsegard"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  RinseGard Oral Rinse
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4 uppercase text-sm tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3">
              <p className="text-primary-foreground/90 text-sm font-semibold">
                THERAGON HEALTHCARE SDN BHD
              </p>
              <p className="text-primary-foreground/60 text-xs">
                202301020101 (1514023-H)
              </p>
              <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Suite 45, Unit 2-1, Level 2, Tower 3, UOA Business Park, No 1, Jalan Pengaturcara U1/51, Seksyen U1, 40150 Shah Alam, Selangor, Malaysia
                </span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+603 6205 2728</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Globe className="w-4 h-4" />
                <a href="https://theragonhealthcare.com" className="hover:text-accent transition-colors">
                  theragonhealthcare.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2026 MolarCare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
