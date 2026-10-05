import TerminalIntro from "@/components/TerminalIntro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <TerminalIntro />
      <Hero />
      <About />
      <Skills />
      <Services />
       <Experience />
      <Projects />
      <Process />
      <Contact />
    </>
  );
}
