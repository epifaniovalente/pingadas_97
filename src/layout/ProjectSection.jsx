import { SectionTitle } from '../components/sectionTitle/SectionTitle';

import byteShop  from '../assets/byteShop.png';
import autoStar  from '../assets/OficinaAutoStar.png';
import loading  from '../assets/imgback_loading.jpg';
import { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
// descricao:
//   'Sistema web desenvolvido como projeto acadêmico que permite estudantes realizarem denúncias de forma anônima dentro do ambiente escolar, garantindo privacidade e segurança das informações.',

const projectList = [
  {
    id:'01',
    titulo: 'GestBI Angola',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fugiat cupiditate maiores.',
    techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    year: '2025',
    image: loading,
  },
  {
    id:'02',
    titulo: 'ByteShop – Loja Virtual',
    descricao:
      'Desenvolvida para praticar construção de layouts modernos, organização de produtos e experiência do usuário.',
    techs: ['HTML', 'TailwindCSS', 'JavaScript'],
    year: '2024',
    image: loading
  },
  {
    id:'03',
    titulo: 'HelpDesk',
    descricao:
      'Ratione fugiat cupiditate maiores accusantium vero! Facilis numquam ducimus sequi dignissimos.',
    techs: ['Cisco Packet Tracer', ' Redes TCP/IP'],
    year: '2026',
    image: loading,
  },
  {
    id:'04',
    titulo: 'Emprega Angola',
    descricao:
      'Consectetur adipisicin. fugiat cupiditate maiores accusantium vero! Facilis numquam ducimus sequi .',
    techs: ['Cisco Packet Tracer', ' Redes TCP/IP'],
    year: '2026',
    image: loading,
  },
  {
    id:'05',
    titulo: 'Oficina AutoStar',
    descricao:
      'Relacionado à área de mecânica, desenvolvido para demonstrar compreensão de sistemas mecânicos e aplicação prática de conceitos técnicos.',
    techs: ['React', 'Tailwind', 'JavaScript'],
    year: '2025',
    image: loading,
  },
  {
    id:'06',
    titulo: 'SAF Consultoria',
    descricao:
      'Nulla corrupti, dolor quaerat veniam  accusantium, fugiat eaque voluptate dolorum odio nihil provident  .',
    techs: ['React', 'Tailwind', 'JavaScript'],
    year: '2025',
    image: loading,
  },
];

export const ProjectSection = () => {
  const [projectos , setProjectos]= useState([])

  useEffect(() => {
    function getProjects(data) {
      setProjectos(data)
    }
  getProjects(projectList)
  }, [])
  
  return (
    <main className="bg-gray-100">
      <section>
        <SectionTitle text="Projectos" />
        
        <section className="flex items-center justify-between gap-4 flex-wrap">
          {projectos&&(
            projectos.map((projecto)=>(
              <article key={projecto.id} className="bg-white  rounded-lg overflow-hidden min-w-64 h-96 max-w-72 ring ring-gray-200">
            {/* CARD PROJECT IMAGE */}
            <div className="h-40 w-full">
              <img src={projecto.image} alt={projecto.titulo}  className="object-cover w-full h-full"/>
            </div>
            {/* CARD PROJECT CONTENT */}
            <div className="p-2 flex flex-col  gap-2">
              <span className="text-xs font-medium text-blue-500">{projecto.year}</span>
              <h4 className="font-serif font-medium text-sm">{projecto.titulo}</h4>
              <p className="text-sm text-gray-500">{projecto.descricao}</p>
              <p className="flex items-center gap-1">{projecto.techs.map((tech)=>(<span className="text-blue-500 text-xs font-medium">{tech}</span>))}</p>
              <button type="button" disabled={true} className="relative bg-slate-950 text-cyan-500 p-2 rounded-lg w-full font-medium text-sm flex items-center justify-center gap-0.5 cursor-pointer">
                Visitar
                <FaLink className="text-gray-500"/>
                <span className="text-red-600 bg-rose-300 py-0.5 px-1 text-[10px] rounded-lg absolute -top-2 right-2">Indisponivel</span>
              </button>
            </div>
          </article>
            ))
          )}
        </section>
      </section>
    </main>
  );
};
