import { createFileRoute } from "@tanstack/react-router";
import { Scale, ShieldCheck, Award, Briefcase, BookOpen } from "lucide-react";
import { PageHero, Section, Card, CheckList, CtaBand } from "@/components/site";
import foto from "@/assets/foto_paulo_sergio.jpg.asset.json";

export const Route = createFileRoute("/professor")({
  head: () => ({
    meta: [
      { title: "Prof. Paulo Sérgio Gomes e Contratação Direta | Acervo Mentor" },
      { name: "description", content: "Notória especialização do Prof. Paulo Sérgio Gomes da Silva e fundamentação legal da inexigibilidade (art. 74, III, f, Lei 14.133/2021)." },
      { property: "og:title", content: "Prof. Paulo Sérgio Gomes e Contratação Direta | Acervo Mentor" },
      { property: "og:description", content: "Mais de 30 anos no setor público, objeto, fundamentação legal e justificativa da contratação." },
    ],
  }),
  component: Professor,
});

function Professor() {
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:py-20">
          <img src={foto.url} alt="Professor Paulo Sérgio Gomes da Silva" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl border border-primary/40 object-cover shadow-premium" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Notória especialização</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">Prof. Paulo Sérgio <span className="text-gradient">Gomes da Silva</span></h1>
            <p className="mt-5 text-lg text-muted-foreground">Mais de 30 anos de atuação contínua no setor público e na capacitação de agentes governamentais, aliando domínio jurídico da Lei nº 14.133/2021 à aplicação prática de Inteligência Artificial.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Card className="p-4"><p className="font-display text-3xl font-bold text-gradient">30+</p><p className="text-sm text-muted-foreground">anos no setor público</p></Card>
              <Card className="p-4"><p className="font-display text-3xl font-bold text-gradient">MDK</p><p className="text-sm text-muted-foreground">ecossistema de IA criado por ele</p></Card>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Perfil profissional" title="Trajetória e inovação em IA governamental">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <Award className="h-6 w-6 text-primary" />
            <p className="mt-3 font-semibold">Perfil e inovação</p>
            <div className="mt-3 text-sm"><CheckList items={[
              "Idealizador do Ecossistema MDK: integra curadoria intelectual humana à IA (RAG/NotebookLM) para aplicação segura da Nova Lei de Licitações.",
              "Palestrante no I e II Fórum Nacional da NLLC e no II e III Congresso Brasileiro de Gestão por Resultados (Brasília/DF).",
            ]} /></div>
          </Card>
          <Card>
            <BookOpen className="h-6 w-6 text-primary" />
            <p className="mt-3 font-semibold">Formação acadêmica</p>
            <div className="mt-3 text-sm"><CheckList items={[
              "Bacharel em Administração de Empresas pela FAP – Faculdade Piemonte, diploma registrado na UFBA.",
              "Pré-MBA em Inteligência Artificial para Negócios pela EXAME Educação e Saint Paul Escola de Negócios.",
            ]} /></div>
          </Card>
          <Card>
            <Briefcase className="h-6 w-6 text-primary" />
            <p className="mt-3 font-semibold">Gestão pública e docência</p>
            <div className="mt-3 text-sm"><CheckList items={[
              "Ex-Secretário Municipal de Planejamento de Madre de Deus/BA (Decreto de 30/04/2020): orçamento, processos licitatórios e transparência.",
              "Professor de pós-graduação (FUNDACEM e FACIIP): Fiscalização de Contratos, Contratos de Gestão com OS e Regulamentação de Contratos.",
            ]} /></div>
          </Card>
        </div>

        <h3 className="mt-12 font-display text-2xl font-bold">Atestados de capacidade técnica</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Supremo Tribunal Federal (STF)", "Atestado nº 37/2012 — instrutoria em capacitação sobre a Lei de Acesso à Informação Pública."],
            ["Câmara Municipal de Oliveira dos Brejinhos/BA", "Domínio técnico na aplicação de IA Vertical na Lei nº 14.133/2021 para servidores e dirigentes do Legislativo."],
            ["Instituto Brasileiro de Gestão por Resultados (IBGR)", "Notória especialização em ensino-aprendizagem de licitações, contratos e IA em congressos nacionais."],
            ["EAC e CTM", "Autoria e desenvolvimento de metodologias de compliance e gestão contratual."],
          ].map(([t, d]) => (
            <Card key={t} className="p-5">
              <p className="font-semibold text-primary">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">A conjugação desses fatores preenche os requisitos do art. 74, III, “f”, c/c o art. 6º, XVIII e XIX, da Lei nº 14.133/2021, demonstrando que o trabalho do profissional é essencial e o mais adequado à consecução do objeto.</p>
      </Section>

      <PageHero eyebrow="Contratação direta" title={<>Objeto e <span className="text-gradient">fundamentação legal</span></>}>
        Contratação de serviço técnico especializado de natureza predominantemente intelectual de treinamento e aperfeiçoamento de pessoal, visando a capacitação prática de servidores na elaboração dos artefatos da fase preparatória (DFD, ETP, TR, Mapa e Matriz de Riscos) com o uso de Inteligência Artificial Vertical / RAG aplicada.
      </PageHero>

      <Section eyebrow="Inexigibilidade de licitação" title="Fundamentação legal">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Art. 74, III, “f”, Lei nº 14.133/2021", "Autoriza a contratação direta para serviços técnicos especializados de natureza predominantemente intelectual voltados ao treinamento e aperfeiçoamento de pessoal."],
            ["Art. 74, § 3º, Lei nº 14.133/2021", "Conceitua a notória especialização: desempenho anterior, estudos, experiência, publicações e equipe permitem inferir que o trabalho é essencial e adequado ao objeto."],
            ["Art. 37, XXI, Constituição Federal", "Ressalva as hipóteses de contratação direta especificadas na legislação ordinária."],
            ["Decisão nº 439/1998 – Plenário TCU", "Treinamento tem natureza intelectual e singularidade ligada à didática e metodologia do instrutor, inviabilizando julgamento estritamente objetivo."],
            ["Súmulas nº 39 e 252 do TCU", "Chancelam a inviabilidade de competição quando conjugadas a especialização do serviço e a notória especialização do prestador."],
          ].map(([t, d]) => (
            <Card key={t} className="p-5">
              <div className="flex gap-3"><Scale className="h-5 w-5 shrink-0 text-primary" /><div><p className="font-semibold">{t}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></div></div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Motivação" title="Justificativa da necessidade" className="border-t border-border">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Dever de capacitação contínua", "A Lei nº 14.133/2021 estabelece a capacitação permanente dos agentes públicos como pilar da governança das contratações (arts. 11 e 18)."],
            ["Mitigação de riscos", "A fase preparatória concentra as principais falhas apontadas por Tribunais de Contas e MP. Capacitar para DFDs (Decreto nº 10.947/2022), ETPs, TRs e Matrizes de Risco reduz erros, sobrepreço e retrabalho."],
            ["Inovação com segurança (IA Vertical)", "IA genérica sem curadoria gera alucinações jurídicas. A IA Vertical com acervo curado (RAG) respeita a jurisprudência do TCU e as orientações da AGU."],
          ].map(([t, d]) => (
            <Card key={t}><ShieldCheck className="h-6 w-6 text-primary" /><p className="mt-3 font-semibold">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Inviabilidade de competição" title="Elementos da notória especialização" className="border-t border-border">
        <p className="text-muted-foreground">Propostas de treinamento de natureza intelectual não podem ser comparadas objetivamente: seus resultados dependem da técnica, empatia, didática e metodologia autoral do prestador.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <p className="font-semibold text-primary">Metodologia exclusiva em 3 jornadas</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">1ª – O Acervo:</strong> base curada e vetorizada de legislação, doutrina e jurisprudência.</li>
              <li><strong className="text-foreground">2ª – Exegese e Hermenêutica:</strong> análise crítico-reflexiva no chat, item por item da norma.</li>
              <li><strong className="text-foreground">3ª – Construção Prática:</strong> geração guiada de 9 artefatos em sala de aula.</li>
            </ul>
          </Card>
          <Card>
            <p className="font-semibold text-primary">Serviço personalíssimo</p>
            <p className="mt-3 text-sm text-muted-foreground">Condução direta do Prof. Paulo Sérgio Gomes da Silva, com didática voltada a casos reais dos órgãos participantes. O § 4º do art. 74 veda a subcontratação ou substituição dos profissionais que justificaram a notória especialização.</p>
          </Card>
          <Card>
            <p className="font-semibold text-primary">Mentoria pós-treinamento</p>
            <p className="mt-3 text-sm text-muted-foreground">Suporte de 1 a 12 meses: acompanhamento assíncrono via ambiente digital, apoiando o servidor no momento em que ele elabora seus artefatos no órgão.</p>
          </Card>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
