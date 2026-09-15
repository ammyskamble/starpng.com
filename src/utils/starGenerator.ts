/**
 * Procedural Star Geometry Generator
 * Generates exact mathematical SVG vector paths for any star configuration.
 * Supports 3 to 48 points, customizable inner/outer radii, curved edges, and styles.
 */

export interface StarGenOptions {
  points: number; // 3 to 48
  innerRadius: number; // 0.1 to 0.9 (ratio of outer radius)
  size?: number; // default 100
  curved?: boolean; // curved edges or sharp
  curveFactor?: number; // curvature intensity
}

export function generateStarPolygonPoints(options: StarGenOptions): string {
  const { points, innerRadius, size = 100 } = options;
  const center = size / 2;
  const rOuter = (size / 2) * 0.92;
  const rInner = rOuter * Math.max(0.08, Math.min(0.95, innerRadius));
  const totalSteps = points * 2;
  const angleStep = (Math.PI * 2) / totalSteps;
  const startAngle = -Math.PI / 2; // top center

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
  const { points, innerRadius, size = 100, curveFactor = 0.5 } = options;
  const center = size / 2;
  const rOuter = (size / 2) * 0.92;
  const rInner = rOuter * Math.max(0.08, Math.min(0.95, innerRadius));
  const totalSteps = points * 2;
  const angleStep = (Math.PI * 2) / totalSteps;
  const startAngle = -Math.PI / 2;

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
