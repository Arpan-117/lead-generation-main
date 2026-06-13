/**
 * MOLECULE — MarketCard
 * A single market entry with flag, region label, title, and description.
 */
export function MarketCard({ flag, region, title, desc }) {
  return (
    <div className="mol-market-card">
      <span className="mol-market-flag" role="img" aria-label={title}>{flag}</span>
      <p className="mol-market-region">{region}</p>
      <h3 className="mol-market-title">{title}</h3>
      <p className="mol-market-desc">{desc}</p>
    </div>
  );
}
