import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "@/contexts/LanguageContext";
import { ScalesIcon } from "./ScalesIcon";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/translations";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isHome = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/reviews", label: t.nav.reviews },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          transparent ? "bg-transparent" : "bg-navy-deep/95 backdrop-blur-md shadow-elegant"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Shama Legal Solutions logo" className="h-10 lg:h-12 w-auto rounded bg-ivory/95 p-1" />
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {links.map((l) => {
                const active = path === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-gold" : "text-ivory/90 hover:text-gold"
                    }`}
                  >
                    {l.label}
                    {active && <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gold rounded-full" />}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 lg:gap-3">
              <a
                href={waLink(t.misc.whatsappPrompt)}
                target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-deep hover:bg-ivory transition shadow-gold"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">{WHATSAPP_DISPLAY}</span>
                <span className="md:hidden">{t.cta.callNow}</span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold/20 text-ivory hover:bg-gold/30 border border-gold/30"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory shadow-elegant flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gold/30 bg-navy-deep">
            <div className="flex items-center gap-3">
              <ScalesIcon className="h-9 w-9 text-gold animate-scale-tilt" />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gold/20 text-ivory hover:bg-gold/30"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <div className="gold-divider mb-6" />
            <ul className="space-y-1">
              {links.map((l, i) => {
                const active = path === l.to;
                return (
                  <li key={l.to} style={{ animation: open ? `fade-up 0.5s ${i * 60}ms both` : "none" }}>
                    <Link
                      to={l.to}
                      className={`flex items-center justify-between py-3 font-display text-2xl border-b border-border ${
                        active ? "text-gold" : "text-navy-deep hover:text-gold"
                      } transition-colors`}
                    >
                      <span>{l.label}</span>
                      <span className="text-gold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="px-6 py-5 border-t border-gold/30 bg-navy-deep/95 space-y-3">
            <a
              href={waLink(t.misc.whatsappPrompt)}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-whatsapp px-4 py-3 text-white font-semibold"
            >
              <Phone className="h-4 w-4" /> {t.cta.whatsapp}
            </a>
            <div className="flex items-center justify-between">
              <span className="text-ivory/70 text-xs">{WHATSAPP_DISPLAY}</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
