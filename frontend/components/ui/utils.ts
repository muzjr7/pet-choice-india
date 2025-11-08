// Utility helpers for UI components (placeholder)
export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ');
}
