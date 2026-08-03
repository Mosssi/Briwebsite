import Link from "next/link";
import { MoveRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pb-28">
      <SectionHeading title="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.slice(0, 6).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="flex items-center gap-1.5 border border-gray-600 px-4 py-2 font-mono text-sm text-white transition hover:border-accent hover:text-accent"
        >
          View all <MoveRight size={14} />
        </Link>
      </div>
    </section>
  );
}