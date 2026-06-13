/**
 * MOLECULE — SourcingReasonItem
 * A named reason with a description. Used in the
 * "Why Choose Our Sourcing Model" grid.
 */
export function SourcingReasonItem({ name, desc }) {
  return (
    <div className="mol-reason-item">
      <p className="mol-reason-item__name">{name}</p>
      <p className="mol-reason-item__desc">{desc}</p>
    </div>
  );
}