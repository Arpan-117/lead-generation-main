import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import SolutionCard from '../molecules/SolutionCard';
import { WorkflowStep }   from '../molecules/WorkflowStep';

const solutions = [
  {
    title: 'Domestic B2B Supply',
    intro:
      'CGV helps businesses, contractors, distributors, and institutions source reliable products from suitable manufacturers and suppliers across India.',
    features: [
      'Specification-based product sourcing',
      'Supplier identification and quotation comparison',
      'Bulk and recurring procurement',
      'Technical documentation support',
      'Packaging and logistics coordination',
      'Pan-India delivery',
    ],
    closing:
      'From individual requirements to ongoing procurement, we simplify sourcing and deliver dependable supply solutions.',
  },
  {
    title: 'Government & GeM',
    intro:
      'CGV supports government departments, PSUs, and institutional buyers with reliable product sourcing and supply through GeM and other applicable procurement channels.',
    features: [
      'Product sourcing against specifications and BOQs',
      'Competitive quotation and tender support',
      'Manufacturer and supplier coordination',
      'Technical documentation and compliance support',
      'Bulk and institutional supply',
      'Delivery and logistics coordination',
    ],
    closing:
      'We simplify procurement from requirement to fulfilment, with a focus on accurate specifications, dependable supply, and timely delivery.',
  },
  {
    title: 'Export from India',
    intro:
      'CGV helps international buyers source reliable products from India, coordinating procurement and export supply from suitable manufacturers and suppliers.',
    features: [
      'Product sourcing based on buyer requirements',
      'Supplier and manufacturer coordination',
      'Competitive quotations and commercial support',
      'Documentation and compliance coordination',
      'Packaging and labelling support',
      'Shipping and logistics coordination',
    ],
    closing:
      'From individual orders to recurring requirements, we simplify sourcing from India and support reliable delivery to international markets.',
  },
  {
    title: 'Industrial Procurement',
    intro:
      'CGV helps businesses source and procure products for projects, MRO, infrastructure, manufacturing, and day-to-day operational requirements.',
    features: [
      'Specification-based sourcing',
      'Supplier identification and quotation comparison',
      'Bulk and project procurement',
      'Technical documentation support',
      'Manufacturer and distributor coordination',
      'Packaging, logistics and delivery coordination',
    ],
    closing:
      'From individual requirements to complete project needs, we simplify procurement and provide dependable supply solutions.',
  },
  {
    title: 'OEM & Private Label Support',
    intro:
      'For retailers and distributors seeking to build their own brand identity, we facilitate partnerships with manufacturers offering private label and custom specification capabilities — allowing you to market products under your brand name while leveraging established manufacturing excellence.',
    secondary:
      'We coordinate all aspects of brand development, from specification finalization to packaging design, quality assurance, and bulk production coordination, ensuring your products meet both regulatory requirements and market expectations.',
    features: [
      'Manufacturer partnership identification based on your brand requirements',
      'Custom packaging design and artwork implementation',
      'Brand labeling and regulatory compliance support',
      'Product specification adjustment to match market demands',
      'Minimum order quantity negotiation',
      'Quality sample production and testing before bulk orders',
      'Full production run coordination and timeline management',
      'Export-ready packaging and branding implementation',
      'Bulk shipment logistics and delivery tracking',
    ],
    closing:
      'This service is ideal for established retailers looking to differentiate through private-label products, fleet operators seeking customized bulk supply agreements, and wholesale distributors building their own product portfolios.',
    wide: true,
    splitList: true,
  },
];

const WORKFLOW_STEPS = [
  {
    number: '01',
    name:   'Manufacture',
    desc:   'We work directly with ISO-certified manufacturers, verifying production capabilities, factory audits, and compliance records before any order is placed.',
  },
  {
    number: '02',
    name:   'Quality Testing',
    desc:   'Every batch undergoes rigorous inspection — technical spec verification, batch test reports, and performance benchmarking against international standards.',
  },
  {
    number: '03',
    name:   'Compliance',
    desc:   'All certifications, regulatory documents, and export declarations are prepared and verified — ensuring your shipment clears customs without delays.',
  },
  {
    number: '04',
    name:   'Warehouse',
    desc:   'Goods are received, inspected, and stored in managed warehousing with inventory tracking — ready for consolidated or direct dispatch per your schedule.',
  },
  {
    number: '05',
    name:   'Delivery',
    desc:   'End-to-end logistics coordination covering freight, customs clearance, and last-mile delivery — with full shipment tracking at every stage.',
  },
  {
    number: '06',
    name:   'Account Management',
    desc:   'A dedicated account manager is your single point of contact — from first quote through repeat orders, ensuring continuity and responsiveness at every stage.',
  },
];

