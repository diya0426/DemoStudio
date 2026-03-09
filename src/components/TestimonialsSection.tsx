import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content: "Outstanding web design services! They transformed our online presence completely. The team was professional, responsive, and delivered beyond our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder, StyleBoutique",
    content: "The e-commerce website they built for us increased our sales by 200%. Their attention to detail and understanding of user experience is remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Director, GreenEnergy Solutions",
    content: "From SEO to complete website redesign, they handled everything seamlessly. Our organic traffic has grown significantly since partnering with them.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Marketing Head, FoodChain",
    content: "Their mobile app development team delivered a flawless product. The app runs smoothly and our customers love the interface. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-muted rounded-xl p-8 md:p-12 text-center shadow-card"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic font-body">
                "{testimonials[current].content}"
              </p>
              <h4 className="font-heading font-bold text-foreground text-lg">{testimonials[current].name}</h4>
              <span className="text-muted-foreground text-sm">{testimonials[current].role}</span>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
