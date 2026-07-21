import { Element } from "react-scroll";

const techStacks = [
  "Html",
  "Css",
  "javaScript",
  "React Js",
  "Tailwind",
  "Bootstrap",
  "Styled Components",
  "Motion",
  "Git",
];
function TechStackSection() {
  return (
    <Element className="stacks">
      <section className="border-t border-[#EEEEEE] pt-10 pl-5 pr-5 pb-10">
        <h4 className="uppercase text-[11px] font-bold tracking-[0.15rem] text-[#727272]">
          Technical Stack
        </h4>
        <ul className="flex flex-wrap gap-x-8 mt-4">
          {techStacks.map((stack) => (
            <li className="text-[15px] text-secondary uppercase font-bold tracking-widest leading-12">
              {stack}
            </li>
          ))}
        </ul>
      </section>
    </Element>
  );
}

export default TechStackSection;
