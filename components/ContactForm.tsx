"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [feedback, setFeedback] = React.useState<{ ok: boolean; message: string } | null>(null);
  const t = useTranslations("contactForm");

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
        const message =
          typeof j?.error === "string" && j.error.trim().length > 0
            ? j.error
            : t("feedback.error");
        setFeedback({ ok: false, message });
        return;
      }

      form.reset();
      setFeedback({ ok: true, message: t("feedback.success") });
    } catch (error) {
      setFeedback({ ok: false, message: t("feedback.network") });
    } finally {
      setSubmitting(false);
    }
  };

  const renderLink = React.useCallback(
    (chunks: React.ReactNode) => (
      <a href="/aydinlatma-metni" className="text-[var(--brand)] font-medium">
        {chunks}
      </a>
    ),
    []
  );

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
      <input
        name="name"
        required
        className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
        placeholder={t("fields.name")}
      />
      <input
        name="contact"
        required
        className="px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
        placeholder={t("fields.contact")}
      />
      <input
        name="topic"
        required
        className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
        placeholder={t("fields.topic")}
      />
      <textarea
        name="message"
        required
        rows={5}
        className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-[var(--ink)] outline-none"
        placeholder={t("fields.message")}
      ></textarea>

      {/* Honeypot */}
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Onaylar */}
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-700">
        <input type="checkbox" name="consentInfo" required className="w-5 h-5 accent-[var(--brand)]" />
        <span>
          {t.rich("consents.info_html", {
            a: renderLink,
            b: (chunks) => <b>{chunks}</b>,
          })}
        </span>
      </label>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-700">
        <input type="checkbox" name="consentContact" required className="w-4 h-4 accent-[var(--brand)]" />
        <span>{t.rich("consents.contact", { b: (chunks) => <b>{chunks}</b> })}</span>
      </label>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-600">
        <input type="checkbox" name="consentMarketing" className="w-4 h-4 accent-[var(--brand)]" />
        <span>{t.rich("consents.marketing", { b: (chunks) => <b>{chunks}</b> })}</span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="md:col-span-2 px-5 py-3 rounded-xl bg-neutral-800 text-white font-medium hover:bg-[var(--brand)] disabled:cursor-not-allowed disabled:bg-neutral-500"
      >
        {submitting ? t("submit.loading") : t("submit.default")}
      </button>
    </form>
  );
}
