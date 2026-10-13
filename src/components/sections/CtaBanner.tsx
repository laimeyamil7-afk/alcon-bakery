import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="bg-brand py-16 text-white">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Armá tu pedido de proveeduría o reservá tu lugar en el curso.
          </h2>
          <p className="mt-2 text-base text-white/75">
            Cuanto antes nos escribís, más fechas de producción tenés disponibles.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap">
          <Button href="/proveeduria" variant="secondary" className="w-full min-[480px]:w-auto">
            Pedido proveeduría
          </Button>
          <Button
            href="/cursos"
            variant="outline"
            className="w-full border-white/35 text-white hover:bg-white/10 min-[480px]:w-auto"
          >
            Inscripción curso
          </Button>
        </div>
      </Container>
    </section>
  );
}
