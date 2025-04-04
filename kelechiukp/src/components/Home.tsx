import Spiral from "./Spiral"
import "../styles/Home.css"

export default function Home(){

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-[#1D201F] text-white">
      <Spiral />

      <h1 className="text-3xl sm:text-4xl font-bold flex items-center">
        Hi, it's Kelechi
        <span className="ml-1 colorChangingExclamation">!</span>
      </h1>

      <p className="max-w-xl text-center text-lg px-4">
        I'm a third-year student studying Computer Science and Statistics at UNC Chapel Hill. 
        I'm passionate about performant, high-impact projects, and learning how to build 
        scalable systems that solve real-world problems with efficiency.
      </p>
    </div>
  )
}