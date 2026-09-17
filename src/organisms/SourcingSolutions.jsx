import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import SolutionCard from '../molecules/SolutionCard';

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

const SourcingSolutions = () => {
  return (
    <section id="sourcing-solutions" className="org-sourcing-solutions">
      <div className="org-sourcing-solutions__inner">
        <div className="org-sourcing-solutions__header">
          <div className="atom-section-label">Sourcing Solution</div>
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
    </section>
  );
};

export default SourcingSolutions;