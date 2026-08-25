import { FaLaptop } from "react-icons/fa";
import { BigNumeral } from "../BigNumeral/BigNumeral";

export const HeroSection=()=>{
  return(
    <section id="home" className="relative overflow-hidden border-b-4 border-[#0D0D0D] px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <BigNumeral className="absolute -top-4 left-2 text-[7rem] sm:text-[10rem] md:-top-10 md:text-[16rem]">
            01
          </BigNumeral>
          

          <div className="relative mx-auto max-w-5xl">

            <h1 className="font-display font-black uppercase leading-[0.92] text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              Epifânio
              <br />
              <span className="text-[#FF3D00]">Valente</span>
            </h1>

            <div className="mb-4 inline-flex items-center gap-2 bg-[#0D0D0D] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-white">
              <FaLaptop/>
              Desenvolvedor Web
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
              <p className="max-w-lg text-lg text-[#0D0D0D]/70 md:text-xl">
                 Desenvolvedor Web focado na criação de websites e aplicações modernas, responsivas e funcionais.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Fronte-d", "Back-end", "Database"].map((t) => (
                  <span
                    key={t}
                    className="bg-[#FF3D00] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                
                className="group inline-flex items-center gap-2 bg-[#0D0D0D] px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#FF3D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00]"
              >
                Técnico Médio
                
              </button>
              <button
                
                className="inline-flex items-center gap-2 border-2 border-[#0D0D0D] px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wide transition-colors hover:border-[#FF3D00] hover:text-[#FF3D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00]"
              >
                Informático
              </button>
            </div>
          </div>
        </section>
  )
}