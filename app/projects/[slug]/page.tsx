import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import { projects } from "@/data/projects";
import LinkButton from "@/components/LinkButton";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      <Link
        href="/projects"
        className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition hover:text-accent"
      >
        <MoveLeft size={14} /> Back to Projects
      </Link>

      <h1 className="mb-3 font-mono text-4xl font-semibold text-white">
        <span className="text-accent">#</span>
        {project.title}
      </h1>
      <p className="mb-10 font-mono text-sm text-gray-400">{project.tech}</p>

            {(project.live || project.code || project.figma) && (
        <div className="mb-12 flex flex-wrap gap-3">
          {project.live && (
            <LinkButton href={project.live} external>Live</LinkButton>
          )}
          {project.code && (
            <LinkButton href={project.code} external>Code</LinkButton>
          )}
          {project.figma && (
            <LinkButton href={project.figma} external>Figma</LinkButton>
          )}
        </div>
      )}

      <div className="flex flex-col gap-10">
        {project.blocks.map((block, i) => {          
          if (block.type === "text") {
            return (
            <div key={i} className="max-w-[760px]">
              {block.heading && (
                <h2 className="mb-3 font-mono text-2xl font-semibold text-white">
                  {block.heading}
                </h2>
              )}
              <p className="text-lg leading-relaxed text-gray-300">
                {block.body}
              </p>
            </div>
          );
        }

        if (block.type === "image"){
          return(
               <img
              key={i}
              src={block.src}
              alt={project.title}
              className="w-full"
            />
        );
      }

      if (block.type === "links"){
          return(
            <div key={i} className="flex flex-wrap gap-3">
              {block.items.map((item) => (
                <LinkButton key={item.url} href={item.url} external>
                  {item.label}
                </LinkButton>
              ))}
            </div>
          );
        }
        return null;
        })}
      </div>
    </main>
  );
}