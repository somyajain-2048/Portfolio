/**
 * Utility function to conditionally combine class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format date or numbers
 */
export function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}
