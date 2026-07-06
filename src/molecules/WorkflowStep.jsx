/**
 * MOLECULE — WorkflowStep
 * Displays a numbered workflow step with name and description.
 * Always visible — no expand/collapse. Used in the snake-pattern
 * workflow chart in the SourcingServices section.
 */
export function WorkflowStep({ number, name, desc }) {
  return (
    <div className="mol-workflow-step">
      <p className="mol-workflow-step__num">{number}</p>
      <p className="mol-workflow-step__name">{name}</p>
      <p className="mol-workflow-step__desc">{desc}</p>
    </div>
  );
}