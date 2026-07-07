import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hobbies } from "@/content/extras";
import { Icon } from "@/components/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return hobbies.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);
  return {
    title: hobby ? `${hobby.name} — Hobby` : "Hobby",
    description: hobby?.note,
  };
}

export default async function HobbyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);
  if (!hobby) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/#hobbys"
        className="mb-10 flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
      >
        <Icon name="arrowLeft" className="h-4 w-4" /> Zurück zum Portfolio
      </Link>

      <div className="mb-12 flex items-center gap-4">
        <span className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
          <Icon name={hobby.icon} className="h-8 w-8" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] accent-text">Hobby</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            {hobby.name}
          </h1>
        </div>
      </div>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-400">{hobby.note}</p>

      {hobby.images.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobby.images.map((img) => (
            <figure key={img.src} className="card group overflow-hidden">
              <div className="overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              {img.caption ? (
                <figcaption className="p-4 text-sm font-medium text-slate-300">
                  {img.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card overflow-hidden opacity-70">
              <Image
                src="/assets/images/placeholder-hobby.svg"
                alt="Platzhalter — Bilder folgen"
                width={800}
                height={500}
                className="aspect-square w-full object-cover"
              />
              <p className="p-4 text-xs font-medium uppercase tracking-wider text-slate-600">
                Bilder folgen
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
