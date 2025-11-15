"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/doctores", label: "Doctores" },
  { href: "/telemedicina", label: "Telemedicina" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white font-semibold">
            M
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              Medify
            </span>
            <span className="text-xs text-slate-500">
              Telemedicina en Perú
            </span>
          </div>
        </Link>

        <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-sky-700 ${
                  active ? "text-sky-700" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
