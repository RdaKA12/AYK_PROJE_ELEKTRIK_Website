"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ASSET_BASE = "/assets";

const projects = [
  { title: "Antalya Side Athena Tapınağı", desc: "Tarihi eserde elektrik altyapısı ve aydınlatma uygulamaları", img: `${ASSET_BASE}/side_athena/cover.webp` },
  { title: "Antalya Konyaaltı Sahili", desc: "Sahil bandı aydınlatma ve enerji altyapısı", img: `${ASSET_BASE}/konyaalti_sahili/cover.webp` },
  { title: "Antalya Hava Meydan Komutanlığı", desc: "Askeri tesis elektrik taahhüt ve modernizasyon çalışmaları", img: `${ASSET_BASE}/antalya_hava_meydan/cover.webp` },
  { title: "Antalya Lider Tohum", desc: "25kW sera üstü çatı GES projesi", img: `${ASSET_BASE}/lider_tohum_ges/cover.webp` },
  { title: "Ela Excellence Resort Hotel", desc: "Konaklama tesisinde elektrik uygulamaları", img: `${ASSET_BASE}/ela_otel/cover.webp` },
  { title: "Gaziantep Kayna Sabun ve Pekmez Müzesi", desc: "Tarihi yapıda aydınlatma ve elektrik çözümleri", img: `${ASSET_BASE}/gaziantep_sabunhan/cover.webp` },
  
];

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <style>{`:root{--brand:#D9251C;--brand-dark:#B01E16;--ink:#111111;--paper:#FAFAFA;--muted:#6B7280}`}</style>

      {/* Hero – 10s bekle, sola kaydır; reset anında transition kapalı */}
