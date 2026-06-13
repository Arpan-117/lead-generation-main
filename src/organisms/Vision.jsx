import { SectionLabel } from '../atoms/Typography';

export function Vision() {
  return (
    <section id="vision" className="org-vision">
      <SectionLabel center>Our Vision</SectionLabel>

      <blockquote className="org-vision__quote">
        "To build one of the most trusted trading enterprises in the world — a legacy
        institution that carries the Chowdhury name with pride across generations."
      </blockquote>

      <p className="org-vision__attr">
        — Chowdhury Global Ventures · Founded in India
      </p>
    </section>
  );
}
