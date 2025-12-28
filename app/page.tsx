import {HeroSection} from "./components/Hero";
import { UrgenciaSection } from "./components/Urgencia";
import { SobreSection } from "./components/sobre";
import { BeneficiosSection } from "./components/beneficios";
import { PublicoAlvoSection } from "./components/publicoAlvo";
import { PacoteSection } from "./components/pacote";
import { ComoFuncionaSection } from "./components/ComoFunciona";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeroSection />
        <UrgenciaSection />
        <SobreSection />
        <BeneficiosSection />
        <PublicoAlvoSection />
        <PacoteSection />
        <ComoFuncionaSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
