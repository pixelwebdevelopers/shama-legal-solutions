import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { LanguageToggle } from "@/components/LanguageToggle";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy-deep">404</h1>
        <h2 className="mt-4 font-display text-2xl text-navy-deep">Page not found</h2>
        <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-full bg-navy-deep px-6 py-2.5 text-ivory font-medium hover:bg-navy">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shama Legal Solutions | Top Female Advocate Lahore & Hyderabad Pakistan" },
      { name: "description", content: "Shama Moazzam — leading female advocate in Pakistan offering Civil, Criminal, Family, Banking, Bail, NTN & Company Registration services in Lahore and Hyderabad. 24/7 legal consultation." },
      { name: "keywords", content: "advocate Lahore, lawyer Hyderabad, female lawyer Pakistan, family lawyer Lahore, criminal lawyer, civil lawyer, bail lawyer, NTN registration, company registration Pakistan, Shama Moazzam" },
      { name: "author", content: "Shama Legal Solutions" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shama Legal Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0E2A47" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Shama Legal Solutions",
          description: "Female-led legal chamber in Pakistan handling Civil, Criminal, Family, Banking, Bail, NTN and Corporate matters.",
          telephone: "+923163814166",
          areaServed: ["Lahore", "Hyderabad", "Punjab", "Sindh", "Pakistan"],
          address: [
            { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
            { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Sindh", addressCountry: "PK" },
          ],
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "PKR",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  return (
    <LanguageProvider>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-[104px] right-6 z-50 floating-control">
        <LanguageToggle className="bg-ivory/95 backdrop-blur-md shadow-elegant !px-4 !py-3 border-gold/50 text-navy-deep hover:bg-gold hover:text-navy-deep hover:scale-110 transition-all duration-300 rounded-2xl" />
      </div>
      <WhatsAppFab />
    </LanguageProvider>
  );
}
