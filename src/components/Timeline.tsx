import Link from "next/link";
import { timeline } from "@/content/timeline";
import { getZeugnis } from "@/content/zeugnisse";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <section id="lebenslauf" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        kicker="Lebenslauf"
        title="Stationen"
        intro="Vom Abitur über die Ausbildung bei DESY bis ins Maschinenbau-Studium — jede Station mit Original-Zeugnis belegt."
      />
      <ol className="relative ml-3 border-l border-slate-700/60">
        {timeline.map((item) => (
          <Reveal as="li" key={item.id} className="group relative mb-12 pl-8 last:mb-0">
            <span
              aria-hidden
              className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-[#0b0f17] transition-colors group-hover:bg-cyan-400"
            />
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              {item.period} · {item.kind}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-100">{item.title}</h3>
            <p className="text-slate-400">{item.org}</p>
            {item.highlight ? (
              <p className="mt-2 inline-block rounded-lg bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                {item.highlight}
              </p>
            ) : null}
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">{item.description}</p>
            {item.bullets ? (
              <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-sm text-slate-500">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
            {item.zeugnisSlugs ? (
              <p className="mt-4 flex flex-wrap gap-2 text-sm">
                {item.zeugnisSlugs.map((slug) => {
                  const z = getZeugnis(slug);
                  if (!z) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/zeugnisse/${slug}/`}
                      className="rounded-lg border border-slate-700 px-3 py-1 text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      {z.title} ↗
                    </Link>
                  );
                })}
              </p>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
