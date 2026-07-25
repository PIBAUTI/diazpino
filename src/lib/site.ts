import logoUrl from "@/assets/logo-dpa.png";
import faviconUrl from "@/assets/favicon.ico";
import heroUrl from "@/assets/hero.jpg";
import avilaUrl from "@/assets/imagen-avila.jpg";
import asesoriaUrl from "@/assets/asesoria-telefonica.png";
import solUrl from "@/assets/sol-diaz.jpg";
import juanUrl from "@/assets/juan-bautista-pino.jpg";
import cursoSalarioUrl from "@/assets/curso-salario-dolarizacion.jpg";
import cursoCalculoUrl from "@/assets/curso-calculo-laboral.jpg";
import cursoObligacionesUrl from "@/assets/curso-obligaciones-laborales.jpg";
import cursoDocUrl from "@/assets/curso-documentacion-laboral.jpg";
import guideCoverUrl from "@/assets/guide-cover.jpg";
import guiaPrestacionesUrl from "@/assets/guia-prestaciones.png";
import guiaUtilidadesUrl from "@/assets/guia-utilidades.png";
import guiaJornadaUrl from "@/assets/guia-jornada.jpg";
import guiaVacacionesUrl from "@/assets/guia-vacaciones.jpg";
import guiaMujerUrl from "@/assets/guia-mujer.png";
import guiaCestaticketsUrl from "@/assets/guia-cestatickets.jpg";

export const site = {
  name: "Díaz, Pino & Asociados",
  shortName: "Díaz Pino",
  domain: "diazpino.com",
  tagline: "¡Capacitamos, asesoramos y acompañamos!",
  rif: "J-29729157-1",
  address: "Los Chaguaramos, Caracas 1040, DC, Venezuela",
  whatsapp: "+58 424-153-7804",
  whatsappLink: "https://wa.me/584241537804",
  phone: "+58 424-117-4325",
  email: "info@diazpino.com",
  social: {
    facebook: "https://facebook.com/diazpinoasesoreslaborales",
    instagram: "https://instagram.com/diazpinoyasociados",
    x: "https://twitter.com/empleadoraldia",
    linkedin: "https://linkedin.com/in/diazpino",
  },
  stats: [
    { value: "+18", label: "años de experiencia" },
    { value: "2.785", label: "clientes satisfechos" },
    { value: "534", label: "cursos dictados" },
    { value: "4.367", label: "respuestas dadas" },
  ],
  pricingNote:
    "Honorarios calculados según el Tipo de Cambio de Referencia del BCV. IVA incluido.",
};

export const images = {
  logo: logoUrl,
  favicon: faviconUrl,
  hero: heroUrl,
  avila: avilaUrl,
  asesoria: asesoriaUrl,
  sol: solUrl,
  juan: juanUrl,
  cursoSalario: cursoSalarioUrl,
  cursoCalculo: cursoCalculoUrl,
  cursoObligaciones: cursoObligacionesUrl,
  cursoDoc: cursoDocUrl,
  guideCover: guideCoverUrl,
  guiaPrestaciones: guiaPrestacionesUrl,
  guiaUtilidades: guiaUtilidadesUrl,
  guiaJornada: guiaJornadaUrl,
  guiaVacaciones: guiaVacacionesUrl,
  guiaMujer: guiaMujerUrl,
  guiaCestatickets: guiaCestaticketsUrl,
};

export function waLink(message: string): string {
  return `${site.whatsappLink}?text=${encodeURIComponent(message)}`;
}

export const testimonials = [
  {
    quote:
      "Es un curso muy didáctico, con sus explicaciones y el material de apoyo aprendes, comprendes y actúas.",
    author: "Odalis Colmenares",
    role: "Contador Público, Gte. de Administración y Finanzas",
  },
  {
    quote:
      "El curso te da el aprendizaje que ofrece, además de muchos otros temas del área, y hay buena interacción con el presentador.",
    author: "Yokogui González",
    role: "Lic. Administración, Gte. de Capital Humano",
  },
  {
    quote:
      "Es un curso bastante completo, con muy buena facilitadora; me permitió reforzar y obtener conocimientos.",
    author: "Maritza Morales",
    role: "Gerente de Talento Humano",
  },
  {
    quote: "Excelente material, lo recomiendo ampliamente.",
    author: "Pedro Castro",
    role: "Gerente de RRII",
  },
];

export const cursos = [
  {
    slug: "salario-y-dolarizacion",
    title: "Salario y Dolarización",
    price: 30,
    hours: "9 horas académicas",
    image: images.cursoSalario,
    desc: "Pago de salario en dólares: fundamento legal, impacto en prestaciones, recibos, cambio de modalidad y beneficios sin incidencia salarial.",
  },
  {
    slug: "calculo-prestaciones-liquidaciones",
    title: "Cálculo de Prestaciones Sociales y Liquidaciones",
    price: 30,
    hours: "9 horas académicas",
    image: images.cursoCalculo,
    desc: "El curso más completo del país: LOT vs LOTTT, salario base, régimen de prestaciones, anticipos, tablas y casos prácticos.",
  },
  {
    slug: "obligaciones-formalidades-empleador",
    title: "Obligaciones y Formalidades del Empleador",
    price: 70,
    hours: "18 horas académicas",
    image: images.cursoObligaciones,
    desc: "Documentación laboral, contratos, beneficios, jornada, suspensión y terminación, seguridad social y LOPCYMAT.",
  },
  {
    slug: "documentacion-laboral",
    title: "Documentación Laboral",
    price: 60,
    hours: "13 horas académicas",
    image: images.cursoDoc,
    desc: "Prepárese para inspecciones del Ministerio del Trabajo: organización de la empresa, reglamentos internos, expedientes y pruebas de cumplimiento.",
  },
];

