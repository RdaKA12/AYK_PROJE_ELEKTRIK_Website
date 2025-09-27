import type { Metadata } from "next";
import Container from "@/components/Container";
import { services } from "@/data/services";
import { Wrench, Cable, Sun, Package, ListChecks, CircuitBoard } from "lucide-react";
import type { ReactElement } from "react";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const iconMap: Record<string, ReactElement> = {
  "proje-danismanlik-muhendislik": <ListChecks className="w-6 h-6 text-[var(--brand)]" />,
  "elektrik-elektronik-taahhut": <Cable className="w-6 h-6 text-[var(--brand)]" />,
  "elektrik-malzemesi-satisi": <Package className="w-6 h-6 text-[var(--brand)]" />,
  "zayif-akim-sistemleri": <CircuitBoard className="w-6 h-6 text-[var(--brand)]" />,
  "gunes-enerji-sistemleri": <Sun className="w-6 h-6 text-[var(--brand)]" />,
  "bakim-servis": <Wrench className="w-6 h-6 text-[var(--brand)]" />,
};

export default async function Page() {
  const t = await getTranslations("services");
  const cardMessages = t.raw("cards") as Record<
    string,
    { title: string; desc: string; bullets?: string[] }
  >;
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {t("title")}
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">{t("intro")}</p>

        {/* Hizmet kartları */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const content = cardMessages[s.slug] ?? {
              title: s.slug,
              desc: "",
            };
            return (
              <div
                key={s.slug}
                className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 hover:border-[var(--brand)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  {iconMap[s.slug] ?? <ListChecks className="w-6 h-6 text-[var(--brand)]" />}
                  <h3 className="font-medium text-lg">{content.title}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{content.desc}</p>
                {content.bullets && (
                  <ul className="mt-3 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                    {content.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {/* İleride detay sayfası açarsak Link'i aktif ederiz */}
                {/* <Link href={`/hizmetler/${s.slug}`} className="inline-block mt-4 text-sm font-medium hover:text-[var(--brand)]"> */}
                {/*   Detaylar → */}
                {/* </Link> */}
              </div>
            );
          })}
        </div>

        {/* SSS + CTA aynı bırakıldı */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h2 className="font-medium text-lg mb-2">{t("faq.title")}</h2>
            <div className="divide-y divide-neutral-200">
              {faqItems.map((item, index) => (
                <details key={index} className="py-3 group">
                  <summary className="cursor-pointer text-sm text-neutral-800 flex items-center justify-between">
                    {item.q}
                    <span className="ml-4 text-[var(--brand)]">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h2 className="font-medium text-lg">{t("cta.title")}</h2>
            <p className="mt-2 text-sm text-neutral-700">{t("cta.subtitle")}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-[var(--brand)] text-sm"
              >
                {t("cta.contact")}
              </Link>
              <a
                href="/#teklif"
                className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-[var(--brand)] hover:text-[var(--brand)] text-sm"
              >
                {t("cta.form")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
