export function ScalesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Center column with flame */}
        <path d="M60 25c-6 8-6 14 0 22 6-8 6-14 0-22z" />
        <path d="M60 47v68" />
        {/* Beam */}
        <path d="M20 55h80" />
        {/* Left scale */}
        <path d="M30 55l-10 22h20z" />
        <ellipse cx="30" cy="80" rx="14" ry="3" />
        {/* Right scale */}
        <path d="M90 55l-10 22h20z" />
        <ellipse cx="90" cy="80" rx="14" ry="3" />
        {/* Base */}
        <path d="M45 122h30" />
        <path d="M40 130h40" />
      </g>
    </svg>
  );
}
