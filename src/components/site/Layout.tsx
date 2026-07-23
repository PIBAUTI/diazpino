import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export function PageHero({ title, subtitle, kicker }: { title: string; subtitle?: string; kicker?: string }) {
  return (
    <section className="bg-brand text-white py-14 md:py-20">
      <div className="container-page">
        {kicker && <p className="text-orange font-bold uppercase tracking-wider text-sm mb-3">{kicker}</p>}
        <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/85 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
