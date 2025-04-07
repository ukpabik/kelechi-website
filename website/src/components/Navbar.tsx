import githubIcon from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#1D201F]">
  <div className="relative container mx-auto flex h-16 items-center justify-center px-4">
    <a
      href="/"
      className="absolute left-4 text-lg font-bold sm:text-xl whitespace-nowrap"
    >
      Kelechi Ukpabi
    </a>

    <div className="hidden md:flex items-center space-x-4 text-sm">
      <a href="#" className="font-medium hover:text-[#EAD2AC]">Home</a>
      <a href="#about" className="font-medium hover:text-[#EAD2AC]">About</a>
      <a href="#experience" className="font-medium hover:text-[#EAD2AC]">Experience</a>
      <a href="#projects" className="font-medium hover:text-[#EAD2AC]">Projects</a>
      <a href="#skills" className="font-medium hover:text-[#EAD2AC]">Skills</a>
    </div>

    <div className="absolute right-4 flex items-center space-x-4">
      <a
        href="https://github.com/ukpabik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="h-5 w-5 invert hover:invert-0 transition duration-300"
        />
      </a>
      <a
        href="https://linkedin.com/in/kelechi-ukpabi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedInLogo}
          alt="LinkedIn"
          className="h-5 w-5 invert hover:invert-0 transition duration-300"
        />
      </a>
    </div>
  </div>
</nav>

  );
}
