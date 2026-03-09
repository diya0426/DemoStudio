import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "10+ Years of Industry Experience",
  "500+ Successful Projects Delivered",
  "100% Client Satisfaction Rate",
  "24/7 Dedicated Support Team",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              About <span className="text-primary">Our Company</span>
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ background: "var(--gradient-accent)" }} />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We are a leading website designing company providing innovative digital solutions
              to businesses worldwide. Our team of expert designers and developers craft
              beautiful, functional websites that help your brand stand out.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From concept to deployment, we ensure every project meets the highest standards
              of quality, performance, and user experience.
            </p>
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "500+", label: "Projects" },
              { num: "200+", label: "Happy Clients" },
              { num: "50+", label: "Team Members" },
              { num: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
              >
                <div className="font-heading font-bold text-3xl text-primary mb-1">
                  {stat.num}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
