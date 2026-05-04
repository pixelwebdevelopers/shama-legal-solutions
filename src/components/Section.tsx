import { type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function PageHero({ title, subtitle, image, eyebrow }: { title: string; subtitle?: string; image?: string; eyebrow?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy-deep text-ivory overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
      )}
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,_var(--gold)_1px,_transparent_0)] [background-size:32px_32px]" />
      <div ref={ref} className="reveal relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-ivory/80 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        <div className="gold-divider mt-8 mx-auto w-32" />
      </div>
    </section>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${center ? "text-center mx-auto max-w-3xl" : ""} mb-12`}>
      {eyebrow && <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-deep">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      <div className={`gold-divider mt-6 w-24 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
