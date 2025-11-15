import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";

export default function DoctoresPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold text-slate-900">
          Nuestro equipo médico
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          En Medify contamos con un equipo de cirujanos generales con
          colegiatura vigente y experiencia en atención clínica y
          teleorientación médica.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </section>
    </div>
  );
}
