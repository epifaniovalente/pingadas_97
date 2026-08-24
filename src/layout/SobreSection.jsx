import { BiUserCheck } from 'react-icons/bi';
import { SectionTitle } from '../components/sectionTitle/SectionTitle';
import style from './styleAbout.module.css';
import Logo from '../components/Logo/Logo';
import SocialMedia from '../components/socialMedia/SocialMedia';

export const SobreSection = () => {
  return (
    <div className="bg-cyan-50">
      <main className="max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        <SectionTitle text="Sobre Mim" />
        <section className="flex items-center gap-4 mt-4">
          {/* SOBRE MIM CONTENT */}
          <article className="rounded-2xl py-8 p-4 flex flex-col gap-3">
            <BiUserCheck className="w-6 h-6 ml-2"/>
            <h3 className="font-serif font-medium text-lg text-cyan-700">Por trás do codigo Existe uma pessoa</h3>
            <p className="text-xs ml-2 text-gray-600">
              Sou técnico de Informática e Desenvolvedor Web, interessado em
              tecnologia, desenvolvimento de sistemas e resolução de problemas
              através de soluções digitais
            </p>
            <SocialMedia/>
          </article>
          <article className={`${style.about} relative min-w-1/2 h-72 rounded-2xl overflow-hidden`}>
            <div className="absolute backdrop-blur-[2px] w-full bottom-0 p-2">
              <Logo/>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};
