function Button({ className, text, icon, path, onClick }) {
  return (
    <button className={`${className} ${icon && "flex"}`} onClick={onClick}>
      <a href={path} target="_blank" className={`${icon && "flex"}`}>
        {text}
        {icon && <span className="w-fit flex items-center ml-2">{icon}</span>}
      </a>
    </button>
  );
}

export default Button;
