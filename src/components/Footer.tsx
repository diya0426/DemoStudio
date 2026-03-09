import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg text-primary-foreground mb-4">
              Web<span className="text-accent">Design</span>Co
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Leading website designing company delivering innovative digital solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Website Designing", "Website Development", "Internet Marketing", "Domain Booking", "SMS Marketing", "Logo Designing", "Mobile Apps", "Software Development"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-accent transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>123 Business Street, Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span>info@webdesignco.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4 text-center text-xs">
          © 2026 WebDesignCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
