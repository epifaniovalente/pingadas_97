import { FaBlog, FaBookReader, FaCode } from "react-icons/fa";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import { FaLaptop } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

export const BlogSection=()=>{
  return(
    <main>
      <section className="flex flex-col gap-6 items-center justify-center text-gray-600 relative overflow-hidden">
        <SectionTitle text="Blog"/>
        <p className="text-center z-50">
          Descubra o mundo do desenvolvimento web através de artigos 
simples, práticos e educativos. Aqui partilho conhecimentos sobre 
programação, desenvolvimento de websites, tecnologias modernas e 
minha experiência como desenvolvedor
        </p>
        <button type="button" className="text-cyan-500 bg-slate-900 p-3 rounded-lg flex items-center justify-center cursor-pointer gap-0.5 z-50">
          Ver Blog <FaBlog/>
        </button>
        <FaBookReader className="absolute opacity-10 z-10 h-56 w-56 bottom-0 left-10"/>
        <FaLaptop className="absolute opacity-10 z-10 h-24 w-56 left-4"/>
        <FaCode className="absolute opacity-10 z-10 h-56 w-56 text-slate-900 top-7 -right-5 rotate-45"/>
      </section>
    </main>
  )
}