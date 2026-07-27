import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { temas, waLink } from "@/lib/site";
import { breadcrumbLd } from "@/lib/breadcrumbs";
import { MessageCircle, ArrowLeft, BookOpen } from "lucide-react";

type QA = { q: string; a: React.ReactNode };
type Section = { heading: string; body: React.ReactNode };
type ArticleContent = {
  intro: string;
  qas?: QA[];
  sections?: Section[];
  extraCta?: { label: string; to: string; note?: string };
};

const articles: Record<string, ArticleContent> = {
  vacaciones: {
    intro:
      "Las vacaciones son un descanso continuo, de duración determinada por la ley, que se reconoce después de un año de servicios ininterrumpidos, con la finalidad de reponer el desgaste físico y mental del trabajador y promover el acercamiento familiar. A continuación respondemos las preguntas más frecuentes conforme a la Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT).",
    qas: [
      { q: "¿Cuándo nace el derecho a las vacaciones?", a: "Cuando el trabajador cumple un (1) año de trabajo ininterrumpido (Art. 190 LOTTT)." },
      { q: "¿Cuántos días de disfrute le corresponden al trabajador?", a: "15 días hábiles remunerados el primer año, más un (1) día adicional por cada año de servicio, hasta un máximo de 15 días adicionales (30 días hábiles en total) (Art. 190 LOTTT)." },
      { q: "¿Corresponden cesta tickets durante las vacaciones?", a: "Sí. Durante el periodo de vacaciones el trabajador tiene derecho al beneficio de alimentación, que debe pagarse por anticipado al inicio del disfrute (Art. 190 y 194 LOTTT)." },
      { q: "¿Se pagan las cotizaciones a la seguridad social durante las vacaciones?", a: "Sí. El servicio no se considera interrumpido por las vacaciones a los fines del pago de cotizaciones y contribuciones (Art. 190 LOTTT)." },
      { q: "¿Cuántos días corresponden por bono vacacional?", a: "Un mínimo de 15 días de salario normal más un (1) día por cada año de servicio, hasta un total de 30 días. El bono vacacional tiene carácter salarial (Art. 192 LOTTT)." },
      { q: "¿Cuándo se paga el salario de vacaciones, el bono vacacional y el beneficio de alimentación?", a: "Al inicio de las vacaciones (Art. 194 LOTTT)." },
      { q: "¿Qué pasa si termina la relación de trabajo con vacaciones vencidas y no disfrutadas?", a: "El patrono debe pagarlas calculadas al salario normal devengado a la fecha de terminación (Art. 195 LOTTT)." },
      {
        q: "¿Qué son las vacaciones fraccionadas?",
        a: (
          <>
            Cuando la relación termina antes de cumplir el año, el trabajador tiene derecho al pago proporcional de vacaciones y bono vacacional por los meses completos trabajados (Art. 196 LOTTT).
            <br />
            <strong>Fórmula:</strong> VF = días que hubieran correspondido × meses completos trabajados ÷ 12.
            <br />
            <strong>Ejemplo:</strong> por 8 meses trabajados → 15 × 8 ÷ 12 = 10 días de salario y 10 días de bono vacacional.
          </>
        ),
      },
      { q: "¿Puede el empleador pagar las vacaciones sin conceder el disfrute?", a: "No. El disfrute efectivo es obligatorio, tanto para el trabajador como para el patrono (Art. 197 LOTTT)." },
      { q: "¿Qué pasa si el empleador paga pero no concede el disfrute?", a: "Deberá conceder el disfrute y volver a pagarlo con el salario que devengue el trabajador al momento del disfrute (Art. 197 LOTTT)." },
      { q: "¿Puede el trabajador acumular vacaciones?", a: "Sí, hasta dos (2) periodos, a solicitud del trabajador (Art. 199 LOTTT)." },
      { q: "¿Se puede adelantar o posponer el disfrute?", a: "Se puede adelantar solo para hacerlo coincidir con las vacaciones escolares, en el caso de trabajadores con hijos en edad escolar (Art. 199 LOTTT)." },
      { q: "¿Por cuánto tiempo se puede posponer el disfrute?", a: "Hasta tres (3) meses a partir de la fecha en que nació el derecho, salvo el caso de acumulación o postergación familiar (Art. 200 LOTTT)." },
      { q: "¿Se pueden descontar días de vacaciones cuando el trabajador falta?", a: "Depende del tipo de falta: si es justificada, no se descuenta. Si es injustificada y suman siete (7) o más días al año, y el patrono pagó el salario de esos días, se pueden imputar al periodo de vacaciones (Art. 202 LOTTT)." },
      {
        q: "¿Cuál es el salario base de cálculo de las vacaciones y el bono vacacional?",
        a: (
          <>
            <strong>Salario fijo:</strong> el salario normal devengado en el mes efectivo de labores inmediatamente anterior al disfrute.
            <br />
            <strong>Salario variable:</strong> el promedio del salario normal de los tres (3) meses inmediatamente anteriores al disfrute.
          </>
        ),
      },
    ],
    extraCta: { label: "Ver Guía de Cálculo de Vacaciones ($15)", to: "/recursos/guias#calculo-vacaciones" },
  },
  "reposo-medico": {
    intro:
      "Respuestas a las consultas más frecuentes sobre reposos médicos, con base en la LOTTT y la práctica ante el IVSS.",
    qas: [
      { q: "¿Cómo se valida un reposo médico ante el IVSS?", a: "Los reposos deben ser convalidados por el IVSS cuando son mayores a 3 días, ya que el IVSS otorga la prestación dineraria a partir del cuarto día de reposo." },
      { q: "¿Puedo viajar estando de reposo?", a: "En principio no: si estás de reposo no estás en condiciones de trabajar ni de viajar, salvo que el viaje sea para recibir tratamiento médico." },
      { q: "Un trabajador se accidentó durante sus vacaciones y trajo un reposo. ¿Qué hago?", a: "Se suspende el disfrute de las vacaciones, que se reanuda al terminar el reposo. Ejemplo: si el accidente ocurrió en el día 10 de un disfrute de 20 días, se suspenden las vacaciones, el trabajador toma su reposo, y luego retoma los 10 días restantes. El reposo debe estar validado por el IVSS y conviene una evaluación médico-ocupacional post vacacional." },
      { q: "¿Es legal descontar los 3 primeros días de reposo y pagar desde el 4º día el 33,33% del salario?", a: "Sí. El salario es la retribución por el trabajo prestado; para la contingencia de enfermedad existe la seguridad social, cuya indemnización diaria comienza a partir del cuarto día de reposo." },
      { q: "¿Se pueden descontar los días de inasistencia por reposo?", a: "Las inasistencias y reposos de hasta 3 días pueden descontarse, ya que el trabajador no prestó servicio. Estos justificativos sirven para justificar la falta (la enfermedad es causa de inasistencia justificada, Art. 70 lit. F LOTTT), por lo que no son causal de despido aunque se acumulen. Los reposos mayores a 3 días deben convalidarse ante el IVSS." },
      { q: "¿Debo pagar el reposo de una trabajadora por enfermedad de su hijo?", a: "Es práctica aceptada por el IVSS convalidar reposos por enfermedad de un hijo, con sustento en los artículos 76 y 78 de la Constitución y el Art. 25 de la LOPNNA. Si el reposo está validado por el IVSS, se paga el 33,33% del salario (el IVSS cubre el 66% restante a partir del 4º día). Si no se validó ante el IVSS y solo hubo reposo de un médico privado, hay suspensión de la relación y el empleador no está obligado a pagar salario, pero las faltas siguen siendo justificadas." },
      { q: "Funcionaria pública con 52 semanas de reposo: ¿puede reclamar vacaciones vencidas y cesta ticket?", a: "Los funcionarios se rigen por la Ley del Estatuto de la Función Pública y, en lo no previsto, por la LOTTT. El periodo de faltas justificadas por enfermedad no interrumpe el año para las vacaciones (Art. 202 LOTTT / Art. 16 RGLCA). Puede solicitar sus vacaciones acordando la oportunidad con el jefe de la dependencia. Ante un nuevo reposo, la organización debe pagar el beneficio de alimentación y la diferencia entre lo que pague el IVSS y el salario." },
      { q: "¿Se pagan las utilidades durante el reposo pre y post natal?", a: "Sí. Aunque el Art. 131 LOTTT reduce las utilidades a los meses trabajados, tratándose de la maternidad se hace una interpretación restrictiva para garantizar la protección integral (Art. 76 de la Constitución y convenios internacionales), por lo que deben pagarse completas durante el reposo pre y post natal. En cambio, en un reposo médico común, las utilidades se pagan de forma proporcional." },
      { q: "Trabajador con reposo prolongado: ¿hasta cuándo responde la empresa y cuál es el procedimiento?", a: "El reposo puede durar hasta 52 semanas; al finalizar, el IVSS reevalúa al trabajador y puede extenderlo hasta 52 semanas más. Si no hay recuperación, se solicita la incapacidad ante el IVSS. El retiro no es automático a las 52 semanas: solo procede una vez declarada la incapacidad, con el pago de prestaciones sociales y demás beneficios." },
      { q: "¿Se generan prestaciones sociales durante el reposo?", a: "El tiempo de reposo se computa para la antigüedad (Art. 73 LOTTT), pero no genera prestaciones sociales como tal, porque no se está prestando el servicio ni percibiendo salario. En reposo pre y post natal, esos periodos sí se computan en la antigüedad (Art. 342 LOTTT)." },
      { q: "¿Cuántos días tiene el trabajador para presentar el reposo a la empresa?", a: "Debe notificar al empleador la causa de su inasistencia dentro de los 2 días hábiles siguientes (Art. 79 LOTTT y Art. 37 del Reglamento)." },
      { q: "Me aumentaron el sueldo a todos menos a mí porque estaba de reposo. ¿Es correcto?", a: "Durante el reposo (mayor a 3 días) hay suspensión de la relación: el trabajador no presta servicio y recibe indemnización del IVSS (66,66%) más la diferencia del empleador (33,33%). El aumento aplica cuando el trabajador se reincorpora." },
      { q: "¿Se puede despedir a un trabajador durante un reposo?", a: "No. No se puede despedir a un trabajador durante un reposo (Art. 74 LOTTT). Si es necesario, se contrata un suplente." },
      { q: "¿Cómo se contabilizan los reposos médicos?", a: "Por días continuos, de lunes a domingo. Igual se contabilizan los reposos pre y post natal." },
      { q: "Un compañero cubrió el reposo de otro sin dejar sus funciones. ¿Se le paga extra?", a: "Sí. Si un trabajador cubre las funciones del que está de reposo además de las propias, el empleador debe pagarle adicionalmente por ese trabajo extra, independientemente de su salario. El trabajador también puede negarse a esas funciones extra, sobre todo si afecta su salud." },
      { q: "¿Debo pagar el reposo por un accidente no laboral?", a: "El pago es obligatorio si el trabajador no está afiliado al IVSS por parte de la empresa. Si está afiliado, el empleador solo paga la diferencia (33,33%) entre la indemnización del IVSS (66,66%) y el salario." },
      { q: "Un trabajador de reposo durante vacaciones colectivas: ¿se le conceden y pagan?", a: "Debe concedérsele el disfrute efectivo de sus vacaciones, no como colectivas sino de forma individual, cuando le corresponda o cuando ambas partes lo acuerden. Evita pagar sin que el trabajador disfrute efectivamente." },
    ],
    extraCta: { label: "Conocer la Asesoría Continua", to: "/servicios#asesoria-continua" },
  },
};

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
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbLd([
            { name: "Inicio", path: "/" },
            { name: "Recursos", path: "/recursos" },
            { name: "Temas", path: "/recursos/temas" },
            { name: loaderData.title, path: `/recursos/temas/${loaderData.slug}` },
          ])),
        }]
      : [],
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
  const article = articles[tema.slug];

  return (
    <Layout>
      <article className="py-14">
        <div className="container-page max-w-3xl">
          <Link to="/recursos/temas" className="text-brand text-sm font-semibold inline-flex items-center gap-1 hover:text-orange"><ArrowLeft size={16}/> Volver a temas</Link>
          <h1 className="mt-4 text-4xl md:text-5xl">{tema.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{article?.intro ?? tema.excerpt}</p>

          {article ? (
            <div className="mt-10 space-y-6">
              {article.qas.map((qa, i) => (
                <div key={i} className="card-soft p-6">
                  <p className="font-bold text-brand text-lg">{qa.q}</p>
                  <div className="mt-2 text-ink leading-relaxed">{qa.a}</div>
                </div>
              ))}
            </div>
          ) : (
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
          )}

          <div className="mt-12 card-soft p-8 bg-brand text-white">
            <h2 className="text-white text-2xl">¿Necesitas resolver esto en tu empresa?</h2>
            <p className="mt-2 text-white/85">Escríbenos por WhatsApp y te responde un abogado laboral especialista.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waLink(`Hola, tengo una consulta sobre ${tema.title}.`)} target="_blank" rel="noopener" className="btn-orange"><MessageCircle size={18}/> Escríbenos por WhatsApp</a>
              {article?.extraCta ? (
                <Link to={article.extraCta.to} className="btn-outline-brand !border-white !text-white hover:!bg-white hover:!text-brand"><BookOpen size={18}/> {article.extraCta.label}</Link>
              ) : (
                <Link to="/recursos/guias" className="btn-outline-brand !border-white !text-white hover:!bg-white hover:!text-brand">Ver guías relacionadas</Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
