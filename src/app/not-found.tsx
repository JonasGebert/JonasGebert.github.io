import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-6xl font-bold accent-text">404</p>
      <p className="text-slate-400">Diese Seite existiert nicht.</p>
      <Link href="/" className="accent-bg rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-950">
        Zur Startseite
      </Link>
    </main>
  );
}
