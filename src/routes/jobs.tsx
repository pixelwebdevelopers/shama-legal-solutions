import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { PageHero, Section } from "@/components/Section";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/translations";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Careers & Lawyer Jobs | Shama Legal Solutions Pakistan" },
      { name: "description", content: "Open legal positions at Shama Legal Solutions in Lahore and Hyderabad — Advocates, Family Law specialists and legal interns." },
      { property: "og:title", content: "Legal Careers in Lahore & Hyderabad" },
      { property: "og:description", content: "Join a chamber that values integrity and results." },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const { t } = useLang();
  const jobs = [
    { title: t.jobs.open1, loc: t.jobs.open1Loc },
    { title: t.jobs.open2, loc: t.jobs.open2Loc },
    { title: t.jobs.open3, loc: t.jobs.open3Loc },
  ];
  return (
    <>
      <PageHero eyebrow="Careers" title={t.jobs.title} subtitle={t.jobs.subtitle} />
      <Section className="bg-ivory">
        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((j) => (
            <div key={j.title} className="card-elegant p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl gradient-navy flex items-center justify-center text-gold shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy-deep">{j.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4 text-gold" /> {j.loc}
                  </p>
                </div>
              </div>
              <a href={waLink(`I'd like to apply for: ${j.title}`)} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep text-ivory px-6 py-3 font-semibold hover:bg-gold hover:text-navy-deep transition shrink-0">
                {t.jobs.apply} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
