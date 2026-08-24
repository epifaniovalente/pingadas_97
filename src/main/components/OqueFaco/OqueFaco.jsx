import { useEffect, useState } from "react";
import { oqueFaco } from "../../data/oqueFaco";
import { SectionHead } from "../SectionHead/SectionHead";

export const OqueFaco = () => {
  
  const [fazers, setFazeres]=useState([])
  useEffect(() => {
    function getOqueFaco(data) {
      setFazeres(data)
    }
    getOqueFaco(oqueFaco)
  }, [])
  

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHead n="02" label="O que faço" />
        <div className="grid divide-y-2 divide-[#0D0D0D] border-y-2 border-[#0D0D0D] sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 lg:grid-cols-3">
          {fazers.map((item) => (
            <div key={item.n} className="p-6">
              <span className="font-mono text-xs font-bold text-[#FF3D00]">
                {item.n}
              </span>
              <h3 className="font-display mt-2 text-xl font-bold uppercase">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#0D0D0D]/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
