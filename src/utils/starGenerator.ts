/**
 * Procedural Star Geometry Generator Studio Engine
 * Generates exact mathematical SVG vector paths and procedural graphics:
 * 1. Geometric Star Polygons & Flared Rays (3 to 48 points)
 * 2. 3D Faceted Bevel Stars with Directional Lighting & Materials
 * 3. Optical Anamorphic Lens Flares & Sparkle Dust Clouds
 * 4. Customizable 5-Star Rating Bars with Fractional Fill
 */

export interface StarGenOptions {
  points: number; // 3 to 48
  innerRadius: number; // 0.05 to 0.95 (ratio of outer radius)
  size?: number; // default 100
  curved?: boolean; // curved edges or sharp
  curveFactor?: number; // curvature intensity
  rotation?: number; // degrees
}

export interface FacetedStar3DOptions {
  points: number;
  innerRadius: number;
  size?: number;
  lightAngle?: number; // 0 to 360 degrees
  baseColor?: string; // hex
  material?: 'gold' | 'chrome' | 'roseGold' | 'ruby' | 'emerald' | 'obsidian';
  glint?: boolean;
}

export interface LensFlareOptions {
  points: 2 | 4 | 6 | 8;
  size?: number;
  flareColor?: string;
  coreGlow?: number; // 0.1 to 1.0
  streakLength?: number; // 0.5 to 2.0
  dustCount?: number; // 0 to 40
  halo?: boolean;
}

export interface RatingBarOptions {
  rating: number; // 0.5 to 5.0
  maxStars?: number; // default 5
  activeColor?: string;
  inactiveColor?: string;
  spacing?: number; // gap between stars
  size?: number;
}

// ============================================================================
// 1. GEOMETRIC & CURVED STAR POLYGONS
// ============================================================================

