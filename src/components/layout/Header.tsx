import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import molarcareLogo from "@/assets/molarcare-logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToClinic = () => {
    if (location.pathname === '/') {
      document.getElementById('clinics')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('clinics')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Stories",
      path: "/stories",
      dropdown: [{ label: "Announcement", path: "/stories/announcement" }],
    },
    {
      label: "Products",
      path: "/products",
      dropdown: [{ label: "RinseGard", path: "/products/rinsegard" }],
    },
    {
      label: "About Us",
      path: "/about",
      dropdown: [{ label: "Patent", path: "/about/patent" }],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={molarcareLogo} 
              alt="MolarCare" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link flex items-center gap-1 py-2 ${
                    isActive(item.path) ? "text-accent" : ""
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-lg shadow-lg-custom border border-border py-2 min-w-[180px]">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-accent transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="btn-primary"
              onClick={scrollToClinic}
            >
              Find a Clinic
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  to={item.path}
                  className={`block py-2 font-semibold ${
                    isActive(item.path) ? "text-accent" : "text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button 
                className="btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToClinic();
                }}
              >
                Find a Clinic
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
