import type { Metadata } from "next";
import Container from "@/components/Container";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "kvkk" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page() {
  const t = await getTranslations({ namespace: "kvkk" });
  const rights = t.raw("sections.rights.items") as string[];
  const controllerBody = `${t("sections.controller.body")} `;
  const controllerLink = t("sections.controller.link");
  const footerText = `${t("footer.text")} `;
  const footerLink = t("footer.link");
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {t("title")}
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">{t("intro")}</p>

        {/* Kartlar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.controller.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">
              {controllerBody}
              <a href="/iletisim" className="text-[var(--brand)] font-medium ml-1">
                {controllerLink}
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.purposes.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.purposes.body")}</p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.transfer.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.transfer.body")}</p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">{t("sections.retention.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">{t("sections.retention.body")}</p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 md:col-span-2">
            <h3 className="font-medium text-lg">{t("sections.rights.title")}</h3>
            <p className="mt-2 text-sm text-neutral-700">
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {rights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>

        {/* Alt bilgi */}
        <p className="mt-8 text-neutral-600 text-sm">
          {footerText}
          <a href="/iletisim" className="text-[var(--brand)] font-medium ml-1">
            {footerLink}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
