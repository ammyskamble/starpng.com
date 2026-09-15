export interface StarAsset {
  id: string;
  title: string;
  slug: string;
  category: 'ratings' | 'y2k' | 'futuristic' | 'gold' | '3d' | 'sparkle' | 'aesthetic' | 'geometric' | 'neon' | 'outline';
  categoryName: string;
  description: string;
  tags: string[];
  searchVolume: string;
  defaultColor: string;
  viewBox: string;
  svgContent: string;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Stars', slug: '' },
  { id: 'ratings', name: '5-Star Ratings', slug: 'ratings' },
  { id: 'futuristic', name: 'Futuristic & AI', slug: 'futuristic' },
  { id: 'y2k', name: 'Y2K & Cyber', slug: 'y2k' },
  { id: '3d', name: '3D & Glossy', slug: '3d' },
  { id: 'gold', name: 'Gold & Metallic', slug: 'gold' },
  { id: 'neon', name: 'Neon & Glow', slug: 'neon' },
  { id: 'sparkle', name: 'Sparkle & Twinkle', slug: 'sparkle' },
  { id: 'aesthetic', name: 'Aesthetic & Cute', slug: 'aesthetic' },
  { id: 'geometric', name: 'Geometric & Compass', slug: 'geometric' },
  { id: 'outline', name: 'Outlines & Badges', slug: 'outline' },
] as const;

export const STAR_ASSETS: StarAsset[] = [
  // =========================================================================
  // 1. 5-STAR RATINGS, REVIEWS & TRUST BADGES (FLATICON BESTSELLERS)
  // =========================================================================
  {
    id: 'five-star-rating-row',
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
  }
];

export function getStarBySlug(slug: string): StarAsset | undefined {
  return STAR_ASSETS.find((s) => s.slug === slug);
}

export function getStarsByCategory(category: string): StarAsset[] {
  if (!category || category === 'all') return STAR_ASSETS;
  return STAR_ASSETS.filter((s) => s.category === category);
}
