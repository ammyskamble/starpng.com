import type { StarAsset } from '../stars';

export const PART2_ASSETS: StarAsset[] = [
  // =========================================================================
  // 3D & GLOSSY (+11 assets) -> Total 18
  // =========================================================================
  {
    id: '3d-glossy-gem-prism-star',
    level: 'high',
    title: '3D Glossy Gem Prism Star PNG',
    slug: '3d-glossy-gem-prism-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Faceted 3D crystal gem star with multi-angle reflective facets, specular edge highlights, and deep volumetric shadow shading. Great for games and rewards.',
    tags: ['3d crystal star png', 'gem star transparent', 'faceted 3d star', 'glossy jewel star'],
    searchVolume: '8,900/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Base Facets -->
      <g stroke="#ffffff" stroke-width="1" stroke-linejoin="round">
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 125,75" opacity="0.95" />
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 75,75" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="185,100 100,100 125,75" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="185,100 100,100 125,125" opacity="0.75" />
        <polygon fill="{{STAR_MAIN}}" points="100,185 100,100 125,125" opacity="0.7" />
        <polygon fill="{{STAR_MAIN}}" points="100,185 100,100 75,125" opacity="0.6" />
        <polygon fill="{{STAR_MAIN}}" points="15,100 100,100 75,125" opacity="0.65" />
        <polygon fill="{{STAR_MAIN}}" points="15,100 100,100 75,75" opacity="0.85" />
      </g>
      <!-- Specular Highlight Flares -->
      <polygon fill="#ffffff" opacity="0.6" points="100,25 103,45 100,60 97,45" />
      <circle cx="100" cy="100" r="5" fill="#ffffff" opacity="0.9" />
    `,
  },
  {
    id: '3d-floating-level-up-star',
    level: 'high',
    title: '3D Floating Level Up Star PNG',
    slug: '3d-floating-level-up-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Tilted isometric 3D level-up star with extruding bottom edge drop shadow and shiny bubble dome finish. Perfect for video game achievements.',
    tags: ['3d level up star', 'isometric game star', 'video game star png', 'floating 3d reward'],
    searchVolume: '10,500/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Extruded 3D Depth Base -->
      <path fill="#78350F" d="M100,30 L123,76 L175,84 L138,120 L146,172 L100,147 L54,172 L62,120 L25,84 L77,76 Z" transform="translate(0, 14)" />
      <!-- Top Bevel Face -->
      <polygon fill="{{STAR_MAIN}}" points="100,30 123,76 175,84 138,120 146,172 100,147 54,172 62,120 25,84 77,76" />
      <!-- Specular Bevel Highlights -->
      <polygon fill="#ffffff" opacity="0.35" points="100,30 100,110 123,76" />
      <polygon fill="#ffffff" opacity="0.2" points="175,84 100,110 138,120" />
      <circle cx="95" cy="55" r="8" fill="#ffffff" opacity="0.7" />
    `,
  },
  {
    id: '3d-rounded-chubby-star',
    level: 'moderate',
    title: '3D Chubby Pillow Star PNG',
    slug: '3d-chubby-pillow-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Soft puffy 3D cushion pillow star with inflated curved arms and smooth ambient occlusion shading. Delightful for kids apps, stickers, and 3D icons.',
    tags: ['3d pillow star', 'puffy 3d star png', 'clay 3d star', 'cute volumetric star'],
    searchVolume: '7,800/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Deep 3D Shadow -->
      <ellipse cx="100" cy="180" rx="60" ry="12" fill="#000000" opacity="0.15" />
      <!-- Pillow Body -->
      <path fill="{{STAR_MAIN}}" d="M100,20 Q115,70 165,75 Q125,115 140,165 Q100,135 60,165 Q75,115 35,75 Q85,70 100,20 Z" />
      <!-- Volume Top Glow -->
      <ellipse cx="90" cy="65" rx="35" ry="20" fill="#ffffff" opacity="0.4" transform="rotate(-15 90 65)" />
      <circle cx="75" cy="55" r="10" fill="#ffffff" opacity="0.7" />
    `,
  },
  {
    id: '3d-beveled-award-star',
    level: 'high',
    title: '3D Beveled Award Star PNG',
    slug: '3d-beveled-award-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Crisp 5-point beveled metallic award star with distinct ridge lines meeting at center apex. Standard design for military ranks, executive honors, and badges.',
    tags: ['3d beveled star', 'military rank star png', 'officer star vector', 'beveled gold star'],
    searchVolume: '9,200/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="#ffffff" stroke-width="0.5">
        <!-- 5 Light Side Facets -->
        <polygon fill="{{STAR_MAIN}}" points="100,20 100,100 124,73" opacity="0.95" />
        <polygon fill="{{STAR_MAIN}}" points="176,77 100,100 139,118" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="147,170 100,100 100,140" opacity="0.85" />
        <polygon fill="{{STAR_MAIN}}" points="53,170 100,100 61,118" opacity="0.65" />
        <polygon fill="{{STAR_MAIN}}" points="24,77 100,100 76,73" opacity="0.75" />
        <!-- 5 Dark Side Facets -->
        <polygon fill="#B45309" points="100,20 100,100 76,73" opacity="0.5" />
        <polygon fill="#B45309" points="176,77 100,100 124,73" opacity="0.4" />
        <polygon fill="#B45309" points="147,170 100,100 139,118" opacity="0.6" />
        <polygon fill="#B45309" points="53,170 100,100 100,140" opacity="0.7" />
        <polygon fill="#B45309" points="24,77 100,100 61,118" opacity="0.55" />
      </g>
      <circle cx="100" cy="100" r="3" fill="#ffffff" />
    `,
  },
  {
    id: '3d-glass-morphism-star',
    level: 'high',
    title: '3D Frosted Glassmorphism Star PNG',
    slug: '3d-frosted-glassmorphism-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Translucent frosted glass 3D star with subtle refraction gradient and bright caustic inner glow. Tailored for Apple iOS style interfaces and modern UI widgets.',
    tags: ['glass star png', 'frosted 3d star', 'glassmorphism star', 'transparent glass icon'],
    searchVolume: '8,400/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Back Shadow Glow -->
      <polygon fill="{{STAR_MAIN}}" opacity="0.25" points="100,25 125,75 178,82 140,118 148,172 100,148 52,172 60,118 22,82 75,75" />
      <!-- Translucent Glass Front -->
      <polygon fill="{{STAR_MAIN}}" opacity="0.45" stroke="#ffffff" stroke-width="2" points="100,20 125,70 178,77 140,113 148,167 100,143 52,167 60,113 22,77 75,70" />
      <!-- Glass Rim Highlights -->
      <path fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" d="M100,20 L125,70 L178,77" opacity="0.8" />
      <circle cx="100" cy="85" r="18" fill="#ffffff" opacity="0.35" />
    `,
  },
  {
    id: '3d-shiny-arcade-star',
    level: 'high',
    title: '3D Shiny Arcade Star PNG',
    slug: '3d-shiny-arcade-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Retro arcade style 3D power-up star with high-contrast glossy gel shell and playful cartoony specular shine. Built for mobile arcade games.',
    tags: ['arcade star png', 'power up star', 'retro game star', 'glossy cartoon star'],
    searchVolume: '11,100/mo',
    defaultColor: '#FACC15',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Base Solid Color -->
      <polygon fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="6" stroke-linejoin="round" points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
      <!-- Gel Dome Highlight -->
      <path fill="#ffffff" opacity="0.55" d="M100,32 L118,72 C110,85 90,85 82,72 Z" />
      <ellipse cx="65" cy="90" rx="8" ry="14" fill="#ffffff" opacity="0.6" transform="rotate(-25 65 90)" />
      <circle cx="100" cy="115" r="12" fill="#FEF08A" opacity="0.8" />
    `,
  },
  {
    id: '3d-metallic-platinum-star',
    level: 'high',
    title: '3D Metallic Platinum Star PNG',
    slug: '3d-metallic-platinum-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Sleek brushed platinum 3D star with cool silver undertones and sharp faceted edges. Elegant VIP badge for luxury brands and premium memberships.',
    tags: ['platinum star png', 'silver 3d star', 'metallic silver star', 'luxury star badge'],
    searchVolume: '6,200/mo',
    defaultColor: '#94A3B8',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="#ffffff" stroke-width="0.8">
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 130,80" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="185,100 100,100 130,80" opacity="0.7" />
        <polygon fill="{{STAR_MAIN}}" points="185,100 100,100 130,120" opacity="0.5" />
        <polygon fill="{{STAR_MAIN}}" points="100,185 100,100 130,120" opacity="0.6" />
        <polygon fill="{{STAR_MAIN}}" points="100,185 100,100 70,120" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="15,100 100,100 70,120" opacity="0.95" />
        <polygon fill="{{STAR_MAIN}}" points="15,100 100,100 70,80" opacity="0.75" />
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 70,80" opacity="0.65" />
      </g>
      <circle cx="100" cy="100" r="4" fill="#ffffff" />
    `,
  },
  {
    id: '3d-origami-folded-star',
    level: 'high',
    title: '3D Origami Folded Star PNG',
    slug: '3d-origami-folded-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Japanese origami paper folded 3D star with crisp paper creases, realistic light angles, and tactile geometric depth.',
    tags: ['origami star png', 'folded paper star', 'japanese 3d star', 'geometric paper craft star'],
    searchVolume: '5,800/mo',
    defaultColor: '#F97316',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="#000000" stroke-width="0.5" stroke-opacity="0.1">
        <polygon fill="{{STAR_MAIN}}" points="100,20 100,100 135,65" opacity="0.95" />
        <polygon fill="{{STAR_MAIN}}" points="135,65 100,100 180,100" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="180,100 100,100 135,135" opacity="0.65" />
        <polygon fill="{{STAR_MAIN}}" points="135,135 100,100 100,180" opacity="0.75" />
        <polygon fill="{{STAR_MAIN}}" points="100,180 100,100 65,135" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="65,135 100,100 20,100" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="20,100 100,100 65,65" opacity="0.6" />
        <polygon fill="{{STAR_MAIN}}" points="65,65 100,100 100,20" opacity="0.7" />
      </g>
    `,
  },
  {
    id: '3d-spinning-coin-star',
    level: 'high',
    title: '3D Gold Coin Star PNG',
    slug: '3d-gold-coin-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Heavy cylindrical 3D golden coin stamped with an embossed star in high relief. Ideal for casino games, crypto rewards, and loyalty tokens.',
    tags: ['star coin png', '3d reward coin', 'embossed star token', 'crypto star coin'],
    searchVolume: '9,800/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Coin Edge Thickness -->
      <ellipse cx="100" cy="115" rx="80" ry="70" fill="#A16207" />
      <!-- Coin Face -->
      <ellipse cx="100" cy="95" rx="80" ry="70" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="4" />
      <ellipse cx="100" cy="95" rx="68" ry="58" fill="none" stroke="#CA8A04" stroke-width="2" stroke-dasharray="6,4" />
      <!-- Embossed Star in Relief -->
      <polygon fill="#FEF08A" stroke="#A16207" stroke-width="2" points="100,50 114,80 148,84 122,106 128,140 100,124 72,140 78,106 52,84 86,80" />
    `,
  },
  {
    id: '3d-isometric-cube-star-node',
    level: 'high',
    title: '3D Isometric Block Star PNG',
    slug: '3d-isometric-block-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Chunky voxel isometric cube star graphic with extruded 3D block geometry. Great for sandbox gaming, Minecraft style mods, and pixel worlds.',
    tags: ['voxel star png', 'isometric 3d star', 'minecraft star icon', 'block star png'],
    searchVolume: '6,600/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Isometric Extruded Block Star -->
      <g stroke="#000000" stroke-width="1.5" stroke-linejoin="round">
        <polygon fill="{{STAR_MAIN}}" points="100,20 140,55 140,110 100,75" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="100,20 60,55 60,110 100,75" opacity="0.7" />
        <polygon fill="{{STAR_MAIN}}" points="140,55 180,90 140,125 100,90" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="60,55 20,90 60,125 100,90" opacity="0.6" />
        <polygon fill="{{STAR_MAIN}}" points="100,125 140,160 100,195 60,160" opacity="0.5" />
      </g>
      <circle cx="100" cy="90" r="12" fill="#ffffff" opacity="0.85" />
    `,
  },
  {
    id: '3d-bubblegum-pearl-star',
    level: 'moderate',
    title: '3D Bubblegum Pearl Star PNG',
    slug: '3d-bubblegum-pearl-star-png',
    category: '3d',
    categoryName: '3D & Glossy',
    description: 'Iridescent pearl sheen 3D star with pearlescent pastel luster and soft rainbow gradient glow. Beautiful for beauty brands and lifestyle clipart.',
    tags: ['pearl star png', 'iridescent 3d star', 'pastel glossy star', 'bubblegum star vector'],
    searchVolume: '7,100/mo',
    defaultColor: '#F472B6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Pearlescent Base -->
      <path fill="{{STAR_MAIN}}" d="M100,18 C112,68 138,72 182,100 C138,128 112,132 100,182 C88,132 62,128 18,100 C62,72 88,68 100,18 Z" />
      <!-- Pearly Glints -->
      <ellipse cx="88" cy="65" rx="20" ry="10" fill="#ffffff" opacity="0.75" transform="rotate(-30 88 65)" />
      <circle cx="120" cy="120" r="8" fill="#ffffff" opacity="0.5" />
      <circle cx="75" cy="120" r="5" fill="#ffffff" opacity="0.5" />
    `,
  },

  // =========================================================================
  // GOLD & METALLIC (+12 assets) -> Total 18
  // =========================================================================
  {
    id: 'royal-golden-star-crest',
    level: 'high',
    title: 'Royal Golden Star Crest PNG',
    slug: 'royal-golden-star-crest-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Majestic royal gold star crest flanked by heraldic laurel leaves and filigree crown flourishes. Prestigious vector for certificates and luxury branding.',
    tags: ['royal gold star', 'heraldic star crest', 'laurel star badge', 'luxury gold emblem'],
    searchVolume: '10,200/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Laurel Wreath Around Base -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" d="M35,130 C30,165 70,185 110,185 C150,185 190,165 185,130" />
      <!-- Leaves -->
      <g fill="{{STAR_MAIN}}" opacity="0.85">
        <ellipse cx="45" cy="155" rx="8" ry="4" transform="rotate(-40 45 155)" />
        <ellipse cx="65" cy="175" rx="8" ry="4" transform="rotate(-20 65 175)" />
        <ellipse cx="155" cy="175" rx="8" ry="4" transform="rotate(20 155 175)" />
        <ellipse cx="175" cy="155" rx="8" ry="4" transform="rotate(40 175 155)" />
      </g>
      <!-- Center Royal Beveled Gold Star -->
      <polygon fill="{{STAR_MAIN}}" points="110,25 125,72 175,76 135,110 146,160 110,132 74,160 85,110 45,76 95,72" />
      <polygon fill="#FDE68A" points="110,25 110,132 125,72" opacity="0.6" />
      <polygon fill="#FDE68A" points="175,76 110,132 135,110" opacity="0.5" />
    `,
  },
  {
    id: 'polished-gold-sunburst-star',
    level: 'high',
    title: 'Polished Gold Sunburst Star PNG',
    slug: 'polished-gold-sunburst-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Dazzling 16-point polished golden sunburst star with alternating long and short rays. High shine finish for awards, diplomas, and milestone anniversaries.',
    tags: ['gold sunburst star', '16 point gold star', 'golden award sunburst', 'metallic starburst png'],
    searchVolume: '8,700/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- 16-point Gold Rays -->
      <g fill="{{STAR_MAIN}}">
        <polygon points="100,10 106,85 100,90 94,85" />
        <polygon points="100,190 106,115 100,110 94,115" />
        <polygon points="10,100 85,106 90,100 85,94" />
        <polygon points="190,100 115,106 110,100 115,94" />
        <!-- Diagonals -->
        <polygon points="36,36 90,88 88,90" />
        <polygon points="164,36 112,88 110,90" />
        <polygon points="36,164 90,112 88,110" />
        <polygon points="164,164 112,112 110,110" />
      </g>
      <!-- Central Coin Medallion -->
      <circle cx="100" cy="100" r="38" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="3" />
      <polygon fill="#FEF08A" points="100,75 106,92 125,93 110,104 115,121 100,110 85,121 90,104 75,93 94,92" />
    `,
  },
  {
    id: 'gold-nugget-texture-star',
    level: 'moderate',
    title: 'Textured Gold Nugget Star PNG',
    slug: 'textured-gold-nugget-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Heavy raw gold nugget star with hammered metallic foil texture and warm golden gleam. Rustic premium look for wine labels and artisan brands.',
    tags: ['gold nugget star', 'hammered gold star', 'gold foil star png', 'metallic gold clipart'],
    searchVolume: '6,400/mo',
    defaultColor: '#CA8A04',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" points="100,18 124,70 182,78 140,118 150,176 100,148 50,176 60,118 18,78 76,70" />
      <!-- Hammered Specular Specks -->
      <circle cx="85" cy="65" r="4" fill="#FEF08A" opacity="0.8" />
      <circle cx="115" cy="65" r="3" fill="#FEF08A" opacity="0.8" />
      <circle cx="100" cy="100" r="6" fill="#FEF08A" opacity="0.9" />
      <circle cx="130" cy="105" r="4" fill="#FEF08A" opacity="0.7" />
      <circle cx="70" cy="105" r="4" fill="#FEF08A" opacity="0.7" />
      <circle cx="90" cy="130" r="5" fill="#FEF08A" opacity="0.6" />
      <circle cx="110" cy="130" r="3.5" fill="#FEF08A" opacity="0.6" />
    `,
  },
  {
    id: 'antique-bronze-gold-star',
    level: 'moderate',
    title: 'Antique Bronze Gold Star PNG',
    slug: 'antique-bronze-gold-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Vintage weathered antique bronze star with tarnished metallic undertones and classical hand-carved facets. Ideal for heritage seals and museum graphics.',
    tags: ['bronze star png', 'antique gold star', 'vintage metallic star', 'weathered star vector'],
    searchVolume: '5,900/mo',
    defaultColor: '#B45309',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Beveled Antique Star -->
      <g stroke="#78350F" stroke-width="1.5">
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 126,72" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="100,15 100,100 74,72" opacity="0.6" />
        <polygon fill="{{STAR_MAIN}}" points="180,78 100,100 142,118" opacity="0.85" />
        <polygon fill="{{STAR_MAIN}}" points="180,78 100,100 126,72" opacity="0.55" />
        <polygon fill="{{STAR_MAIN}}" points="150,175 100,100 100,142" opacity="0.75" />
        <polygon fill="{{STAR_MAIN}}" points="150,175 100,100 142,118" opacity="0.5" />
        <polygon fill="{{STAR_MAIN}}" points="50,175 100,100 100,142" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="50,175 100,100 58,118" opacity="0.65" />
        <polygon fill="{{STAR_MAIN}}" points="20,78 100,100 58,118" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="20,78 100,100 74,72" opacity="0.5" />
      </g>
    `,
  },
  {
    id: 'gold-foil-stamped-star',
    level: 'high',
    title: 'Gold Foil Stamped Star PNG',
    slug: 'gold-foil-stamped-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Hot foil stamped gold star with fine embossed perimeter border and reflective micro-lines. Tailored for wedding stationary, invites, and packaging.',
    tags: ['gold foil star png', 'foil stamp star', 'embossed gold star', 'wedding invitation star'],
    searchVolume: '9,300/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Embossed Stamped Ridge -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" points="100,15 125,72 185,78 140,118 152,178 100,148 48,178 60,118 15,78 75,72" />
      <!-- Solid Inner Foil Face -->
      <polygon fill="{{STAR_MAIN}}" points="100,28 121,72 168,78 132,112 142,160 100,136 58,160 68,112 32,78 79,72" />
      <polygon fill="#FEF08A" opacity="0.5" points="100,28 100,136 121,72" />
    `,
  },
  {
    id: 'gold-sheriff-western-star',
    level: 'moderate',
    title: 'Gold Western Sheriff Star PNG',
    slug: 'gold-western-sheriff-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Authentic wild west sheriff star badge with polished gold ball tips on all 5 points and central circular ring. Perfect for costume graphics and badges.',
    tags: ['gold sheriff star', 'western marshal star', 'ball tip star png', 'deputy star badge'],
    searchVolume: '8,100/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="{{STAR_MAIN}}" stroke="#92400E" stroke-width="2" points="100,24 122,72 176,76 136,114 146,168 100,142 54,168 64,114 24,76 78,72" />
      <!-- Ball Tips on 5 Star Points -->
      <circle cx="100" cy="24" r="9" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
      <circle cx="176" cy="76" r="9" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
      <circle cx="146" cy="168" r="9" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
      <circle cx="54" cy="168" r="9" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
      <circle cx="24" cy="76" r="9" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
      <!-- Center Circle -->
      <circle cx="100" cy="104" r="24" fill="none" stroke="#FEF08A" stroke-width="2.5" />
    `,
  },
  {
    id: 'gold-medal-winner-star',
    level: 'high',
    title: 'Gold Medal Winner Star PNG',
    slug: 'gold-medal-winner-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Champion 1st place gold medal star featuring a polished circular award disc with beveled 5-point star emblem. Essential for tournament graphics.',
    tags: ['gold medal star png', 'first place star', 'winner award star', 'championship gold star'],
    searchVolume: '12,600/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Medal Outer Rim -->
      <circle cx="100" cy="100" r="88" fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="5" />
      <circle cx="100" cy="100" r="76" fill="#FBBF24" stroke="#FEF08A" stroke-width="3" />
      <!-- Beveled Winner Star -->
      <g stroke="#CA8A04" stroke-width="1">
        <polygon fill="#FEF08A" points="100,42 114,80 156,82 122,108 134,148 100,126 66,148 78,108 44,82 86,80" />
      </g>
      <circle cx="100" cy="100" r="10" fill="#ffffff" opacity="0.6" />
    `,
  },
  {
    id: 'gold-sparkle-glitter-star',
    level: 'moderate',
    title: 'Gold Glitter Sparkle Star PNG',
    slug: 'gold-glitter-sparkle-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Golden sparkle star with scattered surrounding gold dust particles and glint accents. Adds celebratory magic to New Year banners and birthday cards.',
    tags: ['gold sparkle png', 'gold glitter star', 'golden twinkle transparent', 'magic gold star'],
    searchVolume: '11,200/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Main Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,18 114,86 182,100 114,114 100,182 86,114 18,100 86,86" />
      <polygon fill="#FEF08A" points="100,50 106,94 150,100 106,106 100,150 94,106 50,100 94,94" />
      <!-- Glitter Particles -->
      <circle cx="45" cy="45" r="4" fill="{{STAR_MAIN}}" />
      <circle cx="155" cy="45" r="5" fill="#FEF08A" />
      <circle cx="160" cy="155" r="3.5" fill="{{STAR_MAIN}}" />
      <circle cx="40" cy="160" r="4" fill="#FEF08A" />
      <circle cx="70" cy="30" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="130" cy="170" r="3" fill="#FEF08A" />
    `,
  },
  {
    id: '24k-ingot-luxury-star',
    level: 'high',
    title: '24K Ingot Luxury Star PNG',
    slug: '24k-ingot-luxury-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Heavy 24-karat gold bullion star with chamfered geometric edges and mirror polish highlights. The gold standard of luxury vector graphics.',
    tags: ['24k gold star', 'gold bullion star', 'luxury jewelry star png', 'pure gold star vector'],
    searchVolume: '7,500/mo',
    defaultColor: '#CA8A04',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="#FEF08A" stroke-width="1.5">
        <polygon fill="{{STAR_MAIN}}" points="100,20 120,75 180,80 135,120 145,175 100,145 55,175 65,120 20,80 80,75" />
      </g>
      <!-- Deep Contrast Shadow Half -->
      <path fill="#78350F" opacity="0.3" d="M100,20 L120,75 L180,80 L135,120 L145,175 L100,145 Z" />
      <!-- Specular Highlight Streak -->
      <polygon fill="#ffffff" opacity="0.5" points="100,25 103,60 100,90 97,60" />
    `,
  },
  {
    id: 'golden-compass-rose-star',
    level: 'high',
    title: 'Golden Compass Rose Star PNG',
    slug: 'golden-compass-rose-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Nautical 8-point compass star rendered in polished brass and gold leaf. Premium cartographic element for vintage maps, travel brands, and nautical decor.',
    tags: ['gold compass star', 'golden north star', 'nautical compass rose png', 'brass star vector'],
    searchVolume: '8,300/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Compass Outer Dial -->
      <circle cx="100" cy="100" r="86" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="4,6" />
      <!-- 8-point Alternating Halves -->
      <g stroke="#ffffff" stroke-width="0.5">
        <!-- North -->
        <polygon fill="{{STAR_MAIN}}" points="100,16 100,100 110,88" />
        <polygon fill="#FEF08A" points="100,16 100,100 90,88" />
        <!-- South -->
        <polygon fill="{{STAR_MAIN}}" points="100,184 100,100 90,112" />
        <polygon fill="#FEF08A" points="100,184 100,100 110,112" />
        <!-- East -->
        <polygon fill="{{STAR_MAIN}}" points="184,100 100,100 112,110" />
        <polygon fill="#FEF08A" points="184,100 100,100 112,90" />
        <!-- West -->
        <polygon fill="{{STAR_MAIN}}" points="16,100 100,100 88,90" />
        <polygon fill="#FEF08A" points="16,100 100,100 88,110" />
      </g>
      <circle cx="100" cy="100" r="7" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
    `,
  },
  {
    id: 'gold-filigree-vintage-star',
    level: 'high',
    title: 'Gold Filigree Vintage Star PNG',
    slug: 'gold-filigree-vintage-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Ornate victorian gold filigree star with delicate swirling lace patterns and baroque curls. Perfect for antique books, luxury cosmetic packaging, and jewelry tags.',
    tags: ['filigree star png', 'victorian gold star', 'ornate baroque star', 'lace star vector'],
    searchVolume: '5,700/mo',
    defaultColor: '#CA8A04',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="2" fill="none" stroke-linecap="round">
        <path d="M100,20 Q115,60 135,65 Q115,75 100,100" />
        <path d="M100,20 Q85,60 65,65 Q85,75 100,100" />
        <path d="M180,100 Q140,115 135,135 Q125,115 100,100" />
        <path d="M180,100 Q140,85 135,65 Q125,85 100,100" />
        <path d="M100,180 Q85,140 65,135 Q85,125 100,100" />
        <path d="M100,180 Q115,140 135,135 Q115,125 100,100" />
        <path d="M20,100 Q60,85 65,65 Q75,85 100,100" />
        <path d="M20,100 Q60,115 65,135 Q75,115 100,100" />
      </g>
      <circle cx="100" cy="100" r="9" fill="{{STAR_MAIN}}" stroke="#FEF08A" stroke-width="2" />
    `,
  },
  {
    id: 'gold-diamond-cut-star',
    level: 'high',
    title: 'Gold Diamond Cut Star PNG',
    slug: 'gold-diamond-cut-star-png',
    category: 'gold',
    categoryName: 'Gold & Metallic',
    description: 'Precision diamond-cut gold star with brilliant-cut geometric facets mimicking a precious gem set in yellow gold. High luxury icon.',
    tags: ['diamond cut star', 'jewelry star png', 'faceted gold star', 'luxury gem star'],
    searchVolume: '6,900/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="#ffffff" stroke-width="1">
        <polygon fill="{{STAR_MAIN}}" points="100,20 115,70 100,100" opacity="0.9" />
        <polygon fill="{{STAR_MAIN}}" points="100,20 85,70 100,100" opacity="0.7" />
        <polygon fill="{{STAR_MAIN}}" points="175,80 125,95 100,100" opacity="0.85" />
        <polygon fill="{{STAR_MAIN}}" points="175,80 130,120 100,100" opacity="0.65" />
        <polygon fill="{{STAR_MAIN}}" points="145,170 100,130 100,100" opacity="0.8" />
        <polygon fill="{{STAR_MAIN}}" points="55,170 100,130 100,100" opacity="0.6" />
        <polygon fill="{{STAR_MAIN}}" points="25,80 70,120 100,100" opacity="0.75" />
        <polygon fill="{{STAR_MAIN}}" points="25,80 75,95 100,100" opacity="0.95" />
      </g>
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },

  // =========================================================================
  // NEON & GLOW (+16 assets) -> Total 18
  // =========================================================================
  {
    id: 'neon-cyber-sign-star',
    level: 'moderate',
    title: 'Neon Cyber Sign Star PNG',
    slug: 'neon-cyber-sign-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Electric neon tube star sign with multi-layered radiant glow halo and glass tube connectors. Perfect for night club flyers, neon signage, and synthwave art.',
    tags: ['neon star png', 'neon sign transparent', 'electric glowing star', 'cyberpunk neon star'],
    searchVolume: '13,500/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Diffuse Glow Aura -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="16" opacity="0.15" stroke-linejoin="round" points="100,25 122,76 178,82 136,120 148,175 100,146 52,175 64,120 22,82 78,76" />
      <!-- Mid Glow Aura -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="8" opacity="0.4" stroke-linejoin="round" points="100,25 122,76 178,82 136,120 148,175 100,146 52,175 64,120 22,82 78,76" />
      <!-- Core Intense Tube -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linejoin="round" points="100,25 122,76 178,82 136,120 148,175 100,146 52,175 64,120 22,82 78,76" />
      <!-- Inner White Hot Plasma Core -->
      <polygon fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" points="100,25 122,76 178,82 136,120 148,175 100,146 52,175 64,120 22,82 78,76" />
    `,
  },
  {
    id: 'neon-pink-retro-sparkle',
    level: 'moderate',
    title: 'Neon Pink Retro Sparkle Star PNG',
    slug: 'neon-pink-retro-sparkle-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Vibrant hot magenta neon 4-point sparkle star with high-voltage radioactive glow. Quintessential asset for 80s retro wave and synthwave graphics.',
    tags: ['pink neon star', 'hot pink sparkle', 'synthwave star png', 'glowing 4 point star'],
    searchVolume: '11,800/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Glow Halos -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="18" opacity="0.12" stroke-linejoin="round" points="100,15 114,86 185,100 114,114 100,185 86,114 15,100 86,86" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="8" opacity="0.45" stroke-linejoin="round" points="100,15 114,86 185,100 114,114 100,185 86,114 15,100 86,86" />
      <!-- Bright Neon Core -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3.5" stroke-linejoin="round" points="100,15 114,86 185,100 114,114 100,185 86,114 15,100 86,86" />
      <polygon fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" points="100,15 114,86 185,100 114,114 100,185 86,114 15,100 86,86" />
      <circle cx="100" cy="100" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-double-ring-pulsar',
    level: 'high',
    title: 'Neon Double Ring Pulsar Star PNG',
    slug: 'neon-double-ring-pulsar-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Pulsing neon star enclosed within concentric neon light rings. High-energy electronic dance music visual asset for DJ drops and Twitch streams.',
    tags: ['neon pulsar star', 'glowing ring star', 'edm neon graphic', 'twitch neon star png'],
    searchVolume: '9,400/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Concentric Neon Rings -->
      <circle cx="100" cy="100" r="82" fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" opacity="0.25" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" opacity="0.6" stroke-dasharray="6,8" />
      <!-- Glowing Center Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="8" opacity="0.4" stroke-linejoin="round" points="100,35 114,86 165,100 114,114 100,165 86,114 35,100 86,86" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" points="100,35 114,86 165,100 114,114 100,165 86,114 35,100 86,86" />
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-green-laser-star',
    level: 'moderate',
    title: 'Neon Green Laser Star PNG',
    slug: 'neon-green-laser-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Radioactive neon green laser star with ultra-bright lime luminescence. Essential for gaming overlays, monster energy vibes, and toxic cyber themes.',
    tags: ['neon green star', 'laser star png', 'lime green star transparent', 'toxic neon star'],
    searchVolume: '8,200/mo',
    defaultColor: '#22C55E',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="16" opacity="0.2" stroke-linejoin="round" points="100,20 120,74 178,78 134,118 146,174 100,144 54,174 66,118 22,78 80,74" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" opacity="0.7" stroke-linejoin="round" points="100,20 120,74 178,78 134,118 146,174 100,144 54,174 66,118 22,78 80,74" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" points="100,20 120,74 178,78 134,118 146,174 100,144 54,174 66,118 22,78 80,74" />
    `,
  },
  {
    id: 'neon-interlocking-duo-stars',
    level: 'high',
    title: 'Neon Interlocking Duo Stars PNG',
    slug: 'neon-interlocking-duo-stars-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Two interlocking luminous neon stars with vivid overlapping light blending. Ideal for couples, collaborations, and music festival branding.',
    tags: ['neon duo stars', 'interlocking neon png', 'twin glowing stars', 'festival neon art'],
    searchVolume: '7,700/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 220 180',
    svgContent: `
      <!-- Star 1 Glow -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="10" opacity="0.3" stroke-linejoin="round" points="80,20 95,68 145,72 108,105 118,155 80,128 42,155 52,105 15,72 65,68" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" points="80,20 95,68 145,72 108,105 118,155 80,128 42,155 52,105 15,72 65,68" />
      <!-- Star 2 Glow (Offset Overlap) -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="10" opacity="0.3" stroke-linejoin="round" points="145,35 158,76 200,80 168,110 176,152 145,130 114,152 122,110 90,80 132,76" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" points="145,35 158,76 200,80 168,110 176,152 145,130 114,152 122,110 90,80 132,76" />
    `,
  },
  {
    id: 'neon-sunburst-clock-star',
    level: 'high',
    title: 'Neon Sunburst Clock Star PNG',
    slug: 'neon-sunburst-clock-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: '12-pointed radial neon starburst resembling an electric clock or dial gauge. High tech glowing asset for dashboards and dark mode UI.',
    tags: ['neon starburst png', 'radial neon star', 'glowing dial star', 'dashboard neon icon'],
    searchVolume: '6,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Glow -->
      <g stroke="{{STAR_MAIN}}" stroke-width="8" opacity="0.25" stroke-linecap="round">
        <line x1="100" y1="15" x2="100" y2="45" />
        <line x1="100" y1="155" x2="100" y2="185" />
        <line x1="15" y1="100" x2="45" y2="100" />
        <line x1="155" y1="100" x2="185" y2="100" />
      </g>
      <!-- White Core Rays -->
      <g stroke="#ffffff" stroke-width="2.5" stroke-linecap="round">
        <line x1="100" y1="15" x2="100" y2="45" />
        <line x1="100" y1="155" x2="100" y2="185" />
        <line x1="15" y1="100" x2="45" y2="100" />
        <line x1="155" y1="100" x2="185" y2="100" />
      </g>
      <!-- Center Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" opacity="0.5" points="100,55 110,90 145,100 110,110 100,145 90,110 55,100 90,90" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" points="100,55 110,90 145,100 110,110 100,145 90,110 55,100 90,90" />
    `,
  },
  {
    id: 'neon-heart-star-love-burst',
    level: 'moderate',
    title: 'Neon Heart Star Love Burst PNG',
    slug: 'neon-heart-star-love-burst-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Romantic fusion of a glowing neon heart outline with a radiant 4-point star bursting from the center. Designed for Valentine events and nightlife.',
    tags: ['neon heart star', 'love burst neon png', 'romantic glowing star', 'valentines neon star'],
    searchVolume: '8,600/mo',
    defaultColor: '#F43F5E',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Glowing Heart Tube -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" opacity="0.25" d="M100,165 C60,130 25,95 25,60 C25,35 45,18 70,18 C85,18 95,25 100,35 C105,25 115,18 130,18 C155,18 175,35 175,60 C175,95 140,130 100,165 Z" />
      <path fill="none" stroke="#ffffff" stroke-width="2.5" d="M100,165 C60,130 25,95 25,60 C25,35 45,18 70,18 C85,18 95,25 100,35 C105,25 115,18 130,18 C155,18 175,35 175,60 C175,95 140,130 100,165 Z" />
      <!-- Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,38 106,75 145,80 106,85 100,122 94,85 55,80 94,75" />
      <circle cx="100" cy="80" r="4" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-cross-gothic-star',
    level: 'high',
    title: 'Neon Gothic Cross Star PNG',
    slug: 'neon-gothic-cross-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Sharp gothic dagger cross star with intense ultraviolet purple neon illumination. High aesthetic appeal for streetwear, dark techno, and tattoo art.',
    tags: ['gothic neon star', 'dagger star png', 'cross star transparent', 'dark synthwave star'],
    searchVolume: '7,900/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="14" opacity="0.2" points="100,10 106,86 182,100 106,114 100,190 94,114 18,100 94,86" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="5" opacity="0.6" points="100,10 106,86 182,100 106,114 100,190 94,114 18,100 94,86" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" points="100,10 106,86 182,100 106,114 100,190 94,114 18,100 94,86" />
      <circle cx="100" cy="100" r="14" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-triangle-portal-star',
    level: 'high',
    title: 'Neon Triangle Portal Star PNG',
    slug: 'neon-triangle-portal-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Synthwave neon inverted triangle framing an electric glowing starburst. Signature 1980s retro cyber grid aesthetic.',
    tags: ['neon triangle star', 'synthwave portal png', 'retro 80s neon star', 'arcade neon portal'],
    searchVolume: '9,100/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Neon Triangle -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="10" opacity="0.25" stroke-linejoin="round" points="100,175 25,35 175,35" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" points="100,175 25,35 175,35" />
      <!-- Star in Center -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" opacity="0.5" points="100,45 108,82 145,90 108,98 100,135 92,98 55,90 92,82" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" points="100,45 108,82 145,90 108,98 100,135 92,98 55,90 92,82" />
    `,
  },
  {
    id: 'neon-hexagon-shield-star',
    level: 'moderate',
    title: 'Neon Hexagon Shield Star PNG',
    slug: 'neon-hexagon-shield-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Hexagonal glowing cyber barrier containing an electric star vector. Perfect for esports teams, gaming shields, and stream notifications.',
    tags: ['neon shield star', 'hex star png', 'esports neon badge', 'cyber glow shield'],
    searchVolume: '6,300/mo',
    defaultColor: '#3B82F6',
    viewBox: '0 0 200 200',
    svgContent: `
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" opacity="0.25" stroke-linejoin="round" points="100,15 175,58 175,142 100,185 25,142 25,58" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" points="100,15 175,58 175,142 100,185 25,142 25,58" />
      <polygon fill="{{STAR_MAIN}}" points="100,48 112,85 152,100 112,115 100,152 88,115 48,100 88,85" />
      <circle cx="100" cy="100" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-shooting-meteor-star',
    level: 'high',
    title: 'Neon Shooting Meteor Star PNG',
    slug: 'neon-shooting-meteor-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Diagonal glowing shooting meteor star with radiant neon trail lines. Dynamic transparent graphic for sci-fi games, banners, and streaming.',
    tags: ['neon shooting star', 'glowing comet png', 'neon meteor vector', 'cyan shooting star transparent'],
    searchVolume: '10,700/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Diagonal Neon Trails -->
      <g stroke="{{STAR_MAIN}}" stroke-width="8" opacity="0.3" stroke-linecap="round">
        <line x1="18" y1="20" x2="110" y2="105" />
        <line x1="38" y1="12" x2="128" y2="95" />
        <line x1="10" y1="42" x2="98" y2="122" />
      </g>
      <g stroke="#ffffff" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="20" x2="110" y2="105" />
        <line x1="38" y1="12" x2="128" y2="95" />
        <line x1="10" y1="42" x2="98" y2="122" />
      </g>
      <!-- Comet Head Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" opacity="0.4" points="150,85 160,122 198,130 160,138 150,175 140,138 102,130 140,122" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2.5" points="150,85 160,122 198,130 160,138 150,175 140,138 102,130 140,122" />
    `,
  },
  {
    id: 'neon-octagram-compass-star',
    level: 'high',
    title: 'Neon Octagram Compass Star PNG',
    slug: 'neon-octagram-compass-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Eight-pointed illuminated neon octagram star with brilliant electric spikes. Striking navigation emblem for electronic music artwork.',
    tags: ['neon octagram png', '8 point neon star', 'glowing compass rose', 'electric starburst vector'],
    searchVolume: '8,500/mo',
    defaultColor: '#E11D48',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Cardinal and Diagonal Neon Needles -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="10" opacity="0.25" points="100,15 106,85 175,70 115,95 185,100 115,105 175,130 106,115 100,185 94,115 25,130 85,105 15,100 85,95 25,70 94,85" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" points="100,15 106,85 175,70 115,95 185,100 115,105 175,130 106,115 100,185 94,115 25,130 85,105 15,100 85,95 25,70 94,85" />
      <circle cx="100" cy="100" r="5" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-dotted-matrix-star',
    level: 'moderate',
    title: 'Neon Dotted Matrix Star PNG',
    slug: 'neon-dotted-matrix-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Star composed of concentric glowing LED dots arranged in radial star vectors. Evokes digital billboards and retro stadium displays.',
    tags: ['led star png', 'neon dot star', 'matrix glowing star', 'stadium led star'],
    searchVolume: '5,400/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 200 200',
    svgContent: `
      <g fill="{{STAR_MAIN}}">
        <circle cx="100" cy="20" r="4" />
        <circle cx="100" cy="40" r="4.5" />
        <circle cx="100" cy="60" r="5" />
        <circle cx="100" cy="140" r="5" />
        <circle cx="100" cy="160" r="4.5" />
        <circle cx="100" cy="180" r="4" />
        <circle cx="20" cy="100" r="4" />
        <circle cx="40" cy="100" r="4.5" />
        <circle cx="60" cy="100" r="5" />
        <circle cx="140" cy="100" r="5" />
        <circle cx="160" cy="100" r="4.5" />
        <circle cx="180" cy="100" r="4" />
        <!-- Diagonals -->
        <circle cx="50" cy="50" r="4" />
        <circle cx="70" cy="70" r="4.5" />
        <circle cx="150" cy="50" r="4" />
        <circle cx="130" cy="70" r="4.5" />
        <circle cx="50" cy="150" r="4" />
        <circle cx="70" cy="130" r="4.5" />
        <circle cx="150" cy="150" r="4" />
        <circle cx="130" cy="130" r="4.5" />
        <!-- Core -->
        <circle cx="100" cy="100" r="12" fill="#ffffff" />
      </g>
    `,
  },
  {
    id: 'neon-flame-starburst',
    level: 'high',
    title: 'Neon Flame Starburst PNG',
    slug: 'neon-flame-starburst-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'High octane neon fire star with curved flame licking rays. Designed for motorsport graphics, drag racing decals, and rock concert posters.',
    tags: ['neon flame star', 'fire starburst png', 'racing neon decal', 'rock neon star'],
    searchVolume: '7,400/mo',
    defaultColor: '#F97316',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Fire Aura -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" opacity="0.25" d="M100,15 Q115,55 145,55 Q125,75 185,100 Q125,125 145,145 Q115,145 100,185 Q85,145 55,145 Q75,125 15,100 Q75,75 55,55 Q85,55 100,15 Z" />
      <path fill="none" stroke="#ffffff" stroke-width="2" d="M100,15 Q115,55 145,55 Q125,75 185,100 Q125,125 145,145 Q115,145 100,185 Q85,145 55,145 Q75,125 15,100 Q75,75 55,55 Q85,55 100,15 Z" />
      <polygon fill="{{STAR_MAIN}}" points="100,60 108,92 140,100 108,108 100,140 92,108 60,100 92,92" />
      <circle cx="100" cy="100" r="4" fill="#ffffff" />
    `,
  },
  {
    id: 'neon-wave-frequency-star',
    level: 'high',
    title: 'Neon Audio Wave Star PNG',
    slug: 'neon-audio-wave-star-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Sound frequency wave star with oscillating soundwave arms pulsing from an audio center. Great for podcast covers, music visualizers, and synth brands.',
    tags: ['audio star png', 'sound wave star', 'neon music star', 'frequency star vector'],
    searchVolume: '6,700/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <g stroke="{{STAR_MAIN}}" stroke-width="4" fill="none" stroke-linecap="round">
        <!-- Audio Frequency Rays -->
        <path d="M100,20 Q105,40 100,60 Q95,80 100,100" />
        <path d="M100,180 Q95,160 100,140 Q105,120 100,100" />
        <path d="M20,100 Q40,95 60,100 Q80,105 100,100" />
        <path d="M180,100 Q160,105 140,100 Q120,95 100,100" />
      </g>
      <circle cx="100" cy="100" r="28" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" opacity="0.7" />
      <polygon fill="#ffffff" points="100,75 105,95 125,100 105,105 100,125 95,105 75,100 95,95" />
    `,
  },
  {
    id: 'neon-crescent-starlight',
    level: 'moderate',
    title: 'Neon Crescent Starlight PNG',
    slug: 'neon-crescent-starlight-png',
    category: 'neon',
    categoryName: 'Neon & Glow',
    description: 'Electric neon crescent moon wrapped around a radiant 4-point twinkle star. Dreamy nightlight graphic for bedroom posters and lo-fi chill hop covers.',
    tags: ['neon moon star', 'crescent neon png', 'lo fi star transparent', 'night light neon graphic'],
    searchVolume: '9,900/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Neon Crescent Moon -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="12" opacity="0.25" stroke-linecap="round" d="M140,30 C90,30 50,70 50,120 C50,160 80,190 120,190 C140,190 160,180 170,165 C130,165 95,135 95,95 C95,65 115,40 140,30 Z" />
      <path fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" d="M140,30 C90,30 50,70 50,120 C50,160 80,190 120,190 C140,190 160,180 170,165 C130,165 95,135 95,95 C95,65 115,40 140,30 Z" />
      <!-- Star Resting Inside Moon -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="8" opacity="0.4" points="145,75 152,102 180,108 152,114 145,142 138,114 110,108 138,102" />
      <polygon fill="none" stroke="#ffffff" stroke-width="2" points="145,75 152,102 180,108 152,114 145,142 138,114 110,108 138,102" />
    `,
  },
];
