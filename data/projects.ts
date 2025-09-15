// Fotoğraflı projeler (11 adet)
// Not: Kapak görselleri mevcut ana sayfadaki dosyaları kullanıyor.
// Galeri görsellerini /public/assets/<slug>/ klasörüne koy (01.webp, 02.webp ...)

export type Project = {
  slug: string;
  title: string;
  desc: string;
  cover: string;      // kapak görseli (ana sayfa formatıyla uyumlu)
  gallery?: string[]; // detay sayfasındaki görseller (/assets/<slug>/...)
};

const ASSET_BASE = "/assets";

export const projectsWithPhotos: Project[] = [
  {
    slug: "side_athena",
    title: "Antalya Side Athena Tapınağı",
    desc: "Tarihi eserde elektrik altyapısı ve aydınlatma uygulamaları",
    cover: `${ASSET_BASE}/side_athena/cover.webp`,
    gallery: [
      `${ASSET_BASE}/side_athena/01.webp`,
      `${ASSET_BASE}/side_athena/02.webp`,
      `${ASSET_BASE}/side_athena/03.webp`,
      `${ASSET_BASE}/side_athena/cover2.webp`,
    ],
  },
  {
    slug: "konyaalti_sahili",
    title: "Antalya Konyaaltı Sahili",
    desc: "Sahil bandı aydınlatma ve enerji altyapısı",
    cover: `${ASSET_BASE}/konyaalti_sahili/cover.webp`,
    gallery: [
      `${ASSET_BASE}/konyaalti_sahili/01.webp`,
      `${ASSET_BASE}/konyaalti_sahili/02.webp`,
      `${ASSET_BASE}/konyaalti_sahili/03.webp`,
      `${ASSET_BASE}/konyaalti_sahili/04.webp`,
    ],
  },
  {
    slug: "antalya_hava_meydan",
    title: "Antalya Hava Meydan Komutanlığı",
    desc: "Askeri tesis elektrik taahhüt ve modernizasyon çalışmaları",
    cover: `${ASSET_BASE}/antalya_hava_meydan/cover.webp`,
    gallery: [
      `${ASSET_BASE}/antalya_hava_meydan/01.webp`,
      `${ASSET_BASE}/antalya_hava_meydan/02.webp`,
      `${ASSET_BASE}/antalya_hava_meydan/03.webp`,
      `${ASSET_BASE}/antalya_hava_meydan/04.webp`,
      `${ASSET_BASE}/antalya_hava_meydan/05.webp`,
    ],
  },
  {
    slug: "lider_tohum_ges",
    title: "Antalya Lider Tohum",
    desc: "25kW sera üstü çatı GES projesi",
    cover: `${ASSET_BASE}/lider_tohum_ges/cover.webp`,
    gallery: [
      `${ASSET_BASE}/lider_tohum_ges/01.webp`,
      `${ASSET_BASE}/lider_tohum_ges/02.webp`,
      `${ASSET_BASE}/lider_tohum_ges/03.webp`,
    ],
  },
  {
    slug: "ela_excellence",
    title: "Ela Excellence Resort Hotel",
    desc: "Konaklama tesisinde elektrik uygulamaları",
    cover: `${ASSET_BASE}/ela_otel/cover.webp`,
    gallery: [
      `${ASSET_BASE}/ela_otel/01.webp`,
      `${ASSET_BASE}/ela_otel/02.webp`,
      `${ASSET_BASE}/ela_otel/03.webp`,
      `${ASSET_BASE}/ela_otel/04.webp`,
      `${ASSET_BASE}/ela_otel/05.webp`,
    ],
  },
   {
    slug: "hidirlik_kulesi",
    title: "Antalya Hıdırlık Kulesi",
    desc: "Renovasyon projesi aydınlatma & elektrik",
    cover: `${ASSET_BASE}/hidirlik_kulesi/cover.webp`,
    gallery: [
      `${ASSET_BASE}/hidirlik_kulesi/01.webp`,
      `${ASSET_BASE}/hidirlik_kulesi/02.webp`,
      `${ASSET_BASE}/hidirlik_kulesi/03.webp`,
      `${ASSET_BASE}/hidirlik_kulesi/04.webp`,
    ],
  },
  {
    slug: "gaziantep_sabunhan",
    title: "Gaziantep Kayna Sabun ve Pekmez Müzesi",
    desc: "Tarihi yapıda aydınlatma ve elektrik çözümleri",
    cover: `${ASSET_BASE}/gaziantep_sabunhan/cover.webp`,
    gallery: [
      `${ASSET_BASE}/gaziantep_sabunhan/01.webp`,
      `${ASSET_BASE}/gaziantep_sabunhan/02.webp`,
      `${ASSET_BASE}/gaziantep_sabunhan/03.webp`,
      `${ASSET_BASE}/gaziantep_sabunhan/04.webp`,
      `${ASSET_BASE}/gaziantep_sabunhan/05.webp`,
    ],
  },
  {
    slug: "bodrum_no81_otel",
    title: "Bodrum No81 Otel",
    desc: "98 odada havuz panoları ve elektrik işleri",
    cover: `${ASSET_BASE}/bodrum_no81_otel/cover.webp`,
    gallery: [
      `${ASSET_BASE}/bodrum_no81_otel/01.webp`,
      `${ASSET_BASE}/bodrum_no81_otel/02.webp`,
      `${ASSET_BASE}/bodrum_no81_otel/03.webp`,
    ],
  },
  {
    slug: "mersin_onkoloji_hastanesi",
    title: "Mersin Üniversitesi Onkoloji Hastanesi",
    desc: "252 yatak – elektrik & mekanik taahhüt",
    cover: `${ASSET_BASE}/mersin_onkoloji_hastanesi/cover.webp`,
    gallery: [
      `${ASSET_BASE}/mersin_onkoloji_hastanesi/01.webp`,
      `${ASSET_BASE}/mersin_onkoloji_hastanesi/02.webp`,
      `${ASSET_BASE}/mersin_onkoloji_hastanesi/03.webp`,
      `${ASSET_BASE}/mersin_onkoloji_hastanesi/04.webp`,
    ],
  },
  {
    slug: "side_antik_hamam",
    title: "Antalya Side Antik Kent Hamam",
    desc: "Renovasyon projesi anahtar teslimi",
    cover: `${ASSET_BASE}/side_antik_hamam/cover.webp`,
    gallery: [
      `${ASSET_BASE}/side_antik_hamam/01.webp`,
      `${ASSET_BASE}/side_antik_hamam/02.webp`,
      `${ASSET_BASE}/side_antik_hamam/03.webp`,
    ],
  },
  {
    slug: "antalya_jj",
    title: "Antalya Jolly Joker (JJ Pub)",
    desc: "Elektrik taahhüt & pano işleri",
    cover: `${ASSET_BASE}/antalya_jj/cover.webp`,
    gallery: [
      `${ASSET_BASE}/antalya_jj/01.webp`,
      `${ASSET_BASE}/antalya_jj/02.webp`,
      `${ASSET_BASE}/antalya_jj/03.webp`,
      `${ASSET_BASE}/antalya_jj/04.webp`,
    ],
  },
];
