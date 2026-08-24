import {
  FaCss3,
  FaDrawPolygon,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNode,
  FaPhp,
  FaReact,
} from 'react-icons/fa';
import { SectionTitle } from '../components/sectionTitle/SectionTitle';
import { SiExpress, SiMysql, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { useEffect, useState } from 'react';
import { VscCode } from 'react-icons/vsc';
import style from './styleTechStack.module.css';

const techFrontend = [
  { id: 1, tech: 'HTML', icon: <FaHtml5 /> },
  { id: 2, tech: 'CSS', icon: <FaCss3 /> },
  { id: 3, tech: 'JavaScript', icon: <FaJs /> },
  { id: 4, tech: 'JavaScript', icon: <FaReact /> },
  { id: 5, tech: 'JavaScript', icon: <SiTailwindcss /> },
];

const techBackend = [
  { id: 1, tech: 'Node.js', icon: <FaNode /> },
  { id: 2, tech: 'Express', icon: <SiExpress /> },
  { id: 3, tech: 'prisma', icon: <SiPrisma /> },
  { id: 4, tech: 'PHP', icon: <FaPhp /> },
];

const techDatabase = [{ id: 1, tech: 'MySQL', icon: <SiMysql /> }];
const techTool = [
  { id: 1, tech: 'VS Code', icon: <VscCode /> },
  { id: 2, tech: 'Git & GitHub', icon: <FaGithub /> },
  { id: 3, tech: 'Figma', icon: <FaFigma /> },
  { id: 4, tech: 'Draw.io', icon: <FaDrawPolygon /> },
];

export const TechStackSection = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [database, setDatabase] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    function getFrontend(data) {
      setFrontend(data);
    }
    function getBackend(data) {
      setBackend(data);
    }
    function getDatabase(data) {
      setDatabase(data);
    }
    function getTools(data) {
      setTools(data);
    }

    getFrontend(techFrontend);
    getBackend(techBackend);
    getDatabase(techDatabase);
    getTools(techTool);
    // getTechs();
  }, []);

  return (
    <main>
      <section className="max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        <SectionTitle text="Tech Stack" />
        <span className="text-cyan-600 text-sm font-medium">
          {/* Tecnologias que utilizo. {frontend.length} */}
        </span>
        <section className="grid grid-cols-2 mt-4 gap-6">
          <section className={`${style.techs} relative rounded-2xl overflow-hidden`}>
            <div className="w-full h-full absolute backdrop-blur-[5px] flex items-center justify-center text-cyan-400 ">
              <p className=" font-medium font-serif text-lg">Tecnologias que utilizo</p>
            </div>
          </section>

          <section className=" flex flex-col gap-3 ">
            {/* ======== FRONTEND ========= */}
            <article className="w-full flex flex-col gap-1">
              <h3 className="font-serif font-semibold text-sm text-cyan-800">Front-end</h3>
              <section className="flex gap-2 justify-between">
              {frontend.map((tech)=>
              <article key={tech.id} className="flex items-center justify-between flex-col gap-1">
                <span className="h-6 w-6">{tech.icon} </span>
                <p className="text-[10px] text-gray-500"> {tech.tech}</p>
              </article>
              )}
              </section>
            </article>
            {/* ======== BACKEND ========= */}
            <article className="flex flex-col gap-1">
              <h3 className="font-serif font-semibold text-sm text-cyan-800">Back-end</h3>
              <section className="flex gap-2 justify-between">
              {backend.map((tech)=>
              <article key={tech.id} className="flex items-center justify-center flex-col gap-1">
                <span className="h-6 w-6">{tech.icon} </span>
                <p className="text-[10px] text-gray-500"> {tech.tech}</p>
              </article>
              )}
              </section>
            </article>
            {/* ======== DATABASE ========= */}
            <article className="flex flex-col gap-1">
              <h3 className="font-serif font-semibold text-sm text-cyan-800">Database</h3>
              <section className="flex gap-2 justify-between">
              {database.map((tech)=>
              <article key={tech.id} className="flex items-center justify-center flex-col gap-1">
                <span className="h-6 w-6">{tech.icon} </span>
                <p className="text-[10px] text-gray-500"> {tech.tech}</p>
              </article>
              )}
              </section>
            </article>
            {/* ======== FERRAMENTAS ========= */}
            <article className="flex flex-col gap-1">
              <h3 className="font-serif font-semibold text-sm text-cyan-800">Ferramentas</h3>
              <section className="flex gap-2 justify-between">
              {tools.map((tech)=>
              <article key={tech.id} className="flex items-center justify-center flex-col gap-1">
                <span className="h-6 w-6">{tech.icon} </span>
                <p className="text-[10px] text-gray-500"> {tech.tech}</p>
              </article>
              )}
              </section>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};
