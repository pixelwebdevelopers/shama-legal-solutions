import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/translations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shama Legal Solutions | WhatsApp Lawyer Lahore & Hyderabad" },
      { name: "description", content: "Reach Advocate Shama Moazzam on WhatsApp 0312 4100649 — 24/7 legal consultation in Lahore and Hyderabad, Pakistan." },
      { property: "og:title", content: "Contact Us | Shama Legal Solutions" },
      { property: "og:description", content: "Free WhatsApp consultation, 24/7." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow="Contact" title={t.contact.title} subtitle={t.contact.subtitle} />
      <Section className="bg-ivory">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { i: MessageCircle, t: "WhatsApp", v: WHATSAPP_DISPLAY, href: waLink(t.misc.whatsappPrompt) },
              { i: Phone, t: t.cta.callNow, v: WHATSAPP_DISPLAY, href: `tel:+923124100649` },
              { i: Mail, t: "Email", v: "shamalegalsolutions@gmail.com", href: "mailto:shamalegalsolutions@gmail.com" },
              { i: MapPin, t: t.locations.lahore, v: t.locations.lahoreAddr, href: "https://maps.google.com/?q=Lahore+High+Court" },
              { i: MapPin, t: t.locations.hyderabad, v: t.locations.hyderabadAddr, href: "https://maps.google.com/?q=Hyderabad+Sindh+Pakistan" },
            ].map(({ i: I, t: tt, v, href }) => (
              <a key={tt} href={href} target="_blank" rel="noopener noreferrer"
                className="card-elegant p-5 flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl gradient-navy flex items-center justify-center text-gold shrink-0">
                  <I className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{tt}</div>
                  <div className="font-semibold text-navy-deep group-hover:text-gold transition">{v}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="lg:col-span-3">
            <ConsultationForm />
          </div>
        </div>
      </Section>
    </>
  );
}
