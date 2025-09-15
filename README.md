# AYK Proje Elektrik Website

This repository contains the source code for the **AYK Proje Elektrik** company website, built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

---

## ✨ Features
- Responsive, modern UI with Tailwind CSS
- Multisection layout (About, Services, Projects, Contact, etc.)
- Dynamic forms (Contact & Quick Quote) with email delivery via SMTP
- GDPR/KVKK–compliant consent handling
- Easy deployment to Linux/Windows servers

---

## 📦 Requirements
- Node.js **18+** (LTS recommended)
- npm or yarn package manager
- SMTP account (for form email delivery)

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🏗 Production Build

Create an optimized build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 🔑 Environment Variables

Environment variables are required for SMTP email functionality.  
Use the `.env.example` file as a reference and create a `.env.production` file in the project root:

```bash
SMTP_HOST=mail.aykproje.com.tr
SMTP_PORT=465
SMTP_USER=info@aykproje.com.tr
SMTP_PASS=your-email-password
MAIL_FROM="AYK Proje <info@aykproje.com.tr>"
MAIL_TO=info@aykproje.com.tr
MAIL_SUBJECT_PREFIX=[AYK]
```

> ⚠️ Never commit `.env.production` to GitHub. It is already ignored via `.gitignore`.

---

## 📂 Project Structure

```
app/             # Next.js App Router pages & API routes
components/      # Reusable React components
data/            # Static data (projects, references, services)
public/          # Static assets (images, icons, etc.)
```

---

## 📡 Deployment Notes
- For Windows Server: run `npm run build && npm run start` via **NSSM** or **PM2**.  
- Use IIS + ARR (Application Request Routing) for reverse proxy from ports 80/443 → 3000.  
- On Linux servers, you can use **PM2** or **systemd** services.  
- Make sure DNS A records for `aykproje.com.tr` and `www` point to your server, while MX records continue to point to your hosting provider for email.

---

## 📄 License
This project is proprietary to **AYK Proje Elektrik Ltd. Şti.**  
All rights reserved. Unauthorized copying, modification, or distribution of this project, via any medium, is strictly prohibited.
