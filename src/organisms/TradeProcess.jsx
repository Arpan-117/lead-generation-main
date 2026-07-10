import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { TradeStep } from '../molecules/TradeStep';

/* ── Data ─────────────────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: '01',
    title:  'Share your requirements',
    desc:   'Tell us the product, specifications, quantity, destination port, and required delivery timeline. We respond within 24 business hours with availability and indicative pricing.',
  },
  {
    number: '02',
    title:  'Receive a tailored quote',
    desc:   'We issue a detailed Proforma Invoice covering unit price, freight options, Incoterms, lead time, and payment terms. No hidden charges.',
  },
  {
    number: '03',
    title:  'Confirm order & payment',
    desc:   'Once terms are agreed, confirm the purchase order and initiate payment as per agreed trade terms. We begin procurement and production coordination immediately.',
  },
  {
    number: '04',
    title:  'Dispatch & delivery',
    desc:   'Goods are inspected, packed, and dispatched with full documentation. You receive live tracking updates until delivery is completed at your destination.',
  },
];

const GLOSSARY = [
  { term: 'Incoterms', def: 'International Commercial Terms (ICC), defining shipping responsibility' },
  { term: 'PI',        def: 'Proforma Invoice' },
  { term: 'PO',        def: 'Purchase Order' },
];

/* ── SVG lifecycle diagram ────────────────────────────────────────────────── */

/**
 * Circular trade lifecycle diagram.
 * Centre: 220,220  |  Orbit radius: 148
 * Nodes at compass points, arcs hug the orbit circle.
 * stroke-width="2.5" for thick arrows.
 */
function TradeLifecycleDiagram() {
  return (
    <svg
      viewBox="0 0 440 440"
      width="100%"
      height="100%"
      className="org-trade__diagram"
      aria-label="Circular trade lifecycle diagram showing four stages: Requirements, Tailored quote, Order and payment, Dispatch and delivery"
      role="img"
    >
      <defs>
        <marker
          id="trade-arrow"
          viewBox="0 0 12 12"
          refX="9" refY="6"
          markerWidth="5" markerHeight="5"
          orient="auto"
        >
          <path
            d="M1 1L10 6L1 11"
            fill="none"
            stroke="#B8922E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* ── Connector arcs — quarter circles hugging orbit radius 148 ── */}
      {/* 01 (top) → 02 (right) */}
      <path
        d="M 278,88 A 148,148 0 0,1 352,162"
        fill="none" stroke="#B8922E" strokeWidth="2.5"
        markerEnd="url(#trade-arrow)"
      />
      {/* 02 (right) → 03 (bottom) */}
      <path
        d="M 352,278 A 148,148 0 0,1 278,352"
        fill="none" stroke="#B8922E" strokeWidth="2.5"
        markerEnd="url(#trade-arrow)"
      />
      {/* 03 (bottom) → 04 (left) */}
      <path
        d="M 162,352 A 148,148 0 0,1 88,278"
        fill="none" stroke="#B8922E" strokeWidth="2.5"
        markerEnd="url(#trade-arrow)"
      />
      {/* 04 (left) → 01 (top) */}
      <path
        d="M 88,162 A 148,148 0 0,1 162,88"
        fill="none" stroke="#B8922E" strokeWidth="2.5"
        markerEnd="url(#trade-arrow)"
      />

      {/* ── Centre circle ── */}
      <circle cx="220" cy="220" r="62" fill="#0A1628" />
      <text x="220" y="212" textAnchor="middle"
        className="mol-trade-step__title"
        // fontFamily="Cormorant Garamond, Georgia, serif"
        // fontSize="13" 
        fill="#F8F4EC">Trade</text>
      <text x="220" y="232" textAnchor="middle"
        className="mol-trade-step__title"
        // fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="13" 
        fill="#B8922E">lifecycle</text>

      {/* ── Step 01 — top ── */}
      <rect x="150" y="46" width="140" height="52" rx="8"
        fill="#F8F4EC" stroke="#B8922E" strokeWidth="1" />
      <text x="220" y="66" textAnchor="middle"
        className='mol-trade-step__num'
        // fontFamily="Cormorant Garamond, Georgia, serif"
        // fontSize="11" 
        fill="#B8922E">01</text>
      <text x="220" y="86" textAnchor="middle"
        className='mol-trade-step__desc'
        fontSize="12" 
        // fontWeight="500" 
        fill="#0A1628">Requirements</text>

      {/* ── Step 02 — right ── */}
      <rect x="298" y="194" width="140" height="52" rx="8"
        fill="#F8F4EC" stroke="#B8922E" strokeWidth="1" />
      <text x="368" y="214" textAnchor="middle"
        className='mol-trade-step__num'
        // fontFamily="Cormorant Garamond, Georgia, serif"
        // fontSize="11" 
        fill="#B8922E">02</text>
      <text x="368" y="234" textAnchor="middle"
        className='mol-trade-step__desc'
        fontSize="12" 
        // fontWeight="500" 
        fill="#0A1628">Tailored quote</text>

      {/* ── Step 03 — bottom ── */}
      <rect x="150" y="342" width="140" height="52" rx="8"
        fill="#F8F4EC" stroke="#B8922E" strokeWidth="1" />
      <text x="220" y="362" textAnchor="middle"
        className='mol-trade-step__num'
        // fontFamily="Cormorant Garamond, Georgia, serif"
        // fontSize="11" 
        fill="#B8922E">03</text>
      <text x="220" y="382" textAnchor="middle"
        className='mol-trade-step__desc'
        fontSize="12" 
        // fontWeight="500" 
        fill="#0A1628">Order &amp; payment</text>

      {/* ── Step 04 — left ── */}
      <rect x="2" y="194" width="140" height="52" rx="8"
        fill="#F8F4EC" stroke="#B8922E" strokeWidth="1" />
      <text x="72" y="214" textAnchor="middle"
        className='mol-trade-step__num'
        // fontFamily="Cormorant Garamond, Georgia, serif"
        // fontSize="11" 
        fill="#B8922E">04</text>
      <text x="72" y="234" textAnchor="middle"
        className='mol-trade-step__desc'
        fontSize="12" 
        // fontWeight="500" 
        fill="#0A1628">Dispatch &amp; delivery</text>
    </svg>
  );
}

/* ── Main Component ───────────────────────────────────────────────────────── */

export function TradeProcess() {
  return (
    <section id="trade-process" className="org-trade">
      <div className="org-trade__inner">

        <div className="org-trade__header">
          <SectionLabel>How We Work</SectionLabel>
          <SectionHeading>
            Simple, transparent<br /><em>trade process.</em>
          </SectionHeading>
          <BodyText className="mt-4 max-w-xl">
            Getting started with us is straightforward. Every order follows the same
            four stages, aligned to international commercial standards, so you spend
            less time on paperwork and more time running your business.
          </BodyText>
        </div>

        <div className="org-trade__grid">

          {/* Left — circular lifecycle SVG */}
          <TradeLifecycleDiagram />

          {/* Right — step detail list */}
          <div>
            <ol className="org-trade__steps">
              {STEPS.map((s) => (
                <TradeStep
                  key={s.number}
                  number={s.number}
                  title={s.title}
                  desc={s.desc}
                />
              ))}
            </ol>

            <div className="org-trade__glossary">
              {GLOSSARY.map(({ term, def }, i) => (
                <span key={term}>
                  <strong>{term}</strong> — {def}
                  {i < GLOSSARY.length - 1 && <span> &nbsp;·&nbsp; </span>}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}