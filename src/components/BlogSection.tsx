import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2026",
    excerpt: "Explore the latest design trends shaping the digital landscape this year, from AI-driven layouts to immersive 3D experiences.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Mobile-First Website",
    excerpt: "With mobile traffic dominating the web, learn why a mobile-first approach is no longer optional for business success.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    category: "Development",
  },
  {
    id: 3,
    title: "SEO Strategies That Actually Work in 2026",
    excerpt: "Cut through the noise with proven SEO techniques that drive real organic traffic and improve your search rankings.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    category: "Marketing",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Latest News</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">From Our Blog</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-heading font-semibold text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-primary font-heading font-semibold text-sm group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
