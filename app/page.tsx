"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { projectsWithPhotos } from "@/data/projects";

const ASSET_BASE = "/assets";

const featuredProjects = projectsWithPhotos.slice(0, 6);

export default function Page() {
  const t = useTranslations("home");
  const baseFeatures = t.raw("features") as string[];
  const marqueeItems = Array.from({ length: 4 }, () => baseFeatures).flat();
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <style>{`:root{--brand:#D9251C;--brand-dark:#B01E16;--ink:#111111;--paper:#FAFAFA;--muted:#6B7280}`}</style>

      {/* Hero – 10s bekle, sola kaydır; reset anında transition kapalı */}
<section className="relative overflow-hidden min-h-[85vh]" id="anasayfa">
  <style>{`
    .ease-smooth { transition: transform 450ms cubic-bezier(.4,0,.2,1); }
  `}</style>

  {(() => {
  const heroImages = [
    `${ASSET_BASE}/side_athena/cover2.webp`,
    `${ASSET_BASE}/konyaalti_sahili/cover.webp`,
    `${ASSET_BASE}/antalya_hava_meydan/cover.webp`,
    `${ASSET_BASE}/lider_tohum_ges/cover.webp`,
    `${ASSET_BASE}/hidirlik_kulesi/cover.webp`,
    `${ASSET_BASE}/side_antik_hamam/cover.webp`,
  ];

  const DURATION = 450;

  const [idx, setIdx] = React.useState(0);
  const [isSliding, setIsSliding] = React.useState(false);
  const [noTrans, setNoTrans] = React.useState(false);
  const [direction, setDirection] = React.useState<"left" | "right">("left");

  const nextIndex = (i: number) => (i + 1) % heroImages.length;
  const prevIndex = (i: number) => (i - 1 + heroImages.length) % heroImages.length;

  // preload
  React.useEffect(() => {
    heroImages.forEach(src => { const im = new Image(); im.src = src; });
  }, []);

  // 15 sn bekle → ileri
  React.useEffect(() => {
    if (isSliding) return;
    const t = setTimeout(() => handleNext(), 15000);
    return () => clearTimeout(t);
  }, [idx, isSliding]);

  const instantReset = (toIndex: number) => {
    setNoTrans(true);
    setIdx(toIndex);
    setIsSliding(false);
    setDirection("left"); // dinlenme hâlinde şerit 0 konumunda
    requestAnimationFrame(() => requestAnimationFrame(() => setNoTrans(false)));
  };

  const handleNext = () => {
    if (isSliding) return;
    setDirection("left");
    setIsSliding(true);                         // 0 → -50%
    setTimeout(() => instantReset(nextIndex(idx)), DURATION);
  };

  const handlePrev = () => {
    if (isSliding) return;
    // önce bandı -50%'ye anında konumla (current sağda görünsün)
    setDirection("right");
    setNoTrans(true);
    setIsSliding(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNoTrans(false);
        setIsSliding(true);                    // -50% → 0
        setTimeout(() => instantReset(prevIndex(idx)), DURATION);
      });
    });
  };

  // yönlere göre şerit içeriği
  const leftImg  = direction === "left" ? heroImages[idx] : heroImages[prevIndex(idx)];
  const rightImg = direction === "left" ? heroImages[nextIndex(idx)] : heroImages[idx];

  // hedef transform
  const transform =
    direction === "left"
      ? (isSliding ? "translateX(-50%)" : "translateX(0%)")
      : (isSliding ? "translateX(0%)" : "translateX(-50%)");

  return (
    <>
      {/* arka plan bandı */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 flex w-[200%] h-full ${noTrans ? "" : "ease-smooth"}`}
          style={{ transform, willChange: "transform" }}
        >
          {/* sol panel */}
          <div className="relative h-full w-1/2">
            <img
              src={leftImg}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover blur-sm"
              style={{ opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-white/12" />
          </div>
          {/* sağ panel */}
          <div className="relative h-full w-1/2">
            <img
              src={rightImg}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover blur-sm"
              style={{ opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-white/12" />
          </div>
        </div>

        {/* üst radial vurgusu */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/60 via-neutral-100/40 to-transparent pointer-events-none" />
      </div>

      {/* oklar */}
      <button
        onClick={handlePrev}
        aria-label={t("hero.prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white shadow border border-neutral-200 backdrop-blur flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={handleNext}
        aria-label={t("hero.next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white shadow border border-neutral-200 backdrop-blur flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

        {/* içerik */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid min-h-[85vh] content-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {t("hero.title")}
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <p className="mt-6 text-neutramt-6 text-neutral-700 font-semibold max-w-2xll-700 max-w-2xl">
              {t("hero.subtitle")}
            </p>
          </motion.div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#teklif" className="px-5 py-3 rounded-xl bg-neutral-800 text-white hover:bg-[var(--brand)]">
              {t("cta.quote")}
            </a>
            <Link
              href="/projeler"
              className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              {t("cta.projects")}
            </Link>
          </div>

          {/* özellikler şeridi (mevcut) */}
          <style>{`@keyframes featureScroll {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
          <div className="mt-10 overflow-hidden">
            <div className="flex gap-4 whitespace-nowrap animate-[featureScroll_30s_linear_infinite]">
              {marqueeItems.map((txt, idx) => (
                <span
                  key={`${txt}-${idx}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white/70 backdrop-blur text-sm text-neutral-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--brand)]" fill="none"><path d="M9 12.75 11.25 15 15 9.75" stroke="currentColor" strokeWidth="1.5" /></svg>
                  {txt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  })()}
</section>

      {/* About */}
      <section id="hakkimizda" className="pt-10 md:pt-14 pb-8 md:pb-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("about.title")}</h2>
          <p className="mt-4 whitespace-pre-line text-neutral-700 text-[15px] leading-7">
            {t("about.body")}
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <h3 className="font-medium text-lg">{t("about.vision.title")}</h3>
              <p className="mt-2 text-sm text-neutral-700">{t("about.vision.body")}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <h3 className="font-medium text-lg">{t("about.mission.title")}</h3>
              <p className="mt-2 text-sm text-neutral-700">{t("about.mission.body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projeler" className="pt-8 md:pt-10 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-[var(--brand)] pl-3">
            {t("projects.title")}
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projeler/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 hover:border-[var(--brand)] transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="teklif" className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("quote.title")}</h2>
          <p className="mt-2 text-neutral-300">{t("quote.subtitle")}</p>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}

function QuoteForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [feedback, setFeedback] = React.useState<{ ok: boolean; message: string } | null>(null);
  const t = useTranslations("home.quote");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/forms/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        const message =
          typeof j?.error === "string" && j.error.trim().length > 0
            ? j.error
            : t("alert_err");
        setFeedback({ ok: false, message });
        return;
      }

      form.reset();
      setFeedback({ ok: true, message: t("alert_ok") });
    } catch (error) {
      setFeedback({ ok: false, message: t("network_error") });
    } finally {
      setSubmitting(false);
    }
  };

  const renderLink = React.useCallback(
    (chunks: React.ReactNode, attrs: Record<string, unknown>) => (
      <a
        href={(attrs?.href as string) ?? "/aydinlatma-metni"}
        className={(attrs?.class as string) ?? "text-[var(--brand)] font-medium"}
        target={attrs?.target as string | undefined}
        rel={attrs?.rel as string | undefined}
      >
        {chunks}
      </a>
    ),
    []
  );

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {feedback && (
        <div
          className={`md:col-span-2 rounded-xl border px-4 py-3 text-sm ${
            feedback.ok
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-600"
          }`}
        >
          {feedback.message}
        </div>
      )}
            <input
              name="name"
              required
              className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
              placeholder={t("form.name")}
            />
            <input
              name="contact"
              required
              className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
              placeholder={t("form.contact")}
            />
            <input
              name="projectType"
              required
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
              placeholder={t("form.type")}
            />
            <textarea
              name="message"
              required
              rows={4}
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
              placeholder={t("form.message")}
            ></textarea>

            {/* Honeypot (gizli) */}
            <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Onaylar */}
            <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-200/90">
              <input type="checkbox" name="consentInfo" required className="w-4 h-4 accent-[var(--brand)]" />
              <span className="text-neutral-200">
                {t.rich("consent_apply_html", {
                  a: renderLink,
                  b: (chunks) => <b>{chunks}</b>,
                })}
              </span>
            </label>

            <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-200/90">
              <input type="checkbox" name="consentContact" required className="w-4 h-4 accent-[var(--brand)]" />
              <span className="text-neutral-200">{t("consent_contact")}</span>
            </label>

            <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-300">
              <input type="checkbox" name="consentMarketing" className="w-4 h-4 accent-[var(--brand)]" />
              <span>{t.rich("consent_marketing", { b: (chunks) => <b>{chunks}</b> })}</span>
            </label>

      <button
        className="md:col-span-2 px-5 py-3 rounded-xl bg-neutral-800 text-white font-medium hover:bg-[var(--brand)] disabled:cursor-not-allowed disabled:bg-neutral-500"
        type="submit"
        disabled={submitting}
      >
        {submitting ? t("submit_loading") : t("submit")}
      </button>
    </form>
  );
}
