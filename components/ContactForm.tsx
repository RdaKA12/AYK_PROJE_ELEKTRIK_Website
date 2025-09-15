"use client";
import React from "react";

export default function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  if (sent) return <div className="p-4 rounded-xl bg-green-50 text-green-700">Teşekkürler! Talebiniz alındı. En kısa sürede dönüş yapacağız.</div>;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        const payload = Object.fromEntries(fd.entries());
        const res = await fetch("/api/forms/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) { alert("Mesajınız alındı. En kısa sürede dönüş yapacağız."); (e.currentTarget as HTMLFormElement).reset(); }
        else { const j = await res.json().catch(() => ({})); alert(j.error || "Bir hata oluştu."); }
      }}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input name="name" required className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="Ad Soyad *" />
      <input name="contact" required className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="E-posta / Telefon *" />
      <input name="topic" required className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="Konu *" />
      <textarea name="message" required rows={5} className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none" placeholder="Mesajınız *"></textarea>

      {/* Honeypot */}
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Onaylar */}
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-700">
        <input type="checkbox" name="consentInfo" required className="w-5 h-5 accent-[var(--brand)]" />
        <span>
          <a href="/aydinlatma-metni" target="_blank" className="text-[var(--brand)] font-medium"> Aydınlatma Metni</a>’ni okudum; mesajımın yanıtlanması amacıyla kişisel verilerimin işlenmesine <b>onay veriyorum</b>.
        </span>
      </label>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-700">
        <input type="checkbox" name="consentContact" required className="w-4 h-4 accent-[var(--brand)]" />
        <span>Talebim/mesajım hakkında <b>tarafımla iletişime geçilmesine</b> onay veriyorum.</span>
      </label>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-600">
        <input type="checkbox" name="consentMarketing" className="w-4 h-4 accent-[var(--brand)]" />
        <span>Pazarlama/bilgilendirme amaçlı iletişim için <b>açık rıza</b> veriyorum. (İsteğe bağlı)</span>
      </label>

      <button type="submit" className="md:col-span-2 px-5 py-3 rounded-xl bg-neutral-800 text-white font-medium hover:bg-[var(--brand)]">
        Gönder
      </button>
    </form>
  );
}
