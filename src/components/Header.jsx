import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

import MenuIcon from "@iconify-react/line-md/menu";
import CloseIcon from "@iconify-react/line-md/close";
function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-18 bg-[#F9F9F9]/70 backdrop-blur-lg pl-9 pr-5 border-b border-[#EEEEEE] fixed top-0 left-0 right-0">
      <Logo />
      <Navbar />
      <button
        className="h-fit"
        onClick={() => setNavIsOpen((isOpen) => !isOpen)}
      >
        {navIsOpen ? <CloseIcon height="1.8em" /> : <MenuIcon height="1.8em" />}
      </button>
    </header>
  );
}

export default Header;
