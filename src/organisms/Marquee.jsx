const ITEMS = ['India', '·', 'Middle East', '·', 'Africa', '·', 'Trade', '·', 'Trust', '·', 'Legacy', '·'];
// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function Marquee() {
  return (
    <div className="org-marquee" aria-hidden="true">
      <div className="org-marquee__track">
        {TRACK.map((item, i) => (
          <span
            key={i}
            className={`org-marquee__item ${item === '·' ? 'org-marquee__dot' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
