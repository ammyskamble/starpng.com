export type StarLevel = 'basic' | 'moderate' | 'high';
export type AnimationType = 'twinkle' | 'pulse' | 'spin' | 'float' | 'shooting';

export interface StarAsset {
  id: string;
  title: string;
  slug: string;
  category: 'ratings' | 'y2k' | 'futuristic' | 'gold' | '3d' | 'sparkle' | 'aesthetic' | 'geometric' | 'neon' | 'outline' | 'stickers' | 'animated' | 'interface' | 'frames' | 'badges' | 'celestial' | 'characters';
  categoryName: string;
  level: StarLevel;
  animationType?: AnimationType;
  isAnimated?: boolean;
  description: string;
  tags: string[];
  searchVolume: string;
  defaultColor: string;
  viewBox: string;
  svgContent: string;
  featured?: boolean;
}

export const LEVELS = [
  { id: 'all', name: 'All Levels' },
  { id: 'basic', name: 'Basic (UI & Minimal)' },
  { id: 'moderate', name: 'Moderate (Y2K, Glow & Aesthetic)' },
  { id: 'high', name: 'High-Level (3D, Flares & FX)' },
] as const;

export const CATEGORIES = [
  { id: 'all', name: 'All Stars', slug: '' },
  { id: 'characters', name: 'Star Bears & Mascots', slug: 'characters' },
  { id: 'stickers', name: 'Star Stickers', slug: 'stickers' },
  { id: 'animated', name: 'Animated Stars', slug: 'animated' },
  { id: 'interface', name: 'UI & Interface Icons', slug: 'interface' },
  { id: 'frames', name: 'Frames & Borders', slug: 'frames' },
  { id: 'celestial', name: 'Moon & Celestial', slug: 'celestial' },
  { id: 'badges', name: 'Badges & Ribbons', slug: 'badges' },
  { id: 'ratings', name: '5-Star Ratings', slug: 'ratings' },
  { id: 'futuristic', name: 'Futuristic & AI', slug: 'futuristic' },
  { id: 'y2k', name: 'Y2K & Cyber', slug: 'y2k' },
  { id: '3d', name: '3D & Glossy', slug: '3d' },
  { id: 'gold', name: 'Gold & Metallic', slug: 'gold' },
  { id: 'neon', name: 'Neon & Glow', slug: 'neon' },
  { id: 'sparkle', name: 'Sparkle & Twinkle', slug: 'sparkle' },
  { id: 'aesthetic', name: 'Aesthetic & Cute', slug: 'aesthetic' },
  { id: 'geometric', name: 'Geometric & Compass', slug: 'geometric' },
  { id: 'outline', name: 'Outlines & Seals', slug: 'outline' },
] as const;

