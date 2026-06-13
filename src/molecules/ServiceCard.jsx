import { useState } from 'react';

/**
 * MOLECULE — ServiceCard
 * Displays a service block with a subtitle, title, body text, and a
 * collapsible list. If the list is long, a "Read more / Read less"
 * toggle is shown. All styling via globals.css mol-service-card__* classes.
 */
export function ServiceCard({ subtitle, title, bodyPara1, bodyPara2, items, closingPara, collapsedCount = 4 }) {
  const [expanded, setExpanded] = useState(false);

  const hasOverflow = items.length > collapsedCount;
  const visibleItems = expanded ? items : items.slice(0, collapsedCount);
  const hiddenItems  = items.slice(collapsedCount);

  return (
    <div className="mol-service-card">
      <p className="mol-service-card__subtitle">{subtitle}</p>
      <h3 className="mol-service-card__title">{title}</h3>
      <p className="mol-service-card__body">{bodyPara1}</p>
      <p className="mol-service-card__body">{bodyPara2}</p>

      {/* Always-visible items */}
      <ul className="mol-service-card__list">
        {visibleItems.map((item, i) => (
          <li key={i} className="mol-service-card__item">{item}</li>
        ))}
      </ul>

      {/* Overflow items — animated collapse */}
      {hasOverflow && (
        <>
          <div
            className="mol-service-card__overflow"
            style={{ maxHeight: expanded ? `${hiddenItems.length * 48}px` : '0px' }}
          >
            <ul className="mol-service-card__list">
              {hiddenItems.map((item, i) => (
                <li key={i} className="mol-service-card__item">{item}</li>
              ))}
            </ul>
          </div>

          <p className="mol-service-card__body">{closingPara}</p>

          <button
            className="mol-service-card__read-more"
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
          >
            {expanded ? 'Read less ↑' : 'Read more ↓'}
          </button>
        </>
      )}
    </div>
  );
}