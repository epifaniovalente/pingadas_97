import { motion, inView, useInView } from "framer-motion"
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import byteShop from "../images/byteShop.png"

const ease = [0.2, 0, 0, 1];

const projectos = [
    {
        titulo: "Voz Segura - Plataforma de Denúncia Anônima",
        descricao: "Sistema web desenvolvido como projeto acadêmico que permite estudantes realizarem denúncias de forma anônima dentro do ambiente escolar, garantindo privacidade e segurança das informações.",
        techs: ["HTML", "CSS", "JavaScript","PHP","MySQL"],
        ano: "2025",
        image: ""
    },
    {
        titulo: "ByteShop – Loja Virtual",
        descricao: "Interface de uma loja virtual desenvolvida para praticar construção de layouts modernos, organização de produtos e experiência do usuário.",
        techs: ["HTML", "TailwindCSS", "JavaScript"],
        ano: "2024",
        image: {byteShop}
    },
    {
        titulo: "Simulação de Redes",
        descricao: "Projeto acadêmico de configuração e simulação de redes locais utilizando ferramentas de laboratório virtual.",
        techs: ["Cisco Packet Tracer", " Redes TCP/IP"],
        ano: "2024/25",
        image: "#"
    },
    {
        titulo: "Oficina AutoStar - Projeto para uma Mecânica",
        descricao: "Projeto técnico relacionado à área de mecânica, desenvolvido para demonstrar compreensão de sistemas mecânicos e aplicação prática de conceitos técnicos.",
        techs: ["React", "Tailwind"],
        ano: "2024/25",
        image: "#"
    }
]

function ProjectCard({ projectos }) {
    return (
        <main >
            <section className="relative overflow-hidden rounded-xl bg-background">
                
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {
                        projectos.map((projecto) => (
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: 0.1, ease }}
                                whileHover={{ y: -4 }}
                                className=" group relative rounded-2xl bg-gray-950 p-1 ring-2 ring-gray-800 shadow-2xl transition-shadow duration-300 hover:shadow-md">
                                <article className="relative overflow-hidden h-40 sm:h-48">
                                    <img
                                        src={projecto.image}
                                        alt={`Screenshot do projeto ${projecto.titulo}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </article>

                                <article className="p-5 sm:p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg sm:text-xl font-medium text-gray-100">{projecto.titulo}</h3>
                                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest shrink-0 ml-3">
                                            {projecto.ano}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-5">
                                        {projecto.descricao}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1.5">
                                            {projecto.techs.map((tag) => (
                                                <span key={tag} className="bg-gray-900/30 text-xs font-medium uppercase rounded-2xl ring ring-gray-800 text-gray-500 p-2">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {projecto.github && (
                                                <a href={project.github} className="p-2 rounded-lg hover:bg-card transition-colors">
                                                    <FaGithub className="w-4 h-4 text-gray-500" />
                                                </a>
                                            )}
                                            {projecto.link && (
                                                <a href={projecto.link} className="p-2 rounded-lg hover:bg-card transition-colors">

                                                    <FaExternalLinkAlt className="w-4 h-4 text-gray-500" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </motion.div>
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

export default function Project() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projecto" className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3 block">
                        Projetos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-100">
                        Trabalhos selecionados
                    </h2>
                </motion.div>
                <section>
                    <ProjectCard projectos={projectos} />
                </section>

            </div>
        

        </section>
    )
}