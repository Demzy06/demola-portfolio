import ButtonJumpTo from "./ButtonJumpTo";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const navLinks = [
  { title: "Projects", path: "projects" },
  { title: "About", path: "about" },
  { title: "Technical Stack", path: "stacks" },
  { title: "Contact", path: "contact" },
];

function Navbar({ navIsOpen, setNavIsOpen }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <nav
      className={`${navIsOpen ? `block` : `hidden`} flex  pt-14 flex-col items-center h-dvh fixed bg-white top-18 z-100 w-full`}
    >
      <ul
        ref={ref}
        className={`${inView ? "opacity-100 ease-in-out translate-y-0 scale-[1]" : "opacity-0 translate-y-2 scale-[0.9]"} transition-all duration-800 w-fit text-center`}
      >
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
      <div
        className={`${inView ? "opacity-100 ease-in-out translate-y-0 scale-[1]" : "opacity-0 translate-y-2 scale-[0.9]"} transition-all duration-800 mt-8`}
      >
        <ButtonJumpTo
          text="Start Project"
          className="pl-12 pr-12 p-3.5 bg-black text-white  text-[17px] rounded-3xl w-fit "
        />
      </div>
    </nav>
  );
}

export default Navbar;
