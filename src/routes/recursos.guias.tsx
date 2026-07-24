import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { guias, images, site, waLink } from "@/lib/site";
import { MessageCircle, FileCheck } from "lucide-react";

export const Route = createFileRoute("/recursos/guias")({
  head: () => ({
    meta: [
      { title: "Guías Laborales Descargables | Díaz Pino" },
      { name: "description", content: "Guías en PDF con tablas modificables sobre prestaciones, utilidades, vacaciones, jornada, cestatickets y derechos de la mujer. Incluye consulta telefónica gratuita." },
      { property: "og:title", content: "Guías Laborales Descargables | Díaz Pino" },
      { property: "og:description", content: "PDFs + tablas Excel/Word modificables + consulta telefónica gratuita." },
      { property: "og:url", content: "https://diazpino.com/recursos/guias" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/recursos/guias" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Guías Laborales Díaz Pino",
          itemListElement: guias.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: g.title,
              description: g.desc,
              image: g.image,
              brand: { "@type": "Brand", name: "Díaz, Pino & Asociados" },
              category: "Guía laboral (PDF descargable)",
              offers: {
                "@type": "Offer",
                price: g.price.toFixed(2),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://diazpino.com/recursos/guias#${g.slug}`,
                seller: { "@type": "Organization", name: "Díaz, Pino & Asociados" },
              },
            },
          })),
        }),
      },
    ],
  }),
  component: Guias,
});

function Guias() {
  return (
    <Layout>
      <PageHero kicker="Guías" title="Guías laborales" subtitle="Documentos prácticos en PDF con tablas modificables. Cada guía incluye una consulta telefónica gratuita." />
      <section className="py-14">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guias.map((g) => (
              <article key={g.slug} id={g.slug} className="card-soft overflow-hidden flex flex-col">
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img src={g.image} alt={`Portada ${g.title}`} loading="lazy" className="w-full h-full object-cover object-center" width={400} height={500} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-brand font-semibold"><FileCheck size={14}/> PDF + tablas modificables + consulta gratuita</div>
                  <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                    <span className="price-tag">${g.price}<sup className="text-sm">*</sup></span>
                    <a href={waLink(`Hola, quiero la guía ${g.title}.`)} target="_blank" rel="noopener" className="btn-orange text-sm"><MessageCircle size={16}/> Solicitar</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">* {site.pricingNote}.</p>
        </div>
      </section>
    </Layout>
  );
}
