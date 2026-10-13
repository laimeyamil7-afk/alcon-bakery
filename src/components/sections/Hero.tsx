import { siteConfig } from "@/content/site.config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="page-top-spacing relative overflow-hidden border-b border-brand/10 bg-gradient-to-b from-white to-brand-light/40 pb-12 sm:pb-24">
      <Container className="grid min-w-0 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="mb-3 inline-flex max-w-full rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Campeón nacional {siteConfig.stats.awardYear}
          </p>
          <h1 className="text-balance font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-espresso min-[400px]:text-3xl sm:text-4xl sm:leading-tight lg:text-[3.25rem]">
            La medialuna que abastece cafeterías — y te espera en Caballito.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-espresso/70 sm:mt-5 sm:text-lg">
            {siteConfig.tagline}. Producción artesanal,{" "}
            <strong className="font-medium text-brand-dark">
              {siteConfig.stats.wholesaleClients} cafeterías
            </strong>{" "}
            abastecidas y un local donde probás todo recién hecho.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8">
            <Button href="/proveeduria" className="w-full min-[480px]:w-auto">
              Sumá tu cafetería
            </Button>
            <Button href="/cafeteria" variant="outline" className="w-full min-[480px]:w-auto">
              Visitar el local
            </Button>
            <Button href="/cursos" variant="ghost" className="w-full min-[480px]:w-auto">
              Curso de laminados
            </Button>
          </div>
          <p className="mt-5 text-pretty text-base text-espresso/55 sm:mt-6">
            {siteConfig.stats.awardTitle}
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-h-[min(70vh,32rem)] overflow-hidden rounded-3xl bg-brand-light shadow-inner ring-1 ring-brand/10 sm:max-h-none lg:mx-0 lg:max-h-none">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center sm:p-8">
            <span className="text-5xl sm:text-6xl" aria-hidden>
              🥐
            </span>
            <p className="font-display text-lg text-brand-dark/90 sm:text-xl">
              Foto de vitrina / producción
            </p>
            <p className="max-w-xs text-base text-espresso/50">
              Reemplazá este placeholder con imágenes de @alconbakery
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
