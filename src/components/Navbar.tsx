import { useState } from "react";
import { Menu, X, ChevronDown, Globe, Code, Megaphone, Server, MessageSquare, Palette, Smartphone, Monitor } from "lucide-react";

const services = [
  { name: "Website Designing", icon: Palette, desc: "Creative & responsive web designs" },
  { name: "Website Development", icon: Code, desc: "Custom web application development" },
  { name: "Internet Marketing", icon: Megaphone, desc: "SEO, SEM & social media marketing" },
  { name: "Domain Booking", icon: Globe, desc: "Domain registration & hosting" },
  { name: "SMS Marketing", icon: MessageSquare, desc: "Bulk SMS & promotional campaigns" },
  { name: "Logo Designing", icon: Palette, desc: "Brand identity & logo creation" },
  { name: "Mobile Apps", icon: Smartphone, desc: "iOS & Android app development" },
  { name: "Software Development", icon: Monitor, desc: "Custom software solutions" },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasMega: true },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

  return (
    <nav className="bg-navbar sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Server className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-navbar-foreground">
              Web<span className="text-accent">Design</span>Co
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 font-heading font-semibold text-sm uppercase tracking-wider text-navbar-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                  {link.hasMega && <ChevronDown className="w-3.5 h-3.5" />}
                </a>

                {/* Mega Menu */}
                {link.hasMega && megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-mega shadow-mega rounded-lg p-6 mega-menu-enter">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href="#services"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div>
                            <div className="font-heading font-semibold text-sm text-mega-foreground group-hover:text-mega-hover transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {service.desc}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-lg font-heading font-semibold text-sm text-accent-foreground uppercase tracking-wider"
              style={{ background: "var(--gradient-accent)" }}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-navbar-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 font-heading font-semibold text-sm uppercase tracking-wider text-navbar-foreground"
                  onClick={() => {
                    if (link.hasMega) {
                      setMobileMegaOpen(!mobileMegaOpen);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                >
                  {link.name}
                  {link.hasMega && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileMegaOpen ? "rotate-180" : ""}`} />
                  )}
                </a>
                {link.hasMega && mobileMegaOpen && (
                  <div className="bg-muted rounded-lg mx-4 mb-2 p-3 space-y-1">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href="#services"
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-card text-sm text-mega-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-primary" />
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-2 px-6 py-2.5 rounded-lg font-heading font-semibold text-sm text-center text-accent-foreground uppercase"
              style={{ background: "var(--gradient-accent)" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
