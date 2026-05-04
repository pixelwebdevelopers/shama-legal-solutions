import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { Check, Sparkles } from "lucide-react";
import { waLink } from "@/lib/translations";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Legal Fees & Pricing | Shama Legal Solutions Pakistan" },
      { name: "description", content: "Transparent legal fees: PKR 500 advance for legal consultation, PKR 3,500 lawyer registration, 50% discount on every case fee." },
      { property: "og:title", content: "Transparent Legal Pricing in Pakistan" },
      { property: "og:description", content: "Honest fees, no hidden costs. 50% discount on every case." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { t } = useLang();
  const tiers = [
    {
      name: t.pricing.advice, fee: "PKR 500", desc: t.pricing.adviceDesc,
      perks: ["Initial advance", "Phone or in-office", "Reviewed by senior advocate", "Confidential"],
      featured: false, msg: "I'd like to book a legal consultation (PKR 500 advance)",
    },
    {
      name: t.pricing.lawyer, fee: "PKR 3,500", desc: t.pricing.lawyerDesc,
      perks: ["Listed on our panel", "Case referrals", "Mentorship sessions", "Profile on website"],
      featured: true, msg: "I'd like to register as a lawyer on your panel (PKR 3,500)",
    },
    {
      name: t.pricing.aspirant, fee: t.pricing.askPrice, desc: t.pricing.aspirantDesc,
      perks: ["Mentor matching", "Online tuition", "Court visits", "Drafting practice"],
      featured: false, msg: "I'd like to register as an aspirant / law student",
    },
  ];

  return (
    <>
      <PageHero eyebrow="Pricing" title={t.pricing.title} subtitle={t.pricing.subtitle} />

      <Section className="bg-ivory">
        <div className="bg-gold text-navy-deep rounded-2xl p-6 mb-12 flex items-center justify-center gap-3 font-semibold shadow-gold">
          <Sparkles className="h-5 w-5" /> {t.pricing.discountBanner}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tr) => (
            <div key={tr.name} className={`relative rounded-2xl p-8 border transition ${
              tr.featured ? "bg-navy-deep text-ivory border-gold shadow-elegant scale-100 md:scale-105" : "bg-card border-border shadow-elegant"
            }`}>
              {tr.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy-deep text-xs font-bold px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className={`font-display text-2xl font-bold ${tr.featured ? "text-gold" : "text-navy-deep"}`}>{tr.name}</h3>
              <p className={`text-sm mt-1 ${tr.featured ? "text-ivory/70" : "text-muted-foreground"}`}>{tr.desc}</p>
              <div className={`font-display text-5xl font-bold mt-6 ${tr.featured ? "text-ivory" : "text-navy-deep"}`}>{tr.fee}</div>
              <div className="gold-divider my-6" />
              <ul className="space-y-3 mb-8">
                {tr.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className={`h-4 w-4 ${tr.featured ? "text-gold" : "text-gold"}`} /> {p}
                  </li>
                ))}
              </ul>
              <a href={waLink(tr.msg)} target="_blank" rel="noopener noreferrer"
                className={`block text-center rounded-full px-6 py-3 font-semibold transition ${
                  tr.featured ? "bg-gold text-navy-deep hover:bg-ivory" : "bg-navy-deep text-ivory hover:bg-navy"
                }`}>
                {t.cta.getStarted}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground text-sm max-w-2xl mx-auto">{t.pricing.note}</p>
      </Section>
    </>
  );
}
