import { FaGithub, FaInstagram } from "react-icons/fa";
import Header from "./Header";
import { FaBagShopping, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import profile from "../images/profile_round.png";
import Social_midias from "./Social_midias";
import BtnDown from "./BtnDown";
import Titulo from "./Titulo";



export default function Home() {
    return (
        <main className="w-full h-screen">
            <Header />
            <section id="home" className="md:my-40 my-32 max-w-5xl md:px-6 px-4 m-auto grid md:grid-cols-2 gap-6">
                <section className="w-full flex flex-col gap-4 col-span-1">
                    <span className="p-2 rounded-2xl text-blue-300/80 w-fit  text-sm" style={{ background: '#090950' }}>
                        .Disponível para Freelancer
                    </span>
                    <Titulo text="Ola! Eu Sou Epifânio" atributos={`text-4xl font-semibold`}/>
                    <Titulo text="Frontend Developer" atributos={`text-blue-500 text-3xl`} />
                    
                    <article className="text-gray-400 space-y-5">
                        <p className="tracking-[1px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum id illo odio architecto eligendi, error eos repellat eum perspiciatis optio, inventore sunt doloribus dolorum hic ratione velit autem debitis!
                        </p>
                        <p className="flex items-center gap-4 text-sm tracking-[1px]">
                            <span className="flex items-center gap-1">
                                <FaLocationDot />
                                Luanda, Angola
                            </span>
                            <span className="flex items-center gap-1">
                                <FaBagShopping />
                                Disponível para trabalhar.
                            </span>
                        </p>
                    </article>
                    <a href="#" download={""}>
                        <BtnDown />
                    </a>
                    <article className="flex items-center gap-3 border-t border-indigo-500/50 py-4">
                        <span className="text-sm tracking-[1px]">
                            Acompanha-me:
                        </span>
                        <Social_midias />
                    </article>
                </section>
                <section className="col-span-1">
                    <Image src={profile} alt="Profile" estilo={`p-2 md:p-4 rounded-3xl`}/>
                </section>
            </section>
        </main>
    )
}