import { NavLink, useLocation } from "react-router";

/**
 * MOLECULE — NavLinks
 * Renders a list of nav anchor links.
 * Used in both desktop nav and mobile menu.
 */

const LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#markets', label: 'Markets' },
  { href: '/#industries', label: 'Industries' },   // Build and map
  { href: '/#products', label: 'Products' },     // Build and map
  { href: '/#sourcing', label: 'Sourcing Services' },
  { href: '/#why', label: 'Why CGV' },
  { href: '/#contact', label: 'Contact' },
];

export function NavLinks({ onLinkClick }) {
  const { hash } = useLocation();

  return (
    <>
      {LINKS.map(({ href, label }) => {
        const linkHash = href.split('/')[1]; // e.g. "#about"
        const isActive = hash === linkHash;
        console.log(`${linkHash} - ${isActive} - ${hash}`);

        return (
          <li key={href}>
            {/* <a href={href} className="mol-nav-link" onClick={onLinkClick}>
            {label}
          </a> */}

            {/* Replaced with react router */}
            <NavLink
              to={href}
              end
              // className={({ isActive }) =>
              //   isActive ? 'mol-nav-link mol-nav-link--active' : 'mol-nav-link'
              // }
              className={() => isActive ? 'mol-nav-link mol-nav-link--active' : 'mol-nav-link'}
              onClick={onLinkClick}
            >
              {label}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
