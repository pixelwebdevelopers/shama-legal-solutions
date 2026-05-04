import { useState, type FormEvent } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { waLink } from "@/lib/translations";
import { Send } from "lucide-react";

export function ConsultationForm({ defaultCase = "" }: { defaultCase?: string }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [caseType, setCaseType] = useState(defaultCase);
  const [message, setMessage] = useState("");

  const services = [
    t.services.civil.name, t.services.criminal.name, t.services.family.name,
    t.services.banking.name, t.services.labour.name, t.services.ntn.name,
    t.services.company.name, t.services.custody.name, t.services.bail.name,
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `${t.misc.whatsappPrompt}:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Case Type:* ${caseType}\n*Details:* ${message}`;
    window.open(waLink(text), "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-card p-6 md:p-8 rounded-2xl shadow-elegant border border-border">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required value={name} onChange={(e) => setName(e.target.value)} maxLength={100}
          placeholder={t.contact.name}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
        <input required value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} type="tel"
          placeholder={t.contact.phone}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
      </div>
      <select required value={caseType} onChange={(e) => setCaseType(e.target.value)}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30">
        <option value="">{t.contact.selectCase}</option>
        {services.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <textarea required value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={4}
        placeholder={t.contact.message}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
      <button type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-elegant">
        <Send className="h-4 w-4" /> {t.cta.submit}
      </button>
    </form>
  );
}
