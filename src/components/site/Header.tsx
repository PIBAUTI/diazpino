import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { images, site } from "@/lib/site";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/cursos", label: "Cursos" },
  { to: "/recursos", label: "Recursos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={images.logo} alt={site.name} className="h-12 w-auto shrink-0" width={60} height={78} />
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="text-brand font-extrabold text-sm truncate">DÍAZ PINO & ASOCIADOS</span>
            <span className="text-xs text-muted-foreground truncate">Asesores Laborales</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-ink hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
            >
              {n.label}
            </Link>
          ))}
          <a href={site.whatsappLink} target="_blank" rel="noopener" className="btn-orange text-sm">
            Consulta por WhatsApp
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-brand"
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 font-semibold text-ink border-b border-border last:border-0"
                activeProps={{ className: "text-brand" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={site.whatsappLink} target="_blank" rel="noopener" className="btn-orange mt-3">
              Consulta por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
