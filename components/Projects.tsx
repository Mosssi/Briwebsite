import Link from "next/link";
import { MoveRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import LinkButton  from "./LinkButton";

export default function Projects() {
  return (
    <section id="projects" className="pb-28">
      <SectionHeading title="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <LinkButton href="/projects">
          View All
        </LinkButton>
          
      </div>
    </section>
  );
}