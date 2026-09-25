import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutDev from "../components/AboutDev";
import ProjectsSection from "../components/ProjectsSection";
import TechStackSection from "../components/TechStackSection";
import CtaSection from "../components/CtaSection";
import { ContactForm } from "../components/ContactForm";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutDev />
        <TechStackSection />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
