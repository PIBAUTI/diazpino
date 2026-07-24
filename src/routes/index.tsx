import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { images, site, cursos, testimonials, temas, waLink } from "@/lib/site";
import { breadcrumbScript } from "@/lib/breadcrumbs";
import { MessageCircle, GraduationCap, BookOpen, ShieldCheck, FileText, Handshake, Calculator, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abogados Laborales con más de 15 años de experiencia en Caracas | Díaz Pino" },
      { name: "description", content: "Asesoría laboral en Venezuela: consultas por WhatsApp, cursos online, guías descargables y acompañamiento legal para empresas. +18 años." },
      { property: "og:title", content: "Abogados Laborales en Caracas | Díaz Pino & Asociados" },
      { property: "og:description", content: "Asesoramos en materia laboral para líderes, gerentes, empresarios y emprendedores." },
      { property: "og:url", content: "https://diazpino.com/" },
      { property: "og:image", content: `https://diazpino.com${images.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/" }],
    scripts: [breadcrumbScript([{ name: "Inicio", path: "/" }])],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero} alt="" className="w-full h-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/80 to-brand/60" />
        </div>
        <div className="relative container-page py-20 md:py-32 text-white">
          <p className="text-orange font-bold uppercase tracking-widest text-sm">Díaz, Pino & Asociados</p>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase leading-[1.05] mt-3 max-w-3xl">
            Asesores Laborales
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl">
            Asesoramos en materia laboral para la toma de decisiones de líderes, gerentes, empresarios y emprendedores.
          </p>
          <p className="mt-2 text-orange font-bold uppercase tracking-wide">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink("Hola, quiero una consulta laboral.")} target="_blank" rel="noopener" className="btn-orange">
              <MessageCircle size={20} /> Consulta por WhatsApp
            </a>
            <Link to="/recursos/temas" className="btn-outline-brand !border-white !text-white hover:!bg-white hover:!text-brand">
              Ver temas laborales
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-border">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-brand">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUÉ NECESITAS HOY */}
      <section className="py-16 bg-muted/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl text-center">¿Qué necesitas hoy?</h2>
          <p className="text-center text-muted-foreground mt-2 max-w-xl mx-auto">Elige el camino que mejor se adapta a tu situación.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <NeedCard icon={<MessageCircle />} title="Consultas" desc="Habla con un abogado laboral por WhatsApp, teléfono o videoconferencia." to="/servicios" />
            <NeedCard icon={<GraduationCap />} title="Cursos" desc="Fórmate a tu ritmo con nuestros cursos online certificados." to="/cursos" />
            <NeedCard icon={<BookOpen />} title="Guías y temas" desc="Recursos descargables y artículos gratuitos para tu día a día." to="/recursos" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16">
        <div className="container-page">
          <p className="text-orange font-bold uppercase text-center tracking-widest text-sm">Servicios</p>
          <h2 className="text-3xl md:text-4xl text-center mt-2">Nuestros servicios</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard icon={<ShieldCheck />} title="Asesoría Continua" desc="Planes mensuales para profesionales y empresas con soporte diario." />
            <ServiceCard icon={<FileText />} title="Contratos a la Medida" desc="Contratos y documentación laboral hechos para tu empresa." />
            <ServiceCard icon={<Handshake />} title="Acompañamiento Legal" desc="Prevención de demandas y representación ante Inspectorías." />
            <ServiceCard icon={<Calculator />} title="Cálculos Laborales" desc="Prestaciones, liquidaciones, vacaciones y utilidades con informe." />
          </div>
          <div className="text-center mt-10">
            <Link to="/servicios" className="btn-brand">Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="py-16 bg-muted/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl text-center">Temas más consultados</h2>
          <p className="text-center text-muted-foreground mt-2">Artículos gratuitos para resolver dudas frecuentes.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {temas.slice(0, 6).map((t) => (
              <Link key={t.slug} to="/recursos/temas/$slug" params={{ slug: t.slug }} className="card-soft p-5 flex items-center justify-between group hover:border-orange transition">
                <div className="min-w-0">
                  <div className="font-bold text-brand">{t.title}</div>
                  <div className="text-sm text-muted-foreground truncate">{t.excerpt}</div>
                </div>
                <ArrowRight className="text-orange shrink-0 group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS DESTACADOS */}
      <section className="py-16">
        <div className="container-page">
          <p className="text-orange font-bold uppercase text-center tracking-widest text-sm">Formación</p>
          <h2 className="text-3xl md:text-4xl text-center mt-2">Cursos destacados</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cursos.map((c) => (
              <article key={c.slug} className="card-soft overflow-hidden flex flex-col">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-40 object-cover" width={400} height={240} />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base leading-snug">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{c.hours}</p>
                  <p className="price-tag mt-3">${c.price}<sup className="text-sm">*</sup></p>
                  <a href={waLink(`Hola, quiero información del curso ${c.title}.`)} target="_blank" rel="noopener" className="btn-orange mt-4 text-sm w-full">Solicitar por WhatsApp</a>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">* {site.pricingNote}</p>
        </div>
      </section>

      {/* BANDA NARANJA */}
      <section className="py-14 bg-orange text-white">
        <div className="container-page text-center">
          <h2 className="text-white text-2xl md:text-4xl uppercase">¿Necesitas resolver un caso hoy?</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">Escríbenos por WhatsApp y te responde un abogado laboral especialista.</p>
          <a href={waLink("Hola, tengo una consulta laboral urgente.")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 rounded-full bg-white text-orange font-extrabold px-6 py-3 hover:bg-white/90 transition">
            <MessageCircle size={20} /> Consulta por WhatsApp
          </a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl text-center">Lo que dicen nuestros clientes</h2>
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

      {/* NEWSLETTER */}
      <section className="py-16 bg-muted/50">
        <div className="container-page">
          <div className="card-soft p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl">Actualizaciones legales sobre la LOTTT para tu empresa</h2>
              <p className="mt-2 text-muted-foreground">Suscríbete a nuestro boletín y recibe novedades laborales que impactan tu negocio.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("¡Gracias! Te confirmaremos tu suscripción por correo."); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input type="email" required placeholder="tucorreo@empresa.com" className="flex-1 rounded-full border border-border px-5 py-3 focus:outline-none focus:border-brand" />
              <button type="submit" className="btn-orange">Suscríbete</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function NeedCard({ icon, title, desc, to }: { icon: React.ReactNode; title: string; desc: string; to: string }) {
  return (
    <Link to={to} className="card-soft p-6 group hover:-translate-y-1 transition">
      <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center">{icon}</div>
      <h3 className="mt-4 text-xl">{title}</h3>
      <p className="text-muted-foreground mt-2">{desc}</p>
      <div className="mt-4 text-orange font-bold inline-flex items-center gap-1">Ver más <ArrowRight size={16} className="group-hover:translate-x-1 transition" /></div>
    </Link>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card-soft p-6">
      <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center">{icon}</div>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{desc}</p>
    </div>
  );
}
