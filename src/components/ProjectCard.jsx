import { useInView } from "react-intersection-observer";
import ProjectStack from "./ProjectStack";

import Button from "./Button";
import ArrowFilledIcon from "@iconify-react/weui/arrow-filled";
import ShareBoxFillIcon from "@iconify-react/ri/share-box-fill";

function ProjectCard({ project }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  console.log(inView);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "animation-opacity-100" : "animation-opacity-0"} mb-20 md:flex justify-between ${project.layout ? "md:flex-row-reverse" : ""}`}
    >
      <div className="mb-8 shadow-xl rounded-xl md:flex-6">
        <img
          src={project.image}
          alt="project-snapshot"
          srcset=""
          className="rounded-xl -[40rem] w-[rem]"
        />
      </div>
      <div className="md:flex-4 md:m-auto md:pl-10">
        <ProjectStack projectStack={project.stack} />
        <h3 className="font-bold mb-8 md:text-[32px]">{project.projectName}</h3>
        <p className="mt-4 text-secondary md:text-[17px]">
          {project.projectHighlight}
        </p>
        <div className="flex w-[80%] mt-4 mb-4 ">
          <Button
            text="View Project"
            className="border-b border-[##818181] mr-6 pb-1.5"
            icon={
              <ArrowFilledIcon
                height=""
                style={{ color: "#818181", width: "12px", height: "fit" }}
              />
            }
            path={project.link}
          />
          <Button
            text="Repo"
            className="border-b border-[##818181]  pb-1.5"
            icon={
              <ShareBoxFillIcon
                height=""
                style={{ color: "#818181", width: "16px" }}
              />
            }
            path={project.repo}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
