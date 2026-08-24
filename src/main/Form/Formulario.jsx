import { useState } from 'react';
import { motion } from 'framer-motion';
import { SocialMedia } from '../components/socialMedia/SocialMedia';
import { BigNumeral } from '../components/BigNumeral/BigNumeral';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { apiDM } from '../service/apiDM';
import { FaX } from 'react-icons/fa6';
import { BiCloudRain } from 'react-icons/bi';

export const Formulario = () => {
  const [enviado, setEnviado] = useState(null);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [message, setMessage] = useState('');
  const [infoGlobal, setInfoGlobal] = useState(null);
  const [fieldErros, setFieldError] = useState({});

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm();

  async function enviarDM(data) {
    try {
      const resposta = await apiDM('/message/dm', data);
      if (resposta.status === 200) {
        setInfoGlobal({
          type: 'sucesso',
          message: 'Obrigado, . Vou responder em breve pelo e-mail.',
        });
      }
    } catch (error) {
      if (error.response) {
        const { data, status } = error.response;
        if (status === 400 && data.error) {
          const errosFormated = {};
          data.error.forEach((element) => {
            errosFormated[element.campo] = element.message;
          });
          setFieldError(errosFormated);
        } else {
          setInfoGlobal({
            type: 'error',
            message: data.error || 'O servidor está Offline',
          });
        }
      } else {
        setInfoGlobal({
          type: 'error',
          message: data.error || 'Erro inseperado no servidor de comunicação.',
        });
      }
    }
  }

  return (
    <main className="px-6 py-20">
      <section className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden border-2 border-[#0D0D0D] md:grid-cols-2">
          {/* ======== Lado CTA ========= */}
          <article className="relative flex flex-col justify-center bg-[#FF3D00] p-8 md:p-12">
            <BigNumeral className="absolute -bottom-6 -right-2 text-[7rem] text-white/10">
              07
            </BigNumeral>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/80 mb-5">
              Vamos conversar
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase leading-tight text-white mb-4">
              Tem um projeto em mente?
            </h2>
            <p className="text-white/90 max-w-sm leading-relaxed">
              Conte um pouco sobre a ideia e eu respondo em at&eacute; 2 dias
              &uacute;teis com pr&oacute;ximos passos e prazo estimado.
            </p>
            <div className="my-8 flex flex-wrap gap-2">
              <span className="border-2 border-white/40 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-white">
                Resposta em 48h
              </span>
              <span className="border-2 border-white/40 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-white">
                Sem compromisso
              </span>
            </div>
            <SocialMedia />
          </article>

          {/* ===== Lado DO FORMULARIO QUANDO INFORMAÇÂO ENVIADA ===== */}
          <article className="border-t-2 border-[#0D0D0D] bg-white p-8 md:border-l-2 md:border-t-0 md:p-12">
            {infoGlobal ? (
              <article className="flex h-full flex-col items-center justify-center text-center">
                {infoGlobal.type === 'sucesso' ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <FaCheckCircle className="h-10 w-10 text-[#FF3D00] mb-4" />
                    <h3 className="font-display text-xl font-bold uppercase mb-2">
                      Mensagem enviada
                    </h3>
                    <p className="text-sm text-[#0D0D0D]/60 max-w-xs">
                      {infoGlobal.message}
                    </p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    {/* <FaX className="h-10 w-10 text-red-500 mb-4" /> */}
                    <BiCloudRain className="h-10 w-10 text-red-500 mb-4"/>
                    <h3 className="font-display text-xl font-bold uppercase mb-2">
                      Mensagem não enviada
                    </h3>
                    <p className="text-sm text-[#0D0D0D]/60 max-w-xs">
                      {infoGlobal.message}
                    </p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setInfoGlobal(null)}
                  className="inline-flex items-center justify-center gap-2 bg-[#0D0D0D] px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-white transition-colors cursor-pointe"
                >
                  Ok
                </button>
              </article>
            ) : (
              <form
                onSubmit={handleSubmit(enviarDM)}
                className="flex h-full flex-col gap-5"
              >
                <article>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-widest text-[#0D0D0D]/60"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('nome')}
                    disabled={isSubmitting}
                    placeholder="O seu nome"
                    className="w-full border-2 border-[#0D0D0D] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#0D0D0D]/30 focus-visible:border-[#FF3D00]"
                  />
                </article>

                <article>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-widest text-[#0D0D0D]/60"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    disabled={isSubmitting}
                    placeholder="voce@email.com"
                    className="w-full border-2 border-[#0D0D0D] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#0D0D0D]/30 focus-visible:border-[#FF3D00]"
                  />
                </article>

                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-widest text-[#0D0D0D]/60"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    disabled={isSubmitting}
                    rows={5}
                    placeholder="Conte um pouco sobre o projeto"
                    className="w-full flex-1 resize-none border-2 border-[#0D0D0D] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#0D0D0D]/30 focus-visible:border-[#FF3D00]"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#0D0D0D] px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#FF3D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00] cursor-pointer"
                >
                  {isSubmitting ? (
                    <FaSpinner
                      className="animate-spin duration-300 ease-in-out"
                      size={15}
                    />
                  ) : (
                    'Enviar mensagem'
                  )}
                </motion.button>
              </form>
            )}
          </article>
        </div>
      </section>
    </main>
  );
};
