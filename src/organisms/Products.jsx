import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { ProductCard } from '../molecules/ProductCard';

/* ── Data ─────────────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    icon:     '🔋',
    category: 'Batteries',
    desc:     'We supply a comprehensive range of batteries for automotive, industrial, telecom, and renewable energy applications — sourced from ISO-certified manufacturers and tested to international standards.',
    types: [
      'Automotive & Commercial Vehicle Batteries',
      'Industrial Deep-Cycle Batteries',
      'VRLA Batteries',
      'Lithium-Ion Battery Packs',
      'Telecom & UPS Backup Batteries',
    ],
    specs: [
      { label: 'Voltage',   value: '2V, 6V, 12V, 24V, 48V systems' },
      { label: 'Capacity',  value: '7Ah to 3000Ah' },
      { label: 'Standards', value: 'IEC, DIN, JIS, BIS certified' },
    ],
    idealFor: 'Automotive fleets, telecom towers, solar energy storage, data centres, hospitals, and off-grid power systems.',
    href: '/products/batteries',
  },
  {
    icon:     '🛢',
    category: 'Lubricants',
    desc:     'Our lubricant portfolio covers the full spectrum of industrial and automotive fluids, sourced from leading refiners and blenders who meet API, SAE, and OEM specifications.',
    types: [
      'Engine Oils (Petrol & Diesel, Synthetic & Semi-Synthetic)',
      'Gear Oils & Transmission Fluids',
      'Hydraulic Oils',
      'Compressor Oils',
      'Industrial Greases',
      'Cutting & Metalworking Fluids',
      'Marine Lubricants',
      'Transformer Oils',
    ],
    specs: [
      { label: 'API',       value: 'SN, SP, CK-4, CJ-4' },
      { label: 'Viscosity', value: 'SAE 0W-20 to 50W' },
      { label: 'Packaging', value: 'Bulk, drums (200L), pails (20L), retail packs' },
    ],
    idealFor: 'Manufacturing plants, automotive service centres, construction equipment, marine vessels, and heavy industry.',
    href: '/products/lubricants',
  },
  {
    icon:     '⚡',
    category: 'UPS & Inverter Systems',
    desc:     'We supply power protection and backup solutions built for mission-critical environments. Our range includes single-phase and three-phase systems suitable for small businesses to large industrial facilities.',
    types: [
      'Online Double Conversion UPS',
      'Line-Interactive UPS',
      'Offline / Standby UPS',
      'Industrial 3-Phase UPS Systems',
      'Solar Inverters & Hybrid Inverters',
      'Tower & Rack-Mount UPS Units',
      'High-Frequency & Low-Frequency Inverters',
    ],
    specs: [
      { label: 'Capacity',  value: '500VA to 800KVA' },
      { label: 'Input',     value: '110V / 220V / 380V / 415V' },
      { label: 'Standards', value: 'CE, IEC 62040, UL certified' },
    ],
    idealFor: 'Data centres, hospitals, banks, telecom infrastructure, government facilities, and manufacturing plants.',
    href: '/products/ups-inverters',
  },
];

/* ── Component ────────────────────────────────────────────────────────────── */

export function Products() {
  return (
    <section id="products" className="org-products">
      <div className="org-products__header">
        <SectionLabel>Our Products</SectionLabel>
        <SectionHeading>
          Three core categories.<br /><em>One trusted partner.</em>
        </SectionHeading>
        <BodyText className="mt-4 max-w-2xl">
          From industrial grade batteries to highperformance lubricants and power backup systems, we offer end-to-end procurement and deliver for your critical operations.
        </BodyText>
      </div>

      <div className="org-products__grid">
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.category}
            icon={p.icon}
            category={p.category}
            desc={p.desc}
            types={p.types}
            specs={p.specs}
            idealFor={p.idealFor}
            href={p.href}
          />
        ))}
      </div>
    </section>
  );
}