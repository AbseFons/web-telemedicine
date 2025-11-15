import ButtonWhatsApp from "@/components/ButtonWhatsApp";

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold text-slate-900">
          Contacto y agendamiento
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Puedes agendar tu teleconsulta escribiéndonos por WhatsApp o
          enviándonos un mensaje a través del formulario.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Datos de contacto
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <span className="font-medium">WhatsApp:</span> 957 651 092
            </li>
            <li>
              <span className="font-medium">Correo:</span>{" "}
              contacto@medify.pe (ejemplo)
            </li>
            <li>
              <span className="font-medium">Horario de atención:</span> Lunes a
              domingo, 8:00 a.m. - 10:00 p.m.
            </li>
          </ul>
          <div className="mt-4">
            <ButtonWhatsApp className="text-sm" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Formulario de consulta
          </h2>
          <form
            className="mt-3 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Nombre completo
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Escribe tu nombre"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Correo electrónico
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Motivo de consulta
              </label>
              <textarea
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                rows={4}
                placeholder="Describe brevemente tus síntomas o dudas"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Enviar (ejemplo)
            </button>
            <p className="text-[11px] text-slate-500">
              Este formulario es demostrativo. Te recomendamos escribirnos
              directamente por WhatsApp para agendar tu teleconsulta.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
