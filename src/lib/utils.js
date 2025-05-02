import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge multiple class names with Tailwind CSS classes
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
