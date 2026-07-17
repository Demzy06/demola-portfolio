import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutDev from "../components/AboutDev";
import ProjectsSection from "../components/ProjectsSection";
function HomePage() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutDev />
    </div>
  );
}

export default HomePage;
