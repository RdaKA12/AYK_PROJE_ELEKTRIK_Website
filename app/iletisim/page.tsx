import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page() {
  const t = await getTranslations({ namespace: "contact" });
  const socialLinks = t.raw("social.links") as Record<string, string>;
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {t("title")}
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">{t("intro")}</p>

        {/* İçerik */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sol taraf – bilgiler */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <h3 className="font-medium text-lg mb-3">{t("contact_info.title")}</h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--brand)]" />
                  <a href="mailto:info@aykproje.com.tr" className="hover:text-[var(--brand)]">
                    info@aykproje.com.tr
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--brand)]" />
                  {t("contact_info.address")}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <h3 className="font-medium text-lg mb-3">{t("social.title")}</h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[var(--brand)]" />
                  <a
                    href="https://www.linkedin.com/company/ayk-proje-elektirk/"
                    target="_blank"
                    className="hover:text-[var(--brand)]"
                  >
                    {socialLinks.linkedin}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[var(--brand)]" />
                  <a
                    href="https://www.instagram.com/aykprojeelektrik?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="hover:text-[var(--brand)]"
                  >
                    {socialLinks.instagram}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-[var(--brand)]" />
                  <a
                    href="https://www.facebook.com/profile.php?id=100063706892810&sk=about&locale=tr_TR"
                    target="_blank"
                    className="hover:text-[var(--brand)]"
                  >
                    {socialLinks.facebook}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 overflow-hidden h-56 bg-neutral-100">
              {/* Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.271294223736!2d30.7050879!3d36.90777739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f654bb9530b%3A0x3abcb63d1ff39472!2sAYK%20Proje%20Elektrik!5e0!3m2!1str!2str!4v1757588364677!5m2!1str!2str" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Sağ taraf – form */}
          <div>
            <h3 className="font-medium text-lg mb-3">{t("form.title")}</h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
