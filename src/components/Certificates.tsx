import Link from "next/link";
import { zeugnisse } from "@/content/zeugnisse";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function Certificates() {
  return (
    <section id="zeugnisse" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        kicker="Zeugnisse"
        title="Nachweise im Original"
        intro="Alle Zeugnisse als vollständige Web-Version und als PDF-Download."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {zeugnisse.map((z) => (
          <Reveal key={z.slug} className="card flex flex-col p-6">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Icon name="award" className="h-4 w-4" /> {z.category}
            </p>
            <h3 className="text-lg font-semibold leading-snug text-slate-100">{z.title}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {z.issuer} · {z.date}
            </p>
            <p className="mt-3 text-sm italic text-slate-400">{z.highlight}</p>
            <div className="mt-auto flex gap-3 pt-5 text-sm font-medium">
              <Link
                href={`/zeugnisse/${z.slug}/`}
                className="flex items-center gap-1.5 text-cyan-300 transition-colors hover:text-cyan-200"
              >
                <Icon name="external" className="h-4 w-4" /> Ansehen
              </Link>
              <a
                href={z.pdf}
                download
                className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-slate-200"
              >
                <Icon name="download" className="h-4 w-4" /> PDF
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
