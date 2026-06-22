import { Link } from "react-router";
import { cn } from "../lib/cn";

/**
 * ATOM — Button
 * Two variants: primary (gold fill) and ghost (text only).
 * Both accept an optional `as` prop to render as <a> or <button>.
 */

export function ButtonPrimary({ children, href, onClick, disabled, className = '' }) {
  if (href) {
    return (
      // <a href={href} className={`atom-btn-primary ${className}`}>
      //   {children}
      // </a>

      // Replaced with react router
      <Link to={href} className={cn('atom-btn-primary', className)}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // className={`atom-btn-primary ${className}`}
      className={cn('atom-btn-primary', className)}
    >
      {children}
    </button>
  );
}

export function ButtonGhost({ children, href, onClick, className = '' }) {
  if (href) {
    return (
      // <a href={href} className={`atom-btn-ghost ${className}`}>
      //   {children}
      // </a>

      // Replaced with react router
      <Link to={href} className={cn('atom-btn-ghost', className)}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} 
    // className={`atom-btn-ghost ${className}`} 
    className={cn('atom-btn-ghost', className)}>
      {children}
    </button>
  );
}
