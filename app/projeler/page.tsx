import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";
import { projectsWithPhotos } from "@/data/projects";
import { references } from "@/data/references";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

function splitCategoryYear(cat: string): { cat: string; year: string } {
  // Sonda 4 haneli yıl veya yıl aralığı (YYYY-YYYY) yakala
  const m = cat.match(/(\d{4}(?:-\d{4})?)\s*$/);
  const year = m?.[1] ?? "-";
  const catOnly = m ? cat.replace(m[0], "").trim() : cat;
  return { cat: catOnly, year };
}

export default async function Page() {
  const t = await getTranslations("projects");
  const cardMessages = t.raw("items") as Record<string, { title: string; desc: string }>;
  return (
    <section className="py-10 md:py-14">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {t("title")}
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">{t("intro")}</p>

        {/* Fotoğraflı projeler */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projectsWithPhotos.map((p) => {
            const content = cardMessages[p.slug] ?? { title: p.slug, desc: "" };
            return (
              <Link
                key={p.slug}
                href={`/projeler/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 hover:border-[var(--brand)] transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={content.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{content.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{content.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Referans tablosu */}
        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="font-medium text-lg">{t("references.title")}</h2>
            <p className="text-sm text-neutral-600 mt-1">{t("references.subtitle")}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-700">
                <tr className="[&>th]:px-3 md:[&>th]:px-6 [&>th]:py-2 md:[&>th]:py-3 border-b border-neutral-200">
                  <th>{t("table.no")}</th>
                  <th>{t("table.project")}</th>
                  <th>{t("table.category")}</th>
                  <th>{t("table.year")}</th>
                </tr>
              </thead>
              <tbody className="text-neutral-800">
                {references.map((r) => {
                  const { cat, year } = splitCategoryYear(r.category);
                  return (
                    <tr key={r.no} className="odd:bg-white even:bg-neutral-50 border-b border-neutral-100">
                      <td className="px-3 md:px-6 py-2 md:py-3">{r.no}</td>
                      <td className="px-3 md:px-6 py-2 md:py-3">{r.title}</td>
                      <td className="px-3 md:px-6 py-2 md:py-3">{cat}</td>
                      <td className="px-3 md:px-6 py-2 md:py-3 whitespace-nowrap">{year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/iletisim"
            className="px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-[var(--brand)] text-sm"
          >
            {t("cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
