import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/use-reveal";
import { ScalesIcon } from "@/components/ScalesIcon";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Section, SectionTitle } from "@/components/Section";
import { ConsultationForm } from "@/components/ConsultationForm";
import { waLink } from "@/lib/translations";
import {
  Scale, Gavel, Heart, Building2, Briefcase, FileText, Building, Baby, ShieldCheck,
  ArrowRight, Clock, Users, BadgePercent, MapPin, Star, CheckCircle2, MessageCircle
} from "lucide-react";
import advocate from "@/assets/advocate-portrait.jpg";
import lahore from "@/assets/lahore-court.jpg";
import hyderabad from "@/assets/hyderabad-city.jpg";
import gavel from "@/assets/gavel.jpg";
import family from "@/assets/family-consult.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shama Legal Solutions | Top Female Advocate in Lahore & Hyderabad" },
      { name: "description", content: "Trusted female-led legal chamber in Pakistan. Civil, Criminal, Family, Banking, Bail, NTN & Company Registration. Free WhatsApp consultation. 50% discount on every case." },
      { property: "og:title", content: "Shama Legal Solutions | Trusted Advocate in Pakistan" },
      { property: "og:description", content: "Expert legal counsel in Lahore & Hyderabad. Panel-reviewed cases. 24/7 service." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();

  const services = [
    { key: "civil", icon: Scale, ...t.services.civil },
    { key: "criminal", icon: Gavel, ...t.services.criminal },
    { key: "family", icon: Heart, ...t.services.family },
    { key: "banking", icon: Building2, ...t.services.banking },
    { key: "labour", icon: Briefcase, ...t.services.labour },
    { key: "ntn", icon: FileText, ...t.services.ntn },
    { key: "company", icon: Building, ...t.services.company },
    { key: "custody", icon: Baby, ...t.services.custody },
    { key: "bail", icon: ShieldCheck, ...t.services.bail },
  ];

  const heroRef = useReveal<HTMLDivElement>();
  const aboutRef = useReveal<HTMLDivElement>();
  const aboutImgRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          poster={gavel}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,_transparent_0%,_oklch(0.15_0.04_260/0.6)_80%)]" />

        <ScalesIcon className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-20 h-64 lg:h-96 text-gold/20 animate-scale-tilt hidden md:block" />

        <div ref={heroRef} className="reveal relative z-10 mx-auto max-w-5xl px-6 text-center text-ivory pt-24 pb-12">
          <p className="text-gold tracking-[0.4em] text-xs sm:text-sm uppercase mb-6">{t.hero.eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            {t.hero.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-shimmer">{t.hero.title.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="mt-6 text-ivory/85 text-base sm:text-lg max-w-2xl mx-auto">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink(t.misc.whatsappPrompt)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-deep px-8 py-4 font-semibold hover:bg-ivory transition shadow-gold">
              <MessageCircle className="h-5 w-5" /> {t.cta.consult}
            </a>
            <Link to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 text-ivory px-8 py-4 font-semibold hover:bg-gold/10 transition">
              {t.cta.viewServices} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { v: t.hero.stat1, l: t.hero.stat1Label },
              { v: t.hero.stat2, l: t.hero.stat2Label },
              { v: t.hero.stat3, l: t.hero.stat3Label },
            ].map((s) => (
              <div key={s.l} className="text-center border-l border-gold/30 first:border-l-0 px-2">
                <div className="font-display text-2xl sm:text-4xl font-bold text-gold">{s.v}</div>
                <div className="text-ivory/70 text-xs sm:text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-ivory/40 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-navy text-ivory border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { i: Clock, l: t.trust.always },
            { i: Users, l: t.trust.panel },
            { i: BadgePercent, l: t.trust.discount },
            { i: MapPin, l: t.trust.cities },
          ].map(({ i: I, l }) => (
            <div key={l} className="flex items-center justify-center gap-2">
              <I className="h-4 w-4 text-gold" /> <span>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <Section className="bg-ivory">
        <SectionTitle eyebrow="Practice Areas" title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const ref = useReveal<HTMLDivElement>();
            const Icon = s.icon;
            return (
              <div key={s.key} ref={ref} className="reveal" style={{ animationDelay: `${i * 60}ms` }}>
                <Link to="/services" className="card-elegant block p-7 h-full group">
                  <div className="h-14 w-14 rounded-xl gradient-navy flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-deep mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                    {t.misc.readMore} <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ABOUT */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={aboutImgRef} className="reveal-left reveal relative">
            <div className="absolute -inset-4 gradient-gold rounded-2xl rotate-2 opacity-20" />
            <img src={advocate} alt="Advocate Shama Moazzam, female lawyer in Lahore Pakistan" loading="lazy"
              width={1024} height={1024}
              className="relative rounded-2xl shadow-elegant w-full" />
            <div className="absolute -bottom-6 -right-6 bg-navy-deep text-ivory rounded-xl p-5 shadow-gold border border-gold/30 hidden sm:block">
              <div className="font-display text-3xl text-gold font-bold">15+</div>
              <div className="text-xs">Years of Practice</div>
            </div>
          </div>
          <div ref={aboutRef} className="reveal-right reveal">
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">About</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-deep">{t.about.title}</h2>
            <div className="gold-divider my-6 w-24" />
            <p className="text-foreground text-lg leading-relaxed mb-4">{t.about.lead}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.about.body}</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { t: t.about.pillar1, d: t.about.pillar1Desc },
                { t: t.about.pillar2, d: t.about.pillar2Desc },
                { t: t.about.pillar3, d: t.about.pillar3Desc },
              ].map((p) => (
                <div key={p.t} className="bg-secondary rounded-lg p-4 border-l-4 border-gold">
                  <div className="flex items-center gap-2 font-semibold text-navy-deep mb-1">
                    <CheckCircle2 className="h-4 w-4 text-gold" /> {p.t}
                  </div>
                  <p className="text-xs text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-navy-deep font-semibold hover:text-gold">
              {t.misc.readMore} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* WHY */}
      <section className="relative py-20 bg-navy-deep text-ivory overflow-hidden">
        <img src={gavel} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitleDark title={t.why.title} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { v: t.why.stat1, l: t.why.stat1Label },
              { v: t.why.stat2, l: t.why.stat2Label },
              { v: t.why.stat3, l: t.why.stat3Label },
              { v: t.why.stat4, l: t.why.stat4Label },
            ].map((s) => (
              <div key={s.l} className="text-center bg-navy/60 rounded-2xl p-6 border border-gold/20 backdrop-blur">
                <div className="font-display text-4xl md:text-5xl font-bold text-gold">
                  <AnimatedCounter value={s.v} />
                </div>
                <div className="text-ivory/80 text-sm mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Section className="bg-ivory">
        <SectionTitle eyebrow="Our Process" title={t.process.title} />
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          {[
            { n: "01", t: t.process.step1, d: t.process.step1Desc },
            { n: "02", t: t.process.step2, d: t.process.step2Desc },
            { n: "03", t: t.process.step3, d: t.process.step3Desc },
            { n: "04", t: t.process.step4, d: t.process.step4Desc },
          ].map((s, i) => {
            const ref = useReveal<HTMLDivElement>();
            return (
              <div key={s.n} ref={ref} className="reveal text-center relative" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="relative mx-auto h-20 w-20 rounded-full gradient-navy flex items-center justify-center text-gold font-display text-2xl font-bold shadow-elegant border-2 border-gold">
                  {s.n}
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-deep mt-5">{s.t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{s.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PRICING SNAPSHOT */}
      <Section>
        <div className="bg-navy-deep text-ivory rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center shadow-elegant">
          <div>
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">Honest Pricing</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">{t.pricing.title}</h3>
            <p className="text-ivory/80 text-sm">{t.pricing.note}</p>
          </div>
          <div className="bg-navy/50 rounded-2xl p-6 border border-gold/30">
            <div className="text-gold text-sm">{t.pricing.advice}</div>
            <div className="font-display text-4xl font-bold mt-2">PKR 500</div>
            <div className="text-ivory/60 text-xs mt-2">{t.pricing.adviceDesc}</div>
          </div>
          <div className="bg-gold text-navy-deep rounded-2xl p-6 shadow-gold">
            <div className="text-navy/70 text-sm font-semibold">Special Offer</div>
            <div className="font-display text-3xl font-bold mt-2">50% OFF</div>
            <div className="text-navy/80 text-xs mt-2">{t.pricing.discountBanner}</div>
            <Link to="/pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-bold underline">
              View full pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-ivory">
        <SectionTitle eyebrow="Testimonials" title={t.testimonials.title} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: t.testimonials.t1, n: t.testimonials.n1, r: t.testimonials.r1 },
            { t: t.testimonials.t2, n: t.testimonials.n2, r: t.testimonials.r2 },
            { t: t.testimonials.t3, n: t.testimonials.n3, r: t.testimonials.r3 },
          ].map((tm, i) => {
            const ref = useReveal<HTMLDivElement>();
            return (
              <div key={i} ref={ref} className="reveal card-elegant p-7" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-foreground italic leading-relaxed">"{tm.t}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-navy-deep">{tm.n}</div>
                  <div className="text-xs text-muted-foreground">{tm.r}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* LOCATIONS */}
      <Section>
        <SectionTitle eyebrow="Visit Us" title={t.locations.title} />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { city: t.locations.lahore, addr: t.locations.lahoreAddr, img: lahore, q: "Lahore High Court" },
            { city: t.locations.hyderabad, addr: t.locations.hyderabadAddr, img: hyderabad, q: "Hyderabad Sindh Pakistan" },
          ].map((loc) => (
            <div key={loc.city} className="card-elegant overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img src={loc.img} alt={`${loc.city} - Shama Legal Solutions`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-2xl text-ivory font-bold">{loc.city}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <p>{loc.addr}</p>
                </div>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.q)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy-deep font-semibold hover:text-gold">
                  {t.locations.directions} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FORM CTA */}
      <section className="relative py-20 bg-navy-deep text-ivory overflow-hidden">
        <img src={family} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">Free Consultation</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t.contact.title}</h2>
            <div className="gold-divider my-6 w-24" />
            <p className="text-ivory/80 text-lg">{t.contact.subtitle}</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-gold" /> Reviewed by panel of advocates</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-gold" /> Confidential & honest counsel</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-gold" /> Available 24/7 on WhatsApp</div>
            </div>
          </div>
          <div><ConsultationForm /></div>
        </div>
      </section>
    </>
  );
}

function SectionTitleDark({ title }: { title: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal text-center mx-auto max-w-3xl">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-ivory">{title}</h2>
      <div className="gold-divider mt-6 mx-auto w-24" />
    </div>
  );
}
