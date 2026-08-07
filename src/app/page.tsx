import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Involvement from "@/components/Involvement";
import Philosophy from "@/components/Philosophy";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="aurora-field">
        <div className="aurora-grid" />
      </div>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Involvement />
        <Philosophy />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
