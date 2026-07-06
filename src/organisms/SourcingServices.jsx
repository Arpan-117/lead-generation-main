import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { ServiceCard }        from '../molecules/ServiceCard';
import { SourcingReasonItem } from '../molecules/SourcingReasonItem';
import { WorkflowStep }   from '../molecules/WorkflowStep';

/* ── Data ─────────────────────────────────────────────────────────────────── */

const CUSTOM_PROCUREMENT = {
  subtitle: 'Custom Procurement',
  title:    'Source the Right Products at Competitive Prices',
  bodyPara1:     'Finding dependable suppliers can be time-consuming and challenging. Our custom procurement service helps international buyers identify and source products that meet their technical specifications, quality requirements, and commercial objectives. We work closely with clients.',
  bodyPara2:     'We work closely with clients to understand their exact needs and coordinate with reputable manufacturers and suppliers across India to provide suitable sourcing solutions.',
  items: [
    'Product sourcing based on client specifications',
    'Supplier identification and evaluation',
    'Request for quotations (RFQs) and price comparisons',
    'Coordination with manufacturers and distributors',
    'Product customization where feasible',
    'Quality and specification verification support',
    'Packaging and labeling coordination',
    'Export documentation assistance',
    'Shipping and logistics coordination',
  ],
  closingPara:     'Whether you need a single product or multiple product categories, we strive to provide an efficient sourcing experience while maintaining clear communication throughout the process.',
};

const OEM_PRIVATE_LABEL = {
  subtitle: 'OEM & Private Label Support',
  title:    'Build and Launch Your Brand with Indian Manufacturing Capabilities',
  bodyPara1:     'For retailers and distributors seeking to build their own brand identity, we facilitate partnerships with manufacturers offering private label and custom specification capabilities — allowing you to market products under your brand name while leveraging established manufacturing excellence.',
  bodyPara2:     'We coordinate all aspects of brand development—from specification finalization to packaging design, quality assurance, and bulk production coordination—ensuring your products meet both regulatory requirements and market expectations.',
  items: [
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
  closingPara:     'This service is ideal for established retailers looking to differentiate through private-label products, fleet operators seeking customized bulk supply agreements, and wholesale distributors building their own product portfolios.',
};

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

// const REASONS = [
//   {
//     name: 'Direct Manufacturer Relationships',
//     desc: 'We work directly with battery and lubricant producers, eliminating distributor markups and ensuring consistent pricing and quality.',
//   },
//   {
//     name: 'Supply Chain Transparency',
//     desc: 'You receive complete traceability from manufacturing through quality testing to final delivery, with all documentation provided upfront.',
//   },
//   {
//     name: 'Quality Assurance',
//     desc: 'Every shipment undergoes inspection; we verify certifications, batch test reports, and technical specifications before warehouse acceptance.',
//   },
//   {
//     name: 'Flexible Terms',
//     desc: 'Whether you need drop-shipped inventory, consolidated orders, or custom volumes, we accommodate your business model.',
//   },
//   {
//     name: 'Regulatory Support',
//     desc: 'We handle import compliance, certification documentation, customs procedures, and all export logistics.',
//   },
//   {
//     name: 'Dedicated Account Management',
//     desc: 'A single point of contact manages your entire procurement, from quote to delivery.',
//   },
// ];

/* ── Component ────────────────────────────────────────────────────────────── */

export function SourcingServices() {
  const [s1, s2, s3, s4, s5, s6] = WORKFLOW_STEPS;

  return (
    <section id="sourcing" className="org-sourcing">
      <div className="org-sourcing__inner">

        {/* Header */}
        <div className="org-sourcing__header">
          <SectionLabel>Sourcing Services</SectionLabel>
          <SectionHeading>
            Procurement built on<br /><em>relationships &amp; results.</em>
          </SectionHeading>
        </div>

        {/* Part 1 + Part 2 — side by side on large screens */}
        <div className="org-sourcing__cards">
          <ServiceCard
            subtitle={CUSTOM_PROCUREMENT.subtitle}
            title={CUSTOM_PROCUREMENT.title}
            bodyPara1={CUSTOM_PROCUREMENT.bodyPara1}
            bodyPara2={CUSTOM_PROCUREMENT.bodyPara2}
            items={CUSTOM_PROCUREMENT.items}
            closingPara={CUSTOM_PROCUREMENT.closingPara}
            collapsedCount={5}
          />
          <ServiceCard
            subtitle={OEM_PRIVATE_LABEL.subtitle}
            title={OEM_PRIVATE_LABEL.title}
            bodyPara1={OEM_PRIVATE_LABEL.bodyPara1}
            bodyPara2={OEM_PRIVATE_LABEL.bodyPara2}
            items={OEM_PRIVATE_LABEL.items}
            closingPara={OEM_PRIVATE_LABEL.closingPara}
            collapsedCount={5}
          />
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

      </div>
    </section>
  );
}

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