export function generateStarPolygonPoints(options: StarGenOptions): string {
  const { points, innerRadius, size = 100, rotation = 0 } = options;
  const center = size / 2;
  const rOuter = (size / 2) * 0.92;
  const rInner = rOuter * Math.max(0.05, Math.min(0.95, innerRadius));
  const totalSteps = points * 2;
  const angleStep = (Math.PI * 2) / totalSteps;
  const startAngle = -Math.PI / 2 + (rotation * Math.PI) / 180;

  const coords: string[] = [];

  for (let i = 0; i < totalSteps; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const angle = startAngle + i * angleStep;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    coords.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return coords.join(' ');
}

export function generateCurvedStarPath(options: StarGenOptions): string {
  const { points, innerRadius, size = 100, curveFactor = 0.5, rotation = 0 } = options;
  const center = size / 2;
  const rOuter = (size / 2) * 0.92;
  const rInner = rOuter * Math.max(0.05, Math.min(0.95, innerRadius));
  const totalSteps = points * 2;
  const angleStep = (Math.PI * 2) / totalSteps;
  const startAngle = -Math.PI / 2 + (rotation * Math.PI) / 180;

  const pointsList: { x: number; y: number; isOuter: boolean }[] = [];

  for (let i = 0; i < totalSteps; i++) {
    const isOuter = i % 2 === 0;
    const r = isOuter ? rOuter : rInner;
    const angle = startAngle + i * angleStep;
    pointsList.push({
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      isOuter,
    });
  }

  let d = `M ${pointsList[0].x.toFixed(2)} ${pointsList[0].y.toFixed(2)}`;

  for (let i = 0; i < totalSteps; i++) {
    const nextIdx = (i + 1) % totalSteps;
    const curr = pointsList[i];
    const next = pointsList[nextIdx];

    // Control point pulled toward center or pushed out based on curvature
    const midAngle = startAngle + (i + 0.5) * angleStep;
    const midR = (rOuter + rInner) / 2 * (1 - curveFactor * 0.4);
    const cx = center + midR * Math.cos(midAngle);
    const cy = center + midR * Math.sin(midAngle);

    d += ` Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${next.x.toFixed(2)} ${next.y.toFixed(2)}`;
  }

  d += ' Z';
  return d;
}

// ============================================================================
// 2. MATHEMATICAL 3D FACETED STAR GENERATOR
// ============================================================================

const MATERIAL_PALETTES: Record<string, { highlight: string; base: string; mid: string; shadow: string; deepShadow: string }> = {
  gold: {
    highlight: '#FFF9D2',
    base: '#F59E0B',
    mid: '#D97706',
    shadow: '#B45309',
    deepShadow: '#78350F',
  },
  chrome: {
    highlight: '#FFFFFF',
    base: '#E2E8F0',
    mid: '#94A3B8',
    shadow: '#64748B',
    deepShadow: '#334155',
  },
  roseGold: {
    highlight: '#FFE4E6',
    base: '#FB7185',
    mid: '#F43F5E',
    shadow: '#BE123C',
    deepShadow: '#881337',
  },
  ruby: {
    highlight: '#FECDD3',
    base: '#E11D48',
    mid: '#BE123C',
    shadow: '#9F1239',
    deepShadow: '#4C0519',
  },
  emerald: {
    highlight: '#D1FAE5',
    base: '#10B981',
    mid: '#059669',
    shadow: '#047857',
    deepShadow: '#064E3B',
  },
  obsidian: {
    highlight: '#64748B',
    base: '#334155',
    mid: '#1E293B',
    shadow: '#0F172A',
    deepShadow: '#020617',
  },
};

export function generateFacetedStar3D(options: FacetedStar3DOptions): string {
  const {
    points,
    innerRadius,
    size = 100,
    lightAngle = 315, // Top-left default
    material = 'gold',
    glint = true,
  } = options;

  const center = size / 2;
  const rOuter = (size / 2) * 0.92;
  const rInner = rOuter * Math.max(0.1, Math.min(0.9, innerRadius));
  const totalSteps = points * 2;
  const angleStep = (Math.PI * 2) / totalSteps;
  const startAngle = -Math.PI / 2;
  const lightRad = (lightAngle * Math.PI) / 180;
  const lightDir = { x: Math.cos(lightRad), y: Math.sin(lightRad) };

  const palette = MATERIAL_PALETTES[material] || MATERIAL_PALETTES.gold;

  // Compute vertices
  const vertices: { x: number; y: number; isOuter: boolean }[] = [];
  for (let i = 0; i < totalSteps; i++) {
    const isOuter = i % 2 === 0;
    const r = isOuter ? rOuter : rInner;
    const angle = startAngle + i * angleStep;
    vertices.push({
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      isOuter,
    });
  }

  // Each star point has 2 facets:
  // Left facet: Center -> Point Vertex -> Preceding Valley Vertex
  // Right facet: Center -> Point Vertex -> Succeeding Valley Vertex
  const facets: string[] = [];

  for (let i = 0; i < totalSteps; i += 2) {
    const peak = vertices[i];
    const prevValley = vertices[(i - 1 + totalSteps) % totalSteps];
    const nextValley = vertices[(i + 1) % totalSteps];

    // Left facet normal approximation
    const leftMidAngle = startAngle + (i - 0.5) * angleStep;
    const leftDot = Math.cos(leftMidAngle) * lightDir.x + Math.sin(leftMidAngle) * lightDir.y;
    // Right facet normal approximation
    const rightMidAngle = startAngle + (i + 0.5) * angleStep;
    const rightDot = Math.cos(rightMidAngle) * lightDir.x + Math.sin(rightMidAngle) * lightDir.y;

    // Pick colors based on light dot product (-1 to 1)
    const getColor = (dot: number) => {
      if (dot > 0.45) return palette.highlight;
      if (dot > 0.1) return palette.base;
      if (dot > -0.2) return palette.mid;
      if (dot > -0.6) return palette.shadow;
      return palette.deepShadow;
    };

    const leftColor = getColor(leftDot);
    const rightColor = getColor(rightDot);

    // Left triangle: Center (cx, cy), Peak (px, py), Valley (vx, vy)
    facets.push(
      `<polygon points="${center.toFixed(2)},${center.toFixed(2)} ${peak.x.toFixed(2)},${peak.y.toFixed(2)} ${prevValley.x.toFixed(2)},${prevValley.y.toFixed(2)}" fill="${leftColor}" stroke="${leftColor}" stroke-width="0.3" />`
    );

    // Right triangle: Center (cx, cy), Peak (px, py), Next Valley (nvx, nvy)
    facets.push(
      `<polygon points="${center.toFixed(2)},${center.toFixed(2)} ${peak.x.toFixed(2)},${peak.y.toFixed(2)} ${nextValley.x.toFixed(2)},${nextValley.y.toFixed(2)}" fill="${rightColor}" stroke="${rightColor}" stroke-width="0.3" />`
    );
  }

  // Specular Glint
  let glintMarkup = '';
  if (glint) {
    glintMarkup = `
      <!-- 3D Specular Glint -->
      <circle cx="${(center - rOuter * 0.35).toFixed(1)}" cy="${(center - rOuter * 0.35).toFixed(1)}" r="${(size * 0.05).toFixed(1)}" fill="#ffffff" opacity="0.85" filter="url(#glintBlur)" />
      <defs>
        <filter id="glintBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>
    `;
  }

  return `
    <g class="faceted-3d-star">
      ${facets.join('\n')}
      ${glintMarkup}
    </g>
  `;
}

// ============================================================================
// 3. OPTICAL ANAMORPHIC LENS FLARE & SPARKLE DUST
// ============================================================================

export function generateLensFlareSvg(options: LensFlareOptions): string {
  const {
    points = 4,
    size = 120,
    flareColor = '#38BDF8',
    coreGlow = 0.85,
    streakLength = 1.2,
    dustCount = 16,
    halo = true,
  } = options;

  const center = size / 2;
  const radius = (size / 2) * 0.95;

  // Horizontal anamorphic streak
  const streakWidth = radius * streakLength;
  const streakHeight = Math.max(3, size * 0.025);

  // Secondary diffraction spikes based on points count
  const rays: string[] = [];
  const totalRays = points;
  const angleStep = (Math.PI * 2) / totalRays;

  for (let i = 0; i < totalRays; i++) {
    const angle = (i * angleStep * 180) / Math.PI;
    const rayLength = radius * (i % 2 === 0 ? 0.95 : 0.6);
    rays.push(`
      <line x1="${center}" y1="${center - rayLength}" x2="${center}" y2="${center + rayLength}" 
            stroke="${flareColor}" stroke-width="1.8" opacity="0.75" 
            transform="rotate(${angle} ${center} ${center})" stroke-linecap="round" />
      <polygon points="${center - 1.5},${center - rayLength} ${center + 1.5},${center - rayLength} ${center + 4},${center} ${center + 1.5},${center + rayLength} ${center - 1.5},${center + rayLength} ${center - 4},${center}" 
               fill="${flareColor}" opacity="0.3" 
               transform="rotate(${angle} ${center} ${center})" />
    `);
  }

  // Dust particles with fixed pseudo-random scatter
  const dustParticles: string[] = [];
  if (dustCount > 0) {
    const seeds = [
      { x: 0.2, y: 0.25, r: 1.5, o: 0.8 },
      { x: 0.8, y: 0.3, r: 2.2, o: 0.7 },
      { x: 0.3, y: 0.75, r: 1.8, o: 0.6 },
      { x: 0.75, y: 0.8, r: 1.2, o: 0.85 },
      { x: 0.15, y: 0.55, r: 2.0, o: 0.5 },
      { x: 0.85, y: 0.5, r: 1.6, o: 0.9 },
      { x: 0.45, y: 0.15, r: 2.5, o: 0.75 },
      { x: 0.55, y: 0.85, r: 1.4, o: 0.65 },
      { x: 0.28, y: 0.38, r: 1.2, o: 0.5 },
      { x: 0.72, y: 0.62, r: 1.8, o: 0.7 },
      { x: 0.62, y: 0.22, r: 2.0, o: 0.8 },
      { x: 0.38, y: 0.78, r: 1.5, o: 0.6 },
      { x: 0.5, y: 0.28, r: 1.0, o: 0.9 },
      { x: 0.25, y: 0.68, r: 1.6, o: 0.7 },
      { x: 0.82, y: 0.72, r: 1.3, o: 0.55 },
      { x: 0.18, y: 0.82, r: 2.1, o: 0.65 },
      { x: 0.68, y: 0.38, r: 1.4, o: 0.75 },
      { x: 0.32, y: 0.18, r: 1.7, o: 0.8 },
      { x: 0.78, y: 0.18, r: 1.1, o: 0.6 },
      { x: 0.88, y: 0.35, r: 1.9, o: 0.7 },
    ];

    for (let i = 0; i < Math.min(dustCount, seeds.length); i++) {
      const p = seeds[i];
      const px = p.x * size;
      const py = p.y * size;
      dustParticles.push(`
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${p.r}" fill="${flareColor}" opacity="${p.o}" />
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${p.r * 0.5}" fill="#ffffff" opacity="0.9" />
      `);
    }
  }

  return `
    <defs>
      <radialGradient id="flareCoreGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="25%" stop-color="${flareColor}" stop-opacity="${coreGlow}" />
        <stop offset="70%" stop-color="${flareColor}" stop-opacity="${coreGlow * 0.3}" />
        <stop offset="100%" stop-color="${flareColor}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="streakGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${flareColor}" stop-opacity="0" />
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.95" />
        <stop offset="100%" stop-color="${flareColor}" stop-opacity="0" />
      </linearGradient>
    </defs>
    <!-- Halo Ring -->
    ${
      halo
        ? `<circle cx="${center}" cy="${center}" r="${(radius * 0.55).toFixed(1)}" fill="none" stroke="${flareColor}" stroke-width="1.2" opacity="0.35" stroke-dasharray="4 3" />`
        : ''
    }
    <!-- Diffraction Spikes -->
    ${rays.join('\n')}
    <!-- Anamorphic Horizontal Laser Streak -->
    <ellipse cx="${center}" cy="${center}" rx="${streakWidth.toFixed(1)}" ry="${streakHeight.toFixed(1)}" fill="url(#streakGrad)" />
    <!-- Secondary Dust Particles -->
    ${dustParticles.join('\n')}
    <!-- Central Core Flare -->
    <circle cx="${center}" cy="${center}" r="${(radius * 0.42).toFixed(1)}" fill="url(#flareCoreGlow)" />
    <circle cx="${center}" cy="${center}" r="${(radius * 0.12).toFixed(1)}" fill="#ffffff" />
  `;
}

// ============================================================================
// 4. CUSTOMIZABLE STAR RATING BAR BUILDER
// ============================================================================

export function generateRatingBarSvg(options: RatingBarOptions): { svgContent: string; viewBox: string; width: number; height: number } {
  const {
    rating = 4.5,
    maxStars = 5,
    activeColor = '#F59E0B',
    inactiveColor = '#E2E8F0',
    spacing = 6,
    size = 40,
  } = options;

  const totalWidth = maxStars * size + (maxStars - 1) * spacing;
  const totalHeight = size;
  const viewBox = `0 0 ${totalWidth} ${totalHeight}`;

  const starSinglePoints = '20,3 25,14 37,15 28,24 31,36 20,30 9,36 12,24 3,15 15,14'; // scaled for 40x40

  const starsMarkup: string[] = [];

  for (let i = 0; i < maxStars; i++) {
    const starLeft = i * (size + spacing);
    const starRatingValue = rating - i;

    if (starRatingValue >= 1) {
      // Fully Solid Star
      starsMarkup.push(`
        <g transform="translate(${starLeft}, 0)">
          <polygon fill="${activeColor}" points="${starSinglePoints}" />
        </g>
      `);
    } else if (starRatingValue > 0) {
      // Partial / Half Star
      const fillPercentage = Math.round(starRatingValue * 100);
      const gradId = `ratingPartialGrad_${i}`;
      starsMarkup.push(`
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="${fillPercentage}%" stop-color="${activeColor}" />
            <stop offset="${fillPercentage}%" stop-color="${inactiveColor}" />
          </linearGradient>
        </defs>
        <g transform="translate(${starLeft}, 0)">
          <polygon fill="url(#${gradId})" points="${starSinglePoints}" />
        </g>
      `);
    } else {
      // Empty Star
      starsMarkup.push(`
        <g transform="translate(${starLeft}, 0)">
          <polygon fill="${inactiveColor}" points="${starSinglePoints}" />
        </g>
      `);
    }
  }

  return {
    svgContent: starsMarkup.join('\n'),
    viewBox,
    width: totalWidth,
    height: totalHeight,
  };
}
