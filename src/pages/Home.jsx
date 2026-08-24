import { FaCode } from 'react-icons/fa';
import  epicoder  from "../assets/codeSnap.png";
import Tituloh1 from '../components/TituloH1/Tituloh1';
import { OqueFacoSection } from '../layout/OqueFacoSection';
import { TechStackSection } from '../layout/TechStackSection';
import { SobreSection } from '../layout/SobreSection';
import { ProjectSection } from '../layout/ProjectSection';
import { TimelineSection } from '../layout/TimelineSection';
import { ServiceSection } from '../layout/ServiceSection';
import { BlogSection } from '../layout/BlogSection';
import { CTASection } from '../layout/CTASection';

const Home = () => {
  return (
    <main>
      <section className="relative max-w-4xl mx-auto min-h-screen px-4 py-4 sm:px-6 sm:py-6 flex gap-6">
        <article className="flex flex-col gap-2">
          <Tituloh1 text="Transformando Ideias em Experiências Digitais." />
            <p className="text-sm text-gray-500"> Desenvolvedor Web focado na criação de websites e aplicações 
          modernas, responsivas e funcionais.</p>

          <div className="flex gap-4 items-center p-2">
            <button type="button" className="bg-cyan-500 px-2 py-1 border-none outline-none">Ver projectos</button>
            <button type="button" className=" border-none outline-none ring-2 ring-cyan-900 px-2 py-1 ">Conhecer-me</button>
          </div>
        </article>

        <article className="">
          <img src={epicoder} alt="epicoder image" className=""/>
        </article>
      </section>
      <OqueFacoSection/>
      <TechStackSection/>
      <SobreSection/>
      <ProjectSection/>
      <TimelineSection/>
      <ServiceSection/>
      <BlogSection/>
      <CTASection/>
    </main>
  );
};

export default Home;
