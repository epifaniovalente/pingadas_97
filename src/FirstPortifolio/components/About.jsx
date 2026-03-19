import Image from "./Image";
import profile from "../images/profile_round.png"
import Titulo from "./Titulo";

export default function About() {
    return (
        <main className="w-full">
            <section id="about" className="md:my-40 my-32 max-w-5xl md:px-6 px-4 m-auto">


                <section className="mb-16">
                    <article className="flex items-center gap-3">
                        <div className="w-11 h-11">
                            <Image src={profile} estilo={`p-0 rounded-full pt-1 shadow-xs`} />
                        </div>
                        <div>
                            <span className="text-xs text-indigo-400">@Epifânio</span>
                            <p className="text-sm text-gray-400">
                                Frontend Developer
                            </p>
                        </div>
                    </article>
                </section>

                <section className="flex gap-16 md:flex-row flex-col items-center">
                    <section>

                        <article className="text-gray-400 space-y-3">
                            <Titulo text="Sobre mim" atributos={`text-2xl text-indigo-600 uppercase font-medium`}/>
                            
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus nostrum magni?</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste rem voluptate, repellat consectetur earum.
                            </p>
                            <ul className="space-y-4 list-inside">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <li>
                                    <span className="text-sm text-indigo-600">
                                        #
                                    </span>
                                    Figma para UX/UI design
                                </li>
                                <li>
                                    <span className="text-sm text-indigo-600">
                                        #
                                    </span>
                                    HTML, CSS, JS, Tailwind e React para desenvolvimento frontend.
                                </li>
                                <li>
                                    <span className="text-sm text-indigo-600">
                                        #
                                    </span>
                                    Creating projectos pessoal e explorando novas tecnologias para expandir meu portifolio
                                </li>

                            </ul>

                        </article>
                    </section>
                    <article className="w-2xs">
                        <Image src={profile} estilo={`rounded-xl p-1`} />
                    </article>
                </section>
            </section>
        </main>
    )
}