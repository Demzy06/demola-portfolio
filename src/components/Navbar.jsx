import ButtonJumpTo from "./ButtonJumpTo";
import { Link } from "react-scroll";

const navLinks = [
  { title: "Projects", path: "projects" },
  { title: "About", path: "about" },
  { title: "Technical Stack", path: "stacks" },
  { title: "Contact", path: "contact" },
];

function Navbar({ navIsOpen, setNavIsOpen }) {
  return (
    <nav
      className={`${navIsOpen ? "block" : "hidden"} flex  pt-14 flex-col items-center h-dvh fixed bg-white top-18 z-100 w-full`}
    >
      <ul className="w-fit  text-center">
        {navLinks.map((nav) => (
          <Link
            to={nav.path}
            smooth={true}
            duration={500}
            offset={-65}
            onClick={() => setNavIsOpen((isOpen) => !isOpen)}
          >
            <li className="mb-10 text-[36px] font-semibold scale-x-[1.1] trac">
              {nav.title}
            </li>
          </Link>
        ))}
      </ul>
      <ButtonJumpTo
        text="Start Project"
        className="pl-12 pr-12 p-3.5 bg-black text-white mt-8 text-[17px] rounded-3xl w-fit "
      />
    </nav>
  );
}

export default Navbar;
