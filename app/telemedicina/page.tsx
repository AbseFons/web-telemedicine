export default function TelemedicinaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold text-slate-900">
          ¿Qué es la telemedicina?
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          La telemedicina permite que un médico atienda a un paciente a
          distancia mediante videollamadas y mensajería, brindando orientación
          médica sin que el paciente tenga que desplazarse.
        </p>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Ventajas</h2>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            <li>✔ Ahorro de tiempo y traslados.</li>
            <li>✔ Atención desde casa u oficina.</li>
            <li>✔ Ideal para dudas y síntomas leves.</li>
            <li>✔ Posibilidad de seguimiento periódico.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            ¿Cuándo es adecuada?
          </h2>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            <li>✔ Dudas postoperatorias.</li>
            <li>✔ Evaluación inicial de síntomas leves.</li>
            <li>✔ Revisión de indicaciones o resultados simples.</li>
            <li>✔ Seguimiento de tratamientos.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-rose-100 bg-rose-50 p-4 text-xs text-slate-700">
        <h2 className="text-sm font-semibold text-slate-900">
          Importante: casos de emergencia
        </h2>
        <p className="mt-2">
          La telemedicina no reemplaza la atención de urgencias ni emergencias.
          Si presentas dificultad para respirar, dolor intenso en el pecho,
          pérdida de conciencia, sangrado abundante u otros síntomas graves,
          acude inmediatamente al servicio de emergencia más cercano.
        </p>
      </section>
    </div>
  );
}
