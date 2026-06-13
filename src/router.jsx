import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
);

function PageLoader() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <span className="font-sans text-[10px] tracking-[4px] text-muted uppercase">
        Loading…
      </span>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <HomePage />
      </Suspense>
    ),
  },
  // Future pages — add here following the same pattern:
  // {
  //   path: '/markets',
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <MarketsPage />
  //     </Suspense>
  //   ),
  // },
]);