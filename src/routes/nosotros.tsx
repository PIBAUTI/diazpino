import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { images, site } from "@/lib/site";
import { breadcrumbScript } from "@/lib/breadcrumbs";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros: Escritorio Jurídico Díaz, Pino & Asociados" },
      { name: "description", content: "Más de 18 años asesorando en materia laboral en Venezuela. Conoce a Sol Irene Díaz y Juan Bautista Pino, socios del escritorio." },
      { property: "og:title", content: "Nosotros | Díaz Pino & Asociados" },
      { property: "og:description", content: "Nuestro propósito es ayudar a las organizaciones a alcanzar su máximo potencial a partir de su gente." },
      { property: "og:url", content: "https://diazpino.com/nosotros" },
      { property: "og:image", content: `https://diazpino.com${images.avila}` },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/nosotros" }],
    scripts: [breadcrumbScript([{ name: "Inicio", path: "/" }, { name: "Nosotros", path: "/nosotros" }])],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <Layout>
      <section className="relative">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={images.avila} alt="El Ávila, Caracas" className="w-full h-full object-cover" width={1600} height={600} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/40 to-transparent" />
        </div>
      </section>
      <PageHero
        kicker="Nosotros"
        title="Ayudamos a las organizaciones a alcanzar su máximo potencial a partir de su gente"
      />

      <section className="py-16">
        <div className="container-page max-w-3xl text-ink space-y-4">
          <p>
            Desde 2009 acompañamos a empresas, gerentes y emprendedores venezolanos con asesoría laboral cercana y en
            lenguaje sencillo. Más de 18 años nos avalan como referentes en <strong>Derecho del Trabajo</strong>.
          </p>
          <p>
            Nuestra sede está en Los Chaguaramos, Caracas, y desde allí atendemos a clientes en toda Venezuela y a la
            diáspora venezolana en el mundo.
          </p>
          <p className="text-brand font-bold text-xl">{site.tagline}</p>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl text-center">Nuestro equipo</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <TeamCard
              photo={images.sol}
              name="Sol Irene Díaz"
              role="Directora"
              email="soldiaz@diazpino.com"
              bio="Abogada (UCV) con más de 18 años en Derecho del Trabajo; estudios en Gerencia Corporativa de RRHH; Entrenadora Certificada de Liderazgo. Apasionada por las relaciones laborales y la enseñanza. Dicta todos nuestros cursos."
            />
            <TeamCard
              photo={images.juan}
              name="Juan Bautista Pino"
              role="Socio"
              email="pino@diazpino.com"
              bio="Ingeniero (HEIG-VD, Suiza, 1991), Abogado (UCV, 2008) y MBA del IESA. Más de 30 años de experiencia en mercadeo, negociaciones y consultoría organizacional."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function TeamCard({ photo, name, role, email, bio }: { photo: string; name: string; role: string; email: string; bio: string }) {
  return (
    <article className="card-soft p-8 text-center">
      <img src={photo} alt={name} loading="lazy" className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-orange" width={160} height={160} />
      <h3 className="mt-5 text-2xl">{name}</h3>
      <p className="text-orange font-bold uppercase tracking-widest text-xs mt-1">{role}</p>
      <p className="mt-4 text-ink text-sm">{bio}</p>
      <a href={`mailto:${email}`} className="mt-4 inline-flex items-center gap-2 text-brand font-semibold hover:text-orange text-sm"><Mail size={14}/> {email}</a>
    </article>
  );
}
