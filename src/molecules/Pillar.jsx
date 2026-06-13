/**
 * MOLECULE — Pillar
 * A numbered pillar with name and description. Used in the Why CGV section.
 */
export function Pillar({ number, name, desc }) {
  return (
    <div className="org-why__pillar">
      <p className="atom-pillar-number">{number}</p>
      <p className="atom-pillar-name">{name}</p>
      <p className="atom-pillar-desc">{desc}</p>
    </div>
  );
}
