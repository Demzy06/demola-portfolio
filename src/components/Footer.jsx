const reachMe = [
  { social: "GitHub", path: "https://github.com/Demzy06?tab=repositories" },
  {
    social: "Linkedin",
    path: "https://www.linkedin.com/in/olayode-ademola-4a5359273/",
  },
  { social: "X", path: "https://x.com/demola_olayode" },
];
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-[#EEEEEE] pt-10 pl-5 pr-5 mb-10">
      <div className="m-auto w-fit mb-6">
        <h3 className="mb-3 uppercase text-[20px] w-fit m-auto scale-x-[1.4] tracking-tighter font-bold">
          Demola Olayode
        </h3>
        <p className="text-[13px] text-secondary">
          &copy; {year} DEM. Built with Precision By Demola.
        </p>
      </div>
      <div className="text-secondary w-[80%] m-auto">
        <ul className="flex justify-evenly text-[12px]">
          {reachMe.map((social) => (
            <li className="uppercase text-secondary tracking-widest">
              <a href={social.path} className="underline">
                {social.social}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center mt-6 w-fit m-auto">
        <div className="w-2 h-2 mr-2 bg-green-400 rounded-full" />
        <p className="text-secondary text-[11px]">Status: Building</p>
      </div>
    </footer>
  );
}

export default Footer;
