import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";

const members = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Kavitha Rajan",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Deepak Nair",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Anitha Lakshmi",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe,
};

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Team</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">Meet The Experts</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-44 h-44 mx-auto mb-5 rounded-full overflow-hidden shadow-elevated">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center gap-3">
                  {Object.entries(member.socials).map(([key, url]) => {
                    const Icon = socialIcons[key as keyof typeof socialIcons];
                    return Icon ? (
                      <a
                        key={key}
                        href={url}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/40"
                        aria-label={`${member.name} ${key}`}
                      >
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
