import ButtonWhatsApp from "@/components/ButtonWhatsApp";

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold text-slate-900">
          Servicios de teleconsulta
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Ofrecemos orientación médica a distancia realizada por médicos
          cirujanos generales. La atención se realiza mediante videollamada o
          mensajería, según el caso.
        </p>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Teleconsulta en Cirugía General
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Atención virtual para síntomas y dudas relacionadas con cirugía
            general: dolor abdominal, inflamaciones, heridas, golpes, dudas
            preoperatorias y postoperatorias, orientación sobre resultados, entre
            otros.
          </p>
          <p className="mt-3 text-xs font-semibold text-slate-900">
            Tarifa: <span className="text-sky-700">S/ 50</span> por teleconsulta.
          </p>
          <ButtonWhatsApp className="mt-4 w-full justify-center text-xs" />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Teleconsulta en Medicina General
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Evaluación de síntomas leves, malestar general, consultas rápidas y
            seguimiento clínico. Ideal para aclarar dudas y recibir orientación
            sin salir de casa.
          </p>
          <p className="mt-3 text-xs font-semibold text-slate-900">
            Tarifa: <span className="text-sky-700">S/ 50</span> por teleconsulta.
          </p>
          <ButtonWhatsApp className="mt-4 w-full justify-center text-xs" />
        </article>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-sky-50 p-4 text-xs text-slate-700">
        <h3 className="text-sm font-semibold text-slate-900">
          Alcances y limitaciones
        </h3>
        <p className="mt-2">
          La teleconsulta brinda orientación médica y no reemplaza la atención
          de emergencias ni procedimientos presenciales. Ante síntomas graves
          como dificultad respiratoria, dolor torácico intenso, sangrado
          abundante o pérdida de conciencia, acude inmediatamente al centro de
          salud más cercano.
        </p>
      </section>
    </div>
  );
}
