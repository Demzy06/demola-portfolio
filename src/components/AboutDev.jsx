import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

function AboutDev() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Element name="about">
      <section
        ref={ref}
        className={`transition-all duration-700 ${inView ? "animation-opacity-100" : "animation-opacity-0"} border-t border-[#EEEEEE] pt-10 pl-5 pr-5 mb-10  md:pt-20 md:pb-20 `}
      >
        <div className="md:w-[97%] md:m-auto md:flex justify-between">
          <div className="md:w-[50%] self-center md:-auto ">
            <h4 className="uppercase text-[14px] mb-1  text-secondary md:text-[32px]">
              The Developer
            </h4>
            <h1 className="mb-3 tracking-tight md:text-[48px]">
              Precision In Every Line Of Code
            </h1>
          </div>
          <div className="md:w-[45%]">
            <p className="text-secondary mb-2 leading-7.5 md:text-[18px]">
              I'm a frontend developer who enjoys turning ideas into simple,
              user-friendly websites and web applications. With over 3 years of
              experience, I build fast, responsive, and visually appealing
              digital products that people enjoy using.
            </p>
            <p className=" text-secondary leading-7.5 text-[18px]">
              I focus on writing clean, efficient code while creating smooth
              user experiences. Whether I'm building with React, improving
              performance, or adding interactive animations, my goal is to
              create websites that are both functional and easy to use.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default AboutDev;
