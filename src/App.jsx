import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Education from "./sections/Education";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Profiles from "./sections/Profiles";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">

      <ScrollProgress />

      <CursorGlow />

      <BackgroundGlow />

      <Navbar />

      <Hero />

      <Stats />

      <Education />

      <About />

      <Skills />

      <Projects />

      <Profiles />

      <Achievements />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;