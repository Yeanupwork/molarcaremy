import { Link } from "react-router-dom";
import { Globe, MapPin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
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
                className="h-40 w-auto"
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
              <a 
                href="https://wa.me/60102472600" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>+6010-247 2600</span>
              </a>
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
            Copyright (c) MolarCare. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;