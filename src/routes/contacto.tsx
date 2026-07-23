import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { site, waLink } from "@/lib/site";
import { MessageCircle, Phone, Mail, MapPin, Video, Building2, FileText } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contáctanos - Abogados Laborales Venezuela | Díaz Pino" },
      { name: "description", content: "Escríbenos por WhatsApp, teléfono o correo. Atendemos a empresas en Venezuela y a la diáspora venezolana en el mundo." },
      { property: "og:title", content: "Contacto | Díaz Pino & Asociados" },
      { property: "og:description", content: "Consultas telefónicas, escritas, in company y online para la diáspora." },
      { property: "og:url", content: "https://diazpino.com/contacto" },
    ],
    links: [{ rel: "canonical", href: "https://diazpino.com/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero kicker="Contacto" title="Hablemos" subtitle="Estamos listos para atender tu caso. La forma más rápida es por WhatsApp." />

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <a href={waLink("Hola, quiero información sobre sus servicios.")} target="_blank" rel="noopener" className="btn-whatsapp text-lg w-full sm:w-auto"><MessageCircle /> Escribir por WhatsApp</a>
            <div className="mt-8 space-y-4 text-ink">
              <ContactRow icon={<MapPin />} label="Dirección" value={site.address} />
              <ContactRow icon={<Phone />} label="WhatsApp" value={site.whatsapp} href={site.whatsappLink} />
              <ContactRow icon={<Phone />} label="Teléfono" value={site.phone} href={`tel:${site.phone.replace(/\s/g,'')}`} />
              <ContactRow icon={<Mail />} label="Correo" value={site.email} href={`mailto:${site.email}`} />
            </div>

            <h2 className="mt-10 text-2xl">Modalidades de atención</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Modality icon={<Phone />} title="Telefónica" desc="Respuesta verbal con soporte legal." />
              <Modality icon={<FileText />} title="Escrita" desc="Informe formal con respaldo jurídico." />
              <Modality icon={<Building2 />} title="In Company" desc="Talleres y asesoría en tu empresa." />
              <Modality icon={<Video />} title="Online (Diáspora)" desc="Videoconferencia con abogado laboral." />
            </div>
          </div>

          <div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-soft p-6 space-y-4">
              <h2 className="text-2xl">Envíanos un mensaje</h2>
              <Field label="Nombre" name="name" required />
              <Field label="Correo" name="email" type="email" required />
              <Field label="Teléfono / WhatsApp" name="phone" />
              <div>
                <label className="text-sm font-semibold text-ink block mb-1">Mensaje</label>
                <textarea required rows={5} className="w-full rounded-2xl border border-border px-4 py-3 focus:outline-none focus:border-brand" />
              </div>
              <button type="submit" className="btn-orange w-full">Enviar mensaje</button>
              {sent && <p className="text-sm text-brand font-semibold">¡Gracias! Te responderemos pronto. Si es urgente, escríbenos por WhatsApp.</p>}
              <p className="text-xs text-muted-foreground">Para respuesta inmediata usa WhatsApp.</p>
            </form>

            <iframe
              title="Mapa Caracas"
              className="w-full h-56 rounded-2xl border border-border mt-6"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-66.9%2C10.45%2C-66.83%2C10.51&amp;layer=mapnik"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{label}</div>
        <div className="font-semibold text-ink">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:text-orange transition">{content}</a> : content;
}

function Modality({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card-soft p-4">
      <div className="flex items-center gap-2 text-brand font-bold">{icon} {title}</div>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink block mb-1">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-full border border-border px-4 py-3 focus:outline-none focus:border-brand" />
    </div>
  );
}
