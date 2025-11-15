import type { Doctor } from "@/data/doctors";
import ButtonWhatsApp from "./ButtonWhatsApp";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          {doctor.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-sky-700">
          {doctor.specialty}
        </p>
        <p className="mt-1 text-xs text-slate-500">{doctor.cmp}</p>
        <p className="mt-2 text-xs text-slate-600">
          {doctor.bio}
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Experiencia: {doctor.experienceYears} años
        </p>
      </div>
      <div className="mt-3">
        <ButtonWhatsApp
          label="Agendar con este médico"
          className="w-full justify-center text-xs"
        />
      </div>
    </article>
  );
}
