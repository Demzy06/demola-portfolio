import { Element } from "react-scroll";

function AboutDev() {
  return (
    <Element name="about">
      <section className="border-t border-[#EEEEEE] pt-10 pl-5 pr-5 mb-10">
        <h4 className="uppercase text-[14px] mb-1 text-secondary">
          The Developer
        </h4>
        <h1 className="mb-3 tracking-tight">Precision In Every Line Of Code</h1>
        <p className="text-secondary mb-2 leading-7.5">
          I'm a frontend developer who enjoys turning ideas into simple,
          user-friendly websites and web applications. With over 3 years of
          experience, I build fast, responsive, and visually appealing digital
          products that people enjoy using.
        </p>
        <p className=" text-secondary leading-7.5">
          I focus on writing clean, efficient code while creating smooth user
          experiences. Whether I'm building with React, improving performance,
          or adding interactive animations, my goal is to create websites that
          are both functional and easy to use.
        </p>
      </section>
    </Element>
  );
}

export default AboutDev;
