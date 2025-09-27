import { NextResponse } from "next/server";

import { getMailer } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Boolish = boolean | "true" | "on" | "1" | "false" | "0" | undefined | null | string;
const yes = (v: Boolish) => v === true || v === "true" || v === "on" || v === "1";

const sanitize = (input: unknown, max = 2000) =>
  String(input ?? "").replace(/\r/g, "").replace(/</g, "&lt;").replace(/>/g, "&gt;").slice(0, max).trim();

const required = (s?: string) => typeof s === "string" && s.trim().length > 0;

export async function POST(req: Request) {
  try {
    if (!(req.headers.get("content-type") || "").includes("application/json")) {
      return NextResponse.json({ error: "Invalid content type" }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    const body = await req.json().catch(() => ({}));
    const { name, contact, topic, message, honey, consentInfo, consentContact, consentMarketing } = body ?? {};

    // Bot filtresi (honeypot doluysa sessiz geç)
    if (typeof honey === "string" && honey.trim() !== "") {
      return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
    }

    // Temel alanlar
    const _name = sanitize(name, 200);
    const _contact = sanitize(contact, 200);
    const _topic = sanitize(topic, 200);
    const _message = sanitize(message, 4000);
    if (!required(_name) || !required(_contact) || !required(_topic) || !required(_message)) {
      return NextResponse.json({ error: "Lütfen gerekli alanları doldurun." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    // KVKK ve iletişim ONAYLARI ZORUNLU — pazarlama opsiyonel
    if (!yes(consentInfo) || !yes(consentContact)) {
      return NextResponse.json({ error: "Gerekli aydınlatma ve iletişim onaylarını işaretleyiniz." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }
    const marketingOK = yes(consentMarketing);

    // Şeffaflık bilgileri
    const ua = req.headers.get("user-agent") || "unknown";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
    const whenTR = new Date().toLocaleString("tr-TR");

    const subjectPrefix = process.env.MAIL_SUBJECT_PREFIX ?? "";
    const subject = `${subjectPrefix} [İLETİŞİM] ${_name} – ${_topic}`;

    // Standart format: tablo + onaylar + iz bilgisi
    const html = `
      <h2>İletişim Formu</h2>
      <table style="border-collapse:collapse" cellpadding="6" border="1">
        <tr><td><b>Ad Soyad</b></td><td>${_name}</td></tr>
        <tr><td><b>İletişim</b></td><td>${_contact}</td></tr>
        <tr><td><b>Konu</b></td><td>${_topic}</td></tr>
        <tr><td><b>Mesaj</b></td><td>${_message.replace(/\n/g, "<br/>")}</td></tr>
      </table>
      <h3>Onaylar</h3>
      <ul>
        <li><b>Aydınlatma/KVKK:</b> Evet</li>
        <li><b>İletişime Geçilmesine Onay:</b> Evet</li>
        <li><b>Pazarlama İzni:</b> ${marketingOK ? "Evet" : "Hayır"}</li>
      </ul>
      <hr/>
      <p style="font-size:12px;color:#555">
        <b>Gönderim:</b> ${whenTR}<br/>
        <b>IP:</b> ${ip}<br/>
        <b>User-Agent:</b> ${sanitize(ua, 300)}
      </p>
      <p style="font-size:12px;color:#555">
        Bu e-posta, başvurunun <i>değerlendirilmesi ve size geri dönüş yapılması</i> amacıyla oluşturulmuştur.
        Veriler amaç dışı kullanılmaz ve sunucuda kalıcı saklanmaz.
      </p>
    `;

    const text =
`İletişim Formu

Ad Soyad : ${_name}
İletişim : ${_contact}
Konu      : ${_topic}
Mesaj    :
${_message}

Onaylar
- Aydınlatma/KVKK: Evet
- İletişime Geçilmesine Onay: Evet
- Pazarlama İzni: ${marketingOK ? "Evet" : "Hayır"}

Gönderim: ${whenTR}
IP: ${ip}
User-Agent: ${ua}

Not: Veriler yalnızca talebinizin değerlendirilmesi amacıyla işlenir ve sunucuda kalıcı saklanmaz.
`;

    const transporter = getMailer();
    const authUser = ((transporter as unknown as { options?: { auth?: { user?: string } } }).options?.auth?.user || "").trim();
    const fromAddress = (process.env.MAIL_FROM || process.env.SMTP_USER || authUser || "").trim();
    const toAddress = (process.env.MAIL_TO || process.env.SMTP_USER || authUser || "").trim();

    if (!fromAddress || !toAddress) {
      throw new Error("Mail alıcısı veya göndericisi yapılandırılmamış");
    }

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject,
      text,
      html,
      headers: { "X-AYK-Form": "contact" },
    });

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Mail gönderilemedi." }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}
