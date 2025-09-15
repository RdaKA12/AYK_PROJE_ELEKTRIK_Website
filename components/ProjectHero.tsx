// components/ProjectHero.tsx
"use client";
import React from "react";
import NextImage from "next/image";

type Dim = { w: number; h: number } | null;

export default function ProjectHero({
  title,
  images,
  // default oran: resimler ölçülene kadar 16:9 ile başla
  fallbackAspect = "16 / 9",
  maxHeight = 550,
  className = "",
}: {
  title: string;
  images: string[];
  fallbackAspect?: string;
  maxHeight?: number;
  className?: string;
}) {
  const [i, setI] = React.useState(0);
  const count = images.length;

  // Her görselin doğal boyutlarını tut
  const [dims, setDims] = React.useState<Dim[]>(
    () => images.map(() => null)
  );

  // Boyutları preload ederek al
  React.useEffect(() => {
    let alive = true;
    const loaders = images.map((src, idx) => {
      // SSR güvenli
      if (typeof window === "undefined") return;
      const im = new window.Image();
      im.onload = () => {
        if (!alive) return;
        setDims((prev) => {
          const next = [...prev];
          next[idx] = { w: im.naturalWidth || im.width, h: im.naturalHeight || im.height };
          return next;
        });
      };
      im.src = src;
    });
    return () => {
      alive = false;
    };
  }, [images]);

  const next = () => setI((p) => (p + 1) % count);
  const prev = () => setI((p) => (p - 1 + count) % count);

  // basit touch swipe
  const startX = React.useRef<number | null>(null);
  const onStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onMove = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.touches[0].clientX - startX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); startX.current = null; }
  };
  const onEnd = () => (startX.current = null);

  // O anki resmin oranı (w / h) → CSS aspect-ratio "w / h"
  const curDim = dims[i];
  const aspect = curDim ? `${curDim.w} / ${curDim.h}` : fallbackAspect;

  return (
    <div className={`rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 relative ${className}`}>
      <div
        className="relative w-full h-auto max-h-[70vh] md:max-h-[550px]"
        style={{ aspectRatio: aspect, maxHeight: `${maxHeight}px` }}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onTouchEnd={onEnd}
      >
        {/* Slides */}
        <div
          className="absolute inset-0 flex h-full w-full"
          style={{ transform: `translateX(-${i * 100}%)`, transition: "transform 450ms cubic-bezier(.4,0,.2,1)" }}
        >
          {images.map((src, idx) => (
            <div key={src} className="relative h-full w-full shrink-0">
              {/* Arka plan blur (tam ekranı doldursun) */}
              <NextImage
                src={src}
                alt=""
                aria-hidden
                fill
                className="object-cover blur-lg scale-110 opacity-20"
                sizes="100vw"
                priority={idx === 0}
              />
              {/* Esas görsel — orijinal oranı korumak için contain */}
              <a href={src} target="_blank" rel="noreferrer" className="absolute inset-0 cursor-zoom-in">
                <NextImage
                  src={src}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority={idx === 0}
                />
              </a>
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Önceki"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 hover:bg-white shadow border border-neutral-200 backdrop-blur flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={next}
              aria-label="Sonraki"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 hover:bg-white shadow border border-neutral-200 backdrop-blur flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </>
        )}

        {count > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 w-4 rounded-full ${i === idx ? "bg-[var(--brand)]" : "bg-white/70"}`}
                aria-label={`${idx + 1}. görsel`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
