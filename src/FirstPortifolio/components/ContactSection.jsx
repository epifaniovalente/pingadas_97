import { FaMailBulk } from "react-icons/fa";
import Titulo from "./Titulo";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { useState } from "react";
import Social_midias from "./Social_midias";
import { motion } from "framer-motion";

export function ContactSection() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [erro, setErro] = useState({});
    const [enviada, setEnviada] = useState(false)

    const validar = (e) => {
        e.preventDefault();
        let erros = {}

        if (name.length < 5) {
            erros.name = "Escreva seu nome, Por favor!"
        }

        if (email.length < 12) {
            erros.email = "Escreva seu e-mail corretamente."
        }

        if (message.length < 9) {
            erros.message = "Escreva sua mensagem..."
        }

        setErro(erros)

        if (Object.keys(erros).length === 0) {
            setName("")
            setEmail("")
            setMessage("")
            setEnviada(true)
        }
    }


    return (
        <section id="contact" className=" md:my-40 my-32 max-w-5xl md:px-6 px-4 m-auto space-y-6">
            <article>
                <Titulo text="Contacto" atributos={`text-2xl`} />
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.article
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true, amount:.3}}
                transition={{duration:.6}}
                 className="text-gray-400">
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga deserunt.
                    </p>

                    <ul className="list-inside space-y-2.5 p-2">
                        <li className="flex items-center gap-2">
                            <FaMailBulk className="text-2xl shadow text-indigo-600" />
                            <a href="mailto:epifaniovalente1@gmail.com">epifaniovalente1@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-2xl shadow text-indigo-600" />
                            <a href="tel:+244945474140">+244 945474140</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaLocationDot className="text-2xl shadow text-indigo-600" />
                            <span>Luanda, Angola</span>
                        </li>
                    </ul>

                    <Social_midias/>
                </motion.article>

                <motion.form
                
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true, amount:.3}}
                transition={{duration:.8}}
                 onSubmit={validar} className="text-gray-500 border border-indigo-950 shadow-md shadow-indigo-800 max-w-sm p-4 rounded-2xl flex flex-col gap-4">

                    {enviada &&
                        <p className="text-center text-emerald-400 animate-pulse"> Menssagem enviada, Obrigado!</p>
                    }

                    <div>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu Nome" className="outline-none border border-indigo-900 p-2 rounded-xl w-full" />
                        <span className="text-xs text-red-500 tracking-wide">{erro.name}</span>
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu-email" className="outline-none border border-indigo-900 p-2 rounded-xl w-full" />
                        <span className="text-xs text-red-500 tracking-wide">{erro.email}</span>
                    </div>
                    <div>
                        <textarea
                            id="message"
                            placeholder="Sua mensagem"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="outline-none border border-indigo-900 p-2 rounded-xl w-full max-h-24"></textarea>
                        <span className="text-xs text-red-500 tracking-wide">{erro.message}</span>
                    </div>

                    <button type="submit" className="outline-none border border-gray-800 p-2 rounded-xl max-w-1/2 cursor-pointer" >
                        Enviar Mensagem
                    </button>
                </motion.form>
            </div>


        </section>
    )
}