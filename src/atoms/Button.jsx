/**
 * ATOM — Button
 * Two variants: primary (gold fill) and ghost (text only).
 * Both accept an optional `as` prop to render as <a> or <button>.
 */

export function ButtonPrimary({ children, href, onClick, disabled, className = '' }) {
  if (href) {
    return (
      <a href={href} className={`atom-btn-primary ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`atom-btn-primary ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonGhost({ children, href, onClick, className = '' }) {
  if (href) {
    return (
      <a href={href} className={`atom-btn-ghost ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`atom-btn-ghost ${className}`}>
      {children}
    </button>
  );
}