export const STAR_ASSETS: StarAsset[] = [
  // =========================================================================
  // 1. 5-STAR RATINGS, REVIEWS & TRUST BADGES (FLATICON BESTSELLERS)
  // =========================================================================
  {
    id: 'five-star-rating-row',
    level: 'basic',
    title: '5 Star Rating PNG',
    slug: '5-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Crisp 5 star review rating bar with transparent background. Ideal for e-commerce product reviews, testimonial widgets, trust badges, and UI designs.',
    tags: ['5 star rating png', 'five star review png', 'review star png', 'customer rating icon', 'google review star png'],
    searchVolume: '35,000/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
    featured: true,
  },
  {
    id: 'four-half-star-rating',
    level: 'basic',
    title: '4.5 Star Rating PNG',
    slug: '4-5-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Transparent 4.5 star rating graphic featuring 4 solid gold stars and 1 half-filled star. Perfect for 4.8 or 4.5 average customer satisfaction ratings.',
    tags: ['4.5 star rating png', 'four and half star png', 'half star rating png', 'review rating score'],
    searchVolume: '6,200/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <defs>
        <linearGradient id="halfStarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stop-color="{{STAR_MAIN}}" />
          <stop offset="50%" stop-color="#E5E7EB" />
        </linearGradient>
      </defs>
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
      </g>
      <polygon fill="url(#halfStarGrad)" points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
    `,
    featured: true,
  },
  {
    id: 'four-star-rating-row',
    level: 'basic',
    title: '4 Star Rating PNG',
    slug: '4-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Transparent 4-star rating bar with 4 solid stars and 1 empty star. Essential for feedback systems, Amazon review mockups, and customer testimonial sliders.',
    tags: ['4 star rating png', 'four star review png', 'rating bar transparent'],
    searchVolume: '8,100/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
      </g>
      <polygon fill="#E5E7EB" points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
    `,
    featured: false,
  },
  {
    id: 'single-half-star-bisected',
    level: 'basic',
    title: 'Half Star Rating PNG',
    slug: 'half-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Single half-filled rating star icon with transparent background. Clean bisected 50% fill for dynamic rating components.',
    tags: ['half star png', 'half rating star', '50 percent star', 'semi filled star'],
    searchVolume: '4,500/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Left solid half -->
      <path fill="{{STAR_MAIN}}" d="M50 5 L63 33 L50 33 L50 70 L22 87 L30 56 L5 35 L37 33 Z" />
      <!-- Right empty outline half -->
      <path fill="#E5E7EB" d="M50 5 L50 70 L78 87 L70 56 L95 35 L63 33 Z" />
    `,
    featured: false,
  },
  {
    id: 'star-medal-award-ribbon',
    level: 'moderate',
    title: 'Star Medal Ribbon PNG',
    slug: 'star-medal-ribbon-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'First place gold medal with central star emblem and ceremonial ribbon tail. Used for contest winners, certificates, and gamification rewards.',
    tags: ['star medal png', 'award medal star', 'winner star ribbon', '1st place star medal'],
    searchVolume: '9,200/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Ribbon Tails -->
      <polygon fill="{{STAR_DEEP}}" points="35,55 25,95 45,82 50,95 45,55" />
      <polygon fill="{{STAR_DARK}}" points="65,55 75,95 55,82 50,95 55,55" />
      <!-- Medal Coin -->
      <circle cx="50" cy="45" r="32" fill="{{STAR_MAIN}}" stroke="{{STAR_HIGHLIGHT}}" stroke-width="2" />
      <circle cx="50" cy="45" r="26" fill="none" stroke="{{STAR_DEEP}}" stroke-width="1.5" stroke-dasharray="3 2" />
      <!-- Center Star -->
      <polygon fill="#ffffff" points="50,26 54,38 67,39 57,48 61,61 50,53 39,61 43,48 33,39 46,38" />
    `,
    featured: true,
  },
  {
    id: 'star-favorite-circle-badge',
    level: 'basic',
    title: 'Star in Circle Favorite Icon PNG',
    slug: 'star-in-circle-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Circular favorite and bookmark star icon. Classic mobile app UI element for rating, saving to wishlist, or marking as featured.',
    tags: ['star in circle png', 'favorite icon png', 'bookmark star', 'featured badge star'],
    searchVolume: '14,000/mo',
    defaultColor: '#3B82F6',
    viewBox: '0 0 100 100',
    svgContent: `
      <circle cx="50" cy="50" r="45" fill="{{STAR_MAIN}}" />
      <polygon fill="#ffffff" points="50,18 57,36 77,37 62,50 67,70 50,59 33,70 38,50 23,37 43,36" />
    `,
    featured: false,
  },
  {
    id: 'trust-badge-verified-star',
    level: 'moderate',
    title: 'Trust Badge Star PNG',
    slug: 'trust-badge-star-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Shield trust badge with center 5-star rating icon. Used on e-commerce checkout funnels, security guarantees, and seller credibility seals.',
    tags: ['trust badge star png', 'seller rating badge', 'verified reviews star', 'satisfaction guarantee star'],
    searchVolume: '7,400/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M50 5 L85 20 C85 60 50 95 50 95 C50 95 15 60 15 20 Z" />
      <polygon fill="#ffffff" points="50,22 55,36 70,36 58,46 62,60 50,51 38,60 42,46 30,36 45,36" />
    `,
    featured: false,
  },

  // =========================================================================
  // 2. FUTURISTIC & AI GENERATED STARS
  // =========================================================================
  {
    id: 'ai-hologram-cyber-star',
    level: 'high',
    title: 'AI Hologram Cyber Star PNG',
    slug: 'ai-hologram-cyber-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Futuristic AI generated holographic star PNG with floating cyber energy rings and optical refraction flares. Ideal for web3 interfaces, sci-fi games, and AI platforms.',
    tags: ['ai star png', 'futuristic star png', 'holographic star png', 'cyber star png', 'sci-fi star graphic'],
    searchVolume: '16,500/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 120 120',
    svgContent: `
      <defs>
        <radialGradient id="holoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" stop-opacity="0.9" />
          <stop offset="40%" stop-color="{{STAR_MAIN}}" stop-opacity="0.7" />
          <stop offset="100%" stop-color="{{STAR_DARK}}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="60" rx="52" ry="20" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-dasharray="8 4" transform="rotate(-25 60 60)" opacity="0.75" />
      <ellipse cx="60" cy="60" rx="52" ry="20" fill="none" stroke="{{STAR_LIGHT}}" stroke-width="1.5" transform="rotate(35 60 60)" opacity="0.6" />
      <path fill="url(#holoGlow)" d="M60 10 C60 42 75 60 110 60 C75 60 60 78 60 110 C60 78 45 60 10 60 C45 60 60 42 60 10 Z" />
      <circle cx="60" cy="60" r="8" fill="{{STAR_HIGHLIGHT}}" />
      <circle cx="95" cy="40" r="3.5" fill="{{STAR_HIGHLIGHT}}" />
      <circle cx="25" cy="80" r="3" fill="{{STAR_MAIN}}" />
    `,
    featured: true,
  },
  {
    id: 'ai-quantum-hyper-star',
    level: 'high',
    title: 'AI Quantum Hyper Star PNG',
    slug: 'ai-quantum-hyper-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Multi-dimensional AI quantum starburst with hyper-dimensional geometric prism rays. High tech transparent asset for futuristic tech branding.',
    tags: ['quantum star png', 'ai generated star png', 'futuristic starburst', 'hyper star vector'],
    searchVolume: '11,200/mo',
    defaultColor: '#7928CA',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="quantumRay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="50%" stop-color="{{STAR_MAIN}}" />
          <stop offset="100%" stop-color="{{STAR_DARK}}" />
        </linearGradient>
      </defs>
      <polygon fill="url(#quantumRay)" points="50,2 58,38 98,50 58,62 50,98 42,62 2,50 42,38" />
      <polygon fill="{{STAR_LIGHT}}" opacity="0.6" points="50,18 56,44 82,50 56,56 50,82 44,56 18,50 44,44" transform="rotate(45 50 50)" />
      <polygon fill="{{STAR_DEEP}}" opacity="0.4" points="50,26 54,46 74,50 54,54 50,74 46,54 26,50 46,46" transform="rotate(22.5 50 50)" />
      <circle cx="50" cy="50" r="5" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: 'ai-digital-glitch-star',
    level: 'moderate',
    title: 'AI Digital Matrix Glitch Star PNG',
    slug: 'ai-digital-glitch-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Segmented cyber matrix digital glitch star with sliced horizontal pixel displacements. High impact tech asset for cyberpunk game developers.',
    tags: ['glitch star png', 'matrix star png', 'digital star png', 'cyber glitch graphic'],
    searchVolume: '7,500/mo',
    defaultColor: '#00FF66',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Segment 1: Top Tip -->
      <polygon fill="{{STAR_MAIN}}" points="50,4 55,25 45,25" />
      <!-- Segment 2: Shifted Right -->
      <polygon fill="{{STAR_HIGHLIGHT}}" points="46,28 65,34 85,35 68,46 48,46" transform="translate(3, 0)" />
      <!-- Segment 3: Shifted Left -->
      <polygon fill="{{STAR_LIGHT}}" points="15,35 38,34 50,46 32,56 15,35" transform="translate(-4, 0)" />
      <!-- Segment 4: Lower Body -->
      <polygon fill="{{STAR_MAIN}}" points="70,48 78,80 50,65 22,80 30,48" />
      <!-- Digital Matrix Ticks -->
      <rect x="88" y="22" width="6" height="2" fill="{{STAR_HIGHLIGHT}}" />
      <rect x="6" y="65" width="8" height="2" fill="{{STAR_MAIN}}" />
      <rect x="52" y="88" width="4" height="2" fill="{{STAR_LIGHT}}" />
    `,
    featured: false,
  },
  {
    id: 'ai-cyber-hud-star',
    level: 'high',
    title: 'Sci-Fi HUD Target Star PNG',
    slug: 'scifi-hud-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'High-tech sci-fi HUD tactical reticle star with crosshairs, targeting brackets, and digital telemetry markings. Perfect for gaming streams and futuristic UI.',
    tags: ['hud star png', 'sci-fi star png', 'gaming crosshair star', 'cyberpunk ui star'],
    searchVolume: '8,800/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 100 100',
    svgContent: `
      <circle cx="50" cy="50" r="42" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" opacity="0.6" stroke-dasharray="14 6" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="{{STAR_LIGHT}}" stroke-width="1" opacity="0.8" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="50,12 54,46 88,50 54,54 50,88 46,54 12,50 46,46" />
      <line x1="50" y1="2" x2="50" y2="8" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="50" y1="92" x2="50" y2="98" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="2" y1="50" x2="8" y2="50" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="92" y1="50" x2="98" y2="50" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
    `,
    featured: false,
  },

  // =========================================================================
  // 3. 3D & GLOSSY STARS (DYNAMIC RECOLORING)
  // =========================================================================
  {
    id: 'glossy-3d-star',
    level: 'high',
    title: '3D Glossy Star PNG',
    slug: '3d-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Volumetric 3D glossy star PNG with specular highlights, realistic ambient depth, and soft light reflection. Dynamically recolorable in any tone.',
    tags: ['3d star png', 'glossy star png', 'emoji star png', 'game reward star', 'volumetric star'],
    searchVolume: '32,000/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <radialGradient id="dyn3DStarBody" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="40%" stop-color="{{STAR_MAIN}}" />
          <stop offset="85%" stop-color="{{STAR_DARK}}" />
          <stop offset="100%" stop-color="{{STAR_DEEP}}" />
        </radialGradient>
        <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <polygon fill="url(#dyn3DStarBody)" points="50,6 63,33 94,35 70,56 78,86 50,69 22,86 30,56 6,35 37,33" />
      <ellipse cx="44" cy="28" rx="10" ry="6" fill="url(#specularGlint)" transform="rotate(-20 44 28)" />
      <path fill="{{STAR_DEEP}}" opacity="0.3" d="M22 86 L50 69 L78 86 Q50 94 22 86 Z" />
    `,
    featured: true,
  },
  {
    id: 'faceted-3d-gem-star',
    level: 'high',
    title: '3D Faceted Crystal Star PNG',
    slug: '3d-faceted-gem-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Precision cut 3D diamond crystal star with multi-angle geometric facets that refract light dynamically. Adapts beautifully to any color swatch.',
    tags: ['3d gem star png', 'faceted star png', 'crystal star vector', 'diamond star transparent'],
    searchVolume: '14,200/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_HIGHLIGHT}}" points="50,6 63,35 50,55" />
      <polygon fill="{{STAR_MAIN}}" points="63,35 95,35 50,55" />
      <polygon fill="{{STAR_DARK}}" points="95,35 70,58 50,55" />
      <polygon fill="{{STAR_DEEP}}" points="70,58 78,88 50,55" />
      <polygon fill="{{STAR_DEEP}}" points="78,88 50,70 50,55" />
      <polygon fill="{{STAR_DARK}}" points="50,70 22,88 50,55" />
      <polygon fill="{{STAR_MAIN}}" points="22,88 30,58 50,55" />
      <polygon fill="{{STAR_LIGHT}}" points="30,58 5,35 50,55" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="5,35 37,35 50,55" />
      <polygon fill="{{STAR_LIGHT}}" points="37,35 50,6 50,55" />
    `,
    featured: true,
  },
  {
    id: 'isometric-3d-star-block',
    level: 'high',
    title: 'Isometric 3D Extruded Star PNG',
    slug: 'isometric-3d-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Isometric thick-extruded 3D star with distinct top face and side extrusion walls. Perfect for UI dashboards, badges, and game levels.',
    tags: ['isometric star png', '3d extruded star', 'thick 3d star', 'game level star'],
    searchVolume: '7,800/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_DEEP}}" points="50,16 61,40 61,50 50,26" />
      <polygon fill="{{STAR_DARK}}" points="61,40 88,40 88,50 61,50" />
      <polygon fill="{{STAR_DEEP}}" points="88,40 67,56 67,66 88,50" />
      <polygon fill="{{STAR_DARK}}" points="67,56 75,82 75,92 67,66" />
      <polygon fill="{{STAR_DEEP}}" points="75,82 50,67 50,77 75,92" />
      <polygon fill="{{STAR_DARK}}" points="50,67 25,82 25,92 50,77" />
      <polygon fill="{{STAR_DEEP}}" points="25,82 33,56 33,66 25,92" />
      <polygon fill="{{STAR_MAIN}}" points="50,16 61,40 88,40 67,56 75,82 50,67 25,82 33,56 12,40 39,40" />
      <polygon fill="{{STAR_HIGHLIGHT}}" opacity="0.4" points="50,16 61,40 50,67 39,40" />
    `,
    featured: false,
  },
  {
    id: 'frosted-glassmorphism-star',
    level: 'high',
    title: 'Glassmorphism Star PNG',
    slug: 'glassmorphism-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Modern frosted glass glassmorphism star with translucent background blur effect and glowing refraction edge border.',
    tags: ['glassmorphism star png', 'frosted glass star', 'translucent star icon', 'modern glass star'],
    searchVolume: '8,900/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Glow Underlay -->
      <polygon fill="{{STAR_GLOW_SOFT}}" points="50,4 63,33 95,35 70,56 78,87 50,70 22,87 30,56 5,35 37,33" />
      <!-- Frosted Front Glass Star -->
      <polygon fill="{{STAR_MAIN}}" fill-opacity="0.35" stroke="#ffffff" stroke-width="1.8" stroke-opacity="0.8" points="50,8 61,35 91,37 68,56 75,85 50,69 25,85 32,56 9,37 39,35" />
      <!-- Specular Highlight Sheen -->
      <path fill="#ffffff" fill-opacity="0.5" d="M50 8 L61 35 L50 48 L39 35 Z" />
    `,
    featured: false,
  },

  // =========================================================================
  // 4. Y2K & CYBER STREETWEAR STARS
  // =========================================================================
  {
    id: 'y2k-cyber-sparkle-star',
    level: 'moderate',
    title: 'Y2K Cyber Star PNG',
    slug: 'y2k-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Iconic retro-futuristic 4-point flared Y2K cyber star PNG with transparent background. High resolution graphic for streetwear merch, Gen-Z album covers, and cyber aesthetic designs.',
    tags: ['y2k star png', 'cyber star png', 'y2k sparkle png', 'retro 2000s star', 'cyberpunk star png'],
    searchVolume: '14,000/mo',
    defaultColor: '#171717',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
    `,
    featured: true,
  },
  {
    id: 'y2k-eight-point-cross',
    level: 'moderate',
    title: 'Y2K 8-Point Starburst PNG',
    slug: 'y2k-starburst-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Dramatic 8-point Y2K aesthetic starburst with needle spikes. High impact transparent asset for posters, TikTok graphics, and acid graphics.',
    tags: ['y2k starburst png', '8 point y2k star', 'needle star png', 'acid graphic star'],
    searchVolume: '8,500/mo',
    defaultColor: '#7928CA',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M50 0 C50 32 68 50 100 50 C68 50 50 68 50 100 C50 68 32 50 0 50 C32 50 50 32 50 0 Z" />
      <path fill="{{STAR_LIGHT}}" transform="rotate(45 50 50)" opacity="0.65" d="M50 16 C50 37 63 50 84 50 C63 50 50 63 50 84 C50 63 37 50 16 50 C37 50 50 37 50 16 Z" />
    `,
    featured: false,
  },
  {
    id: 'y2k-chrome-liquid-star',
    level: 'high',
    title: 'Y2K Liquid Chrome Star PNG',
    slug: 'y2k-chrome-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Molten liquid metal chrome star inspired by 2000s cyber aesthetic and rave culture. Features smooth aerodynamic curves and fluid shine.',
    tags: ['chrome star png', 'y2k metal star', 'liquid star png', 'cyber streetwear star'],
    searchVolume: '10,500/mo',
    defaultColor: '#94A3B8',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="chromeFlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="35%" stop-color="{{STAR_MAIN}}" />
          <stop offset="70%" stop-color="{{STAR_DARK}}" />
          <stop offset="100%" stop-color="{{STAR_DEEP}}" />
        </linearGradient>
      </defs>
      <path fill="url(#chromeFlow)" d="M50 4 C53 28 66 38 96 50 C66 62 53 72 50 96 C47 72 34 62 4 50 C34 38 47 28 50 4 Z" />
      <ellipse cx="50" cy="50" rx="6" ry="6" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: 'y2k-orbital-wireframe-star',
    level: 'moderate',
    title: 'Y2K Orbital Wireframe Star PNG',
    slug: 'y2k-wireframe-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Cyberpunk wireframe star with sharp planetary orbit axes. Popular in Y2K clothing brand apparel and futuristic techno party flyers.',
    tags: ['y2k wireframe star', 'orbital cyber star', 'techno star png', 'streetwear vector star'],
    searchVolume: '6,400/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Outer Orbit -->
      <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" transform="rotate(-30 50 50)" />
      <!-- 4-Point Wireframe Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" points="50,6 56,44 94,50 56,56 50,94 44,56 6,50 44,44" />
      <circle cx="50" cy="50" r="5" fill="{{STAR_HIGHLIGHT}}" />
    `,
    featured: false,
  },

  // =========================================================================
  // 5. GOLD & METALLIC STARS
  // =========================================================================
  {
    id: 'gold-classic-5-point-star',
    level: 'moderate',
    title: 'Gold Star PNG',
    slug: 'gold-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'High-definition metallic gold star PNG with transparent background. Clean beveled facets that catch light elegantly for achievement awards, top rankings, and holiday decor.',
    tags: ['gold star png', 'golden star transparent', 'metallic gold star png', 'yellow star png', 'shiny star png'],
    searchVolume: '55,000/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="50%" stop-color="{{STAR_LIGHT}}" />
          <stop offset="100%" stop-color="{{STAR_MAIN}}" />
        </linearGradient>
        <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_DARK}}" />
          <stop offset="100%" stop-color="{{STAR_DEEP}}" />
        </linearGradient>
      </defs>
      <polygon fill="url(#goldLight)" points="50,5 62,35 95,35 68,55 78,88 50,68" />
      <polygon fill="url(#goldDark)" points="50,5 50,68 22,88 32,55 5,35 38,35" />
    `,
    featured: true,
  },
  {
    id: 'royal-gold-award-star',
    level: 'high',
    title: 'Royal Gold Award Star PNG',
    slug: 'royal-gold-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Regal golden star surrounded by decorative award laurels and ribbon. Suited for diplomas, winner trophies, and luxury branding.',
    tags: ['award star png', 'royal gold star', 'medal star png', 'trophy star png'],
    searchVolume: '13,500/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 120 120',
    svgContent: `
      <defs>
        <linearGradient id="royalGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="50%" stop-color="{{STAR_MAIN}}" />
          <stop offset="100%" stop-color="{{STAR_DEEP}}" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="48" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-dasharray="4 6" />
      <polygon fill="url(#royalGold)" points="60,20 68,44 94,45 74,60 81,85 60,70 39,85 46,60 26,45 52,44" />
      <circle cx="60" cy="60" r="6" fill="#ffffff" opacity="0.6" />
    `,
    featured: false,
  },
  {
    id: 'gold-coin-star-emblem',
    level: 'high',
    title: 'Gold Coin Star Token PNG',
    slug: 'gold-coin-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Circular shiny gold coin with an embossed star in the center. Essential for mobile games, loyalty tokens, and reward points.',
    tags: ['gold coin star', 'star token png', 'game coin star', 'reward coin transparent'],
    searchVolume: '8,200/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Coin Edge 3D Bevel -->
      <circle cx="50" cy="50" r="46" fill="{{STAR_DEEP}}" />
      <circle cx="50" cy="48" r="45" fill="{{STAR_MAIN}}" stroke="{{STAR_HIGHLIGHT}}" stroke-width="2" />
      <circle cx="50" cy="48" r="38" fill="{{STAR_LIGHT}}" opacity="0.4" />
      <!-- Center Star -->
      <polygon fill="#ffffff" points="50,22 55,38 72,39 58,50 63,67 50,57 37,67 42,50 28,39 45,38" />
    `,
    featured: false,
  },

  // =========================================================================
  // 6. NEON & GLOW STARS
  // ==========================================
  {
    id: 'cyberpunk-neon-star',
    level: 'moderate',
    title: 'Cyberpunk Neon Star PNG',
    slug: 'neon-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Electrifying neon tube star with high intensity luminous outer aura. Excellent for dark mode UI, gaming overlays, Twitch alerts, and nightlife posters.',
    tags: ['neon star png', 'glowing star png', 'cyberpunk star', 'light tube star png'],
    searchVolume: '15,000/mo',
    defaultColor: '#00F0FF',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" stroke-linejoin="round" opacity="0.25" points="50,10 62,37 92,37 68,56 77,85 50,67 23,85 32,56 8,37 38,37" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" opacity="0.6" points="50,10 62,37 92,37 68,56 77,85 50,67 23,85 32,56 8,37 38,37" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" points="50,10 62,37 92,37 68,56 77,85 50,67 23,85 32,56 8,37 38,37" />
    `,
    featured: true,
  },
  {
    id: 'neon-multi-ring-star',
    level: 'high',
    title: 'Neon Pulsar Star PNG',
    slug: 'neon-pulsar-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Multi-layer glowing pulsar star with concentric radiation ripples. Dynamic asset for festival flyers and music promotions.',
    tags: ['pulsar star png', 'glowing starburst', 'neon light star', 'radioactive star png'],
    searchVolume: '6,900/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 100 100',
    svgContent: `
      <circle cx="50" cy="50" r="38" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" opacity="0.3" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" opacity="0.5" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="50,14 55,42 86,50 55,58 50,86 45,58 14,50 45,42" />
      <circle cx="50" cy="50" r="5" fill="#ffffff" />
    `,
    featured: false,
  },

  // =========================================================================
  // 7. SPARKLE & CELESTIAL TWINKLE STARS
  // =========================================================================
  {
    id: 'aesthetic-sparkle-star',
    level: 'moderate',
    title: 'Aesthetic Sparkle Star PNG',
    slug: 'aesthetic-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Clean aesthetic sparkle star PNG with transparent background. Highly popular on Canva, Pinterest, and Instagram Stories for dreamy photo overlays.',
    tags: ['aesthetic star png', 'sparkle star png', 'cute star png', 'twinkle star transparent', 'pinterest star png'],
    searchVolume: '18,500/mo',
    defaultColor: '#FF0080',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M50 5 Q50 45 95 50 Q50 55 50 95 Q50 55 5 50 Q50 45 50 5 Z" />
      <circle cx="80" cy="20" r="4" fill="{{STAR_MAIN}}" opacity="0.8" />
      <circle cx="20" cy="80" r="3" fill="{{STAR_LIGHT}}" opacity="0.6" />
      <circle cx="22" cy="25" r="2.5" fill="{{STAR_HIGHLIGHT}}" opacity="0.5" />
      <circle cx="82" cy="78" r="3" fill="{{STAR_MAIN}}" opacity="0.7" />
    `,
    featured: true,
  },
  {
    id: 'shooting-star-comet',
    level: 'moderate',
    title: 'Shooting Star PNG',
    slug: 'shooting-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Dramatic shooting star with radiant cosmic light trail and transparent background. Clean asset for night sky artwork, holiday wishes, and gaming graphics.',
    tags: ['shooting star png', 'falling star png', 'meteor png', 'comet transparent', 'wishing star png'],
    searchVolume: '24,000/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 120 120',
    svgContent: `
      <defs>
        <linearGradient id="cometTail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_MAIN}}" stop-opacity="0" />
          <stop offset="70%" stop-color="{{STAR_MAIN}}" stop-opacity="0.4" />
          <stop offset="100%" stop-color="{{STAR_HIGHLIGHT}}" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <path fill="url(#cometTail)" d="M10 10 Q 55 45 85 85 L 90 80 Q 55 35 15 5 Z" />
      <path fill="url(#cometTail)" opacity="0.6" d="M25 5 Q 65 40 92 78 L 94 74 Q 65 30 30 2 Z" />
      <g transform="translate(85, 85) scale(0.4)">
        <polygon fill="{{STAR_MAIN}}" points="50,5 61,35 95,35 68,55 78,85 50,65 22,85 32,55 5,35 39,35" />
      </g>
    `,
    featured: true,
  },
  {
    id: 'magic-wand-star-sparkle',
    level: 'moderate',
    title: 'Magic Wand Star Sparkle PNG',
    slug: 'magic-wand-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Magic wand with sparkling star tip. Flaticon design classic for wizardry, magic tricks, AI generation tools, and fairy tales.',
    tags: ['magic wand star png', 'fairy star wand', 'ai magic star', 'wizard star icon'],
    searchVolume: '12,500/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Wand Handle -->
      <line x1="20" y1="80" x2="60" y2="40" stroke="{{STAR_DEEP}}" stroke-width="6" stroke-linecap="round" />
      <line x1="20" y1="80" x2="35" y2="65" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
      <!-- Star Tip -->
      <polygon fill="{{STAR_MAIN}}" points="68,14 74,32 92,34 78,45 82,63 68,52 54,63 58,45 44,34 62,32" />
      <!-- Magic Sparkles -->
      <circle cx="86" cy="18" r="3" fill="{{STAR_HIGHLIGHT}}" />
      <circle cx="50" cy="22" r="2.5" fill="{{STAR_LIGHT}}" />
      <circle cx="78" cy="70" r="2" fill="{{STAR_HIGHLIGHT}}" />
    `,
    featured: false,
  },

  // =========================================================================
  // 8. AESTHETIC & CUTE STARS
  // =========================================================================
  {
    id: 'cute-kawaii-star',
    level: 'moderate',
    title: 'Cute Kawaii Star PNG',
    slug: 'cute-kawaii-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Adorably rounded smiling cartoon star sticker with cheerful blushing cheeks. A favorite for nursery decor, children educational apps, and cute emojis.',
    tags: ['cute star png', 'kawaii star png', 'cartoon star clipart', 'baby star sticker'],
    searchVolume: '11,400/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M50 8 C53 25 64 33 80 36 C67 46 62 58 66 75 C53 67 47 67 34 75 C38 58 33 46 20 36 C36 33 47 25 50 8 Z" />
      <circle cx="43" cy="46" r="3.5" fill="#171717" />
      <circle cx="57" cy="46" r="3.5" fill="#171717" />
      <ellipse cx="38" cy="52" rx="4" ry="2.5" fill="#FB7185" opacity="0.8" />
      <ellipse cx="62" cy="52" rx="4" ry="2.5" fill="#FB7185" opacity="0.8" />
      <path fill="none" stroke="#171717" stroke-width="2" stroke-linecap="round" d="M47 52 Q50 56 53 52" />
    `,
    featured: false,
  },
  {
    id: 'hand-drawn-doodle-star',
    level: 'basic',
    title: 'Hand-Drawn Doodle Star PNG',
    slug: 'hand-drawn-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Whimsical sketchy hand-drawn star PNG with organic, imperfect lines. Wonderful for bullet journals, teacher stickers, kids scrapbooks, and stationery.',
    tags: ['hand drawn star png', 'doodle star png', 'sketch star png', 'scribble star transparent'],
    searchVolume: '6,500/mo',
    defaultColor: '#171717',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" 
        d="M 50,8 Q 54,26 62,34 Q 78,35 94,38 Q 80,48 71,57 Q 76,72 79,88 Q 63,78 49,67 Q 35,77 20,87 Q 24,71 30,56 Q 18,46 5,37 Q 22,35 38,33 Q 45,21 50,8 Z" />
    `,
    featured: false,
  },
  {
    id: 'crescent-moon-and-star',
    level: 'moderate',
    title: 'Crescent Moon with Star PNG',
    slug: 'crescent-moon-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Graceful celestial crescent moon paired with a glowing star. Timeless astrological symbol for bedtime stories, astronomy apps, and holiday decor.',
    tags: ['crescent moon star', 'moon and star png', 'night sky star', 'astrology star icon'],
    searchVolume: '19,000/mo',
    defaultColor: '#818CF8',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Crescent Moon -->
      <path fill="{{STAR_MAIN}}" d="M48 10 C32 10 18 22 18 42 C18 64 36 82 58 82 C68 82 78 78 85 70 C60 74 38 52 42 26 C44 20 46 15 48 10 Z" />
      <!-- Star -->
      <polygon fill="{{STAR_HIGHLIGHT}}" points="74,20 77,29 86,30 79,36 82,45 74,39 66,45 69,36 62,30 71,29" />
    `,
    featured: false,
  },

  // =========================================================================
  // 9. GEOMETRIC & COMPASS STARS
  // =========================================================================
  {
    id: 'north-star-polaris',
    level: 'moderate',
    title: 'North Star PNG (Polaris)',
    slug: 'north-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Nautical 8-point North Star (Polaris / Compass Rose) PNG transparent graphic. Crisp vector geometry suited for celestial maps, tattoos, and logos.',
    tags: ['north star png', 'polaris star png', 'compass star png', '8 point star png', 'guiding star png'],
    searchVolume: '13,000/mo',
    defaultColor: '#0070F3',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="50,2 55,42 98,50 55,58 50,98 45,58 2,50 45,42" />
      <polygon fill="{{STAR_LIGHT}}" opacity="0.65" points="50,20 54,44 78,50 54,56 50,80 46,56 22,50 46,44" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="3" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: 'four-point-star-minimal',
    level: 'basic',
    title: '4-Point Star PNG',
    slug: '4-point-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Sleek modern 4-point diamond star PNG. The signature aesthetic icon used by modern tech platforms, luxury brands, and contemporary typography.',
    tags: ['4 point star png', 'four pointed star png', 'diamond star png', 'sparkle icon png'],
    searchVolume: '7,000/mo',
    defaultColor: '#171717',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="50,5 58,42 95,50 58,58 50,95 42,58 5,50 42,42" />
    `,
    featured: false,
  },
  {
    id: 'six-point-hexagram-star',
    level: 'basic',
    title: '6-Point Hexagram Star PNG',
    slug: '6-point-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Symmetrical 6-point geometric hexagram star (two interlocking equilateral triangles). Classic sacred geometry vector emblem.',
    tags: ['6 point star png', 'hexagram star', 'david star vector', 'geometric star shape'],
    searchVolume: '9,100/mo',
    defaultColor: '#2563EB',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="50,8 88,72 12,72" />
      <polygon fill="{{STAR_MAIN}}" points="50,92 88,28 12,28" opacity="0.85" />
    `,
    featured: false,
  },
  {
    id: 'nautical-compass-rose-star',
    level: 'moderate',
    title: 'Nautical Compass Rose Star PNG',
    slug: 'compass-rose-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Authentic 16-point nautical compass rose star with navigation cardinal markers. Essential for sailing logos, marine cartography, and travel branding.',
    tags: ['compass rose star', 'nautical star png', 'navigation star', 'marine compass star'],
    searchVolume: '15,500/mo',
    defaultColor: '#0F172A',
    viewBox: '0 0 120 120',
    svgContent: `
      <!-- Compass Outer Ring -->
      <circle cx="60" cy="60" r="54" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="2 3" />
      <!-- North Pointer (Dark/Light Bevel) -->
      <polygon fill="{{STAR_MAIN}}" points="60,6 60,60 52,52" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="60,6 68,52 60,60" />
      <!-- South Pointer -->
      <polygon fill="{{STAR_MAIN}}" points="60,114 60,60 68,68" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="60,114 52,68 60,60" />
      <!-- East Pointer -->
      <polygon fill="{{STAR_MAIN}}" points="114,60 60,60 68,52" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="114,60 68,68 60,60" />
      <!-- West Pointer -->
      <polygon fill="{{STAR_MAIN}}" points="6,60 60,60 52,68" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="6,60 52,52 60,60" />
      <circle cx="60" cy="60" r="4" fill="#ffffff" />
    `,
    featured: true,
  },

  // =========================================================================
  // 10. OUTLINES, BADGES & MILITARY
  // =========================================================================
  {
    id: 'clean-star-outline',
    level: 'basic',
    title: 'Star Outline PNG',
    slug: 'star-outline-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    description: 'Minimalist 5-point star outline PNG with crisp vector stroke and transparent inner fill. Ideal for coloring pages, wireframes, and minimalist icons.',
    tags: ['star outline png', 'empty star png', 'star stroke png', 'star shape transparent', 'minimalist star vector'],
    searchVolume: '14,500/mo',
    defaultColor: '#171717',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" points="50,8 62,35 94,35 68,55 78,85 50,66 22,85 32,55 6,35 38,35" />
    `,
    featured: false,
  },
  {
    id: 'starburst-sale-badge',
    level: 'basic',
    title: 'Starburst Badge PNG',
    slug: 'starburst-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    description: 'High-energy 16-point starburst sticker PNG with transparent background. High conversion asset for discount badges, "Special Offer" tags, and retail flyers.',
    tags: ['starburst png', 'star burst transparent', 'sale burst png', 'discount star badge'],
    searchVolume: '18,000/mo',
    defaultColor: '#E11D48',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="
        50,2 59,15 75,8 78,24 94,24 88,39 100,50 88,61 94,76 78,76 75,92 59,85 
        50,98 41,85 25,92 22,76 6,76 12,61 0,50 12,39 6,24 22,24 25,8 41,15
      " />
    `,
    featured: false,
  },
  {
    id: 'sheriff-badge-star',
    level: 'basic',
    title: 'Sheriff Badge Star PNG',
    slug: 'sheriff-star-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    description: 'Western 5-point ball-tipped sheriff star badge. Classic law officer emblem for costume parties, games, and country western themes.',
    tags: ['sheriff star png', 'officer star badge', 'western star png', 'police star transparent'],
    searchVolume: '6,100/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 100 100',
    svgContent: `
      <circle cx="50" cy="8" r="4.5" fill="{{STAR_MAIN}}" />
      <circle cx="94" cy="38" r="4.5" fill="{{STAR_MAIN}}" />
      <circle cx="78" cy="88" r="4.5" fill="{{STAR_MAIN}}" />
      <circle cx="22" cy="88" r="4.5" fill="{{STAR_MAIN}}" />
      <circle cx="6" cy="38" r="4.5" fill="{{STAR_MAIN}}" />
      <polygon fill="{{STAR_MAIN}}" points="50,8 62,38 94,38 68,58 78,88 50,68 22,88 32,58 6,38 38,38" />
      <circle cx="50" cy="50" r="8" fill="#ffffff" />
    `,
    featured: false,
  },
  {
    id: 'military-circled-star',
    level: 'basic',
    title: 'Military Star in Circle PNG',
    slug: 'military-star-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    description: 'Historic allied military star enclosed in stencil circle. Used on military vehicles, army surplus apparel, and stencil aviation graphics.',
    tags: ['military star png', 'army star in circle', 'allied star stencil', 'aviation star emblem'],
    searchVolume: '11,000/mo',
    defaultColor: '#475569',
    viewBox: '0 0 100 100',
    svgContent: `
      <!-- Stencil Ring -->
      <circle cx="50" cy="50" r="44" fill="none" stroke="{{STAR_MAIN}}" stroke-width="5" stroke-dasharray="32 10" />
      <!-- Solid Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="50,14 58,37 84,38 64,52 70,76 50,62 30,76 36,52 16,38 42,37" />
    `,
    featured: false,
  },

  // =========================================================================
  // 11. EXPANDED COMPETITOR CATALOG ADDITIONS (BASIC, MODERATE, HIGH-LEVEL)
  // =========================================================================
  {
    id: 'one-star-rating-row',
    title: '1 Star Rating PNG',
    slug: '1-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    level: 'basic',
    description: 'Crisp 1 star rating graphic with 1 solid gold star and 4 empty grey stars. Used for customer review filters, critique badges, and feedback metrics.',
    tags: ['1 star rating png', 'one star review png', 'single star rating', 'poor rating icon'],
    searchVolume: '5,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
      <g fill="#E5E7EB">
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
    featured: false,
  },
  {
    id: 'two-star-rating-row',
    title: '2 Star Rating PNG',
    slug: '2-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    level: 'basic',
    description: 'Transparent 2 star review rating bar with 2 solid gold stars and 3 empty stars. Ideal for feedback forms, review breakdown charts, and rating selectors.',
    tags: ['2 star rating png', 'two star review png', 'rating breakdown bar'],
    searchVolume: '4,100/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
      </g>
      <g fill="#E5E7EB">
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
    featured: false,
  },
  {
    id: 'three-star-rating-row',
    title: '3 Star Rating PNG',
    slug: '3-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    level: 'basic',
    description: 'Clean 3-star rating bar with 3 solid gold stars and 2 inactive stars. Perfect for neutral feedback indicators, Amazon rating filters, and customer evaluation scores.',
    tags: ['3 star rating png', 'three star review png', 'average rating star bar'],
    searchVolume: '6,400/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
      </g>
      <g fill="#E5E7EB">
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
    featured: false,
  },
  {
    id: 'seven-point-heptagram',
    title: '7-Point Star Heptagram PNG',
    slug: '7-point-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    level: 'basic',
    description: 'Mystical 7-point star heptagram vector PNG with geometric symmetry. Associated with sacred geometry, elven stars, astronomy, and mystical emblems.',
    tags: ['7 point star png', 'heptagram star png', 'sacred geometry star', 'elven star png'],
    searchVolume: '5,300/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="50,5 59.4,24.1 80.7,21.5 73.1,41.6 91.8,52.2 73.7,63.9 82.2,83.5 61.1,80 50,98 38.9,80 17.8,83.5 26.3,63.9 8.2,52.2 26.9,41.6 19.3,21.5 40.6,24.1" />
    `,
    featured: false,
  },
  {
    id: 'ten-point-decagram',
    title: '10-Point Star Decagram PNG',
    slug: '10-point-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    level: 'basic',
    description: 'Harmonious 10-point decagram star PNG with crisp mathematical symmetry. Frequently used for rosette insignias, police badge bases, and astronomical diagrams.',
    tags: ['10 point star png', 'decagram star png', 'geometric star badge', 'star rosette'],
    searchVolume: '4,800/mo',
    defaultColor: '#0EA5E9',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="50,5 57,25 76,14 74,35 95,35 83,52 98,67 79,72 82,93 63,84 50,98 37,84 18,93 21,72 2,67 17,52 5,35 26,35 24,14 43,25" />
    `,
    featured: false,
  },
  {
    id: 'thirty-two-point-sunburst-seal',
    title: '32-Point Sunburst Certificate Seal PNG',
    slug: '32-point-sunburst-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    level: 'basic',
    description: 'Official 32-point notary and diploma sunburst certificate seal PNG. Transparent background with high density teeth, ideal for wax seal stamps and guarantee stickers.',
    tags: ['32 point starburst', 'certificate seal png', 'notary seal star', 'diploma stamp star'],
    searchVolume: '12,400/mo',
    defaultColor: '#CA8A04',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <radialGradient id="sealGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="70%" stop-color="{{STAR_MAIN}}" />
          <stop offset="100%" stop-color="{{STAR_DARK}}" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="{{STAR_DEEP}}" stroke-width="1.5" />
      <circle cx="50" cy="50" r="41" fill="url(#sealGrad)" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8" />
      <polygon fill="#ffffff" points="50,22 55,34 68,35 58,44 62,56 50,49 38,56 42,44 32,35 45,34" />
    `,
    featured: true,
  },
  {
    id: 'soft-rounded-star',
    title: 'Rounded Soft Star PNG',
    slug: 'rounded-soft-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    level: 'basic',
    description: 'Friendly soft rounded 5-point star with smooth pillowed tips. Essential for kids app interfaces, sticker packs, preschool printouts, and plush UI buttons.',
    tags: ['rounded star png', 'soft star png', 'cute star vector', 'curved star transparent'],
    searchVolume: '8,700/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" stroke="{{STAR_DARK}}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" d="M50 10 Q54 28 65 32 Q85 36 78 52 Q68 62 70 78 Q55 72 45 80 Q43 65 30 55 Q22 40 40 33 Q48 28 50 10 Z" />
    `,
    featured: false,
  },
  {
    id: 'minimal-bookmark-star',
    title: 'Star Bookmark Ribbon PNG',
    slug: 'star-bookmark-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    level: 'basic',
    description: 'Vertical bookmark banner ribbon with star cut-out. Used for reading apps, wishlist save buttons, e-commerce sale tags, and priority labels.',
    tags: ['bookmark star png', 'ribbon star png', 'reading save star', 'favorite bookmark'],
    searchVolume: '5,900/mo',
    defaultColor: '#E11D48',
    viewBox: '0 0 80 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M10 5 L70 5 L70 95 L40 75 L10 95 Z" />
      <polygon fill="#ffffff" points="40,25 43,34 52,35 45,42 48,51 40,46 32,51 35,42 28,35 37,34" />
    `,
    featured: false,
  },
  {
    id: 'hexagon-shield-star',
    title: 'Hexagon Shield Star Badge PNG',
    slug: 'hexagon-shield-star-png',
    category: 'outline',
    categoryName: 'Outlines & Badges',
    level: 'basic',
    description: 'Modern geometric hexagon shield with embossed center star. High conversion graphic for security compliance badges, ISO certifications, and pro member tags.',
    tags: ['hexagon star badge', 'shield star png', 'security star seal', 'guarantee badge'],
    searchVolume: '7,100/mo',
    defaultColor: '#2563EB',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" stroke="{{STAR_LIGHT}}" stroke-width="2" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
      <polygon fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.5" points="50,12 82,30 82,70 50,88 18,70 18,30" />
      <polygon fill="#ffffff" points="50,25 55,39 70,40 58,50 62,65 50,55 38,65 42,50 30,40 45,39" />
    `,
    featured: false,
  },
  {
    id: 'ai-twin-sparkle',
    title: 'AI Twin Sparkle PNG',
    slug: 'ai-twin-sparkle-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    level: 'moderate',
    description: 'Modern AI twin sparkle graphic featuring a primary 4-point curved twinkle star paired with an orbiting companion star. The definitive icon for artificial intelligence, prompt magic, and generative features.',
    tags: ['ai twin sparkle', 'gemini star png', 'ai sparkle png', 'magic sparkle star', 'prompt icon png'],
    searchVolume: '28,000/mo',
    defaultColor: '#3B82F6',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="aiSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_HIGHLIGHT}}" />
          <stop offset="50%" stop-color="{{STAR_MAIN}}" />
          <stop offset="100%" stop-color="#8B5CF6" />
        </linearGradient>
      </defs>
      <path fill="url(#aiSparkleGrad)" d="M42 5 C42 26 50 35 70 35 C50 35 42 44 42 65 C42 44 34 35 14 35 C34 35 42 26 42 5 Z" />
      <path fill="url(#aiSparkleGrad)" d="M74 52 C74 65 79 70 92 70 C79 70 74 75 74 88 C74 75 69 70 56 70 C69 70 74 65 74 52 Z" />
      <circle cx="25" cy="75" r="3.5" fill="{{STAR_HIGHLIGHT}}" />
    `,
    featured: true,
  },
  {
    id: 'dual-concentric-star',
    title: 'Dual Concentric Echo Star PNG',
    slug: 'dual-concentric-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    level: 'moderate',
    description: 'Concentric star-within-a-star graphic with alternating negative space. Striking visual for retro sports branding, university patches, and varsity crests.',
    tags: ['concentric star png', 'double star png', 'echo star vector', 'varsity star logo'],
    searchVolume: '6,700/mo',
    defaultColor: '#F97316',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="50,5 63,33 95,35 71,57 78,88 50,71 22,88 29,57 5,35 37,33" />
      <polygon fill="#ffffff" points="50,22 58,40 78,41 62,55 67,74 50,63 33,74 38,55 22,41 42,40" />
      <polygon fill="{{STAR_DEEP}}" points="50,34 54,44 64,45 56,52 58,61 50,56 42,61 44,52 36,45 46,44" />
    `,
    featured: false,
  },
  {
    id: 'retro-sunset-gradient-star',
    title: 'Retro Sunset Gradient Star PNG',
    slug: 'retro-sunset-gradient-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    level: 'moderate',
    description: 'Vibrant 80s synthwave sunset star with smooth magenta-to-orange gradient and segmented horizontal blind stripes. Ideal for retro wave posters and arcade graphics.',
    tags: ['synthwave star', 'sunset gradient star', '80s retro star', 'vaporwave star png'],
    searchVolume: '9,500/mo',
    defaultColor: '#FF0080',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="retroSunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FF0080" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#EF4444" />
        </linearGradient>
      </defs>
      <polygon fill="url(#retroSunsetGrad)" points="50,5 62,35 95,35 68,55 78,85 50,66 22,85 32,55 5,35 38,35" />
      <line x1="25" y1="55" x2="75" y2="55" stroke="#ffffff" stroke-width="1.5" opacity="0.7" />
      <line x1="28" y1="63" x2="72" y2="63" stroke="#ffffff" stroke-width="2" opacity="0.8" />
      <line x1="32" y1="71" x2="68" y2="71" stroke="#ffffff" stroke-width="2.5" opacity="0.9" />
    `,
    featured: true,
  },
  {
    id: 'electric-cyber-sparkle',
    title: 'Electric Cyber Sparkle PNG',
    slug: 'electric-cyber-sparkle-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    level: 'moderate',
    description: 'Razor-sharp Y2K needle sparkle with crossing 45-degree satellite needles and metallic central glare. Popular for album covers, streetwear logos, and rave aesthetics.',
    tags: ['cyber sparkle png', 'needle star png', 'y2k cross star', 'rave star png'],
    searchVolume: '13,200/mo',
    defaultColor: '#00F0FF',
    viewBox: '0 0 120 120',
    svgContent: `
      <defs>
        <radialGradient id="cyberCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="{{STAR_MAIN}}" />
          <stop offset="100%" stop-color="{{STAR_DARK}}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <polygon fill="{{STAR_MAIN}}" points="60,57 5,60 60,63 115,60" />
      <polygon fill="{{STAR_MAIN}}" points="57,60 60,5 63,60 60,115" />
      <polygon fill="{{STAR_LIGHT}}" points="58,58 20,20 62,62 100,100" opacity="0.8" />
      <polygon fill="{{STAR_LIGHT}}" points="62,58 100,20 58,62 20,100" opacity="0.8" />
      <circle cx="60" cy="60" r="14" fill="url(#cyberCore)" />
      <circle cx="60" cy="60" r="4" fill="#ffffff" />
    `,
    featured: false,
  },
  {
    id: 'shooting-star-comet-tail',
    title: 'Shooting Comet with Cosmic Dust Trail PNG',
    slug: 'shooting-comet-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    level: 'moderate',
    description: 'Dynamic shooting star comet with glowing gradient speed trail and dissolving stardust meteors. Adds energy to space artwork, night sky visuals, and game animations.',
    tags: ['shooting star comet', 'meteor star png', 'stardust trail', 'falling star png'],
    searchVolume: '15,000/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 140 100',
    svgContent: `
      <defs>
        <linearGradient id="cometTail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{{STAR_MAIN}}" stop-opacity="0" />
          <stop offset="70%" stop-color="{{STAR_LIGHT}}" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#cometTail)" d="M10 20 Q50 35 105 65 L102 72 Q45 42 8 28 Z" />
      <path fill="url(#cometTail)" opacity="0.7" d="M25 10 Q65 28 108 62 L106 67 Q60 34 22 17 Z" />
      <circle cx="20" cy="35" r="2.5" fill="{{STAR_HIGHLIGHT}}" opacity="0.6" />
      <circle cx="45" cy="48" r="3" fill="{{STAR_MAIN}}" opacity="0.7" />
      <circle cx="75" cy="60" r="2" fill="{{STAR_HIGHLIGHT}}" opacity="0.8" />
      <g transform="translate(105, 65)">
        <polygon fill="#ffffff" points="0,-18 5,-5 18,0 5,5 0,18 -5,5 -18,0 -5,-5" />
        <circle cx="0" cy="0" r="8" fill="{{STAR_HIGHLIGHT}}" opacity="0.8" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
      </g>
    `,
    featured: false,
  },
  {
    id: 'kawaii-winking-star',
    title: 'Kawaii Cute Winking Star PNG',
    slug: 'kawaii-winking-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    level: 'moderate',
    description: 'Charming kawaii cartoon star with an expressive winking anime eye, open happy smile, and blushing cheeks. Irresistible asset for stickers, preschool badges, and plush logos.',
    tags: ['kawaii star png', 'cute anime star', 'winking star png', 'chibi star character'],
    searchVolume: '11,800/mo',
    defaultColor: '#FDE047',
    viewBox: '0 0 100 100',
    svgContent: `
      <path fill="{{STAR_MAIN}}" stroke="#451A03" stroke-width="3.5" stroke-linejoin="round" d="M50 8 C53 25 68 28 85 35 C73 50 78 68 88 84 C70 82 58 75 50 88 C42 75 30 82 12 84 C22 68 27 50 15 35 C32 28 47 25 50 8 Z" />
      <ellipse cx="38" cy="48" rx="4.5" ry="6" fill="#1E293B" />
      <circle cx="36.5" cy="45.5" r="2" fill="#ffffff" />
      <path fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" d="M58 48 Q64 43 70 48" />
      <ellipse cx="32" cy="56" rx="5" ry="3" fill="#FB7185" opacity="0.8" />
      <ellipse cx="68" cy="56" rx="5" ry="3" fill="#FB7185" opacity="0.8" />
      <path fill="#1E293B" d="M47 54 Q50 62 53 54 Z" />
    `,
    featured: true,
  },
  {
    id: 'nautical-sailor-compass-rose',
    title: 'Nautical Mariner Compass Rose PNG',
    slug: 'nautical-compass-rose-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    level: 'moderate',
    description: 'Authentic 8-point nautical mariner compass rose star with contrasting bisected directional points. Essential for maritime maps, vintage charts, and compass logos.',
    tags: ['nautical compass rose', 'mariner star png', 'vintage compass star', 'sea navigation emblem'],
    searchVolume: '14,200/mo',
    defaultColor: '#0F172A',
    viewBox: '0 0 100 100',
    svgContent: `
      <circle cx="50" cy="50" r="46" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="{{STAR_MAIN}}" stroke-width="0.8" stroke-dasharray="2 4" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 50,6 44,50" />
      <polygon fill="#94A3B8" points="50,50 50,6 56,50" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 50,94 56,50" />
      <polygon fill="#94A3B8" points="50,50 50,94 44,50" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 94,50 50,44" />
      <polygon fill="#94A3B8" points="50,50 94,50 50,56" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 6,50 50,56" />
      <polygon fill="#94A3B8" points="50,50 6,50 50,44" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 80,20 53,47" />
      <polygon fill="#CBD5E1" points="50,50 80,20 47,53" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 20,80 47,53" />
      <polygon fill="#CBD5E1" points="50,50 20,80 53,47" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 80,80 47,47" />
      <polygon fill="#CBD5E1" points="50,50 80,80 53,53" />
      <polygon fill="{{STAR_MAIN}}" points="50,50 20,20 53,53" />
      <polygon fill="#CBD5E1" points="50,50 20,20 47,47" />
      <circle cx="50" cy="50" r="5" fill="#ffffff" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
    `,
    featured: false,
  },
  {
    id: 'prismatic-iridescent-star',
    title: 'Prismatic Iridescent Star PNG',
    slug: 'prismatic-iridescent-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    level: 'moderate',
    description: 'Iridescent holographic prismatic star with dynamic rainbow spectrum refraction gradients. Captures the viral Y2K oil-spill chrome aesthetic for music festivals and fashion graphics.',
    tags: ['prismatic star png', 'iridescent star png', 'rainbow holographic star', 'chrome spectrum star'],
    searchVolume: '8,400/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="25%" stop-color="#A855F7" />
          <stop offset="50%" stop-color="#EC4899" />
          <stop offset="75%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#10B981" />
        </linearGradient>
      </defs>
      <polygon fill="url(#prismGrad)" points="50,4 62,35 96,35 69,56 79,88 50,68 21,88 31,56 4,35 38,35" />
      <polygon fill="#ffffff" opacity="0.35" points="50,14 59,38 84,38 64,53 71,76 50,61 29,76 36,53 16,38 41,38" />
    `,
    featured: false,
  },
  {
    id: 'faceted-3d-gold-trophy-star',
    title: '3D Faceted Gold Trophy Star PNG',
    slug: '3d-faceted-gold-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    level: 'high',
    description: 'Masterpiece 3D faceted gold trophy star with 10 individually illuminated triangular bevel planes. Photorealistic directional lighting delivers deep metallic ridge contrast and brilliant specular glints.',
    tags: ['3d faceted gold star', '3d gold star png', 'gold trophy star', 'beveled gold star', 'metallic award star'],
    searchVolume: '24,000/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <filter id="goldGlint" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
        </filter>
      </defs>
      <polygon points="50,50 50,6 38,38" fill="#FEF08A" stroke="#FEF08A" stroke-width="0.3" />
      <polygon points="50,50 50,6 62,38" fill="#F59E0B" stroke="#F59E0B" stroke-width="0.3" />
      <polygon points="50,50 96,36 62,38" fill="#FBBF24" stroke="#FBBF24" stroke-width="0.3" />
      <polygon points="50,50 96,36 71,60" fill="#D97706" stroke="#D97706" stroke-width="0.3" />
      <polygon points="50,50 78,92 71,60" fill="#B45309" stroke="#B45309" stroke-width="0.3" />
      <polygon points="50,50 78,92 50,72" fill="#78350F" stroke="#78350F" stroke-width="0.3" />
      <polygon points="50,50 22,92 50,72" fill="#92400E" stroke="#92400E" stroke-width="0.3" />
      <polygon points="50,50 22,92 29,60" fill="#B45309" stroke="#B45309" stroke-width="0.3" />
      <polygon points="50,50 4,36 29,60" fill="#D97706" stroke="#D97706" stroke-width="0.3" />
      <polygon points="50,50 4,36 38,38" fill="#FDE047" stroke="#FDE047" stroke-width="0.3" />
      <circle cx="42" cy="28" r="4" fill="#ffffff" opacity="0.9" filter="url(#goldGlint)" />
      <circle cx="42" cy="28" r="1.8" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: 'faceted-3d-platinum-chrome-star',
    title: '3D Faceted Platinum Chrome Star PNG',
    slug: '3d-platinum-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    level: 'high',
    description: 'Ultra-luxurious 3D faceted platinum and mirror chrome star PNG. Features high-contrast monochrome bevel planes and glossy metallic reflections for luxury VIP packaging.',
    tags: ['platinum star png', 'chrome star 3d', 'silver faceted star', 'luxury vip star'],
    searchVolume: '11,500/mo',
    defaultColor: '#E2E8F0',
    viewBox: '0 0 100 100',
    svgContent: `
      <polygon points="50,50 50,6 38,38" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.3" />
      <polygon points="50,50 50,6 62,38" fill="#CBD5E1" stroke="#CBD5E1" stroke-width="0.3" />
      <polygon points="50,50 96,36 62,38" fill="#E2E8F0" stroke="#E2E8F0" stroke-width="0.3" />
      <polygon points="50,50 96,36 71,60" fill="#94A3B8" stroke="#94A3B8" stroke-width="0.3" />
      <polygon points="50,50 78,92 71,60" fill="#64748B" stroke="#64748B" stroke-width="0.3" />
      <polygon points="50,50 78,92 50,72" fill="#334155" stroke="#334155" stroke-width="0.3" />
      <polygon points="50,50 22,92 50,72" fill="#475569" stroke="#475569" stroke-width="0.3" />
      <polygon points="50,50 22,92 29,60" fill="#64748B" stroke="#64748B" stroke-width="0.3" />
      <polygon points="50,50 4,36 29,60" fill="#94A3B8" stroke="#94A3B8" stroke-width="0.3" />
      <polygon points="50,50 4,36 38,38" fill="#F8FAFC" stroke="#F8FAFC" stroke-width="0.3" />
      <ellipse cx="48" cy="35" rx="14" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-35 48 35)" />
    `,
    featured: true,
  },
  {
    id: 'optical-anamorphic-lens-flare',
    title: 'Optical Anamorphic Lens Flare Star PNG',
    slug: 'optical-lens-flare-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    level: 'high',
    description: 'Cinema-quality anamorphic lens flare star featuring a piercing white laser core, horizontal anamorphic flare streak, multi-point diffraction spikes, and glowing atmospheric halo.',
    tags: ['optical lens flare png', 'anamorphic flare star', 'camera light burst', 'diffraction spike star'],
    searchVolume: '21,000/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 160 120',
    svgContent: `
      <defs>
        <radialGradient id="optCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="30%" stop-color="{{STAR_MAIN}}" stop-opacity="0.85" />
          <stop offset="75%" stop-color="{{STAR_MAIN}}" stop-opacity="0.2" />
          <stop offset="100%" stop-color="{{STAR_MAIN}}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="optStreak" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="{{STAR_MAIN}}" stop-opacity="0" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.95" />
          <stop offset="100%" stop-color="{{STAR_MAIN}}" stop-opacity="0" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="60" r="32" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" opacity="0.4" stroke-dasharray="6 4" />
      <line x1="80" y1="5" x2="80" y2="115" stroke="{{STAR_MAIN}}" stroke-width="2" opacity="0.85" />
      <polygon points="78,10 82,10 84,60 82,110 78,110 76,60" fill="{{STAR_MAIN}}" opacity="0.3" />
      <line x1="30" y1="22" x2="130" y2="98" stroke="{{STAR_MAIN}}" stroke-width="1.2" opacity="0.6" />
      <line x1="130" y1="22" x2="30" y2="98" stroke="{{STAR_MAIN}}" stroke-width="1.2" opacity="0.6" />
      <ellipse cx="80" cy="60" rx="75" ry="3.5" fill="url(#optStreak)" />
      <circle cx="80" cy="60" r="26" fill="url(#optCoreGlow)" />
      <circle cx="80" cy="60" r="6" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: 'stardust-galaxy-starburst-cluster',
    title: 'Stardust Galaxy Starburst Cluster PNG',
    slug: 'stardust-galaxy-cluster-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    level: 'high',
    description: 'Radiant celestial stardust explosion cluster packed with 30+ glistening micro-stars, diamond sparkles, and cosmic dust clouds. Perfect for magical overlays and fantasy game visuals.',
    tags: ['stardust cluster png', 'galaxy sparkle star', 'glitter burst png', 'magic dust explosion'],
    searchVolume: '16,700/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 120 120',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M60 20 C60 46 74 60 100 60 C74 60 60 74 60 100 C60 74 46 60 20 60 C46 60 60 46 60 20 Z" />
      <path fill="#ffffff" opacity="0.8" d="M60 35 C60 52 68 60 85 60 C68 60 60 68 60 85 C60 68 52 60 35 60 C52 60 60 52 60 35 Z" />
      <polygon fill="{{STAR_LIGHT}}" points="25,25 28,33 36,36 28,39 25,47 22,39 14,36 22,33" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="95,25 97,31 103,33 97,35 95,41 93,35 87,33 93,31" />
      <polygon fill="{{STAR_LIGHT}}" points="95,95 97,101 103,103 97,105 95,111 93,105 87,103 93,101" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="25,95 27,101 33,103 27,105 25,111 23,105 17,103 23,101" />
      <circle cx="42" cy="28" r="2.5" fill="#ffffff" />
      <circle cx="78" cy="26" r="2" fill="{{STAR_HIGHLIGHT}}" />
      <circle cx="88" cy="52" r="2.5" fill="#ffffff" />
      <circle cx="32" cy="72" r="3" fill="{{STAR_LIGHT}}" />
      <circle cx="72" cy="88" r="2" fill="#ffffff" />
      <circle cx="50" cy="15" r="1.5" fill="{{STAR_MAIN}}" />
      <circle cx="68" cy="105" r="1.8" fill="{{STAR_HIGHLIGHT}}" />
      <circle cx="15" cy="60" r="2" fill="#ffffff" />
      <circle cx="105" cy="62" r="2" fill="{{STAR_MAIN}}" />
    `,
    featured: true,
  },
  {
    id: 'frosted-glassmorphism-star',
    level: 'high',
    title: 'Frosted Glassmorphism Crystal Star PNG',
    slug: 'frosted-glassmorphism-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Futuristic frosted glassmorphism star with translucent refractive glass surface, chromatic aberration bevel border, and soft diffuse inner glow. Designed for modern macOS/iOS UI mockups.',
    tags: ['glassmorphism star png', 'frosted glass star', 'crystal star transparent', 'translucent 3d star'],
    searchVolume: '13,500/mo',
    defaultColor: '#60A5FA',
    viewBox: '0 0 100 100',
    svgContent: `
      <defs>
        <linearGradient id="glassBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
          <stop offset="40%" stop-color="{{STAR_MAIN}}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="glassFill" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
          <stop offset="50%" stop-color="{{STAR_MAIN}}" stop-opacity="0.2" />
          <stop offset="100%" stop-color="{{STAR_DARK}}" stop-opacity="0.35" />
        </linearGradient>
      </defs>
      <polygon fill="url(#glassFill)" stroke="url(#glassBorder)" stroke-width="2.5" stroke-linejoin="round" points="50,8 62,35 94,35 68,55 78,85 50,66 22,85 32,55 6,35 38,35" />
      <path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.75" d="M50 18 L58 36 L78 37" />
      <circle cx="50" cy="50" r="6" fill="#ffffff" opacity="0.5" />
    `,
    featured: false,
  },
  {
    id: 'hollywood-walk-of-fame-star',
    title: 'Hollywood Walk of Fame Star Plaque PNG',
    slug: 'hollywood-walk-of-fame-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    level: 'high',
    description: 'Iconic Hollywood Walk of Fame sidewalk star plaque featuring charcoal terrazzo stone border, brass polished rim, and coral pink star plate. Classic emblem for celebrity and cinema graphics.',
    tags: ['hollywood star png', 'walk of fame star', 'celebrity star plaque', 'cinema star badge'],
    searchVolume: '17,800/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 100 100',
    svgContent: `
      <rect x="4" y="4" width="92" height="92" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1.5" />
      <polygon fill="none" stroke="#F59E0B" stroke-width="3" stroke-linejoin="round" points="50,10 61,36 90,36 67,54 75,82 50,65 25,82 33,54 10,36 39,36" />
      <polygon fill="#FB7185" points="50,12 60,37 87,37 65,53 73,79 50,63 27,79 35,53 13,37 40,37" />
      <circle cx="50" cy="52" r="10" fill="#F59E0B" stroke="#D97706" stroke-width="1" />
      <polygon fill="#1E293B" points="50,45 52,50 57,50 53,53 55,58 50,55 45,58 47,53 43,50 48,50" />
    `,
    featured: false,
  },
  {
    id: 'moravian-polyhedral-3d-star',
    title: 'Moravian 3D Bethlehem Star Ornament PNG',
    slug: 'moravian-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    level: 'high',
    description: 'Exquisite 26-point Moravian Bethlehem star ornament PNG with polyhedral volumetric spikes and illuminated core. Popular for Christmas holiday banners, church programs, and winter decor.',
    tags: ['moravian star png', 'bethlehem star 3d', 'christmas star ornament', 'polyhedral star'],
    searchVolume: '10,600/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 100 100',
    svgContent: `
      <g opacity="0.75">
        <polygon points="50,50 20,20 28,45" fill="#D97706" />
        <polygon points="50,50 20,20 45,28" fill="#F59E0B" />
        <polygon points="50,50 80,20 72,45" fill="#B45309" />
        <polygon points="50,50 80,20 55,28" fill="#D97706" />
        <polygon points="50,50 80,80 72,55" fill="#78350F" />
        <polygon points="50,50 80,80 55,72" fill="#92400E" />
        <polygon points="50,50 20,80 28,55" fill="#B45309" />
        <polygon points="50,50 20,80 45,72" fill="#D97706" />
      </g>
      <polygon points="50,50 50,5 42,42" fill="#FEF08A" />
      <polygon points="50,50 50,5 58,42" fill="#F59E0B" />
      <polygon points="50,50 95,50 58,42" fill="#FBBF24" />
      <polygon points="50,50 95,50 58,58" fill="#D97706" />
      <polygon points="50,50 50,95 58,58" fill="#B45309" />
      <polygon points="50,50 50,95 42,58" fill="#78350F" />
      <polygon points="50,50 5,50 42,58" fill="#D97706" />
      <polygon points="50,50 5,50 42,42" fill="#FDE047" />
      <polygon points="50,42 58,50 50,58 42,50" fill="#ffffff" opacity="0.9" />
    `,
    featured: false,
  },
  {
    id: "cute-teddy-bear-hugging-star",
    title: "Cute Teddy Bear Hugging Star PNG",
    slug: "cute-teddy-bear-star-png",
    category: "characters",
    categoryName: "Star Bears & Mascots",
    level: "moderate",
    animationType: "float",
    
    description: "Adorable plush brown teddy bear tightly hugging a glowing golden star with blushing rosy cheeks. Essential clipart for nursery room decor, baby shower cards, and children storybooks.",
    tags: ["bear with star png","teddy bear star","cute bear holding star","kawaii bear star clipart","nursery bear star"],
    searchVolume: "15,500/mo",
    defaultColor: "#D97706",
    viewBox: "0 0 120 120",
    svgContent: `
      <!-- Teddy Bear Ears -->
      <circle cx="36" cy="32" r="14" fill="#B45309" />
      <circle cx="36" cy="32" r="8" fill="#FDE68A" />
      <circle cx="84" cy="32" r="14" fill="#B45309" />
      <circle cx="84" cy="32" r="8" fill="#FDE68A" />
      <!-- Bear Head -->
      <ellipse cx="60" cy="52" rx="34" ry="30" fill="#B45309" />
      <!-- Muzzle / Snout -->
      <ellipse cx="60" cy="58" rx="14" ry="11" fill="#FDE68A" />
      <ellipse cx="60" cy="54" rx="5" ry="3.5" fill="#451A03" />
      <path fill="none" stroke="#451A03" stroke-width="2" stroke-linecap="round" d="M60 57.5 L60 62 M56 62 Q60 66 64 62" />
      <!-- Eyes & Blushing Cheeks -->
      <circle cx="46" cy="48" r="3.5" fill="#451A03" />
      <circle cx="45" cy="46.5" r="1.2" fill="#ffffff" />
      <circle cx="74" cy="48" r="3.5" fill="#451A03" />
      <circle cx="73" cy="46.5" r="1.2" fill="#ffffff" />
      <ellipse cx="38" cy="57" rx="5" ry="3" fill="#F43F5E" opacity="0.65" />
      <ellipse cx="82" cy="57" rx="5" ry="3" fill="#F43F5E" opacity="0.65" />
      <!-- Bear Body -->
      <ellipse cx="60" cy="88" rx="28" ry="24" fill="#B45309" />
      <ellipse cx="60" cy="90" rx="16" ry="14" fill="#FDE68A" />
      <!-- Hugged Golden Star in Center -->
      <polygon fill="{{STAR_MAIN}}" points="60,65 65,77 78,78 68,87 72,99 60,92 48,99 52,87 42,78 55,77" filter="drop-shadow(0 0 6px rgba(245,158,11,0.5))" />
      <circle cx="60" cy="84" r="3" fill="#ffffff" opacity="0.75" />
      <!-- Bear Hugging Paws Clamping the Star -->
      <ellipse cx="44" cy="80" rx="9" ry="7" fill="#B45309" transform="rotate(25 44 80)" />
      <ellipse cx="44" cy="80" rx="5" ry="4" fill="#FDE68A" transform="rotate(25 44 80)" />
      <ellipse cx="76" cy="80" rx="9" ry="7" fill="#B45309" transform="rotate(-25 76 80)" />
      <ellipse cx="76" cy="80" rx="5" ry="4" fill="#FDE68A" transform="rotate(-25 76 80)" />
      <!-- Feet -->
      <ellipse cx="40" cy="108" rx="10" ry="7" fill="#B45309" />
      <ellipse cx="40" cy="108" rx="6" ry="4" fill="#FDE68A" />
      <ellipse cx="80" cy="108" rx="10" ry="7" fill="#B45309" />
      <ellipse cx="80" cy="108" rx="6" ry="4" fill="#FDE68A" />
    `,
    featured: true,
  },
  {
    id: "sleeping-bear-on-crescent-moon",
    title: "Sleeping Bear on Crescent Moon with Stars PNG",
    slug: "sleeping-bear-moon-stars-png",
    category: "characters",
    categoryName: "Star Bears & Mascots",
    level: "moderate",
    animationType: "float",
    
    description: "Chubby baby teddy bear sound asleep on a smiling golden crescent moon surrounded by twinkling stars and night clouds. Perfect for baby nursery prints, nightlights, and lullaby videos.",
    tags: ["sleeping bear on moon","bear moon stars png","goodnight bear star","nursery lullaby bear","baby shower bear star"],
    searchVolume: "12,800/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 120 120",
    svgContent: `
      <!-- Crescent Moon -->
      <path fill="{{STAR_MAIN}}" d="M75 10 C45 15 25 42 25 72 C25 102 50 115 75 118 C40 108 42 35 75 10 Z" />
      <!-- Sleeping Bear on Moon Curve -->
      <g transform="translate(38, 48) rotate(-15)">
        <circle cx="8" cy="4" r="5" fill="#92400E" />
        <ellipse cx="18" cy="14" rx="12" ry="10" fill="#B45309" />
        <ellipse cx="28" cy="18" rx="14" ry="11" fill="#B45309" />
        <path fill="none" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" d="M12 14 Q15 17 18 14" />
        <!-- Sleeping Nightcap -->
        <path fill="#3B82F6" d="M10 6 Q20 -6 32 4 L22 10 Z" />
        <circle cx="33" cy="4" r="3" fill="#ffffff" />
        <!-- Paw clutching little star -->
        <ellipse cx="24" cy="22" rx="4" ry="3" fill="#B45309" />
        <polygon fill="#FEF08A" points="28,22 30,25 34,25 31,28 32,31 29,29 26,31 27,28 24,25 28,25" />
      </g>
      <!-- Floating Dangling Stars -->
      <polygon fill="#FEF08A" points="92,20 94,26 100,26 95,29 97,35 92,31 87,35 89,29 84,26 90,26" />
      <polygon fill="#FEF08A" points="85,60 86.5,64 91,64 87.5,66.5 89,71 85,68 81,71 82.5,66.5 79,64 83.5,64" />
      <polygon fill="#FEF08A" points="95,85 96.5,89 101,89 97.5,91.5 99,96 95,93 91,96 92.5,91.5 89,89 93.5,89" />
      <!-- Soft Night Cloud at Base -->
      <path fill="#ffffff" opacity="0.85" d="M15 110 C15 102 22 96 30 96 C33 96 36 97 38 99 C42 93 50 93 55 98 C58 96 62 96 65 99 C70 95 78 96 82 102 C86 102 90 106 90 110 Z" />
    `,
    featured: true,
  },
  {
    id: "kawaii-bunny-reaching-star",
    title: "Kawaii Bunny Reaching for Star PNG",
    slug: "kawaii-bunny-star-png",
    category: "characters",
    categoryName: "Star Bears & Mascots",
    level: "basic",
    animationType: "float",
    
    description: "Charming white kawaii bunny rabbit standing on tiptoes reaching upward toward a sparkling magic star. Sweet anime pastel graphic for Easter cards, digital planning stickers, and baby apparel.",
    tags: ["bunny star png","rabbit reaching star","kawaii animal star","cute bunny clipart","rabbit wishing on a star"],
    searchVolume: "8,900/mo",
    defaultColor: "#EC4899",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- Big Glowing Wish Star -->
      <polygon fill="#F59E0B" points="50,6 54,16 65,16 56,23 59,33 50,27 41,33 44,23 35,16 46,16" filter="drop-shadow(0 0 4px rgba(245,158,11,0.6))" />
      <circle cx="50" cy="20" r="2.5" fill="#ffffff" />
      <!-- Sparkle Rays around Star -->
      <line x1="50" y1="0" x2="50" y2="4" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
      <line x1="68" y1="12" x2="72" y2="10" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" />
      <line x1="32" y1="12" x2="28" y2="10" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" />
      <!-- Bunny Long Ears -->
      <ellipse cx="44" cy="42" rx="4.5" ry="14" fill="#ffffff" stroke="#1E293B" stroke-width="2" transform="rotate(-8 44 42)" />
      <ellipse cx="44" cy="42" rx="2" ry="9" fill="#FBCFE8" transform="rotate(-8 44 42)" />
      <ellipse cx="56" cy="42" rx="4.5" ry="14" fill="#ffffff" stroke="#1E293B" stroke-width="2" transform="rotate(8 56 42)" />
      <ellipse cx="56" cy="42" rx="2" ry="9" fill="#FBCFE8" transform="rotate(8 56 42)" />
      <!-- Bunny Head -->
      <ellipse cx="50" cy="58" rx="16" ry="13" fill="#ffffff" stroke="#1E293B" stroke-width="2" />
      <path fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round" d="M42 58 Q45 55 48 58" />
      <path fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round" d="M52 58 Q55 55 58 58" />
      <polygon points="50,62 48.5,60 51.5,60" fill="#EC4899" />
      <circle cx="39" cy="62" r="3" fill="#FBCFE8" />
      <circle cx="61" cy="62" r="3" fill="#FBCFE8" />
      <!-- Bunny Body Reaching Up -->
      <ellipse cx="50" cy="80" rx="14" ry="15" fill="#ffffff" stroke="#1E293B" stroke-width="2" />
      <ellipse cx="44" cy="66" rx="3.5" ry="7" fill="#ffffff" stroke="#1E293B" stroke-width="1.8" transform="rotate(-20 44 66)" />
      <ellipse cx="56" cy="66" rx="3.5" ry="7" fill="#ffffff" stroke="#1E293B" stroke-width="1.8" transform="rotate(20 56 66)" />
      <ellipse cx="43" cy="94" rx="5" ry="3.5" fill="#ffffff" stroke="#1E293B" stroke-width="1.8" />
      <ellipse cx="57" cy="94" rx="5" ry="3.5" fill="#ffffff" stroke="#1E293B" stroke-width="1.8" />
      <circle cx="64" cy="85" r="4.5" fill="#ffffff" stroke="#1E293B" stroke-width="1.5" />
    `,
    featured: false,
  },
  {
    id: "crescent-moon-sleeping-star",
    title: "Crescent Moon Cradling Sleeping Star PNG",
    slug: "crescent-moon-sleeping-star-png",
    category: "celestial",
    categoryName: "Moon & Celestial",
    level: "moderate",
    animationType: "float",
    
    description: "Dreamy golden crescent moon gently cradling a sleeping star wearing a striped nightcap. Iconic bedtime celestial art for storybooks, nursery wall murals, and baby shower stationery.",
    tags: ["star moon png","crescent moon sleeping star","moon and stars transparent","celestial bedtime star","night sky lullaby"],
    searchVolume: "36,000/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- Crescent Moon -->
      <path fill="{{STAR_MAIN}}" d="M60 8 C36 12 20 34 20 58 C20 82 40 92 60 94 C32 86 34 28 60 8 Z" />
      <!-- Sleeping Star Resting in Moon's Curve -->
      <g transform="translate(36, 44)">
        <polygon fill="#FEF08A" points="20,5 24,15 35,16 26,24 29,34 20,28 11,34 14,24 5,16 16,15" />
        <path fill="none" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" d="M15 20 Q18 24 21 20" />
        <path fill="none" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" d="M23 20 Q26 24 29 20" />
        <ellipse cx="14" cy="24" rx="2.5" ry="1.5" fill="#F43F5E" opacity="0.7" />
        <ellipse cx="30" cy="24" rx="2.5" ry="1.5" fill="#F43F5E" opacity="0.7" />
        <path fill="#3B82F6" d="M12 15 Q20 2 34 10 L26 18 Z" />
        <line x1="16" y1="13" x2="22" y2="7" stroke="#ffffff" stroke-width="2" />
        <line x1="22" y1="16" x2="28" y2="10" stroke="#ffffff" stroke-width="2" />
        <circle cx="35" cy="10" r="3" fill="#ffffff" />
      </g>
      <polygon fill="#FEF08A" points="75,22 76.5,25.5 80,25.5 77,27.5 78.5,31 75,29 71.5,31 73,27.5 70,25.5 73.5,25.5" />
      <polygon fill="#FEF08A" points="78,58 79,61 82,61 79.5,63 80.5,66 78,64.5 75.5,66 76.5,63 74,61 77,61" />
    `,
    featured: true,
  },
  {
    id: "cloud-hanging-stars-mobile",
    title: "Nursery Cloud with Hanging Stars PNG",
    slug: "cloud-hanging-stars-png",
    category: "celestial",
    categoryName: "Moon & Celestial",
    level: "basic",
    animationType: "float",
    
    description: "Soft fluffy white nursery cloud with hanging golden stars suspended by delicate strings. Standard graphic for baby shower invitations, crib decor, and lullaby videos.",
    tags: ["cloud with hanging stars","cloud and stars png","nursery star mobile","baby room stars","hanging stars transparent"],
    searchVolume: "24,500/mo",
    defaultColor: "#EAB308",
    viewBox: "0 0 120 100",
    svgContent: `
      <path fill="#ffffff" stroke="#CBD5E1" stroke-width="2" stroke-linejoin="round" d="M30 45 C20 45 12 53 12 62 C12 72 21 80 32 80 L92 80 C102 80 110 72 110 62 C110 54 104 47 96 45 C95 34 85 26 74 26 C67 26 61 29 57 34 C53 30 46 28 40 32 C34 36 31 40 30 45 Z" />
      <path fill="none" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" d="M48 55 Q52 59 56 55" />
      <path fill="none" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" d="M64 55 Q68 59 72 55" />
      <ellipse cx="44" cy="60" rx="3" ry="2" fill="#FBCFE8" />
      <ellipse cx="76" cy="60" rx="3" ry="2" fill="#FBCFE8" />
      <line x1="32" y1="80" x2="32" y2="92" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="2 2" />
      <polygon fill="{{STAR_MAIN}}" points="32,88 34,92 38,92 35,94.5 36,98 32,96 28,98 29,94.5 26,92 30,92" />
      <line x1="50" y1="80" x2="50" y2="96" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="2 2" />
      <polygon fill="{{STAR_MAIN}}" points="50,91 52.5,96 58,96 53.5,99.5 55,105 50,102 45,105 46.5,99.5 42,96 47.5,96" />
      <line x1="72" y1="80" x2="72" y2="92" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="2 2" />
      <polygon fill="{{STAR_MAIN}}" points="72,88 74,92 78,92 75,94.5 76,98 72,96 68,98 69,94.5 66,92 70,92" />
      <line x1="90" y1="80" x2="90" y2="96" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="2 2" />
      <polygon fill="{{STAR_MAIN}}" points="90,91 92.5,96 98,96 93.5,99.5 95,105 90,102 85,105 86.5,99.5 82,96 87.5,96" />
    `,
    featured: false,
  },
  {
    id: "circular-star-wreath-avatar-frame",
    title: "Circular Star Wreath Avatar Frame PNG",
    slug: "star-wreath-avatar-frame-png",
    category: "frames",
    categoryName: "Frames & Borders",
    level: "moderate",
    animationType: "spin",
    
    description: "Circular wreath ring frame forged from sparkling diamond stars and geometric compass points. Perfect transparent border overlay for Discord avatars, Twitch icons, and Instagram profile pictures.",
    tags: ["star frame png","star circle frame","avatar star border","profile star ring","star wreath png"],
    searchVolume: "21,500/mo",
    defaultColor: "#EAB308",
    viewBox: "0 0 120 120",
    svgContent: `
      <circle cx="60" cy="60" r="44" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-dasharray="6 4" opacity="0.75" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="{{STAR_LIGHT}}" stroke-width="1" opacity="0.4" />
      <polygon fill="{{STAR_MAIN}}" points="60,6 63,14 71,15 65,20 67,28 60,23 53,28 55,20 49,15 57,14" />
      <polygon fill="{{STAR_MAIN}}" points="60,114 63,106 71,105 65,100 67,92 60,97 53,92 55,100 49,105 57,106" />
      <polygon fill="{{STAR_MAIN}}" points="114,60 106,63 105,71 100,65 92,67 97,60 92,53 100,55 105,49 106,57" />
      <polygon fill="{{STAR_MAIN}}" points="6,60 14,63 15,71 20,65 28,67 23,60 28,53 20,55 15,49 14,57" />
      <polygon fill="{{STAR_LIGHT}}" points="95,25 97,31 103,32 98,36 100,42 95,38 90,42 92,36 87,32 93,31" />
      <polygon fill="{{STAR_LIGHT}}" points="25,95 27,89 33,88 28,84 30,78 25,82 20,78 22,84 17,88 23,89" />
      <polygon fill="{{STAR_LIGHT}}" points="95,95 89,97 88,103 84,98 78,100 82,95 78,90 84,92 88,87 89,93" />
      <polygon fill="{{STAR_LIGHT}}" points="25,25 31,27 32,33 36,28 42,30 38,25 42,20 36,22 32,17 31,23" />
      <circle cx="78" cy="18" r="2.5" fill="#ffffff" />
      <circle cx="18" cy="78" r="2.5" fill="#ffffff" />
      <circle cx="102" cy="78" r="2.5" fill="#ffffff" />
      <circle cx="18" cy="42" r="2.5" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: "polaroid-scattered-stars-frame",
    title: "Polaroid Star Photo Frame PNG",
    slug: "polaroid-star-photo-frame-png",
    category: "frames",
    categoryName: "Frames & Borders",
    level: "basic",
    
    
    description: "Vintage white Polaroid instant photo frame accented with whimsical gold and pastel sparkle stars along its borders. Drag-and-drop frame for Canva, scrapbooks, and photo collages.",
    tags: ["polaroid star frame","photo frame stars png","aesthetic picture frame stars","instant photo star border"],
    searchVolume: "16,000/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 120",
    svgContent: `
      <rect x="5" y="5" width="90" height="110" rx="4" fill="#ffffff" stroke="#E2E8F0" stroke-width="2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.06))" />
      <rect x="14" y="14" width="72" height="72" rx="2" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 3" />
      <polygon fill="{{STAR_MAIN}}" points="12,10 13.5,13.5 17,14 14.5,16 15,19.5 12,18 9,19.5 9.5,16 7,14 10.5,13.5" />
      <circle cx="19" cy="8" r="1.5" fill="{{STAR_HIGHLIGHT}}" />
      <polygon fill="#EC4899" points="88,12 89.5,15.5 93,16 90.5,18 91,21.5 88,20 85,21.5 85.5,18 83,16 86.5,15.5" />
      <circle cx="82" cy="10" r="1.2" fill="#3B82F6" />
      <polygon fill="{{STAR_MAIN}}" points="78,96 80,100 84,100.5 81,102.5 82,106.5 78,104.5 74,106.5 75,102.5 72,100.5 76,100" />
      <polygon fill="#3B82F6" points="22,98 23.5,101.5 27,102 24.5,104 25,107.5 22,106 19,107.5 19.5,104 17,102 20.5,101.5" />
      <circle cx="50" cy="102" r="2" fill="{{STAR_MAIN}}" />
      <circle cx="36" cy="104" r="1.5" fill="#EC4899" />
      <circle cx="64" cy="100" r="1.5" fill="#10B981" />
    `,
    featured: false,
  },
  {
    id: "hanging-star-garland-bunting",
    title: "Hanging Star Garland Party Banner PNG",
    slug: "star-garland-bunting-png",
    category: "frames",
    categoryName: "Frames & Borders",
    level: "basic",
    
    
    description: "Festive horizontal hanging party garland banner with metallic gold stars suspended on a draped string. Essential banner for birthdays, Christmas celebrations, and New Year party graphics.",
    tags: ["star garland png","star bunting banner","hanging star garland transparent","party star border"],
    searchVolume: "14,300/mo",
    defaultColor: "#EAB308",
    viewBox: "0 0 160 60",
    svgContent: `
      <path fill="none" stroke="#94A3B8" stroke-width="1.5" d="M0 8 Q40 25 80 8 Q120 25 160 8" />
      <line x1="20" y1="14" x2="20" y2="28" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_MAIN}}" points="20,25 22,30 27,30 23,33 24.5,38 20,35 15.5,38 17,33 13,30 18,30" />
      <line x1="40" y1="18" x2="40" y2="36" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="40,32 42.5,38 48,38 44,42 46,47 40,44 34,47 36,42 32,38 37.5,38" />
      <line x1="60" y1="14" x2="60" y2="26" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_MAIN}}" points="60,23 62,28 67,28 63,31 64.5,36 60,33 55.5,36 57,31 53,28 58,28" />
      <line x1="80" y1="8" x2="80" y2="34" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_MAIN}}" points="80,30 83,37 90,37 85,42 87,48 80,45 73,48 75,42 70,37 77,37" />
      <line x1="100" y1="14" x2="100" y2="26" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_MAIN}}" points="100,23 102,28 107,28 103,31 104.5,36 100,33 95.5,36 97,31 93,28 98,28" />
      <line x1="120" y1="18" x2="120" y2="36" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_HIGHLIGHT}}" points="120,32 122.5,38 128,38 124,42 126,47 120,44 114,47 116,42 112,38 117.5,38" />
      <line x1="140" y1="14" x2="140" y2="28" stroke="#94A3B8" stroke-width="1" />
      <polygon fill="{{STAR_MAIN}}" points="140,25 142,30 147,30 143,33 144.5,38 140,35 135.5,38 137,33 133,30 138,30" />
    `,
    featured: false,
  },
  {
    id: "die-cut-kawaii-star-sticker",
    title: "Die-Cut Kawaii Star Sticker PNG",
    slug: "kawaii-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "twinkle",
    
    description: "Charming pastel yellow star sticker with a thick white die-cut decal border, soft drop shadow, cute anime smile, and blushing cheeks. Optimized for GoodNotes planners and Cricut cutting.",
    tags: ["star sticker png","kawaii star sticker","die cut star decal","white border star sticker","planner star sticker"],
    searchVolume: "32,000/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 100 100",
    svgContent: `
      <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="2" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))" />
      <polygon fill="{{STAR_MAIN}}" points="50,10 61,35 91,35 66,54 75,82 50,65 25,82 34,54 9,35 39,35" />
      <ellipse cx="40" cy="48" rx="4" ry="5.5" fill="#1E293B" />
      <circle cx="38.5" cy="46" r="1.8" fill="#ffffff" />
      <ellipse cx="60" cy="48" rx="4" ry="5.5" fill="#1E293B" />
      <circle cx="58.5" cy="46" r="1.8" fill="#ffffff" />
      <ellipse cx="33" cy="56" rx="5" ry="3" fill="#FB7185" opacity="0.85" />
      <ellipse cx="67" cy="56" rx="5" ry="3" fill="#FB7185" opacity="0.85" />
      <path fill="#1E293B" d="M46 54 Q50 63 54 54 Z" />
      <ellipse cx="38" cy="28" rx="5" ry="2.5" fill="#ffffff" opacity="0.75" transform="rotate(-30 38 28)" />
    `,
    featured: true,
  },
  {
    id: "holographic-y2k-star-sticker",
    title: "Holographic Y2K Cyber Star Sticker PNG",
    slug: "holographic-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "twinkle",
    
    description: "Retro 2000s holographic foil star sticker with white vinyl die-cut border, iridescent rainbow chrome sheen, and 4-point cyber needles. Trending sticker for Gen-Z streetwear and music artwork.",
    tags: ["holographic star sticker","y2k star decal","chrome star sticker","rainbow foil star png"],
    searchVolume: "23,000/mo",
    defaultColor: "#38BDF8",
    viewBox: "0 0 100 100",
    svgContent: `
      <defs>
        <linearGradient id="holoFoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="25%" stop-color="#EC4899" />
          <stop offset="50%" stop-color="#FACC15" />
          <stop offset="75%" stop-color="#A855F7" />
          <stop offset="100%" stop-color="#10B981" />
        </linearGradient>
      </defs>
      <path fill="#ffffff" stroke="#CBD5E1" stroke-width="2" d="M50 2 C50 26 58 36 82 42 C82 42 98 46 98 50 C98 54 82 58 82 58 C58 64 50 74 50 98 C50 98 46 98 46 98 C46 74 38 64 14 58 C14 58 2 54 2 50 C2 46 14 42 14 42 C38 36 46 26 46 2 Z" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
      <path fill="url(#holoFoilGrad)" d="M50 8 C50 30 56 40 78 45 C78 45 92 48 92 50 C92 52 78 55 78 55 C56 60 50 70 50 92 C50 70 44 60 22 55 C22 55 8 52 8 50 C8 48 22 45 22 45 C44 40 50 30 50 8 Z" />
      <polygon fill="#ffffff" opacity="0.65" points="50,14 52,38 76,46 52,50 50,74 48,50 24,46 48,38" />
      <circle cx="50" cy="50" r="4" fill="#ffffff" />
    `,
    featured: true,
  },
  {
    id: "winking-kawaii-star-sticker",
    title: "Winking Kawaii Star Sticker PNG",
    slug: "winking-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "twinkle",
    description: "Playful winking kawaii star sticker with thick die-cut white border, sparkling star pupil eye, winking arc, and rosy blushing cheeks. Popular for digital scrapbooking and chat emojis.",
    tags: ["winking star sticker","kawaii star png","wink star emoji","cute star sticker","die cut star decal"],
    searchVolume: "28,500/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Border with Drop Shadow -->
      <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="2.5" stroke-linejoin="round" points="50,3 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))" />
      <!-- Star Body -->
      <polygon fill="{{STAR_MAIN}}" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round" points="50,9 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
      <!-- Winking Left Eye (Curved Arc) -->
      <path d="M 32 47 Q 38 40 44 47" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Open Sparkling Right Eye -->
      <ellipse cx="62" cy="46" rx="4.5" ry="6" fill="#1E293B" />
      <circle cx="60.5" cy="44" r="1.8" fill="#ffffff" />
      <circle cx="64" cy="48" r="1" fill="#ffffff" />
      <!-- Rosy Blush Cheeks -->
      <ellipse cx="30" cy="54" rx="5" ry="3" fill="#FB7185" opacity="0.85" />
      <ellipse cx="70" cy="54" rx="5" ry="3" fill="#FB7185" opacity="0.85" />
      <!-- Smiling Tongue Mouth -->
      <path fill="#EF4444" stroke="#1E293B" stroke-width="2" stroke-linecap="round" d="M 47 53 Q 50 63 53 53 Z" />
      <!-- Specular Pill Highlight -->
      <ellipse cx="37" cy="26" rx="5.5" ry="2.5" fill="#ffffff" opacity="0.85" transform="rotate(-30 37 26)" />
    `,
    featured: true
  },
  {
    id: "sleeping-star-cloud-sticker",
    title: "Sleeping Star on Fluffy Cloud Sticker PNG",
    slug: "sleeping-star-on-cloud-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Peaceful sleeping pastel star wearing a cozy nightcap resting on a puffy white cloud. Beautiful sticker for baby nursery stationery, goodnight cards, and dream journals.",
    tags: ["sleeping star sticker","star on cloud png","nursery star decal","baby star sticker","nightcap star png"],
    searchVolume: "24,000/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Border -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.13))">
        <!-- Cloud Base -->
        <path d="M 16 75 A 12 12 0 0 1 30 63 A 16 16 0 0 1 58 59 A 14 14 0 0 1 80 65 A 12 12 0 0 1 84 82 L 18 82 Z" fill="#ffffff" stroke="#CBD5E1" stroke-width="2" />
        <path d="M 22 76 A 8 8 0 0 1 32 68 A 12 12 0 0 1 56 65 A 10 10 0 0 1 76 71 A 8 8 0 0 1 80 80 L 22 80 Z" fill="#F8FAFC" />
        <!-- Sleeping Star Silhouette -->
        <polygon fill="{{STAR_MAIN}}" stroke="#2C3E50" stroke-width="2" stroke-linejoin="round" points="50,15 58,35 80,36 62,50 69,72 50,58 31,72 38,50 20,36 42,35" />
        <!-- Nightcap (Cozy Sleep Cap) -->
        <path d="M 44 26 C 42 16, 26 12, 20 18 C 16 22, 24 28, 36 28 Z" fill="#6366F1" stroke="#2C3E50" stroke-width="1.5" />
        <circle cx="19" cy="18" r="4" fill="#ffffff" stroke="#2C3E50" stroke-width="1.5" />
        <!-- Closed Peaceful Curved Eyes -->
        <path d="M 39 46 Q 43 51 47 46" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M 53 46 Q 57 51 61 46" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Soft Blush Dots -->
        <circle cx="36" cy="51" r="3" fill="#FB7185" opacity="0.8" />
        <circle cx="64" cy="51" r="3" fill="#FB7185" opacity="0.8" />
        <!-- Peaceful Smile -->
        <path d="M 47 52 Q 50 55 53 52" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>
    `,
    featured: true
  },
  {
    id: "cool-sunglasses-star-sticker",
    title: "Cool Sunglasses Star Sticker PNG",
    slug: "cool-sunglasses-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "pulse",
    description: "Sleek cool star sticker rocking dark sunglasses with white reflection glare and a confident smirk. Fun sticker for summer camp badges, gaming achievements, and stickers.",
    tags: ["cool star sticker","star with sunglasses png","sunglasses star decal","shades star png"],
    searchVolume: "21,200/mo",
    defaultColor: "#FBBF24",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Contour -->
      <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
      <!-- Star Body -->
      <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" points="50,10 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
      <!-- Black Aviator Sunglasses -->
      <!-- Left Lens -->
      <path d="M 28 42 L 46 42 C 46 54, 32 54, 28 46 Z" fill="#0F172A" stroke="#0F172A" stroke-width="1.5" stroke-linejoin="round" />
      <!-- Right Lens -->
      <path d="M 54 42 L 72 42 C 72 46, 68 54, 54 54 Z" fill="#0F172A" stroke="#0F172A" stroke-width="1.5" stroke-linejoin="round" />
      <!-- Bridge -->
      <line x1="45" y1="44" x2="55" y2="44" stroke="#0F172A" stroke-width="3" stroke-linecap="round" />
      <!-- White Specular Glare Slashes -->
      <line x1="33" y1="44" x2="38" y2="50" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity="0.8" />
      <line x1="59" y1="44" x2="64" y2="50" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity="0.8" />
      <!-- Confident Smirk -->
      <path d="M 45 61 Q 54 64 57 58" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Specular Highlight Top Point -->
      <ellipse cx="37" cy="27" rx="5" ry="2.5" fill="#ffffff" opacity="0.75" transform="rotate(-30 37 27)" />
    `,
    featured: true
  },
  {
    id: "star-struck-sparkling-sticker",
    title: "Star-Struck Sparkling Emoji Sticker PNG",
    slug: "star-struck-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "twinkle",
    description: "Enthusiastic star-struck character sticker with 4-point golden star pupils, beaming wide open smile, and floating magic sparkle dust. Expresses awe and excitement.",
    tags: ["star struck sticker","star eyes emoji png","excited star decal","sparkle eyes star sticker"],
    searchVolume: "26,000/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Base -->
      <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))" />
      <!-- Main Star Body -->
      <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" points="50,10 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
      <!-- Star-Struck Eyes: Left Star Eye -->
      <g transform="translate(36, 45)">
        <polygon fill="#F59E0B" stroke="#B45309" stroke-width="1" points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" />
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
      </g>
      <!-- Right Star Eye -->
      <g transform="translate(64, 45)">
        <polygon fill="#F59E0B" stroke="#B45309" stroke-width="1" points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" />
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
      </g>
      <!-- Big Happy Mouth -->
      <path d="M 43 54 Q 50 68 57 54 Z" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
      <path d="M 46 60 Q 50 65 54 60 Z" fill="#FB7185" />
      <!-- Pink Blush -->
      <ellipse cx="28" cy="54" rx="4.5" ry="3" fill="#FB7185" opacity="0.85" />
      <ellipse cx="72" cy="54" rx="4.5" ry="3" fill="#FB7185" opacity="0.85" />
      <!-- Satellite Sparkle Diamond -->
      <polygon fill="#FBBF24" points="86,22 88,27 93,28 88,29 86,34 84,29 79,28 84,27" />
    `,
    featured: true
  },
  {
    id: "rainbow-trail-shooting-star-sticker",
    title: "Rainbow Trail Shooting Star Sticker PNG",
    slug: "rainbow-shooting-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "shooting",
    description: "Iconic Flaticon bestseller shooting star sticker with a vibrant 4-color curved rainbow swoosh tail, glowing yellow star head, and trail sparkles. Perfect for pride and joy themes.",
    tags: ["rainbow shooting star sticker","shooting star decal","rainbow star png","rainbow streak star"],
    searchVolume: "34,500/mo",
    defaultColor: "#FBBF24",
    viewBox: "0 0 110 100",
    svgContent: `
      <!-- White Die-Cut Backing For Whole Sticker -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- 4 Curved Parallel Rainbow Bands -->
        <!-- Red Band -->
        <path d="M 8 82 C 30 65, 55 52, 75 35 L 82 43 C 60 60, 35 73, 14 90 Z" fill="#F43F5E" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" />
        <!-- Yellow Band -->
        <path d="M 14 90 C 35 73, 60 60, 82 43 L 88 51 C 66 68, 41 81, 20 98 Z" fill="#FACC15" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" />
        <!-- Cyan Band -->
        <path d="M 20 98 C 41 81, 66 68, 88 51 L 94 59 C 72 76, 47 89, 26 106 Z" fill="#38BDF8" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" />
        <!-- Purple Band -->
        <path d="M 26 106 C 47 89, 72 76, 94 59 L 98 65 C 76 82, 51 95, 30 112 Z" fill="#A855F7" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" />
        <!-- Leading Star Head with White Border -->
        <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="2.5" stroke-linejoin="round" points="80,4 88,22 107,22 92,34 98,52 80,41 62,52 68,34 53,22 72,22" />
        <polygon fill="{{STAR_MAIN}}" stroke="#2C3E50" stroke-width="2" stroke-linejoin="round" points="80,9 86,24 102,24 89,34 94,48 80,39 66,48 71,34 58,24 74,24" />
        <!-- Cute Face on Star Head -->
        <circle cx="75" cy="28" r="2" fill="#1E293B" />
        <circle cx="85" cy="28" r="2" fill="#1E293B" />
        <path d="M 78 33 Q 80 37 82 33" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <circle cx="72" cy="32" r="1.8" fill="#FB7185" />
        <circle cx="88" cy="32" r="1.8" fill="#FB7185" />
        <!-- Trail Sparkles -->
        <circle cx="36" cy="50" r="2.5" fill="#FDE047" stroke="#ffffff" stroke-width="1" />
        <circle cx="22" cy="68" r="2" fill="#38BDF8" stroke="#ffffff" stroke-width="1" />
      </g>
    `,
    featured: true
  },
  {
    id: "great-job-reward-star-sticker",
    title: "Great Job Award Ribbon Star Sticker PNG",
    slug: "great-job-reward-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "School teacher praise sticker featuring a scalloped crimson rosette ribbon, gold star medal, and bold curved banner reading 'GREAT JOB'. Classic motivation sticker for kids.",
    tags: ["great job star sticker","reward star sticker","teacher star decal","well done star badge","praise star png"],
    searchVolume: "29,000/mo",
    defaultColor: "#DC2626",
    viewBox: "0 0 100 115",
    svgContent: `
      <!-- White Die-Cut Backing -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Hanging Swallowtail Ribbon Tails -->
        <polygon fill="#B91C1C" points="35,65 24,108 45,95 50,108 45,65" stroke="#ffffff" stroke-width="2" />
        <polygon fill="#991B1B" points="65,65 76,108 55,95 50,108 55,65" stroke="#ffffff" stroke-width="2" />
        <!-- Scalloped Rosette Outer Rim -->
        <circle cx="50" cy="46" r="38" fill="#ffffff" />
        <circle cx="50" cy="46" r="35" fill="{{STAR_MAIN}}" stroke="#991B1B" stroke-width="2" />
        <!-- Inner Gold Rim -->
        <circle cx="50" cy="46" r="26" fill="#FBBF24" stroke="#D97706" stroke-width="2" />
        <circle cx="50" cy="46" r="22" fill="#FEF3C7" />
        <!-- Central Golden Star -->
        <polygon fill="#F59E0B" stroke="#B45309" stroke-width="1.5" points="50,28 54,39 66,40 57,48 61,59 50,52 39,59 43,48 34,40 46,39" />
        <!-- Arched Text Banner -->
        <rect x="15" y="65" width="70" height="18" rx="5" fill="#1E293B" stroke="#ffffff" stroke-width="2" />
        <text x="50" y="77" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="900" fill="#FDE047" text-anchor="middle" letter-spacing="0.5">GREAT JOB!</text>
      </g>
    `,
    featured: true
  },
  {
    id: "number-one-gold-star-medal-sticker",
    title: "#1 First Place Gold Medal Star Sticker PNG",
    slug: "number-one-gold-medal-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "spin",
    description: "First place winner gold star medal sticker with striped blue and red champion neck ribbon, embossed numeral 1, and glossy bevels. Essential for tournaments and sports apps.",
    tags: ["first place star sticker","number one star medal","champion star badge","1st place star decal"],
    searchVolume: "22,800/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 115",
    svgContent: `
      <!-- White Die-Cut Contour with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- Striped Neck Ribbons -->
        <polygon fill="#2563EB" points="30,10 42,10 50,45 38,45" stroke="#ffffff" stroke-width="2" />
        <polygon fill="#DC2626" points="70,10 58,10 50,45 62,45" stroke="#ffffff" stroke-width="2" />
        <polygon fill="#ffffff" points="46,10 54,10 52,45 48,45" />
        <!-- Golden Outer Medallion -->
        <circle cx="50" cy="65" r="36" fill="#ffffff" />
        <circle cx="50" cy="65" r="33" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2.5" />
        <circle cx="50" cy="65" r="27" fill="#FBBF24" />
        <circle cx="50" cy="65" r="23" fill="#D97706" />
        <circle cx="50" cy="65" r="21" fill="#FEF08A" />
        <!-- Bold #1 Text -->
        <text x="50" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="#78350F" text-anchor="middle">1</text>
        <!-- Surrounding 4 Mini Stars -->
        <polygon fill="#F59E0B" points="50,47 51,50 54,50 52,52 53,55 50,53 47,55 48,52 46,50 49,50" />
      </g>
    `,
    featured: true
  },
  {
    id: "magic-wand-star-burst-sticker",
    title: "Magic Wand Star Burst Sticker PNG",
    slug: "magic-wand-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "twinkle",
    description: "Magical fairy tale wand sticker with a diagonal purple handle, glowing golden star tip, and explosive diamond sparkle dust. Ideal for fantasy, witchy, and celebratory graphics.",
    tags: ["magic wand star sticker","fairy wand star decal","star burst wand png","sparkle wand sticker"],
    searchVolume: "25,300/mo",
    defaultColor: "#8B5CF6",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Border with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Tilted Wand Shaft with Striped Grip -->
        <rect x="18" y="65" width="10" height="42" rx="4" transform="rotate(-45 18 65)" fill="{{STAR_MAIN}}" stroke="#ffffff" stroke-width="2.5" />
        <line x1="28" y1="62" x2="33" y2="67" stroke="#ffffff" stroke-width="2" />
        <line x1="35" y1="69" x2="40" y2="74" stroke="#ffffff" stroke-width="2" />
        <!-- Big Radiant Star Wand Top -->
        <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="68,6 77,24 97,24 81,36 87,54 68,43 49,54 55,36 39,24 59,24" />
        <polygon fill="#FBBF24" stroke="#D97706" stroke-width="2" stroke-linejoin="round" points="68,11 75,26 91,26 78,36 83,50 68,41 53,50 58,36 45,26 61,26" />
        <!-- Star Specular & Core -->
        <circle cx="68" cy="32" r="5" fill="#FEF08A" />
        <!-- Floating Sparkle Dust (✦ Diamonds) -->
        <path d="M 32 20 Q 32 26 38 26 Q 32 26 32 32 Q 32 26 26 26 Q 32 26 32 20 Z" fill="#EC4899" stroke="#ffffff" stroke-width="1" />
        <path d="M 88 68 Q 88 73 93 73 Q 88 73 88 78 Q 88 73 83 73 Q 88 73 88 68 Z" fill="#38BDF8" stroke="#ffffff" stroke-width="1" />
        <circle cx="48" cy="14" r="2.5" fill="#FBBF24" stroke="#ffffff" stroke-width="1" />
      </g>
    `,
    featured: true
  },
  {
    id: "retro-90s-doodle-sketch-star-sticker",
    title: "Retro 90s Doodle Sketch Star Sticker PNG",
    slug: "retro-doodle-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "float",
    description: "Quirky 90s notebook doodle star sticker with black ink scribble hatching, hand-drawn orbital planet rings, and whimsical spiral trails. Great for scrapbook journals.",
    tags: ["doodle star sticker","hand drawn star sticker","sketch star decal","90s doodle star png","scribble star"],
    searchVolume: "20,100/mo",
    defaultColor: "#FACC15",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Backing -->
      <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))" />
      <!-- Star Fill -->
      <polygon fill="{{STAR_MAIN}}" points="50,10 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
      <!-- Hand-Drawn Ink Scribble Contour (Irregular Stroke) -->
      <path d="M 50 10 L 62 35 L 92 35 L 67 54 L 77 83 L 50 65 L 23 83 L 33 54 L 8 35 L 38 35 Z" fill="none" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Hatching Scribble Texture Inside Star -->
      <line x1="38" y1="40" x2="48" y2="52" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
      <line x1="44" y1="36" x2="56" y2="50" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
      <line x1="52" y1="38" x2="62" y2="50" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
      <!-- Orbiting Mini Planet with Ring -->
      <g transform="translate(76, 26)">
        <ellipse cx="0" cy="0" rx="7" ry="2.5" fill="none" stroke="#EC4899" stroke-width="1.8" transform="rotate(-20)" />
        <circle cx="0" cy="0" r="4" fill="#A855F7" stroke="#1E1E1E" stroke-width="1.5" />
      </g>
      <!-- Dashed Spiral Swoosh Line -->
      <path d="M 22 75 C 16 85, 28 92, 34 85" fill="none" stroke="#1E1E1E" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round" />
    `,
    featured: false
  },
  {
    id: "broadway-marquee-illuminated-star-sticker",
    title: "Broadway Marquee Light Bulb Star Sticker PNG",
    slug: "marquee-light-bulb-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "high",
    animationType: "pulse",
    description: "Retro Hollywood cinema marquee star sticker framed with 10 glowing incandescent light bulbs on a deep ruby red double-lined frame. Perfect for red carpet and theatre designs.",
    tags: ["marquee star sticker","light bulb star png","broadway star decal","hollywood cinema star","theatre star sticker"],
    searchVolume: "19,400/mo",
    defaultColor: "#DC2626",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Contour with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.18))">
        <!-- Outer Star Red Frame -->
        <polygon fill="{{STAR_MAIN}}" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" />
        <!-- Inner Star Inset Face -->
        <polygon fill="#7F1D1D" stroke="#991B1B" stroke-width="2" points="50,14 61,36 86,36 66,52 74,77 50,61 26,77 34,52 14,36 39,36" />
        <!-- Array of 10 Glowing Light Bulbs along Points & Valleys -->
        <!-- Tip Bulbs -->
        <circle cx="50" cy="12" r="3.5" fill="#FEF08A" stroke="#CA8A04" stroke-width="1" />
        <circle cx="89" cy="35" r="3.5" fill="#FEF08A" stroke="#CA8A04" stroke-width="1" />
        <circle cx="75" cy="79" r="3.5" fill="#FEF08A" stroke="#CA8A04" stroke-width="1" />
        <circle cx="25" cy="79" r="3.5" fill="#FEF08A" stroke="#CA8A04" stroke-width="1" />
        <circle cx="11" cy="35" r="3.5" fill="#FEF08A" stroke="#CA8A04" stroke-width="1" />
        <!-- Valley Bulbs -->
        <circle cx="61" cy="35" r="3" fill="#FDE047" stroke="#CA8A04" stroke-width="1" />
        <circle cx="67" cy="54" r="3" fill="#FDE047" stroke="#CA8A04" stroke-width="1" />
        <circle cx="50" cy="62" r="3" fill="#FDE047" stroke="#CA8A04" stroke-width="1" />
        <circle cx="33" cy="54" r="3" fill="#FDE047" stroke="#CA8A04" stroke-width="1" />
        <circle cx="39" cy="35" r="3" fill="#FDE047" stroke="#CA8A04" stroke-width="1" />
      </g>
    `,
    featured: true
  },
  {
    id: "gift-ribbon-wrapped-star-sticker",
    title: "Gift Ribbon Wrapped Star Sticker PNG",
    slug: "gift-ribbon-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Festive golden star wrapped like a present with cross-tied crimson satin ribbons and a decorative top bow. Charming sticker for Christmas, birthdays, and holiday promotions.",
    tags: ["gift ribbon star sticker","christmas star sticker","present star decal","ribbon bow star png"],
    searchVolume: "18,200/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Gold Star Base -->
        <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" />
        <polygon fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" stroke-linejoin="round" points="50,9 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
        <!-- Vertical Red Ribbon -->
        <rect x="45" y="10" width="10" height="72" fill="#DC2626" stroke="#991B1B" stroke-width="1.5" />
        <!-- Horizontal Red Ribbon -->
        <rect x="10" y="44" width="80" height="10" fill="#DC2626" stroke="#991B1B" stroke-width="1.5" />
        <!-- Gold Ribbon Stitching -->
        <line x1="50" y1="12" x2="50" y2="80" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="2 2" />
        <line x1="12" y1="49" x2="88" y2="49" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="2 2" />
        <!-- Central Decorative Ribbon Bow -->
        <ellipse cx="43" cy="45" rx="7" ry="5" fill="#EF4444" stroke="#991B1B" stroke-width="1.5" transform="rotate(-30 43 45)" />
        <ellipse cx="57" cy="45" rx="7" ry="5" fill="#EF4444" stroke="#991B1B" stroke-width="1.5" transform="rotate(30 57 45)" />
        <circle cx="50" cy="49" r="4" fill="#B91C1C" stroke="#7F1D1D" stroke-width="1" />
      </g>
    `,
    featured: false
  },
  {
    id: "retro-70s-walking-star-mascot-sticker",
    title: "Retro 70s Walking Star Mascot Sticker PNG",
    slug: "retro-70s-walking-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Vintage 1970s rubberhose animation mascot star with white cartoon gloves, red sneakers, pie eyes, and an upbeat walking stride. Trending aesthetic for indie merch and vintage tees.",
    tags: ["vintage star mascot sticker","rubberhose star png","70s cartoon star sticker","walking star mascot decal"],
    searchVolume: "27,000/mo",
    defaultColor: "#FBBF24",
    viewBox: "0 0 105 110",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.16))">
        <!-- Walking Cartoon Limbs (Back Leg) -->
        <path d="M 40 70 Q 30 84 26 95" stroke="#1E293B" stroke-width="5" stroke-linecap="round" fill="none" />
        <!-- Red Vintage Shoe Back -->
        <ellipse cx="22" cy="98" rx="8" ry="4.5" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
        <rect x="14" y="100" width="16" height="3" rx="1.5" fill="#ffffff" stroke="#1E293B" stroke-width="1" />
        <!-- Front Leg -->
        <path d="M 60 70 Q 70 82 78 92" stroke="#1E293B" stroke-width="5" stroke-linecap="round" fill="none" />
        <!-- Red Vintage Shoe Front -->
        <ellipse cx="84" cy="95" rx="8" ry="4.5" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
        <rect x="76" y="97" width="16" height="3" rx="1.5" fill="#ffffff" stroke="#1E293B" stroke-width="1" />
        <!-- Left Arm Swinging (Back) -->
        <path d="M 28 48 Q 14 42 12 30" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" fill="none" />
        <!-- White Cartoon Glove Left -->
        <circle cx="12" cy="28" r="6" fill="#ffffff" stroke="#1E293B" stroke-width="2" />
        <!-- Star Body with White Die-Cut Rim -->
        <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" />
        <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" points="50,10 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
        <!-- Right Arm Swinging (Front) -->
        <path d="M 72 48 Q 88 56 94 46" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" fill="none" />
        <!-- White Cartoon Glove Right -->
        <circle cx="95" cy="44" r="6" fill="#ffffff" stroke="#1E293B" stroke-width="2" />
        <circle cx="92" cy="40" r="2.5" fill="#ffffff" />
        <!-- Classic Pie-Eyes (Vintage Mickey/Betty Boop style) -->
        <ellipse cx="42" cy="45" rx="4.5" ry="6.5" fill="#1E293B" />
        <polygon points="42,45 38,42 38,47" fill="{{STAR_MAIN}}" />
        <ellipse cx="58" cy="45" rx="4.5" ry="6.5" fill="#1E293B" />
        <polygon points="58,45 54,42 54,47" fill="{{STAR_MAIN}}" />
        <!-- Cheerful Smile -->
        <path d="M 43 56 Q 50 64 57 56" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <circle cx="34" cy="54" r="3" fill="#FB7185" />
        <circle cx="66" cy="54" r="3" fill="#FB7185" />
      </g>
    `,
    featured: true
  },
  {
    id: "shy-blushing-baby-star-sticker",
    title: "Shy Blushing Baby Star Sticker PNG",
    slug: "shy-blushing-baby-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "float",
    description: "Sweet pastel baby star with big dewy eyes, soft pink blush spots, and tiny shy hands. Adorable asset for baby showers, preschool learning apps, and kawaii stickers.",
    tags: ["baby star sticker","cute kawaii star decal","shy star png","nursery cartoon star"],
    searchVolume: "23,600/mo",
    defaultColor: "#FEF08A",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 64,32 97,32 70,54 81,87 50,66 19,87 30,54 3,32 36,32" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))" />
      <!-- Pastel Star Body -->
      <polygon fill="{{STAR_MAIN}}" stroke="#2C3E50" stroke-width="2" stroke-linejoin="round" points="50,10 62,35 92,35 67,54 77,83 50,65 23,83 33,54 8,35 38,35" />
      <!-- Oversized Dewy Baby Anime Eyes -->
      <ellipse cx="38" cy="46" rx="5" ry="7" fill="#0F172A" />
      <circle cx="36" cy="43" r="2.2" fill="#ffffff" />
      <circle cx="40" cy="48" r="1.2" fill="#ffffff" />
      <ellipse cx="62" cy="46" rx="5" ry="7" fill="#0F172A" />
      <circle cx="60" cy="43" r="2.2" fill="#ffffff" />
      <circle cx="64" cy="48" r="1.2" fill="#ffffff" />
      <!-- Giant Rosy Cheeks -->
      <ellipse cx="28" cy="54" rx="6" ry="3.5" fill="#FB7185" opacity="0.9" />
      <ellipse cx="72" cy="54" rx="6" ry="3.5" fill="#FB7185" opacity="0.9" />
      <!-- Shy Little Mouth -->
      <path d="M 48 55 Q 50 57 52 55" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
      <!-- Tiny Hands Folded Together -->
      <ellipse cx="45" cy="62" rx="3" ry="2" fill="#FDE047" stroke="#2C3E50" stroke-width="1.5" />
      <ellipse cx="55" cy="62" rx="3" ry="2" fill="#FDE047" stroke="#2C3E50" stroke-width="1.5" />
    `,
    featured: true
  },
  {
    id: "gold-star-trophy-cup-sticker",
    title: "Gold Star Victory Trophy Cup Sticker PNG",
    slug: "gold-star-trophy-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Gleaming golden championship trophy cup sticker with dual handles, marble base, and an embossed 5-point star badge. Ideal for gaming leaderboards and victory banners.",
    tags: ["trophy cup star sticker","winner star trophy png","award trophy sticker","champion star cup decal"],
    searchVolume: "21,500/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 115",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Dual Trophy Handles -->
        <path d="M 24 25 C 8 25, 8 50, 26 50" fill="none" stroke="#D97706" stroke-width="5" stroke-linecap="round" />
        <path d="M 24 25 C 8 25, 8 50, 26 50" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round" />
        <path d="M 76 25 C 92 25, 92 50, 74 50" fill="none" stroke="#D97706" stroke-width="5" stroke-linecap="round" />
        <path d="M 76 25 C 92 25, 92 50, 74 50" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round" />
        <!-- Main Trophy Cup Body -->
        <path d="M 25 15 L 75 15 C 75 48, 62 65, 50 65 C 38 65, 25 48, 25 15 Z" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
        <path d="M 29 18 L 71 18 C 71 45, 60 60, 50 60 C 40 60, 29 45, 29 18 Z" fill="#FBBF24" />
        <!-- Trophy Stem & Base -->
        <rect x="45" y="65" width="10" height="15" fill="#D97706" stroke="#92400E" stroke-width="1.5" />
        <polygon points="35,80 65,80 70,86 30,86" fill="#F59E0B" stroke="#92400E" stroke-width="1.5" />
        <!-- Marble Plinth -->
        <rect x="24" y="86" width="52" height="18" rx="3" fill="#1E293B" stroke="#ffffff" stroke-width="2" />
        <!-- Embossed Gold Star on Front of Cup -->
        <polygon fill="#ffffff" stroke="#D97706" stroke-width="1.5" points="50,25 54,34 64,34 56,41 59,50 50,44 41,50 44,41 36,34 46,34" />
        <!-- Specular Highlight on Rim -->
        <ellipse cx="36" cy="22" rx="4" ry="1.5" fill="#ffffff" opacity="0.8" />
      </g>
    `,
    featured: true
  },
  {
    id: "clapping-character-great-job-sticker",
    title: "Clapping Character 'Great Job' Sticker PNG",
    slug: "clapping-great-job-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Cute minimalist cartoon character clapping hands cheerfully under an arched 'Great Job' motivational banner with tiny twinkling star accents and die-cut border.",
    tags: ["great job sticker","clapping character sticker","well done sticker png","reward star sticker","praise sticker"],
    searchVolume: "22,400/mo",
    defaultColor: "#FBBF24",
    viewBox: "0 0 100 110",
    svgContent: `
      <!-- White Die-Cut Contour with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Backing -->
        <path d="M 12 40 C 12 18, 88 18, 88 40 C 96 55, 90 95, 78 102 C 65 106, 35 106, 22 102 C 10 95, 4 55, 12 40 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Curved Banner with Text 'Great Job!' -->
        <path d="M 18 30 Q 50 16 82 30" fill="none" stroke="#2563EB" stroke-width="9" stroke-linecap="round" />
        <path d="M 20 30 Q 50 18 80 30" fill="none" stroke="#3B82F6" stroke-width="7" stroke-linecap="round" />
        <text x="50" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="7.5" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">GREAT JOB!</text>
        <!-- Cute Minimalist White Character Body -->
        <ellipse cx="50" cy="65" rx="26" ry="24" fill="#F8FAFC" stroke="#1E293B" stroke-width="2.5" />
        <!-- Clapping Hands Together -->
        <ellipse cx="44" cy="74" rx="6" ry="4" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" transform="rotate(-20 44 74)" />
        <ellipse cx="56" cy="74" rx="6" ry="4" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" transform="rotate(20 56 74)" />
        <!-- Clapping Motion Whiskers -->
        <line x1="50" y1="65" x2="50" y2="61" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
        <line x1="45" y1="66" x2="42" y2="63" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
        <line x1="55" y1="66" x2="58" y2="63" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
        <!-- Happy Arc Eyes & Rosy Blush -->
        <path d="M 39 58 Q 43 53 47 58" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M 53 58 Q 57 53 61 58" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <circle cx="37" cy="64" r="3.5" fill="#FB7185" opacity="0.85" />
        <circle cx="63" cy="64" r="3.5" fill="#FB7185" opacity="0.85" />
        <path d="M 48 64 Q 50 67 52 64" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Twinkling Little Stars Around Banner -->
        <polygon fill="{{STAR_MAIN}}" points="16,42 18,45 22,45 19,48 20,52 16,49 12,52 13,48 10,45 14,45" />
        <polygon fill="{{STAR_MAIN}}" points="84,42 86,45 90,45 87,48 88,52 84,49 80,52 81,48 78,45 82,45" />
        <polygon fill="#EC4899" points="50,40 51,43 54,43 52,45 53,48 50,46 47,48 48,45 46,43 49,43" />
      </g>
    `,
    featured: true
  },
  {
    id: "boutique-shopfront-five-star-sticker",
    title: "Boutique Shopfront 5-Star Review Sticker PNG",
    slug: "boutique-shopfront-5-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Charming boutique shopfront building with red and yellow striped awning, arched window, and curved ribbon banner with 5 golden review rating stars below.",
    tags: ["boutique star sticker","shop 5 star rating png","store review sticker","small business star badge"],
    searchVolume: "18,900/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 105 115",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <rect x="18" y="24" width="68" height="58" rx="6" fill="#ffffff" stroke="#CBD5E1" stroke-width="3" />
        <!-- Brick Building Body -->
        <rect x="22" y="28" width="60" height="50" rx="3" fill="#FEF3C7" stroke="#1E293B" stroke-width="2" />
        <!-- Red & Yellow Striped Awning -->
        <path d="M 18 28 L 86 28 L 84 42 L 20 42 Z" fill="#DC2626" stroke="#1E293B" stroke-width="2" stroke-linejoin="round" />
        <polygon points="28,28 36,28 34,42 26,42" fill="#FBBF24" />
        <polygon points="44,28 52,28 50,42 42,42" fill="#FBBF24" />
        <polygon points="60,28 68,28 66,42 58,42" fill="#FBBF24" />
        <polygon points="76,28 84,28 82,42 74,42" fill="#FBBF24" />
        <!-- Scalloped Awning Fringe -->
        <circle cx="25" cy="42" r="3" fill="#DC2626" />
        <circle cx="33" cy="42" r="3" fill="#FBBF24" />
        <circle cx="41" cy="42" r="3" fill="#DC2626" />
        <circle cx="49" cy="42" r="3" fill="#FBBF24" />
        <circle cx="57" cy="42" r="3" fill="#DC2626" />
        <circle cx="65" cy="42" r="3" fill="#FBBF24" />
        <circle cx="73" cy="42" r="3" fill="#DC2626" />
        <circle cx="81" cy="42" r="3" fill="#FBBF24" />
        <!-- Arched Window & Door -->
        <path d="M 30 52 A 8 8 0 0 1 46 52 L 46 72 L 30 72 Z" fill="#BAE6FD" stroke="#1E293B" stroke-width="1.8" />
        <rect x="54" y="52" width="18" height="26" fill="#D97706" stroke="#1E293B" stroke-width="1.8" />
        <circle cx="68" cy="65" r="1.5" fill="#FEF3C7" />
        <!-- 5-Star Rating Curved Ribbon Banner Below -->
        <rect x="12" y="82" width="80" height="22" rx="6" fill="#1E293B" stroke="#ffffff" stroke-width="2.5" />
        <!-- 5 Golden Stars Row -->
        <g fill="{{STAR_MAIN}}" transform="translate(18, 88)">
          <polygon points="6,0 8,4 12,4 9,7 10,11 6,9 2,11 3,7 0,4 4,4" />
          <polygon points="20,0 22,4 26,4 23,7 24,11 20,9 16,11 17,7 14,4 18,4" />
          <polygon points="34,0 36,4 40,4 37,7 38,11 34,9 30,11 31,7 28,4 32,4" />
          <polygon points="48,0 50,4 54,4 51,7 52,11 48,9 44,11 45,7 42,4 46,4" />
          <polygon points="62,0 64,4 68,4 65,7 66,11 62,9 58,11 59,7 56,4 60,4" />
        </g>
      </g>
    `,
    featured: true
  },
  {
    id: "retro-podcast-microphone-star-sticker",
    title: "Retro Podcast Microphone & Star Sticker PNG",
    slug: "podcast-microphone-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Vintage chrome studio broadcast microphone on a desk stand next to a glowing star icon, thumbs-up badge, and sound wave speech bubble. Essential for podcasters and streamers.",
    tags: ["podcast star sticker","microphone star png","retro radio mic sticker","audio star badge"],
    searchVolume: "21,000/mo",
    defaultColor: "#0284C7",
    viewBox: "0 0 100 110",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <path d="M 20 20 C 35 8, 75 8, 88 25 C 96 45, 92 85, 78 102 C 60 106, 30 106, 18 95 C 8 80, 8 40, 20 20 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Microphone Grille Pill Body -->
        <rect x="36" y="24" width="28" height="42" rx="14" fill="#E2E8F0" stroke="#1E293B" stroke-width="2.5" />
        <!-- Grille Horizontal Lines -->
        <line x1="39" y1="36" x2="61" y2="36" stroke="#64748B" stroke-width="2" />
        <line x1="37" y1="44" x2="63" y2="44" stroke="#64748B" stroke-width="2" />
        <line x1="39" y1="52" x2="61" y2="52" stroke="#64748B" stroke-width="2" />
        <line x1="50" y1="26" x2="50" y2="64" stroke="#64748B" stroke-width="1.8" />
        <!-- U-Shaped Metal Swivel Mount -->
        <path d="M 30 45 C 30 70, 70 70, 70 45" fill="none" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" />
        <!-- Desk Stand Stem & Base -->
        <line x1="50" y1="70" x2="50" y2="86" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
        <ellipse cx="50" cy="88" rx="20" ry="6" fill="#475569" stroke="#1E293B" stroke-width="2.5" />
        <!-- Glowing Top Star Badge -->
        <polygon fill="{{STAR_MAIN}}" stroke="#0369A1" stroke-width="1.5" points="74,18 77,24 84,25 79,29 81,36 74,32 67,36 69,29 64,25 71,24" />
        <polygon fill="#FBBF24" points="74,20 76,24 81,25 77,28 78,33 74,30 70,33 71,28 67,25 72,24" />
        <!-- Sound Waves Right -->
        <path d="M 76 46 A 8 8 0 0 1 76 62" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 83 41 A 15 15 0 0 1 83 67" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round" />
        <!-- Thumbs-up Speech Badge Left -->
        <circle cx="24" cy="55" r="9" fill="#10B981" stroke="#ffffff" stroke-width="1.5" />
        <path d="M 21 57 L 23 57 L 25 52 C 25 50, 27 50, 27 53 L 26 57 L 28 57 C 29 57, 29 59, 28 60 L 22 60 Z" fill="#ffffff" />
      </g>
    `,
    featured: true
  },
  {
    id: "smiling-blue-ringed-planet-sticker",
    title: "Smiling Blue Ringed Planet Sticker PNG",
    slug: "blue-ringed-planet-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "float",
    description: "Playful cartoon blue ringed planet smiling cheerfully with pastel purple orbital rings and surrounding diamond orbit sparkles. Cute cosmic space sticker.",
    tags: ["planet star sticker","saturn sticker png","blue planet decal","cute space sticker","galaxy sticker"],
    searchVolume: "23,500/mo",
    defaultColor: "#38BDF8",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Background Path (Planet + Ring Envelope) -->
        <ellipse cx="50" cy="50" rx="44" ry="22" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" transform="rotate(-18 50 50)" />
        <circle cx="50" cy="50" r="34" fill="#ffffff" />
        <!-- Planet Lower Body -->
        <circle cx="50" cy="50" r="28" fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" />
        <!-- Pastel Blue Shading Band on Planet -->
        <path d="M 23 54 A 28 28 0 0 0 77 54 Z" fill="#0284C7" opacity="0.35" />
        <!-- Back Half of Rings -->
        <ellipse cx="50" cy="50" rx="40" ry="14" fill="none" stroke="#C084FC" stroke-width="5" stroke-linecap="round" transform="rotate(-18 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="14" fill="none" stroke="#E879F9" stroke-width="2" stroke-linecap="round" transform="rotate(-18 50 50)" />
        <!-- Front Half of Planet (Overlapping Ring) -->
        <path d="M 23 46 A 28 28 0 0 1 77 46 Z" fill="{{STAR_MAIN}}" />
        <!-- Cute Kawaii Planet Face -->
        <ellipse cx="42" cy="48" rx="3.5" ry="4.5" fill="#1E293B" />
        <circle cx="41" cy="46" r="1.5" fill="#ffffff" />
        <ellipse cx="58" cy="48" rx="3.5" ry="4.5" fill="#1E293B" />
        <circle cx="57" cy="46" r="1.5" fill="#ffffff" />
        <ellipse cx="36" cy="54" rx="4" ry="2.5" fill="#FB7185" opacity="0.85" />
        <ellipse cx="64" cy="54" rx="4" ry="2.5" fill="#FB7185" opacity="0.85" />
        <path d="M 47 53 Q 50 58 53 53" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Front Half of Ring Ringing Around Belly -->
        <path d="M 12 58 C 22 72, 78 54, 88 42" fill="none" stroke="#C084FC" stroke-width="5" stroke-linecap="round" />
        <path d="M 12 58 C 22 72, 78 54, 88 42" fill="none" stroke="#E879F9" stroke-width="2" stroke-linecap="round" />
        <!-- Surrounding Sparkle Stars -->
        <polygon fill="#FDE047" points="20,18 22,23 27,24 23,27 24,32 20,29 16,32 17,27 13,24 18,23" />
        <polygon fill="#FDE047" points="82,72 83,75 87,76 84,78 85,82 82,80 79,82 80,78 77,76 81,75" />
      </g>
    `,
    featured: true
  },
  {
    id: "dream-big-little-one-star-badge",
    title: "'Dream BIG Little One' Star Badge Sticker PNG",
    slug: "dream-big-little-one-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Whimsical nursery calligraphy badge sticker with text reading 'Dream BIG little one' surrounded by delicate golden stars, crescent moon, and dreamy clouds.",
    tags: ["dream big star sticker","nursery quote sticker","little one star badge","baby room decal","calligraphy star sticker"],
    searchVolume: "19,800/mo",
    defaultColor: "#8B5CF6",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Circular Backing -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.13))">
        <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" />
        <circle cx="50" cy="50" r="42" fill="#F8FAFC" stroke="#DDD6FE" stroke-width="1.5" />
        <circle cx="50" cy="50" r="39" fill="#EDE9FE" />
        <!-- Cute Crescent Moon at Top -->
        <path d="M 50 16 A 8 8 0 0 1 54 28 A 10 10 0 1 0 46 16 Z" fill="#FBBF24" />
        <!-- Modern Calligraphy Text Stack -->
        <text x="50" y="38" font-family="Georgia, serif" font-style="italic" font-size="9" fill="#6B21A8" text-anchor="middle">Dream</text>
        <text x="50" y="55" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="16" fill="#4C1D95" text-anchor="middle" letter-spacing="1">BIG</text>
        <text x="50" y="70" font-family="Georgia, serif" font-style="italic" font-size="9" fill="#7C3AED" text-anchor="middle">little one</text>
        <!-- Delicate Gold Stars Framing the Text -->
        <polygon fill="#F59E0B" points="26,36 27,39 30,39 28,41 29,44 26,42 23,44 24,41 22,39 25,39" />
        <polygon fill="#F59E0B" points="74,36 75,39 78,39 76,41 77,44 74,42 71,44 72,41 70,39 73,39" />
        <polygon fill="#F59E0B" points="28,68 29,70 32,70 30,72 31,74 28,73 25,74 26,72 24,70 27,70" />
        <polygon fill="#F59E0B" points="72,68 73,70 76,70 74,72 75,74 72,73 69,74 70,72 68,70 71,70" />
        <!-- Bottom Cloud Base -->
        <path d="M 34 82 A 6 6 0 0 1 44 78 A 8 8 0 0 1 56 78 A 6 6 0 0 1 66 82 Z" fill="#ffffff" />
      </g>
    `,
    featured: false
  },
  {
    id: "i-want-to-believe-starburst-sticker",
    title: "'I Want to Believe' Starburst Sticker PNG",
    slug: "i-want-to-believe-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Stylish retro sci-fi quote sticker reading 'I want to believe' with a glowing UFO flying saucer, alien beam, and twinkling 4-point starbursts. Trending aesthetic decal.",
    tags: ["i want to believe sticker","ufo star sticker","alien starburst decal","sci-fi star sticker","retro space quote"],
    searchVolume: "25,800/mo",
    defaultColor: "#10B981",
    viewBox: "0 0 100 105",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <path d="M 12 18 C 30 8, 70 8, 88 18 C 96 35, 96 85, 84 98 C 65 104, 35 104, 16 98 C 4 85, 4 35, 12 18 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Night Sky Rounded Badge Inside -->
        <path d="M 16 22 C 32 14, 68 14, 84 22 C 90 38, 90 80, 80 92 C 64 98, 36 98, 20 92 C 10 80, 10 38, 16 22 Z" fill="#0F172A" />
        <!-- Flying Saucer UFO at Top -->
        <ellipse cx="50" cy="34" rx="20" ry="6" fill="#38BDF8" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="50" cy="30" r="7" fill="#E2E8F0" opacity="0.8" />
        <ellipse cx="50" cy="35" rx="22" ry="4" fill="#0284C7" />
        <!-- Glowing Green Abduction Beam -->
        <polygon points="40,36 60,36 74,80 26,80" fill="#10B981" opacity="0.3" />
        <!-- Retro Starbursts in Night Sky -->
        <path d="M 26 26 Q 26 30 30 30 Q 26 30 26 34 Q 26 30 22 30 Q 26 30 26 26 Z" fill="#FACC15" />
        <path d="M 74 26 Q 74 30 78 30 Q 74 30 74 34 Q 74 30 70 30 Q 74 30 74 26 Z" fill="#FACC15" />
        <circle cx="34" cy="46" r="1.5" fill="#ffffff" />
        <circle cx="68" cy="48" r="1.5" fill="#ffffff" />
        <!-- Bold Typographic Banner 'I WANT TO BELIEVE' -->
        <rect x="18" y="74" width="64" height="18" rx="4" fill="#ffffff" stroke="#1E293B" stroke-width="1.8" />
        <text x="50" y="86" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="6.5" fill="#0F172A" text-anchor="middle" letter-spacing="0.5">I WANT TO BELIEVE</text>
      </g>
    `,
    featured: true
  },
  {
    id: "my-little-astronaut-star-badge",
    title: "'My Little Astronaut' Star Badge Sticker PNG",
    slug: "my-little-astronaut-star-badge-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Adorable astronaut helmet sticker with a mirrored gold visor reflecting stars, curved typography banner reading 'my little Astronaut', and cosmic sparkle accents.",
    tags: ["my little astronaut sticker","space baby sticker","astronaut star decal","kids space badge","nursery astronaut png"],
    searchVolume: "20,500/mo",
    defaultColor: "#3B82F6",
    viewBox: "0 0 100 105",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Background Envelope -->
        <circle cx="50" cy="48" r="40" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" />
        <!-- Astronaut Helmet Bubble -->
        <circle cx="50" cy="46" r="32" fill="#F1F5F9" stroke="#1E293B" stroke-width="2.5" />
        <!-- Gold Visor with Reflection -->
        <ellipse cx="50" cy="46" rx="22" ry="16" fill="#F59E0B" stroke="#1E293B" stroke-width="2" />
        <ellipse cx="50" cy="46" rx="19" ry="13" fill="#FBBF24" />
        <!-- Visor Starfield Reflection -->
        <ellipse cx="44" cy="42" rx="6" ry="2" fill="#ffffff" opacity="0.8" transform="rotate(-20 44 42)" />
        <circle cx="58" cy="48" r="1.5" fill="#ffffff" />
        <!-- Helmet Side Radio Knobs -->
        <rect x="14" y="42" width="6" height="10" rx="3" fill="#94A3B8" stroke="#1E293B" stroke-width="1.8" />
        <rect x="80" y="42" width="6" height="10" rx="3" fill="#94A3B8" stroke="#1E293B" stroke-width="1.8" />
        <!-- Typography Ribbon Banner Below -->
        <rect x="14" y="78" width="72" height="18" rx="5" fill="#2563EB" stroke="#ffffff" stroke-width="2" />
        <text x="50" y="90" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="7" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">my little Astronaut</text>
        <!-- Surrounding Gold Stars -->
        <polygon fill="#FACC15" points="24,20 25,23 28,23 26,25 27,28 24,26 21,28 22,25 20,23 23,23" />
        <polygon fill="#FACC15" points="76,20 77,23 80,23 78,25 79,28 76,26 73,28 74,25 72,23 75,23" />
      </g>
    `,
    featured: false
  },
  {
    id: "fairytale-bunny-star-crystal-sticker",
    title: "Fairytale Bunny with Star Crystal Sticker PNG",
    slug: "bunny-star-crystal-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Whimsical fairytale white bunny rabbit holding a glowing golden star crystal and candle lantern under the night sky. Beautiful pastel storybook sticker.",
    tags: ["bunny with star sticker","rabbit star decal","fairytale bunny sticker","cute animal star png"],
    searchVolume: "21,800/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 100 110",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- White Die-Cut Silhouette -->
        <path d="M 32 10 C 26 25, 34 40, 36 50 C 24 55, 20 75, 24 92 C 35 106, 68 106, 78 92 C 84 75, 78 55, 68 50 C 70 40, 78 25, 70 10 C 64 25, 58 35, 56 46 C 46 35, 38 25, 32 10 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Bunny Ears -->
        <ellipse cx="36" cy="26" rx="7" ry="18" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" transform="rotate(-15 36 26)" />
        <ellipse cx="36" cy="26" rx="4" ry="13" fill="#FED7AA" transform="rotate(-15 36 26)" />
        <ellipse cx="64" cy="26" rx="7" ry="18" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" transform="rotate(15 64 26)" />
        <ellipse cx="64" cy="26" rx="4" ry="13" fill="#FED7AA" transform="rotate(15 64 26)" />
        <!-- Bunny Head & Body -->
        <ellipse cx="50" cy="55" rx="20" ry="18" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" />
        <ellipse cx="50" cy="84" rx="22" ry="18" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" />
        <!-- Cute Facial Features -->
        <circle cx="43" cy="54" r="2.5" fill="#1E293B" />
        <circle cx="57" cy="54" r="2.5" fill="#1E293B" />
        <ellipse cx="37" cy="59" rx="3.5" ry="2" fill="#FB7185" opacity="0.8" />
        <ellipse cx="63" cy="59" rx="3.5" ry="2" fill="#FB7185" opacity="0.8" />
        <polygon points="50,57 48,60 52,60" fill="#FB7185" />
        <path d="M 47 62 Q 50 64 53 62" stroke="#1E293B" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <!-- Glowing Big Star Crystal in Bunny's Paws -->
        <polygon fill="{{STAR_MAIN}}" stroke="#D97706" stroke-width="2" points="50,68 55,78 66,79 58,86 61,97 50,91 39,97 42,86 34,79 45,78" />
        <circle cx="50" cy="84" r="4" fill="#ffffff" opacity="0.8" />
        <!-- Bunny Paws Holding Star -->
        <ellipse cx="40" cy="80" rx="4" ry="3" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8" />
        <ellipse cx="60" cy="80" rx="4" ry="3" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8" />
      </g>
    `,
    featured: true
  },
  {
    id: "tv-monitor-three-star-rating-sticker",
    title: "TV Monitor 3-Star Review Sticker PNG",
    slug: "tv-three-star-rating-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "pulse",
    description: "Flat-screen TV monitor sticker displaying a deep purple screen with three glowing golden rating stars. Great for movie reviews, streaming critiques, and rating UI.",
    tags: ["tv star sticker","movie review sticker","3 star rating png","monitor star decal","screen review icon"],
    searchVolume: "17,600/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 95",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <rect x="10" y="12" width="80" height="56" rx="7" fill="#ffffff" stroke="#CBD5E1" stroke-width="3" />
        <!-- Monitor Bezel Frame -->
        <rect x="14" y="16" width="72" height="48" rx="4" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
        <!-- Purple Glowing Screen Face -->
        <rect x="18" y="20" width="64" height="40" rx="2" fill="#581C87" />
        <!-- 3 Golden Glowing Rating Stars on Screen -->
        <g fill="{{STAR_MAIN}}" transform="translate(24, 32)">
          <!-- Star 1 -->
          <polygon points="8,0 10,5 15,5 11,9 13,14 8,11 3,14 5,9 1,5 6,5" />
          <!-- Star 2 (Center) -->
          <polygon points="26,0 28,5 33,5 29,9 31,14 26,11 21,14 23,9 19,5 24,5" />
          <!-- Star 3 -->
          <polygon points="44,0 46,5 51,5 47,9 49,14 44,11 39,14 41,9 37,5 42,5" />
        </g>
        <!-- Rating Bar Progress Dots Below Stars -->
        <circle cx="32" cy="52" r="2" fill="#38BDF8" />
        <circle cx="50" cy="52" r="2" fill="#38BDF8" />
        <circle cx="68" cy="52" r="2" fill="#38BDF8" />
        <!-- TV Stand Neck & Oval Base -->
        <rect x="46" y="64" width="8" height="12" fill="#334155" stroke="#1E293B" stroke-width="1.8" />
        <ellipse cx="50" cy="78" rx="24" ry="6" fill="#1E293B" stroke="#ffffff" stroke-width="2" />
      </g>
    `,
    featured: false
  },
  {
    id: "mom-magical-wand-star-dust-sticker",
    title: "'MOM MAGICAL' Star Dust Wand Sticker PNG",
    slug: "mom-magical-star-wand-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "twinkle",
    description: "Empowering Mother's Day sticker reading 'MOM IS MAGICAL' accompanied by a magic wand casting a swirl of sparkling golden stars, hearts, and fairy dust.",
    tags: ["mom magical star sticker","mothers day sticker png","magic wand mom decal","fairy godmother sticker"],
    searchVolume: "23,100/mo",
    defaultColor: "#EC4899",
    viewBox: "0 0 100 105",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <path d="M 10 25 C 20 8, 80 8, 90 25 C 98 45, 95 85, 80 98 C 60 104, 30 104, 15 95 C 4 80, 4 45, 10 25 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Typography: MOM IS MAGICAL -->
        <rect x="18" y="20" width="64" height="24" rx="6" fill="#FDF2F8" stroke="#F472B6" stroke-width="1.5" />
        <text x="50" y="36" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="14" fill="#DB2777" text-anchor="middle" letter-spacing="1">MOM</text>
        <text x="50" y="54" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="10" fill="#9333EA" text-anchor="middle" letter-spacing="1.5">IS MAGICAL</text>
        <!-- Tilted Magic Wand Across -->
        <rect x="22" y="76" width="8" height="34" rx="3" transform="rotate(-55 22 76)" fill="#8B5CF6" stroke="#1E293B" stroke-width="1.8" />
        <!-- Big Golden Star Burst Tip -->
        <polygon fill="#FBBF24" stroke="#D97706" stroke-width="2" points="66,54 71,63 81,64 73,70 76,79 66,74 57,79 59,70 52,64 61,63" />
        <circle cx="66" cy="67" r="3.5" fill="#FEF08A" />
        <!-- Swirling Hearts & Mini Sparkle Stars -->
        <polygon fill="#F59E0B" points="30,56 31,58 34,58 32,60 33,62 30,61 28,62 29,60 27,58 30,58" />
        <polygon fill="#F59E0B" points="84,45 85,47 88,47 86,49 87,51 84,50 82,51 83,49 81,47 84,47" />
        <path d="M 28 68 C 26 66, 23 68, 25 71 L 28 74 L 31 71 C 33 68, 30 66, 28 68 Z" fill="#F43F5E" />
      </g>
    `,
    featured: false
  },
  {
    id: "pirate-crab-glowing-starfish-sticker",
    title: "Pirate Crab with Glowing Starfish Sticker PNG",
    slug: "pirate-crab-starfish-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Playful cartoon red crab wearing a tiny skull pirate hat and gleefully hoisting a glowing yellow 5-point starfish treasure. Cute ocean adventure sticker.",
    tags: ["pirate crab sticker","crab with starfish png","ocean star decal","cute marine animal sticker"],
    searchVolume: "22,900/mo",
    defaultColor: "#EF4444",
    viewBox: "0 0 105 105",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- White Die-Cut Outer Contour -->
        <ellipse cx="52" cy="62" rx="42" ry="32" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <circle cx="52" cy="30" r="22" fill="#ffffff" />
        <!-- Crab Legs Below -->
        <path d="M 24 72 Q 15 82 12 90" stroke="#DC2626" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M 28 78 Q 20 88 18 96" stroke="#DC2626" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M 80 72 Q 89 82 92 90" stroke="#DC2626" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M 76 78 Q 84 88 86 96" stroke="#DC2626" stroke-width="4" stroke-linecap="round" fill="none" />
        <!-- Red Crab Oval Body -->
        <ellipse cx="52" cy="66" rx="28" ry="22" fill="{{STAR_MAIN}}" stroke="#991B1B" stroke-width="2.5" />
        <ellipse cx="52" cy="74" rx="18" ry="10" fill="#F87171" />
        <!-- Left Big Pincer Claw -->
        <path d="M 26 56 Q 16 44 14 36 C 14 28, 26 28, 28 38 C 30 28, 40 32, 36 42 Z" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
        <!-- Right Pincer Holding Starfish -->
        <path d="M 74 54 Q 84 46 88 40" stroke="#DC2626" stroke-width="5" stroke-linecap="round" fill="none" />
        <!-- Glowing Yellow 5-Point Starfish Held Up -->
        <polygon fill="#FBBF24" stroke="#D97706" stroke-width="2" stroke-linejoin="round" points="86,16 90,26 100,27 92,34 95,44 86,39 77,44 80,34 72,27 82,26" />
        <circle cx="84" cy="28" r="1.5" fill="#1E293B" />
        <circle cx="88" cy="28" r="1.5" fill="#1E293B" />
        <path d="M 85 32 Q 86 34 87 32" stroke="#1E293B" stroke-width="1" fill="none" />
        <!-- Pirate Bicorne Hat with Skull -->
        <path d="M 32 36 C 32 20, 72 20, 72 36 C 60 30, 44 30, 32 36 Z" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
        <circle cx="52" cy="28" r="3.5" fill="#ffffff" />
        <ellipse cx="52" cy="33" rx="3" ry="1.5" fill="#ffffff" />
        <!-- Stalk Eyes & Cute Smile -->
        <circle cx="44" cy="46" r="6" fill="#ffffff" stroke="#1E293B" stroke-width="2" />
        <circle cx="44" cy="46" r="3" fill="#1E293B" />
        <circle cx="60" cy="46" r="6" fill="#ffffff" stroke="#1E293B" stroke-width="2" />
        <circle cx="60" cy="46" r="3" fill="#1E293B" />
        <path d="M 46 64 Q 52 70 58 64" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <circle cx="40" cy="65" r="3" fill="#FB7185" />
        <circle cx="64" cy="65" r="3" fill="#FB7185" />
      </g>
    `,
    featured: true
  },
  {
    id: "kawaii-sushi-roll-star-mascot-sticker",
    title: "Kawaii Sushi Roll Star Mascot Sticker PNG",
    slug: "kawaii-sushi-star-mascot-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "float",
    description: "Cheerful kawaii sushi roll character with smiling anime face, pink salmon sashimi topping, tiny raised hands, and floating golden star sparkles.",
    tags: ["sushi star sticker","kawaii food sticker","cute sushi png","salmon sushi decal","japanese food star"],
    searchVolume: "24,000/mo",
    defaultColor: "#FB923C",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Contour -->
        <rect x="18" y="24" width="64" height="64" rx="16" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" />
        <!-- Dark Green Nori Seaweed Wrap -->
        <rect x="22" y="38" width="56" height="46" rx="12" fill="#14532D" stroke="#052E16" stroke-width="2.5" />
        <!-- Fluffy White Rice Filling Body -->
        <rect x="26" y="42" width="48" height="38" rx="8" fill="#F8FAFC" />
        <!-- Salmon Sashimi Topping on Head -->
        <path d="M 22 38 C 22 26, 78 26, 78 38 Z" fill="{{STAR_MAIN}}" stroke="#C2410C" stroke-width="2" />
        <path d="M 32 30 Q 50 36 68 30" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        <path d="M 26 34 Q 50 40 74 34" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Kawaii Smiling Face -->
        <ellipse cx="40" cy="56" rx="3.5" ry="5" fill="#1E293B" />
        <circle cx="39" cy="54" r="1.5" fill="#ffffff" />
        <ellipse cx="60" cy="56" rx="3.5" ry="5" fill="#1E293B" />
        <circle cx="59" cy="54" r="1.5" fill="#ffffff" />
        <ellipse cx="34" cy="62" rx="4" ry="2.5" fill="#FB7185" opacity="0.85" />
        <ellipse cx="66" cy="62" rx="4" ry="2.5" fill="#FB7185" opacity="0.85" />
        <path d="M 46 62 Q 50 67 54 62" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Tiny Raised Hands Happily -->
        <ellipse cx="18" cy="54" rx="4" ry="3" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8" />
        <ellipse cx="82" cy="54" rx="4" ry="3" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8" />
        <!-- Floating Golden Star Sparkles -->
        <polygon fill="#FBBF24" points="18,18 20,22 24,23 21,25 22,29 18,27 15,29 16,25 13,23 17,22" />
        <polygon fill="#FBBF24" points="82,20 84,24 88,25 85,27 86,31 82,29 79,31 80,27 77,25 81,24" />
      </g>
    `,
    featured: false
  },
  {
    id: "torah-scroll-star-of-david-sticker",
    title: "Torah Scroll & Star of David Sticker PNG",
    slug: "torah-scroll-star-david-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Traditional Jewish Torah scroll unfurled showing Hebrew script accents, embroidered golden Star of David (Magen David), and warm Shabbat candle flames.",
    tags: ["star of david sticker","torah scroll sticker png","jewish star decal","magen david sticker","hanukkah torah star"],
    searchVolume: "18,400/mo",
    defaultColor: "#1D4ED8",
    viewBox: "0 0 100 105",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- Die-Cut Background Envelope -->
        <rect x="12" y="16" width="76" height="74" rx="10" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" />
        <!-- Dual Wooden Scroll Rollers -->
        <!-- Left Roller -->
        <rect x="16" y="10" width="8" height="84" rx="4" fill="#B45309" stroke="#78350F" stroke-width="1.8" />
        <circle cx="20" cy="10" r="6" fill="#FBBF24" stroke="#B45309" stroke-width="1.5" />
        <circle cx="20" cy="94" r="6" fill="#FBBF24" stroke="#B45309" stroke-width="1.5" />
        <!-- Right Roller -->
        <rect x="76" y="10" width="8" height="84" rx="4" fill="#B45309" stroke="#78350F" stroke-width="1.8" />
        <circle cx="80" cy="10" r="6" fill="#FBBF24" stroke="#B45309" stroke-width="1.5" />
        <circle cx="80" cy="94" r="6" fill="#FBBF24" stroke="#B45309" stroke-width="1.5" />
        <!-- Unfurled Parchment Body -->
        <rect x="24" y="20" width="52" height="64" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" />
        <!-- Royal Blue Velvet Mantle Cover Strip -->
        <rect x="30" y="24" width="40" height="56" rx="4" fill="{{STAR_MAIN}}" stroke="#1E40AF" stroke-width="1.5" />
        <!-- Golden Star of David (Magen David) Hexagram in Center -->
        <polygon fill="none" stroke="#FDE047" stroke-width="2.5" stroke-linejoin="round" points="50,36 62,56 38,56" />
        <polygon fill="none" stroke="#FDE047" stroke-width="2.5" stroke-linejoin="round" points="50,62 62,42 38,42" />
        <circle cx="50" cy="49" r="2.5" fill="#FBBF24" />
        <!-- Golden Scroll Trim Lace -->
        <line x1="32" y1="28" x2="68" y2="28" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="2 2" />
        <line x1="32" y1="76" x2="68" y2="76" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="2 2" />
      </g>
    `,
    featured: false
  },
  {
    id: "hanukkah-gift-dreidel-star-sticker",
    title: "Hanukkah Gift & Dreidel Star Sticker PNG",
    slug: "hanukkah-gift-dreidel-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Festive Hanukkah holiday gift box with blue ribbons, spinning wooden dreidel, Star of David emblem, and sweet jelly donut (sufganiyah). Light and love greeting sticker.",
    tags: ["hanukkah star sticker","dreidel sticker png","jewish holiday decal","star of david gift sticker"],
    searchVolume: "19,200/mo",
    defaultColor: "#2563EB",
    viewBox: "0 0 105 105",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Die-Cut Background Envelope -->
        <path d="M 12 45 C 12 25, 45 10, 85 18 C 96 35, 96 85, 84 98 C 55 104, 25 104, 14 90 C 8 75, 8 55, 12 45 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Royal Blue Gift Box -->
        <rect x="18" y="44" width="46" height="42" rx="4" fill="{{STAR_MAIN}}" stroke="#1E40AF" stroke-width="2" />
        <rect x="14" y="38" width="54" height="12" rx="3" fill="#1D4ED8" stroke="#1E40AF" stroke-width="2" />
        <!-- Golden Cross Ribbons -->
        <rect x="38" y="38" width="8" height="48" fill="#FBBF24" />
        <!-- Big Ribbon Bow on Top -->
        <ellipse cx="36" cy="34" rx="8" ry="5" fill="#FDE047" stroke="#D97706" stroke-width="1.5" transform="rotate(-25 36 34)" />
        <ellipse cx="48" cy="34" rx="8" ry="5" fill="#FDE047" stroke="#D97706" stroke-width="1.5" transform="rotate(25 48 34)" />
        <circle cx="42" cy="36" r="3.5" fill="#D97706" />
        <!-- Star of David on Box Front -->
        <polygon fill="none" stroke="#FEF08A" stroke-width="1.8" points="42,56 50,68 34,68" />
        <polygon fill="none" stroke="#FEF08A" stroke-width="1.8" points="42,72 50,60 34,60" />
        <!-- Spinning Wooden Dreidel Right -->
        <g transform="translate(66, 42)">
          <rect x="10" y="4" width="5" height="10" rx="2" fill="#B45309" />
          <polygon points="4,14 20,14 18,32 6,32" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8" />
          <polygon points="6,32 18,32 12,42" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8" />
          <!-- Hebrew Nun/Shin letter -->
          <text x="12" y="26" font-family="system-ui, serif" font-weight="900" font-size="10" fill="#2563EB" text-anchor="middle">ש</text>
        </g>
        <!-- Floating Little Star Sparkles -->
        <polygon fill="#FBBF24" points="78,16 80,20 84,21 81,23 82,27 78,25 75,27 76,23 73,21 77,20" />
      </g>
    `,
    featured: false
  },
  {
    id: "crescent-moon-cloud-celestial-badge-sticker",
    title: "Crescent Moon on Soft Cloud Sticker PNG",
    slug: "crescent-moon-soft-cloud-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Serene sleeping golden crescent moon nestled against a puffy white cloud with twinkling miniature stars. Iconic celestial die-cut sticker for planners and stationery.",
    tags: ["moon and cloud sticker","crescent moon sticker png","celestial star sticker","sleeping moon decal","nursery moon sticker"],
    searchVolume: "26,400/mo",
    defaultColor: "#FBBF24",
    viewBox: "0 0 100 100",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- Fluffy Cloud Base Backing -->
        <path d="M 14 68 C 14 55, 26 50, 34 52 C 38 42, 52 38, 62 44 C 70 38, 84 44, 86 55 C 92 60, 92 74, 84 80 C 78 84, 20 84, 14 68 Z" fill="#ffffff" stroke="#CBD5E1" stroke-width="3" stroke-linejoin="round" />
        <path d="M 18 68 C 18 58, 28 54, 35 56 C 39 46, 52 43, 60 48 C 68 43, 80 48, 82 58 C 88 62, 88 74, 80 78 L 18 78 Z" fill="#F8FAFC" />
        <!-- Smiling Golden Crescent Moon Nestled Inside Cloud -->
        <path d="M 44 14 C 64 14, 76 34, 68 54 C 62 42, 50 36, 36 38 C 30 26, 36 18, 44 14 Z" fill="{{STAR_MAIN}}" stroke="#D97706" stroke-width="2" stroke-linejoin="round" />
        <!-- Sleeping Face on Moon -->
        <path d="M 52 28 Q 56 32 60 28" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <circle cx="62" cy="34" r="2.5" fill="#FB7185" opacity="0.8" />
        <path d="M 54 36 Q 58 38 60 35" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Tiny Hanging / Twinkling Stars -->
        <polygon fill="#F59E0B" points="26,38 28,42 32,43 29,45 30,49 26,47 22,49 23,45 20,43 24,42" />
        <polygon fill="#EC4899" points="78,28 79,31 82,31 80,33 81,36 78,34 75,36 76,33 74,31 77,31" />
        <polygon fill="#38BDF8" points="74,68 75,70 78,70 76,72 77,75 74,73 71,75 72,72 70,70 73,70" />
      </g>
    `,
    featured: true
  },
  {
    id: "magical-witch-cauldron-star-dust-sticker",
    title: "Magical Witch Cauldron & Star Dust Sticker PNG",
    slug: "witch-cauldron-star-dust-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "high",
    animationType: "pulse",
    description: "Whimsical black cast-iron witch cauldron overflowing with glowing purple potion bubbles, hearts, and explosive golden star dust. Cute Halloween magic sticker.",
    tags: ["witch cauldron sticker","cauldron star dust png","magic potion sticker","halloween star decal","witchcraft sticker"],
    searchVolume: "24,800/mo",
    defaultColor: "#9333EA",
    viewBox: "0 0 100 110",
    svgContent: `
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.16))">
        <!-- White Die-Cut Envelope Background -->
        <path d="M 12 55 C 12 35, 30 12, 70 12 C 90 25, 96 65, 84 96 C 65 106, 35 106, 16 96 C 8 80, 8 65, 12 55 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Cauldron Legs -->
        <ellipse cx="28" cy="94" rx="4" ry="7" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
        <ellipse cx="72" cy="94" rx="4" ry="7" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
        <ellipse cx="50" cy="96" rx="4" ry="7" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
        <!-- Iron Cauldron Belly -->
        <path d="M 20 60 C 20 90, 80 90, 80 60 Z" fill="#1E293B" stroke="#0F172A" stroke-width="2.5" />
        <ellipse cx="50" cy="58" rx="33" ry="8" fill="#334155" stroke="#0F172A" stroke-width="2.5" />
        <!-- Glowing Purple Magic Potion -->
        <ellipse cx="50" cy="58" rx="28" ry="6" fill="{{STAR_MAIN}}" />
        <ellipse cx="50" cy="58" rx="24" ry="4" fill="#C084FC" />
        <!-- Bubbling Potion Spheres -->
        <circle cx="36" cy="46" r="7" fill="#C084FC" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="58" cy="40" r="9" fill="#A855F7" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="48" cy="30" r="6" fill="#E879F9" stroke="#ffffff" stroke-width="1.5" />
        <!-- Floating Sparkle Stars & Magic Glints -->
        <polygon fill="#FBBF24" stroke="#D97706" stroke-width="1.5" points="50,6 54,16 64,17 56,24 59,34 50,28 41,34 44,24 36,17 46,16" />
        <circle cx="50" cy="20" r="3" fill="#FEF08A" />
        <!-- Mini Accent Stars Around Steam -->
        <polygon fill="#FDE047" points="24,28 25,30 28,30 26,32 27,34 24,33 21,34 22,32 20,30 23,30" />
        <polygon fill="#FDE047" points="80,32 81,34 84,34 82,36 83,38 80,37 77,38 78,36 76,34 79,34" />
        <polygon fill="#38BDF8" points="76,54 77,56 80,56 78,58 79,60 76,59 73,60 74,58 72,56 75,56" />
      </g>
    `,
    featured: true
  },
  {
    id: "animated-twinkling-sparkle-star",
    title: "Animated Twinkling Sparkle Star PNG & SVG",
    slug: "animated-twinkling-star-png",
    category: "animated",
    categoryName: "Animated Stars",
    level: "moderate",
    animationType: "twinkle",
    isAnimated: true,
    description: "Seamlessly looping twinkling sparkle star with dynamic pulsation and light glow. Ready to download as transparent PNG or live animated vector SVG.",
    tags: ["animated star png","twinkling star animation","sparkle star gif","animated star vector svg","twinkling star transparent"],
    searchVolume: "29,000/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 100",
    svgContent: `
      <g class="animate-star-twinkle">
        <path fill="{{STAR_MAIN}}" d="M50 10 C50 34 58 42 82 50 C58 58 50 66 50 90 C50 66 42 58 18 50 C42 42 50 34 50 10 Z" />
        <circle cx="50" cy="50" r="8" fill="#ffffff" />
      </g>
      <g class="animate-star-pulse">
        <circle cx="26" cy="26" r="3.5" fill="{{STAR_HIGHLIGHT}}" />
        <circle cx="74" cy="74" r="3" fill="{{STAR_LIGHT}}" />
        <polygon fill="#ffffff" points="76,24 78,28 82,28 79,30 80,34 76,32 72,34 73,30 70,28 74,28" opacity="0.85" />
      </g>
    `,
    featured: true,
  },
  {
    id: "animated-pulsing-neon-star",
    title: "Animated Pulsing Neon Tube Star PNG & SVG",
    slug: "animated-neon-star-png",
    category: "animated",
    categoryName: "Animated Stars",
    level: "high",
    animationType: "pulse",
    isAnimated: true,
    description: "Electrifying neon star that pulses with high-contrast cyberpunk light auras. Ideal for live Twitch streams, dark-mode web banners, and gaming overlays.",
    tags: ["animated neon star","pulsing star gif","neon star animation","cyberpunk light star"],
    searchVolume: "21,000/mo",
    defaultColor: "#7928CA",
    viewBox: "0 0 100 100",
    svgContent: `
      <g class="animate-star-pulse">
        <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" stroke-linejoin="round" opacity="0.3" points="50,8 62,35 94,35 68,55 78,85 50,66 22,85 32,55 6,35 38,35" />
        <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" opacity="0.75" points="50,8 62,35 94,35 68,55 78,85 50,66 22,85 32,55 6,35 38,35" />
        <polygon fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" points="50,8 62,35 94,35 68,55 78,85 50,66 22,85 32,55 6,35 38,35" />
      </g>
    `,
    featured: true,
  },
  {
    id: "animated-spinning-3d-star",
    title: "Animated Spinning 3D Star PNG & SVG",
    slug: "animated-spinning-star-png",
    category: "animated",
    categoryName: "Animated Stars",
    level: "high",
    animationType: "spin",
    isAnimated: true,
    description: "Smoothly rotating continuous 3D gold faceted star. Perfect for video game coins, loading indicators, and achievement popups.",
    tags: ["animated spinning star","rotating star 3d","spinning star gif","game coin star animation"],
    searchVolume: "19,500/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 100",
    svgContent: `
      <g class="animate-star-spin" style="transform-origin: 50px 50px;">
        <polygon points="50,50 50,8 38,38" fill="#FEF08A" />
        <polygon points="50,50 50,8 62,38" fill="#F59E0B" />
        <polygon points="50,50 94,36 62,38" fill="#FBBF24" />
        <polygon points="50,50 94,36 70,60" fill="#D97706" />
        <polygon points="50,50 78,92 70,60" fill="#B45309" />
        <polygon points="50,50 78,92 50,72" fill="#78350F" />
        <polygon points="50,50 22,92 50,72" fill="#92400E" />
        <polygon points="50,50 22,92 30,60" fill="#B45309" />
        <polygon points="50,50 6,36 30,60" fill="#D97706" />
        <polygon points="50,50 6,36 38,38" fill="#FDE047" />
        <circle cx="50" cy="50" r="6" fill="#ffffff" opacity="0.8" />
      </g>
    `,
    featured: false,
  },
  {
    id: "ui-star-favorite-bookmark",
    title: "Star Favorite Bookmark UI Icon PNG",
    slug: "star-favorite-icon-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    
    
    description: "Clean geometric star icon for app navigation, favorite lists, browser bookmarks, and wishlist toggles. Crisp grid alignment with pure alpha transparency.",
    tags: ["star icon","favorite star icon","bookmark star png","ui star vector","star app icon"],
    searchVolume: "160,000/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 48 48",
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-linejoin="round" points="24,4 30,16 44,17 33,26 36,40 24,33 12,40 15,26 4,17 18,16" />
    `,
    featured: true,
  },
  {
    id: "ui-star-add-plus",
    title: "Add to Favorites Star Plus Icon PNG",
    slug: "star-add-plus-icon-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    
    
    description: "Interactive UI star with corner plus badge. The standard e-commerce button for \"Add to Wishlist\" and \"Save to Favorites\".",
    tags: ["star plus icon","add to favorite star","wishlist plus star","save star button"],
    searchVolume: "24,000/mo",
    defaultColor: "#10B981",
    viewBox: "0 0 48 48",
    svgContent: `
      <polygon fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5" stroke-linejoin="round" points="22,4 27,15 40,16 30,25 33,38 22,31 11,38 14,25 4,16 17,15" />
      <circle cx="34" cy="34" r="11" fill="{{STAR_MAIN}}" stroke="#ffffff" stroke-width="2" />
      <path fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" d="M34 28 L34 40 M28 34 L40 34" />
    `,
    featured: false,
  },
  {
    id: "ui-star-shield-security",
    title: "Star Shield Security Guarantee Icon PNG",
    slug: "star-shield-icon-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    
    
    description: "Cybersecurity shield emblem with embedded 5-point star. Essential icon for checkout trust badges, money-back guarantees, and warranty seals.",
    tags: ["star shield icon","security star png","guarantee star badge","trust shield star"],
    searchVolume: "18,500/mo",
    defaultColor: "#2563EB",
    viewBox: "0 0 48 48",
    svgContent: `
      <path fill="{{STAR_MAIN}}" stroke="{{STAR_DEEP}}" stroke-width="1.5" d="M24 3 L42 9 C42 27 24 43 24 43 C24 43 6 27 6 9 Z" />
      <polygon fill="#ffffff" points="24,12 26.5,19 34,19.5 28,24 30.5,31 24,27 17.5,31 20,24 14,19.5 21.5,19" />
    `,
    featured: false,
  },
  {
    id: "ui-star-verified-check",
    title: "Verified Star Checkmark Badge Icon PNG",
    slug: "verified-star-checkmark-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    
    
    description: "Official verification star badge enclosing a bold checkmark. Recognized symbol for authenticated users, VIP status, and confirmed quality.",
    tags: ["verified star png","star checkmark badge","official star icon","authenticated star"],
    searchVolume: "22,000/mo",
    defaultColor: "#0EA5E9",
    viewBox: "0 0 48 48",
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="24,3 28.5,8.5 35.5,6.5 37.5,13.5 44.5,16 43,23 48,27.5 43,32 44.5,39 37.5,41.5 35.5,48.5 28.5,46.5 24,52 19.5,46.5 12.5,48.5 10.5,41.5 3.5,39 5,32 0,27.5 5,23 3.5,16 10.5,13.5 12.5,6.5 19.5,8.5" transform="scale(0.88) translate(3, 1)" />
      <path fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" d="M16 25 L22 31 L32 19" />
    `,
    featured: false,
  },
  {
    id: "award-rosette-star-ribbon",
    title: "First Place Star Rosette Ribbon PNG",
    slug: "star-rosette-ribbon-png",
    category: "badges",
    categoryName: "Badges & Ribbons",
    level: "moderate",
    
    
    description: "Pleated ceremonial blue and gold rosette ribbon with central winner star medal. Classic prize award for contests, horse shows, science fairs, and sports championships.",
    tags: ["star rosette ribbon","award ribbon star","first place star badge","prize ribbon png"],
    searchVolume: "17,500/mo",
    defaultColor: "#2563EB",
    viewBox: "0 0 100 120",
    svgContent: `
      <polygon fill="#1D4ED8" points="35,60 22,114 45,98 50,114 45,60" />
      <polygon fill="#1E40AF" points="65,60 78,114 55,98 50,114 55,60" />
      <circle cx="50" cy="50" r="38" fill="{{STAR_MAIN}}" stroke="#F59E0B" stroke-width="2.5" />
      <circle cx="50" cy="50" r="28" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" />
      <circle cx="50" cy="50" r="23" fill="none" stroke="#78350F" stroke-width="1" stroke-dasharray="2 2" />
      <polygon fill="#ffffff" stroke="#D97706" stroke-width="1" points="50,32 54,43 66,44 57,52 61,64 50,56 39,64 43,52 34,44 46,43" />
    `,
    featured: true,
  },
  {
    id: "western-brass-sheriff-badge",
    title: "Western Sheriff Ball-Tipped Star Badge PNG",
    slug: "western-sheriff-badge-png",
    category: "badges",
    categoryName: "Badges & Ribbons",
    level: "basic",
    
    
    description: "Authentic 6-point ball-tipped western sheriff badge in burnished brass with embossed star studs. Essential for wild west graphics and deputy badges.",
    tags: ["western sheriff badge","deputy star png","sheriff star badge","wild west star badge"],
    searchVolume: "16,200/mo",
    defaultColor: "#CA8A04",
    viewBox: "0 0 100 100",
    svgContent: `
      <circle cx="50" cy="8" r="5" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="1.5" />
      <circle cx="86" cy="29" r="5" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="1.5" />
      <circle cx="86" cy="71" r="5" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="1.5" />
      <circle cx="50" cy="92" r="5" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="1.5" />
      <circle cx="14" cy="71" r="5" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="1.5" />
      <circle cx="14" cy="29" r="5" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="1.5" />
      <polygon fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="2" points="50,8 60,30 86,29 70,50 86,71 60,70 50,92 40,70 14,71 30,50 14,29 40,30" />
      <circle cx="50" cy="50" r="16" fill="#FEF08A" stroke="#78350F" stroke-width="1.5" />
      <circle cx="50" cy="50" r="13" fill="none" stroke="#78350F" stroke-width="1" stroke-dasharray="2 2" />
      <polygon fill="#78350F" points="50,40 52,46 58,46 53,50 55,56 50,52 45,56 47,50 42,46 48,46" />
    `,
    featured: false,
  },
  {
    id: 'golden-laurel-wreath-star',
    title: 'Golden Laurel Wreath VIP Star Coin PNG',
    slug: 'golden-laurel-wreath-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    level: 'high',
    description: 'Prestigious presidential VIP gold medallion featuring an embossed 5-point star framed by classical victory laurel leaves and beaded rim. High value asset for winner trophies and gaming ranks.',
    tags: ['laurel wreath star png', 'gold star coin', 'presidential star medal', 'victory star emblem'],
    searchVolume: '14,800/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 100 100',
    svgContent: `
      <circle cx="50" cy="50" r="47" fill="#D97706" stroke="#92400E" stroke-width="2" />
      <circle cx="50" cy="50" r="42" fill="#FBBF24" />
      <circle cx="50" cy="50" r="37" fill="#B45309" />
      <circle cx="50" cy="50" r="35" fill="#FEF08A" />
      <path fill="#B45309" d="M24 45 Q22 38 28 35 Q30 42 24 45 Z M22 55 Q18 50 25 47 Q27 53 22 55 Z M25 65 Q22 62 29 58 Q29 65 25 65 Z" />
      <path fill="#B45309" d="M76 45 Q78 38 72 35 Q70 42 76 45 Z M78 55 Q82 50 75 47 Q73 53 78 55 Z M75 65 Q78 62 71 58 Q71 65 75 65 Z" />
      <polygon points="50,50 50,22 43,43" fill="#ffffff" />
      <polygon points="50,50 50,22 57,43" fill="#D97706" />
      <polygon points="50,50 75,38 57,43" fill="#F59E0B" />
      <polygon points="50,50 75,38 60,54" fill="#B45309" />
      <polygon points="50,50 64,68 60,54" fill="#92400E" />
      <polygon points="50,50 64,68 50,58" fill="#78350F" />
      <polygon points="50,50 36,68 50,58" fill="#92400E" />
      <polygon points="50,50 36,68 40,54" fill="#B45309" />
      <polygon points="50,50 25,38 40,54" fill="#D97706" />
      <polygon points="50,50 25,38 43,43" fill="#FEF08A" />
    `,
    featured: true,
  }
];

export function getStarsByLevel(level: string): StarAsset[] {
  if (!level || level === 'all') return STAR_ASSETS;
  return STAR_ASSETS.filter((s) => s.level === level);
}

export function getStarBySlug(slug: string): StarAsset | undefined {
  return STAR_ASSETS.find((s) => s.slug === slug);
}

export function getStarsByCategory(category: string): StarAsset[] {
  if (!category || category === 'all') return STAR_ASSETS;
  return STAR_ASSETS.filter((s) => s.category === category);
}
