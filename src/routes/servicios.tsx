import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { images, site, waLink } from "@/lib/site";
import { MessageCircle, Phone, FileText, Video, Calculator, Handshake, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de Asesoría Laboral en Venezuela | Díaz Pino" },
      { name: "description", content: "Asesoría Continua, Consultas, Contratos a la medida, Acompañamiento Legal y Cálculo Laboral. Planes desde $100/mes." },
      { property: "og:title", content: "Servicios Laborales | Díaz Pino & Asociados" },
      { property: "og:description", content: "Planes de asesoría para profesionales y empresas, consultas puntuales y cálculo laboral." },
      { property: "og:url", content: "https://diazpino.com/servicios" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/servicios" }],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <Layout>
      <PageHero
        kicker="Servicios"
        title="Asesoría laboral integral"
        subtitle="Planes de asesoría continua, consultas puntuales, contratos a la medida, acompañamiento legal y cálculos laborales."
      />

      {/* ASESORÍA CONTINUA */}
      <section id="asesoria" className="py-16">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-orange font-bold uppercase tracking-widest text-sm">Servicio estrella</p>
              <h2 className="mt-2 text-3xl md:text-4xl">Asesoría Laboral Continua</h2>
              <p className="mt-4 text-muted-foreground">Un abogado laboral siempre disponible para tu empresa o para ti como profesional. Sin costos de afiliación.</p>
            </div>
            <img src={images.asesoria} alt="Asesoría telefónica" className="rounded-2xl shadow-lg" loading="lazy" width={600} height={600} />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <PlanCard
              badge="Profesionales"
              price={100}
              suffix="/mes"
              features={[
                "Consultas ilimitadas",
                "Respuestas inmediatas en línea (notas de voz por WhatsApp)",
                "Soporte legal documentado",
                "20% de descuento en informes y dictámenes visados",
                "Atención diaria multicanal",
                "50% de descuento en cursos y talleres",
                "Activación inmediata, sin costo de afiliación",
              ]}
              cta="Solicitar Plan Profesionales"
            />
            <PlanCard
              highlight
              badge="Empresas"
              price={250}
              suffix="/mes"
              features={[
                "Consultas telefónicas ilimitadas con especialistas",
                "Hasta 5 consultas por correo al mes",
                "Revisión de cálculos laborales (LOTTT, utilidades, vacaciones, liquidaciones)",
                "Acompañamiento en resolución de conflictos",
                "Auditoría Laboral a Distancia (diagnóstico preventivo)",
                "30% de descuento en servicios adicionales y cursos",
                "Sin cuotas de afiliación",
              ]}
              cta="Solicitar Plan Empresas"
            />
          </div>
        </div>
      </section>

      {/* CONSULTAS */}
      <section id="consultas" className="py-16 bg-muted/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl text-center">Consultas puntuales</h2>
          <p className="text-center text-muted-foreground mt-2">Resuelve un caso específico sin plan mensual.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ConsultaCard icon={<Phone />} title="Telefónica" price={20} desc="Un abogado te contacta con respuesta verbal y soporte legal." />
            <ConsultaCard icon={<FileText />} title="Escrita" price={50} desc="Informe por escrito con respaldo jurídico." />
            <ConsultaCard icon={<Video />} title="On Line" price={45} desc="Videoconferencia de 45 minutos con un abogado laboral." />
          </div>
        </div>
      </section>

      {/* CONTRATOS */}
      <section id="contratos" className="py-16">
        <div className="container-page grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-orange"><FileText /><span className="text-sm font-bold uppercase tracking-widest">Contratos y documentación</span></div>
            <h2 className="mt-2 text-3xl md:text-4xl">Elaboración de contratos a la medida</h2>
            <p className="mt-4 text-muted-foreground">Nada de plantillas genéricas. Redactamos contratos y documentación laboral diseñados para tu empresa.</p>
            <ul className="check-list mt-6">
              <li>Contratos a tiempo determinado e indeterminado</li>
              <li>Modificaciones y sustituciones</li>
              <li>Contratos "paquetizados"</li>
              <li>Reglamentos internos</li>
              <li>Expedientes y amonestaciones</li>
            </ul>
            <p className="mt-6 text-brand font-bold text-xl">Podemos redactar su contrato.</p>
            <a href={waLink("Hola, necesito elaborar un contrato laboral.")} target="_blank" rel="noopener" className="btn-orange mt-4"><MessageCircle size={18}/> Solicitar por WhatsApp</a>
          </div>
          <div className="card-soft p-8 bg-brand text-white">
            <FileText size={40} className="text-orange" />
            <p className="mt-4 text-white/90">Empresas de todos los tamaños confían en nosotros para sus políticas internas y documentación laboral.</p>
          </div>
        </div>
      </section>

      {/* ACOMPAÑAMIENTO */}
      <section id="acompanamiento" className="py-16 bg-muted/50">
        <div className="container-page grid gap-10 md:grid-cols-2 items-center">
          <div className="card-soft p-8 order-2 md:order-1">
            <Handshake size={40} className="text-orange" />
            <ul className="check-list mt-6">
              <li>Prevención de demandas laborales</li>
              <li>Gestión de conflictos internos</li>
              <li>Representación ante la Inspectoría del Trabajo</li>
              <li>Auditoría laboral a distancia</li>
              <li>Representación judicial y extrajudicial</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 text-orange"><ShieldCheck /><span className="text-sm font-bold uppercase tracking-widest">Respaldo continuo</span></div>
            <h2 className="mt-2 text-3xl md:text-4xl">Acompañamiento Legal Laboral</h2>
            <p className="mt-4 text-muted-foreground">Un aliado jurídico permanente para prevenir problemas y resolver los que ya existen.</p>
            <a href={waLink("Hola, necesito acompañamiento legal laboral.")} target="_blank" rel="noopener" className="btn-orange mt-6"><MessageCircle size={18}/> Solicitar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CÁLCULO LABORAL */}
      <section id="calculo" className="py-16">
        <div className="container-page grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-orange"><Calculator /><span className="text-sm font-bold uppercase tracking-widest">Cálculo Laboral</span></div>
            <h2 className="mt-2 text-3xl md:text-4xl">Ten la seguridad de pagar lo correcto: ¡ni más ni menos!</h2>
            <p className="mt-4 text-muted-foreground">Calculamos liquidaciones, prestaciones sociales, vacaciones, utilidades, horas extras, días feriados trabajados, indemnizaciones, intereses e incidencia de pagos en dólares. Se entrega con informe e incluye asesoría del caso.</p>
            <p className="price-tag mt-6">$30<sup className="text-base">*</sup></p>
            <a href={waLink("Hola, necesito un cálculo laboral.")} target="_blank" rel="noopener" className="btn-orange mt-4"><MessageCircle size={18}/> Solicitar por WhatsApp</a>
            <p className="text-xs text-muted-foreground mt-2">* {site.pricingNote}</p>
          </div>
          <img src={images.cursoCalculo} alt="Cálculo laboral" className="rounded-2xl shadow-lg" loading="lazy" width={600} height={400} />
        </div>
      </section>
    </Layout>
  );
}

