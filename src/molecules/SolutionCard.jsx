import { useId, useState } from 'react';
import { Plus } from 'lucide-react';

/**
 * SolutionCard — molecule
 *
 * Numbered card used in the Sourcing Solutions organism. Shows the intro
 * paragraph by default; clicking the toggle reveals the secondary paragraph
 * (optional), the feature list, and the closing line.
 *
 * Props:
 *  - index       {number}  1-based position, rendered as a padded watermark (e.g. "01")
 *  - title       {string}
 *  - intro       {string}  always-visible first paragraph
 *  - secondary   {string=} optional second paragraph, shown only when expanded
 *  - features    {string[]} bullet list, shown only when expanded
 *  - closing     {string=} optional closing line, shown only when expanded
 *  - wide        {boolean=} spans both columns on lg+ (used for the OEM card)
 *  - splitList   {boolean=} renders the feature list in two columns on sm+
 */
const SolutionCard = ({
  index,
  title,
  intro,
  secondary,
  features = [],
  closing,
  wide = false,
  splitList = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className={`mol-solution-card${wide ? ' mol-solution-card--wide' : ''}`}
    >
      <span className="mol-solution-card__index" aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>

      <h3 className="mol-solution-card__title">{title}</h3>
      <p className="mol-solution-card__intro">{intro}</p>

      <div
        id={contentId}
        className={`mol-solution-card__expandable${isOpen ? ' open' : ''}`}
      >
        <div className="mol-solution-card__expandable-inner">
          {secondary && (
            <p className="mol-solution-card__secondary">{secondary}</p>
          )}

          {features.length > 0 && (
            <ul
              className={`mol-solution-card__list${
                splitList ? ' mol-solution-card__list--split' : ''
              }`}
            >
              {features.map((feature) => (
                <li key={feature} className="mol-solution-card__list-item">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {closing && <p className="mol-solution-card__closing">{closing}</p>}
        </div>
      </div>

      <button
        type="button"
        className={`mol-solution-card__toggle${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="mol-solution-card__toggle-icon">
          <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
        </span>
        {isOpen ? 'Read Less' : 'Read More'}
      </button>
    </article>
  );
};

export default SolutionCard;