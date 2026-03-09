import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length > 100) errs.name = "Name is required (max 100 chars)";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email is required";
    if (form.phone && !/^[\d\s\-+()]{7,20}$/.test(form.phone)) errs.phone = "Invalid phone number";
    if (!form.message.trim() || form.message.trim().length > 1000) errs.message = "Message is required (max 1000 chars)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const contactInfo = [
    { icon: Phone, label: "+91 123 456 7890", href: "tel:+911234567890" },
    { icon: Mail, label: "info@webdesignco.com", href: "mailto:info@webdesignco.com" },
    { icon: MapPin, label: "Chennai, Tamil Nadu, India", href: "#" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">Contact Us</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            {contactInfo.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-foreground font-body">{item.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-xl p-8 shadow-card space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-heading font-semibold text-foreground mb-1.5">Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-heading font-semibold text-foreground mb-1.5">Email *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={255}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-heading font-semibold text-foreground mb-1.5">Phone</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                maxLength={20}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+91 123 456 7890"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-heading font-semibold text-foreground mb-1.5">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider text-accent-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{ background: "var(--gradient-accent)" }}
            >
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
