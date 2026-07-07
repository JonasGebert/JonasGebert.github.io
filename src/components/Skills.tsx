import { skillGroups, softSkills } from "@/content/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        kicker="Skills"
        title="Tech Stack & Kenntnisse"
        intro="Jede Einstufung ist belegt — durch Noten, Ausbildungsinhalte oder Berufspraxis."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.title} className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                <Icon name={group.icon} />
              </span>
              <h3 className="font-semibold text-slate-100">{group.title}</h3>
            </div>
            <ul className="space-y-4">
              {group.skills.map((s) => (
                <li key={s.name}>
                  <p className="mb-1 text-sm font-medium text-slate-300">{s.name}</p>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="bar-fill accent-bg h-full rounded-full"
                      style={{ "--w": `${s.level}%` } as React.CSSProperties}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{s.evidence}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Soft Skills — mit Zeugnis-Zitaten belegt */}
      <Reveal className="mb-8 mt-16">
        <h3 className="text-2xl font-bold tracking-tight text-slate-100">Soft Skills</h3>
        <p className="mt-2 max-w-2xl text-slate-400">
          Keine Selbsteinschätzung: Jeder Punkt stammt als Zitat oder Fakt aus einem der Zeugnisse.
        </p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((s) => (
          <Reveal key={s.name} className="card flex flex-col p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                <Icon name={s.icon} />
              </span>
              <h4 className="font-semibold text-slate-100">{s.name}</h4>
            </div>
            <p className="text-sm italic leading-relaxed text-slate-400">{s.evidence}</p>
            <p className="mt-auto pt-4 text-xs font-medium uppercase tracking-wider text-slate-600">
              {s.source}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
