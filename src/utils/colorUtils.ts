/**
 * Utility to generate harmonious highlight, shadow, and deep tones from any hex color.
 * Used for dynamic 3D rendering, bevels, neon glows, and gradient SVG recoloring.
 */

export interface ColorShades {
  main: string;
  light: string;
  highlight: string;
  dark: string;
  deep: string;
  glow: string;
  glowSoft: string;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map((c) => c + c).join('');
  }
  const num = parseInt(cleanHex, 16);
  if (isNaN(num)) {
    return { r: 234, g: 179, b: 8 }; // fallback gold
  }
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(c)));
    return clamped.toString(16).padStart(2, '0');
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function generateColorShades(baseHex: string): ColorShades {
  const { r, g, b } = hexToRgb(baseHex);

  // If very close to white, provide specialized light/shadow tones
  const isNearWhite = r > 240 && g > 240 && b > 240;
  // If very close to black, provide specialized light/shadow tones
  const isNearBlack = r < 25 && g < 25 && b < 25;

  let light: string;
  let highlight: string;
  let dark: string;
  let deep: string;

  if (isNearWhite) {
    highlight = '#FFFFFF';
    light = '#F3F4F6';
    dark = '#D1D5DB';
    deep = '#9CA3AF';
  } else if (isNearBlack) {
    highlight = '#4B5563';
    light = '#374151';
    dark = '#111827';
    deep = '#030712';
  } else {
    // 55% tint towards pure white for highlight
    highlight = rgbToHex(
      r + (255 - r) * 0.65,
      g + (255 - g) * 0.65,
      b + (255 - b) * 0.65
    );
    // 35% tint towards pure white for light
    light = rgbToHex(
      r + (255 - r) * 0.35,
      g + (255 - g) * 0.35,
      b + (255 - b) * 0.35
    );
    // 35% shade towards black for depth
    dark = rgbToHex(r * 0.65, g * 0.65, b * 0.65);
    // 60% shade towards black for deep shadow
    deep = rgbToHex(r * 0.4, g * 0.4, b * 0.4);
  }

  const glow = `rgba(${r}, ${g}, ${b}, 0.55)`;
  const glowSoft = `rgba(${r}, ${g}, ${b}, 0.18)`;

  return {
    main: baseHex,
    light,
    highlight,
    dark,
    deep,
    glow,
    glowSoft,
  };
}

/**
 * Replaces dynamic color tokens inside an SVG string with calculated shade values.
 * Tokens supported:
 * - var(--star-main) or {{STAR_MAIN}}
 * - var(--star-light) or {{STAR_LIGHT}}
 * - var(--star-highlight) or {{STAR_HIGHLIGHT}}
 * - var(--star-dark) or {{STAR_DARK}}
 * - var(--star-deep) or {{STAR_DEEP}}
 * - var(--star-glow) or {{STAR_GLOW}}
 * - currentColor
 */
export function injectColorShades(svgContent: string, activeColor: string, uid = 'star'): string {
  const shades = generateColorShades(activeColor);

  return svgContent
    .replace(/currentColor/g, shades.main)
    .replace(/\{\{STAR_MAIN\}\}/g, shades.main)
    .replace(/\{\{STAR_LIGHT\}\}/g, shades.light)
    .replace(/\{\{STAR_HIGHLIGHT\}\}/g, shades.highlight)
    .replace(/\{\{STAR_DARK\}\}/g, shades.dark)
    .replace(/\{\{STAR_DEEP\}\}/g, shades.deep)
    .replace(/\{\{STAR_GLOW\}\}/g, shades.glow)
    .replace(/\{\{STAR_GLOW_SOFT\}\}/g, shades.glowSoft)
    // Replace gradient IDs to avoid collisions
    .replace(/id="([a-zA-Z0-9_-]+)"/g, `id="$1_${uid}"`)
    .replace(/url\(#([a-zA-Z0-9_-]+)\)/g, `url(#$1_${uid})`);
}
