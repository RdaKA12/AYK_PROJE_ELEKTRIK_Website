import Container from "@/components/Container";
import { services } from "@/data/services";
import { Wrench, Cable, Sun, Package, ListChecks, CircuitBoard } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Hizmetler | AYK Proje Elektrik",
  description:
    "Proje danışmanlık & mühendislik, elektrik elektronik taahhüt, elektrik malzemesi satışı, zayıf akım sistemleri, güneş enerji sistemleri ve bakım & servis.",
};

const iconMap: Record<string, JSX.Element> = {
  "proje-danismanlik-muhendislik": <ListChecks className="w-6 h-6 text-[var(--brand)]" />,
  "elektrik-elektronik-taahhut": <Cable className="w-6 h-6 text-[var(--brand)]" />,
  "elektrik-malzemesi-satisi": <Package className="w-6 h-6 text-[var(--brand)]" />,
  "zayif-akim-sistemleri": <CircuitBoard className="w-6 h-6 text-[var(--brand)]" />,
  "gunes-enerji-sistemleri": <Sun className="w-6 h-6 text-[var(--brand)]" />,
  "bakim-servis": <Wrench className="w-6 h-6 text-[var(--brand)]" />,
};

export default function Page() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          Hizmetler
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">
          Projenizin ihtiyaçlarına uygun, mühendislik odaklı hizmetler sunuyoruz. Aşağıda ana hizmet
          başlıklarımızı ve kapsamları görebilirsiniz.
        </p>

        {/* Hizmet kartları */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.slug}
              className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 hover:border-[var(--brand)] transition-colors"
            >
              <div className="flex items-center gap-3">
                {iconMap[s.slug] ?? <ListChecks className="w-6 h-6 text-[var(--brand)]" />}
                <h3 className="font-medium text-lg">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              {s.bullets && (
                <ul className="mt-3 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {/* İleride detay sayfası açarsak Link'i aktif ederiz */}
              {/* <Link href={`/hizmetler/${s.slug}`} className="inline-block mt-4 text-sm font-medium hover:text-[var(--brand)]">
                Detaylar →
              </Link> */}
            </div>
          ))}
        </div>

        {/* SSS + CTA aynı bırakıldı */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h2 className="font-medium text-lg mb-2">Sık Sorulan Sorular</h2>
            <div className="divide-y divide-neutral-200">
              <details className="py-3 group">
                <summary className="cursor-pointer text-sm text-neutral-800 flex items-center justify-between">
                  Keşif ve teklif süreciniz nasıl işliyor?
                  <span className="ml-4 text-[var(--brand)]">+</span>
                </summary>
                <p className="mt-2 text-sm text-neutral-700">
                  Ön görüşme sonrası 24–72 saat içinde saha keşfi planlanır. Teknik kapsam netleşince aynı gün içinde
                  özet teklif, 2–5 iş günü içinde detaylı teknik–mali teklif paylaşılır.
                </p>
              </details>
              <details className="py-3 group">
                <summary className="cursor-pointer text-sm text-neutral-800 flex items-center justify-between">
                  GES projelerinde ortalama süre nedir?
                  <span className="ml-4 text-[var(--brand)]">+</span>
                </summary>
                <p className="mt-2 text-sm text-neutral-700">
                  Çatı veya arazi ölçeğine göre 25–60 gün arasında değişir. Keşif, projelendirme, onaylar, kurulum ve
                  devreye alma aşamalarını kapsar.
                </p>
              </details>
              <details className="py-3 group">
                <summary className="cursor-pointer text-sm text-neutral-800 flex items-center justify-between">
                  Bakım ve garanti kapsamında neler var?
                  <span className="ml-4 text-[var(--brand)]">+</span>
                </summary>
                <p className="mt-2 text-sm text-neutral-700">
                  İşçilik garantisi ve üretici garanti koşulları geçerlidir. Periyodik bakım sözleşmesi ile performans
                  izleme, termal kontrol ve raporlama sağlanır.
                </p>
              </details>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h2 className="font-medium text-lg">Projeniz için hızlı teklif</h2>
            <p className="mt-2 text-sm text-neutral-700">Temel bilgileri iletin; aynı gün içinde size dönüş yapalım.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-[var(--brand)] text-sm"
              >
                İletişime Geç
              </Link>
              <a
                href="/#teklif"
                className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-[var(--brand)] hover:text-[var(--brand)] text-sm"
              >
                Formu Doldur
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
