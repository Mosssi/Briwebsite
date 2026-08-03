import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import { projects } from "@/data/projects";

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

      {(project.live || project.code) && (
        <div className="mb-12 flex gap-3 font-mono text-[13px]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border border-accent px-3 py-1.5 text-accent transition hover:bg-accent hover:text-black"
            >
              Live <MoveRight size={14} />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border border-gray-500 px-3 py-1.5 text-gray-300 transition hover:border-white hover:text-white"
            >
              Code <MoveRight size={14} />
            </a>
          )}
        </div>
      )}

      <div className="flex flex-col gap-10">
        {project.blocks.map((block, i) =>
          block.type === "text" ? (
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
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={block.src}
              alt={project.title}
              className="w-full"
            />
          )
        )}
      </div>
    </main>
  );
}