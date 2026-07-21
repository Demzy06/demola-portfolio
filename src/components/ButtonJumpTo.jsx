import { Link } from "react-scroll";

function ButtonJumpTo({ className, text, path, offset, setNavIsOpen }) {
  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      offset={offset}
      className={className}
      onClick={setNavIsOpen ? () => setNavIsOpen((isOpen) => !isOpen) : ""}
    >
      <button>{text}</button>
    </Link>
  );
}

export default ButtonJumpTo;
