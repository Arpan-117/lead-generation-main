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
      <div className="org-about__frame">
        <div className="w-full h-full flex items-center justify-center">
          <GlobeArt size={220} />
        </div>
      </div>

      {/* Content */}
      <div className="org-about__content">
        <SectionLabel>Our Story</SectionLabel>

        <SectionHeading className="mb-6">
          A name built on<br /><em>earned respect.</em>
        </SectionHeading>

        <BodyText className="mb-4">
          Every great enterprise begins with a belief — that trade, done with integrity,
          can build bridges between nations and create prosperity that lasts generations.
        </BodyText>
        <BodyText className="mb-4">
          Chowdhury Global Ventures was founded on that belief. Rooted in India, reaching
          into the Middle East and Africa, we are a trading company built not just for
          today's markets — but for the decades ahead.
        </BodyText>
        <BodyText>
          The name Chowdhury carries weight. Leadership, responsibility, and respect —
          values not merely inherited, but earned through every transaction, every
          partnership, every promise kept.
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
