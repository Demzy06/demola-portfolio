import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutDev from "../components/AboutDev";
import ProjectsSection from "../components/ProjectsSection";
import TechStackSection from "../components/TechStackSection";
import CtaSection from "../components/CtaSection";
import { ContactForm } from "../components/ContactForm";
function HomePage() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutDev />
      <TechStackSection />
      <CtaSection />
      <ContactForm />
    </div>
  );
}

export default HomePage;
