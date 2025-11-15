import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/51957651092?text=Hola,%20vengo%20desde%20la%20web%20Medify%20y%20quiero%20agendar%20una%20teleconsulta.";

interface ButtonWhatsAppProps {
  label?: string;
  className?: string;
}

export default function ButtonWhatsApp({
  label = "Agendar por WhatsApp",
  className = "",
}: ButtonWhatsAppProps) {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      className={`inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${className}`}
    >
      {label}
    </Link>
  );
}
