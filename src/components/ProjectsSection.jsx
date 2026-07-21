import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";

import GreenworldPic from "../assets/projectsImages/greenworld.webp";
import FairhavenPic from "../assets/projectsImages/fairhavens.webp";
import CharacterCounterPic from "../assets/projectsImages/charactercounter.webp";
import ExpenseTrackerPic from "../assets/projectsImages/expensetracker.webp";
import DevfinderPic from "../assets/projectsImages/devfinder.webp";

const projects = [
  {
    image: GreenworldPic,
    stack: ["Html", "Css", "JavaScript"],
    projectName: "GreenWorld Website",
    projectHighlight:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, recusandae iste impedit exercitationem quis magni dolore hic dolorum nesciunt aliquam!",
    link: "",
    repo: "https://github.com/Demzy06/greenworld-solar",
  },
  {
    image: FairhavenPic,
    stack: ["React", "JavaScript", "Tailwind Css"],
    projectName: "Fair Havens School",
    projectHighlight:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, recusandae iste impedit exercitationem quis magni dolore hic dolorum nesciunt aliquam!",
    link: "https://fairhavensschools.com.ng",
    repo: "https://github.com/Demzy06/fair-havens-school",
  },
  {
    image: CharacterCounterPic,
    stack: ["React", "JavaScript", "Css"],
    projectName: "Character Counter Web App",
    projectHighlight:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, recusandae iste impedit exercitationem quis magni dolore hic dolorum nesciunt aliquam!",
    link: "character-counter-flame.vercel.app",
    repo: "https://github.com/Demzy06/character-counter",
  },
];

function ProjectsSection() {
  return (
    <Element name="projects">
      <section className="border-t border-[#EEEEEE] pt-10 pl-5 pr-5">
        <div className="">
          {/* <h4 className="uppercase w-fit text-[14px] ml-auto font-medium text-secondry mb-3">
          Selected Works
          </h4> */}
          <h1 className="w-fit ml-auto tracking-tight mb-25 font-bold">
            Featured <span className="text-secondary">Projects</span>
          </h1>
        </div>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section>
    </Element>
  );
}

export default ProjectsSection;
