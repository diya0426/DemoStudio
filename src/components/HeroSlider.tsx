import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";

const slides = [
  {
    image: banner1,
    title: "Creative Website Designing",
    subtitle: "We Build Digital Experiences That Drive Results",
    cta: "Our Services",
    ctaLink: "#services",
  },
  {
    image: banner2,
    title: "Digital Marketing Solutions",
    subtitle: "Grow Your Business With Our Expert Marketing Strategies",
    cta: "Get Started",
    ctaLink: "#contact",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
                {slides[current].subtitle}
              </p>
              <a
                href={slides[current].ctaLink}
                className="inline-block px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider text-accent-foreground"
                style={{ background: "var(--gradient-accent)" }}
              >
                {slides[current].cta}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
