import { motion } from "framer-motion"
import { FaCode, FaDev, FaMobile, FaPaintBrush, FaPaintRoller } from "react-icons/fa"

const services = [
    {
        id: 1,
        icon: <FaCode className=""/>,
        titulo: "Desenvolvimento Web",
        descricao: "Lorem shgbsoijhosps",
        techs: ["Design Responsivo", "Performance e Otimização", "SEO Amigavez"],
    },
    {
        id: 2,
        icon: <FaMobile />, 
        titulo: "Desenvolvimento Movel",
        descricao: "Lorem shgbsoijhosps",
        techs: ["Usabilidade Amigavel", "Performance Nativa", "Cross Plataform"]
    },
    {
        id: 3,
        icon: <FaPaintBrush/>,
        titulo: "UI/UX Design",
        descricao: "Lorem shgbsoijhosps",
        techs: ["Centrado ao Usuario", "Design Moderno", "Acessibilidade"]
    }
]

export function ServiceCard() {
    return (
        <motion.section
        initial={{opacity:0, y:10}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount: .3}}
        transition={{duration:.6}}
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                services.map((servico) => (
                    <article className="p-6 rounded-3xl border border-indigo-900/30 shadow-xl group ">
                        <div className="overflow-hidden rounded-2xl mb-4 flex flex-col items-center gap-2.5">
                            <span className="text-4xl text-center ">
                                <p className="p-3 bg-indigo-500 w-fit rounded-full">{servico.icon}</p>
                                </span>
                            <h3 className="text-indigo-200 text-xl font-bold mb-2">
                                {servico.titulo}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {servico.descricao}
                            </p>
                            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                                {servico.techs.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-indigo-950/50 text-indigo-300 text-xs rounded-full border border-indigo-800/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))

            }
        </motion.section>
    )
}