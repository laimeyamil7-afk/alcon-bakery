export interface CourseEdition {
  id: string;
  title: string;
  dateLabel: string;
  status: "open" | "waitlist" | "closed";
  description: string;
  includes: string[];
  durationLabel: string;
  locationLabel: string;
}

export const coursesConfig = {
  headline: "Curso de laminados",
  intro:
    "Clases prácticas con Brian Alcon: hojaldre, sobadora y tips de producción real. Cupos limitados por edición.",
  editions: [
    {
      id: "proxima-edicion",
      title: "Próxima edición — laminados",
      dateLabel: "Fecha a confirmar — lista de espera abierta",
      status: "waitlist" as const,
      description:
        "Aprendé a laminar medialunas y croissants con la misma técnica de producción que abastece cafeterías de especialidad.",
      includes: [
        "Práctica guiada de laminado",
        "Materiales y recetas de referencia",
        "Grupo reducido para acompañamiento personalizado",
      ],
      durationLabel: "Jornada intensiva (duración según edición)",
      locationLabel: "Alcon Bakery — Caballito (Río de Janeiro 1086)",
    },
  ] satisfies CourseEdition[],
};
