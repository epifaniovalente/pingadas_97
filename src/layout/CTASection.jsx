import { BiCheckCircle, BiSend } from 'react-icons/bi';
import Logo from '../components/Logo/Logo';
import { SectionTitle } from '../components/sectionTitle/SectionTitle';

export const CTASection = () => {
  return (
    <main className="bg-cyan-50">
      <section className="flex items-center justify-center max-w-2xl mx-auto">
        <article className="bg-white text-xs flex-1 p-3 flex flex-col gap-3 h-60">
          <Logo />
          <h3 className="text-lg font-serif font-medium">
            Tem uma ideia? Vamos tranforma-la em algo real.
          </h3>
          <div>
            <p>Precisa de:...</p>
            <span className="flex items-center gap-0.5 text-gray-500">
              <BiCheckCircle className="text-green-500 items-center gap-0.5" />
              website
            </span>
            <span className="flex items-center gap-0.5 text-gray-500 ">
              <BiCheckCircle className="text-green-500 items-center gap-0.5" />
              aplicação web
            </span>
            <span className="flex items-center gap-0.5 text-gray-500 ">
              <BiCheckCircle className="text-green-500 items-center gap-0.5" />
              solução para o seu projecto
            </span>
          </div>
          <p className="text-center font-medium bg-slate-950 text-gray-50 p-1 w-fit mx-auto">Vamos Conversar!</p>
        </article>
        {/* ========== FORMULARIO =========== */}
        <article className="bg-slate-900 flex-1 h-60">
          <form action="" className="flex flex-col gap-3 p-3">
            <BiSend className="h-5 w-5 text-cyan-400 -rotate-45" />

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs text-gray-500 font-medium"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className=" text-gray-300 text-sm border-b border-gray-400 p-1 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="texto"
                className="text-xs text-gray-500 font-medium"
              >
                Menssagem
              </label>
              <textarea
                name="texto"
                id="texto"
                rows="5"
                className="max-h-16 text-gray-300 text-sm border border-gray-400 p-1 outline-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-blue-50 cursor-pointer text-slate-900 font-medium"
            >
              Enviar
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};
