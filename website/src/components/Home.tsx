import Spiral from "./Spiral"
import "../styles/Home.css"

export default function Home(){

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-start pt-44 sm:pt-44 space-y-5 bg-[#1D201F]">
      <Spiral />

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center">
        Hi, it's Kelechi
        <span className="ml-1 colorChangingExclamation">!</span>
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl text-center px-4 opacity-80">I like to build cool things.</h2>

      <p className="max-w-xl text-center text-lg px-4 opacity-60">
        I'm a third-year student studying Computer Science and Statistics at UNC Chapel Hill. I'm passionate about
        performant, high-impact projects, and learning how to build scalable systems that solve real-world problems with
        efficiency.
      </p>
    </div>
  )
}