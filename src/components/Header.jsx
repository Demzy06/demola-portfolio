import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

import MenuIcon from "@iconify-react/line-md/menu";
import CloseIcon from "@iconify-react/line-md/close";
function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  console.log(inView);
  return (
    // <div className="md:flex md:pl-10 md:pr-10 md:h-18 md:items-center md:justify-between h-18 flex items-center pl-10 pr-10">
    <header
      ref={ref}
      className={` md:h-fit flex justify-between items-center w-full h-18 fixed top-0 left-0 right-0 z-1000 md:pl-4 md:pr-10 md:bg-[#F9F9F9]/70 backdrop-blur-lg ${navIsOpen ? "bg-white" : "bg-[#F9F9F9]/70 backdrop-blur-lg"} md:h-0 ${inView ? "opacity-100 ease-in translate-y-0" : "opacity-0 -translate-y-10"} transition-all duration-300`}
    >
      <Logo />
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <button
        className="h-fit md:hidden ml-auto mr-5"
        onClick={() => setNavIsOpen((isOpen) => !isOpen)}
      >
        {navIsOpen ? <CloseIcon height="1.8em" /> : <MenuIcon height="1.8em" />}
      </button>
    </header>
    // </div>
  );
}

export default Header;
