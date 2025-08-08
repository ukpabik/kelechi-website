import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import githubIcon from "../assets/github.svg"

type ProjectType = {
  id: number,
  title: string,
  description: string,
  techStack: string[],
  image: string,
  github?: string,
  link?: string, 
  videoSrc?: string
}


const projects = [
  {
    id: 1,
    title: "eZpZ-lister",
    description:
      "eZpZ-lister is a full-stack application designed to automate the most tedious parts of the eBay listing process and completely eliminate fees.",
    techStack: ["Go", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "/ezpz-image.png",
    github: "https://github.com/ukpabik/eZpZ-lister",
  },
  {
    id: 2,
    title: "MidDiff.gg",
    description:
      "A League of Legends platform that uses machine learning to analyze player behavior, cluster gameplay styles, and deliver personalized feedback.",
    techStack: ["Spring Boot", "Flask", "Next.js", "AWS EC2", "scikit-learn", "PostgreSQL"],
    image: "/middiff.gg.png",
    github: "https://github.com/ukpabik/mid-diff",
    link: "https://mid-diff.vercel.app/"
  },
  {
    id: 3,
    title: "SyllaByte",
    description:
      "Chrome extension and dashboard that extracts academic deadlines from PDF syllabi using a 92% accurate Python machine learning NER model, enabling one-click import to Google Calendar.",
    techStack: ["Python", "spaCy", "Flask", "TypeScript", "React", "PostgreSQL"],
    image: "/syllabyte.png",
    github: "https://github.com/ukpabik/Syllabyte",
  },
  {
    id: 4,
    title: "Bolt",
    description:
      "A React-based web app that transcribes videos and generates clickable, timestamped notes using OpenAI Whisper and GPT-4.",
    techStack: ["React", "PostgreSQL", "OAuth2", "OpenAI API"],
    image: "/bolt.png",
    link: "https://devpost.com/software/bolt-yaveuc",
  },
  {
    id: 5,
    title: "CryptoChat",
    description:
      "A real-time cryptocurrency chat app with sub-50ms messaging, live crypto data, and JWT-secured authentication.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Google Gen AI"],
    image: "/cryptochat.png",
    github: "https://github.com/ukpabik/cryptochat",
    link: "https://cryptochat-frontend.vercel.app"
  },
  {
    id: 6,
    title: "TermBattle",
    description:
      "A turn-based multiplayer terminal game in Java supporting up to 1,000 concurrent users with Dockerized deployment and multithreaded TCP architecture.",
    techStack: ["Java", "PostgreSQL", "Docker", "TCP/IP"],
    image: "/termbattle.png",
    github: "https://github.com/ukpabik/term-battle",
  }
];
export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-24 container mx-auto px-4 md:px-6 max-w-[1000px] py-6">
      <h2 className="text-3xl font-bold mb-8">pet projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: {project: ProjectType}) {
  return (
    <Card className="overflow-hidden h-[400px] group relative">
      <div className="absolute inset-0 w-full h-full z-5">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300"></div>
      </div>

      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={githubIcon} alt="GitHub" className="invert w-5 h-5" />
          </a>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/link.svg" alt="Link" className="invert w-5 h-5 text-[#D1DEDE]" />
          </a>
        )}
      </div>

      <CardContent className="relative z-5 flex flex-col justify-end h-full p-6 text-[#D1DEDE]">
        <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
        <p className="text-sm mb-4 text-center">{project.description}</p>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-white/30 hover:bg-white/40 text-[#D1DEDE]">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

