import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const numericMatch = value.match(/(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : value;
  const suffixFromVal = numericMatch ? value.slice((numericMatch.index ?? 0) + numericMatch[1].length) : "";

  useEffect(() => {
    if (target == null) { setDisplay(value); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const n = Math.round(target * eased);
            setDisplay(`${prefix}${n}${suffixFromVal}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, prefix, suffixFromVal, suffix, value]);

  return <span ref={ref}>{display}</span>;
}