export function SourcingSolutions()
 {
  const [s1, s2, s3, s4, s5, s6] = WORKFLOW_STEPS;

  return (
    <section id="sourcing-solutions" className="org-sourcing-solutions">
      <div className="org-sourcing-solutions__inner">
        <div className="org-sourcing-solutions__header">
          <div className="atom-section-label">Sourcing Solutions</div>
          <h2 className="atom-heading">
            India to the World. <em>Built on Trust.</em>
          </h2>
          <p className="atom-body mt-5">
            From domestic procurement to international sourcing, CGV
            connects businesses with reliable suppliers, products and supply
            solutions — built around long-term partnerships and dependable
            delivery.
          </p>
        </div>

        <div className="org-sourcing-solutions__grid">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} index={i + 1} {...solution} />
          ))}
        </div>
      </div>

      {/* Part 3 — Why Choose Our Sourcing Model */}
              <div className="border-t border-gold/20 pt-12 md:pt-16">
                {/* <SectionLabel>Why Choose Our Sourcing Model</SectionLabel> */}
                {/* <SectionHeading className="mb-2">
                  Six reasons partners <em>trust us.</em>
                </SectionHeading> */}
                <SectionHeading className="mb-2">
                  Why Choose Our <em>Sourcing Model.</em>
                </SectionHeading>
                <BodyText className="mt-4 mb-0 max-w-2xl">
                  Reasons why our partners trust us.
                </BodyText>
      
                {/* Commented out to replace with flowchart for new design changes */}
                {/* <div className="org-sourcing__reason-grid">
                  {REASONS.map((r) => (
                    <SourcingReasonItem key={r.name} name={r.name} desc={r.desc} />
                  ))}
                </div> */}
      
                 {/* ── DESKTOP snake layout (lg+) ── */}
                <div className="hidden lg:block mt-10">
                  {/* Row 1: 01 → 02 → 03 */}
                  <div className="org-workflow__row">
                    <WorkflowStep {...s1} />
                    <ArrowRight />
                    <WorkflowStep {...s2} />
                    <ArrowRight />
                    <WorkflowStep {...s3} />
                  </div>
       
                  {/* Snake turn connector */}
                  <SnakeTurn />
       
                  {/* Row 2: 06 ← 05 ← 04 (rendered RTL so arrows point correctly) */}
                  <div className="org-workflow__row" style={{ direction: 'rtl' }}>
                    <div style={{ direction: 'ltr' }}><WorkflowStep {...s4} /></div>
                    <ArrowLeft />
                    <div style={{ direction: 'ltr' }}><WorkflowStep {...s5} /></div>
                    <ArrowLeft />
                    <div style={{ direction: 'ltr' }}><WorkflowStep {...s6} /></div>
                  </div>
                </div>
       
                {/* ── MOBILE vertical stack (below lg) ── */}
                <div className="org-workflow__mobile mt-8">
                  {WORKFLOW_STEPS.map((step, i) => (
                    <div key={step.number} className="org-workflow__mobile-step">
                      <WorkflowStep {...step} />
                      {i < WORKFLOW_STEPS.length - 1 && <ArrowDown />}
                    </div>
                  ))}
                </div>
      
              </div>
    </section>
  );
};

// export default SourcingSolutions;

/* ── Sub-components ───────────────────────────────────────────────────────── */
 
/** Horizontal arrow pointing right */
function ArrowRight() {
  return (
    <div className="org-workflow__arrow-h">
      <span className="org-workflow__arrow-h-line" />
      <span className="org-workflow__arrow-h-head" />
    </div>
  );
}
 
/** Horizontal arrow pointing left */
function ArrowLeft() {
  return (
    <div className="org-workflow__arrow-h org-workflow__arrow-h--rev">
      <span className="org-workflow__arrow-h-line" />
      <span className="org-workflow__arrow-h-head" />
    </div>
  );
}
 
/** Mobile: simple down arrow between stacked steps */
function ArrowDown() {
  return (
    <div className="org-workflow__mobile-arrow">
      <span className="org-workflow__mobile-arrow-line" />
      <span className="org-workflow__mobile-arrow-head" />
    </div>
  );
}
 
/**
 * Desktop snake connector between row 1 and row 2.
 * Drops down from col 3, sweeps left across all columns,
 * arrowhead points down into col 1 of row 2 (which is step 04
 * since row 2 renders RTL visually).
 *
 * Uses the same 5-column grid as the rows so columns align exactly.
 */
function SnakeTurn() {
  return (
    <>
      {/* Vertical drop on the right side (col 5) */}
      <div className="org-workflow__turn-down">
        <div className="org-workflow__turn-down-line">
          <div style={{ width: '1.5px', flex: 1, background: '#B8922E' }} />
        </div>
      </div>
 
      {/* Horizontal sweep across + arrowhead pointing down into col 1 */}
      <div className="org-workflow__turn-across">
        {/* cols 1–4 get the horizontal line */}
        {/* <div className="org-workflow__turn-across-span" style={{ gridColumn: '1 / 5' }} /> */}
        {/* col 5: continues vertical then arrowhead */}
        <div className="org-workflow__turn-arrowhead">
          <div style={{ width: '1.5px', height: '100%', background: '#B8922E' }} />
          <div
            style={{
              width: 0, height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '8px solid #B8922E',
            }}
          />
        </div>
      </div>
    </>
  );
}