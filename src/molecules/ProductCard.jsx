/**
 * MOLECULE — ProductCard
 * Displays a product category with icon, description, product types,
 * key specifications, ideal-for text, and a CTA button linking to the
 * category page (to be built later).
 */
export function ProductCard({ icon, category, desc, types, specs, idealFor, href = '#' }) {
  return (
    <div className="mol-product-card">

      {/* Icon + category label */}
      <div className="mol-product-card__icon">
        <span className="mol-product-card__icon-symbol" aria-hidden="true">{icon}</span>
        <p className="mol-product-card__category">{category}</p>
      </div>

      <div className="mol-product-card__body">

        {/* Description */}
        <p className="mol-product-card__desc">{desc}</p>

        {/* Product Types */}
        <p className="mol-product-card__section-label">Product Types</p>
        <ul className="mol-product-card__list">
          {types.map((t, i) => (
            <li key={i} className="mol-product-card__list-item">{t}</li>
          ))}
        </ul>

        {/* Key Specifications */}
        <p className="mol-product-card__section-label">Key Specifications</p>
        <div className="mol-product-card__specs">
          {specs.map(({ label, value }, i) => (
            <p key={i} className="mol-product-card__spec-item">
              <strong>{label}</strong>{value}
            </p>
          ))}
        </div>

        {/* Ideal For */}
        <p className="mol-product-card__ideal">
          <strong style={{ fontStyle: 'normal' }}>Ideal for: </strong>{idealFor}
        </p>

      </div>

      {/* CTA — links to category page (page built later) */}
      <div className="mol-product-card__footer">
        <a href={href} className="mol-product-card__cta">
          View All SKUs →
        </a>
      </div>

    </div>
  );
}