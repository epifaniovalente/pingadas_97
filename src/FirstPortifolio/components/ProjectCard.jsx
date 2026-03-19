import profile from "./../images/imgback_loading.jpg";

const projectos = [
    {
        id: 1,
        titulo: "Lorem ipsum dolor",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: { profile },
        techs: ["HTML", "CSS", "JS"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        titulo: "Lipsum orem dolor",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: { profile },
        techs: ["HTML", "Tailwind", "JS"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        titulo: "dolor Lorem ipsum ",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: { profile },
        techs: ["HTML", "Tailwind", "React"],
        github: "#",
        demo: "#"
    }
]



export default function ProjectCard() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {projectos.map((projects) =>
                <article className="p-6 rounded-3xl border border-indigo-900/30 shadow-xl group ">

                    <div className="overflow-hidden rounded-2xl mb-4">
                        <img src={projects.img} alt={projects.titulo} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <h3 className="text-indigo-200 text-xl font-bold mb-2">
                            {projects.titulo}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {projects.descricao}
                        </p>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            {projects.techs.map((tech) => (
                                <span className="px-3 py-1 bg-indigo-950/50 text-indigo-300 text-xs rounded-full border border-indigo-800/50" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <a href={projects.github} className="flex-1 bg-indigo-700 hover:bg-indigo-600 text-white text-center py-2 rounded-full text-sm transition-colors">
                                Repositório
                            </a>
                            <a href={projects.demo} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-center py-2 rounded-full text-sm transition-colors">
                                Live Demo
                            </a>
                        </div>
                    </div>


                </article>
            )}
        </section>
    )
}