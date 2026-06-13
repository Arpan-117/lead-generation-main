import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind classes safely.
 * - clsx handles conditional classes and arrays
 * - twMerge resolves Tailwind conflicts (e.g. px-4 + px-6 → px-6)
 *
 * Usage:
 *   cn('px-4 py-2', isActive && 'bg-gold', className)
 */
export const cn = (...inputs) => twMerge(clsx(inputs))