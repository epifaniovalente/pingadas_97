import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { FaBriefcase, FaFacebook, FaGraduationCap, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import profile_foto from "../assets/images/profile_round.png";
import SocialMidia from "./SocialMidia";

const ease = [0.2, 0, 0, 1]

const midiaSocial = [
    {href: "#", icon: <FaFacebook/>},

    {href:"#", icon: <FaInstagram/>}
]

const experience = [
    {
        role: "Desenvolviento Web Front-end",
        company: "....",
        period: "2024 — Presente",
        description: "Criação de layouts responsivos e interativos focados em boa experiência do usuário."
    },
    {
        role: "Versionamento de Código",
        company: "....",
        period: "2024 — Presente",
        description: "Criação e gerenciamento de respositórios para projectos e hospedagem de projectos para portifólio online."
    },
    {
        role: "Desenvolvimentos de Projectos Acadêmicos/Pessoais",
        company: "Colégio Jacimira",
        period: "2023 — 2025",
        description: "Desenvolvimento de aplicações web como parte das atividades práticas do curso & Planejamento e implementação de um sistema web como TCC.",
    },
    {
        role: "Base de Dados.",
        company: "Colégio Jacimira",
        period: "2024 — 2025",
        description: "Utilização de CRUD completo, estruturação de tabelas e gerenciamento.",
    },
    {
        role: "Redes de Computadores.",
        company: "Colégio Jacimira",
        period: "2023 — 2024",
        description: "Configurações de redes locais, endereçamento IP e sub-redes.",
    },
]

function AboutSection() {

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="sobre" className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <main className="max-w-5xl mx-auto">
                <article className="min-h-full flex items-center px-4 sm:px-6 ">
                    <motion.div

                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease }}
                        className="mb-12 sm:mb-16">
                        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3 block">
                            Sobre Mim
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-50">
                            Quem sou eu
                        </h2>
                    </motion.div>
                </article>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    <motion.section
                        initial={{ opacity: 0, x: -24 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                    >
                        <article className="relative group">
                            <div className="rounded-2xl flex items-center justify-center">
                                <img src={profile_foto} alt="foto de perfil" className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover ring-1 ring-gray-50/45 "
                                />
                            </div>

                        </article>
                        <article className="text-center lg:text-left">
                            <h3 className="text-xl font-medium text-gray-50 mb-1">Epifânio Valente</h3>
                            <p className="text-sm text-blue-500 font-mono mb-3">Front-end Developer</p>
                            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-gray-600">
                                <FaLocationDot className="w-3.5 h-3.5" />
                                <span className="text-xs">Luanda, Angola</span>
                            </div>
                            <div className="text-center">
                                <SocialMidia/>
                                
                            </div>
                        </article>

                    </motion.section>

                    <section className="lg:col-span-3 space-y-8">
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                            Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas, acessíveis, de alta performance e usabilidade intuitiva.
                            Com mais de 2 anos de experiência, especializo-me em transformar designs complexos em código limpo
                            e escalável usando React e Tailwind CSS. Acredito que um bom produto digital nasce da fusão entre design impecável e engenharia rigorosa... <strong className="text-blue-400">No Cap</strong>.
                        </p>
                        <article>
                            <div className="flex items-center gap-2 mb-6">
                                <FaBriefcase className="w-4 h-4 text-blue-700" />
                                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">Experiência</h4>
                            </div>

                            <div className="space-y-1">
                                {experience.map((exp, i) => (
                                    <motion.div
                                        key={exp.company}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: .3 }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                        className="group relative pl-6 pb-6 border-l border-gray-400 last:pb-0"
                                    >
                                        <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-card ring-2 ring-blue-500/40 group-hover:ring-blue-500 transition-all duration-300 ease-in-out"></div>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                                                <h5 className="text-sm font-medium text-gray-300">{exp.role}</h5>
                                                <span className="text-[11px] font-mono text-gray-400 tracking-wider">{exp.period}</span>
                                            </div>
                                            <p className="text-xs text-blue-600/80 font-medium mb-1">{exp.company}</p>
                                            <p className="text-sm text-gray-400 leading-relaxed">{exp.description}</p>
                                        
                                    </motion.div>
                                ))}
                            </div>
                        </article>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-950">

                            <FaGraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-300">
                                    Técnico Médio em Informática
                                </p>
                                <p className="text-xs text-gray-500">Colégio Jacimira — 2022</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    )
}

export default AboutSection