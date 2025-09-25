"use client";
import React from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [feedback, setFeedback] = React.useState<{ ok: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/forms/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        const message = typeof j?.error === "string" && j.error.trim().length > 0 ? j.error : "Bir hata oluştu.";
        setFeedback({ ok: false, message });
        return;
      }

      form.reset();
      setFeedback({ ok: true, message: "Mesajınız alındı. En kısa sürede dönüş yapacağız." });
    } catch (error) {
      setFeedback({ ok: false, message: "Sunucuya bağlanırken bir sorun oluştu. Lütfen tekrar deneyiniz." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {feedback && (
        <div
          className={`md:col-span-2 rounded-xl border px-4 py-3 text-sm ${
            feedback.ok
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-600"
          }`}
        >
          {feedback.message}
        </div>
      )}
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

      <button
        type="submit"
        disabled={submitting}
        className="md:col-span-2 px-5 py-3 rounded-xl bg-neutral-800 text-white font-medium hover:bg-[var(--brand)] disabled:cursor-not-allowed disabled:bg-neutral-500"
      >
        {submitting ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
