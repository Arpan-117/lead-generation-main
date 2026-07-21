import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone } from 'lucide-react';
import { NavLinks } from '../molecules/NavLinks';

// For simple Navbar
// const CONTACT_INFO = [
//   {
//     icon: <Phone size={16} strokeWidth={4} />,
//     label: '+91 00000 00000',
//     href:  'tel:+910000000000',
//   },
//   {
//     icon: <Mail size={16} strokeWidth={4} />,
//     label: 'contact@chowdhuryglovalventures.com',
//     href:  'mailto:contact@chowdhuryglovalventures.com',
//   },
// ];

// For Capsule Navbar
const CONTACT = [
  {
    icon: <Phone size={16} strokeWidth={4} />,
    label: '+91 00000 00000',
    href:  'tel:+910000000000',
  },
  {
    icon: <Mail size={16} strokeWidth={4} />,
    label: 'contact@chowdhuryglovalventures.com',
    href:  'mailto:contact@chowdhuryglovalventures.com',
  },
];

// Scroll threshold — trigger just before leaving the hero section
const SCROLL_THRESHOLD = typeof window !== 'undefined'
  ? window.innerHeight - 80
  : 600;

// Simple Navbar with Top Banner - commented
// export function Nav() {
//   const [scrolled, setScrolled]   = useState(false);
//   const [menuOpen, setMenuOpen]   = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [menuOpen]);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>

//       {/* Top Banner */}
//       <div className="org-topbar">
//         {CONTACT_INFO.map(({ icon, label, href }) => (
//           <a key={href} href={href} className="org-topbar__item">
//             <span className="org-topbar__icon">{icon}</span>
//             {label}
//           </a>
//         ))}
//       </div>

//       {/* Main Navbar */}
//       <nav className={`org-nav ${scrolled ? 'scrolled' : ''}`}>
//         {/* <a href="#hero" className="mol-nav-logo" onClick={closeMenu}>
//           CGV
//         </a> */}
        
//         {/* Replaced wih react router */}
//         <Link to="/" className="mol-nav-logo" onClick={closeMenu}>
//           <img
//             src="/Logo.PNG"
//             alt="Chowdhury Global Ventures"
//             className="mol-nav-logo__img"
//           />
//         </Link>

//         {/* Desktop links */}
//         <ul className="org-nav__links">
//           <NavLinks />
//         </ul>

//         {/* Desktop CTA */}
//         {/* <a href="#contact" className="mol-nav-cta hidden md:inline-block">
//           Begin Partnership
//         </a> */}

//         {/* Replaced with react router */}
//         <Link to="/#contact" className="mol-nav-cta hidden md:inline-block" onClick={closeMenu}>
//           Begin Partnership
//         </Link>

//         {/* Hamburger (mobile only) */}
//         <button
//           className={`mol-hamburger ${menuOpen ? 'open' : ''}`}
//           onClick={() => setMenuOpen(o => !o)}
//           aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       </nav>

//       {/* Mobile slide-down menu */}
//       <div className={`org-nav__mobile-menu ${menuOpen ? 'open' : ''}`}>
//         <ul className="flex flex-col items-center gap-8 list-none">
//           <NavLinks onLinkClick={closeMenu} />
//         </ul>
//         {/* <a href="#contact" className="mol-nav-cta mt-4" onClick={closeMenu}>
//           Begin Partnership
//         </a> */}

//         {/* Replaced wih react router */}
//         <Link to="/#contact" className="mol-nav-cta mt-4" onClick={closeMenu}>
//           Begin Partnership
//         </Link>
//       </div>
//     </>
//   );
// }

// New Capsule Navbar
/**
 * ORGANISM — Nav
 *
 * Unified floating capsule navbar:
 *   ┌─────────────────────────────────────────┐  ← rounded pill
 *   │ [dark navy]  phone · email              │  ← topbar strip
 *   ├─────────────────────────────────────────┤
 *   │ [warm cream] Logo   links   Begin Btn   │  ← nav strip
 *   └─────────────────────────────────────────┘
 *
 * Floats over the dark navy hero via org-nav-outer background matching.
 * Mobile: hamburger replaces links, slide-down menu opens below capsule.
 * 
 * Two states driven by scroll position:
 *
 * AT TOP (hero visible):
 *   Floating capsule pill — padded outer, rounded corners,
 *   dark navy topbar strip (contact info) + cream nav strip (logo/links/CTA).
 *
 * SCROLLED (past hero):
 *   Full-width sticky bar — no padding, square corners, topbar hidden,
 *   cream background flush to viewport edges. Seamless CSS transition.
 *
 * Mobile (all sizes below md):
 *   Hamburger menu always. No capsule behaviour.
 *   Slide-down overlay on open.
 *
 * The .scrolled class on org-nav-outer drives all visual changes via CSS.
 */
export function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    // Run once on mount in case page is loaded mid-scroll
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Fixed outer wrapper — bg matches hero so capsule truly floats */}
      {/* <div className="org-nav-outer"> */}

      {/* Fixed outer — .scrolled removes padding + makes full-width */}
      <div className={`org-nav-outer ${scrolled ? 'scrolled' : ''}`}>
        <div className="org-capsule">

          {/* Top strip — dark navy, contact info */}
          {/* Top strip — collapses to 0 height on scroll */}
          <div className="org-capsule__topbar">
            {CONTACT.map(({ icon, label, href }) => (
              <a key={href} href={href} className="org-capsule__contact">
                <span className="org-capsule__contact-icon">{icon}</span>
                {/* {label} */}
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>

          {/* Bottom strip — warm cream, logo + links + CTA */}
          {/* Nav strip — always visible */}
          <div className="org-capsule__nav">
            <Link to="/" className="org-capsule__logo" onClick={closeMenu}>
              <img
                src="/Logo.png"
                alt="Chowdhury Global Ventures"
                className="org-capsule__logo-img"
              />
            </Link>

            {/* Desktop links */}
            <ul className="org-capsule__links">
              <NavLinks />
            </ul>

            {/* Desktop CTA */}
            <Link to="/#contact" className="org-capsule__cta" onClick={closeMenu}>
              Begin Partnership
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className={`mol-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div className={`org-nav__mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>
          <img
            src="/Logo.png"
            alt="Chowdhury Global Ventures"
            className="mol-nav-logo__img--mobile"
          />
        </Link>
        <ul className="flex flex-col items-center gap-8 list-none">
          <NavLinks onLinkClick={closeMenu} />
        </ul>
        <Link to="/#contact" className="org-capsule__cta mt-4" onClick={closeMenu}>
          Begin Partnership
        </Link>
      </div>
    </>
  );
}