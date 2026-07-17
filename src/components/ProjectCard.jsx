import ProjectStack from "./ProjectStack";

import Button from "./Button";
import ArrowIcon from "../assets/icons/arrowIcon.png";
import ShareBox from "../assets/icons/sharebox.webp";

function ProjectCard({ project }) {
  return (
    <div className="mb-20">
      <div className="mb-8 shadow-xl ">
        <img src={project.image} alt="project-snapshot" srcset="" />
      </div>
      <div>
        <ProjectStack projectStack={project.stack} />
        <h3 className="font-bold mb-8">{project.projectName}</h3>
        <p className="mt-4 text-secondary">{project.projectHighlight}</p>
        <div className="flex w-[80%] mt-4 mb-4">
          <Button
            text="View Project"
            className="border-b border-[##818181] mr-6 pb-1.5"
            icon={ArrowIcon}
            iconStyles="w-3 h-fit"
            path={project.link}
          />
          <Button
            text="Repo"
            className="border-b border-[##818181]  pb-1.5"
            icon={ShareBox}
            iconStyles="w-4 h-fit"
            path={project.repo}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
