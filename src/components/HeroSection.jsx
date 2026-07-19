import Button from "./Button";
import BackdropImg from "../assets/backdrop-svg.svg";
function HeroSection() {
  return (
    <section className="mt-39 pl-5 pr-5 mb-15 ">
      {/* <img
        src={BackdropImg}
        alt=""
        srcset=""
        className="absolute top-10 left-2.5 right-0 w-19  -z-1"
      /> */}
      <h3 className="text-[18px] font-medium mb-2 text-secondary">
        Hey there, I'm-
      </h3>
      <div>
        <h1 className="uppercase text-[35px] font-bold leading-[1.4] mb-2">
          Demola, A Frontend Developer
        </h1>
        <h1 className="uppercase text-[35px] font-bo leading-[1.4] ">
          I build things for the <span className="text-secondary">web.</span>
        </h1>
      </div>
      <p className="mt-4 font-medium text-secondary">
        I build fast, stunning websites and web application that drives business
        growth.
      </p>
      <div className="flex justify-between mt-12 ">
        <Button
          // className="bg-black text-white pl-7 pr-7 p-3"
          className="bg-black text-white w-[45%] text-center h-fit pt-3 pb-3"
          text="Start a Project"
        />
        <Button
          // className="text-black pl-4 pr-4 p-3 bg-white border"
          className="text-black w-[45%] p- bg-white border text-center pt-3 pb-3"
          text="View My Work"
        />
      </div>
    </section>
  );
}

export default HeroSection;
