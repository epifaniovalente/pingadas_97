import { HeroSection } from "./components/HeroSection/HeroSection";
import { OqueFaco } from "./components/OqueFaco/OqueFaco";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import { SobreMim } from "./components/AboutMe/SobreMim";
import { Ferramentas } from "./components/Ferramentas/Ferramentas";
import { ServicosSection } from "./components/Servicos/ServicosSection";
import { BlogSection } from "./components/Blog/BlogSection";
import { Formulario } from "./Form/Formulario";
import { Footer } from "./Footer/Footer";


/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function AppPortfolio() {
  
  return (
    <main className="min-h-screen w-full bg-white text-[#0D0D0D] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Archivo', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        html { scroll-behavior: smooth; }
      `}</style>

      <main className="font-body">
        {/* ============================================================ */}
        {/* HERO SECTION                                                 */}
        {/* ============================================================ */}
        <HeroSection/>
        {/* ============================================================ */}
        {/* O QUE FAÇO SECTION                                            */}
        {/* ============================================================ */}
        <OqueFaco/>
        {/* ============================================================ */}
        {/* PROJETOS &mdash; bento                                        */}
        {/* ============================================================ */}
        <ProjectSection/>
        {/* ============================================================ */}
        {/* SOBRE MIM                                                     */}
        {/* ============================================================ */}
        <SobreMim />
        {/* ============================================================ */}
        {/* FERRAMENTAS                                                   */}
        {/* ============================================================ */}
        <Ferramentas/>
        {/* ============================================================ */}
        {/* SERVI&Ccedil;OS                                               */}
        {/* ============================================================ */}
        <ServicosSection/>

        {/* ============================================================ */}
        {/* BLOG                                                          */}
        {/* ============================================================ */}
        <BlogSection/>
        {/* ============================================================ */}
        {/* CTA + FORMULARIO DE CONTATO                            */}
        {/* ============================================================ */}
        <Formulario/>
        {/* ============================================================ */}
        {/* FOOTER                                                        */}
        {/* ============================================================ */}
        <Footer/>
      </main>

      {/* ============================================================ */}
      {/*  NAVBAR FLUTAUANTE                                           */}
      {/* ============================================================ */}
      
    </main>
  );
}
