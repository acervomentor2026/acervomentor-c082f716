import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Check } from "lucide-react";

export const WHATSAPP = "https://wa.me/5571988997900";

const nav = [
  { to: "/", label: "O Curso" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/professor", label: "Professor & Contratação" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 md:h-24">
        <Link to="/" className="shrink-0 font-display text-3xl font-bold leading-[1.02] tracking-tight md:text-4xl">
          <span className="block text-gradient">Acervo</span>
          <span className="block">Mentor</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="ml-3 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-premium">
            Inscreva-se
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="rounded-lg px-3 py-2 text-muted-foreground" activeProps={{ className: "bg-secondary text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-muted-foreground md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold leading-[1.05] text-foreground md:text-2xl"><span className="block text-gradient">Acervo</span><span className="block">Mentor</span></p>
          <p className="mt-2">Capacitação prática em artefatos de contratação com IA Vertical.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Turma presencial</p>
          <p className="mt-2">1º, 2 e 3 de dezembro de 2026<br />Salvador – Bahia</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Inscrições</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-primary hover:underline">
            <MessageCircle className="h-4 w-4" /> WhatsApp (71) 98899-7900
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="bg-gradient-hero border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-3xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, className = "" }: { eyebrow?: string; title?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-14 ${className}`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      {title && <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>}
      <div className={title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-gradient-card p-6 shadow-card ${className}`}>{children}</div>;
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-muted-foreground">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="rounded-3xl bg-gradient-primary p-10 text-center text-primary-foreground shadow-premium">
        <h2 className="font-display text-3xl font-bold">Garanta a sua vaga</h2>
        <p className="mt-2 opacity-90">Turmas abertas ou in company no seu órgão, sob consulta.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-foreground">
          <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
