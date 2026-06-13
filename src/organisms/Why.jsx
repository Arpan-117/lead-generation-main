import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { Pillar } from '../molecules/Pillar';

const PILLARS = [
  {
    number: '01',
    name:   'Founder-Led',
    desc:   'Every deal carries the personal accountability of the Chowdhury name. No faceless corporation — a founder who stands behind every commitment.',
  },
  {
    number: '02',
    name:   'Long-Term View',
    desc:   'We prioritise partnerships over transactions. Our goal is to be your trading partner for years — not just the next shipment.',
  },
  {
    number: '03',
    name:   'Market Depth',
    desc:   'Deep understanding of South Asian, Middle Eastern, and African trade dynamics — culture, regulation, logistics, and relationships.',
  },
  {
    number: '04',
    name:   'Legacy Vision',
    desc:   'We are building a generational enterprise. Partners who join us now are part of a journey — not just a deal.',
  },
];

export function Why() {
  return (
    <section id="why" className="org-why">
      <div className="org-why__inner">
        <SectionLabel>Why Choose CGV</SectionLabel>
        <SectionHeading>
          What sets us <em>apart.</em>
        </SectionHeading>

        <div className="org-why__grid">
          {PILLARS.map((p) => (
            <Pillar key={p.number} number={p.number} name={p.name} desc={p.desc} />
          ))}
        </div>

        {/* Insert Edit-1 content */}
        <BodyText className="org-why__closing">
          We don't just supply products — we build long-term supply relationships that keep
          your operations running without interruption, anywhere in the world.
        </BodyText>
      </div>
    </section>
  );
}
