import { useState } from 'react';

/**
 * MOLECULE — IndustryCard
 * Hover-reveal card. Default state shows icon + title at the bottom.
 * On hover: icon shifts up, title + description slide up together,
 * description fades in, background turns navy, gold border + underline appear.
 * All transitions via globals.css mol-industry-card__* classes.
 */
/**
 * MOLECULE — IndustryCard
 *
 * Layout:
 *   - 16:9 image at top (src from /public/industries/{image})
 *   - Title always visible below image
 *   - Description + Solutions hidden, revealed by Read more toggle
 *   - Gold border on hover, image scales slightly on hover
 *
 * Image: place 1600×900px images at public/industries/automotive.jpg etc.
 * Placeholder renders if image fails to load.
 * All transitions via globals.css mol-industry-card__* classes.
 */
export function IndustryCard({ image, title, desc, solutions }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(null); // null = pending, true = ok, false = error

  return (
    <div className="mol-industry-card">
      {/* <span className="mol-industry-card__dot" aria-hidden="true" />
      <span className="mol-industry-card__name">{name}</span> */}

      {/* <span className="mol-industry-card__icon" aria-hidden="true">{icon}</span> */}

      {/* 16:9 image */}
      <div className="mol-industry-card__image">
        {loaded !== false && (
          <img
            src={image}
            alt={title}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
          />
        )}
        {loaded === false && (
          <div className="mol-industry-card__img-placeholder">
            <span>{title}</span>
          </div>
        )}
        {loaded === null && (
          <div className="mol-industry-card__img-placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="mol-industry-card__body">
        <p className="mol-industry-card__title">{title}</p>

        {/* Expandable content */}
        <div className={`mol-industry-card__expandable ${open ? 'open' : ''}`}>
          <p className="mol-industry-card__desc">{desc}</p>
          {solutions && (
            <>
              <p className="mol-industry-card__solutions-label">Solutions Include</p>
              <p className="mol-industry-card__solutions">{solutions}</p>
            </>
          )}
        </div>
      </div>

      {/* Toggle */}
      <button
        className={`mol-industry-card__toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <svg
          className="mol-industry-card__toggle-icon"
          width="12" height="12" viewBox="0 0 12 12"
          fill="none" aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="#B8922E" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {open ? 'Close' : 'View'}
      </button>
    </div>
  );
}