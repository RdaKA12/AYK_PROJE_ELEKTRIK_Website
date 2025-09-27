import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";
import { Target, Handshake, ShieldCheck, Leaf } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page() {
  const t = await getTranslations("about");
  const statsMessages = t.raw("stats") as Record<string, string>;
  const whyItems = t.raw("why.items") as string[];
  const valuesItems = t.raw("values.items") as string[];
  const stats = [
    { n: "2018", label: statsMessages.founded },
    { n: "25+", label: statsMessages.engineering_years },
    { n: "50+", label: statsMessages.completed_projects },
    { n: "%100", label: statsMessages.csat_goal },
  ];

  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık — diğer sayfalarla aynı stil */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {t("title")}
        </h1>

        {/* Şirket özeti (metne dokunmadan) */}
        <p className="mt-4 text-neutral-700 text-[15px] leading-7 whitespace-pre-line">
          {t("summary")}
        </p>

        {/* Öne çıkanlar — ikonsuz, sade kartlar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white/90 p-5 text-center shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-tight">
                {it.n}
              </div>
              <div className="mt-1 text-sm text-neutral-600">{it.label}</div>
            </div>
          ))}
        </div>

        {/* Vizyon / Misyon — ikonlu başlık şeritleri */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
            <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
              <Target className="h-5 w-5 text-[var(--brand)]" />
              <h3 className="font-medium text-lg">{t("vision.title")}</h3>
            </div>
            <p className="px-6 pb-6 pt-4 text-sm text-neutral-700 whitespace-pre-line">
              {t("vision.body")}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
            <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
              <Handshake className="h-5 w-5 text-[var(--brand)]" />
              <h3 className="font-medium text-lg">{t("mission.title")}</h3>
            </div>
            <p className="px-6 pb-6 pt-4 text-sm text-neutral-700 whitespace-pre-line">
              {t("mission.body")}
            </p>
          </div>
        </div>

        {/* Neden AYK Proje Elektrik? */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
            <ShieldCheck className="h-5 w-5 text-[var(--brand)]" />
            <h3 className="font-medium text-lg">{t("why.title")}</h3>
          </div>
          <ul className="px-6 pb-6 pt-4 text-sm text-neutral-700 grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6">
            {whyItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Değerlerimiz */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
            <Leaf className="h-5 w-5 text-[var(--brand)]" />
            <h3 className="font-medium text-lg">{t("values.title")}</h3>
          </div>
          <ul className="px-6 pb-6 pt-4 text-sm text-neutral-700 grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6">
            {valuesItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/projeler"
            className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-[var(--brand)] hover:text-[var(--brand)] text-sm"
          >
            {t("cta.projects")}
          </Link>
          <Link
            href="/iletisim"
            className="px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-[var(--brand)] text-sm"
          >
            {t("cta.contact")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
