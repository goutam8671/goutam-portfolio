import SpaceCanvas from "../components/SpaceCanvas";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-white selection:text-black font-sans">
      <SpaceCanvas />
      <CustomCursor />
      <Navbar />
      <div className="pt-20"> 
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}