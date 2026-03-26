import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCheck, FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { FaCircleArrowRight, FaMailchimp } from "react-icons/fa6";

const ease = [0.2, 0, 0, 1];

export default function Contacto() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [menssagem, setMenssagem] = useState("");
    const [erros, setErros] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [sucesso, setSucesso] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let erro = {};


        if (name.length < 6) {
            erro.name = "Nome é obrigatório!"
            setSucesso("")
        }
        if (email.length < 12) {
            erro.email = "Email invalido"
            setSucesso("")
        }
        if (menssagem.length < 12) {
            erro.menssagem = "Mensagem é obrigatória"
            setSucesso("")
        }

        setErros(erro)


        if (Object.keys(erro).length === 0) {
            setName("")
            setEmail("")
            setMenssagem("")
            setSucesso("Menssagem enviada com sucesso, Thanks!")
        }

    }

    return (
        <section id="contacto" className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <article className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3 block">
                        Contato
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-100 mb-4">
                        Vamos trabalhar juntos?
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
                        Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades
                        para fazer parte da sua equipe.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15, ease }}
                    className=" rounded-2xl p-6 sm:p-8 space-y-5 mb-8"
                >
                    <p className="text-green-500 text-center text-sm">
                        {
                            sucesso &&
                            <>{sucesso}</>
                        }
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label htmlFor="name" className="text-xs font-medium text-gray-100 uppercase tracking-wider">
                                Nome
                            </label>
                            <input id="name" name="name" type="text" value={name}
                                onChange={(e) => setName(e.target.value)}
                                maxLength={100} placeholder="O teu nome"
                                className={`w-full px-4 py-3 bg-slate-950/50 rounded-xl bg-background ring-1 text-sm text-gray-100 placeholder:text-gray-600/50 outline-none transition-all duration-300 ease-in-out focus:ring-blue-400/90 ${erros.name ? "ring-red-500/70" : "ring-gray-700/50"}`}
                            />
                            {erros.name && <p className="text-xs text-red-500">{erros.name}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-xs font-medium text-gray-100 uppercase tracking-wider">
                                Email
                            </label>
                            <input id="email" name="email" type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                maxLength={255} placeholder="email@exemplo.com"
                                className={`w-full px-4 py-3 bg-slate-950/50 rounded-xl bg-background ring-1 text-sm text-gray-100 placeholder:text-gray-600/50 outline-none transition-all duration-300 ease-in-out focus:ring-blue-400/90 ${erros.email ? "ring-red-500/70" : "ring-gray-700/50"}`}
                            />
                            {erros.email && <p className="text-xs text-red-500">{erros.email}</p>}
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="message" className="text-xs font-medium text-gray-100 uppercase tracking-wider">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={menssagem}
                            onChange={(e) => setMenssagem(e.target.value)}
                            maxLength={1000}
                            rows={5}
                            placeholder="Descreve o teu projeto ou ideia..."
                            className={`w-full px-4 py-3 bg-slate-950/50 rounded-xl bg-background ring-1 text-sm text-gray-100 placeholder:text-gray-600/50 outline-none transition-all duration-300 ease-in-out focus:ring-blue-400/90 resize-none ${erros.menssagem ? "ring-red-500/70" : "ring-gray-700/50"
                                }`}
                        />
                        {erros.menssagem && <p className="text-xs text-red-500">{erros.menssagem}</p>}

                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-blue-500 text-gray-100 font-medium text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
                    >
                        {
                            enviando ? (
                                <FaSpinner className="w-4 h-4 animate-spin" />
                            ) : enviado ? (
                                <FaCheck className="w-4 h-4" />
                            ) : (
                                <FaPaperPlane className="w-4 h-4" />
                            )
                        }
                        {enviando ? "A enviar..." : enviado ? "Enviado!" : "Enviar Mensagem"}
                    </button>
                </motion.form>
            </article>
        </section>

    )
}