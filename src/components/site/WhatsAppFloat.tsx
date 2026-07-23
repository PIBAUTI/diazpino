import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      data-analytics="wa-float"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp text-white font-bold px-4 py-3 shadow-2xl hover:brightness-110 transition"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.16-3.41-8.44zM12.06 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.36-.21-3.77.99 1-3.67-.23-.38a9.75 9.75 0 0 1-1.5-5.1c0-5.39 4.39-9.78 9.79-9.78 2.61 0 5.07 1.02 6.92 2.87a9.72 9.72 0 0 1 2.87 6.92c0 5.39-4.39 9.72-9.76 9.72zm5.36-7.31c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.94 1.16-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.51.07-.77.36s-1.02.99-1.02 2.41 1.05 2.8 1.19 3c.15.19 2.06 3.14 4.98 4.4.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.12.56-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.34z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