<section className="relative overflow-hidden min-h-[85vh]" id="anasayfa">
  <style>{`
    .ease-smooth { transition: transform 450ms cubic-bezier(.4,0,.2,1); }
  `}</style>

  {(() => {
  const heroImages = [
    `${ASSET_BASE}/side_athena/cover2.webp`,
    `${ASSET_BASE}/konyaalti_sahili/cover.webp`,
    `${ASSET_BASE}/antalya_hava_meydan/cover.webp`,
    `${ASSET_BASE}/lider_tohum_ges/cover.webp`,
    `${ASSET_BASE}/hidirlik_kulesi/cover.webp`,
    `${ASSET_BASE}/side_antik_hamam/cover.webp`,
  ];

  const DURATION = 450;

  const [idx, setIdx] = React.useState(0);
  const [isSliding, setIsSliding] = React.useState(false);
  const [noTrans, setNoTrans] = React.useState(false);
  const [direction, setDirection] = React.useState<"left" | "right">("left");

  const nextIndex = (i: number) => (i + 1) % heroImages.length;
  const prevIndex = (i: number) => (i - 1 + heroImages.length) % heroImages.length;

  // preload
  React.useEffect(() => {
    heroImages.forEach(src => { const im = new Image(); im.src = src; });
  }, []);

  // 15 sn bekle → ileri
  React.useEffect(() => {
    if (isSliding) return;
    const t = setTimeout(() => handleNext(), 15000);
    return () => clearTimeout(t);
  }, [idx, isSliding]);

  const instantReset = (toIndex: number) => {
    setNoTrans(true);
    setIdx(toIndex);
    setIsSliding(false);
    setDirection("left"); // dinlenme hâlinde şerit 0 konumunda
    requestAnimationFrame(() => requestAnimationFrame(() => setNoTrans(false)));
  };

  const handleNext = () => {
    if (isSliding) return;
    setDirection("left");
    setIsSliding(true);                         // 0 → -50%
    setTimeout(() => instantReset(nextIndex(idx)), DURATION);
  };

  const handlePrev = () => {
    if (isSliding) return;
    // önce bandı -50%'ye anında konumla (current sağda görünsün)
    setDirection("right");
    setNoTrans(true);
    setIsSliding(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNoTrans(false);
        setIsSliding(true);                    // -50% → 0
        setTimeout(() => instantReset(prevIndex(idx)), DURATION);
      });
    });
  };

  // yönlere göre şerit içeriği
  const leftImg  = direction === "left" ? heroImages[idx] : heroImages[prevIndex(idx)];
  const rightImg = direction === "left" ? heroImages[nextIndex(idx)] : heroImages[idx];

  // hedef transform
  const transform =
    direction === "left"
      ? (isSliding ? "translateX(-50%)" : "translateX(0%)")
      : (isSliding ? "translateX(0%)" : "translateX(-50%)");

  return (
    <>
      {/* arka plan bandı */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 flex w-[200%] h-full ${noTrans ? "" : "ease-smooth"}`}
          style={{ transform, willChange: "transform" }}
        >
          {/* sol panel */}
          <div className="relative h-full w-1/2">
            <img
              src={leftImg}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover blur-sm"
              style={{ opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-white/12" />
          </div>
          {/* sağ panel */}
          <div className="relative h-full w-1/2">
            <img
              src={rightImg}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover blur-sm"
              style={{ opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-white/12" />
          </div>
        </div>

        {/* üst radial vurgusu */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/60 via-neutral-100/40 to-transparent pointer-events-none" />
      </div>

      {/* oklar */}
      <button
        onClick={handlePrev}
        aria-label="Önceki"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white shadow border border-neutral-200 backdrop-blur flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={handleNext}
        aria-label="Sonraki"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white shadow border border-neutral-200 backdrop-blur flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

        {/* içerik */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid min-h-[85vh] content-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Güvenilir mühendislik, sürdürülebilir enerji, kalıcı değer.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-neutramt-6 text-neutral-700 font-semibold max-w-2xll-700 max-w-2xl">
            Elektrikte 25+ yıllık deneyim, güçlü mühendislik ve anahtar teslim projeler.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#teklif" className="px-5 py-3 rounded-xl bg-neutral-800 text-white hover:bg-[var(--brand)]">Hızlı Teklif Al</a>
            <a href="#projeler" className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-[var(--brand)] hover:text-[var(--brand)]">Projeler</a>
          </div>

          {/* özellikler şeridi (mevcut) */}
          <style>{`@keyframes featureScroll {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
          <div className="mt-10 overflow-hidden">
            <div className="flex gap-4 whitespace-nowrap animate-[featureScroll_30s_linear_infinite]">
              {[
                "30+ yıl deneyim",
                "50+ büyük ölçekli proje",
                "Ulusal & uluslararası referanslar",
                "Zamanında teslim ve servis",
                "GES ve elektrik taahhütte uzman ekip",
                "Etkili ve uygun fiyat politikası",
                "Yüksek kalite standartları",
                "Kapsamlı çözüm ortaklığı",
                "30+ yıl deneyim",
                "50+ büyük ölçekli proje",
                "Ulusal & uluslararası referanslar",
                "Zamanında teslim ve servis",
                "GES ve elektrik taahhütte uzman ekip",
                "Etkili ve uygun fiyat politikası",
                "Yüksek kalite standartları",
                "Kapsamlı çözüm ortaklığı",
                "30+ yıl deneyim",
                "50+ büyük ölçekli proje",
                "Ulusal & uluslararası referanslar",
                "Zamanında teslim ve servis",
                "GES ve elektrik taahhütte uzman ekip",
                "Etkili ve uygun fiyat politikası",
                "Yüksek kalite standartları",
                "Kapsamlı çözüm ortaklığı",
                "30+ yıl deneyim",
                "50+ büyük ölçekli proje",
                "Ulusal & uluslararası referanslar",
                "Zamanında teslim ve servis",
                "GES ve elektrik taahhütte uzman ekip",
                "Etkili ve uygun fiyat politikası",
                "Yüksek kalite standartları",
                "Kapsamlı çözüm ortaklığı",
              ].map((txt, idx) => (
                <span key={idx} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white/70 backdrop-blur text-sm text-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--brand)]" fill="none"><path d="M9 12.75 11.25 15 15 9.75" stroke="currentColor" strokeWidth="1.5" /></svg>
                  {txt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  })()}
</section>

      {/* About */}
      <section id="hakkimizda" className="pt-10 md:pt-14 pb-8 md:pb-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Hakkımızda</h2>
          <p className="mt-4 whitespace-pre-line text-neutral-700 text-[15px] leading-7">
AYK Proje Elektrik Ltd. Şti., elektrik mühendisliği alanında yenilikçi ve müşteri odaklı hizmetler sunan bir firmadır. Kuruluşumuzdan bu yana, modern teknolojileri ve deneyimli ekibimizin uzmanlığını bir araya getirerek müşterilerimize en uygun ve verimli çözümleri sunmayı hedefliyoruz.

Hizmet yelpazemiz geniş olup, her ölçekteki projeye değer katmayı amaçlıyoruz. Elektrik altyapı tasarımı ve uygulamasından otomasyon sistemleri ve enerji verimliliği projelerine kadar birçok alanda faaliyet gösteriyoruz. Ayrıca (OG) Orta Gerilim ve (AG) Alçak Gerilim sistemlerinde dağıtım, kumanda, kompanzasyon panolarının tasarım ve üretimini gerçekleştiriyoruz.

Sektörün önde gelen markalarıyla iş birliği yaparak, perakende ve toptan elektrik malzemesi satışında müşterilerimize kaliteli ürünler sunuyoruz. Teknolojiyi yakından takip ediyor ve müşteri memnuniyetini ön planda tutarak projelerimizi zamanında ve eksiksiz teslim etmeye özen gösteriyoruz.

Deneyimli mühendislerimiz, teknisyenlerimiz ve teknik ekibimizle malzeme seçimi, projelendirme, saha keşfi ve montaj konularında ihtiyaç duyduğunuz tüm hizmetleri sağlıyoruz. Hizmet ağımızı sürekli genişleterek sektördeki konumumuzu güçlendirmeyi amaçlıyoruz.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <h3 className="font-medium text-lg">Vizyonumuz</h3>
              <p className="mt-2 text-sm text-neutral-700">Vizyonumuz; sektörde inovasyon, kalite ve güvenilirlik ile anılan ulusal ve uluslararası projelerde tercih edilen lider firma olmaktır. Teknolojik gelişmeleri yakından takip ederek ve deneyimli ekibimizin uzmanlığını kullanarak müşteri memnuniyetini en üst düzeye çıkarmayı, sektöre yön veren sürdürülebilir çözümler sunmayı ve sektördeki standartları yükseltmeyi amaçlıyoruz.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <h3 className="font-medium text-lg">Misyonumuz</h3>
              <p className="mt-2 text-sm text-neutral-700">AYK Proje Elektrik olarak misyonumuz, müşterilerimizin ihtiyaçlarını tam olarak karşılayan yenilikçi, verimli ve yüksek kaliteli mühendislik çözümleri sunmaktır. Modern teknolojileri ve deneyimli ekibimizin uzmanlığını birleştirerek, her ölçekteki projeye değer katmayı ve sektörün gelişimine katkıda bulunmayı amaçlıyoruz. Profesyonellik, güvenilirlik ve müşteri odaklı yaklaşımımızla hizmetlerimizi sunarken, projelerimizi zamanında ve eksiksiz teslim etmeye özen gösteriyor; en yüksek kalite standartlarını korumayı taahhüt ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projeler" className="pt-8 md:pt-10 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-[var(--brand)] pl-3">Seçili Projeler</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 hover:border-[var(--brand)] transition-colors">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="teklif" className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Projeniz için hızlı bir keşif ve fiyat teklifi alın</h2>
          <p className="mt-2 text-neutral-300">Temel bilgileri bırakın; aynı gün dönüş yapalım.</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const payload = Object.fromEntries(fd.entries());
              const res = await fetch("/api/forms/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
              if (res.ok) { alert("Talebiniz alındı. En kısa sürede dönüş yapacağız."); (e.currentTarget as HTMLFormElement).reset(); }
              else { const j = await res.json().catch(() => ({})); alert(j.error || "Bir hata oluştu."); }
            }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input name="name" required className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="Ad Soyad *" />
            <input name="contact" required className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="E-posta / Telefon *" />
            <input name="projectType" required className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="Proje türü (Malzeme Alımı, Taahhüt, GES, Bakım...) *" />
            <textarea name="message" required rows={4} className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="Kısa açıklama *"></textarea>

            {/* Honeypot (gizli) */}
            <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Onaylar */}
            <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-200/90">
              <input type="checkbox" name="consentInfo" required className="w-4 h-4 accent-[var(--brand)]" />
              <span className="text-neutral-200">
                <a href="/aydinlatma-metni" target="_blank" className="text-[var(--brand)] font-medium">Aydınlatma Metni</a>’ni okudum; başvurumun değerlendirilmesi amacıyla kişisel verilerimin işlenmesine <b>onay veriyorum</b>.
              </span>
            </label>

            <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-200/90">
              <input type="checkbox" name="consentContact" required className="w-4 h-4 accent-[var(--brand)]" />
              <span className="text-neutral-200">
                Projem hakkında <b>tarafımla iletişime geçilmesine</b> onay veriyorum.
              </span>
            </label>

            <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-300">
              <input type="checkbox" name="consentMarketing" className="w-4 h-4 accent-[var(--brand)]" />
              <span>Pazarlama/bilgilendirme amaçlı iletişim için <b>açık rıza</b> veriyorum. (İsteğe bağlı)</span>
            </label>

            <button className="md:col-span-2 px-5 py-3 rounded-xl bg-neutral-800 text-white font-medium hover:bg-[var(--brand)]" type="submit">
              Teklif Talep Et
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