function PlanCard({ badge, price, suffix, features, cta, highlight }: { badge: string; price: number; suffix: string; features: string[]; cta: string; highlight?: boolean }) {
  return (
    <div className={`card-soft p-8 relative ${highlight ? "ring-2 ring-orange" : ""}`}>
      {highlight && <span className="absolute -top-3 left-8 bg-orange text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Más solicitado</span>}
      <div className="text-sm font-bold uppercase tracking-widest text-brand">Plan {badge}</div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="price-tag">desde ${price}</span>
        <span className="text-muted-foreground">{suffix}</span>
      </div>
      <ul className="check-list mt-6">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a href={waLink(`Hola, quiero información del ${badge === "Empresas" ? "Plan Empresas" : "Plan Profesionales"}.`)} target="_blank" rel="noopener" className="btn-orange mt-6 w-full"><MessageCircle size={18}/> {cta}</a>
      <p className="text-xs text-muted-foreground mt-3">{site.pricingNote}</p>
    </div>
  );
}

function ConsultaCard({ icon, title, price, desc }: { icon: React.ReactNode; title: string; price: number; desc: string }) {
  return (
    <div className="card-soft p-6 text-center">
      <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto">{icon}</div>
      <h3 className="mt-4 text-xl">Consulta {title}</h3>
      <p className="price-tag mt-3">${price}<sup className="text-sm">*</sup></p>
      <p className="text-sm text-muted-foreground mt-3">{desc}</p>
      <a href={waLink(`Hola, quiero una consulta ${title.toLowerCase()}.`)} target="_blank" rel="noopener" className="btn-orange mt-5 w-full text-sm"><MessageCircle size={16}/> Solicitar por WhatsApp</a>
    </div>
  );
}
