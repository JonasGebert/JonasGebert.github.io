import Link from "next/link";
import { hobbies } from "@/content/extras";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function Hobbies() {
  return (
    <section id="hobbys" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        kicker="Hobbys"
        title="Abseits von Werkbank & Hörsaal"
        intro="Jede Karte führt zu einer eigenen Seite mit Bildern."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((h) => (
          <Reveal key={h.slug}>
            <Link href={`/hobbys/${h.slug}/`} className="card group block h-full p-6 text-center">
              <span className="mx-auto mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                <Icon name={h.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-semibold text-slate-100">{h.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{h.note}</p>
              <p className="mt-4 text-sm font-medium text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Bilder ansehen →
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
