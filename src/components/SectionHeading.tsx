import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-10">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] accent-text">{kicker}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-2xl text-slate-400">{intro}</p> : null}
    </Reveal>
  );
}
