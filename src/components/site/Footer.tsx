import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { images, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand text-white">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={images.logo} alt={site.name} className="h-14 w-auto bg-white rounded-lg p-1" width={56} height={72} />
            <div>
              <div className="font-extrabold">DÍAZ PINO & ASOCIADOS</div>
              <div className="text-white/70 text-sm">{site.tagline}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/80 max-w-sm">
            Escritorio jurídico venezolano especializado en asesoría laboral con más de 18 años de experiencia.
          </p>
          <p className="mt-3 text-xs text-white/60">RIF: {site.rif}</p>
          <div className="mt-4 flex gap-3">
            <a href={site.social.facebook} aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-orange transition"><Facebook size={18} /></a>
            <a href={site.social.instagram} aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-orange transition"><Instagram size={18} /></a>
            <a href={site.social.x} aria-label="X" className="p-2 rounded-full bg-white/10 hover:bg-orange transition"><Twitter size={18} /></a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-orange transition"><Linkedin size={18} /></a>
          </div>
        </div>
        <FooterCol title="Nosotros" items={[
          { to: "/nosotros", label: "Quiénes somos" },
          { to: "/nosotros", label: "Equipo" },
          { to: "/contacto", label: "Contacto" },
        ]} />
        <FooterCol title="Servicios" items={[
          { to: "/servicios", label: "Asesoría Continua" },
          { to: "/servicios", label: "Consultas" },
          { to: "/servicios", label: "Contratos" },
          { to: "/servicios", label: "Cálculo Laboral" },
        ]} />
        <FooterCol title="Recursos" items={[
          { to: "/cursos", label: "Cursos" },
          { to: "/recursos/guias", label: "Guías" },
          { to: "/recursos/temas", label: "Temas" },
          { to: "/recursos/faq", label: "Preguntas frecuentes" },
        ]} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 grid gap-4 md:grid-cols-2 text-sm text-white/80">
          <div className="space-y-2">
            <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {site.address}</div>
            <div className="flex items-center gap-2"><Phone size={16} /> WhatsApp {site.whatsapp} · Tel. {site.phone}</div>
            <div className="flex items-center gap-2"><Mail size={16} /> {site.email}</div>
          </div>
          <div className="md:text-right">
            <iframe
              title="Mapa Caracas"
              className="w-full h-40 rounded-xl border border-white/10"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-66.9%2C10.45%2C-66.83%2C10.51&amp;layer=mapnik"
              loading="lazy"
            />
          </div>
        </div>
        <div className="container-page py-4 text-xs text-white/60 text-center border-t border-white/10">
          2009-2026 © Escritorio Jurídico Díaz, Pino & Asociados. {site.pricingNote}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-white font-extrabold mb-3 text-sm uppercase tracking-wide">{title}</h3>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((i, k) => (
          <li key={k}><Link to={i.to} className="hover:text-orange transition">{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
