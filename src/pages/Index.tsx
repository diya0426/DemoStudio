import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="container-fluid p-0">
      <TopBar />
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
