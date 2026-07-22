import { useInView } from "react-intersection-observer";

import ButtonJumpTo from "./ButtonJumpTo";
import Button from "./Button";

function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  console.log(inView);
  return (
    <section
      ref={ref}
      className={` ${inView ? "animation-opacity-100" : "animation-opacity-0"} transition-all duration-1000 mt-39 pl-5 pr-5 mb-15 md:flex flex-col md:pt-15 md:pl-10 md:pr-10`}
    >
      <h3 className="text-[18px] font-medium mb-2 text-secondary md:text-[32px]">
        Hey there, I'm-
      </h3>
      <div>
        <h1 className="uppercase text-[35px] font-bold leading-[1.4] mb-2 md:text-[48px] md:tracking-[-0.04em]">
          Demola, A Frontend Developer
        </h1>
        <h1 className="uppercase text-[35px] font-bo leading-[1.4]  md:text-[48px]">
          I build things for the <span className="text-secondary">web.</span>
        </h1>
      </div>
      <p
        className={` ${inView ? "animation-opacity-100" : "animation-opacity-0"} transition-all duration-1300 mt-4 font-medium text-secondary md:text-[20px] md:w-[40%]`}
      >
        I build fast, stunning websites and web application that drives business
        growth.
      </p>

      <div
        className={` ${inView ? "animation-opacity-100" : "animation-opacity-0"} transition-all duration-1600 flex justify-between mt-12 md:w-[35%]`}
      >
        <ButtonJumpTo
          className="bg-black text-white w-[45%] text-center h-fit pt-3 pb-3  font-medium"
          text="Start a Project"
          path="contact"
          offset={-60}
        />
        <Button
          className="text-black w-[45%] bg-white border text-center pt-3 pb-3 font-medium"
          text="Resume"
        />
      </div>
    </section>
  );
}

export default HeroSection;
