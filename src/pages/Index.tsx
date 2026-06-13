import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";
import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import TechStack from "@/components/portfolio/TechStack";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
