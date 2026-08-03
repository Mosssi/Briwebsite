import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1000px] px-6">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}