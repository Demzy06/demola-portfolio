import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";

import GreenworldPic from "../assets/projectsImages/greenworld.webp";
import FairhavenPic from "../assets/projectsImages/fairhavens.webp";
import CharacterCounterPic from "../assets/projectsImages/charactercounter.webp";
import ExpenseTrackerPic from "../assets/projectsImages/expensetracker.webp";
import DevfinderPic from "../assets/projectsImages/devfinder.webp";
import Button from "./Button";

const projects = [
  {
    image: GreenworldPic,
    stack: ["Html", "Css", "JavaScript"],
    projectName: "GreenWorld Website",
    projectHighlight:
      "I built this website for a green energy company to showcase its renewable energy solutions, including solar and wind power. I also used the project to explore and improve my skills in web animations and creating engaging, interactive user experiences.",
    link: "",
    repo: "https://github.com/Demzy06/greenworld-solar",
  },
  {
    image: FairhavenPic,
    stack: ["React", "JavaScript", "Tailwind Css"],
    projectName: "Fair Havens School",
    projectHighlight:
      "A modern, responsive website built for Fair Havens School to showcase its academic programmes, values, admissions process, and learning environment through a clean and user-friendly digital experience.",
    link: "https://fairhavensschools.com.ng",
    repo: "https://github.com/Demzy06/fair-havens-school",
    layout: "reverse",
  },
  {
    image: CharacterCounterPic,
    stack: ["React", "JavaScript", "Css"],
    projectName: "Character Counter Web App",
    projectHighlight:
      "Character counter is an analysis tool designed to help users analyze their text by tracking character, word, and sentence counts, reading time, character limits, and letter density. The project also includes theme customization, keyboard accessibility, and responsive layouts for different screen sizes.",
    link: "character-counter-flame.vercel.app",
    repo: "https://github.com/Demzy06/character-counter",
  },
];

function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  console.log(inView);
  return (
    <Element name="projects">
      <section className="border-t border-[#EEEEEE] pt-10 pl-5 pr-5 flex flex-col md:pl-10 md:pr-10">
        <div className="">
          {/* <h4 className="uppercase w-fit text-[14px] ml-auto font-medium text-secondry mb-3">
          Selected Works
          </h4> */}
          <h1
            ref={ref}
            className={`${inView ? "animation-opacity-100" : "animation-opacity-0"} transition-all duration-700 w-fit ml-auto tracking-tight mb-25 font-bold md:text-[48px]`}
          >
            Featured <span className="text-secondary">Projects</span>
          </h1>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
        <Button
          text="View More Projects"
          className="pl-6 pr-6 p-3 tracking-wider font-medium shadow-[1px_1px_5px_0_#cccbcb] mb-10 text-[13px] bg-white text-black w-fit m-auto"
        />
      </section>
    </Element>
  );
}

export default ProjectsSection;
