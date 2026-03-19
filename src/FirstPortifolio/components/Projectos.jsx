import Titulo from "./Titulo";
import ProjectCard from "./ProjectCard";


export default function Projecto() {
   
    return (
        <main className="w-full h-full text-gray-400">
            <section id="project" className="md:my-40 my-32 max-w-5xl md:px-6 px-4 m-auto">
                <article className="text-center space-y-4">
                    <div>
                        <p className=" uppercase">Projectos</p>
                        <Titulo text="Categoria de Trabalho" atributos={`text-2xl text-indigo-500`} />
                    </div>
                    <div className="space-y-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                </article>

                <section className="">
                    <ProjectCard/>
                </section>
            </section>
        </main>
    )
}