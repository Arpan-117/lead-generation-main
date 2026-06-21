/**
 * MOLECULE — IndustryCard
 * A labelled card with a gold dot accent.
 * Used in the Industries section grid.
 */
export function IndustryCard({ name }) {
  return (
    <div className="mol-industry-card">
      <span className="mol-industry-card__dot" aria-hidden="true" />
      <span className="mol-industry-card__name">{name}</span>
    </div>
  );
}