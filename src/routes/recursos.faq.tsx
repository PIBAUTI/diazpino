import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { faqs, waLink } from "@/lib/site";
import { breadcrumbLd } from "@/lib/breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/recursos/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes Laborales | Díaz Pino" },
      { name: "description", content: "Respuestas rápidas a preguntas frecuentes sobre vacaciones, prestaciones, utilidades, salario en dólares y más." },
      { property: "og:title", content: "Preguntas Frecuentes Laborales | Díaz Pino" },
      { property: "og:description", content: "FAQ laboral venezolana con respuestas prácticas." },
      { property: "og:url", content: "https://diazpino.com/recursos/faq" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/recursos/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Recursos", path: "/recursos" },
          { name: "Preguntas frecuentes", path: "/recursos/faq" },
        ])),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <Layout>
      <PageHero kicker="Preguntas y respuestas" title="Preguntas frecuentes" subtitle="Las dudas más comunes que resolvemos a diario." />
      <section className="py-14">
        <div className="container-page max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="card-soft px-6">
                <AccordionTrigger className="text-left font-bold text-brand">{f.q}</AccordionTrigger>
                <AccordionContent className="text-ink">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">¿No encontraste tu respuesta?</p>
            <a href={waLink("Hola, tengo una pregunta laboral.")} target="_blank" rel="noopener" className="btn-orange mt-3"><MessageCircle size={18}/> Pregúntanos por WhatsApp</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
