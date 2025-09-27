// Fotoğraflı projeler (11 adet)
// Not: Kapak görselleri mevcut ana sayfadaki dosyaları kullanıyor.
// Galeri görsellerini /public/assets/<slug>/ klasörüne koy (01.webp, 02.webp ...)

export type Project = {
  slug: string;
  cover: string;      // kapak görseli (ana sayfa formatıyla uyumlu)
  gallery?: string[]; // detay sayfasındaki görseller (/assets/<slug>/...)
};

const ASSET_BASE = "/assets";

export const projectsWithPhotos: Project[] = [
  {
    slug: "side_athena",
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
    cover: `${ASSET_BASE}/lider_tohum_ges/cover.webp`,
    gallery: [
      `${ASSET_BASE}/lider_tohum_ges/01.webp`,
      `${ASSET_BASE}/lider_tohum_ges/02.webp`,
      `${ASSET_BASE}/lider_tohum_ges/03.webp`,
    ],
  },
  {
    slug: "ela_excellence",
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
    cover: `${ASSET_BASE}/bodrum_no81_otel/cover.webp`,
    gallery: [
      `${ASSET_BASE}/bodrum_no81_otel/01.webp`,
      `${ASSET_BASE}/bodrum_no81_otel/02.webp`,
      `${ASSET_BASE}/bodrum_no81_otel/03.webp`,
    ],
  },
  {
    slug: "mersin_onkoloji_hastanesi",
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
    cover: `${ASSET_BASE}/side_antik_hamam/cover.webp`,
    gallery: [
      `${ASSET_BASE}/side_antik_hamam/01.webp`,
      `${ASSET_BASE}/side_antik_hamam/02.webp`,
      `${ASSET_BASE}/side_antik_hamam/03.webp`,
    ],
  },
  {
    slug: "antalya_jj",
    cover: `${ASSET_BASE}/antalya_jj/cover.webp`,
    gallery: [
      `${ASSET_BASE}/antalya_jj/01.webp`,
      `${ASSET_BASE}/antalya_jj/02.webp`,
      `${ASSET_BASE}/antalya_jj/03.webp`,
      `${ASSET_BASE}/antalya_jj/04.webp`,
    ],
  },
];
