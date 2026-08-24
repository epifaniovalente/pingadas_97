import { FaCopyright, FaHandPaper, FaRegHandPaper } from "react-icons/fa";
import Logo from "../Logo/Logo";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer(){
  return(
    <footer className="flex flex-col gap-4 p-4">
      <section className="flex items-center justify-between">
        <Logo/>
        <div className="text-slate-400 text-sm flex items-center gap-2">
          <span className="border-r border-slate-400 px-2">Jovem</span>
          <span className="border-r border-slate-400 px-2">Informático</span>
          <span className="px-2">Desenvolvedor Web</span>
        </div>
      </section>
      <section className="flex items-center justify-between">
        <SocialMedia/>
        <p className="flex items-center gap-1 text-gray-400 text-sm">
          <FaCopyright/> 2026 Meu Portfólio, git commit! <FaRegHandPaper className="text-gray-500"/>
        </p>
      </section>
    </footer>
  )
}