import githubIcon from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";


export default function Navbar() {
  return (
    <nav className="text-white sticky top-0 z-[100] w-full bg-[#1D201F]">
      <div className="container mx-auto  flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-lg font-bold sm:text-xl whitespace-nowrap">
            Kelechi Ukpabi
          </a>

          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#about" className="font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#experience" className="font-medium transition-colors hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="font-medium transition-colors hover:text-primary">
              Projects
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/ukpabik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <img src={githubIcon} alt="GitHub" className="invert h-5 w-5 object-contain max-w-[20px]" />
          </a>
          <a
            href="https://linkedin.com/in/kelechi-ukpabi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <img src={linkedInLogo} alt="LinkedIn" className="invert h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
