import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { Pillar } from '../molecules/Pillar';

const PILLARS = [
  {
    number: '01',
    name:   'Founder-Led',
    // desc:   'Every deal carries the personal accountability of the Chowdhury name. No faceless corporation — a founder who stands behind every commitment.',
    desc:   'Every commitment carries the personal accountability of the Chowdhury name. We believe business is built on trust, transparency and doing what we say we will do.',
  },
  {
    number: '02',
    // name:   'Long-Term View',
    name:   'Sourcing Without the Complexity',
    // desc:   'We prioritise partnerships over transactions. Our goal is to be your trading partner for years — not just the next shipment.',
    desc:   'From manufacturers and authorised distributors to specialised suppliers, we identify suitable sourcing options and bring them together under one procurement relationship.',
  },
  {
    number: '03',
    // name:   'Market Depth',
    name:   'Built for Business Requirements',
    // desc:   'Deep understanding of South Asian, Middle Eastern, and African trade dynamics — culture, regulation, logistics, and relationships.',
    desc:   'Whether it is a recurring industrial requirement, a large project, a government procurement opportunity or an international order, we focus on the specifications, quantities, documentation and delivery requirements that matter.',
  },
  {
    number: '04',
    // name:   'Legacy Vision',
    name:   'Reliable Supply',
    // desc:   'We are building a generational enterprise. Partners who join us now are part of a journey — not just a deal.',
    desc:   "Our role doesn't end with finding a product. We coordinate the journey from sourcing and commercial evaluation through documentation, logistics and delivery.",
  },
  // {
  //   number: '05',
  //   name:   '',
  //   desc:   "",
  // },
  {
    number: '06',
    name:   'India at the Centre. Markets Beyond.',
    desc:   "We serve customers across India while helping international buyers access products and suppliers from India — creating a bridge between Indian supply and global demand.",
  },
  {
    number: '07',
    name:   "Long-Term View",
    desc:   "We are building CGV for the long term. That means choosing sustainable relationships over short-term transactions and becoming a procurement partner our customers can rely on repeatedly.",
  },
  // {
  //   number: '08',
  //   name:   '',
  //   desc:   "",
  // },
];

export function Why() {
  return (
    <section id="why" className="org-why">
      <div className="org-why__inner">
        <SectionLabel>Why Choose CGV</SectionLabel>
        <SectionHeading>
          What sets us <em>apart.</em>
        </SectionHeading>
        <BodyText className="mt-4">
          More than a supplier. A partner behind your supply chain. We don't just move products from one place to another.  We build the sourcing relationships, supply networks and procurement capabilities that keep businesses moving.
        </BodyText>

        <div className="org-why__grid">
          {PILLARS.map((p) => (
            <Pillar key={p.number} number={p.number} name={p.name} desc={p.desc} />
          ))}
        </div>

        {/* Insert Edit-1 content */}
        {/* <BodyText className="org-why__closing">
          We don't just supply products — we build long-term supply relationships that keep
          your operations running without interruption, anywhere in the world.
        </BodyText> */}
        {/* <BodyText className="org-why__closing">
          We don't just move products from one place to another.  We build the sourcing relationships, supply networks and procurement capabilities that keep businesses moving.
        </BodyText> */}
      </div>
    </section>
  );
}
