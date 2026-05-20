import me from "../assets/me.jpg"
export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-10">about me</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[#D1DEDE]">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              I'm currently a <strong>Software Engineer</strong> at{" "}
              <a
                href="https://google.com"
                className="text-primary font-medium text-[#EAD2AC]"
              >
                Google
              </a>
              , where I help build infrastructure to ensure Google stays tax compliant.
              Previously, I was at 
              <a href="https://github.com" className="text-primary font-medium text-[#EAD2AC]"> GitHub </a> 
              and 
              <a href="https://www.cisco.com" className="text-primary font-medium text-[#EAD2AC]"> Cisco </a>
              working on migrations and agentic workflows.
            </p>
            <div className="pt-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#EAD2AC] mb-4">
                Technologies I'm currently using:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
                <li>▹ Java</li>
                <li>▹ Protobuf</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
            Outside of work, I love collecting fragrances, playing video games, watching movies, or exercising. 
              My favorite show is <a href="https://www.netflix.com/title/80992228" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">Kengan Ashura</a>, and my favorite game of all time is <a href="https://www.pokemon.com/us/pokemon-video-games/pokemon-black-version-and-pokemon-white-version/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Pokemon Black</a>.
            
            </p>
            
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={me}
                alt="Profile picture"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
