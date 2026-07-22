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
      className={`${navIsOpen ? `block` : `hidden md:block`} flex pt-14 flex-col items-center h-dvh fixed  top-18 z-100 w-full md:h-20 md:p-0 md:w-[80%] lg:w-[70%] bg-white md:bg-transparent md:top-0 md:relative md:flex md:flex-row`}
    >
      <ul
        ref={ref}
        className={`${inView ? "opacity-100 ease-in-out translate-y-0 scale-[1]" : "opacity-0 translate-y-2 scale-[0.9]"} transition-all duration-800 w-fit text-center md:flex md:justify-between md:w-full md:items-center h-fit`}
      >
        <div className="md:flex md:justify-between md:w-[70%] lg:w-[55%]">
          {navLinks.map((nav) => (
            <Link
              className="md:h-fit cursor-pointer"
              to={nav.path}
              smooth={true}
              duration={500}
              offset={-65}
              onClick={() => setNavIsOpen((isOpen) => !isOpen)}
            >
              <li className="mb-10 text-[36px] font-semibold md:font-medium scale-x-[1.1] md:m-0 md:text-[16px] ">
                {nav.title}
              </li>
            </Link>
          ))}
        </div>
        <ButtonJumpTo
          text="Start Project"
          className="pl-12 pr-12 p-3.5 font-semibold bg-black text-white tracking-wider text-[17px] rounded-3xl w-fit md:p-2 md:pl-4 md:pr-4 md:text-[14px] md:font-medium inline-block mt-10 md:mt-0"
          path="contact"
          setNavIsOpen={setNavIsOpen}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
