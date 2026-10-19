import { createFileRoute } from "@tanstack/react-router";
import { Library, MessagesSquare, Hammer, GraduationCap } from "lucide-react";
import { PageHero, Section, Card, CheckList, CtaBand } from "@/components/site";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia em 3 Jornadas | Acervo Mentor" },
      { name: "description", content: "O Acervo, a Exegese e Hermenêutica e a Construção Prática: conheça as 3 jornadas e os 9 artefatos do curso." },
      { property: "og:title", content: "Metodologia em 3 Jornadas | Acervo Mentor" },
      { property: "og:description", content: "Aprendizagem analítica, elaborativa e crítica com IA Vertical e condução do Prof. Paulo Sérgio Gomes." },
    ],
  }),
  component: Metodologia,
});

const artefatos = [
  ["Resumo em Áudio", "Geração de podcasts com IA para síntese oral dos conteúdos."],
  ["Resumo em Vídeo", "Produção de vídeos explicativos apresentados por IA."],
  ["Apresentação de Slides", "Criação de apresentações visuais com IA para aulas e reuniões."],
  ["Mapa Mental", "Organização de ideias e conceitos em diagramas interativos."],
  ["Relatórios", "Elaboração de relatórios técnicos baseados no acervo curado."],
  ["Cartões Didáticos", "Criação de flashcards digitais para fixação de conceitos."],
  ["Testes Interativos", "Desenvolvimento de quizzes e avaliações com IA."],
  ["Infográficos", "Produção de representações visuais de processos e dados."],
  ["Tabela de Dados", "Geração de tabelas analíticas com base nas fontes do acervo."],
];

function Step({ n, title, items }: { n: number; title: string; items: string[] }) {
  return (
    <Card className="p-5">
      <p className="text-sm font-bold text-primary">{n}. {title}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </Card>
  );
}

