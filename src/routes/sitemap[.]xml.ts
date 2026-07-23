import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { temas, guias } from "@/lib/site";

const BASE_URL = "https://diazpino.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/servicios", "/cursos", "/recursos", "/recursos/temas", "/recursos/guias", "/recursos/faq", "/nosotros", "/contacto",
        ];
        const paths = [
          ...staticPaths,
          ...temas.map((t) => `/recursos/temas/${t.slug}`),
        ];
        // guias currently one page (no per-slug page), so we skip
        void guias;
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
