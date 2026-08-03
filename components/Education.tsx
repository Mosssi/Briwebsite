import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="pb-28">
      <SectionHeading title="Education" />
      <ul className="flex flex-col gap-8">
        {education.map((e) => (
          <li
            key={e.program}
            className="group -mx-4 rounded-lg border border-transparent p-4 transition duration-200 hover:border-white/10 hover:bg-white/5"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <span className="text-white transition group-hover:text-accent">
                {e.program}
              </span>
              <span className="text-gray-300 md:text-right">
                {e.period}
                <em className="block not-italic text-gray-400">{e.school}</em>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}