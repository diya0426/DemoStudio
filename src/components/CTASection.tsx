import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="absolute inset-0 z-0" style={{background: 'linear-gradient(180deg, var(--gradient-dark))'}}></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white drop-shadow-lg">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8 text-white/90 drop-shadow">
            Let's create something amazing together. Get in touch with us for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911234567890"
              className="px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider text-blue-900 shadow-xl"
              style={{ background: "linear-gradient(90deg, #FFD700 0%, #19223A 80%)" }}
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@webdesignco.com"
              className="px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider border-2 border-white/30 text-white hover:bg-white/10 transition-colors shadow"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
