export function Footer() {
  return (
    <footer className="org-footer">
      <p className="org-footer__brand">
        CGV <span>· Chowdhury Global Ventures</span>
      </p>
      <p className="org-footer__tagline">Trade · Trust · Legacy</p>
      <p className="org-footer__copy">
        © {new Date().getFullYear()} Chowdhury Global Ventures. All rights reserved.
      </p>
    </footer>
  );
}
