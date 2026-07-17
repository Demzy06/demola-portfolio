import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutDev from "../components/AboutDev";
import ProjectsSection from "../components/ProjectsSection";
import TechStackSection from "../components/TechStackSection";
function HomePage() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutDev />
      <TechStackSection />
    </div>
  );
}

export default HomePage;
