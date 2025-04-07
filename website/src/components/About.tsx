import me from "../assets/me.jpg"
export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-10">about me</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[#D1DEDE]">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              I'm currently a <strong>Software Engineer Intern</strong> at{" "}
              <a
                href="https://github.com/about"
                className="text-primary font-medium text-[#EAD2AC]"
              >
                GitHub
              </a>
              .

              I'm also a third-year student completing a <strong>Bachelor of Science</strong> in <strong>Computer Science</strong> with a minor in <strong>Statistics</strong> at{" "}
              <a
                href="https://www.unc.edu"
                className="text-primary font-medium text-[#EAD2AC]"
              >
                University of North Carolina at Chapel Hill
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed">
            Outside of school, I'm passionate about creative side projects and always eager to learn new skills. 
            In my free time, I enjoy collecting niche fragrances, playing video games, or lifting at the gym.
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
