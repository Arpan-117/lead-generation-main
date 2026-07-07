import { SectionLabel, SectionHeading } from '../atoms/Typography';
import { MarketCard } from '../molecules/MarketCard';

const MARKETS = [
  {
    flag:   '🌍',
    region: 'Global',
    title:  '1',
    desc:   "Serving customers across every major international market with dependable sourcing and supply chain solutions.",
  },
  {
    flag:   '🤝',
    region: 'Worldwide Partnerships',
    title:  '2',
    desc:   'Collaborating with trusted manufacturers, suppliers, and logistics partners to ensure quality, reliability, and competitive pricing.',
  },
  {
    flag:   '🚢',
    region: 'Cross-Border Trade',
    title:  '3',
    desc:   "Supporting seamless import, export, procurement, and international logistics for businesses around the world.",
  },
];

export function Markets() {
  return (
    <section id="markets" className="org-markets">
      <div className="org-markets__header">
        <div>
          <SectionLabel>Our Reach</SectionLabel>
          <SectionHeading>
            Global Markets.<br /><em>Trusted Partnerships.</em>
          </SectionHeading>
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
          />
        ))}
      </div>
    </section>
  );
}
