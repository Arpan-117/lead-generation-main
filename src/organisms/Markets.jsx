import { SectionLabel, SectionHeading } from '../atoms/Typography';
import { MarketCard } from '../molecules/MarketCard';

const MARKETS = [
  {
    flag:   '🇮🇳',
    region: 'Domestic',
    title:  'India',
    desc:   "Our home market and operational base. We leverage deep local knowledge and relationships to source, procure, and distribute across India's diverse and growing economy.",
  },
  {
    flag:   '🌙',
    region: 'International',
    title:  'Middle East',
    desc:   'A critical trade corridor between Asia and the world. We facilitate import-export partnerships across the Gulf, building long-term relationships grounded in mutual value.',
  },
  {
    flag:   '🌍',
    region: 'Emerging',
    title:  'Africa',
    desc:   "The world's next great economic frontier. We are establishing early footholds across key African markets, positioning CGV as a trusted partner for the continent's growth decade.",
  },
];

export function Markets() {
  return (
    <section id="markets" className="org-markets">
      <div className="org-markets__header">
        <div>
          <SectionLabel>Our Reach</SectionLabel>
          <SectionHeading>
            Three markets.<br /><em>One standard.</em>
          </SectionHeading>
        </div>
      </div>

      <div className="org-markets__grid">
        {MARKETS.map((m) => (
          <MarketCard
            key={m.title}
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
