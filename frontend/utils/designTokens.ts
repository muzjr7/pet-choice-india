// Default token map; may be overwritten by scripts/figma/fetch-tokens.mjs
export const designTokens = {
  'brand-terracotta': '#F07B52',
  'brand-teal': '#2BB6A3',
  'brand-pastel-yellow': '#F9E5A1',
  'brand-charcoal': '#333333',
  'brand-white': '#FFFFFF',
} as const;

export type TokenName = keyof typeof designTokens;
