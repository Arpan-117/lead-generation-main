import { SectionLabel } from '../atoms/Typography';

export function Mission() {
  return (
    <section id="mission" className="org-vision">
      <SectionLabel center>Our Mission</SectionLabel>

      {/* <blockquote className="org-vision__quote">
        "To earn trust through integrity and become the preferred one-stop global sourcing and trading partner by connecting markets, delivering seamless procurement solutions, and creating lasting value for customers, partners, and communities worldwide."
      </blockquote> */}

      <blockquote className="org-vision__quote">
        “To deliver reliable sourcing, procurement and supply solutions through integrity, accountability and long-term partnerships — helping businesses, institutions, government buyers and international customers access the right products from the right sources.”
      </blockquote>

      <p className="org-vision__attr">
        — Chowdhury Global Ventures · Founded in India
      </p>
    </section>
  );
}
