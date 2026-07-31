import { useState, useEffect, useCallback } from 'react';

// Commenting as these are no longer needed in new UI design
// import { GlobeArt }      from '../atoms/GlobeArt';
// import { Eyebrow, BodyText } from '../atoms/Typography';

import { ButtonPrimary, ButtonGhost } from '../atoms/Button';
import { StatBlock }     from '../molecules/StatBlock';

// Commenting as this is no longer needed in new design
// const STATS = [
//   { number: '3',  label: 'Markets Served'        },
//   { number: '∞',  label: 'Year Legacy Vision'    },
//   { number: '1',  label: 'Uncompromising Standard' },
// ];

/**
 * ORGANISM — Hero
 *
 * Layout (top to bottom):
 *   1. Full-width auto-playing carousel (5 landscape images)
 *   2. Eyebrow + heading + sub + CTA buttons
 *
 * Carousel:
 *   - Auto-advances every 5s, pauses on hover
 *   - Prev/Next arrow buttons
 *   - Gold dot indicators (active dot expands to pill)
 *   - Smooth CSS translate transition
 *
 * Images: place landscape photos at /public/hero-1.jpg … hero-5.jpg
 * Until real images are available, gold-accented placeholder slides render.
 */

const SLIDES = [
  { src: '/Hero/Hero Sec - 1.png', alt: 'Global trade operations' },
  { src: '/Hero/Hero Sec - 2.png', alt: 'Industrial supply chain' },
  { src: '/Hero/Hero Sec - 3.png', alt: 'Shipping and logistics' },
  { src: '/Hero/Hero Sec - 4.png', alt: 'Manufacturing excellence' },
  { src: '/Hero/Hero Sec - 5.png', alt: 'Market partnerships' },
];

const SLIDE_INTERVAL = 5000;

export function Hero() {
  return (
    <section id="hero" className="org-hero">
      {/* <div className="org-hero__bg" /> */}

      {/* Commented as not needed in new UI design */}
      {/* Decorative globe — desktop only */}
      {/* <GlobeArt className="org-hero__globe" size={420} /> */}

      {/* 1. Carousel */}
      <HeroCarousel />

      {/* 2. Content */}
      <div className="org-hero__content">

        <p className="org-hero__eyebrow">Chowdhury Global Ventures</p>

        {/* This is no loner needed for new Hero UI */}
        {/* <Eyebrow className="org-hero__eyebrow">
          Chowdhury Global Ventures
        </Eyebrow> */}

        {/* <h1 className="atom-display org-hero__title mb-4 animate-fade-up-2">
          Trade built on<br />
          <em>trust &amp; legacy.</em>
        </h1> */}

        {/* Title — org-hero__title overrides atom-display to cream on dark bg */}
        <h1 className="org-hero__title mb-4 animate-fade-up-2">
          Trade built on
          <em> trust &amp; legacy.</em>
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

/* ── Carousel sub-component ────────────────────────────────────────────────*/
 
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [loaded,  setLoaded]  = useState({});
 
  const count = SLIDES.length;
 
  const next = useCallback(() =>
    setCurrent(c => (c + 1) % count), [count]);
 
  const prev = useCallback(() =>
    setCurrent(c => (c - 1 + count) % count), [count]);
 
  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);
 
  return (
    <div
      className="org-hero__carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide track */}
      <div
        className="org-hero__slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div key={i} className="org-hero__slide">
            {loaded[i] !== false ? (
              <img
                src={slide.src}
                alt={slide.alt}
                onError={() => setLoaded(l => ({ ...l, [i]: false }))}
                onLoad={()  => setLoaded(l => ({ ...l, [i]: true  }))}
              />
            ) : null}
            {/* Placeholder shown when image hasn't loaded or errors */}
            {!loaded[i] && (
              <div className="org-hero__slide-placeholder">
                <span className="org-hero__slide-placeholder-label">
                  {slide.alt}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
 
      {/* Prev arrow */}
      <button
        className="org-hero__arrow org-hero__arrow--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>
 
      {/* Next arrow */}
      <button
        className="org-hero__arrow org-hero__arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>
 
      {/* Dot indicators */}
      <div className="org-hero__dots" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`org-hero__dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
