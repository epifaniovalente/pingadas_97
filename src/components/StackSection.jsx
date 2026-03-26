import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const ease = [0.2, 0, 0, 1];

const techs = [
    {
        name: "HTML5",
        icon: <FaHtml5 className="text-red-600"/>
    },
    {
        name: "CSS3",
        icon: <FaCss3 className="text-blue-400"/>
    },
    {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400"/>
    },
    {
        name: "React",
        icon: <FaReact className="text-cyan-600"/>
    },
    {
        name: "Tailwind CSS",
        icon: <FaBootstrap className="text-blue-400"/>
    },
    {
        name: "Git",
        icon: <FaGit className="text-purple-600"/>
    },
    {
        name: "Figma",
        icon: <FaFigma className="text-orange-500"/>
    },
];

export default function StackSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3 block">
                        Stack
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-100">
                        Tecnologias & ferramentas
                    </h2>
                </motion.div>

                <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {
                        techs.map((tech) => (
                            <motion.article
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.06, ease }}
                                whileHover={{ scale: 1.03 }}
                                className="group card-surface-hover rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 cursor-default">

                                <span className="text-3xl sm:text-4xl  group-hover:scale-95 transition-all duration-300">
                                    {tech.icon}
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-gray-500 transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </motion.article>
                        ))
                    }
                </section>
            </div>
        </section>
    )
}