import { useEffect, useState } from "react";
import { Servicos } from "../../data/Servicos";
import { SectionHead } from "../SectionHead/SectionHead";



export const ServicosSection=()=>{
  const [services,setServices]=useState([])
  useEffect(() => {
    function getServices(data) {
      setServices(data)
    }
    getServices(Servicos)
  }, [])
  
  return(
    <section id="servicos" className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead n="05" label="Servi&ccedil;os" />
            <div className="grid divide-y-2 divide-[#0D0D0D] border-2 border-[#0D0D0D] md:grid-cols-3 md:divide-x-2 md:divide-y-0">
              {services.map((s) => (
                <div
                  key={s.n}
                  className={`relative flex flex-col p-7 ${s.featured ? "bg-[#0D0D0D] text-white" : ""}`}
                >
                  {s.featured && (
                    <span className="absolute right-0 top-0 bg-[#FF3D00] px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                      mais pedido
                    </span>
                  )}
                  <span
                    className={`font-mono text-xs font-bold mb-4 ${
                      s.featured ? "text-[#FF3D00]" : "text-[#FF3D00]"
                    }`}
                  >
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">{s.title}</h3>
                  
                  <ul
                    className={`mt-auto space-y-2 border-t-2 pt-5 ${
                      s.featured ? "border-white/20" : "border-[#0D0D0D]/10"
                    }`}
                  >
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 bg-[#FF3D00]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}