function JourneyHead({ icon: Icon, n, title }: { icon: typeof Library; n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-premium"><Icon className="h-7 w-7" /></div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{n}</p>
        <h2 className="font-display text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
}

function Metodologia() {
  return (
    <>
      <PageHero eyebrow="Metodologia" title={<>Aprendizagem em <span className="text-gradient">3 Jornadas</span></>}>
        Três camadas de aprendizagem, cada uma com seu ritmo analítico, elaborativo e crítico, sempre com a condução direta do professor Paulo Sérgio Gomes.
      </PageHero>

      <Section>
        <JourneyHead icon={Library} n="1ª Jornada" title="O Acervo (Fontes de Conhecimento)" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <p className="text-muted-foreground">
            Antes do início das aulas, é organizado um acervo de conhecimento que servirá como base para todo o curso e para a mentoria pós-curso. Fruto da curadoria do professor Paulo Sérgio Gomes, esse material é disponibilizado em <strong className="text-foreground">cadernos digitais</strong>, que funcionam como fontes interativas para consulta e estudo em sala de aula e, depois, durante a mentoria.
          </p>
          <Card>
            <CheckList items={[
              "Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos)",
              "Decretos regulamentadores",
              "Portarias e normas da AGU",
              "Diretrizes do MGI",
              "Doutrina selecionada",
              "Jurisprudência do TCU e de outros tribunais",
              "Boas práticas de órgãos e poderes da União",
              "Conteúdo autoral (podcasts e e-books)",
            ]} />
          </Card>
        </div>
      </Section>

      <Section className="border-t border-border">
        <JourneyHead icon={MessagesSquare} n="2ª Jornada" title="A Exegese e Hermenêutica (Chat Interativo)" />
        <div className="mt-8 space-y-4 text-muted-foreground">
          <p>Esta segunda camada é o núcleo interpretativo e reflexivo do curso. O aluno mergulha no acervo curado e aprende a estudar, ler, compreender, interpretar e aplicar a Lei nº 14.133/2021 e seus instrumentos correlatos (DFD, ETP, TR, Mapa e Matriz de Riscos), utilizando o chat interativo ao vivo como ambiente de diálogo e construção de sentido — podendo gerar os artefatos em Word e Excel prontos para download.</p>
          <p>O método combina <strong className="text-foreground">exegese</strong> (análise textual) e <strong className="text-foreground">hermenêutica</strong> (interpretação contextual), aplicadas à legislação, doutrina e jurisprudência. Há um pouco de teoria e aula expositiva, apenas para explicar os processos e as atividades práticas.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Step n={1} title="Leitura guiada e análise crítica" items={["O aluno acessa o acervo digital e estuda cada item da legislação e da doutrina.", "Identifica conceitos, fundamentos e finalidades de cada dispositivo."]} />
          <Step n={2} title="Interação dialógica via chat" items={["Pergunta, argumenta, justifica e redige prompts contextuais.", "Perguntas estruturantes: O que é? Para que serve? Por que existe? Como funciona?", "O professor orienta o raciocínio administrativo e técnico."]} />
          <Step n={3} title="Oficinas de casos concretos" items={["Cada aluno traz situações reais do seu órgão.", "Múltiplos objetos de contratação de diferentes secretarias.", "Redação de DFD, ETP, TR, Matriz de Riscos e Requerimento de Contratação."]} />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="font-semibold">Etapas e atividades</p>
            <div className="mt-3"><CheckList items={["Estudo individual: leitura e reflexão sobre o acervo.", "Interação coletiva: debates e trocas no chat e com os colegas.", "Oficinas práticas: aplicação direta em documentos reais.", "Feedback orientado: correções guiadas pelo professor."]} /></div>
          </Card>
          <Card>
            <p className="font-semibold">O que o aluno aprende</p>
            <div className="mt-3"><CheckList items={["Interpretar corretamente a Lei nº 14.133/2021 e seus regulamentos.", "Pensamento crítico e argumentativo sobre as contratações públicas.", "Redigir e justificar tecnicamente os artefatos do planejamento.", "Aplicar a teoria à prática com segurança jurídica e clareza técnica."]} /></div>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-border">
        <JourneyHead icon={Hammer} n="3ª Jornada" title="A Construção Prática (Estúdio de Artefatos)" />
        <p className="mt-8 text-muted-foreground">O momento de criação: o aluno transforma teoria e interpretação em produção concreta de materiais e modelos operacionais, usando IA aplicada à aprendizagem. Cada participante deve trazer seu laptop/notebook — todas as atividades são presenciais e práticas, no Chat e Estúdio Digital, com orientação direta do professor.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <Step n={1} title="Preparação e ambientação" items={["Revisão do acervo e da exegese.", "Configuração do ambiente digital e do estúdio."]} />
          <Step n={2} title="Prompts e geração" items={["Uso de prompts específicos e respostas refinadas.", "Conhecimento jurídico vira produto educacional e administrativo."]} />
          <Step n={3} title="Elaboração e análise" items={["Artefatos revisados e aprimorados.", "Avaliação de coerência, clareza e aplicabilidade."]} />
          <Step n={4} title="Apresentação e reflexão" items={["Resultados discutidos em grupo.", "Análise crítica e ajustes orientados pelo professor."]} />
        </div>

        <h3 className="mt-14 font-display text-2xl font-bold">Os 9 artefatos didáticos</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artefatos.map(([t, d], i) => (
            <Card key={t} className="p-5">
              <div className="flex items-start gap-4">
                <span className="font-display text-3xl font-bold text-gradient">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="font-semibold">Atividades e dinâmica</p>
            <div className="mt-3"><CheckList items={["Oficinas presenciais, cada aluno no seu notebook.", "Criação colaborativa, individual e em grupo.", "Feedback contínuo do professor.", "Integração multimodal: texto, áudio, vídeo e visual."]} /></div>
          </Card>
          <Card>
            <p className="font-semibold">O que o aluno aprende</p>
            <div className="mt-3"><CheckList items={["Aplicar a IA de forma ética e técnica nos artefatos de DFD, ETP, TR e Matriz de Riscos.", "Síntese, comunicação e design instrucional.", "Transformar conhecimento jurídico em conteúdo acessível e operacional.", "Autonomia criativa e domínio técnico."]} /></div>
          </Card>
        </div>
        <Card className="mt-6 border-primary/40">
          <p className="font-semibold text-primary">Síntese</p>
          <p className="mt-2 text-muted-foreground">A 3ª Jornada é o ápice da metodologia: a transição da teoria para a prática, da leitura para a produção, e da aprendizagem para a autoria. O aluno sai como produtor de conhecimento, capaz de gerar materiais e soluções inovadoras para o setor público.</p>
        </Card>
      </Section>

      <Section className="border-t border-border">
        <JourneyHead icon={GraduationCap} n="Etapa final" title="Mentoria Virtual" />
        <p className="mt-6 text-muted-foreground">Após as oficinas presenciais, o aluno recebe acompanhamento individualizado para:</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Elaborar seus próprios DFDs, ETPs, TRs e Matrizes de Riscos.", "Utilizar o acervo, as fontes digitais, o chat e o estúdio como apoio contínuo.", "Consolidar a prática com orientação personalizada do professor Paulo Sérgio Gomes."].map((t) => (
            <Card key={t} className="p-5 text-sm text-muted-foreground">{t}</Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
