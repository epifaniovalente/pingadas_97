import { CiSettings } from 'react-icons/ci';
import { SectionTitle } from '../components/sectionTitle/SectionTitle';
import { RiReactjsFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';

const servicos = [
  {
    id: '01',
    title: 'Aplicações Web',
    descricao:
      'Sistemas personalizados para automatizar processos e organizar informações.',
  },
  {
    id: '02',
    title: 'Desenvolvimento Web',
    descricao:
      'Websites modernos, responsivos para apresentar marcas, negócios e projectos. ',
  },
  {
    id: '03',
    title: 'Integração de APIs ',
    descricao:
      'Ligacão entre aplicações, serviços e base de dados através de APIs ',
  },
  {
    id: '04',
    title: 'Manutenção e melhoria',
    descricao:
      'Correcao de problemas, melhoria de interfaces e evolução de sistemas existentes.',
  },
];

export const ServiceSection = () => {
  return (
    <main className="bg-slate-950">
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-1 text-white relative p-4 overflow-hidden">
          <SectionTitle text="Servicos" />
          <CiSettings className="text-white h-7 w-7 z-20" />
          <code className="absolute text-9xl uppercase font-serif opacity-10 z-10 text-cyan-400">
            Programação
          </code>
        </div>

        <section className="text-gray-600 flex flex-wrap gap-3 justify-center">
          {servicos.map((servico) => (
            <article
              key={servico.id}
              className="min-w-56 max-w-60 flex-1 p-2 rounded-lg border-r border-b border-gray-800 flex flex-col gap-3"
            >
              <h4 className="text-gray-100 font-serif font-medium">
                {servico.title}
              </h4>
              <p className="text-sm">{servico.descricao}</p>
            </article>
          ))}
        </section>
        <section className="border-t border-slate-800">
          <article className="text-gray-100 flex flex-wrap gap-3 justify-center">
            <div className="flex flex-col gap-0.5 items-center justify-center min-w-56 max-w-60 flex-1 p-4">
              <RiReactjsFill className="w-7 h-7"/>
              <span className="text-xs text-gray-600">Front-end</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center justify-center min-w-56 max-w-60 flex-1 p-4">
              <FaNodeJs className="w-7 h-7"/>
              <span className="text-xs text-gray-600">Back-end</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center justify-center min-w-56 max-w-60 flex-1 p-4">
              <SiExpress className="w-7 h-7"/>
              <span className="text-xs text-gray-600">Rotas</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center justify-center min-w-56 max-w-60 flex-1 p-4">
              <SiMysql className="w-7 h-7"/>
              <span className="text-xs text-gray-600"> Persistência</span>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};
