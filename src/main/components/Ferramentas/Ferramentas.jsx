import { useEffect, useState } from 'react';

const MinhasFerramentas = [
  'MySQL',
  'React',
  'Tailwind CSS',
  'Git & GitHub',
  'Node.js',
  'Express',
  'Prisma',
  'PHP',
  'Figma',
];

export const Ferramentas = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    function getTools(data) {
      setTools(data);
    }
    getTools(MinhasFerramentas);
  }, []);

  return (
    <section className="px-6 py-16 border-y-4 border-[#0D0D0D]">
      <div className="mx-auto max-w-5xl flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF3D00] mr-2">
          Técnologias & Ferramentas
        </span>
        {tools.map((tool) => (
          <span
            key={tool}
            className="border-2 border-[#0D0D0D] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};
