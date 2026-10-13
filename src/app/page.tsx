import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Section } from "@/components/ui/Section";
import { Steps } from "@/components/sections/Steps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { WholesaleCatalogPreview } from "@/features/catalog/ProductGrid";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Section
        eyebrow="Para cafeterías"
        title="Listos para pedir"
        description="Catálogo orientativo — confirmá variedades y mínimos por WhatsApp."
      >
        <WholesaleCatalogPreview />
        <div className="mt-8">
          <Button href="/proveeduria" className="w-full sm:w-auto">
            Ver pedido de proveeduría completo
          </Button>
        </div>
      </Section>
      <Steps />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
