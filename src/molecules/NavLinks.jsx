/**
 * MOLECULE — NavLinks
 * Renders a list of nav anchor links.
 * Used in both desktop nav and mobile menu.
 */

const LINKS = [
  { href: '#about',   label: 'About'   },
  { href: '#markets', label: 'Markets' },
  { href: '#industries', label: 'Industries' },   // Build and map
  { href: '#products', label: 'Products' },     // Build and map
  { href: '#sourcing', label: 'Sourcing Services' },
  { href: '#why',     label: 'Why CGV' },
  { href: '#contact', label: 'Contact' },
];

export function NavLinks({ onLinkClick }) {
  return (
    <>
      {LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className="mol-nav-link" onClick={onLinkClick}>
            {label}
          </a>
        </li>
      ))}
    </>
  );
}
