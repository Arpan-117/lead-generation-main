/**
 * ATOM — Typography
 * Semantic text primitives. All styled via global CSS classes;
 * no inline Tailwind in JSX.
 */

export function Eyebrow({ children, className = '' }) {
  return <p className={`atom-eyebrow ${className}`}>{children}</p>;
}

export function SectionLabel({ children, center = false, className = '' }) {
  return (
    <p className={`${center ? 'atom-section-label--center' : 'atom-section-label'} ${className}`}>
      {children}
    </p>
  );
}

export function DisplayHeading({ children, className = '' }) {
  return <h1 className={`atom-display ${className}`}>{children}</h1>;
}

export function SectionHeading({ children, as: Tag = 'h2', className = '' }) {
  return <Tag className={`atom-heading ${className}`}>{children}</Tag>;
}

export function BodyText({ children, className = '' }) {
  return <p className={`atom-body ${className}`}>{children}</p>;
}
