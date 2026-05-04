import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/translations";
import { GraduationCap, Scale, BookOpen, Send } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Lawyer & Aspirant Registration | Shama Legal Solutions" },
      { name: "description", content: "Register as a lawyer (PKR 3,500), an aspirant law student, or join our online legal tuition program." },
      { property: "og:title", content: "Registrations | Shama Legal Solutions" },
      { property: "og:description", content: "Join our panel or our legal tuition program." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { t } = useLang();
  const [type, setType] = useState("Lawyer Registration");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `*Registration:* ${type}\n*Name:* ${name}\n*Phone:* ${phone}\n*City:* ${city}\n*Details:* ${details}`;
    window.open(waLink(text), "_blank");
  };

  const cards = [
    { i: Scale, t: t.register.lawyer, fee: t.register.lawyerFee, sel: "Lawyer Registration" },
    { i: GraduationCap, t: t.register.aspirant, fee: t.register.aspirantFee, sel: "Aspirant Registration" },
    { i: BookOpen, t: t.register.tuition, fee: t.register.tuitionFee, sel: "Legal Tuition (Online)" },
  ];

  return (
    <>
      <PageHero eyebrow="Registration" title={t.register.title} subtitle={t.register.subtitle} />
      <Section className="bg-ivory">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map(({ i: I, t: tt, fee, sel }) => (
            <button key={sel} onClick={() => setType(sel)}
              className={`card-elegant p-7 text-left ${type === sel ? "border-gold shadow-gold" : ""}`}>
              <div className="h-14 w-14 rounded-xl gradient-navy flex items-center justify-center text-gold mb-4">
                <I className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-deep">{tt}</h3>
              <div className="font-display text-3xl font-bold text-gold mt-3">{fee}</div>
            </button>
          ))}
        </div>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-card p-6 md:p-8 rounded-2xl shadow-elegant border border-border space-y-4">
          <div className="text-sm text-muted-foreground">Selected: <span className="font-semibold text-navy-deep">{type}</span></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required value={name} onChange={(e) => setName(e.target.value)} maxLength={100} placeholder={t.contact.name}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
            <input required value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} type="tel" placeholder={t.contact.phone}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          </div>
          <input required value={city} onChange={(e) => setCity(e.target.value)} maxLength={50} placeholder="City"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} maxLength={1000} rows={4} placeholder="Brief background / details"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 font-semibold hover:opacity-90 shadow-elegant">
            <Send className="h-4 w-4" /> {t.cta.submit}
          </button>
        </form>
      </Section>
    </>
  );
}
