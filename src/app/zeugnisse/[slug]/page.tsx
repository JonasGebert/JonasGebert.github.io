import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listZeugnisSlugs, renderMarkdownFile } from "@/lib/markdown";
import { getZeugnis } from "@/content/zeugnisse";
import { Icon } from "@/components/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return listZeugnisSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const z = getZeugnis(slug);
  return {
    title: z ? z.title : "Zeugnis",
    description: z ? `${z.title} — ${z.issuer}, ${z.date}. ${z.highlight}` : undefined,
  };
}

export default async function ZeugnisPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getZeugnis(slug);
  if (!meta) notFound();

  const html = renderMarkdownFile(`zeugnisse/${slug}.md`);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/#zeugnisse"
          className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
        >
          <Icon name="arrowLeft" className="h-4 w-4" /> Zurück zum Portfolio
        </Link>
        <a
          href={meta.pdf}
          download
          className="accent-bg flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
        >
          <Icon name="download" className="h-4 w-4" /> PDF herunterladen
        </a>
      </div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] accent-text">
        {meta.category} · {meta.issuer} · {meta.date}
      </p>
      <div className="card p-6 sm:p-10">
        <article className="prose-doc" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
