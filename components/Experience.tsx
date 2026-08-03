import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="pb-28">
      <SectionHeading title="Experience" />
      <ul className="flex flex-col gap-4">
        {experience.map((e) => (
          <li
            key={e.role}
            className="group -mx-4 rounded-lg border border-transparent p-4 transition duration-200 hover:border-white/10 hover:bg-white/5"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <span className="text-white transition group-hover:text-accent">
                {e.role}
              </span>
              <span className="text-gray-300 md:text-right">
                {e.period}
                <em className="block not-italic text-gray-400">{e.org}</em>
              </span>
            </div>
            <p className="mt-3 max-w-[760px] text-sm leading-relaxed text-gray-400">
              {e.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}