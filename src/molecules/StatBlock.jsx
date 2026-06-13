/**
 * MOLECULE — StatBlock
 * A number + label pair used in the hero stats row.
 */
export function StatBlock({ number, label }) {
  return (
    <div className="mol-stat">
      <span className="atom-stat-number">{number}</span>
      <span className="atom-stat-label">{label}</span>
    </div>
  );
}
