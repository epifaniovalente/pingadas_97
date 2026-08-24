import { useEffect, useState } from 'react';
import { SectionTitle } from '../components/sectionTitle/SectionTitle';
import websitesimage from '../assets/emdev.png';
import aplicacoesimage from '../assets/Server-amico.png';
import solucoesImage from '../assets/Innovation-bro.png';

const tasks = [
  {
    id: 1,
    title: 'Websites',
    image: websitesimage,
    descricao:
      'Criação de websites modernos, responsivos, e adaptados àsnecessidades de pessoas, marcas e empresas.',
  },
  {
    id: 2,
    title: 'Aplicação Web',
    image: aplicacoesimage,
    descricao:
      'Desenvolvimento de sistemas web com interfaces funcionais,organização de dados e integração com APIs',
  },
  {
    id: 3,
    title: 'Soluções digitais',
    image: solucoesImage,
    descricao:
      'Transformação de necessidades reais em soluções tecnológicas simples, eficientes e fáceis de utilizar.',
  },
];

export const OqueFacoSection = () => {
  const [actividades, setActividades] = useState([]);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setErro('');
    try {
      function getTasks(tasks) {
        setActividades(tasks);
      }

      getTasks(tasks);
    } catch (error) {
      setErro(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="bg-white w-full ">
      <section className="flex flex-col gap-4 max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        <SectionTitle text="O Que Faço" />
        {/* <p>{actividades.length}</p> */}
        <section className="flex items-center flex-wrap gap-3 justify-center mt-4">
          {loading ? (
            <span>Carregando</span>
          ) : (
            actividades.map((task) => (
              <article
                key={task.id}
                className="min-w-56 flex-1 max-w-2xs max-h-80 p-1 rounded-lg"
              >
                <div className="overflow-hidden rounded-xl h-40 bg-white">
                  <img
                    src={task.image}
                    alt="image Oque faço"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-1">
                  <h3 className="text-slate-900 text-sm font-medium">{task.title}</h3>
                  <p className="text-[#64748b] text-xs">{task.descricao}</p>
                </div>
              </article>
            ))
          )}
          {erro && (
            <span className="bg-red-100 ring ring-red-400 p-3 text-red-600 font-medium text-center text-sm rounded-xl">
              {erro}
            </span>
          )}
        </section>
      </section>
    </main>
  );
};
