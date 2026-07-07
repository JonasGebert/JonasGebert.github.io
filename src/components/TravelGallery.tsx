import Image from "next/image";
import { travelPhotos, travelSection } from "@/content/extras";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function TravelGallery() {
  return (
    <section id="reisen" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker="Reisen" title={travelSection.title} intro={travelSection.message} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {travelPhotos.map((photo) => (
          <Reveal key={photo.src} className="card group overflow-hidden">
            <div className="relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <p className="p-4 text-sm font-medium text-slate-300">{photo.caption}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
