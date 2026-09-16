import type { StarAsset } from '../stars';

export const PART5_ASSETS: StarAsset[] = [
  // =========================================================================
  // ANIMATED STARS (+15 assets) -> Total 18
  // =========================================================================
  {
    id: 'animated-shooting-meteor-star',
    title: 'Animated Shooting Meteor Star PNG & SVG',
    slug: 'animated-shooting-meteor-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'shooting',
    isAnimated: true,
    description: 'Dynamic animated shooting star traversing the night sky with radiant comet ion dust trail. Download as transparent looping animation or live animated SVG.',
    tags: ['animated shooting star', 'shooting star svg', 'meteor animation transparent', 'shooting star gif', 'animated comet png'],
    searchVolume: '26,400/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 120 120',
    svgContent: `
      <g class="animate-star-shooting">
        <!-- Comet Tail -->
        <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" opacity="0.6" d="M15,105 Q55,75 90,30" />
        <path fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" d="M35,90 Q65,65 90,30" />
        <!-- Head Star -->
        <polygon fill="{{STAR_MAIN}}" points="90,15 95,27 108,30 96,35 99,48 90,41 81,48 84,35 72,30 85,27" />
        <circle cx="90" cy="30" r="5" fill="#ffffff" />
      </g>
    `,
    featured: true,
  },
  {
    id: 'animated-floating-cosmic-star',
    title: 'Animated Floating Cosmic Star PNG & SVG',
    slug: 'animated-floating-cosmic-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'moderate',
    animationType: 'float',
    isAnimated: true,
    description: 'Weightless floating zero-gravity star with gentle vertical levitation loop. Ideal for hero section badges, game HUDs, and web animations.',
    tags: ['floating star animation', 'animated levitating star', 'floating star svg', 'weightless star png'],
    searchVolume: '18,200/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-float">
        <polygon fill="{{STAR_MAIN}}" points="50,15 59,38 84,40 64,56 70,80 50,67 30,80 36,56 16,40 41,38" />
        <polygon fill="#ffffff" opacity="0.4" points="50,15 50,67 59,38" />
        <circle cx="50" cy="48" r="6" fill="#ffffff" />
      </g>
    `,
    featured: true,
  },
  {
    id: 'animated-hyper-pulsing-supernova',
    title: 'Animated Supernova Pulse Star PNG & SVG',
    slug: 'animated-supernova-pulse-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'pulse',
    isAnimated: true,
    description: 'High-energy pulsing supernova star bursting with cyclic optical expansions. High contrast transparent vector animation for gaming streamers.',
    tags: ['pulsing star animation', 'supernova star animated', 'pulsing star svg', 'animated starburst png'],
    searchVolume: '15,700/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-pulse">
        <polygon fill="{{STAR_MAIN}}" opacity="0.3" points="50,5 55,42 95,50 55,58 50,95 45,58 5,50 45,42" />
        <polygon fill="{{STAR_MAIN}}" points="50,18 56,44 82,50 56,56 50,82 44,56 18,50 44,44" />
        <circle cx="50" cy="50" r="8" fill="#ffffff" />
      </g>
    `,
    featured: true,
  },
  {
    id: 'animated-spinning-galaxy-star',
    title: 'Animated Spinning Galaxy Star PNG & SVG',
    slug: 'animated-spinning-galaxy-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'spin',
    isAnimated: true,
    description: 'Smoothly rotating 360-degree pinwheel star with seamless infinite CSS rotation keyframes. Ready to drop into web apps and game menus.',
    tags: ['spinning star animation', 'rotating star svg', 'rotating star png', 'spinning star gif'],
    searchVolume: '21,100/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-spin" style="transform-origin: 50px 50px;">
        <polygon fill="{{STAR_MAIN}}" points="50,10 60,38 88,40 66,58 74,85 50,70 26,85 34,58 12,40 40,38" />
        <circle cx="50" cy="50" r="10" fill="#ffffff" />
        <circle cx="50" cy="50" r="4" fill="{{STAR_MAIN}}" />
      </g>
    `,
    featured: true,
  },
  {
    id: 'animated-stardust-twinkle-cluster',
    title: 'Animated Stardust Twinkle Cluster PNG & SVG',
    slug: 'animated-stardust-twinkle-cluster-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'moderate',
    animationType: 'twinkle',
    isAnimated: true,
    description: 'Multi-star celestial twinkle cluster with alternating glitter phases. Perfect background overlay for fantasy illustrations and websites.',
    tags: ['twinkle cluster animated', 'animated stars background', 'twinkling starfield svg', 'glitter cluster animation'],
    searchVolume: '19,300/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 120 120',
    svgContent: `
      <g class="animate-star-twinkle">
        <!-- Main Star -->
        <polygon fill="{{STAR_MAIN}}" points="60,15 65,48 98,52 65,56 60,90 55,56 22,52 55,48" />
        <circle cx="60" cy="52" r="5" fill="#ffffff" />
      </g>
      <g class="animate-star-pulse">
        <!-- Satellite Stars -->
        <polygon fill="{{STAR_MAIN}}" opacity="0.8" points="25,25 27,35 37,36 27,37 25,47 23,37 13,36 23,35" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.7" points="95,75 97,85 107,86 97,87 95,97 93,87 83,86 93,85" />
        <circle cx="85" cy="25" r="2.5" fill="#ffffff" />
        <circle cx="35" cy="85" r="2.5" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'animated-neon-cyber-pulsar',
    title: 'Animated Neon Cyber Pulsar PNG & SVG',
    slug: 'animated-neon-cyber-pulsar-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'pulse',
    isAnimated: true,
    description: 'Electric neon pulsar star with breathing radiation aura and luminous glowing neon rings. Engineered for Twitch stream alerts and gaming UI.',
    tags: ['neon pulsar animated', 'glowing star animation', 'twitch alert star animated', 'cyberpunk neon star svg'],
    searchVolume: '17,800/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-pulse">
        <circle cx="50" cy="50" r="42" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" opacity="0.3" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" opacity="0.6" stroke-dasharray="4,6" />
        <polygon fill="none" stroke="#ffffff" stroke-width="2" points="50,20 57,43 80,50 57,57 50,80 43,57 20,50 43,43" />
        <circle cx="50" cy="50" r="4" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'animated-spinning-gold-medal-star',
    title: 'Animated Spinning Gold Medal Star PNG & SVG',
    slug: 'animated-spinning-gold-medal-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'spin',
    isAnimated: true,
    description: 'Rotating gold championship award star coin with reflective metallic rim. Rewarding celebration graphic for quiz apps, games, and contests.',
    tags: ['spinning gold star', 'rotating award star png', 'gold coin star animated', 'game reward star svg'],
    searchVolume: '16,400/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-spin" style="transform-origin: 50px 50px;">
        <circle cx="50" cy="50" r="44" fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="3" />
        <polygon fill="#FEF08A" stroke="#A16207" stroke-width="1.5" points="50,18 58,38 80,40 62,54 68,76 50,64 32,76 38,54 20,40 42,38" />
        <circle cx="50" cy="50" r="6" fill="#ffffff" opacity="0.7" />
      </g>
    `,
  },
  {
    id: 'animated-floating-wish-star',
    title: 'Animated Floating Wish Star PNG & SVG',
    slug: 'animated-floating-wish-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'moderate',
    animationType: 'float',
    isAnimated: true,
    description: 'Peacefully bobbing wish star with gentle up-and-down ambient motion. Calming asset for sleep apps, children videos, and lullaby loops.',
    tags: ['floating wish star', 'ambient star animation', 'sleep star animated', 'peaceful star svg'],
    searchVolume: '14,600/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-float">
        <polygon fill="{{STAR_MAIN}}" stroke="#D97706" stroke-width="2" points="50,18 60,38 82,41 64,56 70,78 50,66 30,78 36,56 18,41 40,38" />
        <!-- Cute smiling face -->
        <circle cx="44" cy="48" r="2" fill="#451A03" />
        <circle cx="56" cy="48" r="2" fill="#451A03" />
        <path fill="none" stroke="#451A03" stroke-width="1.5" stroke-linecap="round" d="M47,53 Q50,56 53,53" />
      </g>
    `,
  },
  {
    id: 'animated-shooting-comet-streak',
    title: 'Animated Comet Light Streak PNG & SVG',
    slug: 'animated-comet-light-streak-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'shooting',
    isAnimated: true,
    description: 'High velocity comet streak slicing diagonally across space with glowing plasma tail particles. Instant sci-fi game animation.',
    tags: ['animated comet streak', 'fast shooting star svg', 'plasma comet animated', 'meteor streak png'],
    searchVolume: '18,800/mo',
    defaultColor: '#3B82F6',
    viewBox: '0 0 120 120',
    svgContent: `
      <g class="animate-star-shooting">
        <line x1="10" y1="110" x2="85" y2="35" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linecap="round" opacity="0.5" />
        <line x1="30" y1="90" x2="85" y2="35" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
        <polygon fill="{{STAR_MAIN}}" points="90,15 96,30 110,35 96,40 90,55 84,40 70,35 84,30" />
        <circle cx="90" cy="35" r="5" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'animated-twinkling-diamond-glint',
    title: 'Animated Diamond Glint Sparkle PNG & SVG',
    slug: 'animated-diamond-glint-sparkle-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'moderate',
    animationType: 'twinkle',
    isAnimated: true,
    description: 'Continuous sparkling jewelry diamond glint with expanding flash flare effect. Adds luxurious glimmer to e-commerce product photos.',
    tags: ['diamond glint animation', 'jewelry sparkle animated', 'twinkling diamond svg', 'luxury glint star'],
    searchVolume: '16,700/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-twinkle">
        <polygon fill="{{STAR_MAIN}}" points="50,10 54,42 86,50 54,58 50,90 46,58 14,50 46,42" />
        <circle cx="50" cy="50" r="7" fill="#ffffff" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#ffffff" stroke-width="1.5" opacity="0.6" />
      </g>
    `,
  },
  {
    id: 'animated-spinning-compass-rose',
    title: 'Animated Spinning Compass Rose PNG & SVG',
    slug: 'animated-spinning-compass-rose-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'spin',
    isAnimated: true,
    description: 'Navigational 8-point compass rose star in smooth gyroscopic rotation. Outstanding loading spinner for travel, maps, and exploration apps.',
    tags: ['compass spinner animated', 'navigation star rotating', 'compass loading spinner', 'animated compass svg'],
    searchVolume: '13,500/mo',
    defaultColor: '#0284C7',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-spin" style="transform-origin: 50px 50px;">
        <circle cx="50" cy="50" r="42" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" />
        <polygon fill="{{STAR_MAIN}}" points="50,12 55,45 50,50 45,45" />
        <polygon fill="{{STAR_MAIN}}" points="50,88 55,55 50,50 45,55" />
        <polygon fill="{{STAR_MAIN}}" points="12,50 45,55 50,50 45,45" />
        <polygon fill="{{STAR_MAIN}}" points="88,50 55,55 50,50 55,45" />
        <circle cx="50" cy="50" r="6" fill="#ffffff" stroke="{{STAR_MAIN}}" stroke-width="2" />
      </g>
    `,
  },
  {
    id: 'animated-floating-cloud-star',
    title: 'Animated Floating Cloud Star PNG & SVG',
    slug: 'animated-floating-cloud-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'moderate',
    animationType: 'float',
    isAnimated: true,
    description: 'Whimsical cloud floating softly in the sky carrying a happy twinkling star on its back. Whimsical nursery animation.',
    tags: ['cloud star animated', 'floating nursery star', 'cute cloud star svg', 'baby room animated star'],
    searchVolume: '12,900/mo',
    defaultColor: '#93C5FD',
    viewBox: '0 0 120 100',
    svgContent: `
      <g class="animate-star-float">
        <!-- Fluffy Cloud -->
        <path fill="{{STAR_MAIN}}" opacity="0.4" d="M25,60 C20,60 15,65 15,72 C15,80 22,86 30,86 L90,86 C98,86 105,80 105,72 C105,65 100,60 95,60 C95,50 85,42 72,42 C68,42 65,43 62,45 C58,38 48,32 38,32 C28,32 25,48 25,60 Z" />
        <!-- Floating Star Riding Cloud -->
        <polygon fill="#FBBF24" points="62,15 67,28 80,30 70,38 73,50 62,43 51,50 54,38 44,30 57,28" />
        <circle cx="62" cy="32" r="3" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'animated-pulsing-heart-star',
    title: 'Animated Pulsing Heart Star PNG & SVG',
    slug: 'animated-pulsing-heart-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'moderate',
    animationType: 'pulse',
    isAnimated: true,
    description: 'Heartwarming heartbeat pulsing star with rhythmic romantic throb cycle. Ideal for like buttons, favorites counters, and Valentine animations.',
    tags: ['heart star animated', 'pulsing like star', 'favorite button animated star', 'romantic star svg'],
    searchVolume: '17,400/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-pulse">
        <path fill="{{STAR_MAIN}}" opacity="0.25" d="M50,85 C30,65 12,50 12,32 C12,18 22,10 35,10 C42,10 47,14 50,18 C53,14 58,10 65,10 C78,10 88,18 88,32 C88,50 70,65 50,85 Z" />
        <!-- Center Star Inside Heart -->
        <polygon fill="{{STAR_MAIN}}" points="50,22 54,34 68,36 57,45 60,58 50,51 40,58 43,45 32,36 46,34" />
        <circle cx="50" cy="40" r="4" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'animated-twinkling-night-polaris',
    title: 'Animated Twinkling Polaris Star PNG & SVG',
    slug: 'animated-twinkling-polaris-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'twinkle',
    isAnimated: true,
    description: 'Classic guiding North Star twinkling brightly in the midnight sky with long alternating cardinal and diagonal ray pulses.',
    tags: ['polaris star animated', 'north star animation', 'guiding star svg', 'twinkling polaris png'],
    searchVolume: '16,100/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 100 100',
    svgContent: `
      <g class="animate-star-twinkle">
        <polygon fill="{{STAR_MAIN}}" points="50,8 53,46 50,49 47,46" />
        <polygon fill="{{STAR_MAIN}}" points="50,92 53,54 50,51 47,54" />
        <polygon fill="{{STAR_MAIN}}" points="8,50 46,53 49,50 46,47" />
        <polygon fill="{{STAR_MAIN}}" points="92,50 54,53 51,50 54,47" />
        <!-- Diagonal Flairs -->
        <polygon fill="{{STAR_MAIN}}" opacity="0.6" points="20,20 48,48 46,50" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.6" points="80,20 52,48 54,50" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.6" points="20,80 48,52 46,50" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.6" points="80,80 52,52 54,50" />
        <circle cx="50" cy="50" r="7" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'animated-shooting-fireball-star',
    title: 'Animated Shooting Fireball Star PNG & SVG',
    slug: 'animated-shooting-fireball-star-png',
    category: 'animated',
    categoryName: 'Animated Stars',
    level: 'high',
    animationType: 'shooting',
    isAnimated: true,
    description: 'Blazing atmospheric entry fireball meteor with dynamic flame trail and hot incandescent core star.',
    tags: ['fireball star animated', 'meteor animation png', 'flaming star svg', 'shooting fire meteor'],
    searchVolume: '15,300/mo',
    defaultColor: '#F97316',
    viewBox: '0 0 120 120',
    svgContent: `
      <g class="animate-star-shooting">
        <!-- Flaming Fireball Plume -->
        <path fill="{{STAR_MAIN}}" opacity="0.4" d="M15,105 Q60,70 90,30 Q60,95 15,105 Z" />
        <path fill="#FDE047" opacity="0.7" d="M35,90 Q70,60 90,30 Q70,80 35,90 Z" />
        <!-- Head Star -->
        <polygon fill="{{STAR_MAIN}}" points="90,15 95,27 108,30 96,35 99,48 90,41 81,48 84,35 72,30 85,27" />
        <circle cx="90" cy="30" r="6" fill="#ffffff" />
      </g>
    `,
  },

  // =========================================================================
  // FRAMES & BORDERS (+3 assets) -> Total 18
  // =========================================================================
  {
    id: 'celestial-moon-star-arch-frame',
    title: 'Celestial Moon & Star Arch Frame PNG',
    slug: 'celestial-moon-star-arch-frame-png',
    category: 'frames',
    categoryName: 'Frames & Borders',
    level: 'moderate',
    description: 'Romantic celestial archway photo frame with a crescent moon keystone apex and cascading dangling star strands along the border.',
    tags: ['celestial arch frame', 'moon star frame png', 'photo arch frame transparent', 'wedding arch border star'],
    searchVolume: '12,700/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Arch Border Line -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M25,230 L25,100 C25,45 55,20 100,20 C145,20 175,45 175,100 L175,230" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="4,6" d="M32,230 L32,102 C32,52 60,28 100,28 C140,28 168,52 168,102 L168,230" />
      <!-- Keystone Moon at Apex -->
      <path fill="{{STAR_MAIN}}" d="M100,8 C92,8 85,15 85,24 C85,33 92,40 100,40 C94,36 92,30 95,24 C97,18 102,12 100,8 Z" />
      <!-- Stars Along Arch -->
      <polygon fill="{{STAR_MAIN}}" points="60,35 62,40 68,41 63,45 65,50 60,47 55,50 57,45 52,41 58,40" />
      <polygon fill="{{STAR_MAIN}}" points="140,35 142,40 148,41 143,45 145,50 140,47 135,50 137,45 132,41 138,40" />
      <polygon fill="{{STAR_MAIN}}" points="30,85 32,90 38,91 33,95 35,100 30,97 25,100 27,95 22,91 28,90" />
      <polygon fill="{{STAR_MAIN}}" points="170,85 172,90 178,91 173,95 175,100 170,97 165,100 167,95 162,91 168,90" />
      <polygon fill="{{STAR_MAIN}}" points="30,150 32,155 38,156 33,160 35,165 30,162 25,165 27,160 22,156 28,155" />
      <polygon fill="{{STAR_MAIN}}" points="170,150 172,155 178,156 173,160 175,165 170,162 165,165 167,160 162,156 168,155" />
    `,
    featured: true,
  },
  {
    id: 'hollywood-walk-of-fame-frame',
    title: 'Hollywood Walk of Fame Photo Frame PNG',
    slug: 'hollywood-walk-of-fame-photo-frame-png',
    category: 'frames',
    categoryName: 'Frames & Borders',
    level: 'moderate',
    description: 'Iconic coral pink terrazzo sidewalk star frame with polished brass rim. The world-famous Hollywood Walk of Fame VIP celebrity tribute photo frame.',
    tags: ['hollywood star frame', 'walk of fame frame png', 'celebrity star frame', 'hollywood walk of fame transparent'],
    searchVolume: '15,100/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Terrazzo Square Tile -->
      <rect x="15" y="15" width="170" height="170" fill="#1E293B" stroke="#B45309" stroke-width="4" />
      <!-- Giant Hollywood Star Outline for Portrait Placement -->
      <polygon fill="{{STAR_MAIN}}" stroke="#FBBF24" stroke-width="4" stroke-linejoin="round" points="100,25 122,76 178,82 136,120 148,175 100,146 52,175 64,120 22,82 78,76" />
      <!-- Center Circle for Photo / Name -->
      <circle cx="100" cy="112" r="24" fill="#1E293B" stroke="#FBBF24" stroke-width="3" />
      <circle cx="100" cy="112" r="6" fill="#FBBF24" />
    `,
    featured: true,
  },
  {
    id: 'vintage-postage-stamp-star-frame',
    title: 'Vintage Postage Stamp Star Frame PNG',
    slug: 'vintage-postage-stamp-star-frame-png',
    category: 'frames',
    categoryName: 'Frames & Borders',
    level: 'moderate',
    description: 'Philatelic perforated postage stamp photo frame with star watermark corners and elegant vintage postal cancellations.',
    tags: ['postage stamp frame', 'perforated stamp star png', 'vintage stamp border', 'mail stamp photo frame'],
    searchVolume: '11,300/mo',
    defaultColor: '#059669',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Perforated Stamp Outer Frame -->
      <rect x="20" y="20" width="160" height="200" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" rx="4" />
      <rect x="28" y="28" width="144" height="184" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="6,4" />
      <!-- Corner Stars -->
      <polygon fill="{{STAR_MAIN}}" points="38,38 40,43 45,44 41,47 42,52 38,49 34,52 35,47 31,44 36,43" />
      <polygon fill="{{STAR_MAIN}}" points="162,38 164,43 169,44 165,47 166,52 162,49 158,52 159,47 155,44 160,43" />
      <polygon fill="{{STAR_MAIN}}" points="38,202 40,207 45,208 41,211 42,216 38,213 34,216 35,211 31,208 36,207" />
      <polygon fill="{{STAR_MAIN}}" points="162,202 164,207 169,208 165,211 166,216 162,213 158,216 159,211 155,208 160,207" />
    `,
  },
];
