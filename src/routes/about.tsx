import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, Award, Heart, Users } from "lucide-react";
import advocate from "@/assets/advocate-portrait.webp";
import family from "@/assets/family-consult.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Advocate Shama Moazzam | Female Lawyer Lahore Pakistan" },
      { name: "description", content: "Meet Advocate Shama Moazzam, leading the Shama Legal Solutions chamber in Lahore and Hyderabad with integrity, panel-reviewed cases, and solution-driven counsel." },
      { property: "og:title", content: "About Shama Legal Solutions" },
      { property: "og:description", content: "Female-led legal chamber in Pakistan committed to honest, solution-based representation." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();
  return (
    <>
      <PageHero eyebrow="About Us" title={t.about.title} subtitle={t.about.lead} />
      <Section className="bg-ivory">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={ref1} className="reveal-left reveal">
            <img src={advocate} alt="Advocate Shama Moazzam" loading="lazy" width={1024} height={1024}
              className="rounded-2xl shadow-elegant w-full" />
          </div>
          <div ref={ref2} className="reveal-right reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-4">Advocate Shama Moazzam</h2>
            <div className="gold-divider w-24 mb-6" />
            <p className="text-foreground text-lg mb-4 leading-relaxed">{t.about.lead}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.about.body}</p>
            <ul className="space-y-3">
              {[t.about.pillar1Desc, t.about.pillar2Desc, t.about.pillar3Desc, "Strong courtroom presence in Punjab & Sindh", "Confidential client handling"].map((p) => (
                <li key={p} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-gold mt-0.5" /> <span>{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: Award, t: t.about.pillar1, d: t.about.pillar1Desc },
            { i: Heart, t: t.about.pillar2, d: t.about.pillar2Desc },
            { i: Users, t: t.about.pillar3, d: t.about.pillar3Desc },
          ].map(({ i: I, t: tt, d }) => (
            <div key={tt} className="card-elegant p-7 text-center">
              <div className="h-14 w-14 rounded-full gradient-gold mx-auto flex items-center justify-center text-navy-deep mb-4">
                <I className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-deep">{tt}</h3>
              <p className="text-muted-foreground text-sm mt-2">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative py-20 bg-navy-deep text-ivory overflow-hidden">
        <img src={family} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">"We make sure every client receives honest counsel and the strongest defense possible."</h2>
          <p className="text-gold mt-4 tracking-wider text-sm">— Advocate Shama Moazzam</p>
          <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-gold text-navy-deep px-8 py-3 font-semibold hover:bg-ivory">
            {t.cta.consult}
          </Link>
        </div>
      </section>
    </>
  );
}
