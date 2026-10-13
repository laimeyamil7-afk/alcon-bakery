import { coursesConfig } from "@/content/courses.config";
import { CourseSignupForm } from "@/features/courses/CourseSignupFormLazy";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cursos",
  description: "Curso de laminados con Brian Alcon. Inscripción y consulta de cupos por WhatsApp.",
  path: "/cursos",
});

export default function CursosPage() {
  return (
    <>
      <Section
        className="page-top-spacing border-b border-brand/10 bg-white pb-8 !pt-[5.25rem] sm:!pt-[5.75rem]"
        eyebrow="Formación"
        title={coursesConfig.headline}
        description={coursesConfig.intro}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {coursesConfig.editions.map((edition) => (
            <article
              key={edition.id}
              className="rounded-2xl border border-espresso/10 bg-flour p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {edition.status === "waitlist"
                  ? "Lista de espera"
                  : edition.status === "open"
                    ? "Inscripción abierta"
                    : "Cerrado"}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-espresso">
                {edition.title}
              </h2>
              <p className="mt-1 text-base text-espresso/60">{edition.dateLabel}</p>
              <p className="mt-4 text-base leading-relaxed text-espresso/75">
                {edition.description}
              </p>
              <ul className="mt-4 list-inside list-disc text-base text-espresso/70">
                {edition.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-espresso/50">
                {edition.durationLabel} · {edition.locationLabel}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Inscripción" description="Completá el formulario y continuá por WhatsApp.">
        <CourseSignupForm />
      </Section>
    </>
  );
}
