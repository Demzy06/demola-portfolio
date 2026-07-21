import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

import MenuIcon from "@iconify-react/line-md/menu";
import CloseIcon from "@iconify-react/line-md/close";
function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(inView);
  return (
    <>
      <header
        ref={ref}
        className={`${inView ? "opacity-100 ease-in translate-y-0" : "opacity-0 -translate-y-10"} transition-all duration-300 flex justify-between items-center h-18 bg-[#F9F9F9]/70 backdrop-blur-lg pl-9 pr-5 border-b border-[#EEEEEE] fixed top-0 left-0 right-0 z-1000`}
      >
        <Logo />
        <button
          className="h-fit"
          onClick={() => setNavIsOpen((isOpen) => !isOpen)}
        >
          {navIsOpen ? (
            <CloseIcon height="1.8em" />
          ) : (
            <MenuIcon height="1.8em" />
          )}
        </button>
      </header>
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </>
  );
}

export default Header;
