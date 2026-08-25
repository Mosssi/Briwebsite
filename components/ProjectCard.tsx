import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import LinkButton from "@/components/LinkButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col group border border-gray-700 transition-colors hover:border-accent">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block h-40 overflow-hidden"
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </Link>
      <div className="border-t border-gray-600 px-3 py-2 font-mono text-xs text-gray-400">
        {project.tech}
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-gray-600 p-4">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="font-mono text-lg text-white transition hover:text-accent">
            {project.title}
          </h3>
        </Link>
        <p className="flex-1 text-sm text-gray-400">{project.description}</p>
         <LinkButton
          href={`/projects/${project.slug}`}
          icon={<>&lt;~&gt;</>}
        >
          View Case
        </LinkButton>
      </div>
    </div>
  );
}