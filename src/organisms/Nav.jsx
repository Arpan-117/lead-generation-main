import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { NavLinks } from '../molecules/NavLinks';

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`org-nav ${scrolled ? 'scrolled' : ''}`}>
        {/* <a href="#hero" className="mol-nav-logo" onClick={closeMenu}>
          CGV
        </a> */}
        
        {/* Replaced wih react router */}
        <Link to="/" className="mol-nav-logo" onClick={closeMenu}>
          CGV
        </Link>

        {/* Desktop links */}
        <ul className="org-nav__links">
          <NavLinks />
        </ul>

        {/* Desktop CTA */}
        {/* <a href="#contact" className="mol-nav-cta hidden md:inline-block">
          Begin Partnership
        </a> */}

        {/* Replaced with react router */}
        <Link to="/#contact" className="mol-nav-cta hidden md:inline-block" onClick={closeMenu}>
          Begin Partnership
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className={`mol-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`org-nav__mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="flex flex-col items-center gap-8 list-none">
          <NavLinks onLinkClick={closeMenu} />
        </ul>
        {/* <a href="#contact" className="mol-nav-cta mt-4" onClick={closeMenu}>
          Begin Partnership
        </a> */}

        {/* Replaced wih react router */}
        <Link to="/#contact" className="mol-nav-cta mt-4" onClick={closeMenu}>
          Begin Partnership
        </Link>
      </div>
    </>
  );
}
