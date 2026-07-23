import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { temas, waLink } from "@/lib/site";
import { MessageCircle, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/recursos/temas/$slug")({
  loader: ({ params }) => {
    const tema = temas.find((t) => t.slug === params.slug);
    if (!tema) throw notFound();
    return tema;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Temas Laborales Venezuela | Díaz Pino` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: `${loaderData.title} | Díaz Pino` },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `https://diazpino.com/recursos/temas/${loaderData.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `https://diazpino.com/recursos/temas/${loaderData.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-24 text-center">
        <h1>Tema no encontrado</h1>
        <Link to="/recursos/temas" className="btn-orange mt-6 inline-flex">Ver todos los temas</Link>
      </div>
    </Layout>
  ),
  component: TemaPage,
});

function TemaPage() {
  const tema = Route.useLoaderData();
  return (
    <Layout>
      <article className="py-14">
        <div className="container-page max-w-3xl">
          <Link to="/recursos/temas" className="text-brand text-sm font-semibold inline-flex items-center gap-1 hover:text-orange"><ArrowLeft size={16}/> Volver a temas</Link>
          <h1 className="mt-4 text-4xl md:text-5xl">{tema.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{tema.excerpt}</p>
          <div className="prose mt-8 text-ink space-y-4">
            <p>
              Este artículo forma parte de nuestro hub de temas laborales. Aquí explicamos, en lenguaje sencillo, cómo aplica la
              Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT) al tema <strong>{tema.title.toLowerCase()}</strong>,
              con los criterios más recientes de la jurisprudencia venezolana.
            </p>
            <p className="italic text-muted-foreground">
              (El contenido detallado de este artículo se publicará próximamente. Si necesitas resolver este tema en tu empresa hoy, escríbenos.)
            </p>
          </div>

          <div className="mt-12 card-soft p-8 bg-brand text-white">
            <h2 className="text-white text-2xl">¿Necesitas resolver esto en tu empresa?</h2>
            <p className="mt-2 text-white/85">Escríbenos por WhatsApp y te responde un abogado laboral especialista.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waLink(`Hola, tengo una consulta sobre ${tema.title}.`)} target="_blank" rel="noopener" className="btn-orange"><MessageCircle size={18}/> Consulta por WhatsApp</a>
              <Link to="/recursos/guias" className="btn-outline-brand !border-white !text-white hover:!bg-white hover:!text-brand">Ver guías relacionadas</Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
