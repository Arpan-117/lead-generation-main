import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { IndustryCard } from '../molecules/IndustryCard';

/* ── Data ─────────────────────────────────────────────────────────────────── */

const INDUSTRIES = [
  'Automotive & Fleet',
  'Telecom Infrastructure',
  'Data Centres & IT',
  'Hospitals & Healthcare',
  'Manufacturing Plants',
  'Marine & Shipping',
  'Construction & Mining',
  'Solar & Renewable Energy',
  'Government & Defence',
  'Retail Distribution',
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
        <BodyText className="mt-4 max-w-2xl">
          Our products are trusted by businesses operating in some of the most
          demanding industrial, infrastructure, and commercial environments worldwide.
        </BodyText>
      </div>

      <div className="org-industries__grid">
        {INDUSTRIES.map((name) => (
          <IndustryCard key={name} name={name} />
        ))}
      </div>
    </section>
  );
}