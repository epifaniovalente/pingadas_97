import { ServiceCard } from "./ServiceCard";
import Titulo from "./Titulo";

export function ServiceSection() {
    return (
        <section id="service" className="sm:my-40 my-32 max-w-5xl sm:px-6 px-4 m-auto space-y-6">
            <article className="text-center space-y-4">
                <p className="uppercase">Serviços</p>
                <Titulo text="Meus Recursos & Serviços" atributos={`text-2xl text-indigo-500`}/>
            </article>
            <article>
                <ServiceCard/>
            </article>
        </section>
    )
}