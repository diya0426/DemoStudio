import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web Design", "Development", "Marketing", "Mobile Apps"];

const projects = [
  { id: 1, title: "E-Commerce Platform", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { id: 2, title: "Corporate Website", category: "Development", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" },
  { id: 3, title: "SEO Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop" },
  { id: 4, title: "Fitness App", category: "Mobile Apps", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" },
  { id: 5, title: "Restaurant Website", category: "Web Design", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" },
  { id: 6, title: "SaaS Dashboard", category: "Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">Portfolio Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-heading text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-lg overflow-hidden shadow-card bg-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="font-heading font-bold text-lg text-primary-foreground">{project.title}</h3>
                    <span className="text-primary-foreground/70 text-sm">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
