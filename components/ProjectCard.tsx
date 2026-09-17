"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFigma, FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import LinkButton from "@/components/LinkButton";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.externalOnly
    ? project.code ?? "#"
    : `/projects/${project.slug}`;
  const isExternal = !!project.externalOnly;

  return (
    <div className="flex flex-col group border border-gray-700 transition-colors hover:border-accent">
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
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

      <div className="flex min-h-[72px] items-start justify-between gap-2 border-t border-gray-600 px-3 py-2 font-mono text-xs text-gray-400">
        <span>{project.tech}</span>
        <div className="flex shrink-0 gap-3 pt-0.5">
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              aria-label="View Figma design"
              className="text-gray-400 transition group-hover:text-accent hover:text-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <FaFigma size={14} />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              aria-label="View code on GitHub"
              className="text-gray-400 transition group-hover:text-accent hover:text-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-gray-600 p-4">
        <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
          <h3 className="font-mono text-lg text-white transition group-hover:text-accent">
            {project.title}
          </h3>
        </Link>
        <p className="flex-1 text-sm text-gray-400">{project.description}</p>
        <LinkButton
          href={href}
          icon={<>&lt;~&gt;</>}
          subtle
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          View Case
        </LinkButton>
      </div>
    </div>
  );
}