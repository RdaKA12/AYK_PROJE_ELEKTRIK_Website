import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // ✅ themeColor artık burada
  themeColor: "#D9251C",

  // İstersen dark/light desteği:
  /*
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  */
};

export const metadata = {
  title: {
    default: "AYK Proje Elektrik",
    template: "%s | AYK Proje Elektrik",
  },
  description:
    "Elektrikte 25+ yıl deneyim, güçlü mühendislik ve anahtar teslim projeler.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", rel: "icon" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  // ❌ Buradan themeColor satırını kaldırdık
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[var(--paper)] text-[var(--ink)]">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(217,37,28,0.06),transparent)]" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
