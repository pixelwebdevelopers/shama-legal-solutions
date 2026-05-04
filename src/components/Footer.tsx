import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "@/contexts/LanguageContext";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/translations";
import { ScalesIcon } from "./ScalesIcon";

export function Footer() {
  const { t } = useLang();
  const services = [
    t.services.civil.name, t.services.criminal.name, t.services.family.name,
    t.services.banking.name, t.services.bail.name, t.services.company.name,
  ];
  return (
    <footer className="relative bg-navy-deep text-ivory pt-16 pb-8 overflow-hidden">
      <ScalesIcon className="absolute -right-12 -bottom-12 h-72 w-72 text-gold/5 animate-rotate-slow" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Shama Legal" className="h-14 w-auto rounded bg-ivory p-1 mb-4" />
            <p className="text-ivory/70 text-sm leading-relaxed">{t.footer.about}</p>
          </div>
          <div>
            <h4 className="text-gold font-display text-lg mb-4">{t.footer.quick}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold">{t.nav.about}</Link></li>
              <li><Link to="/pricing" className="hover:text-gold">{t.nav.pricing}</Link></li>
              <li><Link to="/contact" className="hover:text-gold">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-display text-lg mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}><Link to="/services" className="hover:text-gold">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-display text-lg mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <span>{t.locations.lahoreAddr}</span></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <span>{t.locations.hyderabadAddr}</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href={waLink(t.misc.whatsappPrompt)} className="hover:text-gold">{WHATSAPP_DISPLAY}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:info@shamalegal.pk" className="hover:text-gold">info@shamalegal.pk</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-divider my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/60 text-xs">© {new Date().getFullYear()} Shama Legal Solutions. {t.footer.rights}</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-ivory/50">Developed by</span>
            <a 
              href="https://pixelwebdevelopers.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              
              <img src="/pixel-logo.png" alt="Pixel Web Developers" className="h-5 w-auto" />
              <span style={{ color: '#FF6600' }} className="font-semibold">Pixel Web Developers</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
