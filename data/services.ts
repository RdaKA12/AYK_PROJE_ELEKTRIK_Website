export type Service = {
  slug: string;
  title: string;
  desc: string;
  bullets?: string[];
};

export const services: Service[] = [
  {
    slug: "proje-danismanlik-muhendislik",
    title: "Proje Danışmanlık Mühendislik",
    desc: "Mühendislik ve müşavirlik hizmetleri.",
    bullets: [
      "Elektrik elektronik ruhsat projelendirme",
      "Enerji ve ruhsat projelendirme",
      "Yüksek Gerilim İşletme Sorumluluğu",
    ],
  },
  {
    slug: "elektrik-elektronik-taahhut",
    title: "Elektrik Elektronik Taahhüt",
    desc: "OG/AG altyapı, saha aydınlatma, dağıtım ve kumanda panoları, tesisat işleri.",
    bullets: [
      "OG/AG altyapı ve kablolama",
      "Pano imalatı ve montajı",
      "Profesyonel aydınlatma uygulamaları",
    ],
  },
  {
    slug: "elektrik-malzemesi-satisi",
    title: "Elektrik Malzemesi Satışı",
    desc: "Sektörün önde gelen markalarıyla iş birliği yaparak elektrik malzemelerinin toptan ve perakende satışı.",
    bullets: [
      "Kablo, şalt ve aydınlatma ürünleri",
      "AG/OG pano ve aksesuarlar",
      "Marka garantili ürün tedariği",
    ],
  },
  {
    slug: "zayif-akim-sistemleri",
    title: "Zayıf Akım Sistemleri",
    desc: "Anahtar teslim otomasyon ve zayıf akım uygulamaları.",
    bullets: [
      "Endüstriyel otomasyon sistemleri",
      "CCTV, data, telefon, yangın ihbar sistemleri",
      "Akıllı ev sistemleri",
    ],
  },
  {
    slug: "gunes-enerji-sistemleri",
    title: "Güneş Enerji Sistemleri",
    desc: "Anahtar teslim güneş enerjisi projeleri: çatı üstü ve arazi tipi GES uygulamaları.",
    bullets: ["Keşif ve projelendirme", "Kurulum ve devreye alma", "İzleme ve bakım hizmetleri"],
  },
  {
    slug: "bakim-servis",
    title: "Periyodik Bakım & Servis",
    desc: "Periyodik bakım, arıza tespiti ve raporlama hizmetleri.",
    bullets: ["Arıza tespiti ve servis", "Onarım ve bakım uygulamaları", "Uzaktan izleme sistemi"],
  },
];
