import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { images, site } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-orange">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-brand">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-brand">Reintentar</button>
          <a href="/" className="btn-outline-brand">Ir al inicio</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} | Asesores Laborales en Caracas` },
      { name: "description", content: "Escritorio jurídico venezolano especializado en asesoría laboral. Consultas, cursos, guías y acompañamiento legal para empresas." },
      { name: "author", content: site.name },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#26389C" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: images.favicon, type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LegalService", "LocalBusiness", "Organization"],
              "@id": `https://${site.domain}/#organization`,
              name: site.name,
              alternateName: site.shortName,
              url: `https://${site.domain}`,
              logo: {
                "@type": "ImageObject",
                url: `https://${site.domain}${images.logo}`,
              },
              image: `https://${site.domain}${images.logo}`,
              description:
                "Escritorio jurídico venezolano especializado en asesoría laboral con más de 18 años de experiencia.",
              telephone: site.phone,
              email: site.email,
              priceRange: "$$",
              foundingDate: "2009",
              vatID: site.rif,
              taxID: site.rif,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Los Chaguaramos",
                addressLocality: "Caracas",
                postalCode: "1040",
                addressRegion: "Distrito Capital",
                addressCountry: "VE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.4806,
                longitude: -66.8664,
              },
              areaServed: [
                { "@type": "Country", name: "Venezuela" },
                { "@type": "City", name: "Caracas" },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: site.whatsapp,
                  contactType: "customer service",
                  areaServed: "VE",
                  availableLanguage: ["Spanish"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: site.phone,
                  contactType: "customer service",
                  areaServed: "VE",
                  availableLanguage: ["Spanish"],
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:30",
                  closes: "17:30",
                },
              ],
              sameAs: [
                site.social.facebook,
                site.social.instagram,
                site.social.linkedin,
                site.social.x,
              ],
            },
            {
              "@type": "WebSite",
              "@id": `https://${site.domain}/#website`,
              url: `https://${site.domain}`,
              name: site.name,
              inLanguage: "es-VE",
              publisher: { "@id": `https://${site.domain}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-VE">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
