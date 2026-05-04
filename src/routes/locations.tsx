import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { MapPin, ArrowRight, Clock, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/translations";
import lahore from "@/assets/lahore-court.jpg";
import hyderabad from "@/assets/hyderabad-city.jpg";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Office Locations | Lawyer in Lahore & Hyderabad | Shama Legal" },
      { name: "description", content: "Visit Shama Legal Solutions offices in Lahore and Hyderabad. Get directions, opening hours and contact details." },
      { property: "og:title", content: "Our Offices in Lahore & Hyderabad" },
      { property: "og:description", content: "Two offices serving clients across Punjab and Sindh, Pakistan." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { t } = useLang();
  const offices = [
    { city: t.locations.lahore, addr: t.locations.lahoreAddr, img: lahore, q: "Lahore High Court Pakistan" },
    { city: t.locations.hyderabad, addr: t.locations.hyderabadAddr, img: hyderabad, q: "Hyderabad Sindh Pakistan" },
  ];
  return (
    <>
      <PageHero eyebrow="Offices" title={t.locations.title} image={lahore} />
      <Section className="bg-ivory">
        <div className="grid lg:grid-cols-2 gap-8">
          {offices.map((o) => (
            <div key={o.city} className="card-elegant overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={o.img} alt={`${o.city} - Shama Legal Solutions office`} loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-transparent" />
                <h3 className="absolute bottom-5 left-6 font-display text-3xl text-ivory font-bold">{o.city}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-gold mt-1" /><p>{o.addr}</p></div>
                <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-gold mt-1" /><p>Open 24/7 for urgent matters</p></div>
                <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-gold mt-1" /><a href={waLink(t.misc.whatsappPrompt)} className="hover:text-gold">{WHATSAPP_DISPLAY}</a></div>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(o.q)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-ivory px-6 py-3 font-semibold hover:bg-navy mt-2">
                  {t.locations.directions} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <iframe
                title={`${o.city} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(o.q)}&output=embed`}
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
