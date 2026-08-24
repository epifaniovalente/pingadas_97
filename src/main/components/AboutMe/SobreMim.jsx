import { useEffect, useState } from 'react';
import { SectionHead } from '../SectionHead/SectionHead';
import { Carreira } from '../../data/Carreira';
import profile from "../../assets/profile.jpg";


export const SobreMim = () => {
  const [minhCarreira, setMinhaCarreira]=useState([])
  useEffect(() => {
    function getcarreira(data) {
      setMinhaCarreira(data)
    }
    getcarreira(Carreira)
  }, [])
  
  return (
    <section id="sobre" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHead n="04" label="Sobre mim" />
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="relative aspect-[4/5] border-2 border-[#0D0D0D] bg-[#F5F5F5] flex items-center justify-center">
            <img src={profile} alt="meu perfil" />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[#0D0D0D]/80 mb-6">
              Sou técnico de Informática e Desenvolvedor Web, interessado em
              tecnologia, desenvolvimento de sistemas e resolução de problemas
              através de soluções digitais
            </p>
            <p className="text-lg leading-relaxed text-[#0D0D0D]/80 mb-10">
              Por trás do código existe uma pessoa. 
            </p>
            <div className="grid grid-cols-3 divide-x-2 divide-[#0D0D0D] border-y-2 border-[#0D0D0D]">
              {minhCarreira.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#FF3D00] p-5 text-center first:bg-[#0D0D0D]"
                >
                  <p className="font-display text-3xl font-black text-white">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-white/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
