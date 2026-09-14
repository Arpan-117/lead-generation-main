import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { GlobeArt } from '../atoms/GlobeArt';
import { ValueItem } from '../molecules/ValueItem';

const VALUES = [
  { name: 'Integrity',   desc: 'Every deal, every promise kept without compromise.' },
  { name: 'Legacy',      desc: 'Every decision made with the next generation in mind.' },
  { name: 'Partnership', desc: 'We grow only when our partners grow.' },
];

export function About() {
  return (
    <section id="about" className="org-about">
      {/* Image frame */}
      {/* <div className="org-about__frame"> */}
         <img
          src="/About.png"
          alt="Chowdhury Global Ventures — our story"
          className="org-about__image"
        />
      {/* </div> */}

      {/* Content */}
      <div className="org-about__content">
        <SectionLabel>Our Story</SectionLabel>

        {/* <SectionHeading className="mb-6">
          A name built on <em>earned respect.</em>
        </SectionHeading> */}

        <SectionHeading className="mb-6">
          Building a supply business <em>designed for the long term.</em>
        </SectionHeading>

        <BodyText className="mb-4">
          {/* Every great enterprise begins with a belief — that trade, done with integrity,
          can build bridges between nations and create prosperity that lasts generations. */}
          Every great enterprise begins with a belief — that business, when built on integrity and trust, can create lasting value for customers, partners and communities.
        </BodyText>
        <BodyText className="mb-4">
          {/* Chowdhury Global Ventures was founded on that belief. Rooted in India, reaching
          into the Middle East and Africa, we are a trading company built not just for
          today's markets — but for the decades ahead. */}
          {/* CGV is a one-stop global sourcing and trading partner, connecting businesses with trusted suppliers, quality products, and seamless procurement solutions across industries. Backed by a global network of manufacturers and logistics partners, we simplify international trade through reliable sourcing, competitive pricing, and dependable supply chain solutions. */}
          Chowdhury Global Ventures (CGV) is an India-based sourcing, procurement and supply company serving businesses, institutions, government buyers and international customers. We connect requirements with suitable manufacturers, authorised distributors and suppliers across India, providing dependable sourcing and supply solutions across selected product categories.
        </BodyText>
        <BodyText className="mb-4">
          {/* The name Chowdhury carries weight. Leadership, responsibility, and respect —
          values not merely inherited, but earned through every transaction, every
          partnership, every promise kept. */}
          {/* Driven by integrity, excellence, and long-term partnerships, we are committed to creating lasting value for our customers. More than a trading company, we are building a legacy—one that carries the Chowdhury name with pride through every transaction, every partnership, and every generation. */}
          From domestic B2B supply and industrial procurement to government and GeM opportunities, project requirements and exports from India, our role is to simplify the procurement journey. We work to understand what our customers need, identify appropriate sourcing options, coordinate commercial and technical requirements, and support the process through supply and delivery.
        </BodyText>
        <BodyText className="mb-4">
          Our approach is built on integrity, accountability and long-term relationships. We believe that a successful transaction is not simply one that closes — it is one that creates the confidence to work together again.
        </BodyText>
        <BodyText className="mb-4">
          As CGV grows, our vision extends beyond individual products and transactions. We are building a reliable sourcing network and enduring supply business that connects Indian capabilities with opportunities both at home and around the world.
        </BodyText>
        <BodyText>
          More than a trading company, we are building a legacy — one founded on trust, strengthened through every partnership, and carried forward through generations.
        </BodyText>

        <div className="org-about__values">
          {VALUES.map((v) => (
            <ValueItem key={v.name} name={v.name} desc={v.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
