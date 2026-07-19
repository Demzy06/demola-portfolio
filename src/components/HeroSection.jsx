import Button from "./Button";
import BackdropImg from "../assets/backdrop-svg.svg";
import ButtonJumpTo from "./ButtonJumpTo";
function HeroSection() {
  return (
    <section className="mt-39 pl-5 pr-5 mb-15 ">
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
      <div className="flex justify-between mt-12">
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
