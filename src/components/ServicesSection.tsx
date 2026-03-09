import { motion } from "framer-motion";
import { Globe, Code, Megaphone, Server, MessageSquare, Palette, Smartphone, Monitor } from "lucide-react";

const services = [
  { name: "Website Designing", icon: Palette, desc: "We create stunning, user-friendly website designs that captivate visitors and drive conversions." },
  { name: "Website Development", icon: Code, desc: "Full-stack web development with cutting-edge technologies for scalable, high-performance websites." },
  { name: "Internet Marketing", icon: Megaphone, desc: "Comprehensive digital marketing strategies including SEO, PPC, and social media campaigns." },
  { name: "Domain Booking", icon: Globe, desc: "Secure your online presence with our domain registration and reliable web hosting services." },
  { name: "SMS Marketing", icon: MessageSquare, desc: "Reach your audience instantly with targeted bulk SMS and promotional messaging solutions." },
  { name: "Logo Designing", icon: Palette, desc: "Craft a memorable brand identity with our professional logo design and branding services." },
  { name: "Mobile Apps", icon: Smartphone, desc: "Native and cross-platform mobile app development for iOS and Android platforms." },
  { name: "Software Development", icon: Monitor, desc: "Custom software solutions tailored to your business needs for maximum efficiency." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-accent)" }} />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated group transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
