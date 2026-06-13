/**
 * ATOM — GlobeArt
 * Decorative wireframe globe SVG. Reusable across pages.
 */
export function GlobeArt({ className = '', size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Yellow and cream based Globe Art */}
      {/* <circle cx="100" cy="100" r="90" stroke="#B8922E" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="50" ry="90" stroke="#B8922E" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="90" ry="35" stroke="#B8922E" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="70" ry="90" stroke="#B8922E" strokeWidth="0.3" />
      <ellipse cx="100" cy="100" rx="90" ry="60" stroke="#B8922E" strokeWidth="0.3" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="#B8922E" strokeWidth="0.5" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="#B8922E" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="3" fill="#B8922E" opacity="0.4" /> */}

      {/* Indigo based Globe Art */}
      <circle cx="100" cy="100" r="90" stroke="#0A1628" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="50" ry="90" stroke="#0A1628" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="90" ry="35" stroke="#0A1628" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="70" ry="90" stroke="#0A1628" strokeWidth="0.3" />
      <ellipse cx="100" cy="100" rx="90" ry="60" stroke="#0A1628" strokeWidth="0.3" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="#0A1628" strokeWidth="0.5" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="#0A1628" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="3" fill="#0A1628" opacity="0.4" />
    </svg>
  );
}
