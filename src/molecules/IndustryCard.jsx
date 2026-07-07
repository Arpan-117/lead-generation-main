/**
 * MOLECULE — IndustryCard
 * Hover-reveal card. Default state shows icon + title at the bottom.
 * On hover: icon shifts up, title + description slide up together,
 * description fades in, background turns navy, gold border + underline appear.
 * All transitions via globals.css mol-industry-card__* classes.
 */
export function IndustryCard({ icon, title, desc, solutions }) {
  return (
    <div className="mol-industry-card">
      {/* <span className="mol-industry-card__dot" aria-hidden="true" />
      <span className="mol-industry-card__name">{name}</span> */}

      <span className="mol-industry-card__icon" aria-hidden="true">{icon}</span>
      <p className="mol-industry-card__title">{title}</p>
      <p className="mol-industry-card__desc">{desc}</p>
      {solutions && (
        <>
          <p className="mol-industry-card__solutions-label">Solutions Include</p>
          <p className="mol-industry-card__solutions">{solutions}</p>
        </>
      )}
    </div>
  );
}