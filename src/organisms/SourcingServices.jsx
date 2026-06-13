import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { ServiceCard }        from '../molecules/ServiceCard';
import { SourcingReasonItem } from '../molecules/SourcingReasonItem';

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

const REASONS = [
  {
    name: 'Direct Manufacturer Relationships',
    desc: 'We work directly with battery and lubricant producers, eliminating distributor markups and ensuring consistent pricing and quality.',
  },
  {
    name: 'Supply Chain Transparency',
    desc: 'You receive complete traceability from manufacturing through quality testing to final delivery, with all documentation provided upfront.',
  },
  {
    name: 'Quality Assurance',
    desc: 'Every shipment undergoes inspection; we verify certifications, batch test reports, and technical specifications before warehouse acceptance.',
  },
  {
    name: 'Flexible Terms',
    desc: 'Whether you need drop-shipped inventory, consolidated orders, or custom volumes, we accommodate your business model.',
  },
  {
    name: 'Regulatory Support',
    desc: 'We handle import compliance, certification documentation, customs procedures, and all export logistics.',
  },
  {
    name: 'Dedicated Account Management',
    desc: 'A single point of contact manages your entire procurement, from quote to delivery.',
  },
];

/* ── Component ────────────────────────────────────────────────────────────── */

export function SourcingServices() {
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

          <div className="org-sourcing__reason-grid">
            {REASONS.map((r) => (
              <SourcingReasonItem key={r.name} name={r.name} desc={r.desc} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}