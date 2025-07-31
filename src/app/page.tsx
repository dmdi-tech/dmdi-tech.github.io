import "./globals.css"
import Navbar from "./components/Navbar"
import NavbarMobile from "./components/Nav-mobile"
import Intro from "./components/Intro"
import About from "./components/About"
import Tools from "./components/Tools"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"

function App() {
    return (
      <>
        <div className="sm:px-5 lg:px-5 relative max-w-2xl mx-auto
        flex flex-col justify-center items-center space-y-20 lg:space-y-24">
          <Navbar />
          <NavbarMobile />
          <div className="px-4 sm:px-6 lg:px-8 relative max-w-2xl pt-[40px] sm:pt-[130px]
            md:pt-[150px] lg:pt-[188px] mx-auto flex flex-col gap-10 mb-10 justify-center">
            <Intro />
            <About />
            <Tools />
            <Experience />
            <Projects />
            <Achievements />
          </div>
        </div>
      </>
    );
}

export default App;