import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground text-sm hidden md:block">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 123 456 7890</span>
          </a>
          <a href="mailto:info@webdesignco.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@webdesignco.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span>Chennai, India</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
