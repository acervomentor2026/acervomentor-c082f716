import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, Laptop, Users, Sparkles, ArrowRight } from "lucide-react";
import { Section, Card, CheckList, CtaBand, WHATSAPP } from "@/components/site";
import op01 from "@/assets/op01.jpg.asset.json";
import op03 from "@/assets/op03.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acervo Mentor | Artefatos de Contratação com IA Vertical" },
      { name: "description", content: "Capacitação prática em DFD, ETP, TR, Mapa e Matriz de Riscos com IA Vertical. Salvador, 1 a 3 de dezembro de 2026." },
      { property: "og:title", content: "Acervo Mentor | Artefatos de Contratação com IA Vertical" },
      { property: "og:description", content: "Imersão presencial de 24h com o Prof. Paulo Sérgio Gomes e mentoria pós-curso." },
    ],
  }),
  component: Index,
});

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function Index() {
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Imersão presencial · 24h
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Artefatos de Contratação <span className="text-gradient">com IA Vertical</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Capacitação prática na elaboração de DFD, ETP, TR, Mapa e Matriz de Riscos, Requerimento, Motivação e Justificativa de Licitação e Contratação Direta — com curadoria de conhecimento, acervo especializado e Inteligência Artificial Vertical.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-primary px-7 py-3 font-semibold text-primary-foreground shadow-premium">Quero me inscrever</a>
              <Link to="/metodologia" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-semibold hover:bg-secondary">
                Ver metodologia <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
              {[
                { i: Calendar, t: "1º, 2 e 3 dez 2026" },
                { i: MapPin, t: "Salvador – Bahia" },
                { i: Clock, t: "8h–12h · 13h30–17h30" },
              ].map(({ i: I, t }) => (
                <div key={t} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2.5">
                  <I className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>
          <img src={op03.url} alt="Cartaz do treinamento prático em artefatos de contratação" className="mx-auto w-full max-w-sm rounded-3xl border border-border shadow-premium" />
        </div>
      </section>

      <Section eyebrow="Conceito e filosofia didática" title="Segurança na fase preparatória das contratações">
        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-lg text-muted-foreground">
            O curso foi desenhado para eliminar a insegurança dos servidores públicos na fase preparatória das contratações. A metodologia une curadoria de conhecimento jurídico e técnico, exegese e hermenêutica colaborativa em tempo real e construção guiada de artefatos, garantindo um alto índice de retenção e aplicação prática imediata.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Inédito e singular", "Metodologia exclusiva em 3 jornadas de aprendizagem."],
              ["Intelectual e prática", "Une teoria, interpretação crítica e aplicação real."],
              ["Mão na massa", "Cada aluno pratica diretamente em seu próprio laptop."],
              ["Guiado pelo professor", "Acompanhamento próximo do Prof. Paulo Sérgio Gomes."],
            ].map(([t, d]) => (
              <Card key={t} className="p-5">
                <p className="font-semibold text-primary">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Para quem é" title="Público-alvo">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Card>
            <div className="mb-4 flex items-center gap-2 font-semibold"><Users className="h-5 w-5 text-primary" /> Indicado para</div>
            <CheckList items={[
              "Servidores públicos das áreas de licitações, compras e contratos.",
              "Gestores e técnicos de secretarias municipais, estaduais e órgãos da União.",
              "Advogados e consultores especializados em direito administrativo e licitações.",
              "Profissionais que desejam dominar a Lei nº 14.133/2021 e aplicar seus instrumentos de planejamento com segurança.",
            ]} />
          </Card>
          <Card className="border-primary/40">
            <div className="mb-3 flex items-center gap-2 font-semibold"><Laptop className="h-5 w-5 text-primary" /> Recurso obrigatório</div>
            <p className="text-muted-foreground">É obrigatório o aluno ter <strong className="text-foreground">laptop / notebook</strong> para uso em sala de aula durante o curso.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Duração e cronograma" title="3 dias de imersão + mentoria">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Dia 1 · Terça", "Jornada 1 – O Acervo", "Curadoria de conhecimento: infraestrutura, fundamentos, fontes e IA."],
            ["Dia 2 · Quarta", "Jornada 2 – Exegese e Hermenêutica", "Chat interativo e oficinas de casos."],
            ["Dia 3 · Quinta", "Jornada 3 – Construção Prática", "Estúdio de artefatos, mão na massa com notebook."],
            ["Pós-curso", "Mentoria Virtual", "Acesso ao NotebookLM Pro, curadoria, acervo atualizado e mentoria assíncrona — até 12 meses."],
          ].map(([d, t, x]) => (
            <Card key={d}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{d}</p>
              <p className="mt-2 font-display text-lg font-bold">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{x}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Investimento" title="Monetização e precificação">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/40 shadow-premium">
            <p className="text-sm text-muted-foreground">Valor mensal individual por servidor matriculado</p>
            <p className="mt-2 font-display text-5xl font-bold text-gradient">R$ 2.513,75</p>
            <p className="mt-1 text-xs text-muted-foreground">(dois mil quinhentos e treze reais e setenta e cinco centavos)</p>
            <p className="mt-6 font-semibold">O preço remunera três componentes:</p>
            <div className="mt-3">
              <CheckList items={[
                <><strong className="text-foreground">Curadoria e Acervo</strong> – preparação e organização do material didático.</>,
                <><strong className="text-foreground">Treinamento Presencial</strong> – 3 dias consecutivos, terça, quarta e quinta (24 horas-aula).</>,
                <><strong className="text-foreground">Mentoria Virtual Assíncrona</strong> – acesso durante 1 (um) mês após o treinamento presencial.</>,
              ]} />
            </div>
          </Card>
          <Card>
            <p className="font-semibold">Condição de pagamento</p>
            <p className="mt-2 text-muted-foreground">Pagamento antecipado, calculado multiplicando o valor mensal individual pelo número de servidores matriculados e pelo total de meses contratados.</p>
            <div className="mt-5 rounded-xl bg-secondary p-4 text-center font-mono text-sm">
              Valor Total = R$ 2.513,75 × nº de servidores × nº de meses
            </div>
            <p className="mt-6 font-semibold">Exemplos por servidor</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              {[3, 6, 12].map((m) => (
                <div key={m} className="rounded-xl border border-border p-3">
                  <p className="text-xs text-muted-foreground">{m} meses</p>
                  <p className="mt-1 font-bold text-primary">{brl(2513.75 * m)}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Estrutura flexibilizada" title="Duração de 1 a 12 meses, com prorrogação">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="font-semibold text-primary">Curadoria e Acervo Atualizado</p>
            <p className="mt-2 text-sm text-muted-foreground">Atualização mensal do acervo (legislação, jurisprudência, doutrina e boas práticas), com acesso às fontes mais recentes e relevantes.</p>
          </Card>
          <Card>
            <p className="font-semibold text-primary">Suporte Permanente</p>
            <p className="mt-2 text-sm text-muted-foreground">Atendimento contínuo para dúvidas técnicas e administrativas e orientações práticas sobre a Lei nº 14.133/2021.</p>
          </Card>
          <Card>
            <p className="font-semibold text-primary">Mentoria Virtual Assíncrona</p>
            <p className="mt-2 text-sm text-muted-foreground">Acompanhamento remoto durante todo o prazo via NotebookLM Pro, com feedback, correções e orientações personalizadas.</p>
          </Card>
        </div>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
          <img src={op01.url} alt="Cartaz do curso Artefatos de Contratação com IA Vertical" className="mx-auto w-full max-w-xs rounded-3xl border border-border shadow-card" />
          <Card>
            <p className="font-semibold">Vantagens da flexibilidade</p>
            <div className="mt-4">
              <CheckList items={[
                "Segurança e respaldo técnico-jurídico para elaborar DFDs, ETPs, TRs, Matrizes de Riscos e demais artefatos.",
                "Adaptação orçamentária conforme a capacidade financeira e as necessidades institucionais.",
                "Escalabilidade: iniciar com menor prazo e prorrogar conforme resultados e demandas.",
                "Segurança jurídica: contrato prorrogável conforme a legislação vigente.",
                "Previsibilidade: pagamento antecipado, sem surpresas financeiras.",
              ]} />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">A flexibilidade é, sobretudo, pedagógica e prática: garante ao aluno o apoio necessário para aplicar o conhecimento na elaboração dos instrumentos de planejamento.</p>
          </Card>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
