import { Nav }    from '../organisms/Nav';
import { Footer } from '../organisms/Footer';
import { useHashScroll } from '../hooks/useHashScroll';

/**
 * TEMPLATE — HomeTemplate
 * Wraps any page content with the shared Nav + Footer shell.
 * All future pages (About page, Markets page, etc.) can reuse this template.
 */
export function HomeTemplate({ children }) {
  useHashScroll();
  
  return (
    <div className="tmpl-page">
      <Nav />
      <main className="tmpl-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
