import { Link } from "react-scroll";

function ButtonJumpTo({ className, text, path, offset }) {
  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      offset={offset}
      className={className}
    >
      <button>{text}</button>
    </Link>
  );
}

export default ButtonJumpTo;
