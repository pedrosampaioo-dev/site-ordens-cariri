import { useState } from 'react';
import { motion } from 'framer-motion';
import { Emblema, SectionLabel } from '../components/shared';

const inputCls =
  "w-full bg-carmesim-900/60 border border-ouro-500/25 focus:border-ouro-400 focus:bg-carmesim-900 text-amber-50 placeholder:text-amber-50/30 font-body text-base px-4 py-3 outline-none transition-colors focus:ring-1 focus:ring-ouro-400/40";

function Field({ label, children, full = false, required = false }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="font-display text-[10px] tracking-[0.35em] uppercase text-ouro-300/80">
        {label} {required && <span className="text-ouro-400">·</span>}
      </span>
      {children}
    </label>
  );
}

const fieldVariant = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    grau: "",
    ordem: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "696b4f6c-e6f2-4d65-a04a-c1a0e955c3f2");
    formData.append("subject", `Nova Petição de Ingresso - ${form.nome}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSent(true);
        setForm({ nome: "", email: "", telefone: "", grau: "", ordem: "", mensagem: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        alert("Erro: " + (data.message || "Não foi possível enviar os dados."));
      }
    } catch {
      alert("Algo deu errado. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-900 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.22 }} />

      {/* Brilho dourado central */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(230,191,82,0.06) 0%, transparent 60%)" }} />

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(10,2,3,0.5), transparent)" }} />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">

        {/* Box principal com animação de entrada */}
        <motion.div
          className="relative bg-carmesim-950 border border-ouro-500/30 p-6 sm:p-10 md:p-14"
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ boxShadow: "0 40px 120px -20px rgba(0,0,0,0.7), inset 0 0 80px rgba(122,18,22,0.06)" }}
        >
          {/* Cantos ornamentais SVG */}
          {[
            "top-0 left-0",
            "top-0 right-0 rotate-90",
            "bottom-0 right-0 rotate-180",
            "bottom-0 left-0 -rotate-90",
          ].map((pos, i) => (
            <svg
              key={i}
              viewBox="0 0 40 40"
              className={`absolute w-10 h-10 text-ouro-400 ${pos}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M0 14V0h14M0 8h6M8 0v6" />
            </svg>
          ))}

          {/* Cabeçalho do formulário */}
          <motion.div
            className="flex flex-col items-center text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Emblema size={88} ring={false} glow={false} />
            <SectionLabel>Petição</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ouro-300 mt-5 mb-4 leading-tight">
              Bater à porta do Templo
            </h2>
            <p className="font-serif italic text-amber-50/65 max-w-xl">
              Aquele que busca, primeiro escreve. Os Veneráveis avaliarão sua
              missiva com a discrição que a Tradição exige.
            </p>

            {/* Divisor ornamental */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-px bg-ouro-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-ouro-500/50 rotate-45" />
              <div className="w-12 h-px bg-ouro-500/30" />
            </div>
          </motion.div>

          {/* Formulário com campos animados */}
          <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <motion.div custom={0} variants={fieldVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Field label="Nome completo" required>
                <input
                  required
                  name="nome"
                  value={form.nome}
                  onChange={update("nome")}
                  className={inputCls}
                  placeholder="Como deseja ser chamado"
                />
              </Field>
            </motion.div>

            <motion.div custom={1} variants={fieldVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Field label="E-mail" required>
                <input
                  required
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className={inputCls}
                  placeholder="seu@email.com"
                />
              </Field>
            </motion.div>

            <motion.div custom={2} variants={fieldVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Field label="Telefone">
                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={update("telefone")}
                  className={inputCls}
                  placeholder="(88) 9 0000-0000"
                />
              </Field>
            </motion.div>

            <motion.div custom={3} variants={fieldVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Field label="Grau atual">
                <select name="grau" value={form.grau} onChange={update("grau")} className={inputCls}>
                  <option value="">— Selecione —</option>
                  <option>Profano (interessado)</option>
                  <option>Aprendiz</option>
                  <option>Companheiro</option>
                  <option>Mestre Maçom</option>
                  <option>Mestre da Marca</option>
                  <option>Nauta da Arca Real</option>
                  <option>Mestre Excelentíssimo</option>
                  <option>Sagrado Arco Real</option>
                  <option>Cavaleiro de Malta</option>
                  <option>Cavaleiro Templário</option>
                  <option>Sacerdote Cavaleiro Templário (KTP)</option>
                </select>
              </Field>
            </motion.div>

            <motion.div custom={4} variants={fieldVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-2">
              <Field label="Ordem de interesse" full>
                <select name="ordem" value={form.ordem} onChange={update("ordem")} className={inputCls}>
                  <option value="">— Selecione —</option>
                  <option>Ordem de Mestres Maçons da Marca</option>
                  <option>Ordem dos Nautas da Arca Real</option>
                  <option>Ordem do Sagrado Arco Real de Jerusalém (SAR)</option>
                  <option>Ordem dos Cavaleiros de Malta</option>
                  <option>Ordem dos Cavaleiros Templários</option>
                  <option>Ordem dos Sacerdotes Cavaleiros Templários (KTP)</option>
                  <option>Outras / Geral</option>
                </select>
              </Field>
            </motion.div>

            <motion.div custom={5} variants={fieldVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-2">
              <Field label="Mensagem" full>
                <textarea
                  name="mensagem"
                  rows={5}
                  value={form.mensagem}
                  onChange={update("mensagem")}
                  className={inputCls + " resize-none"}
                  placeholder="Conte-nos brevemente sua motivação..."
                />
              </Field>
            </motion.div>

            {/* Botão de envio */}
            <motion.div
              className="md:col-span-2 flex flex-col items-center gap-4 pt-4"
              custom={6}
              variants={fieldVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-b from-ouro-300 via-ouro-400 to-ouro-600 text-carmesim-950 font-display text-[11px] tracking-[0.45em] uppercase hover:from-ouro-400 hover:to-ouro-500 transition-all shadow-[0_8px_30px_-10px_rgba(230,191,82,0.6)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Shimmer */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                {loading ? "Enviando..." : "Enviar Petição"}
                {!loading && <span className="transition-transform group-hover:translate-x-1">→</span>}
              </button>

              {sent && (
                <motion.p
                  className="font-serif italic text-ouro-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✦ Sua missiva foi recebida. Em breve responderemos. ✦
                </motion.p>
              )}

              <p className="font-display text-[9px] tracking-[0.4em] uppercase text-amber-50/40">
                Sigilo absoluto · Resposta em até 7 dias
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
