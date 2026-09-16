import type { StarAsset } from '../stars';

export const PART1_ASSETS: StarAsset[] = [
  // =========================================================================
  // RATINGS (+8 assets) -> Total 18
  // =========================================================================
  {
    id: 'single-star-rating-score-box',
    level: 'basic',
    title: 'Single Star Rating Score Box PNG',
    slug: 'single-star-rating-score-box-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Compact score rating box featuring a prominent golden star icon beside review score container. Ideal for app store cards, hero social proof, and mobile app headers.',
    tags: ['single star rating png', 'app score star', 'review badge star', 'star rating box transparent'],
    searchVolume: '5,400/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 140 60',
    svgContent: `
      <rect x="5" y="5" width="130" height="50" rx="10" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" opacity="0.3" />
      <rect x="5" y="5" width="130" height="50" rx="10" fill="{{STAR_MAIN}}" opacity="0.08" />
      <polygon fill="{{STAR_MAIN}}" points="35,14 41,27 55,27 44,36 48,49 35,41 22,49 26,36 15,27 29,27" />
      <rect x="68" y="22" width="45" height="7" rx="3.5" fill="{{STAR_MAIN}}" />
      <rect x="68" y="34" width="30" height="6" rx="3" fill="{{STAR_MAIN}}" opacity="0.5" />
    `,
  },
  {
    id: 'three-star-hotel-rating',
    level: 'basic',
    title: '3 Star Hotel Rating Bar PNG',
    slug: '3-star-hotel-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Crisp 3-star rating banner with 3 filled stars and 2 unfilled outline stars. Perfect for hotel grading tiers, intermediate difficulty badges, and review filters.',
    tags: ['3 star rating png', 'three star review', 'hotel star rating png', 'tier rating stars'],
    searchVolume: '7,100/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
      </g>
      <g fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" opacity="0.35">
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
  },
  {
    id: 'two-star-rating-bar',
    level: 'basic',
    title: '2 Star Rating Bar PNG',
    slug: '2-star-rating-bar-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Clean 2-star rating row with two filled stars and three light grey outline stars. Essential for comprehensive e-commerce star breakdown filters and customer review matrices.',
    tags: ['2 star rating png', 'two star rating png', 'rating breakdown bar', 'e-commerce rating star'],
    searchVolume: '4,200/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
      </g>
      <g fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" opacity="0.3">
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
  },
  {
    id: 'one-star-rating-bar',
    level: 'basic',
    title: '1 Star Rating Bar PNG',
    slug: '1-star-rating-bar-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Single star rating row with one filled golden star and four outline stars. Perfect for filtering low reviews, satisfaction surveys, and product rating analytics.',
    tags: ['1 star rating png', 'one star png', 'review breakdown star', 'satisfaction score 1 star'],
    searchVolume: '5,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 260 50',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18" />
      </g>
      <g fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" opacity="0.3">
        <polygon points="75,5 81,18 95,19 84,29 87,43 75,36 63,43 66,29 55,19 69,18" />
        <polygon points="125,5 131,18 145,19 134,29 137,43 125,36 113,43 116,29 105,19 119,18" />
        <polygon points="175,5 181,18 195,19 184,29 187,43 175,36 163,43 166,29 155,19 169,18" />
        <polygon points="225,5 231,18 245,19 234,29 237,43 225,36 213,43 216,29 205,19 219,18" />
      </g>
    `,
  },
  {
    id: 'five-star-circular-stamp',
    level: 'moderate',
    title: '5 Star Circular Review Stamp PNG',
    slug: '5-star-circular-review-stamp-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Circular trust guarantee stamp surrounded by five stars and decorative concentric circles. Ready for checkout trust seals and customer guarantee badges.',
    tags: ['5 star stamp png', 'review guarantee seal', 'circular rating badge', 'trust stamp star png'],
    searchVolume: '8,400/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <circle cx="100" cy="100" r="90" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-dasharray="6,4" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <circle cx="100" cy="100" r="74" fill="{{STAR_MAIN}}" opacity="0.05" />
      <g fill="{{STAR_MAIN}}">
        <polygon points="100,42 104,54 116,54 107,61 110,72 100,66 90,72 93,61 84,54 96,54" transform="scale(0.8) translate(25, 20)" />
        <polygon points="100,42 104,54 116,54 107,61 110,72 100,66 90,72 93,61 84,54 96,54" transform="scale(0.8) translate(55, 30)" />
        <polygon points="100,42 104,54 116,54 107,61 110,72 100,66 90,72 93,61 84,54 96,54" transform="scale(0.8) translate(-5, 30)" />
        <polygon points="100,42 104,54 116,54 107,61 110,72 100,66 90,72 93,61 84,54 96,54" transform="scale(0.8) translate(75, 55)" />
        <polygon points="100,42 104,54 116,54 107,61 110,72 100,66 90,72 93,61 84,54 96,54" transform="scale(0.8) translate(-25, 55)" />
      </g>
      <!-- Center Main Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,90 108,114 134,115 113,130 120,154 100,140 80,154 87,130 66,115 92,114" />
    `,
  },
  {
    id: 'star-review-speech-bubble',
    level: 'basic',
    title: 'Customer Review Star Speech Bubble PNG',
    slug: 'customer-review-star-speech-bubble-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Modern speech chat bubble containing 5 micro stars inside. Perfect for testimonial cards, feedback dialogue modals, and app review prompts.',
    tags: ['review speech bubble', 'feedback star bubble png', 'chat rating icon', 'testimonial speech star'],
    searchVolume: '4,900/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 160 140',
    svgContent: `
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20,30 C20,18 32,10 50,10 L110,10 C128,10 140,18 140,30 L140,80 C140,92 128,100 110,100 L70,100 L40,125 L45,100 C28,98 20,88 20,80 Z" />
      <path fill="{{STAR_MAIN}}" opacity="0.08" d="M20,30 C20,18 32,10 50,10 L110,10 C128,10 140,18 140,30 L140,80 C140,92 128,100 110,100 L70,100 L40,125 L45,100 C28,98 20,88 20,80 Z" />
      <g fill="{{STAR_MAIN}}">
        <polygon points="40,48 43,55 51,56 45,61 47,68 40,64 33,68 35,61 29,56 37,55" />
        <polygon points="60,48 63,55 71,56 65,61 67,68 60,64 53,68 55,61 49,56 57,55" />
        <polygon points="80,48 83,55 91,56 85,61 87,68 80,64 73,68 75,61 69,56 77,55" />
        <polygon points="100,48 103,55 111,56 105,61 107,68 100,64 93,68 95,61 89,56 97,55" />
        <polygon points="120,48 123,55 131,56 125,61 127,68 120,64 113,68 115,61 109,56 117,55" />
      </g>
    `,
  },
  {
    id: 'rounded-pill-5-star-badge',
    level: 'basic',
    title: 'Pill Badge 5 Star Rating PNG',
    slug: 'pill-badge-5-star-rating-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Sleek rounded pill rating badge displaying 5 stars with a clean background tint. Ideal for SaaS hero sections, navbar social proof, and pricing tables.',
    tags: ['pill star badge', 'rounded rating badge', 'saas 5 star badge', 'hero star proof'],
    searchVolume: '6,600/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 220 60',
    svgContent: `
      <rect x="5" y="6" width="210" height="48" rx="24" fill="{{STAR_MAIN}}" opacity="0.12" />
      <rect x="5" y="6" width="210" height="48" rx="24" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <g fill="{{STAR_MAIN}}">
        <polygon points="40,16 44,27 56,28 47,36 50,47 40,41 30,47 33,36 24,28 36,27" />
        <polygon points="75,16 79,27 91,28 82,36 85,47 75,41 65,47 68,36 59,28 71,27" />
        <polygon points="110,16 114,27 126,28 117,36 120,47 110,41 100,47 103,36 94,28 106,27" />
        <polygon points="145,16 149,27 161,28 152,36 155,47 145,41 135,47 138,36 129,28 141,27" />
        <polygon points="180,16 184,27 196,28 187,36 190,47 180,41 170,47 173,36 164,28 176,27" />
      </g>
    `,
  },
  {
    id: 'vertical-star-rating-column',
    level: 'basic',
    title: 'Vertical 5 Star Rating Column PNG',
    slug: 'vertical-5-star-rating-column-png',
    category: 'ratings',
    categoryName: '5-Star Ratings',
    description: 'Vertical stacked column of 5 golden stars. Designed for sidebar ratings, mobile layout review filters, and vertical ranking leaderboards.',
    tags: ['vertical star rating png', 'stacked 5 stars', 'vertical review stars', 'rating column transparent'],
    searchVolume: '3,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 50 240',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="25,10 30,22 43,23 33,32 36,44 25,38 14,44 17,32 7,23 20,22" />
        <polygon points="25,58 30,70 43,71 33,80 36,92 25,86 14,92 17,80 7,71 20,70" />
        <polygon points="25,106 30,118 43,119 33,128 36,140 25,134 14,140 17,128 7,119 20,118" />
        <polygon points="25,154 30,166 43,167 33,176 36,188 25,182 14,188 17,176 7,167 20,166" />
        <polygon points="25,202 30,214 43,215 33,224 36,236 25,230 14,236 17,224 7,215 20,214" />
      </g>
    `,
  },

  // =========================================================================
  // FUTURISTIC & AI (+12 assets) -> Total 18
  // =========================================================================
  {
    id: 'cyber-hud-target-star',
    level: 'high',
    title: 'Cyber HUD Target Star PNG',
    slug: 'cyber-hud-target-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Futuristic sci-fi HUD target reticle star with concentric orbital arcs, corner brackets, and crosshair needles. Built for gaming UI and cyberpunk graphics.',
    tags: ['sci-fi hud star', 'cyberpunk target star png', 'futuristic reticle star', 'gaming hud star transparent'],
    searchVolume: '6,700/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 200 200',
    svgContent: `
      <circle cx="100" cy="100" r="85" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="10,14" opacity="0.6" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="4,6" opacity="0.8" />
      <line x1="100" y1="5" x2="100" y2="40" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <line x1="100" y1="160" x2="100" y2="195" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <line x1="5" y1="100" x2="40" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <line x1="160" y1="100" x2="195" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <!-- Central 4-point Needle Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,30 106,94 170,100 106,106 100,170 94,106 30,100 94,94" />
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },
  {
    id: 'quantum-hypercube-star',
    level: 'high',
    title: 'Quantum Hypercube Star PNG',
    slug: 'quantum-hypercube-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Multidimensional quantum star combining isometric cube geometry with sharp radiant star points. Perfect for crypto tokens, web3 logos, and deep tech banners.',
    tags: ['quantum star png', 'tesseract star vector', 'hypercube star png', 'futuristic geometry star'],
    searchVolume: '5,100/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Isometric Inner Cube -->
      <polygon points="100,60 140,82 140,128 100,150 60,128 60,82" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="100" y1="105" x2="100" y2="150" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <line x1="100" y1="105" x2="60" y2="82" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <line x1="100" y1="105" x2="140" y2="82" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <!-- Radiating Quantum Star Points -->
      <polygon fill="{{STAR_MAIN}}" points="100,10 106,60 100,70 94,60" />
      <polygon fill="{{STAR_MAIN}}" points="100,190 106,140 100,130 94,140" />
      <polygon fill="{{STAR_MAIN}}" points="10,100 60,94 70,100 60,106" />
      <polygon fill="{{STAR_MAIN}}" points="190,100 140,94 130,100 140,106" />
      <circle cx="100" cy="105" r="7" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'neural-ai-synapse-star',
    level: 'moderate',
    title: 'Neural AI Synapse Star PNG',
    slug: 'neural-ai-synapse-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Artificial intelligence neural network node star with glowing interconnecting synaptic paths. Designed for AI apps, machine learning SaaS, and tech branding.',
    tags: ['ai star png', 'neural star vector', 'synapse star transparent', 'machine learning star icon'],
    searchVolume: '7,900/mo',
    defaultColor: '#3B82F6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Interconnecting Nodes -->
      <line x1="100" y1="20" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="100" y1="180" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="20" y1="100" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="180" y1="100" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="45" y1="45" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="155" y1="45" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="45" y1="155" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="155" y1="155" x2="100" y2="100" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="3,3" />
      <!-- Node Circles -->
      <circle cx="100" cy="20" r="9" fill="{{STAR_MAIN}}" />
      <circle cx="100" cy="180" r="9" fill="{{STAR_MAIN}}" />
      <circle cx="20" cy="100" r="9" fill="{{STAR_MAIN}}" />
      <circle cx="180" cy="100" r="9" fill="{{STAR_MAIN}}" />
      <circle cx="45" cy="45" r="6" fill="{{STAR_MAIN}}" opacity="0.7" />
      <circle cx="155" cy="45" r="6" fill="{{STAR_MAIN}}" opacity="0.7" />
      <circle cx="45" cy="155" r="6" fill="{{STAR_MAIN}}" opacity="0.7" />
      <circle cx="155" cy="155" r="6" fill="{{STAR_MAIN}}" opacity="0.7" />
      <circle cx="100" cy="100" r="16" fill="{{STAR_MAIN}}" />
      <circle cx="100" cy="100" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'holographic-data-starburst',
    level: 'high',
    title: 'Holographic Data Starburst PNG',
    slug: 'holographic-data-starburst-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Holographic data projection starburst with concentric binary rings and vector rays. High-tech visual effect for futuristic user interfaces.',
    tags: ['holographic star png', 'data starburst', 'sci fi star burst', 'vector holo star'],
    searchVolume: '4,800/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Concentric Radians -->
      <circle cx="100" cy="100" r="75" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="8,6" opacity="0.5" />
      <circle cx="100" cy="100" r="45" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" opacity="0.7" />
      <!-- 8-Point Cyber Burst -->
      <polygon fill="{{STAR_MAIN}}" points="100,15 108,82 175,70 118,94 185,100 118,106 175,130 108,118 100,185 92,118 25,130 82,106 15,100 82,94 25,70 92,82" />
      <circle cx="100" cy="100" r="9" fill="#ffffff" />
    `,
  },
  {
    id: 'vortex-warp-star',
    level: 'high',
    title: 'Vortex Warp Speed Star PNG',
    slug: 'vortex-warp-speed-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Hyperspace warp drive star with dynamic rotational spiral curves creating an optical illusion of forward speed and interstellar acceleration.',
    tags: ['warp star png', 'hyperspace star vector', 'vortex star png', 'futuristic space warp'],
    searchVolume: '5,300/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" fill="none" stroke-width="2.5" stroke-linecap="round">
        <path d="M100,20 Q130,50 100,100" />
        <path d="M180,100 Q150,130 100,100" />
        <path d="M100,180 Q70,150 100,100" />
        <path d="M20,100 Q50,70 100,100" />
        <path d="M156,44 Q140,80 100,100" opacity="0.6" />
        <path d="M156,156 Q120,140 100,100" opacity="0.6" />
        <path d="M44,156 Q60,120 100,100" opacity="0.6" />
        <path d="M44,44 Q80,60 100,100" opacity="0.6" />
      </g>
      <polygon fill="{{STAR_MAIN}}" points="100,60 107,93 140,100 107,107 100,140 93,107 60,100 93,93" />
      <circle cx="100" cy="100" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'cyber-prism-glitch-star',
    level: 'high',
    title: 'Cyber Prism Glitch Star PNG',
    slug: 'cyber-prism-glitch-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'High-tech glitch art star with offset chromatic displacement slices and fragmented vector planes. Perfect for glitch aesthetics and futuristic cyberpunk themes.',
    tags: ['glitch star png', 'cyberpunk glitch star', 'chromatic star vector', 'distorted star png'],
    searchVolume: '6,100/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Shifted Background Shadow Glitch -->
      <polygon fill="{{STAR_MAIN}}" opacity="0.25" points="106,18 114,84 186,106 114,118 106,186 98,118 26,106 98,84" />
      <!-- Main Offset Fragment 1 -->
      <path fill="{{STAR_MAIN}}" d="M100,20 L108,80 L80,80 L92,20 Z" />
      <path fill="{{STAR_MAIN}}" d="M180,100 L120,108 L120,86 L180,94 Z" />
      <!-- Middle Body -->
      <polygon fill="{{STAR_MAIN}}" points="100,45 110,90 155,100 110,110 100,155 90,110 45,100 90,90" />
      <!-- Horizontal Glitch Bars -->
      <rect x="30" y="76" width="140" height="4" fill="{{STAR_MAIN}}" opacity="0.7" />
      <rect x="50" y="122" width="110" height="3" fill="{{STAR_MAIN}}" opacity="0.5" />
    `,
  },
  {
    id: 'matrix-binary-star',
    level: 'moderate',
    title: 'Matrix Binary Digital Star PNG',
    slug: 'matrix-binary-digital-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Digital cyber star constructed from segmented geometric data blocks resembling hacker code and digital circuit logic.',
    tags: ['matrix star png', 'digital cyber star', 'binary star vector', 'circuit star icon'],
    searchVolume: '4,400/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <!-- Vertical Segments -->
        <rect x="96" y="10" width="8" height="22" rx="2" />
        <rect x="96" y="38" width="8" height="18" rx="2" />
        <rect x="96" y="144" width="8" height="18" rx="2" />
        <rect x="96" y="168" width="8" height="22" rx="2" />
        <!-- Horizontal Segments -->
        <rect x="10" y="96" width="22" height="8" rx="2" />
        <rect x="38" y="96" width="18" height="8" rx="2" />
        <rect x="144" y="96" width="18" height="8" rx="2" />
        <rect x="168" y="96" width="22" height="8" rx="2" />
        <!-- Diagonal Satellite Bits -->
        <rect x="46" y="46" width="10" height="10" rx="2" opacity="0.6" />
        <rect x="144" y="46" width="10" height="10" rx="2" opacity="0.6" />
        <rect x="46" y="144" width="10" height="10" rx="2" opacity="0.6" />
        <rect x="144" y="144" width="10" height="10" rx="2" opacity="0.6" />
        <!-- Core Center Diamond -->
        <polygon points="100,70 130,100 100,130 70,100" />
      </g>
      <circle cx="100" cy="100" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'orbital-plasma-reactor-star',
    level: 'high',
    title: 'Orbital Plasma Reactor Star PNG',
    slug: 'orbital-plasma-reactor-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Sci-fi energy reactor core star with dual intersecting orbital rings and high-energy particle emission points. Designed for tech startups and gaming.',
    tags: ['reactor star png', 'plasma star png', 'orbital star vector', 'sci fi energy star'],
    searchVolume: '5,500/mo',
    defaultColor: '#0EA5E9',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Intersecting Elliptical Orbits -->
      <ellipse cx="100" cy="100" rx="85" ry="32" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" transform="rotate(-30 100 100)" />
      <ellipse cx="100" cy="100" rx="85" ry="32" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" transform="rotate(30 100 100)" />
      <!-- Orbital Particles -->
      <circle cx="35" cy="65" r="5" fill="{{STAR_MAIN}}" />
      <circle cx="165" cy="135" r="5" fill="{{STAR_MAIN}}" />
      <circle cx="165" cy="65" r="5" fill="{{STAR_MAIN}}" />
      <circle cx="35" cy="135" r="5" fill="{{STAR_MAIN}}" />
      <!-- Center Reactor Core Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,45 112,88 155,100 112,112 100,155 88,112 45,100 88,88" />
      <circle cx="100" cy="100" r="10" fill="#ffffff" />
    `,
  },
  {
    id: 'hexagonal-ai-core-star',
    level: 'moderate',
    title: 'Hexagonal AI Core Star PNG',
    slug: 'hexagonal-ai-core-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Hexagonal tech star emblem with layered robotic armor plates and central glowing vector core. Ideal for modern software security and tech logos.',
    tags: ['hex star png', 'ai core star', 'tech hexagon star', 'security star logo png'],
    searchVolume: '6,300/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Hexagon Frame -->
      <polygon points="100,15 175,57 175,143 100,185 25,143 25,57" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <polygon points="100,30 162,65 162,135 100,170 38,135 38,65" fill="{{STAR_MAIN}}" opacity="0.08" />
      <!-- 6-Point Star Inscribed -->
      <polygon fill="{{STAR_MAIN}}" points="100,40 115,85 160,100 115,115 100,160 85,115 40,100 85,85" />
      <circle cx="100" cy="100" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'tachyon-beam-starburst',
    level: 'high',
    title: 'Tachyon Beam Starburst PNG',
    slug: 'tachyon-beam-starburst-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'High velocity tachyon beam starburst with sharp tapered optical light beams radiating outward in 12 directions. Clean futuristic laser energy graphic.',
    tags: ['tachyon star png', 'laser starburst transparent', 'beam star vector', 'futuristic ray star'],
    searchVolume: '4,700/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 200 200',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <!-- Cardinal Long Beams -->
        <polygon points="100,5 104,90 100,95 96,90" />
        <polygon points="100,195 104,110 100,105 96,110" />
        <polygon points="5,100 90,104 95,100 90,96" />
        <polygon points="195,100 110,104 105,100 110,96" />
        <!-- Diagonal Medium Beams -->
        <polygon points="30,30 94,90 90,94" />
        <polygon points="170,30 106,90 110,94" />
        <polygon points="30,170 94,110 90,106" />
        <polygon points="170,170 106,110 110,106" />
        <!-- Secondary Short Spokes -->
        <circle cx="100" cy="100" r="16" fill="{{STAR_MAIN}}" />
      </g>
      <circle cx="100" cy="100" r="7" fill="#ffffff" />
    `,
  },
  {
    id: 'cyber-compass-navigator',
    level: 'high',
    title: 'Cyber Compass Navigator Star PNG',
    slug: 'cyber-compass-navigator-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Aerospace cyberpunk navigational star with degree tick marks, telemetry brackets, and precision guidance crosshairs. Built for map UI and sci-fi dashboards.',
    tags: ['cyber compass star', 'navigation star png', 'sci-fi compass rose', 'telemetry star vector'],
    searchVolume: '5,600/mo',
    defaultColor: '#14B8A6',
    viewBox: '0 0 200 200',
    svgContent: `
      <circle cx="100" cy="100" r="82" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="2,6" />
      <!-- Nav Tick Marks -->
      <line x1="100" y1="12" x2="100" y2="24" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="100" y1="176" x2="100" y2="188" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="12" y1="100" x2="24" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <line x1="176" y1="100" x2="188" y2="100" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <!-- Asymmetric Navigator Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,25 108,92 175,100 108,108 100,165 92,108 25,100 92,92" />
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },
  {
    id: 'nanotech-crystal-star',
    level: 'high',
    title: 'Nanotech Crystal Star PNG',
    slug: 'nanotech-crystal-star-png',
    category: 'futuristic',
    categoryName: 'Futuristic & AI',
    description: 'Nanotechnology molecular crystal star formed by geometric facet tessellations and microscopic lattice connections. Perfect for biotech and quantum themes.',
    tags: ['nanotech star png', 'crystal lattice star', 'molecular star vector', 'biotech star logo'],
    searchVolume: '4,100/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="1.5" fill="none">
        <polygon points="100,20 125,75 180,100 125,125 100,180 75,125 20,100 75,75" />
        <polygon points="100,45 115,85 155,100 115,115 100,155 85,115 45,100 85,85" fill="{{STAR_MAIN}}" opacity="0.15" />
        <line x1="100" y1="20" x2="100" y2="180" opacity="0.4" />
        <line x1="20" y1="100" x2="180" y2="100" opacity="0.4" />
      </g>
      <polygon fill="{{STAR_MAIN}}" points="100,60 108,92 140,100 108,108 100,140 92,108 60,100 92,92" />
      <circle cx="100" cy="100" r="4" fill="#ffffff" />
    `,
  },

  // =========================================================================
  // Y2K & CYBER (+12 assets) -> Total 18
  // =========================================================================
  {
    id: 'y2k-stretched-chrome-sparkle',
    level: 'moderate',
    title: 'Y2K Stretched Chrome Sparkle PNG',
    slug: 'y2k-stretched-chrome-sparkle-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Dramatic vertically stretched Y2K needle star with sharp needle tips and metallic sheen. Signature streetwear graphic for 2000s cyber aesthetics.',
    tags: ['y2k needle star', 'stretched sparkle png', 'chrome star png', 'streetwear star vector'],
    searchVolume: '14,200/mo',
    defaultColor: '#E11D48',
    viewBox: '0 0 160 220',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="80,10 86,95 150,110 86,125 80,210 74,125 10,110 74,95" />
      <ellipse cx="80" cy="110" rx="20" ry="12" fill="#ffffff" opacity="0.8" />
      <circle cx="80" cy="110" r="5" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'y2k-orbital-ring-star',
    level: 'moderate',
    title: 'Y2K Orbital Ring Star PNG',
    slug: 'y2k-orbital-ring-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Iconic retro 2000s cyber star surrounded by a slanted diagonal planetary ring. Must-have clipart for cyber-grunge, techno flyers, and Gen-Z edits.',
    tags: ['y2k planet star', 'orbital ring star png', 'retro cyber star', '2000s aesthetic star'],
    searchVolume: '11,800/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Slanted Orbital Ring Behind -->
      <ellipse cx="100" cy="100" rx="85" ry="24" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" transform="rotate(-28 100 100)" opacity="0.4" />
      <!-- Main 4-point Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,20 114,86 180,100 114,114 100,180 86,114 20,100 86,86" />
      <!-- Foreground Ring Arc -->
      <path d="M40,125 A85,24 0 0,0 160,75" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" transform="rotate(-28 100 100)" />
      <circle cx="100" cy="100" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'y2k-acid-liquid-star',
    level: 'moderate',
    title: 'Y2K Acid Liquid Blob Star PNG',
    slug: 'y2k-acid-liquid-blob-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Acid techno fluid blob star with smooth bulbous curved arms and melting liquid edges. Iconic graphic for rave posters, techno clubs, and streetwear.',
    tags: ['acid star png', 'liquid star vector', 'y2k blob star', 'rave techno star'],
    searchVolume: '9,500/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M100,15 C108,60 135,75 185,100 C135,125 108,140 100,185 C92,140 65,125 15,100 C65,75 92,60 100,15 Z" />
      <circle cx="100" cy="100" r="14" fill="#ffffff" opacity="0.85" />
      <circle cx="100" cy="100" r="6" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'y2k-triple-starburst-cluster',
    level: 'basic',
    title: 'Y2K Triple Starburst Cluster PNG',
    slug: 'y2k-triple-starburst-cluster-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Arrangement of three graduated 4-point cyber sparkle stars. Ideal for photo collage overlays, album covers, and Instagram story embellishments.',
    tags: ['triple star cluster', 'y2k star burst cluster', '3 cyber stars png', 'sparkle trio png'],
    searchVolume: '13,100/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 220 180',
    svgContent: `
      <!-- Large Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="120,20 128,72 180,80 128,88 120,140 112,88 60,80 112,72" />
      <!-- Medium Top Left Star -->
      <polygon fill="{{STAR_MAIN}}" points="45,25 50,55 80,60 50,65 45,95 40,65 10,60 40,55" opacity="0.85" />
      <!-- Small Bottom Right Star -->
      <polygon fill="{{STAR_MAIN}}" points="180,115 183,135 205,138 183,141 180,160 177,141 155,138 177,135" opacity="0.7" />
      <!-- Little Glint Dots -->
      <circle cx="85" cy="130" r="3.5" fill="{{STAR_MAIN}}" />
      <circle cx="150" cy="35" r="2.5" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'y2k-barbed-wire-cross-star',
    level: 'high',
    title: 'Y2K Barbed Wire Cross Star PNG',
    slug: 'y2k-barbed-wire-cross-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Edgy cyber-punk star featuring barbed spikes and gothic crosshair needles. Core asset for metal streetwear, skate graphics, and dark Y2K aesthetics.',
    tags: ['barbed star png', 'cyber goth star', 'grunge star vector', 'skate star png'],
    searchVolume: '8,800/mo',
    defaultColor: '#171717',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Barbed Spikes on 4 Arms -->
      <path fill="{{STAR_MAIN}}" d="M100,10 L107,65 L120,55 L110,75 L125,70 L108,86 L190,100 L114,108 L125,125 L110,120 L120,140 L107,135 L100,190 L93,135 L80,140 L90,120 L75,125 L86,108 L10,100 L92,86 L75,70 L90,75 L80,55 L93,65 Z" />
      <circle cx="100" cy="100" r="12" fill="none" stroke="#ffffff" stroke-width="3" />
      <circle cx="100" cy="100" r="4" fill="#ffffff" />
    `,
  },
  {
    id: 'y2k-hollow-outline-starburst',
    level: 'basic',
    title: 'Y2K Hollow Outline Starburst PNG',
    slug: 'y2k-hollow-outline-starburst-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Bold vector outline of a 4-point cyber starburst with hollow transparent center. Perfect for minimalist streetwear logos and vector stickers.',
    tags: ['y2k outline star', 'hollow cyber star png', 'needle star outline', 'transparent cyber star'],
    searchVolume: '7,700/mo',
    defaultColor: '#000000',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" points="100,15 112,88 185,100 112,112 100,185 88,112 15,100 88,88" />
      <polygon fill="{{STAR_MAIN}}" points="100,75 106,94 125,100 106,106 100,125 94,106 75,100 94,94" opacity="0.6" />
    `,
  },
  {
    id: 'y2k-digital-pixel-sparkle',
    level: 'basic',
    title: 'Y2K Digital Pixel Sparkle PNG',
    slug: 'y2k-digital-pixel-sparkle-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: '8-bit pixel art star sparkle reminiscent of early 2000s web forums and retro gaming sprites. Crisp transparent pixel grid.',
    tags: ['pixel star png', '8 bit sparkle', 'retro web star', 'pixelated star png'],
    searchVolume: '10,900/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 160 160',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <!-- Center Cross -->
        <rect x="70" y="70" width="20" height="20" />
        <rect x="70" y="50" width="20" height="20" />
        <rect x="70" y="90" width="20" height="20" />
        <rect x="50" y="70" width="20" height="20" />
        <rect x="90" y="70" width="20" height="20" />
        <!-- Long Arms -->
        <rect x="70" y="30" width="20" height="20" />
        <rect x="70" y="10" width="20" height="20" />
        <rect x="70" y="110" width="20" height="20" />
        <rect x="70" y="130" width="20" height="20" />
        <rect x="30" y="70" width="20" height="20" />
        <rect x="10" y="70" width="20" height="20" />
        <rect x="110" y="70" width="20" height="20" />
        <rect x="130" y="70" width="20" height="20" />
      </g>
      <rect x="75" y="75" width="10" height="10" fill="#ffffff" />
    `,
  },
  {
    id: 'y2k-tribal-fire-star',
    level: 'high',
    title: 'Y2K Tribal Fire Star PNG',
    slug: 'y2k-tribal-fire-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Tribal flame cyber star featuring curving bladed flame tips and aggressive swooping arcs. Authentic homage to early 2000s tattoo culture and motocross graphics.',
    tags: ['tribal star png', 'flame star png', 'y2k tribal tattoo star', 'motocross star graphic'],
    searchVolume: '8,200/mo',
    defaultColor: '#DC2626',
    viewBox: '0 0 200 200',
    svgContent: `
      <path fill="{{STAR_MAIN}}" d="M100,10 C105,45 115,65 140,60 C125,75 125,85 185,100 C135,105 120,118 135,140 C115,130 108,135 100,190 C92,135 85,130 65,140 C80,118 65,105 15,100 C75,85 75,75 60,60 C85,65 95,45 100,10 Z" />
      <polygon fill="#ffffff" points="100,75 108,92 125,100 108,108 100,125 92,108 75,100 92,92" opacity="0.8" />
    `,
  },
  {
    id: 'y2k-chrome-badge-shield-star',
    level: 'moderate',
    title: 'Y2K Chrome Shield Star PNG',
    slug: 'y2k-chrome-shield-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Sleek cyber shield crest with embossed 4-point chrome needle star. Perfect for apparel chest prints, tech badges, and game clan emblems.',
    tags: ['chrome badge star', 'y2k shield star', 'cyber crest star', 'apparel star emblem'],
    searchVolume: '6,400/mo',
    defaultColor: '#475569',
    viewBox: '0 0 180 200',
    svgContent: `
      <!-- Shield Frame -->
      <path fill="{{STAR_MAIN}}" opacity="0.12" d="M90,15 L160,45 L160,110 C160,150 90,185 90,185 C90,185 20,150 20,110 L20,45 Z" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linejoin="round" d="M90,15 L160,45 L160,110 C160,150 90,185 90,185 C90,185 20,150 20,110 L20,45 Z" />
      <!-- Star Inside -->
      <polygon fill="{{STAR_MAIN}}" points="90,40 98,90 145,100 98,110 90,160 82,110 35,100 82,90" />
      <circle cx="90" cy="100" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'y2k-bubble-cyber-star',
    level: 'basic',
    title: 'Y2K Bubble Cyber Star PNG',
    slug: 'y2k-bubble-cyber-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Cute puffy bubble star with rounded inflated tips and cheerful gloss highlights. Blends 2000s cyber aesthetics with playful kawaii vibes.',
    tags: ['bubble star png', 'inflated star png', 'puffy cyber star', 'cute y2k star'],
    searchVolume: '9,900/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Inflated Star Shape -->
      <path fill="{{STAR_MAIN}}" d="M100,20 C108,65 135,70 180,100 C135,130 108,135 100,180 C92,135 65,130 20,100 C65,70 92,65 100,20 Z" />
      <!-- Bubble Gloss Highlights -->
      <ellipse cx="85" cy="70" rx="14" ry="7" fill="#ffffff" opacity="0.6" transform="rotate(-30 85 70)" />
      <circle cx="130" cy="88" r="5" fill="#ffffff" opacity="0.5" />
    `,
  },
  {
    id: 'y2k-crosshair-sniper-star',
    level: 'moderate',
    title: 'Y2K Crosshair Sniper Star PNG',
    slug: 'y2k-crosshair-sniper-star-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Target crosshair star with tactical bracket markers and extended laser needle points. Core asset for early 2000s cyber-action graphics.',
    tags: ['crosshair star png', 'sniper star png', 'target cyber star', 'y2k crosshair graphic'],
    searchVolume: '7,300/mo',
    defaultColor: '#0284C7',
    viewBox: '0 0 200 200',
    svgContent: `
      <circle cx="100" cy="100" r="75" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" opacity="0.4" />
      <!-- Corner Brackets -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M45,65 L45,45 L65,45" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M155,65 L155,45 L135,45" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M45,135 L45,155 L65,155" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M155,135 L155,155 L135,155" />
      <!-- Sharp Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,15 107,93 185,100 107,107 100,185 93,107 15,100 93,93" />
      <circle cx="100" cy="100" r="4" fill="#ffffff" />
    `,
  },
  {
    id: 'y2k-duo-interlocking-sparkles',
    level: 'basic',
    title: 'Y2K Duo Interlocking Sparkles PNG',
    slug: 'y2k-duo-interlocking-sparkles-png',
    category: 'y2k',
    categoryName: 'Y2K & Cyber',
    description: 'Two interlocking 4-point sparkle stars positioned in aesthetic asymmetry. Perfect for couple stickers, brand watermarks, and subtle layout highlights.',
    tags: ['duo sparkle png', 'interlocking stars png', 'twin y2k stars', 'sparkle pair transparent'],
    searchVolume: '11,400/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 220 180',
    svgContent: `
      <!-- Primary Left Star -->
      <polygon fill="{{STAR_MAIN}}" points="90,15 98,72 155,80 98,88 90,145 82,88 25,80 82,72" />
      <!-- Secondary Overlapping Right Star -->
      <polygon fill="{{STAR_MAIN}}" points="150,55 156,98 200,105 156,112 150,155 144,112 100,105 144,98" opacity="0.85" />
      <circle cx="90" cy="80" r="6" fill="#ffffff" />
      <circle cx="150" cy="105" r="4.5" fill="#ffffff" />
    `,
  },
];
