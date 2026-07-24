import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { temas } from "@/lib/site";
import { breadcrumbScript } from "@/lib/breadcrumbs";
import { Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/recursos/temas/")({
  head: () => ({
    meta: [
      { title: "Temas Laborales: Artículos Gratuitos | Díaz Pino" },
      { name: "description", content: "Artículos sobre vacaciones, prestaciones, despido, cesta tickets, período de prueba y más temas laborales venezolanos." },
      { property: "og:title", content: "Temas Laborales | Díaz Pino" },
      { property: "og:description", content: "Hub de artículos gratuitos sobre derecho laboral en Venezuela." },
      { property: "og:url", content: "https://diazpino.com/recursos/temas" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/recursos/temas" }],
    scripts: [breadcrumbScript([
      { name: "Inicio", path: "/" },
      { name: "Recursos", path: "/recursos" },
      { name: "Temas", path: "/recursos/temas" },
    ])],
  }),
  component: Temas,
});

function Temas() {
  const [q, setQ] = useState("");
  const filtered = temas.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()) || t.excerpt.toLowerCase().includes(q.toLowerCase()));
  return (
    <Layout>
      <PageHero kicker="Temas" title="Temas laborales de interés" subtitle="Artículos gratuitos con explicación clara del derecho laboral venezolano." />
      <section className="py-14">
        <div className="container-page">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar tema..." className="w-full rounded-full border border-border pl-11 pr-5 py-3 focus:outline-none focus:border-brand" />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <Link key={t.slug} to="/recursos/temas/$slug" params={{ slug: t.slug }} className="card-soft p-6 group hover:border-orange transition">
                <h2 className="text-lg text-brand">{t.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">{t.excerpt}</p>
                <div className="mt-4 text-orange font-bold inline-flex items-center gap-1 text-sm">Leer artículo <ArrowRight size={14} className="group-hover:translate-x-1 transition"/></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
