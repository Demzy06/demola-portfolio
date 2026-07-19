function ProjectStack({ projectStack }) {
  return (
    <div className="mt-2 mb-5">
      <ul className="flex flex-wrap">
        {projectStack.map((stack) => (
          <li className="pt-1 pb-1 p-3.5 h-fit font-bold tracking-widest rounded-full uppercase bg-[#EEEEEE] mr-2 text-[#727272] text-[10px] border border-[#cccbcb]">
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectStack;
