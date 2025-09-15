import Container from "@/components/Container";

export const metadata = {
  title: "Aydınlatma Metni | AYK Proje Elektrik",
  description:
    "AYK Proje Elektrik Ltd. Şti. tarafından kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
};

export default function Page() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu
          sıfatıyla AYK Proje Elektrik Ltd. Şti. (“Şirket”) tarafından kişisel verilerinizin
          işlenmesine ilişkin sizleri bilgilendirmek amacıyla bu aydınlatma metni hazırlanmıştır.
          KVKK’ya dair genel ilkeler ve haklarınızın kapsamı için{" "}
          <a href="/kvkk" className="text-[var(--brand)] font-medium">KVKK metnimizi</a> inceleyebilirsiniz.
        </p>

        {/* Kartlar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">1. Veri Sorumlusu</h3>
            <p className="mt-2 text-sm text-neutral-700">
              AYK Proje Elektrik Ltd. Şti. veri sorumlusu sıfatıyla kişisel verilerinizi işlemektedir.
              İletişim için <a href="/iletisim" className="text-[var(--brand)] font-medium">İletişim</a> sayfamızı kullanabilirsiniz.
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">2. Toplama Yöntemi</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Verileriniz; web sitemizdeki formlar, e-posta/telefon yazışmaları, sözleşmeler,
              teklifler, saha keşfi ve hizmet süreçleri sırasında otomatik veya kısmen otomatik
              yollarla, fiziki ve elektronik ortamlarda elde edilebilir.
            </p>
          </div>

          {/* 3 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">3. İşleme Amaçları</h3>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5 space-y-1">
              <li>Tekliflendirme, keşif, sözleşme ve proje yönetimi süreçlerinin yürütülmesi,</li>
              <li>Müşteri ilişkileri ve hizmet kalitesi yönetimi,</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi ve yetkili kurumlara bildirimler,</li>
              <li>Finans ve muhasebe işlemleri, fatura ve tahsilat süreçleri,</li>
              <li>Operasyonel güvenlik, bakım ve denetim faaliyetleri.</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">4. Hukuki Sebepler</h3>
            <p className="mt-2 text-sm text-neutral-700">
              KVKK m.5 ve m.6 kapsamında; kanunlarda açıkça öngörülmesi, sözleşmenin kurulması
              veya ifası için zorunluluk, hukuki yükümlülüklerin yerine getirilmesi, veri
              sorumlusunun meşru menfaati ve gerektiğinde açık rızanız hukuki sebeplerine dayanır.
            </p>
          </div>

          {/* 5 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">5. Aktarım</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Kişisel verileriniz; hizmet sağlayıcılarımıza, iş ortaklarımıza, hukuken yetkili
              kamu kurumlarına ve zorunlu hallerde yurt içindeki barındırma/BT hizmeti aldığımız
              üçüncü kişilere, KVKK hükümlerine uygun ve amaçla sınırlı olarak aktarılabilir.
            </p>
          </div>

          {/* 6 */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">6. Saklama Süresi</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Verileriniz, ilgili mevzuatta öngörülen süreler ve/veya işleme amacının
              gerektirdiği süre boyunca saklanır; süre sonunda mevzuata uygun yöntemlerle
              silinir, yok edilir veya anonim hale getirilir.
            </p>
          </div>

          {/* 7 - geniş kart */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 md:col-span-2">
            <h3 className="font-medium text-lg">7. İlgili Kişinin Hakları</h3>
            <p className="mt-2 text-sm text-neutral-700">
              KVKK m.11 uyarınca; kişisel verilerinize ilişkin bilgi talep etme, düzeltilmesini,
              silinmesini/yok edilmesini isteme, işleme amacına uygun kullanılıp kullanılmadığını
              öğrenme ve üçüncü kişilere aktarılmışsa bildirilmesini talep etme haklarına
              sahipsiniz.
            </p>
          </div>

          {/* 8 - geniş kart */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 md:col-span-2">
            <h3 className="font-medium text-lg">8. Başvuru Yöntemi</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Haklarınıza ilişkin taleplerinizi; kimlik doğrulamasına imkân verecek belgelerle
              birlikte yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik
              imza ya da Şirket’in belirlediği kanallar aracılığıyla iletebilirsiniz. Başvurular
              mevzuata uygun şekilde en kısa sürede sonuçlandırılır.
            </p>
          </div>
        </div>

        {/* Alt bilgi */}
        <p className="mt-8 text-neutral-600 text-sm">
          Detaylı bilgi veya başvuru için{" "}
          <a href="/iletisim" className="text-[var(--brand)] font-medium">İletişim</a>{" "}
          sayfamızdan bize ulaşabilirsiniz.
        </p>
      </Container>
    </section>
  );
}
