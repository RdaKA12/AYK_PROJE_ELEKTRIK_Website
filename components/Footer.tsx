import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} AYK Proje Mühendislik Elektrik San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/kvkk" className="hover:text-[var(--brand)]">KVKK</Link>
          <Link href="/aydinlatma-metni" className="hover:text-[var(--brand)]">Aydınlatma Metni</Link>
          <Link href="/iletisim" className="hover:text-[var(--brand)]">İletişim</Link>
        </div>
      </div>
    </footer>
  );
}
