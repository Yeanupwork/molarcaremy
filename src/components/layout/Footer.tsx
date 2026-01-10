import { Link } from "react-router-dom";
import { Phone, Globe, MapPin } from "lucide-react";
import molarcareLogo from "@/assets/molarcare-logo.png";
const Footer = () => {
  return <footer className="bg-background py-12 border-t border-border">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <img 
                src={molarcareLogo} 
                alt="MolarCare" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium mb-3 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Products", "About MolarCare", "FAQ"].map(link => <li key={link}>
                  <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-foreground font-medium mb-3 text-sm">
              Products
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/rinsegard" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  RinseGard Oral Rinse
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-medium mb-3 text-sm">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="text-foreground text-sm font-medium">
                THERAGON HEALTHCARE SDN BHD
              </p>
              <p className="text-muted-foreground text-xs">
                202301020101 (1514023-H)
              </p>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Suite 45, Unit 2-1, Level 2, Tower 3, UOA Business Park, No 1, Jalan Pengaturcara U1/51, Seksyen U1, 40150 Shah Alam, Selangor, Malaysia
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>+603 6205 2728</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Globe className="w-4 h-4" />
                <a href="https://theragonhealthcare.com" className="hover:text-foreground transition-colors">
                  theragonhealthcare.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 MolarCare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;