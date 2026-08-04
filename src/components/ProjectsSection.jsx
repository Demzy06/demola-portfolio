import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";

import Button from "./Button";
import { projects } from "../data/ProjectsSection";

function ProjectsSection() {
  const [isOpen, setisOpen] = useState(false);

  const projectArr = isOpen ? projects : projects.slice(0, 3);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
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
          {projectArr.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>

        {!isOpen && (
          <Button
            text="View More Projects"
            className="pl-6 pr-6 p-3 tracking-wider font-medium shadow-[1px_1px_5px_0_#cccbcb] mb-10 text-[13px] bg-white text-black w-fit m-auto"
            onClick={setisOpen}
          />
        )}
      </section>
    </Element>
  );
}

export default ProjectsSection;
