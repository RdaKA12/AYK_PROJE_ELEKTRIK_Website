import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} {t("company_full")}. {t("rights")}
        </div>
        <div className="flex items-center gap-4">
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
    </footer>
  );
}
