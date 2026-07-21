import { useInView } from "react-intersection-observer";
import ButtonJumpTo from "./ButtonJumpTo";

function CtaSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${inView ? "animation-opacity-100" : "animation-opacity-0"} border-t border-[#EEEEEE] pt-20 pl-5 pr-5 mb-10`}
    >
      <div className="text-center pb-10">
        <h1 className="mb-6  tracking-tight leading-12">
          Ready to Build Something Extraordinary?
        </h1>
        <p className="mb-6 text-secondary">
          Currently accepting new projects and collaboration opportunities.
          Let's create a digital experience that stands out
        </p>
        <ButtonJumpTo
          text="Start a project"
          className="pr-8 pl-8 p-3.5 uppercase text-[13px] tracking-widest bg-black text-white"
          path="contact"
          offset={-60}
        />
      </div>
    </section>
  );
}

export default CtaSection;
