import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * ORGANISM — Footer
 *
 * Layout:
 *   Row 1 — 4 columns: Brand | Quick Links | Products | Contact
 *   Row 2 — Copyright bar + sector tags
 *
 * Adapted from the Industrial Supplies project footer.
 * No i18n — CGV is single-language.
 * All styles via globals.css org-footer__* and mol-footer-* classes.
 */

const QUICK_LINKS = [
  { label: 'About',    to: '/#about'    },
  { label: 'Markets',  to: '/#markets'  },
  { label: 'Products', to: '#products' },
  { label: 'Why CGV',  to: '/#why'      },
  { label: 'Sourcing', to: '/#sourcing' },
  { label: 'Contact',  to: '/#contact'  },
];

const PRODUCT_LINKS = [
  { label: 'Batteries',        to: '/products/batteries'   },
  { label: 'Lubricants',       to: '/products/lubricants'  },
  { label: 'UPS & Inverters',  to: '/products/ups-inverters' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com',
    icon:  (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-[15px] h-[15px]">
      {/* <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
      <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href:  'https://wa.me/910000000000',
    icon:  (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'IndiaMART',
    href:  'https://indiamart.com',
    icon:  <span className="text-[11px] font-bold leading-none">iM</span>,
  },
  {
    label: 'Alibaba',
    href:  'https://alibaba.com',
    icon:  <span className="text-[11px] font-bold leading-none">Ab</span>,
  },
];

// ── Sub-components ──────────────────────────────────────────────────────────

function FooterHeading({ children }) {
  return <h3 className="mol-footer-heading">{children}</h3>;
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="mol-footer-link">{children}</Link>
    </li>
  );
}

function ContactRow({ icon, children }) {
  return (
    <div className="mol-footer-contact-row">
      <span className="mol-footer-contact-icon">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="org-footer" aria-label="Site footer">
      <div className="org-footer__inner">

        {/* ── Main grid ── */}
        <div className="org-footer__grid">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="org-footer__brand-name">
              {/* CGV <span>· Chowdhury Global Ventures</span> */}
              <img
                src="/Logo.PNG"
                alt="Chowdhury Global Ventures"
                className="org-footer__logo"
              />
            </Link>
            <p className="org-footer__tagline">
              {/* An Indian-founded trading enterprise connecting markets across
              South Asia, the Middle East, and Africa. */}
              A trusted global trading company specializing in international sourcing, procurement, import-export, wholesale supply, and end-to-end supply chain solutions, connecting businesses with quality products and reliable suppliers worldwide.
            </p>
            <div className="org-footer__socials" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="org-footer__social-btn"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mol-footer-links" role="list">
              {QUICK_LINKS.map(({ label, to }) => (
                <FooterLink key={to} to={to}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <FooterHeading>Products</FooterHeading>
            <ul className="mol-footer-links" role="list">
              {PRODUCT_LINKS.map(({ label, to }) => (
                <FooterLink key={to} to={to}>{label}</FooterLink>
              ))}
              <FooterLink to="/products">View All →</FooterLink>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <div className="flex flex-col gap-3">
              <ContactRow icon={<MapPin size={14} strokeWidth={1.75} />}>
                India
              </ContactRow>
              <ContactRow icon={<Phone size={14} strokeWidth={1.75} />}>
                +91 00000 00000
              </ContactRow>
              <ContactRow icon={<Mail size={14} strokeWidth={1.75} />}>
                contact@chowdhuryglovalventures.com
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                }
              >
                WhatsApp Available
              </ContactRow>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="org-footer__bottom">
          <p className="org-footer__copyright">
            © {new Date().getFullYear()} Chowdhury Global Ventures. All rights reserved.
          </p>
          <p className="org-footer__sectors">
            Trade · Trust · Legacy
          </p>
        </div>

      </div>
    </footer>
  );
}