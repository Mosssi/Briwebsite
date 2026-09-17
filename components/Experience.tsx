import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="pb-28">
      <SectionHeading title="Experience" />
      <ul className="flex flex-col gap-4 pl-8">
        {experience.map((e, i) => (
          <li
            key={e.role}
            className="group relative -mx-4 rounded-lg border border-transparent p-4 transition duration-200 hover:border-white/10 hover:bg-white/5"
          >
           
            <span className="absolute -left-[25px] top-[26px] z-10 h-3 w-3 rounded-full border-2 border-accent bg-black transition duration-200 group-hover:bg-accent" />

            {i !== experience.length - 1 && (
              <span className="absolute -left-[20px] top-[32px] bottom-[-16px] w-px bg-gray-700 transition duration-200 group-hover:bg-accent" />
            )}

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