export const guias = [
  { slug: "calculo-prestaciones", title: "Cálculo de Prestaciones", price: 15, image: images.guiaPrestaciones, desc: "PDF con tablas Excel modificables + consulta telefónica gratuita." },
  { slug: "calculo-utilidades", title: "Cálculo de Utilidades", price: 15, image: images.guiaUtilidades, desc: "PDF con tablas Excel modificables + consulta telefónica gratuita." },
  { slug: "jornada-de-trabajo", title: "Jornada de Trabajo", price: 15, image: images.guiaJornada, desc: "85 páginas, PDF y documentos modificables + consulta telefónica gratuita." },
  { slug: "calculo-vacaciones", title: "Cálculo de Vacaciones", price: 15, image: images.guiaVacaciones, desc: "PDF con tablas Excel modificables + consulta telefónica gratuita." },
  { slug: "derechos-mujer-familia", title: "Derechos Laborales de la Mujer y la Familia", price: 15, image: images.guiaMujer, desc: "Autora: Sol Díaz. PDF + consulta telefónica gratuita." },
  { slug: "beneficio-alimentacion", title: "Beneficio de Alimentación (Cestatickets)", price: 15, image: images.guiaCestatickets, desc: "PDF con tablas modificables + consulta telefónica gratuita." },
];

export const temas = [
  { slug: "vacaciones", title: "Vacaciones", excerpt: "Cómo se otorgan, cuántos días corresponden y qué pagar." },
  { slug: "reposo-medico", title: "Reposo Médico", excerpt: "Validez, pago, tiempo máximo y efectos en el contrato." },
  { slug: "anticipo-prestaciones", title: "Anticipo de Prestaciones", excerpt: "Cuándo procede y cómo tramitarlo correctamente." },
  { slug: "contrato-tiempo-determinado", title: "Contrato a Tiempo Determinado", excerpt: "Requisitos, duración y riesgos frecuentes." },
  { slug: "cesta-tickets", title: "Cesta Tickets", excerpt: "Cálculo, forma de pago y actualización del beneficio." },
  { slug: "periodo-prueba", title: "Período de Prueba", excerpt: "Alcance real y cómo documentarlo." },
  { slug: "despido", title: "Despido", excerpt: "Causas justificadas, indemnización y procedimiento." },
  { slug: "prestaciones", title: "Prestaciones Sociales", excerpt: "Depósitos, intereses y liquidación final." },
  { slug: "dias-feriados", title: "Días Feriados", excerpt: "Cómo se pagan y cuándo hay recargo." },
  { slug: "dias-descanso", title: "Días de Descanso", excerpt: "Descanso semanal obligatorio y compensatorio." },
  { slug: "beneficios-no-remunerativos", title: "Beneficios No Remunerativos", excerpt: "Qué otorga sin incidencia salarial." },
  { slug: "horario-trabajo", title: "Horario de Trabajo", excerpt: "Jornadas, límites y flexibilidad legal." },
  { slug: "utilidades", title: "Utilidades", excerpt: "Cálculo, oportunidad de pago y casos especiales." },
  { slug: "bono-vacacional", title: "Bono Vacacional", excerpt: "Días, salario base y oportunidad de pago." },
  { slug: "reposo-pre-y-post-natal", title: "Reposo Pre y Post Natal", excerpt: "Derechos de la trabajadora y del padre." },
  { slug: "salario", title: "Salario", excerpt: "Composición, salario normal e integral." },
  { slug: "sabados", title: "Sábados", excerpt: "¿Son laborables? Efectos según la jornada." },
];

export const faqs = [
  { q: "¿Cuántos días de vacaciones corresponden por año?", a: "El trabajador tiene derecho a 15 días hábiles de vacaciones al cumplir el primer año, con un día adicional por cada año de servicio, hasta un máximo de 30 días hábiles." },
  { q: "¿Puedo pagar el salario en dólares?", a: "Sí, es posible pactar el pago en divisas siempre que se documente correctamente y se calculen los beneficios laborales conforme a la LOTTT. Ver nuestro curso de Salario y Dolarización." },
  { q: "¿Qué pasa si un trabajador no supera el período de prueba?", a: "El período de prueba debe estar expresamente pactado por escrito. Si no se supera, el contrato termina sin indemnización, pero deben pagarse los conceptos causados." },
  { q: "¿Cómo se calculan las prestaciones sociales?", a: "Se depositan trimestralmente 15 días de salario integral y anualmente 2 días adicionales acumulativos, más los intereses. Al terminar la relación, se compara con el cálculo retroactivo y se paga lo mayor." },
  { q: "¿Cuándo se pagan las utilidades?", a: "En los primeros 15 días de diciembre, con un mínimo de 30 días y máximo de 120 días de salario, según lo que produzca la empresa." },
  { q: "¿Qué es la Auditoría Laboral a Distancia?", a: "Es un diagnóstico preventivo de las obligaciones laborales de su empresa que realizamos de forma remota, para identificar riesgos y corregir a tiempo." },
];
