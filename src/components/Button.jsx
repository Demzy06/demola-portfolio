// import { Link } from "react-router-dom";

function Button({ className, text, icon, iconStyles, path }) {
  return (
    <button className={`${className} ${icon && "flex"}`}>
      <a href={path} target="_blank" className={`${icon && "flex"}`}>
        {text}
        {
          // icon && <span className="w-fit flex items-center ml-2">{icon}</span>
          <div className="w-fit flex items-center ml-2">
            <img src={icon} className={`${iconStyles}`} />
          </div>
        }
      </a>
    </button>
  );
}

export default Button;
