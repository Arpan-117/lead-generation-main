import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { cn } from '../lib/cn';

/**
 * MOLECULE — BackLink
 * Text link with a left arrow. Defaults to "Back to Home" → "/".
 */
export function BackLink({ to = '/', children = 'Back to Home', className = '' }) {
  return (
    <Link to={to} className={cn('mol-back-link', className)}>
      <ArrowLeft size={16} aria-hidden="true" />
      {children}
    </Link>
  );
}