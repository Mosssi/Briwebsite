import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      <h1 className="mb-3 font-mono text-4xl font-semibold text-white">
        <span className="text-accent">#</span>All Projects
      </h1>
      <p className="mb-12 text-lg text-gray-400">
        Design and frontend work — client projects, course assignments, and
        personal builds.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}