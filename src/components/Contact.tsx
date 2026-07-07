import { profile } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function Contact() {
  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        kicker="Kontakt"
        title="Lassen Sie uns sprechen"
        intro="Ob Werkstudentenstelle, Praxisprojekt oder Fachfrage — ich antworte schnell."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card p-8">
          <h3 className="mb-6 text-lg font-semibold text-slate-100">Direkt erreichen</h3>
          <ul className="space-y-5">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon name="github" />
                </span>
                <span>
                  <span className="block text-sm text-slate-500">GitHub</span>
                  <span className="font-medium text-slate-200 transition-colors group-hover:text-cyan-300">
                    github.com/JonasGebert
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon name="linkedin" />
                </span>
                <span>
                  <span className="block text-sm text-slate-500">LinkedIn</span>
                  <span className="font-medium text-slate-200 transition-colors group-hover:text-cyan-300">
                    Jonas Gebert
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                <Icon name="globe" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Standort</span>
                <span className="font-medium text-slate-200">{profile.location}</span>
              </span>
            </li>
          </ul>
        </Reveal>
        <Reveal className="card p-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-100">Nachricht schreiben</h3>
          <p className="mb-6 text-sm text-slate-500">
            Erreichbar per Direktnachricht auf LinkedIn.
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-bg inline-block rounded-xl px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Nachricht senden
          </a>
        </Reveal>
      </div>
    </section>
  );
}
