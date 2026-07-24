import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { cursos, site, testimonials, waLink } from "@/lib/site";
import { breadcrumbScript } from "@/lib/breadcrumbs";
import { MessageCircle, Award, Clock, FileSpreadsheet, GraduationCap, Users } from "lucide-react";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos Online de Derecho Laboral Venezolano | Díaz Pino" },
      { name: "description", content: "Cursos online descargables, a tu ritmo, con tablas Excel modificables, tutor asignado y certificado digital. Dictados por la Abogada Sol Irene Díaz." },
      { property: "og:title", content: "Cursos Laborales Online | Díaz Pino" },
      { property: "og:description", content: "Formación práctica en LOTTT, prestaciones, dolarización, contratos y documentación laboral." },
      { property: "og:url", content: "https://diazpino.com/cursos" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/cursos" }],
    scripts: [breadcrumbScript([{ name: "Inicio", path: "/" }, { name: "Cursos", path: "/cursos" }])],
  }),
  component: Cursos,
});

function Cursos() {
  return (
    <Layout>
      <PageHero kicker="Formación" title="Cursos y talleres online" subtitle="Aprende a tu ritmo con nuestros cursos certificados. Descargables, con material de apoyo y tutor asignado." />

      <section className="py-14">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <Feature icon={<Clock />} title="A tu ritmo" desc="Descargables y online" />
          <Feature icon={<FileSpreadsheet />} title="Material práctico" desc="Tablas Excel modificables" />
          <Feature icon={<Users />} title="Tutor asignado" desc="Acompañamiento durante el curso" />
          <Feature icon={<Award />} title="Certificado digital" desc="Con código de verificación" />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            {cursos.map((c) => (
              <article key={c.slug} className="card-soft overflow-hidden grid sm:grid-cols-[220px_1fr]">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-52 sm:h-full object-cover" width={440} height={320} />
                <div className="p-6 flex flex-col">
                  <h2 className="text-xl leading-snug">{c.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{c.hours}</p>
                  <p className="text-sm text-ink mt-3">{c.desc}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between flex-wrap gap-3">
                    <span className="price-tag">${c.price}<sup className="text-sm">*</sup></span>
                    <a href={waLink(`Hola, quiero información del curso ${c.title}.`)} target="_blank" rel="noopener" className="btn-orange text-sm"><MessageCircle size={16}/> Solicitar</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">* {site.pricingNote}. Los cursos NO se pagan en el sitio; el cierre es por WhatsApp.</p>
        </div>
      </section>

      {/* IN COMPANY */}
      <section className="py-14 bg-orange text-white">
        <div className="container-page text-center">
          <GraduationCap size={44} className="mx-auto" />
          <h2 className="text-white text-3xl md:text-4xl uppercase mt-4">Talleres a la medida (In Company)</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">Diseñados para las necesidades de tu empresa. Online o presenciales, con casos reales de tu operación.</p>
          <a href={waLink("Hola, quiero un taller in company para mi empresa.")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 rounded-full bg-white text-orange font-extrabold px-6 py-3 hover:bg-white/90 transition"><MessageCircle size={20}/> Solicitar por WhatsApp</a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl text-center">Testimonios de participantes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="card-soft p-6">
                <p className="text-ink italic">“{t.quote}”</p>
                <footer className="mt-4 text-sm">
                  <div className="font-bold text-brand">{t.author}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card-soft p-5">
      <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center mx-auto">{icon}</div>
      <h3 className="mt-3 text-base">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
