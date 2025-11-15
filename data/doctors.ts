export type Doctor = {
  id: number;
  name: string;
  cmp: string;
  specialty: string;
  experienceYears: number;
  bio: string;
};

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dra. Skarlet Nolasco",
    cmp: "CMP 114158",
    specialty: "Cirugía General",
    experienceYears: 1,
    bio: "Cirujana general con experiencia en atención pre y post operatoria y teleorientación médica.",
  },
  {
    id: 2,
    name: "Dr. Andrea Nolasco",
    cmp: "CMP 045621",
    specialty: "Cirugía General",
    experienceYears: 12,
    bio: "Especialista en cirugía general y manejo integral del paciente quirúrgico.",
  },
  {
    id: 3,
    name: "Dra. Camila Nolasco",
    cmp: "CMP 078954",
    specialty: "Cirugía General",
    experienceYears: 8,
    bio: "Experiencia en evaluación clínica y seguimiento postoperatorio por teleconsulta.",
  },
  {
    id: 4,
    name: "Dr. Eduardo Nolasco",
    cmp: "CMP 091245",
    specialty: "Cirugía General",
    experienceYears: 10,
    bio: "Amplia experiencia en cirugía general y orientación a pacientes a distancia.",
  },
  {
    id: 5,
    name: "Dra. Fiorella Nolasco",
    cmp: "CMP 113579",
    specialty: "Cirugía General",
    experienceYears: 7,
    bio: "Foco en educación al paciente y cuidado postoperatorio remoto.",
  },
  {
    id: 6,
    name: "Dr. Gabriel Nolasco",
    cmp: "CMP 126842",
    specialty: "Cirugía General",
    experienceYears: 15,
    bio: "Más de 15 años de experiencia en cirugía general y evaluación clínica.",
  },
  {
    id: 7,
    name: "Dra. Helena Nolasco",
    cmp: "CMP 139764",
    specialty: "Cirugía General",
    experienceYears: 9,
    bio: "Experiencia en manejo de casos complejos y seguimiento clínico virtual.",
  },
  {
    id: 8,
    name: "Dr. Iván Nolasco",
    cmp: "CMP 154223",
    specialty: "Cirugía General",
    experienceYears: 11,
    bio: "Foco en evaluación integral y orientación sobre necesidad de atención presencial.",
  },
  {
    id: 9,
    name: "Dra. Juliana Nolasco",
    cmp: "CMP 167845",
    specialty: "Cirugía General",
    experienceYears: 5,
    bio: "Atención empática y clara para resolver dudas quirúrgicas y generales.",
  },
  {
    id: 10,
    name: "Dr. Mateo Nolasco",
    cmp: "CMP 178932",
    specialty: "Cirugía General",
    experienceYears: 13,
    bio: "Experiencia amplia en cirugía general y orientación médica remota.",
  },
];
