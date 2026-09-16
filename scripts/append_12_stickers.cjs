const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../src/data/stars.ts');
let content = fs.readFileSync(targetFile, 'utf8');

const newStickers = `  {
    id: "lavender-crescent-botanical-sticker",
    title: "Lavender Crescent Moon & Botanical Leaves Sticker PNG",
    slug: "lavender-crescent-botanical-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "float",
    description: "Cute pastel lavender crescent moon decorated with delicate dark botanical leaves, twinkling star gems, and tiny sparkle dots. Whimsical celestial sticker with thick white die-cut border.",
    tags: ["lavender moon sticker", "botanical crescent moon png", "celestial leaf sticker", "aesthetic moon decal", "pastel moon star sticker"],
    searchVolume: "22,400/mo",
    defaultColor: "#C084FC",
    viewBox: "0 0 100 105",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Backing Silhouette -->
        <path d="M 46 8 C 72 8, 92 32, 85 64 C 76 88, 52 100, 24 96 C 14 94, 18 84, 26 80 C 48 76, 68 58, 64 34 C 62 20, 52 14, 46 8 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- Lavender Crescent Moon Body -->
        <path d="M 48 12 C 70 12, 86 34, 80 62 C 72 84, 50 94, 28 92 C 48 84, 64 64, 60 36 C 58 24, 52 16, 48 12 Z" fill="{{STAR_MAIN}}" stroke="#9333EA" stroke-width="1.8" stroke-linejoin="round" />
        <!-- Delicate Botanical Vines & Leaves along the Outer Curve -->
        <path d="M 54 18 Q 78 40 76 72" stroke="#334155" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Leaf 1 -->
        <path d="M 64 26 C 68 22, 74 24, 72 30 C 68 32, 64 30, 64 26 Z" fill="#1E293B" />
        <!-- Leaf 2 -->
        <path d="M 72 38 C 78 36, 82 40, 80 46 C 74 46, 70 42, 72 38 Z" fill="#1E293B" />
        <!-- Leaf 3 -->
        <path d="M 76 54 C 82 54, 84 60, 80 66 C 76 64, 74 58, 76 54 Z" fill="#1E293B" />
        <!-- Leaf 4 -->
        <path d="M 70 68 C 74 70, 74 76, 68 80 C 66 76, 66 70, 70 68 Z" fill="#1E293B" />
        <!-- Twinkling Star Accent Gems -->
        <polygon fill="#FDE047" stroke="#D97706" stroke-width="1" points="36,46 38,50 42,51 39,53 40,57 36,55 32,57 33,53 30,51 34,50" />
        <polygon fill="#FDE047" points="26,62 27,64 30,64 28,66 29,68 26,67 24,68 25,66 23,64 25,64" />
        <circle cx="50" cy="40" r="2" fill="#ffffff" />
        <circle cx="42" cy="70" r="1.5" fill="#ffffff" />
      </g>
    \`,
    featured: true
  },
  {
    id: "pastel-star-wand-striped-handle-sticker",
    title: "Magical Star Wand with Striped Handle Sticker PNG",
    slug: "magic-star-wand-striped-handle-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "twinkle",
    description: "Magical fantasy wand with a cute pastel yellow star head, diagonal purple and white striped handle, and sparkling fairy dust glints. Flat cartoon vector sticker with clean black outline and white die-cut border.",
    tags: ["magic star wand sticker", "pastel wand decal", "fairy star wand png", "striped wand sticker", "cute star wand cartoon"],
    searchVolume: "24,100/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 100 105",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- White Die-Cut Backing Outline -->
        <path d="M 50 4 C 65 4, 88 20, 84 44 C 82 50, 76 56, 70 62 L 32 100 C 26 104, 18 100, 14 94 C 10 88, 14 80, 20 74 L 38 48 C 34 38, 36 18, 50 4 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- Diagonal Wand Shaft with Purple & White Stripes -->
        <line x1="62" y1="52" x2="22" y2="92" stroke="#9333EA" stroke-width="7" stroke-linecap="round" />
        <!-- White Candy Stripes -->
        <line x1="56" y1="58" x2="52" y2="62" stroke="#ffffff" stroke-width="6" />
        <line x1="44" y1="70" x2="40" y2="74" stroke="#ffffff" stroke-width="6" />
        <line x1="32" y1="82" x2="28" y2="86" stroke="#ffffff" stroke-width="6" />
        <!-- Golden Wand Pommel -->
        <circle cx="20" cy="94" r="5" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" />
        <!-- Pastel Yellow 5-Point Star Head -->
        <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" points="62,10 70,26 88,26 74,38 79,56 62,46 46,56 51,38 36,26 54,26" />
        <!-- Kawaii Star Eyes & Smile -->
        <circle cx="58" cy="30" r="2.2" fill="#1E293B" />
        <circle cx="68" cy="30" r="2.2" fill="#1E293B" />
        <path d="M 61 35 Q 63 38 66 35" stroke="#1E293B" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <ellipse cx="55" cy="33" rx="2" ry="1.2" fill="#FB7185" opacity="0.85" />
        <ellipse cx="71" cy="33" rx="2" ry="1.2" fill="#FB7185" opacity="0.85" />
        <!-- Floating Magic Starburst Glints -->
        <polygon fill="#C084FC" points="84,12 86,16 90,17 87,19 88,23 84,21 80,23 81,19 78,17 82,16" />
        <polygon fill="#38BDF8" points="36,44 37,47 40,47 38,49 39,52 36,50 33,52 34,49 32,47 35,47" />
      </g>
    \`,
    featured: false
  },
  {
    id: "golden-star-excellent-award-badge-sticker",
    title: "Golden Star 'EXCELLENT' Award Ribbon Badge Sticker PNG",
    slug: "golden-star-excellent-ribbon-badge-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "pulse",
    description: "Golden five-pointed star award badge centered above royal blue ribbon tails with curved vibrant lettering reading 'EXCELLENT' and small celebratory confetti sparks. School and corporate achievement vector trophy sticker.",
    tags: ["excellent star sticker", "star award badge png", "golden star ribbon sticker", "teacher praise star sticker", "trophy star decal"],
    searchVolume: "31,000/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 110",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Dual Blue Ribbon Tails -->
        <polygon points="34,60 22,98 34,90 46,98 42,60" fill="#1D4ED8" stroke="#ffffff" stroke-width="2" />
        <polygon points="66,60 54,98 66,90 78,98 66,60" fill="#1E40AF" stroke="#ffffff" stroke-width="2" />
        <!-- Medal Outer Rosette / Backing -->
        <circle cx="50" cy="46" r="38" fill="#ffffff" stroke="#CBD5E1" stroke-width="3" />
        <circle cx="50" cy="46" r="34" fill="#FEF08A" stroke="#CA8A04" stroke-width="2" />
        <circle cx="50" cy="46" r="30" fill="#F59E0B" />
        <!-- Big Golden Star in Rosette Center -->
        <polygon fill="{{STAR_MAIN}}" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" points="50,22 56,36 72,36 60,46 64,62 50,52 36,62 40,46 28,36 44,36" />
        <!-- Curved Banner with 'EXCELLENT' Text -->
        <path d="M 12 74 Q 50 82 88 74 L 84 62 Q 50 70 16 62 Z" fill="#2563EB" stroke="#ffffff" stroke-width="2" />
        <text x="50" y="73" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle" letter-spacing="1">EXCELLENT</text>
        <!-- Confetti Sparks -->
        <polygon fill="#EF4444" points="16,30 18,33 22,33 19,35 20,38 16,36 13,38 14,35 11,33 15,33" />
        <polygon fill="#10B981" points="82,26 84,29 88,29 85,31 86,34 82,32 79,34 80,31 77,29 81,29" />
      </g>
    \`,
    featured: true
  },
  {
    id: "shooting-star-trajectory-path-sticker",
    title: "Elegant Shooting Star Trajectory Path Sticker PNG",
    slug: "shooting-star-trajectory-path-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "shooting",
    description: "Elegant shooting star trajectory path made of dotted curved motion lines, graduated stardust trail, and varied four-point sparkle stars. Minimalist modern vector decal with clean die-cut edges.",
    tags: ["shooting star trajectory sticker", "curved star path png", "minimalist shooting star decal", "dotted star trail sticker", "celestial trajectory vector"],
    searchVolume: "19,800/mo",
    defaultColor: "#38BDF8",
    viewBox: "0 0 105 100",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.13))">
        <!-- White Die-Cut Contour Area -->
        <path d="M 10 88 C 30 84, 55 72, 70 54 C 74 48, 80 40, 86 24 C 92 14, 98 10, 94 6 C 90 2, 82 8, 72 16 C 56 30, 40 50, 10 74 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- Curved Trajectory Dotted & Dashed Lines -->
        <path d="M 14 84 Q 45 75 75 25" stroke="#94A3B8" stroke-width="3" stroke-dasharray="3 4" fill="none" stroke-linecap="round" />
        <path d="M 22 90 Q 52 82 82 32" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="2 3" fill="none" stroke-linecap="round" />
        <!-- Leading 4-Point Diamond Shooting Star Head -->
        <path fill="{{STAR_MAIN}}" stroke="#0284C7" stroke-width="1.8" d="M 82 10 C 82 22, 88 28, 100 28 C 88 28, 82 34, 82 46 C 82 34, 76 28, 64 28 C 76 28, 82 22, 82 10 Z" />
        <circle cx="82" cy="28" r="4" fill="#ffffff" />
        <!-- Trailing Stars Along the Path -->
        <polygon fill="#FBBF24" points="60,46 62,49 66,49 63,51 64,54 60,52 57,54 58,51 55,49 59,49" />
        <polygon fill="#38BDF8" points="42,62 43,64 46,64 44,66 45,68 42,67 39,68 40,66 38,64 41,64" />
        <circle cx="28" cy="74" r="2.5" fill="#F59E0B" />
        <circle cx="18" cy="80" r="1.8" fill="#38BDF8" />
      </g>
    \`,
    featured: false
  },
  {
    id: "doodle-character-very-good-sticker",
    title: "Doodle Character 'Very GOOD' Celebration Sticker PNG",
    slug: "doodle-character-very-good-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "pulse",
    description: "Cute minimalist doodle character raising both hands in celebration with curved bold lettering reading 'Very GOOD' and tiny twinkling star accents. Clean black lineart teacher praise and planner sticker.",
    tags: ["very good star sticker", "celebration doodle sticker", "teacher praise star png", "cute character star decal", "minimalist star sticker"],
    searchVolume: "27,500/mo",
    defaultColor: "#10B981",
    viewBox: "0 0 100 105",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Envelope -->
        <path d="M 14 36 C 24 16, 76 16, 86 36 C 94 52, 88 88, 76 96 C 60 102, 40 102, 24 96 C 12 88, 6 52, 14 36 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- Curved Banner with 'Very GOOD' Text -->
        <path d="M 18 36 Q 50 20 82 36" stroke="#10B981" stroke-width="12" fill="none" stroke-linecap="round" />
        <text x="50" y="32" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="11" fill="#ffffff" text-anchor="middle" letter-spacing="1">VERY GOOD!</text>
        <!-- Minimalist Doodle Character Body -->
        <ellipse cx="50" cy="68" rx="22" ry="18" fill="#F8FAFC" stroke="#1E293B" stroke-width="2.5" />
        <!-- Happy Eyes & Broad Cheerful Grin -->
        <path d="M 40 64 Q 44 60 48 64" stroke="#1E293B" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <path d="M 52 64 Q 56 60 60 64" stroke="#1E293B" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <path d="M 44 70 Q 50 78 56 70" fill="#EF4444" stroke="#1E293B" stroke-width="2" />
        <ellipse cx="36" cy="68" rx="3.5" ry="2" fill="#FB7185" opacity="0.8" />
        <ellipse cx="64" cy="68" rx="3.5" ry="2" fill="#FB7185" opacity="0.8" />
        <!-- Arms Raised High in Joy -->
        <path d="M 30 68 Q 20 54 18 46" stroke="#1E293B" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 70 68 Q 80 54 82 46" stroke="#1E293B" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Golden Star Accents -->
        <polygon fill="#FBBF24" stroke="#D97706" stroke-width="1.2" points="18,38 20,41 23,41 21,43 22,46 18,44 15,46 16,43 13,41 16,41" />
        <polygon fill="#FBBF24" stroke="#D97706" stroke-width="1.2" points="82,38 84,41 87,41 85,43 86,46 82,44 79,46 80,43 77,41 80,41" />
      </g>
    \`,
    featured: false
  },
  {
    id: "faceted-geometric-gold-star-sticker",
    title: "Faceted Geometric Gold Star 3D Sticker PNG",
    slug: "faceted-geometric-gold-star-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "high",
    animationType: "pulse",
    description: "Clean geometric five-pointed gold star with faceted dimensional origami folds, subtle warm amber shading, and high-contrast reflective facets. Thick white die-cut decal border on transparent background.",
    tags: ["faceted gold star sticker", "geometric star decal", "3d origami star png", "dimensional gold star sticker", "faceted star badge"],
    searchVolume: "25,300/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 100",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.16))">
        <!-- White Die-Cut Border -->
        <polygon fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" points="50,4 63,33 96,33 69,54 80,87 50,66 20,87 31,54 4,33 37,33" />
        <!-- Faceted Triangles with Alternating Light & Dark Shading -->
        <!-- Top Tip -->
        <polygon points="50,10 50,50 60,35" fill="#FEF08A" />
        <polygon points="50,10 50,50 40,35" fill="#F59E0B" />
        <!-- Right Tip -->
        <polygon points="90,35 50,50 66,52" fill="#FDE047" />
        <polygon points="90,35 50,50 60,35" fill="#D97706" />
        <!-- Bottom Right Tip -->
        <polygon points="76,82 50,50 50,64" fill="#FBBF24" />
        <polygon points="76,82 50,50 66,52" fill="#B45309" />
        <!-- Bottom Left Tip -->
        <polygon points="24,82 50,50 34,52" fill="#FDE047" />
        <polygon points="24,82 50,50 50,64" fill="#92400E" />
        <!-- Left Tip -->
        <polygon points="10,35 50,50 40,35" fill="#FEF08A" />
        <polygon points="10,35 50,50 34,52" fill="#D97706" />
        <!-- Center Gem Highlight -->
        <circle cx="50" cy="50" r="3" fill="#ffffff" opacity="0.9" />
      </g>
    \`,
    featured: true
  },
  {
    id: "origami-polygon-star-ribbon-sticker",
    title: "Origami Polygon Ring Star Ribbon Sticker PNG",
    slug: "origami-polygon-star-ribbon-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "high",
    animationType: "spin",
    description: "Interlocking geometric polygon ring star ribbon in vivid bright pink, magenta, and coral red tones. Modern abstract 3D origami badge sticker with clean die-cut white outline.",
    tags: ["origami star sticker", "polygon star decal", "geometric star ribbon png", "abstract 3d star sticker", "modern star badge"],
    searchVolume: "18,900/mo",
    defaultColor: "#F43F5E",
    viewBox: "0 0 100 100",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- White Die-Cut Backing -->
        <polygon points="50,4 63,32 96,32 70,54 80,86 50,66 20,86 30,54 4,32 37,32" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- 5 Interlocking Origami Polygon Ribbon Segments -->
        <!-- Segment 1 (Top) -->
        <polygon points="50,10 61,35 50,45 39,35" fill="#F43F5E" stroke="#BE123C" stroke-width="1.5" />
        <polygon points="50,10 61,35 50,30" fill="#FDA4AF" />
        <!-- Segment 2 (Top Right) -->
        <polygon points="90,35 68,54 58,45 61,35" fill="#E11D48" stroke="#9F1239" stroke-width="1.5" />
        <polygon points="90,35 68,54 75,44" fill="#FB7185" />
        <!-- Segment 3 (Bottom Right) -->
        <polygon points="76,82 50,64 50,52 68,54" fill="#BE123C" stroke="#881337" stroke-width="1.5" />
        <polygon points="76,82 50,64 64,68" fill="#F43F5E" />
        <!-- Segment 4 (Bottom Left) -->
        <polygon points="24,82 32,54 50,52 50,64" fill="#E11D48" stroke="#9F1239" stroke-width="1.5" />
        <polygon points="24,82 32,54 36,68" fill="#FB7185" />
        <!-- Segment 5 (Top Left) -->
        <polygon points="10,35 39,35 42,45 32,54" fill="#FB7185" stroke="#BE123C" stroke-width="1.5" />
        <polygon points="10,35 39,35 25,44" fill="#FECDD3" />
        <!-- Center Hollow Polygon Ring Opening -->
        <polygon points="50,45 58,45 50,52 42,45" fill="#ffffff" />
      </g>
    \`,
    featured: false
  },
  {
    id: "happy-yellow-star-blue-clouds-sticker",
    title: "Happy Yellow Star with Blue Clouds Sticker PNG",
    slug: "happy-yellow-star-blue-clouds-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "basic",
    animationType: "twinkle",
    description: "Adorable bright yellow star character with round blue eyes, cheerful open smile, rosy blushing cheeks, and floating miniature sky blue clouds and sparkle accents. Kawaii die-cut vector decal.",
    tags: ["cute yellow star sticker", "kawaii star with clouds png", "smiling star decal", "nursery star sticker", "pastel cloud star cartoon"],
    searchVolume: "28,900/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 105 105",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.14))">
        <!-- White Die-Cut Envelope -->
        <path d="M 52 4 C 68 4, 98 22, 98 44 C 98 62, 92 84, 76 96 C 60 102, 36 102, 22 92 C 8 80, 4 60, 6 42 C 8 20, 36 4, 52 4 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" stroke-linejoin="round" />
        <!-- Smiling Chubby Yellow Star Base -->
        <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" points="52,10 63,36 92,36 68,54 77,82 52,65 27,82 36,54 12,36 41,36" />
        <!-- Big Round Blue Eyes with Anime Sparkle Highlights -->
        <ellipse cx="42" cy="46" rx="4.5" ry="6" fill="#0284C7" stroke="#1E293B" stroke-width="1.8" />
        <circle cx="40" cy="43" r="2.2" fill="#ffffff" />
        <ellipse cx="62" cy="46" rx="4.5" ry="6" fill="#0284C7" stroke="#1E293B" stroke-width="1.8" />
        <circle cx="60" cy="43" r="2.2" fill="#ffffff" />
        <!-- Rosy Blush Cheeks -->
        <ellipse cx="34" cy="54" rx="4.5" ry="2.8" fill="#FB7185" opacity="0.85" />
        <ellipse cx="70" cy="54" rx="4.5" ry="2.8" fill="#FB7185" opacity="0.85" />
        <!-- Cheerful Open Mouth Smile -->
        <path d="M 46 54 Q 52 62 58 54 Z" fill="#DC2626" stroke="#1E293B" stroke-width="1.8" />
        <!-- Two Miniature Sky Blue Clouds Hugging Bottom -->
        <path d="M 16 78 C 16 70, 24 66, 30 68 C 34 62, 44 64, 46 72 C 50 74, 50 82, 44 86 L 20 86 C 16 84, 16 80, 16 78 Z" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.8" />
        <path d="M 64 78 C 64 70, 72 66, 78 68 C 82 62, 92 64, 94 72 C 98 74, 98 82, 92 86 L 68 86 C 64 84, 64 80, 64 78 Z" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.8" />
        <!-- Sparkle Star Accents -->
        <polygon fill="#F59E0B" points="88,22 90,25 93,25 91,27 92,30 88,28 85,30 86,27 84,25 87,25" />
      </g>
    \`,
    featured: true
  },
  {
    id: "good-work-rainbow-badge-sticker",
    title: "Smiling Star 'GOOD WORK!' Rainbow Badge Sticker PNG",
    slug: "good-work-rainbow-badge-sticker-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "pulse",
    description: "Circular badge sticker featuring an enthusiastic smiling star character framed by curved rainbow bands and bold arched typography reading 'GOOD WORK!'. Iconic classroom reward and motivation decal.",
    tags: ["good work star sticker", "rainbow star badge png", "teacher praise sticker", "reward star decal", "classroom motivation star sticker"],
    searchVolume: "34,200/mo",
    defaultColor: "#F59E0B",
    viewBox: "0 0 100 100",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- Outer Circular Die-Cut -->
        <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#E2E8F0" stroke-width="3" />
        <!-- 3 Curved Rainbow Stripes Across Top Half -->
        <path d="M 12 50 A 38 38 0 0 1 88 50" fill="none" stroke="#EF4444" stroke-width="6" />
        <path d="M 18 50 A 32 32 0 0 1 82 50" fill="none" stroke="#FBBF24" stroke-width="6" />
        <path d="M 24 50 A 26 26 0 0 1 76 50" fill="none" stroke="#10B981" stroke-width="6" />
        <!-- Blue Sky Base in Center -->
        <circle cx="50" cy="50" r="23" fill="#E0F2FE" />
        <!-- Smiling Golden Star Character -->
        <polygon fill="{{STAR_MAIN}}" stroke="#D97706" stroke-width="1.8" stroke-linejoin="round" points="50,30 55,42 67,42 57,50 61,62 50,55 39,62 43,50 33,42 45,42" />
        <circle cx="47" cy="46" r="1.8" fill="#1E293B" />
        <circle cx="53" cy="46" r="1.8" fill="#1E293B" />
        <path d="M 48 50 Q 50 53 52 50" stroke="#1E293B" stroke-width="1.2" fill="none" stroke-linecap="round" />
        <!-- Arched Bottom Banner reading 'GOOD WORK!' -->
        <path d="M 10 74 Q 50 88 90 74 L 86 86 Q 50 96 14 86 Z" fill="#2563EB" stroke="#ffffff" stroke-width="2" />
        <text x="50" y="83" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle" letter-spacing="1">GOOD WORK!</text>
      </g>
    \`,
    featured: false
  },
  {
    id: "pastel-shooting-star-rainbow-ribbon-sticker",
    title: "Pastel Shooting Star with Rainbow Ribbon Sticker PNG",
    slug: "pastel-shooting-star-rainbow-ribbon-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "shooting",
    description: "Pastel shooting star character trailing a curved flowing multi-colored rainbow ribbon tail with tiny floating accent stars. Whimsical flat vector die-cut decal with bold contours.",
    tags: ["rainbow shooting star sticker", "pastel star decal", "rainbow tail star png", "cute shooting star sticker", "celestial rainbow decal"],
    searchVolume: "26,700/mo",
    defaultColor: "#FDE047",
    viewBox: "0 0 105 105",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- White Die-Cut Backing Envelope -->
        <path d="M 10 86 C 24 86, 42 76, 56 60 C 66 48, 76 34, 88 16 C 98 6, 102 14, 98 26 C 92 46, 80 64, 60 78 C 44 90, 22 96, 10 86 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- Flowing Curved 4-Color Pastel Rainbow Ribbon -->
        <path d="M 16 84 Q 50 78 84 26" stroke="#F43F5E" stroke-width="5" fill="none" stroke-linecap="round" />
        <path d="M 20 89 Q 54 83 88 31" stroke="#FBBF24" stroke-width="5" fill="none" stroke-linecap="round" />
        <path d="M 24 94 Q 58 88 92 36" stroke="#34D399" stroke-width="5" fill="none" stroke-linecap="round" />
        <path d="M 28 99 Q 62 93 96 41" stroke="#60A5FA" stroke-width="5" fill="none" stroke-linecap="round" />
        <!-- Cute Pastel Star Character at the Front -->
        <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" points="80,12 86,25 100,25 89,34 93,48 80,40 67,48 71,34 60,25 74,25" />
        <circle cx="76" cy="28" r="2.2" fill="#1E293B" />
        <circle cx="84" cy="28" r="2.2" fill="#1E293B" />
        <path d="M 78 33 Q 80 36 82 33" stroke="#1E293B" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <ellipse cx="73" cy="31" rx="2" ry="1.2" fill="#FB7185" opacity="0.85" />
        <ellipse cx="87" cy="31" rx="2" ry="1.2" fill="#FB7185" opacity="0.85" />
        <!-- Floating Accent Stars -->
        <polygon fill="#FBBF24" points="48,54 50,57 53,57 51,59 52,62 48,60 45,62 46,59 44,57 47,57" />
        <polygon fill="#C084FC" points="32,70 33,72 36,72 34,74 35,76 32,75 29,76 30,74 28,72 31,72" />
      </g>
    \`,
    featured: false
  },
  {
    id: "golden-star-trophy-cup-confetti-sticker",
    title: "Golden Star Trophy Cup with Confetti Sticker PNG",
    slug: "golden-star-trophy-cup-confetti-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "high",
    animationType: "pulse",
    description: "Shining golden star trophy cup on an ornate pedestal base surrounded by celebratory star confetti and hand-drawn sparkle squiggles. Winner victory award sticker with bold vector lineart.",
    tags: ["star trophy sticker", "champion star cup png", "victory award sticker", "first place trophy decal", "star celebration sticker"],
    searchVolume: "29,400/mo",
    defaultColor: "#EAB308",
    viewBox: "0 0 100 110",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.16))">
        <!-- White Die-Cut Envelope -->
        <path d="M 18 20 C 14 36, 12 60, 26 72 C 34 80, 36 90, 28 98 C 40 104, 60 104, 72 98 C 64 90, 66 80, 74 72 C 88 60, 86 36, 82 20 Z" fill="#ffffff" stroke="#CBD5E1" stroke-width="4" stroke-linejoin="round" />
        <!-- Trophy Handles -->
        <path d="M 28 32 C 14 32, 14 54, 28 58" stroke="#D97706" stroke-width="4" fill="none" stroke-linecap="round" />
        <path d="M 72 32 C 86 32, 86 54, 72 58" stroke="#D97706" stroke-width="4" fill="none" stroke-linecap="round" />
        <!-- Golden Cup Basin -->
        <path d="M 28 24 L 72 24 L 68 56 C 66 70, 34 70, 32 56 Z" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2.5" />
        <ellipse cx="50" cy="24" rx="22" ry="5" fill="#FEF08A" stroke="#B45309" stroke-width="2" />
        <!-- Embossed Big Star on Trophy Front -->
        <polygon fill="#ffffff" stroke="#CA8A04" stroke-width="1.8" points="50,32 53,40 61,40 55,46 57,54 50,49 43,54 45,46 39,40 47,40" />
        <!-- Trophy Neck & Ornate Pedestal Base -->
        <rect x="46" y="66" width="8" height="12" fill="#D97706" stroke="#92400E" stroke-width="1.5" />
        <rect x="34" y="78" width="32" height="10" rx="3" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
        <rect x="30" y="88" width="40" height="8" rx="2" fill="#475569" stroke="#1E293B" stroke-width="1.5" />
        <!-- Gold Plate on Base -->
        <rect x="40" y="80" width="20" height="6" rx="1.5" fill="#FBBF24" />
        <!-- Exploding Confetti Stars & Sparks -->
        <polygon fill="#EF4444" points="16,14 18,17 21,17 19,19 20,22 16,20 13,22 14,19 12,17 15,17" />
        <polygon fill="#3B82F6" points="84,12 86,15 89,15 87,17 88,20 84,18 81,20 82,17 80,15 83,15" />
        <circle cx="20" cy="40" r="2.5" fill="#10B981" />
        <circle cx="80" cy="42" r="2.5" fill="#EC4899" />
      </g>
    \`,
    featured: true
  },
  {
    id: "twin-shooting-stars-rainbow-flight-sticker",
    title: "Twin Shooting Stars Flying Rainbow Trail Sticker PNG",
    slug: "twin-shooting-stars-rainbow-flight-png",
    category: "stickers",
    categoryName: "Star Stickers",
    level: "moderate",
    animationType: "shooting",
    description: "Twin shooting star characters with cute happy faces trailing parallel pastel rainbow trails together in high-speed flight. Playful celestial best-friends vector sticker with thick white die-cut border.",
    tags: ["twin stars sticker", "shooting stars friends png", "rainbow flight star decal", "cute double star sticker", "celestial duo sticker"],
    searchVolume: "22,100/mo",
    defaultColor: "#38BDF8",
    viewBox: "0 0 110 105",
    svgContent: \`
      <!-- White Die-Cut Backing with Drop Shadow -->
      <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
        <!-- White Die-Cut Silhouette Envelope -->
        <path d="M 8 84 C 20 84, 40 76, 56 60 C 66 50, 78 30, 94 14 C 104 6, 108 20, 104 36 C 96 58, 80 76, 58 88 C 38 98, 16 98, 8 84 Z" fill="#ffffff" stroke="#E2E8F0" stroke-width="4" stroke-linejoin="round" />
        <!-- Parallel Rainbow Vapor Trails -->
        <path d="M 12 80 Q 48 76 78 30" stroke="#F472B6" stroke-width="4.5" fill="none" stroke-linecap="round" />
        <path d="M 16 86 Q 52 82 82 36" stroke="#FBBF24" stroke-width="4.5" fill="none" stroke-linecap="round" />
        <path d="M 20 92 Q 56 88 86 42" stroke="#38BDF8" stroke-width="4.5" fill="none" stroke-linecap="round" />
        <!-- Star Character 1 (Top Blue Star) -->
        <polygon fill="{{STAR_MAIN}}" stroke="#0284C7" stroke-width="2" stroke-linejoin="round" points="84,10 88,20 99,20 91,27 94,37 84,31 74,37 77,27 69,20 80,20" />
        <circle cx="81" cy="22" r="1.8" fill="#1E293B" />
        <circle cx="87" cy="22" r="1.8" fill="#1E293B" />
        <path d="M 82 26 Q 84 28 86 26" stroke="#1E293B" stroke-width="1.2" fill="none" stroke-linecap="round" />
        <!-- Star Character 2 (Bottom Yellow Star Following) -->
        <polygon fill="#FDE047" stroke="#D97706" stroke-width="2" stroke-linejoin="round" points="62,38 66,48 77,48 69,55 72,65 62,59 52,65 55,55 47,48 58,48" />
        <circle cx="59" cy="50" r="1.8" fill="#1E293B" />
        <circle cx="65" cy="50" r="1.8" fill="#1E293B" />
        <path d="M 60 54 Q 62 56 64 54" stroke="#1E293B" stroke-width="1.2" fill="none" stroke-linecap="round" />
        <ellipse cx="56" cy="52" rx="1.8" ry="1" fill="#FB7185" opacity="0.8" />
        <ellipse cx="68" cy="52" rx="1.8" ry="1" fill="#FB7185" opacity="0.8" />
        <!-- Tiny Floating Stardust Sparkles -->
        <polygon fill="#FBBF24" points="98,40 100,43 103,43 101,45 102,48 98,46 95,48 96,45 94,43 97,43" />
        <polygon fill="#38BDF8" points="40,68 41,70 44,70 42,72 43,74 40,73 37,74 38,72 36,70 39,70" />
      </g>
    \`,
    featured: true
  },
`;

const anchor = '  {\r\n    id: "animated-twinkling-sparkle-star",';
const unixAnchor = '  {\n    id: "animated-twinkling-sparkle-star",';

if (content.includes(anchor)) {
  content = content.replace(anchor, newStickers + anchor);
} else if (content.includes(unixAnchor)) {
  content = content.replace(unixAnchor, newStickers + unixAnchor);
} else {
  console.error("Anchor not found!");
  process.exit(1);
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully inserted 12 new sticker assets into src/data/stars.ts!");
