import type { Metadata } from "next";
import Container from "@/components/Container";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page() {
  const t = await getTranslations({ namespace: "privacy" });
  const purposes = t.raw("sections.purposes.items") as string[];
  const footerText = `${t("footer.text")} `;
  const footerLink = t("footer.link");
  const introText = `${t("intro")} `;
  const kvkkLinkText = t("kvkk_link_text");
  const controllerBody = `${t("sections.controller.body")} `;
  const controllerLink = t("sections.controller.link");
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {t("title")}
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">
          {introText}
          <a href="/kvkk" className="text-[var(--brand)] font-medium">{kvkkLinkText}</a>
          .
        </p>

        {/* Kartlar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.controller.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">
              {controllerBody}
              <a href="/iletisim" className="text-[var(--brand)] font-medium">{controllerLink}</a>
              .
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.collection.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.collection.body")}</p>
          </div>

          {/* 3 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.purposes.title")}</h3>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5 space-y-1">
              {purposes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 4 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.legal.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.legal.body")}</p>
          </div>

          {/* 5 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.transfer.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.transfer.body")}</p>
          </div>

          {/* 6 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.retention.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.retention.body")}</p>
          </div>

          {/* 7 - geniş kart */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 md:col-span-2">
            <h3 className="font-medium text-lg">{t("sections.rights.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.rights.body")}</p>
          </div>

          {/* 8 - geniş kart */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 md:col-span-2">
            <h3 className="font-medium text-lg">{t("sections.application.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.application.body")}</p>
          </div>
        </div>

        {/* Alt bilgi */}
        <p className="mt-8 text-neutral-600 text-sm">
          {footerText}
          <a href="/iletisim" className="text-[var(--brand)] font-medium">{footerLink}</a>
          .
        </p>
      </Container>
    </section>
  );
}
