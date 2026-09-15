import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { MarketCard } from '../molecules/MarketCard';

const MARKETS = [
  {
    flag:   '🌍',
    region: 'Global',
    title:  '1',
    desc:   "Serving customers across every major international market with dependable sourcing and supply chain solutions.",
    pic: "/Markets/Global.png",
  },
  {
    flag:   '🤝',
    region: 'Worldwide Partnerships',
    title:  '2',
    desc:   'Collaborating with trusted manufacturers, suppliers, and logistics partners to ensure quality, reliability, and competitive pricing.',
    pic: "/Markets/Partnership.png",
  },
  {
    flag:   '🚢',
    region: 'Cross-Border Trade',
    title:  '3',
    desc:   "Supporting seamless import, export, procurement, and international logistics for businesses around the world.",
    pic: "/Markets/Trade.png",
  },
];

export function SourcigSolutions() {
  return (
    <section id="markets" className="org-markets">
      <div className="org-markets__header">
        <div>
          <SectionLabel>Sourcing Solutions</SectionLabel>
          <SectionHeading>
            India to the World, <em>Built on Trust.</em>
          </SectionHeading>
          <BodyText className="mt-4 ">
            From domestic procurement to international sourcing, CGV connects businesses with reliable suppliers, products and supply solutions — built around long-term partnerships and dependable delivery.
          </BodyText>
        </div>
      </div>

      <div className="org-markets__grid">
        {MARKETS.map((m) => (
          <MarketCard
            key={m.region}
            flag={m.flag}
            region={m.region}
            title={m.title}
            desc={m.desc}
            pic={m.pic}
          />
        ))}
      </div>
    </section>
  );
}
