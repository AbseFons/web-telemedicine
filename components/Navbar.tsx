"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/doctores", label: "Doctores" },
  { href: "/telemedicina", label: "Telemedicina" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3">
        {/* fila principal: logo + menú */}
        <div className="flex items-center justify-between">
          {/* logo / marca */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white text-sm font-semibold">
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

          {/* links desktop */}
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

          {/* botón móvil */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación"
            aria-expanded={open}
          >
            {/* icono hamburguesa simple */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                // icono de "X"
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                // icono hamburguesa
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* menú desplegable móvil */}
        {open && (
          <div className="mt-3 flex flex-col gap-1 border-t border-slate-200 pt-3 md:hidden">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
