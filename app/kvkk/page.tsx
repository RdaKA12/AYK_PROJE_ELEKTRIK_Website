import Container from "@/components/Container";

export const metadata = {
  title: "KVKK | AYK Proje Elektrik",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki bilgilendirme metni.",
};

export default function Page() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          Kişisel Verilerin Korunması Kanunu (KVKK)
        </h1>
        <p className="mt-4 text-neutral-700 text-[15px] leading-7">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
          AYK Proje Elektrik Ltd. Şti. olarak kişisel verilerinizin korunmasına
          ve gizliliğinize azami özen göstermekteyiz. İşbu metin, veri sorumlusu
          sıfatıyla tarafımızca kişisel verilerinizin hangi amaçlarla işlendiğini,
          saklandığını ve aktarıldığını açıklamak amacıyla hazırlanmıştır.
        </p>

        {/* Kartlar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">1. Veri Sorumlusu</h3>
            <p className="mt-2 text-sm text-neutral-700">
              AYK Proje Elektrik Ltd. Şti., KVKK kapsamında “Veri Sorumlusu”
              sıfatıyla kişisel verilerinizi işlemektedir. İletişim bilgilerimize
              <a href="/iletisim" className="text-[var(--brand)] font-medium ml-1">buradan</a> ulaşabilirsiniz.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">2. Kişisel Verilerin İşlenme Amaçları</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Kişisel verileriniz; müşteri ilişkileri yönetimi, tekliflendirme,
              sözleşme süreçleri, yasal yükümlülüklerin yerine getirilmesi,
              iş geliştirme ve müşteri memnuniyeti faaliyetleri kapsamında
              işlenmektedir.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">3. Aktarım</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Verileriniz, yalnızca mevzuatın öngördüğü çerçevede ve yukarıda
              belirtilen amaçlarla sınırlı olmak üzere iş ortaklarımız, resmi
              kurumlar ve hizmet aldığımız üçüncü kişilerle paylaşılabilir.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="font-medium text-lg">4. Saklama Süresi</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Kişisel verileriniz, ilgili mevzuatta öngörülen süreler boyunca
              veya işleme amacının ortadan kalkmasına kadar saklanır; sürenin
              bitiminde güvenli yöntemlerle imha edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 md:col-span-2">
            <h3 className="font-medium text-lg">5. Haklarınız</h3>
            <p className="mt-2 text-sm text-neutral-700">
              KVKK’nın 11. maddesi uyarınca kişisel verilerinizle ilgili;
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>Yasal şartlar çerçevesinde silinmesini veya yok edilmesini talep etme,</li>
                <li>Aktarıldığı üçüncü kişilere bildirilmesini isteme haklarına sahipsiniz.</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Alt bilgi */}
        <p className="mt-8 text-neutral-600 text-sm">
          Haklarınızı kullanmak veya detaylı bilgi almak için
          <a href="/iletisim" className="text-[var(--brand)] font-medium ml-1">
            iletişim
          </a>{" "}
          sayfamız üzerinden bizimle temasa geçebilirsiniz.
        </p>
      </Container>
    </section>
  );
}
