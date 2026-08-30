import GreenworldPic from "../assets/projectsImages/greenworld.webp";
import FairhavenPic from "../assets/projectsImages/fairhavens.webp";
import CharacterCounterPic from "../assets/projectsImages/charactercounter.webp";
import ExpenseTrackerPic from "../assets/projectsImages/expensetracker.webp";
import DevfinderPic from "../assets/projectsImages/devfinder.webp";
import FxCheckerPic from "../assets/projectsImages/fx-checker.webp"

export const projects = [
  {
    image: GreenworldPic,
    stack: ["Html", "Css", "JavaScript"],
    projectName: "GreenWorld Website",
    projectHighlight:
      "I built this website for a green energy company to showcase its renewable energy solutions, including solar and wind power. I also used the project to explore and improve my skills in web animations and creating engaging, interactive user experiences.",
    link: "https://greenworld-solar.vercel.app/",
    repo: "https://github.com/Demzy06/greenworld-solar",
  },
  {
    image: FairhavenPic,
    stack: ["React", "JavaScript", "Tailwind Css"],
    projectName: "Fair Havens School",
    projectHighlight:
      "A modern, responsive website built for Fair Havens School to showcase its academic programmes, values, admissions process, and learning environment through a clean and user-friendly digital experience.",
    link: "https://fairhavensschools.com.ng",
    repo: "https://github.com/Demzy06/fair-havens-school",
    layout: "reverse",
  },
  {
    image: CharacterCounterPic,
    stack: ["React", "JavaScript", "Css"],
    projectName: "Character Counter Web App",
    projectHighlight:
      "Character counter is an analysis tool designed to help users analyze their text by tracking character, word, and sentence counts, reading time, character limits, and letter density. The project also includes theme customization, keyboard accessibility, and responsive layouts for different screen sizes.",
    link: "character-counter-flame.vercel.app",
    repo: "https://github.com/Demzy06/character-counter",
  },
  {
    image: ExpenseTrackerPic,
    stack: ["HTML", "Tailwind Css", "JavaScript"],
    projectName: "FinTrack",
    projectHighlight:
      "FinTrack is a personal finance dashoard that allows users to record income and expenses, calculate balances, and persite data using local storage",
    link: "https://fintrack-expense-app.vercel.app/",
    repo: "https://github.com/Demzy06/expense-tracker-app",
    layout: "reverse",
  },
  {
    image: DevfinderPic,
    stack: ["React", "JavaScript", "Css", "API"],
    projectName: "Devfinder",
    projectHighlight:
      "Built this web app that allows users search for profile on github, it displays the numbers of repositories the profile has, shows the socials of the profile and other things too",
    link: "https://github-search-app-wheat.vercel.app/",
    repo: "https://github.com/Demzy06/github-search-appr",
  },
  {
    image: "FxCheckerPic",
    stack: ["React", "JavaScript", "Tailwind CSS", "API", "Vite"],
    projectName: "Devfinder",
    projectHighlight:
      "FX Checker is a responsive web application that allows users to check and compare currency exchange rates in real time. Users can select a base currency, choose a target currency, enter an amount, and view the converted value using live exchange-rate data. Save currency pair in favorites, log conversions.",
    link: "https://fx-checker-peach.vercel.app/",
    repo: "https://github.com/Demzy06/fx-checker",
  },
];