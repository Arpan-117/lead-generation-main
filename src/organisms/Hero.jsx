import { GlobeArt }      from '../atoms/GlobeArt';
import { Eyebrow, BodyText } from '../atoms/Typography';
import { ButtonPrimary, ButtonGhost } from '../atoms/Button';
import { StatBlock }     from '../molecules/StatBlock';

// const STATS = [
//   { number: '3',  label: 'Markets Served'        },
//   { number: '∞',  label: 'Year Legacy Vision'    },
//   { number: '1',  label: 'Uncompromising Standard' },
// ];

export function Hero() {
  return (
    <section id="hero" className="org-hero">
      <div className="org-hero__bg" />

      {/* Decorative globe — desktop only */}
      <GlobeArt className="org-hero__globe" size={420} />

      <div className="org-hero__content">
        <Eyebrow className="org-hero__eyebrow">
          Chowdhury Global Ventures
        </Eyebrow>

        {/* <h1 className="atom-display org-hero__title mb-4 animate-fade-up-2">
          Trade built on<br />
          <em>trust &amp; legacy.</em>
        </h1> */}

        {/* Title — org-hero__title overrides atom-display to cream on dark bg */}
        <h1 className="org-hero__title mb-4 animate-fade-up-2">
          Trade built on<br />
          <em>trust &amp; legacy.</em>
        </h1>

        {/* <BodyText className="org-hero__sub"> */}
          {/* An Indian-founded trading enterprise connecting markets across South Asia,
          the Middle East, and Africa — with integrity at every step. */}
          {/* A trusted global trading company specializing in international sourcing, procurement, import-export, wholesale supply, and end-to-end supply chain solutions, connecting businesses with quality products and reliable suppliers worldwide.
        </BodyText> */}

        {/* Sub — org-hero__sub overrides atom-body colour for dark bg */}
        <p className="org-hero__sub">
          A trusted global trading company specializing in international sourcing, procurement, import-export, wholesale supply, and end-to-end supply chain solutions, connecting businesses with quality products and reliable suppliers worldwide.
        </p>

        <div className="org-hero__actions">
          <ButtonPrimary href="#contact">Begin a Partnership</ButtonPrimary>
          <ButtonGhost href="#about">Our Story →</ButtonGhost>
        </div>
      </div>

      {/* Stats bar */}
      {/* <div className="org-hero__stats">
        {STATS.map((s) => (
          <StatBlock key={s.label} number={s.number} label={s.label} />
        ))}
      </div> */}
    </section>
  );
}
