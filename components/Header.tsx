"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, MapPin } from "lucide-react";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-1 block text-[15px] transition-colors ${
        active
          ? "text-[var(--brand)] font-medium after:w-full"
          : "text-neutral-800"
      } 
        after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 
        after:bg-[var(--brand)] after:transition-all hover:after:w-full`}
    >
      {children}
    </Link>
  );
}

const LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      {/* === ANASAYFA HEADER === */}
      {isHome ? (
        <>
          {/* İnce boş üst bar */}
          <div className="h-5 bg-neutral-900" />

          <div className="backdrop-blur bg-white/90 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
              {/* Logo tek başına */}
              <Link href="/" className="flex items-center">
                <img
                  src="/assets/AYKlogo.webp"
                  alt="AYK Logo"
                  className="h-20 w-auto"
                />
              </Link>

              {/* Masaüstü menü */}
              <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
                {LINKS.map((l) => (
                  <NavLink key={l.href} href={l.href}>
                    {l.label}
                  </NavLink>
                ))}
              </nav>

              {/* Hamburger */}
              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-300 bg-white"
                aria-label="Menüyü aç"
                onClick={() => setOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      ) : (
        /* === DİĞER SAYFALAR HEADER === */
        <>
          {/* Üst bar yazılı */}
          <div className="bg-neutral-900 text-neutral-100 text-xs sm:text-sm">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
              <span className="hidden sm:flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> info@aykproje.com.tr
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Konuksever Mah. Emrah Cad. No:68/A,
                Muratpaşa / Antalya
              </span>
            </div>
          </div>

          {/* Main bar */}
          <div className="backdrop-blur bg-white/80 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/assets/AYKlogo.webp"
                  alt="AYK Logo"
                  className="h-12 w-auto"
                />
                <span className="font-semibold text-neutral-800">
                  AYK Proje Elektrik
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
                {LINKS.map((l) => (
                  <NavLink key={l.href} href={l.href}>
                    {l.label}
                  </NavLink>
                ))}
              </nav>

              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-300 bg-white"
                aria-label="Menüyü aç"
                onClick={() => setOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Mobil menü */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-[360px] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="border-l-4 border-[var(--brand)] pl-2">Menü</span>
              </h2>
              <button
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-300 bg-white"
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {LINKS.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
