import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section, SectionTitle } from "@/components/Section";
import { ConsultationForm } from "@/components/ConsultationForm";
import { useReveal } from "@/hooks/use-reveal";
import {
  Scale, Gavel, Heart, Building2, Briefcase, FileText, Building, Baby, ShieldCheck, CheckCircle2, MessageCircle,
} from "lucide-react";
import gavel from "@/assets/gavel.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Legal Services in Lahore & Hyderabad | Civil, Criminal, Family Lawyer Pakistan" },
      { name: "description", content: "Full-service legal practice: Civil, Criminal, Family, Banking, Labour, NTN, Company Registration, Child Custody and Bail cases across Lahore and Hyderabad." },
      { property: "og:title", content: "Our Legal Services | Shama Legal Solutions" },
      { property: "og:description", content: "9 areas of practice. Reviewed by panel of advocates. 50% discount on every case." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  const services = [
    { icon: Scale, ...t.services.civil, points: ["Property disputes", "Recovery suits", "Specific performance", "Injunctions"] },
    { icon: Gavel, ...t.services.criminal, points: ["FIR & investigation", "Trial defense", "Appeals", "Acquittals"] },
    { icon: Heart, ...t.services.family, points: ["Khula & divorce", "Maintenance", "Dowry recovery", "Nikah disputes"] },
    { icon: Building2, ...t.services.banking, points: ["Banking court suits", "Recovery", "Finance disputes", "Mortgage matters"] },
    { icon: Briefcase, ...t.services.labour, points: ["Termination cases", "Wages recovery", "Industrial relations", "Tribunals"] },
    { icon: FileText, ...t.services.ntn, points: ["NTN registration", "Tax filings", "FBR appeals", "Notices"] },
    { icon: Building, ...t.services.company, points: ["SECP incorporation", "Partnerships", "Compliance", "Trademarks"] },
    { icon: Baby, ...t.services.custody, points: ["Guardianship", "Visitation rights", "Hizanat", "Welfare petitions"] },
    { icon: ShieldCheck, ...t.services.bail, points: ["Pre-arrest bail", "Post-arrest bail", "Bail before arrest", "High Court bail"] },
    { icon: MessageCircle, ...t.services.others, points: ["Custom legal advice", "Notarization", "Registry search", "Legal drafting"] },
  ];

  return (
    <>
      <PageHero eyebrow="Practice Areas" title={t.services.title} subtitle={t.services.subtitle} image={gavel} />
      <Section className="bg-ivory">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const ref = useReveal<HTMLDivElement>();
            const Icon = s.icon;
            return (
              <div key={s.name} ref={ref} className="reveal card-elegant p-7" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="h-14 w-14 rounded-xl gradient-navy flex items-center justify-center text-gold mb-5">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-deep mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Get Started" title={t.contact.title} subtitle={t.contact.subtitle} />
        <div className="max-w-2xl mx-auto"><ConsultationForm /></div>
      </Section>
    </>
  );
}
