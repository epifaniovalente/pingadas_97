import { useEffect, useState } from 'react';
import { SectionTitle } from '../components/sectionTitle/SectionTitle';
import { PiNumberCircleFive, PiNumberCircleFiveBold, PiNumberCircleFiveFill, PiNumberCircleFour, PiNumberCircleFourFill, PiNumberCircleOne, PiNumberCircleOneFill, PiNumberCircleSixFill, PiNumberCircleThree, PiNumberCircleThreeFill, PiNumberCircleTwo, PiNumberCircleTwoFill } from 'react-icons/pi';

const timeLine = [
  {
    id: '01',
    badge:<PiNumberCircleOneFill className="text-cyan-500 h-7 w-7"/>,
    passo: 'ENTENDER',
    content: 'Compreender o problema e os objetivos.',
  },
  {
    id: '02',
    badge:<PiNumberCircleTwoFill className="text-cyan-500 h-7 w-7"/>,
    passo: 'PLANEAR',
    content: 'Defino funcionalidade, estruturas e tecnologias..',
  },
  {
    id: '03',
    badge:<PiNumberCircleThreeFill className="text-cyan-500 h-7 w-7"/>,
    passo: 'PROJETAR',
    content: 'Crio a interface e a experiência do utilizador.',
  },
  {
    id: '04',
    badge:<PiNumberCircleFourFill className="text-cyan-500 h-7 w-7"/>,
    passo: 'Desenvolver',
    content: 'Transformo o projecto em código.',
  },
  {
    id: '05',
    badge:<PiNumberCircleFiveFill className="text-cyan-500 h-7 w-7"/>,
    passo: 'TESTAR',
    content: 'Verifico funcionalidade, erros e responsividade.',
  },
  {
    id: '06',
    badge:<PiNumberCircleSixFill className="text-cyan-500 h-7 w-7"/>,
    passo: 'ENTERGAR',
    content: 'Publico e preparo o prjecto para utilização.',
  },
];

export const TimelineSection = () => {
  const [LineCode, setLineCode] = useState([]);
  useEffect(() => {
    function getTimeline(data) {
      setLineCode(data);
    }
    getTimeline(timeLine);
  }, []);

  return (
    <main>
      <section>
        <SectionTitle text="Como Transformo Uma Ideia em Solução" />

        <section className="flex flex-col">
          {LineCode.map((line)=>(
            <div key={line.id} className="relative border-l-2 border-l-blue-300 pl-8 flex-1 flex flex-col gap-6">
            <span className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-white -left-[6px] top-1.5"></span>
            <article className="flex flex-col gap-2 bg-blue-100 rounded-2xl ">
              <span>{line.badge}</span>
              <h4 className="text-xs font-serif font-semibold ">{line.passo}</h4>
              <p className="text-gray-500 text-xs">
                {line.content}
              </p>
            </article>
          </div>
          ))}
        </section>
      </section>
    </main>
  );
};
