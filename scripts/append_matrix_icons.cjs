const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../src/data/stars.ts');
let content = fs.readFileSync(targetFile, 'utf8');

const matrixIcons = `  {
    id: "half-filled-rating-star-icon",
    title: "Half-Filled Rating Star UI Icon PNG",
    slug: "half-filled-rating-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Half-filled five-pointed rating star icon with precise 50% vertical split. Essential interface asset for displaying fractional 4.5 star ratings and reviews.",
    tags: ["half star rating", "half filled star icon", "4.5 star rating png", "fractional rating star", "split star ui"],
    searchVolume: "64,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <defs>
        <clipPath id="halfStarLeftClip">
          <rect x="0" y="0" width="24" height="48" />
        </clipPath>
      </defs>
      <!-- Background Outline Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" points="24,4 29.5,17 43.5,18.5 33,28 36,42 24,34.5 12,42 15,28 4.5,18.5 18.5,17" />
      <!-- Left Half Solid Fill -->
      <polygon fill="{{STAR_MAIN}}" clip-path="url(#halfStarLeftClip)" points="24,4 29.5,17 43.5,18.5 33,28 36,42 24,34.5 12,42 15,28 4.5,18.5 18.5,17" />
    \`,
    featured: true
  },
  {
    id: "cluster-three-twinkling-stars-icon",
    title: "Cluster of Three Twinkling Stars Icon PNG",
    slug: "cluster-three-twinkling-stars-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Constellation cluster of three twinkling 4-point sparkle stars with dynamic sizing. Universal symbol for AI generation, magic prompts, and new features.",
    tags: ["three stars cluster", "ai sparkle trio", "twinkling stars group", "constellation star icon", "magic star cluster"],
    searchVolume: "52,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Primary Big Star (Center-Left) -->
      <path fill="{{STAR_MAIN}}" d="M 20 6 C 20 16, 23 19, 33 22 C 23 25, 20 28, 20 38 C 20 28, 17 25, 7 22 C 17 19, 20 16, 20 6 Z" />
      <!-- Secondary Upper-Right Star -->
      <path fill="{{STAR_MAIN}}" d="M 36 6 C 36 11, 38 13, 43 15 C 38 17, 36 19, 36 24 C 36 19, 34 17, 29 15 C 34 13, 36 11, 36 6 Z" />
      <!-- Tertiary Lower-Right Star -->
      <path fill="{{STAR_MAIN}}" d="M 34 30 C 34 33, 35 34, 38 36 C 35 38, 34 39, 34 42 C 34 39, 33 38, 30 36 C 33 34, 34 33, 34 30 Z" />
    \`,
    featured: true
  },
  {
    id: "speech-bubble-star-review-icon",
    title: "Speech Bubble Review with Star Icon PNG",
    slug: "speech-bubble-star-review-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Chat speech bubble containing an embedded five-pointed star. Interface vector icon for customer review quotes, feedback forums, and testimonials.",
    tags: ["speech bubble star", "testimonial star icon", "review bubble png", "feedback chat star", "comment star icon"],
    searchVolume: "29,800/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Speech Bubble Outline -->
      <path d="M 24 6 C 12.95 6, 4 14.05, 4 24 C 4 29.5, 6.7 34.3, 11 37.6 L 8 44 L 16.5 41.2 C 18.8 41.7, 21.3 42, 24 42 C 35.05 42, 44 33.95, 44 24 C 44 14.05, 35.05 6, 24 6 Z" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" />
      <!-- Centered Star Inside Bubble -->
      <polygon fill="{{STAR_MAIN}}" points="24,13 26.5,19 33,19.5 28,24 29.5,30.5 24,27 18.5,30.5 20,24 15,19.5 21.5,19" />
    \`,
    featured: false
  },
  {
    id: "star-focus-corner-brackets-icon",
    title: "Star Framed by Focus Corner Brackets Icon PNG",
    slug: "star-focus-corner-brackets-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Five-pointed star framed by four corner focus viewfinder brackets. High-tech icon for selection mode, camera target, priority focus, and spotlight items.",
    tags: ["focus star icon", "viewfinder star", "camera focus star", "selection brackets star", "spotlight star icon"],
    searchVolume: "19,400/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- 4 Corner Focus Brackets -->
      <path d="M 6 14 L 6 6 L 14 6" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 34 6 L 42 6 L 42 14" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 42 34 L 42 42 L 34 42" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 14 42 L 6 42 L 6 34" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Centered Star -->
      <polygon fill="{{STAR_MAIN}}" points="24,12 26.5,18.5 33.5,19 28.5,24 30,31 24,27.5 18,31 19.5,24 14.5,19 21.5,18.5" />
    \`,
    featured: false
  },
  {
    id: "vertical-ribbon-bookmark-star-icon",
    title: "Vertical Ribbon Bookmark with Star Icon PNG",
    slug: "vertical-ribbon-bookmark-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Vertical hanging ribbon bookmark with an embossed five-pointed star and notched fishtail end. E-commerce interface icon for saved products and wishlists.",
    tags: ["ribbon bookmark star", "saved item ribbon", "bookmark tag star png", "wishlist ribbon icon", "ecommerce bookmark star"],
    searchVolume: "36,200/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Hanging Ribbon Silhouette with V-Notch -->
      <path d="M 12 4 L 36 4 L 36 44 L 24 34 L 12 44 Z" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" />
      <!-- Star Centered in Ribbon Head -->
      <polygon fill="{{STAR_MAIN}}" points="24,12 26.5,18 33,18.5 28,23 29.5,29.5 24,26 18.5,29.5 20,23 15,18.5 21.5,18" />
    \`,
    featured: false
  },
  {
    id: "circular-badge-knockout-star-icon",
    title: "Solid Circular Badge with Knockout Star Icon PNG",
    slug: "circular-badge-knockout-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Solid circular badge button featuring a clean negative-space white knockout star in the center. Bold modern UI button for favorites and rating controls.",
    tags: ["circular star button", "knockout star badge", "negative space star", "solid circle star icon", "round star button png"],
    searchVolume: "48,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Solid Circle Base -->
      <circle cx="24" cy="24" r="21" fill="{{STAR_MAIN}}" />
      <!-- White Knockout Star -->
      <polygon fill="#ffffff" points="24,10 27.5,18.5 36.5,19.5 30,26 31.8,35 24,30.5 16.2,35 18,26 11.5,19.5 20.5,18.5" />
    \`,
    featured: false
  },
  {
    id: "rounded-square-button-star-icon",
    title: "Outlined Rounded Square Star Button Icon PNG",
    slug: "rounded-square-button-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Outlined squircle / rounded square app icon container enclosing a centered five-pointed star. Sleek mobile app button for bookmarking and ratings.",
    tags: ["square star button", "app icon star button", "rounded square star", "squircle star icon", "ui star container"],
    searchVolume: "32,500/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Outlined Rounded Square -->
      <rect x="5" y="5" width="38" height="38" rx="10" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <!-- Centered Star -->
      <polygon fill="{{STAR_MAIN}}" points="24,12 27,18.5 34,19 29,24 30.5,31 24,27.5 17.5,31 19,24 14,19 21,18.5" />
    \`,
    featured: false
  },
`;

const anchor = '  {\r\n    id: "award-rosette-star-ribbon",';
const unixAnchor = '  {\n    id: "award-rosette-star-ribbon",';

if (content.includes(anchor)) {
  content = content.replace(anchor, matrixIcons + anchor);
} else if (content.includes(unixAnchor)) {
  content = content.replace(unixAnchor, matrixIcons + unixAnchor);
} else {
  console.error("Anchor award-rosette-star-ribbon not found!");
  process.exit(1);
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully inserted 7 matrix completion icons into src/data/stars.ts!");
