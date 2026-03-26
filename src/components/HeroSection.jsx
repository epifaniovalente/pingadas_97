import { motion } from "framer-motion"
import { FaArrowRight, FaDotCircle } from "react-icons/fa"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 text-gray-400">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-800/20 rounded-full blur-[120px] pointer-events-none">
            </div>
            <article className="relative max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-foreground/[0.08] bg-card/50 backdrop-blur-sm mb-6 sm:mb-8"
                >
                    <span className="text-[11px] sm:text-xs font-mono tracking-wide uppercase flex items-center gap-2">
                        <span className="text-emerald-500 animate-pulse"><FaDotCircle /></span>
                        Disponível para projetos
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [.2, 0, 0, 1] }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-5 sm:mb-6"
                >
                    Desenvolvendo interfaces de{" "}
                    <span className="text-blue-400">alta performance</span>{" "}
                    com foco em precisão <span className="text-blue-400">e usabilidade</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [.2, 0, 0, 1] }}
                    className="text-sm sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 px-2"
                >
                    Front-end Júnior em React, e Tailwind CSS.
                    Construo experiências digitais que combinam design e código de excelência.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [.2, 0, 0, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-white "
                >
                    <a
                        href="#projecto"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                    >
                        Ver Projetos
                    </a>
                    <a
                        href="#contacto"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ring-1 ring-gray-800 font-medium text-sm"
                    >
                        Discutir uma oportunidade
                    </a>
                </motion.div>

            </article>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2"
            >
                <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                </motion.div>
            </motion.div>

        </section>
    )
}