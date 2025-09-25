import nodemailer from "nodemailer";

type Maybe<T> = T | undefined | null;

const parseBoolean = (value: Maybe<string>) => {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim().toLowerCase();
  if (normalized === "") return undefined;
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return undefined;
};

const firstDefined = (...values: Maybe<string>[]) => values.find((value) => typeof value === "string" && value.trim() !== "");

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export function getMailer() {
  if (cachedTransporter) return cachedTransporter;

  const connectionUrl = firstDefined(
    process.env.SMTP_URL,
    process.env.EMAIL_SERVER,
    process.env.SMTP_CONNECTION,
    process.env.SMTP_CONNECTION_URL,
  );

  if (connectionUrl) {
    cachedTransporter = nodemailer.createTransport(connectionUrl);
    return cachedTransporter;
  }

  const host = firstDefined(process.env.SMTP_HOST, process.env.EMAIL_HOST, process.env.MAIL_HOST);
  const user = firstDefined(process.env.SMTP_USER, process.env.EMAIL_USER, process.env.MAIL_USER);
  const pass = firstDefined(process.env.SMTP_PASS, process.env.EMAIL_PASS, process.env.MAIL_PASS);
  const portValue = firstDefined(process.env.SMTP_PORT, process.env.EMAIL_PORT, process.env.MAIL_PORT);

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are missing");
  }

  const parsedPort = Number(portValue ?? 587);
  const port = Number.isFinite(parsedPort) ? parsedPort : 587;
  const secureOverride = parseBoolean(firstDefined(process.env.SMTP_SECURE, process.env.EMAIL_SECURE, process.env.MAIL_SECURE));
  const secure = typeof secureOverride === "boolean" ? secureOverride : port === 465;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  return cachedTransporter;
}
