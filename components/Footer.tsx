export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Medify. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="/terminos" className="hover:text-sky-700">
            Términos y condiciones
          </a>
          <a href="/privacidad" className="hover:text-sky-700">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
