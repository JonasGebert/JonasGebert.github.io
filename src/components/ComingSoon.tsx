import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Sektion für noch nicht vorhandene Inhalte (Projekte, Reisen) — ehrlich als „folgt“ markiert. */
export function ComingSoon({
  id,
  kicker,
  title,
  message,
  image,
  count,
}: {
  id: string;
  kicker: string;
  title: string;
  message: string;
  image: string;
  count: number;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker={kicker} title={title} intro={message} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <Reveal key={i} className="card overflow-hidden opacity-70">
            <Image
              src={image}
              alt="Platzhalter — Inhalt folgt"
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <div className="mb-2 h-4 w-2/3 rounded bg-slate-800" aria-hidden />
              <div className="h-3 w-full rounded bg-slate-800/70" aria-hidden />
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-600">
                Coming Soon
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
