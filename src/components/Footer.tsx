import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-6 py-10 pb-24 text-center text-sm text-slate-600 md:pb-10">
      <p>
        © {new Date().getFullYear()} {profile.fullName}
      </p>
      <p className="mt-1">Erstellt mit Next.js · Inhalte zuletzt aktualisiert: Juli 2026</p>
    </footer>
  );
}
