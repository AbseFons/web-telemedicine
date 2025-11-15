import ButtonWhatsApp from "@/components/ButtonWhatsApp";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-12 md:flex md:items-center md:gap-12">
        <div className="md:w-1/2">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
            Telemedicina en Perú
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Teleconsulta médica confiable desde casa.
          </h1>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            Medify conecta a pacientes en Perú con médicos cirujanos generales
            colegiados, a través de videollamadas y mensajería. Atención rápida,
            segura y profesional.
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Teleconsulta desde <span className="text-sky-700">S/ 50</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonWhatsApp className="text-sm" />
            <a
              href="/servicios"
              className="text-sm font-medium text-sky-700 hover:text-sky-800"
            >
              Ver servicios →
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-2 text-xs text-slate-600 sm:grid-cols-2">
            <li>✔ Médicos cirujanos generales colegiados</li>
            <li>✔ Consulta por videollamada o WhatsApp</li>
            <li>✔ Orientación clara y segura</li>
            <li>✔ Ideal para síntomas leves y seguimiento</li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2">
          <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              ¿Cómo funciona?
            </h2>
            <ol className="mt-3 space-y-2 text-xs text-slate-600">
              <li>1. Nos escribes por WhatsApp y comentas tu motivo de consulta.</li>
              <li>2. Coordinamos el horario de la videollamada.</li>
              <li>3. Realizas el pago de S/ 50 (Yape, Plin o transferencia).</li>
              <li>4. Recibes la atención médica virtual con un cirujano general.</li>
            </ol>
            <p className="mt-4 text-[11px] text-slate-500">
              Medify brinda orientación médica y no reemplaza la atención de
              emergencias. Ante síntomas graves, acude al centro de salud más
              cercano.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
