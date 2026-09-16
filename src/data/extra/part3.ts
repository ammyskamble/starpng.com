import type { StarAsset } from '../stars';

export const PART3_ASSETS: StarAsset[] = [
  // =========================================================================
  // SPARKLE & TWINKLE (+12 assets) -> Total 18
  // =========================================================================
  {
    id: 'cosmic-stardust-galaxy-cluster',
    level: 'moderate',
    title: 'Cosmic Stardust Galaxy Cluster PNG',
    slug: 'cosmic-stardust-galaxy-cluster-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Cosmic field of twinkling stardust sparks, diamond glints, and constellation nodes. Creates a dreamy celestial atmosphere on dark backgrounds and photos.',
    tags: ['stardust png', 'galaxy sparkle transparent', 'cosmic stars png', 'twinkling starfield'],
    searchVolume: '14,800/mo',
    defaultColor: '#F472B6',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Main Twinkle Star -->
      <polygon fill="{{STAR_MAIN}}" points="110,25 116,75 165,80 116,85 110,135 104,85 55,80 104,75" />
      <circle cx="110" cy="80" r="6" fill="#ffffff" />
      <!-- Secondary Twinkle Top Right -->
      <polygon fill="{{STAR_MAIN}}" points="180,30 183,50 205,53 183,56 180,75 177,56 155,53 177,50" opacity="0.8" />
      <!-- Secondary Twinkle Bottom Left -->
      <polygon fill="{{STAR_MAIN}}" points="45,115 48,135 70,138 48,141 45,160 42,141 20,138 42,135" opacity="0.75" />
      <!-- Floating Stardust Dots -->
      <circle cx="75" cy="40" r="3.5" fill="{{STAR_MAIN}}" />
      <circle cx="150" cy="120" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="90" cy="165" r="3" fill="{{STAR_MAIN}}" />
      <circle cx="185" cy="150" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="35" cy="65" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="140" cy="30" r="2" fill="#ffffff" />
      <circle cx="65" cy="110" r="2" fill="#ffffff" />
    `,
  },
  {
    id: 'magic-wand-sparkle-burst',
    level: 'moderate',
    title: 'Magic Wand Sparkle Burst PNG',
    slug: 'magic-wand-sparkle-burst-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Radiant magic fairy wand burst with sparkling fairy dust trail and curved motion arcs. Essential for fantasy artwork, fairy tale books, and magical filters.',
    tags: ['magic wand sparkle', 'fairy dust png', 'sparkle burst transparent', 'magical twinkle vector'],
    searchVolume: '12,300/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Wand Handle -->
      <line x1="30" y1="170" x2="90" y2="110" stroke="{{STAR_MAIN}}" stroke-width="5" stroke-linecap="round" />
      <line x1="85" y1="115" x2="95" y2="105" stroke="#FDE047" stroke-width="6" stroke-linecap="round" />
      <!-- Star Burst at Tip -->
      <polygon fill="{{STAR_MAIN}}" points="120,40 126,85 170,90 126,95 120,140 114,95 70,90 114,85" />
      <circle cx="120" cy="90" r="6" fill="#ffffff" />
      <!-- Orbiting Sparkle Dots -->
      <circle cx="155" cy="50" r="3.5" fill="#FDE047" />
      <circle cx="85" cy="60" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="160" cy="125" r="3" fill="{{STAR_MAIN}}" />
      <circle cx="95" cy="145" r="3" fill="#FDE047" />
    `,
  },
  {
    id: 'diamond-glint-lens-flare',
    level: 'high',
    title: 'Diamond Glint Lens Flare Star PNG',
    slug: 'diamond-glint-lens-flare-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'High jewelry diamond specular glint with optical anamorphic lens flare horizontal light streak and four-point twinkle star. Adds luxury sparkle to products.',
    tags: ['diamond glint png', 'lens flare sparkle', 'jewelry glint star', 'optical sparkle transparent'],
    searchVolume: '13,700/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 240 160',
    svgContent: `
      <!-- Horizontal Anamorphic Flare Streak -->
      <ellipse cx="120" cy="80" rx="110" ry="4" fill="{{STAR_MAIN}}" opacity="0.6" />
      <ellipse cx="120" cy="80" rx="70" ry="2" fill="#ffffff" />
      <!-- Vertical Glint Streak -->
      <ellipse cx="120" cy="80" rx="4" ry="60" fill="{{STAR_MAIN}}" opacity="0.5" />
      <!-- 4-point Diamond Core Star -->
      <polygon fill="{{STAR_MAIN}}" points="120,30 126,74 170,80 126,86 120,130 114,86 70,80 114,74" />
      <circle cx="120" cy="80" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'falling-shooting-star-arc',
    level: 'moderate',
    title: 'Curved Shooting Star Arc PNG',
    slug: 'curved-shooting-star-arc-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Sweeping curved celestial shooting star with graceful arching comet trail and small sparkling particle remnants. Ideal for night sky illustrations and wishes.',
    tags: ['curved shooting star', 'comet arc png', 'falling star transparent', 'wish star vector'],
    searchVolume: '11,100/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Curved Comet Trail -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linecap="round" d="M30,170 C50,150 90,110 150,85" opacity="0.3" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" d="M50,175 C70,155 105,120 150,85" opacity="0.6" />
      <path fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" d="M70,165 C90,145 120,115 150,85" />
      <!-- Comet Head Star -->
      <polygon fill="{{STAR_MAIN}}" points="165,50 172,78 200,85 172,92 165,120 158,92 130,85 158,78" />
      <circle cx="165" cy="85" r="5" fill="#ffffff" />
      <!-- Dropped Sparkles -->
      <circle cx="115" cy="115" r="3" fill="{{STAR_MAIN}}" />
      <circle cx="80" cy="140" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="45" cy="165" r="2" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'vintage-twinkle-sparkle-cross',
    level: 'basic',
    title: 'Vintage Twinkle Sparkle Cross PNG',
    slug: 'vintage-twinkle-sparkle-cross-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Clean mid-century retro twinkle sparkle cross with concave curved edges and balanced symmetrical geometry. Classic 1950s atomic age sparkle aesthetic.',
    tags: ['vintage sparkle png', 'retro twinkle star', 'atomic age starburst', 'mid century sparkle'],
    searchVolume: '9,800/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Concave Smooth Star -->
      <path fill="{{STAR_MAIN}}" d="M100,10 C100,60 140,100 190,100 C140,100 100,140 100,190 C100,140 60,100 10,100 C60,100 100,60 100,10 Z" />
      <circle cx="100" cy="100" r="7" fill="#ffffff" />
      <circle cx="145" cy="55" r="4" fill="{{STAR_MAIN}}" opacity="0.6" />
      <circle cx="55" cy="145" r="4" fill="{{STAR_MAIN}}" opacity="0.6" />
    `,
  },
  {
    id: 'twinkling-night-polaris-star',
    level: 'moderate',
    title: 'Twinkling Polaris North Star PNG',
    slug: 'twinkling-polaris-north-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Luminous Polaris North Star with bright vertical cardinal rays and softer diagonal twinkle needles. Timeless navigational and guiding light vector.',
    tags: ['polaris star png', 'north star twinkle', 'guiding star transparent', 'luminous twinkle star'],
    searchVolume: '10,900/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Long Cardinal Rays -->
      <polygon fill="{{STAR_MAIN}}" points="100,10 105,90 100,95 95,90" />
      <polygon fill="{{STAR_MAIN}}" points="100,190 105,110 100,105 95,110" />
      <polygon fill="{{STAR_MAIN}}" points="10,100 90,105 95,100 90,95" />
      <polygon fill="{{STAR_MAIN}}" points="190,100 110,105 105,100 110,95" />
      <!-- Shorter Diagonal Twinkles -->
      <polygon fill="{{STAR_MAIN}}" opacity="0.75" points="35,35 94,94 90,94" />
      <polygon fill="{{STAR_MAIN}}" opacity="0.75" points="165,35 106,94 110,94" />
      <polygon fill="{{STAR_MAIN}}" opacity="0.75" points="35,165 94,106 90,106" />
      <polygon fill="{{STAR_MAIN}}" opacity="0.75" points="165,165 106,106 110,106" />
      <!-- Brilliant Core Glow -->
      <circle cx="100" cy="100" r="16" fill="{{STAR_MAIN}}" opacity="0.4" />
      <circle cx="100" cy="100" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'sparkle-drizzle-confetti-star',
    level: 'moderate',
    title: 'Sparkle Drizzle Confetti Star PNG',
    slug: 'sparkle-drizzle-confetti-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Festive explosion of twinkle stars and floating shimmer droplets. Ideal for party invitations, birthday flyers, celebration milestones, and confetti graphics.',
    tags: ['confetti star png', 'party sparkle transparent', 'celebration stars png', 'shimmer burst vector'],
    searchVolume: '8,400/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="110,40 117,80 155,85 117,90 110,130 103,90 65,85 103,80" />
      <circle cx="110" cy="85" r="5" fill="#ffffff" />
      <!-- Drizzle Confetti Dots -->
      <circle cx="45" cy="35" r="5" fill="{{STAR_MAIN}}" />
      <circle cx="175" cy="45" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="185" cy="125" r="5" fill="{{STAR_MAIN}}" />
      <circle cx="35" cy="135" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="85" cy="165" r="6" fill="{{STAR_MAIN}}" />
      <circle cx="145" cy="160" r="4.5" fill="{{STAR_MAIN}}" />
      <!-- Little Diamond Sparks -->
      <polygon fill="{{STAR_MAIN}}" points="60,65 62,72 70,74 62,76 60,82 58,76 50,74 58,72" />
      <polygon fill="{{STAR_MAIN}}" points="160,85 162,92 170,94 162,96 160,102 158,96 150,94 158,92" />
    `,
  },
  {
    id: 'glitter-cluster-spray-stars',
    level: 'moderate',
    title: 'Glitter Cluster Spray Stars PNG',
    slug: 'glitter-cluster-spray-stars-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Directional spray of varied glitter sparkle stars bursting outward in a sweeping diagonal gesture. Perfect for makeup branding and sparkling cosmetic ads.',
    tags: ['glitter spray png', 'sparkle trail transparent', 'makeup glitter stars', 'cosmetic sparkle clipart'],
    searchVolume: '9,100/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Diagonal Stream of Stars -->
      <polygon fill="{{STAR_MAIN}}" points="60,150 64,168 82,172 64,176 60,194 56,176 38,172 56,168" opacity="0.6" />
      <polygon fill="{{STAR_MAIN}}" points="100,105 106,128 128,132 106,136 100,160 94,136 72,132 94,128" opacity="0.8" />
      <polygon fill="{{STAR_MAIN}}" points="150,45 158,76 190,82 158,88 150,120 142,88 110,82 142,76" />
      <circle cx="150" cy="82" r="6" fill="#ffffff" />
      <!-- Scattered Specular Dots -->
      <circle cx="125" cy="55" r="3.5" fill="{{STAR_MAIN}}" />
      <circle cx="185" cy="50" r="3" fill="{{STAR_MAIN}}" />
      <circle cx="175" cy="110" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="85" cy="90" r="3" fill="{{STAR_MAIN}}" />
      <circle cx="130" cy="145" r="3.5" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'four-corner-sparkle-frame-accent',
    level: 'basic',
    title: 'Sparkle Accent Corner Star PNG',
    slug: 'sparkle-accent-corner-star-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Compact 4-point sparkle star accent with soft surrounding micro-flares. Designed for photo edges, badge corners, and minimalist typography highlights.',
    tags: ['corner sparkle star', 'photo sparkle accent', 'minimal sparkle png', 'twinkle corner graphic'],
    searchVolume: '7,600/mo',
    defaultColor: '#0EA5E9',
    viewBox: '0 0 160 160',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="80,15 87,68 145,80 87,92 80,145 73,92 15,80 73,68" />
      <circle cx="80" cy="80" r="8" fill="#ffffff" />
      <!-- Small Outer Satellites -->
      <circle cx="125" cy="35" r="3.5" fill="{{STAR_MAIN}}" />
      <circle cx="35" cy="125" r="3.5" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'aurora-borealis-celestial-sparkle',
    level: 'high',
    title: 'Aurora Borealis Celestial Sparkle PNG',
    slug: 'aurora-borealis-celestial-sparkle-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Northern lights aurora sparkle star with ethereal layered light curtains radiating from an intense central polar star. Mesmerizing cosmic graphics.',
    tags: ['aurora star png', 'northern lights sparkle', 'celestial shimmer star', 'ethereal star vector'],
    searchVolume: '8,800/mo',
    defaultColor: '#14B8A6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Aurora Shimmer Halo Waves -->
      <ellipse cx="100" cy="100" rx="85" ry="35" fill="{{STAR_MAIN}}" opacity="0.15" transform="rotate(-25 100 100)" />
      <ellipse cx="100" cy="100" rx="85" ry="35" fill="{{STAR_MAIN}}" opacity="0.15" transform="rotate(25 100 100)" />
      <!-- Main Starburst -->
      <polygon fill="{{STAR_MAIN}}" points="100,20 108,86 175,100 108,114 100,180 92,114 25,100 92,86" />
      <polygon fill="#ffffff" points="100,55 105,94 145,100 105,106 100,145 95,106 55,100 95,94" />
    `,
  },
  {
    id: 'floating-wish-star-twinkle',
    level: 'basic',
    title: 'Floating Wish Star Twinkle PNG',
    slug: 'floating-wish-star-twinkle-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Gentle hand-drawn style wish star with delicate twinkle lines. Designed for children nursery wall decals, bedtime story art, and peaceful bedtime prints.',
    tags: ['wish star png', 'floating star twinkle', 'bedtime star clipart', 'nursery wish star'],
    searchVolume: '9,500/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Radiant Twinkle Lines -->
      <line x1="100" y1="15" x2="100" y2="35" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <line x1="100" y1="165" x2="100" y2="185" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <line x1="15" y1="100" x2="35" y2="100" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <line x1="165" y1="100" x2="185" y2="100" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <!-- Center Friendly Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,42 114,80 156,84 122,110 132,150 100,128 68,150 78,110 44,84 86,80" />
      <circle cx="100" cy="100" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'shimmering-cross-flare-sparkle',
    level: 'high',
    title: 'Shimmering Cross Flare Sparkle PNG',
    slug: 'shimmering-cross-flare-sparkle-png',
    category: 'sparkle',
    categoryName: 'Sparkle & Twinkle',
    description: 'Brilliant optical cross flare sparkle with fine tapered ray spikes and central bright photon corona. Perfect for premium photo editing and sparkling jewelry effects.',
    tags: ['cross flare star', 'optical sparkle png', 'shimmer cross star', 'camera sparkle flash'],
    searchVolume: '8,100/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Fine Tapered Rays -->
      <g fill="{{STAR_MAIN}}">
        <polygon points="100,5 103,96 100,98 97,96" />
        <polygon points="100,195 103,104 100,102 97,104" />
        <polygon points="5,100 96,103 98,100 96,97" />
        <polygon points="195,100 104,103 102,100 104,97" />
        <!-- Diagonal Flairs -->
        <polygon points="40,40 98,98 96,100" opacity="0.6" />
        <polygon points="160,40 102,98 104,100" opacity="0.6" />
        <polygon points="40,160 98,102 96,100" opacity="0.6" />
        <polygon points="160,160 102,102 104,100" opacity="0.6" />
      </g>
      <circle cx="100" cy="100" r="14" fill="{{STAR_MAIN}}" opacity="0.4" />
      <circle cx="100" cy="100" r="7" fill="#ffffff" />
    `,
  },

  // =========================================================================
  // AESTHETIC & CUTE (+13 assets) -> Total 18
  // =========================================================================
  {
    id: 'kawaii-blushing-winking-star',
    level: 'basic',
    title: 'Kawaii Blushing Winking Star PNG',
    slug: 'kawaii-blushing-winking-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Sweet kawaii star character with cute winking expression, smiling mouth, and soft pastel pink blushing cheeks. Irresistible clipart for stickers and stationery.',
    tags: ['kawaii star png', 'cute winking star', 'blushing star sticker', 'anime star character'],
    searchVolume: '16,200/mo',
    defaultColor: '#FDE047',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Star Body -->
      <polygon fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="4" stroke-linejoin="round" points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
      <!-- Open Eye Left -->
      <ellipse cx="80" cy="98" rx="5" ry="7" fill="#171717" />
      <circle cx="78" cy="95" r="2" fill="#ffffff" />
      <!-- Winking Eye Right -->
      <path fill="none" stroke="#171717" stroke-width="3.5" stroke-linecap="round" d="M115,98 Q125,90 130,100" />
      <!-- Smile -->
      <path fill="none" stroke="#171717" stroke-width="3" stroke-linecap="round" d="M96,114 Q102,122 108,114" />
      <!-- Rosy Blushing Cheeks -->
      <ellipse cx="68" cy="110" rx="8" ry="4.5" fill="#F43F5E" opacity="0.6" />
      <ellipse cx="134" cy="110" rx="8" ry="4.5" fill="#F43F5E" opacity="0.6" />
    `,
  },
  {
    id: 'aesthetic-pastel-doodle-stars',
    level: 'basic',
    title: 'Aesthetic Pastel Doodle Stars PNG',
    slug: 'aesthetic-pastel-doodle-stars-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Trio of hand-drawn whimsical aesthetic doodle stars with playful imperfect lines and gentle stippling. Essential for bullet journals and Canva mood boards.',
    tags: ['doodle star png', 'hand drawn star', 'aesthetic doodle stars', 'bullet journal star clipart'],
    searchVolume: '13,400/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 220 180',
    svgContent: `
      <!-- Hand Drawn Star 1 -->
      <path fill="{{STAR_MAIN}}" opacity="0.85" d="M80,20 Q88,50 115,55 Q90,75 98,105 Q78,85 55,100 Q65,72 40,55 Q70,52 80,20 Z" />
      <!-- Hand Drawn Star 2 (Smaller) -->
      <path fill="{{STAR_MAIN}}" opacity="0.65" d="M160,50 Q165,70 180,72 Q168,85 172,102 Q158,90 145,100 Q152,85 138,72 Q154,70 160,50 Z" />
      <!-- 4-point Doodle Sparkle -->
      <path fill="{{STAR_MAIN}}" d="M60,125 Q64,142 80,145 Q64,148 60,165 Q56,148 40,145 Q56,142 60,125 Z" opacity="0.75" />
      <circle cx="120" cy="135" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="175" cy="130" r="3" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'cute-sleepy-cloud-star',
    level: 'moderate',
    title: 'Cute Sleepy Cloud with Hanging Stars PNG',
    slug: 'cute-sleepy-cloud-hanging-stars-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Fluffy dreamy cloud character with sleeping closed eyes and dangling golden star pendants on delicate string ribbons. Classic nursery mobile design.',
    tags: ['cloud with star png', 'nursery cloud stars', 'sleeping cloud transparent', 'baby room star decor'],
    searchVolume: '15,100/mo',
    defaultColor: '#93C5FD',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Fluffy Cloud -->
      <path fill="{{STAR_MAIN}}" opacity="0.3" d="M50,90 C40,90 30,100 30,112 C30,125 42,135 55,135 L165,135 C178,135 190,125 190,112 C190,100 180,90 170,90 C170,75 155,60 135,60 C130,60 125,62 120,65 C115,55 100,45 85,45 C65,45 50,65 50,90 Z" />
      <path fill="none" stroke="#1E3A8A" stroke-width="2.5" d="M50,90 C40,90 30,100 30,112 C30,125 42,135 55,135 L165,135 C178,135 190,125 190,112 C190,100 180,90 170,90 C170,75 155,60 135,60 C130,60 125,62 120,65 C115,55 100,45 85,45 C65,45 50,65 50,90 Z" />
      <!-- Sleeping Eyes -->
      <path fill="none" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round" d="M80,95 Q90,105 100,95" />
      <path fill="none" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round" d="M120,95 Q130,105 140,95" />
      <!-- Hanging Strings & Stars -->
      <line x1="75" y1="135" x2="75" y2="165" stroke="#1E3A8A" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="110" y1="135" x2="110" y2="175" stroke="#1E3A8A" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="145" y1="135" x2="145" y2="160" stroke="#1E3A8A" stroke-width="1.5" stroke-dasharray="3,3" />
      <polygon fill="#FBBF24" points="75,165 77,172 84,172 78,176 80,183 75,179 70,183 72,176 66,172 73,172" />
      <polygon fill="#FBBF24" points="110,175 112,182 119,182 113,186 115,193 110,189 105,193 107,186 101,182 108,182" />
      <polygon fill="#FBBF24" points="145,160 147,167 154,167 148,171 150,178 145,174 140,178 142,171 136,167 143,167" />
    `,
  },
  {
    id: 'cute-star-lollipop-candy',
    level: 'moderate',
    title: 'Cute Star Lollipop Candy PNG',
    slug: 'cute-star-lollipop-candy-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Sweet pastel star lollipop on a stick with candy bow accent and glossy reflection. Delicious clipart for candy shops, birthday parties, and sweet treats.',
    tags: ['star lollipop png', 'candy star png', 'cute sweet star', 'kawaii candy clipart'],
    searchVolume: '7,300/mo',
    defaultColor: '#F472B6',
    viewBox: '0 0 160 220',
    svgContent: `
      <!-- Lollipop Stick -->
      <rect x="76" y="115" width="8" height="90" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5" />
      <!-- Star Candy Head -->
      <polygon fill="{{STAR_MAIN}}" stroke="#DB2777" stroke-width="4" stroke-linejoin="round" points="80,20 98,62 142,66 108,98 116,142 80,120 44,142 52,98 18,66 62,62" />
      <!-- Gloss Highlight -->
      <path fill="#ffffff" opacity="0.6" d="M80,32 L92,62 C85,70 75,70 68,62 Z" />
      <!-- Sweet Bow Accent -->
      <path fill="#FBBF24" d="M68,125 C60,118 60,135 68,135 C74,135 80,130 80,130 C80,130 86,135 92,135 C100,135 100,118 92,125 Z" />
      <circle cx="80" cy="128" r="4" fill="#F59E0B" />
    `,
  },
  {
    id: 'sparkly-fairy-wings-star',
    level: 'high',
    title: 'Sparkly Fairy Wings Star PNG',
    slug: 'sparkly-fairy-wings-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Enchanting celestial star with delicate gossamer translucent fairy wings spreading on each side. Pure whimsical fairy core aesthetic.',
    tags: ['fairy star png', 'star with wings transparent', 'fairycore star clipart', 'angel star vector'],
    searchVolume: '8,900/mo',
    defaultColor: '#C084FC',
    viewBox: '0 0 240 180',
    svgContent: `
      <!-- Fairy Wings Left -->
      <path fill="{{STAR_MAIN}}" opacity="0.3" stroke="{{STAR_MAIN}}" stroke-width="2" d="M100,90 C50,40 10,70 25,110 C35,135 80,115 100,105 Z" />
      <path fill="{{STAR_MAIN}}" opacity="0.25" stroke="{{STAR_MAIN}}" stroke-width="1.5" d="M100,105 C60,110 30,135 45,155 C60,170 90,135 100,115 Z" />
      <!-- Fairy Wings Right -->
      <path fill="{{STAR_MAIN}}" opacity="0.3" stroke="{{STAR_MAIN}}" stroke-width="2" d="M140,90 C190,40 230,70 215,110 C205,135 160,115 140,105 Z" />
      <path fill="{{STAR_MAIN}}" opacity="0.25" stroke="{{STAR_MAIN}}" stroke-width="1.5" d="M140,105 C180,110 210,135 195,155 C180,170 150,135 140,115 Z" />
      <!-- Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="120,45 128,82 165,88 128,94 120,130 112,94 75,88 112,82" />
      <circle cx="120" cy="88" r="5" fill="#ffffff" />
    `,
  },
  {
    id: 'cute-sleepy-star-nightcap',
    level: 'moderate',
    title: 'Cute Sleepy Star with Nightcap PNG',
    slug: 'cute-sleepy-star-nightcap-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Drowsy sleeping star wearing a cozy striped bedtime nightcap with a fluffy pompom tip. Cozy illustration for pajamas, lullaby videos, and nursery walls.',
    tags: ['sleepy star png', 'star with nightcap', 'lullaby star clipart', 'bedtime sleepy star'],
    searchVolume: '10,100/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Star Body -->
      <polygon fill="{{STAR_MAIN}}" points="100,35 120,80 172,85 132,122 142,172 100,146 58,172 68,122 28,85 80,80" />
      <!-- Sleeping Curved Lashes -->
      <path fill="none" stroke="#451A03" stroke-width="3" stroke-linecap="round" d="M80,105 Q90,115 100,105" />
      <path fill="none" stroke="#451A03" stroke-width="3" stroke-linecap="round" d="M110,105 Q120,115 130,105" />
      <!-- Snoring Zzz -->
      <text x="145" y="70" font-family="sans-serif" font-size="16" font-weight="bold" fill="#6366F1">z</text>
      <text x="160" y="55" font-family="sans-serif" font-size="20" font-weight="bold" fill="#6366F1">Z</text>
      <!-- Bedtime Nightcap -->
      <path fill="#6366F1" stroke="#312E81" stroke-width="2" d="M75,55 Q100,15 145,25 Q130,45 125,55 Z" />
      <circle cx="145" cy="25" r="8" fill="#ffffff" stroke="#CBD5E1" stroke-width="1.5" />
    `,
  },
  {
    id: 'cute-star-coffee-mug',
    level: 'moderate',
    title: 'Cute Star Floating in Coffee Mug PNG',
    slug: 'cute-star-floating-coffee-mug-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Cozy pastel coffee mug with a friendly smiling star floating like a marshmallow foam art on top. Autumn cozy aesthetic for cafe stickers and study vlogs.',
    tags: ['coffee star png', 'marshmallow star clipart', 'cafe aesthetic star', 'cozy latte star'],
    searchVolume: '7,700/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Mug Body -->
      <rect x="50" y="80" width="90" height="90" rx="18" fill="#F8FAFC" stroke="#94A3B8" stroke-width="3" />
      <!-- Mug Handle -->
      <path fill="none" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" d="M140,95 C165,95 165,145 140,145" />
      <!-- Steam Lines -->
      <path fill="none" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" d="M75,55 Q70,40 75,25" />
      <path fill="none" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" d="M115,55 Q120,40 115,25" />
      <!-- Floating Marshmallow Star -->
      <polygon fill="{{STAR_MAIN}}" stroke="#D97706" stroke-width="2" points="95,50 102,68 120,70 106,82 110,100 95,90 80,100 84,82 70,70 88,68" />
      <circle cx="90" cy="74" r="2" fill="#171717" />
      <circle cx="100" cy="74" r="2" fill="#171717" />
      <path fill="none" stroke="#171717" stroke-width="1.5" stroke-linecap="round" d="M92,80 Q95,84 98,80" />
    `,
  },
  {
    id: 'cute-star-origami-pinwheel',
    level: 'basic',
    title: 'Cute Star Origami Pinwheel PNG',
    slug: 'cute-star-origami-pinwheel-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Spiraling pastel pinwheel star inspired by folded origami windmill toys. Playful summer picnic and children festival graphics.',
    tags: ['pinwheel star png', 'origami windmill star', 'cute summer star clipart', 'paper pinwheel star'],
    searchVolume: '6,400/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- 4 Curved Pinwheel Blades -->
      <g stroke="#0284C7" stroke-width="2">
        <polygon fill="{{STAR_MAIN}}" points="100,100 100,20 145,55" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.8" points="100,100 180,100 145,145" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.6" points="100,100 100,180 55,145" />
        <polygon fill="{{STAR_MAIN}}" opacity="0.7" points="100,100 20,100 55,55" />
      </g>
      <circle cx="100" cy="100" r="10" fill="#ffffff" stroke="#0284C7" stroke-width="2" />
      <circle cx="100" cy="100" r="4" fill="#F59E0B" />
    `,
  },
  {
    id: 'cute-star-crown-princess',
    level: 'moderate',
    title: 'Cute Star Princess Tiara Crown PNG',
    slug: 'cute-star-princess-tiara-crown-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Sparkling princess tiara crown adorned with a prominent five-point star centerpiece and royal pearls. Essential for birthday girl invitations and fairy themes.',
    tags: ['star crown png', 'princess tiara star', 'birthday star crown', 'cute crown clipart'],
    searchVolume: '11,700/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 220 180',
    svgContent: `
      <!-- Crown Base Arch -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="5" stroke-linecap="round" d="M30,135 C65,150 155,150 190,135" />
      <!-- Crown Spikes -->
      <polygon fill="{{STAR_MAIN}}" opacity="0.85" points="30,135 55,85 85,115 110,60 135,115 165,85 190,135" />
      <!-- Center Main Star Jewel -->
      <polygon fill="#FEF08A" stroke="{{STAR_MAIN}}" stroke-width="3" points="110,25 116,50 140,53 120,68 126,92 110,78 94,92 100,68 80,53 104,50" />
      <!-- Pearl Tips on Crown Peaks -->
      <circle cx="55" cy="85" r="6" fill="#ffffff" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <circle cx="165" cy="85" r="6" fill="#ffffff" stroke="{{STAR_MAIN}}" stroke-width="2" />
    `,
  },
  {
    id: 'cute-honeybee-holding-star',
    level: 'high',
    title: 'Cute Honeybee Holding Star PNG',
    slug: 'cute-honeybee-holding-star-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Adorably chubby honeybee mascot clutching a glowing golden wish star in its paws. Sweet illustration for baby showers and spring stationery.',
    tags: ['bee holding star', 'cute bumblebee star png', 'kawaii bee clipart', 'spring honeybee star'],
    searchVolume: '8,300/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Bee Wings -->
      <ellipse cx="75" cy="50" rx="20" ry="32" fill="#E0F2FE" stroke="#38BDF8" stroke-width="2" transform="rotate(-30 75 50)" opacity="0.8" />
      <ellipse cx="125" cy="50" rx="20" ry="32" fill="#E0F2FE" stroke="#38BDF8" stroke-width="2" transform="rotate(30 125 50)" opacity="0.8" />
      <!-- Chubby Bee Body -->
      <ellipse cx="100" cy="100" rx="42" ry="36" fill="#FACC15" stroke="#451A03" stroke-width="3" />
      <!-- Black Stripes -->
      <path fill="#451A03" d="M85,67 C85,67 92,133 85,133 L98,134 C98,134 105,66 98,66 Z" />
      <path fill="#451A03" d="M110,72 C110,72 116,128 110,128 L122,126 C122,126 128,74 122,74 Z" />
      <!-- Face -->
      <circle cx="68" cy="95" r="4" fill="#451A03" />
      <circle cx="67" cy="93" r="1.5" fill="#ffffff" />
      <circle cx="82" cy="95" r="4" fill="#451A03" />
      <circle cx="81" cy="93" r="1.5" fill="#ffffff" />
      <path fill="none" stroke="#451A03" stroke-width="2" stroke-linecap="round" d="M72,103 Q76,108 80,103" />
      <!-- Clutched Star -->
      <polygon fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="2" points="130,95 136,112 154,114 140,125 144,142 130,132 116,142 120,125 106,114 124,112" />
    `,
  },
  {
    id: 'cute-star-cookie-sprinkles',
    level: 'moderate',
    title: 'Cute Star Cookie with Sprinkles PNG',
    slug: 'cute-star-cookie-sprinkles-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Frosted sugar cookie star with glossy pink strawberry icing and colorful rainbow candy sprinkles. Delicious holiday baking and dessert clipart.',
    tags: ['star cookie png', 'sugar cookie star', 'frosted star clipart', 'baking star with sprinkles'],
    searchVolume: '9,600/mo',
    defaultColor: '#F472B6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Golden Brown Cookie Crust Base -->
      <polygon fill="#FDE68A" stroke="#D97706" stroke-width="4" stroke-linejoin="round" points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
      <!-- Pink Icing Frosting -->
      <polygon fill="{{STAR_MAIN}}" points="100,32 118,72 165,77 130,110 138,155 100,134 62,155 70,110 35,77 82,72" />
      <!-- Colorful Sprinkles -->
      <rect x="90" y="55" width="8" height="3" rx="1.5" fill="#60A5FA" transform="rotate(25 90 55)" />
      <rect x="130" y="85" width="8" height="3" rx="1.5" fill="#34D399" transform="rotate(-40 130 85)" />
      <rect x="70" y="90" width="8" height="3" rx="1.5" fill="#FBBF24" transform="rotate(15 70 90)" />
      <rect x="115" y="125" width="8" height="3" rx="1.5" fill="#A78BFA" transform="rotate(50 115 125)" />
      <rect x="85" y="120" width="8" height="3" rx="1.5" fill="#F87171" transform="rotate(-20 85 120)" />
    `,
  },
  {
    id: 'cute-star-balloon-bundle',
    level: 'moderate',
    title: 'Cute Star Foil Balloon Bundle PNG',
    slug: 'cute-star-foil-balloon-bundle-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Metallic pastel star foil helium balloons tied together with curling silk ribbons. Essential for birthday party designs, baby reveals, and festive banners.',
    tags: ['star balloon png', 'foil star balloons', 'birthday helium balloons', 'curling ribbon star'],
    searchVolume: '13,800/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Ribbon Strings -->
      <path fill="none" stroke="#94A3B8" stroke-width="2" d="M100,135 Q90,165 110,195 Q90,215 100,235" />
      <path fill="none" stroke="#94A3B8" stroke-width="2" d="M70,115 Q60,155 80,185 Q100,215 100,235" />
      <path fill="none" stroke="#94A3B8" stroke-width="2" d="M130,115 Q140,155 120,185 Q100,215 100,235" />
      <!-- Balloon Left (Pastel Blue) -->
      <polygon fill="#38BDF8" stroke="#0284C7" stroke-width="2" points="70,40 82,68 112,72 90,92 96,122 70,108 44,122 50,92 28,72 58,68" opacity="0.85" />
      <!-- Balloon Right (Pastel Purple) -->
      <polygon fill="#A855F7" stroke="#7E22CE" stroke-width="2" points="130,40 142,68 172,72 150,92 156,122 130,108 104,122 110,92 88,72 118,68" opacity="0.85" />
      <!-- Center Main Balloon -->
      <polygon fill="{{STAR_MAIN}}" stroke="#BE185D" stroke-width="2.5" points="100,15 115,52 155,58 125,85 132,125 100,105 68,125 75,85 45,58 85,52" />
      <!-- Specular Highlight -->
      <ellipse cx="88" cy="45" rx="10" ry="5" fill="#ffffff" opacity="0.6" transform="rotate(-30 88 45)" />
    `,
  },
  {
    id: 'cute-star-plant-succulent',
    level: 'high',
    title: 'Cute Star Plant Succulent Pot PNG',
    slug: 'cute-star-plant-succulent-pot-png',
    category: 'aesthetic',
    categoryName: 'Aesthetic & Cute',
    description: 'Adorable terracotta plant pot growing a flourishing star-shaped succulent blossom with smiling kawaii pot face. Perfect for nature lovers and plant moms.',
    tags: ['succulent star png', 'star plant pot', 'kawaii plant clipart', 'cute floral star'],
    searchVolume: '7,100/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 220',
    svgContent: `
      <!-- Terracotta Pot -->
      <polygon fill="#F97316" stroke="#C2410C" stroke-width="3" points="60,130 140,130 130,200 70,200" />
      <rect x="52" y="120" width="96" height="15" rx="4" fill="#EA580C" stroke="#C2410C" stroke-width="2.5" />
      <!-- Smiling Pot Face -->
      <circle cx="85" cy="165" r="3" fill="#ffffff" />
      <circle cx="115" cy="165" r="3" fill="#ffffff" />
      <path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" d="M96,175 Q100,180 104,175" />
      <!-- Star Succulent Bloom -->
      <polygon fill="{{STAR_MAIN}}" stroke="#047857" stroke-width="3" points="100,25 116,68 160,72 125,102 135,145 100,122 65,145 75,102 40,72 84,68" />
      <circle cx="100" cy="85" r="14" fill="#6EE7B7" opacity="0.6" />
    `,
  },

  // =========================================================================
  // GEOMETRIC & COMPASS (+10 assets) -> Total 18
  // =========================================================================
  {
    id: 'nautical-8-point-compass-rose',
    level: 'high',
    title: 'Nautical 8-Point Compass Rose Star PNG',
    slug: 'nautical-8-point-compass-rose-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Precision 8-point nautical compass rose star with alternating contrasting facets, degree ring graduations, and true-north indicator. Authentic maritime navigation vector.',
    tags: ['nautical compass rose', '8 point compass star', 'maritime star png', 'navigation compass vector'],
    searchVolume: '14,100/mo',
    defaultColor: '#0284C7',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Degree Ring -->
      <circle cx="100" cy="100" r="85" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <circle cx="100" cy="100" r="76" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="3,5" />
      <!-- Alternating 8-point Facets -->
      <g stroke="#ffffff" stroke-width="0.5">
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 110,88" />
        <polygon fill="#0369A1" points="100,15 100,100 90,88" />
        <polygon fill="{{STAR_MAIN}}" points="100,185 100,100 90,112" />
        <polygon fill="#0369A1" points="100,185 100,100 110,112" />
        <polygon fill="{{STAR_MAIN}}" points="185,100 100,100 112,110" />
        <polygon fill="#0369A1" points="185,100 100,100 112,90" />
        <polygon fill="{{STAR_MAIN}}" points="15,100 100,100 88,90" />
        <polygon fill="#0369A1" points="15,100 100,100 88,110" />
      </g>
      <circle cx="100" cy="100" r="6" fill="{{STAR_MAIN}}" stroke="#ffffff" stroke-width="1.5" />
    `,
  },
  {
    id: 'sacred-geometry-octagram-mandala',
    level: 'high',
    title: 'Sacred Geometry Octagram Star PNG',
    slug: 'sacred-geometry-octagram-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Sacred geometry 8-pointed star mandala formed by two intersecting concentric squares and interlocking harmony circles. Spiritual symbol for meditation and yoga.',
    tags: ['sacred geometry star', 'octagram mandala png', 'islamic star pattern', 'interlocking square star'],
    searchVolume: '10,500/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Intersecting Squares -->
      <rect x="40" y="40" width="120" height="120" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <rect x="40" y="40" width="120" height="120" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" transform="rotate(45 100 100)" />
      <!-- Harmony Concentric Rings -->
      <circle cx="100" cy="100" r="85" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="6,4" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" />
      <polygon fill="{{STAR_MAIN}}" opacity="0.35" points="100,40 142,58 160,100 142,142 100,160 58,142 40,100 58,58" />
      <circle cx="100" cy="100" r="8" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'hexagram-star-of-david',
    level: 'basic',
    title: 'Geometric Hexagram 6-Point Star PNG',
    slug: 'geometric-hexagram-6-point-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Classic 6-point hexagram star constructed from two perfectly equilateral interlocking triangles. Clean mathematical line art for religious and geometric symbols.',
    tags: ['hexagram star png', '6 point star vector', 'star of david transparent', 'interlocking triangles star'],
    searchVolume: '12,800/mo',
    defaultColor: '#2563EB',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" points="100,20 170,140 30,140" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" points="100,180 30,60 170,60" />
      <polygon fill="{{STAR_MAIN}}" opacity="0.15" points="100,20 123,60 170,60 135,100 170,140 123,140 100,180 77,140 30,140 65,100 30,60 77,60" />
    `,
  },
  {
    id: 'minimal-diamond-lozenge-star',
    level: 'basic',
    title: 'Minimal Diamond Lozenge Star PNG',
    slug: 'minimal-diamond-lozenge-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Minimalist 4-point diamond star formed by pure sharp rhombus lozenge polygons. Ultra-clean modern Scandinavian graphic design element.',
    tags: ['diamond star png', 'rhombus star vector', 'minimal geometric star', 'scandinavian star graphic'],
    searchVolume: '9,200/mo',
    defaultColor: '#171717',
    viewBox: '0 0 200 200',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <polygon points="100,15 110,90 100,100 90,90" />
        <polygon points="100,185 110,110 100,100 90,110" />
        <polygon points="15,100 90,110 100,100 90,90" />
        <polygon points="185,100 110,110 100,100 110,90" />
      </g>
    `,
  },
  {
    id: 'dodeca-12-point-sun-star',
    level: 'high',
    title: 'Dodeca 12-Point Sun Star PNG',
    slug: 'dodeca-12-point-sun-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Intricate 12-pointed geometric star constructed from four overlapping rotated triangles. Dynamic solar wheel emblem for flags, crests, and cartography.',
    tags: ['12 point star png', 'dodecagram star', 'sun wheel star', 'astronomical star vector'],
    searchVolume: '7,800/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="2" fill="none">
        <polygon points="100,15 174,142 26,142" />
        <polygon points="100,185 26,58 174,58" />
        <polygon points="185,100 58,174 58,26" />
        <polygon points="15,100 142,26 142,174" />
      </g>
      <circle cx="100" cy="100" r="30" fill="{{STAR_MAIN}}" opacity="0.15" />
      <circle cx="100" cy="100" r="12" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'geometric-tessellated-starburst',
    level: 'high',
    title: 'Geometric Tessellated Starburst PNG',
    slug: 'geometric-tessellated-starburst-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Mathematical starburst featuring nested concentric diamond facets expanding outward in isometric rhythm. Mesmerizing vector for modern architectural art.',
    tags: ['tessellated star png', 'isometric starburst', 'nested diamond star', 'architectural star pattern'],
    searchVolume: '6,700/mo',
    defaultColor: '#4F46E5',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="1.5" fill="none">
        <polygon points="100,15 142,58 185,100 142,142 100,185 58,142 15,100 58,58" />
        <polygon points="100,40 130,70 160,100 130,130 100,160 70,130 40,100 70,70" opacity="0.75" />
        <polygon points="100,65 118,82 135,100 118,118 100,135 82,118 65,100 82,82" opacity="0.5" />
      </g>
      <polygon fill="{{STAR_MAIN}}" points="100,75 112,88 125,100 112,112 100,125 88,112 75,100 88,88" />
    `,
  },
  {
    id: 'windrose-mariners-star',
    level: 'moderate',
    title: "Mariner's Windrose Star PNG",
    slug: 'mariners-windrose-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Traditional nautical windrose star with sharp cardinal points, graduated circular bearings, and historic sailing compass styling.',
    tags: ['windrose star png', 'mariner star vector', 'sailing compass star', 'vintage nautical star'],
    searchVolume: '8,600/mo',
    defaultColor: '#334155',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Compass Outer Rim -->
      <circle cx="100" cy="100" r="82" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <circle cx="100" cy="100" r="74" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="4,4" />
      <!-- Star Points -->
      <g stroke="{{STAR_MAIN}}" stroke-width="1">
        <polygon fill="{{STAR_MAIN}}" points="100,20 100,100 108,88" />
        <polygon fill="none" points="100,20 100,100 92,88" />
        <polygon fill="{{STAR_MAIN}}" points="100,180 100,100 92,112" />
        <polygon fill="none" points="100,180 100,100 108,112" />
        <polygon fill="{{STAR_MAIN}}" points="180,100 100,100 112,108" />
        <polygon fill="none" points="180,100 100,100 112,92" />
        <polygon fill="{{STAR_MAIN}}" points="20,100 100,100 88,92" />
        <polygon fill="none" points="20,100 100,100 88,108" />
      </g>
    `,
  },
  {
    id: 'geometric-pentagram-knot-star',
    level: 'high',
    title: 'Celtic Knot Pentagram Star PNG',
    slug: 'celtic-knot-pentagram-star-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Endless Celtic knotwork pentagram star woven with continuous interlocking bands and mythological symmetry. Distinctive pagan and fantasy motif.',
    tags: ['celtic knot star', 'pentagram png', 'endless knot star vector', 'mystical geometric star'],
    searchVolume: '11,300/mo',
    defaultColor: '#059669',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Continuous Interwoven Celtic Line Art -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linejoin="round" points="100,20 124,75 178,78 136,118 148,172 100,144 52,172 64,118 22,78 76,75" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" opacity="0.4" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="4,6" />
    `,
  },
  {
    id: 'geometric-fractal-nested-stars',
    level: 'high',
    title: 'Geometric Fractal Nested Stars PNG',
    slug: 'geometric-fractal-nested-stars-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'Recursive fractal arrangement of concentric 5-point stars progressively scaling down toward a luminous center core. High complexity geometric art.',
    tags: ['fractal star png', 'nested stars vector', 'recursive star pattern', 'geometric fractal star'],
    searchVolume: '7,400/mo',
    defaultColor: '#7C3AED',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Layer 1 Large -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" points="100,15 125,72 185,78 140,118 152,178 100,148 48,178 60,118 15,78 75,72" />
      <!-- Layer 2 Medium -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" points="100,45 118,85 160,90 128,118 136,160 100,138 64,160 72,118 40,90 82,85" opacity="0.75" />
      <!-- Layer 3 Small -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" points="100,75 110,95 135,98 116,114 122,138 100,126 78,138 84,114 65,98 90,95" opacity="0.5" />
      <!-- Core Solid Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,90 105,100 118,102 108,110 111,122 100,116 89,122 92,110 82,102 95,100" />
    `,
  },
  {
    id: 'isometric-hexagonal-star-lattice',
    level: 'high',
    title: 'Isometric Hexagonal Star Lattice PNG',
    slug: 'isometric-hexagonal-star-lattice-png',
    category: 'geometric',
    categoryName: 'Geometric & Compass',
    description: 'M.C. Escher inspired optical illusion star formed by an isometric cube honeycomb lattice. Stunning mathematical visual for posters and tech brands.',
    tags: ['optical illusion star', 'isometric star png', 'escher star vector', 'honeycomb star lattice'],
    searchVolume: '6,900/mo',
    defaultColor: '#2563EB',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- 6-Point Isometric Facets -->
      <g stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
        <polygon fill="{{STAR_MAIN}}" points="100,20 140,55 100,75 60,55" opacity="0.95" />
        <polygon fill="{{STAR_MAIN}}" points="140,55 180,90 140,110 100,75" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="180,90 140,145 100,125 140,110" opacity="0.65" />
        <polygon fill="{{STAR_MAIN}}" points="140,145 100,180 60,145 100,125" opacity="0.7" />
        <polygon fill="{{STAR_MAIN}}" points="60,145 20,90 60,75 100,125" opacity="0.85" />
        <polygon fill="{{STAR_MAIN}}" points="20,90 60,55 100,75 60,75" opacity="0.6" />
      </g>
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },

  // =========================================================================
  // OUTLINES & SEALS (+11 assets) -> Total 18
  // =========================================================================
  {
    id: 'dashed-stitched-outline-star',
    level: 'basic',
    title: 'Dashed Stitched Outline Star PNG',
    slug: 'dashed-stitched-outline-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Sewn needlework dashed stitch star outline with textile thread texture. Perfect for sewing patterns, craft badges, and cozy fabric labels.',
    tags: ['stitched star png', 'dashed star outline', 'sewing star vector', 'embroidery star template'],
    searchVolume: '8,200/mo',
    defaultColor: '#E11D48',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-dasharray="8,6" stroke-linecap="round" stroke-linejoin="round" points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
    `,
  },
  {
    id: 'double-line-neon-seal-star',
    level: 'basic',
    title: 'Double Line Minimal Star Outline PNG',
    slug: 'double-line-minimal-star-outline-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Contemporary double-line outline star with parallel offset vector strokes. Sophisticated minimalist mark for upscale boutique logos.',
    tags: ['double line star', 'dual outline star png', 'minimal star stroke', 'modern line art star'],
    searchVolume: '9,700/mo',
    defaultColor: '#171717',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Line -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" points="100,15 125,72 185,78 140,118 152,178 100,148 48,178 60,118 15,78 75,72" />
      <!-- Inner Line -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.8" stroke-linejoin="round" points="100,32 120,74 168,79 132,112 142,160 100,136 58,160 68,112 32,79 80,74" />
    `,
  },
  {
    id: 'retail-burst-discount-seal',
    level: 'moderate',
    title: 'Retail Burst Discount Seal Star PNG',
    slug: 'retail-burst-discount-seal-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'High energy 24-point retail starburst price tag sticker with bold outline. Standard graphic for flash sales, discount percentages, and blowout deals.',
    tags: ['discount starburst png', 'sale seal transparent', 'price burst star', 'retail discount badge'],
    searchVolume: '15,400/mo',
    defaultColor: '#DC2626',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- 24-point Retail Jagged Starburst -->
      <path fill="{{STAR_MAIN}}" opacity="0.1" d="M100,10 L108,30 L125,18 L128,38 L148,32 L145,52 L168,52 L158,70 L180,76 L165,92 L185,102 L165,114 L180,130 L158,136 L168,154 L145,154 L148,174 L128,168 L125,188 L108,176 L100,195 L92,176 L75,188 L72,168 L52,174 L55,154 L32,154 L42,136 L20,130 L35,114 L15,102 L35,92 L20,76 L42,70 L32,52 L55,52 L52,32 L72,38 L75,18 L92,30 Z" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linejoin="round" d="M100,10 L108,30 L125,18 L128,38 L148,32 L145,52 L168,52 L158,70 L180,76 L165,92 L185,102 L165,114 L180,130 L158,136 L168,154 L145,154 L148,174 L128,168 L125,188 L108,176 L100,195 L92,176 L75,188 L72,168 L52,174 L55,154 L32,154 L42,136 L20,130 L35,114 L15,102 L35,92 L20,76 L42,70 L32,52 L55,52 L52,32 L72,38 L75,18 L92,30 Z" />
    `,
  },
  {
    id: 'hand-drawn-rough-sketch-star',
    level: 'basic',
    title: 'Rough Hand Drawn Sketch Star PNG',
    slug: 'rough-hand-drawn-sketch-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Energetic scribbled ink sketch star with overlapping organic pen loops. Authentic hand-drawn aesthetic for student notes, doodles, and indie zines.',
    tags: ['sketch star png', 'hand drawn rough star', 'scribble star outline', 'ink doodle star'],
    searchVolume: '11,900/mo',
    defaultColor: '#171717',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Single continuous energetic doodle loop -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M100,22 L128,175 L18,78 L182,82 L72,174 Z" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" d="M102,28 L126,170 L24,82 L178,86 L76,170 Z" />
    `,
  },
  {
    id: 'circular-notary-embossed-seal',
    level: 'high',
    title: 'Notary Star Embossed Seal PNG',
    slug: 'notary-star-embossed-seal-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Official legal notary seal featuring serrated circular coin edge and 5-point star insignia. Essential for legal certifications, contracts, and diplomas.',
    tags: ['notary seal star', 'embossed stamp png', 'legal certification seal', 'certificate star stamp'],
    searchVolume: '10,300/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Serrated Outer Edge -->
      <circle cx="100" cy="100" r="88" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-dasharray="3,3" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" points="100,42 114,78 152,82 122,108 132,146 100,126 68,146 78,108 48,82 86,78" />
      <circle cx="100" cy="100" r="4" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'wireframe-vector-star-mesh',
    level: 'moderate',
    title: 'Wireframe Vector Star Mesh PNG',
    slug: 'wireframe-vector-star-mesh-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'CAD blueprint wireframe star displaying all triangulation vertices and construction guidelines. Built for 3D modeling tutorials, engineering, and architecture.',
    tags: ['wireframe star png', 'cad star vector', 'blueprint star outline', 'triangulated star mesh'],
    searchVolume: '6,100/mo',
    defaultColor: '#0284C7',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="1.5" fill="none">
        <polygon points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
        <!-- Internal Vertex Lines to Center -->
        <line x1="100" y1="20" x2="100" y2="100" />
        <line x1="180" y1="78" x2="100" y2="100" />
        <line x1="148" y1="174" x2="100" y2="100" />
        <line x1="52" y1="174" x2="100" y2="100" />
        <line x1="20" y1="78" x2="100" y2="100" />
        <line x1="124" y1="72" x2="100" y2="100" opacity="0.5" />
        <line x1="138" y1="118" x2="100" y2="100" opacity="0.5" />
        <line x1="100" y1="146" x2="100" y2="100" opacity="0.5" />
        <line x1="62" y1="118" x2="100" y2="100" opacity="0.5" />
        <line x1="76" y1="72" x2="100" y2="100" opacity="0.5" />
      </g>
      <circle cx="100" cy="100" r="3.5" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'interrupted-stencil-star',
    level: 'basic',
    title: 'Interrupted Stencil Military Star PNG',
    slug: 'interrupted-stencil-military-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Army spray-paint stencil star with classic broken bridge gaps. Iconic asset for military vehicle decals, aviation markings, and rugged outdoor brands.',
    tags: ['stencil star png', 'military star decal', 'army spray star', 'aviation star marking'],
    searchVolume: '12,100/mo',
    defaultColor: '#171717',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Stencil Broken Segments -->
      <g stroke="{{STAR_MAIN}}" stroke-width="8" stroke-linecap="butt" fill="none">
        <line x1="100" y1="25" x2="118" y2="65" />
        <line x1="132" y1="75" x2="175" y2="80" />
        <line x1="165" y1="92" x2="142" y2="115" />
        <line x1="148" y1="130" x2="148" y2="168" />
        <line x1="135" y1="165" x2="105" y2="148" />
        <line x1="95" y1="148" x2="65" y2="165" />
        <line x1="52" y1="168" x2="52" y2="130" />
        <line x1="58" y1="115" x2="35" y2="92" />
        <line x1="25" y1="80" x2="68" y2="75" />
        <line x1="82" y1="65" x2="100" y2="25" />
      </g>
      <!-- Circular Stencil Ring -->
      <circle cx="100" cy="100" r="88" fill="none" stroke="{{STAR_MAIN}}" stroke-width="5" stroke-dasharray="60,18" />
    `,
  },
  {
    id: 'dotted-perforated-stamp-star',
    level: 'basic',
    title: 'Dotted Perforated Stamp Star PNG',
    slug: 'dotted-perforated-stamp-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Perforated postage stamp star constructed entirely from cleanly aligned circular hole punches. Great for coupon clippings, vouchers, and ticketing.',
    tags: ['perforated star png', 'stamp hole star', 'coupon star voucher', 'dotted punch star'],
    searchVolume: '5,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <!-- 5 Points -->
        <circle cx="100" cy="20" r="4.5" />
        <circle cx="108" cy="38" r="4.5" />
        <circle cx="116" cy="56" r="4.5" />
        <circle cx="124" cy="74" r="4.5" />
        <circle cx="144" cy="76" r="4.5" />
        <circle cx="164" cy="78" r="4.5" />
        <circle cx="184" cy="80" r="4.5" />
        <circle cx="168" cy="94" r="4.5" />
        <circle cx="152" cy="108" r="4.5" />
        <circle cx="136" cy="122" r="4.5" />
        <circle cx="140" cy="142" r="4.5" />
        <circle cx="144" cy="162" r="4.5" />
        <circle cx="148" cy="182" r="4.5" />
        <circle cx="130" cy="168" r="4.5" />
        <circle cx="115" cy="156" r="4.5" />
        <circle cx="100" cy="144" r="4.5" />
        <circle cx="85" cy="156" r="4.5" />
        <circle cx="70" cy="168" r="4.5" />
        <circle cx="52" cy="182" r="4.5" />
        <circle cx="56" cy="162" r="4.5" />
        <circle cx="60" cy="142" r="4.5" />
        <circle cx="64" cy="122" r="4.5" />
        <circle cx="48" cy="108" r="4.5" />
        <circle cx="32" cy="94" r="4.5" />
        <circle cx="16" cy="80" r="4.5" />
        <circle cx="36" cy="78" r="4.5" />
        <circle cx="56" cy="76" r="4.5" />
        <circle cx="76" cy="74" r="4.5" />
        <circle cx="84" cy="56" r="4.5" />
        <circle cx="92" cy="38" r="4.5" />
      </g>
    `,
  },
  {
    id: 'brush-grunge-distressed-star',
    level: 'moderate',
    title: 'Brush Grunge Distressed Star PNG',
    slug: 'brush-grunge-distressed-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Weathered paint splatter grunge star with textured dry brush bristle edges. Ideal for rock music merchandise, vintage streetwear, and skate art.',
    tags: ['grunge star png', 'distressed star vector', 'brush stroke star', 'vintage skate star'],
    searchVolume: '10,700/mo',
    defaultColor: '#000000',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Base Star with Grunge Cuts -->
      <polygon fill="{{STAR_MAIN}}" points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
      <!-- Splatter Dots Around -->
      <circle cx="45" cy="40" r="3" fill="{{STAR_MAIN}}" />
      <circle cx="165" cy="45" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="185" cy="145" r="3.5" fill="{{STAR_MAIN}}" />
      <circle cx="30" cy="140" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="105" cy="188" r="3" fill="{{STAR_MAIN}}" />
      <!-- Grunge Specks Inside -->
      <circle cx="95" cy="80" r="4" fill="#ffffff" />
      <circle cx="120" cy="110" r="3" fill="#ffffff" />
      <circle cx="75" cy="125" r="3.5" fill="#ffffff" />
    `,
  },
  {
    id: 'flourish-calligraphy-loop-star',
    level: 'high',
    title: 'Flourish Calligraphy Loop Star PNG',
    slug: 'flourish-calligraphy-loop-star-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Hand-lettered calligraphy flourish star formed by sweeping fountain pen strokes and delicate loop curves. Elegant wedding monogram embellishment.',
    tags: ['calligraphy star png', 'flourish star vector', 'wedding monogram star', 'handwritten loop star'],
    searchVolume: '8,400/mo',
    defaultColor: '#B45309',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M100,20 C110,60 140,80 180,80 C140,90 120,130 130,175 C105,145 90,145 70,175 C80,130 60,90 20,80 C60,80 90,60 100,20 Z" />
        <circle cx="100" cy="100" r="10" stroke-width="2" />
        <!-- Calligraphic Swirl Tails -->
        <path d="M180,80 Q195,85 190,95 Q180,105 170,95" stroke-width="1.8" />
        <path d="M20,80 Q5,85 10,95 Q20,105 30,95" stroke-width="1.8" />
      </g>
    `,
  },
  {
    id: 'ribbon-banner-award-star-seal',
    level: 'high',
    title: 'Award Ribbon Star Seal PNG',
    slug: 'award-ribbon-star-seal-png',
    category: 'outline',
    categoryName: 'Outlines & Seals',
    description: 'Crisp award seal with circular star medal and twin ceremonial ribbon tails. Timeless vector for guarantee stamps, quality certificates, and contests.',
    tags: ['award ribbon seal', 'guarantee star stamp', 'certificate ribbon png', 'quality medal star'],
    searchVolume: '13,200/mo',
    defaultColor: '#2563EB',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Ribbon Tails -->
      <polygon fill="#1E40AF" points="80,140 60,225 85,210 100,225 90,140" />
      <polygon fill="#1D4ED8" points="120,140 140,225 115,210 100,225 110,140" />
      <!-- Circular Rosette -->
      <circle cx="100" cy="90" r="70" fill="none" stroke="{{STAR_MAIN}}" stroke-width="5" />
      <circle cx="100" cy="90" r="62" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-dasharray="4,4" />
      <!-- Center Star -->
      <polygon fill="{{STAR_MAIN}}" stroke="#ffffff" stroke-width="2" points="100,45 112,74 144,78 120,98 128,130 100,114 72,130 80,98 56,78 88,74" />
    `,
  },
];
