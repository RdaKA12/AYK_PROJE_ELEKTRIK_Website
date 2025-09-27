import Link from "next/link";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} {t("company_full")}. {t("rights")}
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-5">
          <LanguageSwitcher className="justify-center" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/kvkk" className="hover:text-[var(--brand)]">
              {t("links.kvkk")}
            </Link>
            <Link href="/aydinlatma-metni" className="hover:text-[var(--brand)]">
              {t("links.privacy")}
            </Link>
            <Link href="/iletisim" className="hover:text-[var(--brand)]">
              {t("links.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
