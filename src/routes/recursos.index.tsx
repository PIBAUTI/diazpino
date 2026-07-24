import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { breadcrumbScript } from "@/lib/breadcrumbs";
import { BookOpen, HelpCircle, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/recursos/")({
  head: () => ({
    meta: [
      { title: "Recursos Laborales: Temas, Guías y Preguntas | Díaz Pino" },
      { name: "description", content: "Artículos gratuitos, guías descargables y preguntas frecuentes sobre derecho laboral venezolano." },
      { property: "og:title", content: "Recursos Laborales | Díaz Pino" },
      { property: "og:description", content: "Temas, guías descargables y FAQ sobre LOTTT." },
      { property: "og:url", content: "https://diazpino.com/recursos" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/recursos" }],
    scripts: [breadcrumbScript([{ name: "Inicio", path: "/" }, { name: "Recursos", path: "/recursos" }])],
  }),
  component: Recursos,
});

function Recursos() {
  return (
    <Layout>
      <PageHero kicker="Recursos" title="Recursos laborales" subtitle="Contenido gratuito y descargable para conocer tus derechos y obligaciones." />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <Card icon={<FileText />} title="Temas de interés" desc="Artículos gratuitos sobre vacaciones, prestaciones, despido y más." to="/recursos/temas" />
          <Card icon={<BookOpen />} title="Guías" desc="Documentos PDF con tablas modificables. Consulta gratuita incluida." to="/recursos/guias" />
          <Card icon={<HelpCircle />} title="Preguntas frecuentes" desc="Respuestas rápidas a las dudas más comunes." to="/recursos/faq" />
        </div>
      </section>
    </Layout>
  );
}

function Card({ icon, title, desc, to }: { icon: React.ReactNode; title: string; desc: string; to: string }) {
  return (
    <Link to={to} className="card-soft p-8 group hover:-translate-y-1 transition">
      <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center">{icon}</div>
      <h2 className="mt-4 text-2xl">{title}</h2>
      <p className="text-muted-foreground mt-2">{desc}</p>
      <div className="mt-4 text-orange font-bold inline-flex items-center gap-1">Explorar <ArrowRight size={16} className="group-hover:translate-x-1 transition"/></div>
    </Link>
  );
}
