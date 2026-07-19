import { Link } from "react-scroll";

function ButtonJumpTo({ className, text, path, offset }) {
  return (
    <button className={className}>
      <Link to={path} smooth={true} duration={500} offset={offset}>
        {text}
      </Link>
    </button>
  );
}

export default ButtonJumpTo;
