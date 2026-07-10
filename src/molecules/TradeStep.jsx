/**
 * MOLECULE — TradeStep
 * A numbered step with title and description.
 * Used in the TradeProcess section step list.
 */
export function TradeStep({ number, title, desc }) {
  return (
    <li className="mol-trade-step">
      <span className="mol-trade-step__num">{number}</span>
      <div>
        <p className="mol-trade-step__title">{title}</p>
        <p className="mol-trade-step__desc">{desc}</p>
      </div>
    </li>
  );
}