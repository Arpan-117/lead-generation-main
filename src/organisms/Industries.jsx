import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { IndustryCard } from '../molecules/IndustryCard';

/* ── Data ─────────────────────────────────────────────────────────────────── */

// const INDUSTRIES = [
//   'Automotive & Fleet',
//   'Telecom Infrastructure',
//   'Data Centres & IT',
//   'Hospitals & Healthcare',
//   'Manufacturing Plants',
//   'Marine & Shipping',
//   'Construction & Mining',
//   'Solar & Renewable Energy',
//   'Government & Defence',
//   'Retail Distribution',
// ];
 
const INDUSTRIES = [
  {
    icon:      '🚗',
    title:     'Automotive & Fleet',
    desc:      'Providing end-to-end sourcing and procurement solutions for vehicle manufacturers, fleet operators, dealerships, and service centres. We help businesses improve operational efficiency and fleet reliability through dependable supply chain solutions.',
    solutions: 'Batteries, EV charging solutions, lubricants, tyres, filters, brake systems, engine & suspension components, workshop equipment, electrical parts, and fleet maintenance consumables.',
  },
  {
    icon:      '📡',
    title:     'Telecom Infrastructure',
    desc:      'Delivering reliable procurement solutions that ensure uninterrupted connectivity and efficient network operations for telecom operators and infrastructure providers.',
    solutions: 'Telecom batteries, UPS systems, rectifiers, DC power systems, telecom cabinets, generators, power distribution units, cables, network racks, surge protection, and fire protection systems.',
  },
  {
    icon:      '🖥️',
    title:     'Data Centres & IT',
    desc:      'Supporting mission-critical facilities with sourcing solutions that maximize uptime, operational resilience, and infrastructure performance.',
    solutions: 'UPS systems, battery backup, server racks, precision cooling, PDUs, ATS panels, monitoring systems, fire suppression, access control, CCTV, and environmental monitoring equipment.',
  },
  {
    icon:      '🏥',
    title:     'Hospitals & Healthcare',
    desc:      'Providing procurement solutions that support continuous healthcare operations through reliable power, infrastructure, safety, and facility management solutions.',
    solutions: 'Medical UPS systems, backup power, generators, voltage stabilizers, medical consumables, PPE, hospital furniture, purification systems, lighting, and fire safety equipment.',
  },
  {
    icon:      '🏭',
    title:     'Manufacturing Plants',
    desc:      'Enabling industrial productivity through comprehensive sourcing solutions for production, maintenance, engineering, and plant operations.',
    solutions: 'Industrial batteries, lubricants, motors, pumps, valves, bearings, gearboxes, industrial tools, welding equipment, electrical components, chemicals, PPE, and material handling equipment.',
  },
  {
    icon:      '⛏️',
    title:     'Construction & Mining',
    desc:      'Delivering procurement solutions that keep construction projects and mining operations running efficiently in demanding environments.',
    solutions: 'Heavy-duty batteries, lubricants, power tools, welding equipment, construction chemicals, steel products, pipes & fittings, generators, industrial lighting, safety equipment, and maintenance supplies.',
  },
  {
    icon:      '☀️',
    title:     'Solar & Renewable Energy',
    desc:      'Partnering with renewable energy developers by supplying integrated solutions for clean energy generation, storage, and distribution.',
    solutions: 'Solar panels, battery energy storage systems, inverters, charge controllers, mounting structures, DC cables, electrical protection systems, energy monitoring solutions, and renewable energy components.',
  },
  {
    icon:      '🏛️',
    title:     'Government & Defence',
    desc:      'Providing reliable sourcing and procurement solutions that support public infrastructure, critical facilities, and defence operations while meeting stringent quality and compliance requirements.',
    solutions: 'Industrial power systems, UPS, generators, communication equipment, surveillance systems, access control, IT infrastructure, emergency lighting, fire safety equipment, industrial tools, and PPE.',
  },
  {
    icon:      '🛒',
    title:     'Retail Distribution',
    desc:      'Helping distributors, wholesalers, and retailers streamline procurement through a diversified product portfolio and an efficient global supply network.',
    solutions: 'Consumer electronics, home appliances, batteries, lubricants, electrical accessories, hardware, power tools, packaging materials, office supplies, household products, FMCG products, and private label sourcing.',
  },
];

/* ── Component ────────────────────────────────────────────────────────────── */

export function Industries() {
  return (
    <section id="industries" className="org-industries">
      <div className="org-industries__header">
        <SectionLabel>Industries Served</SectionLabel>
        <SectionHeading>
          Powering diverse sectors<br /><em>across the globe.</em>
        </SectionHeading>
        <BodyText className="mt-4 ">
          Our products are trusted by businesses operating in some of the most
          demanding industrial, infrastructure, and commercial environments worldwide.
        </BodyText>
      </div>

      {/* <div className="org-industries__grid">
        {INDUSTRIES.map((name) => (
          <IndustryCard key={name} name={name} />
        ))}
      </div> */}

      <div className="org-industries__grid">
         {INDUSTRIES.map((card) => (
          <IndustryCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            solutions={card.solutions}
          />
        ))}
      </div>
    </section>
  );
}