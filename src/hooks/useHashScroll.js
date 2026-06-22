import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * useHashScroll
 * Listens for URL hash changes via React Router and scrolls
 * to the matching element — restoring the behaviour of plain anchor tags.
 *
 * Usage: call once inside a component that is always mounted,
 * e.g. HomeTemplate or a layout wrapper.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // No hash — scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Small timeout lets the page render before scrolling
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, hash]);
}