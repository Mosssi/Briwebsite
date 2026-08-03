import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="pb-28">
      <SectionHeading title="Skills" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:pl-16">
        {skills.map((s) => (
          <div
            key={s.group}
            className="group border border-gray-600 transition duration-200 hover:border-white/30 hover:bg-white/5"
          >
            <h3 className="border-b border-gray-600 px-3 py-2 font-mono text-[15px] text-white transition group-hover:text-accent">
              {s.group}
            </h3>
            <p className="px-3 py-2 font-mono text-[13px] leading-7 text-gray-400">
              {s.items.join(" ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}