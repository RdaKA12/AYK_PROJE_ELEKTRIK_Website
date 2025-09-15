import Container from "@/components/Container";
import Link from "next/link";
import { Target, Handshake, ShieldCheck, Leaf } from "lucide-react";

export const metadata = {
  title: "Hakkımızda | AYK Proje Elektrik",
  description:
    "AYK Proje Elektrik’in vizyonu, misyonu, değerleri ve öne çıkan yönleri. 2018’den beri; 25+ yıllık mühendislik tecrübesiyle elektrik taahhüt, kompanzasyon, otomasyon ve GES projeleri.",
};

export default function Page() {
  return (
    <section className="py-10 md:py-14"> 
      <Container>
        {/* Başlık — diğer sayfalarla aynı stil */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          Hakkımızda
        </h1>

        {/* Şirket özeti (metne dokunmadan) */}
        <p className="mt-4 text-neutral-700 text-[15px] leading-7 whitespace-pre-line">
{`AYK Proje Elektrik Ltd. Şti., elektrik mühendisliği alanında yenilikçi ve müşteri odaklı hizmetler sunan bir firmadır. Kuruluşumuzdan bu yana, modern teknolojileri ve deneyimli ekibimizin uzmanlığını bir araya getirerek müşterilerimize en uygun ve verimli çözümleri sunmayı hedefliyoruz. Hizmet yelpazemiz geniş olup, her ölçekteki projeye değer katmayı amaçlıyoruz. Elektrik altyapı tasarımı ve uygulamasından otomasyon sistemleri ve enerji verimliliği projelerine kadar birçok alanda faaliyet gösteriyoruz. Ayrıca (OG) Orta Gerilim ve (AG) Alçak Gerilim sistemlerinde dağıtım, kumanda, kompanzasyon panolarının tasarım ve üretimini gerçekleştiriyoruz. Sektörün önde gelen markalarıyla iş birliği yaparak, perakende ve toptan elektrik malzemesi satışında müşterilerimize kaliteli ürünler sunuyoruz. Teknolojiyi yakından takip ediyor ve müşteri memnuniyetini ön planda tutarak projelerimizi zamanında ve eksiksiz teslim etmeye özen gösteriyoruz. Deneyimli mühendislerimiz, teknisyenlerimiz ve teknik ekibimizle malzeme seçimi, projelendirme, saha keşfi ve montaj konularında ihtiyaç duyduğunuz tüm hizmetleri sağlıyoruz. Hizmet ağımızı sürekli genişleterek sektördeki konumumuzu güçlendirmeyi amaçlıyoruz.`}
        </p>

        {/* Öne çıkanlar — ikonsuz, sade kartlar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "2018", t: "Kuruluş Yılı" },
            { n: "25+", t: "Yıl Mühendislik Deneyimi" },
            { n: "50+", t: "Tamamlanan Proje" },
            { n: "%100", t: "Müşteri Memnuniyeti Hedefi" },
          ].map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white/90 p-5 text-center shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-tight">
                {it.n}
              </div>
              <div className="mt-1 text-sm text-neutral-600">{it.t}</div>
            </div>
          ))}
        </div>

        {/* Vizyon / Misyon — ikonlu başlık şeritleri */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
            <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
              <Target className="h-5 w-5 text-[var(--brand)]" />
              <h3 className="font-medium text-lg">Vizyonumuz</h3>
            </div>
            <p className="px-6 pb-6 pt-4 text-sm text-neutral-700 whitespace-pre-line">
{`Vizyonumuz; sektörde inovasyon, kalite ve güvenilirlik ile anılan ulusal ve uluslararası projelerde tercih edilen lider firma olmaktır. Teknolojik gelişmeleri yakından takip ederek ve deneyimli ekibimizin uzmanlığını kullanarak müşteri memnuniyetini en üst düzeye çıkarmayı, sektöre yön veren sürdürülebilir çözümler sunmayı ve sektördeki standartları yükseltmeyi amaçlıyoruz.`}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
            <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
              <Handshake className="h-5 w-5 text-[var(--brand)]" />
              <h3 className="font-medium text-lg">Misyonumuz</h3>
            </div>
            <p className="px-6 pb-6 pt-4 text-sm text-neutral-700 whitespace-pre-line">
{`AYK Proje Elektrik olarak misyonumuz, müşterilerimizin ihtiyaçlarını tam olarak karşılayan yenilikçi, verimli ve yüksek kaliteli mühendislik çözümleri sunmaktır. Modern teknolojileri ve deneyimli ekibimizin uzmanlığını birleştirerek, her ölçekteki projeye değer katmayı ve sektörün gelişimine katkıda bulunmayı amaçlıyoruz. Profesyonellik, güvenilirlik ve müşteri odaklı yaklaşımımızla hizmetlerimizi sunarken, projelerimizi zamanında ve eksiksiz teslim etmeye özen gösteriyor; en yüksek kalite standartlarını korumayı taahhüt ediyoruz.`}
            </p>
          </div>
        </div>

        {/* Neden AYK Proje Elektrik? */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
            <ShieldCheck className="h-5 w-5 text-[var(--brand)]" />
            <h3 className="font-medium text-lg">Neden AYK Proje Elektrik?</h3>
          </div>
          <ul className="px-6 pb-6 pt-4 text-sm text-neutral-700 grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6">
            <li>25+ yıllık mühendislik deneyimi, 2018’den bu yana kurumsal yapılanma</li>
            <li>AG/OG altyapıdan GES projelerine kadar geniş hizmet yelpazesi</li>
            <li>Marka garantili elektrik malzemesi satışı ve şeffaf maliyet yönetimi</li>
            <li>Proje yönetiminde disiplin, zamanında teslim ve sürdürülebilir çözümler</li>
            <li>Bakım, izleme ve raporlama ile uzun vadeli müşteri desteği</li>
          </ul>
        </div>

        {/* Değerlerimiz */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/90 shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-3">
            <Leaf className="h-5 w-5 text-[var(--brand)]" />
            <h3 className="font-medium text-lg">Değerlerimiz</h3>
          </div>
          <ul className="px-6 pb-6 pt-4 text-sm text-neutral-700 grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6">
            <li>Güvenilirlik ve şeffaflık</li>
            <li>Teknik doğruluk ve kalite</li>
            <li>Müşteri memnuniyeti odaklılık</li>
            <li>İş güvenliği ve mevzuata uyum</li>
            <li>Sürdürülebilirlik ve verimlilik</li>
            <li>Sürekli gelişim ve yenilikçilik</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/projeler"
            className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-[var(--brand)] hover:text-[var(--brand)] text-sm"
          >
            Projelerimizi İnceleyin
          </Link>
          <Link
            href="/iletisim"
            className="px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-[var(--brand)] text-sm"
          >
            İletişime Geçin
          </Link>
        </div>
      </Container>
    </section>
  );
}
