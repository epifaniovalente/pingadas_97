import { useEffect, useState } from 'react';
import { SectionHead } from '../SectionHead/SectionHead';
import { projects } from '../../data/Projects';
import { FiArrowUpRight } from 'react-icons/fi';

export const ProjectSection = () => {
  const [projectos, setProjectos] = useState([]);
  useEffect(() => {
    function getProjectos(data) {
      setProjectos(data);
    }
    getProjectos(projects);
  }, []);

  return (
    <section className="px-6 py-20 bg-[#F5F5F5] border-y-4 border-[#0D0D0D]">
      <div className="mx-auto max-w-5xl">
        <SectionHead n="03" label="Projetos selecionados" />
        <div className="grid gap-4 sm:grid-cols-2">
          {projectos.map((p) => (
            <div
              key={p.n}
              className={`group relative bg-white border-2 border-[#0D0D0D] p-7 transition-colors hover:bg-[#0D0D0D] hover:text-white ${
                p.big ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs font-bold text-[#FF3D00]">
                  {p.n} &middot; {p.year}
                </span>
                <FiArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100" />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FF3D00] mb-2">
                {p.tag}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-3">
                {p.title}
              </h3>
              <p className="max-w-md text-sm text-current/70 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
