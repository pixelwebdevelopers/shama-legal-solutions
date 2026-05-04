import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { useReveal } from "@/hooks/use-reveal";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Testimonials | Shama Legal Solutions" },
      { name: "description", content: "Read what clients across Lahore, Hyderabad and Pakistan say about Advocate Shama Moazzam and the panel of advocates at Shama Legal Solutions." },
      { property: "og:title", content: "What Our Clients Say | Shama Legal" },
      { property: "og:description", content: "Real reviews from real clients across Pakistan." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { t } = useLang();
  const reviews = [
    { t: t.testimonials.t1, n: t.testimonials.n1, r: t.testimonials.r1, c: "Family Case" },
    { t: t.testimonials.t2, n: t.testimonials.n2, r: t.testimonials.r2, c: "Banking Case" },
    { t: t.testimonials.t3, n: t.testimonials.n3, r: t.testimonials.r3, c: "Bail Case" },
    { t: "Professional, prompt and very transparent about fees. Won my civil suit on appeal.", n: "Sana R.", r: "Lahore", c: "Civil Case" },
    { t: "Got my NTN and company registered without any hassle. Excellent follow-up.", n: "Hamza T.", r: "Karachi (remote)", c: "NTN / SECP" },
    { t: "Stood by us through a very difficult criminal trial. Forever grateful.", n: "Fatima B.", r: "Hyderabad", c: "Criminal Case" },
  ];

  return (
    <>
      <PageHero eyebrow="Reviews" title={t.reviews.title} subtitle={t.reviews.subtitle} />
      <Section className="bg-ivory">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => {
            const ref = useReveal<HTMLDivElement>();
            return (
              <div key={i} ref={ref} className="reveal card-elegant p-7 relative" style={{ animationDelay: `${i * 80}ms` }}>
                <Quote className="absolute top-5 right-5 h-10 w-10 text-gold/15" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="italic text-foreground leading-relaxed">"{r.t}"</p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-navy-deep">{r.n}</div>
                    <div className="text-xs text-muted-foreground">{r.r}</div>
                  </div>
                  <span className="text-xs text-gold font-medium uppercase tracking-wider">{r.c}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
