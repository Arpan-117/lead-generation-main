/**
 * MOLECULE — ValueItem
 * A named value with a short description. Used in the About section.
 */
export function ValueItem({ name, desc }) {
  return (
    <div>
      <p className="mol-value-name">{name}</p>
      <p className="mol-value-desc">{desc}</p>
    </div>
  );
}
