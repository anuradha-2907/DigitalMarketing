"use client";

import { useEffect, useRef } from "react";
import { heading, pill } from "@/lib/styles";

const works = Array.from({ length: 9 }, (_, i) => ({
  src: `/assets/work/img${i + 1}.png`,
  alt: i < 2 ? `img${i + 1}` : "img3",
  title: "Photo Retouching",
  category: "Branding",
  // the first item had no entrance animation in the original
  animated: i > 0,
}));

export default function RecentWork() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let cancelled = false;
    let msnry: { layout?: () => void; destroy?: () => void } | undefined;
    const relayout = () => msnry?.layout?.();
    const images = Array.from(grid.querySelectorAll("img"));

    // masonry-layout touches `window` at import time, so load it client-side only.
    import("masonry-layout").then(({ default: Masonry }) => {
      if (cancelled) return;
      msnry = new Masonry(grid, {
        itemSelector: ".masonry-item",
        gutter: 100,
        fitWidth: true,
      });
      // Re-run the layout as images finish loading so items never overlap.
      images.forEach((img) => {
        if (!img.complete) img.addEventListener("load", relayout);
      });
    });

    return () => {
      cancelled = true;
      images.forEach((img) => img.removeEventListener("load", relayout));
      msnry?.destroy?.();
    };
  }, []);

  return (
    <section className="site-container mx-auto py-18">
      <div>
        <span className={pill} />
        <div className="font-poppins">
          <h1 className={`${heading} py-6`}>
            Some recent work
            <br />
            we really proud of <br />
          </h1>
        </div>
        <div ref={gridRef} className="font-poppins">
          {works.map((work) => (
            <div
              key={work.src}
              className={`masonry-item mb-[50px] w-[360px] ${
                work.animated ? "animate__animated animate__bounce animate__fadeInUp" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={work.src} alt={work.alt} className="w-full rounded-[10px]" />
              <h3 className="text-dark">{work.title}</h3>
              <span className="text-gray">{work.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
