const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../src/data/stars.ts');
let content = fs.readFileSync(targetFile, 'utf8');

const newIcons = `  {
    id: "solid-black-star-glyph-icon",
    title: "Solid Star Glyph UI Interface Icon PNG",
    slug: "solid-black-star-glyph-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Solid five-pointed star glyph silhouette for app interface controls, favorites, ratings, and active bookmark states. Minimalist flat vector design.",
    tags: ["star glyph icon", "solid star icon", "ui star glyph", "interface star png", "minimal star icon"],
    searchVolume: "95,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <polygon fill="{{STAR_MAIN}}" points="24,3 29.5,16.5 44,18 33,28 36,42 24,34.5 12,42 15,28 4,18 18.5,16.5" />
    \`,
    featured: true
  },
  {
    id: "circular-medal-star-icon",
    title: "Circular Medal Star Badge Linear Icon PNG",
    slug: "circular-medal-star-icon-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Round circular medal badge containing an outlined five-pointed star inside. Minimalist linear interface vector icon for gamification and achievements.",
    tags: ["medal star icon", "circular star badge", "achievement medal icon", "ui medal star png"],
    searchVolume: "28,400/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <circle cx="24" cy="24" r="20" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linejoin="round" points="24,10 27.5,18 36,19 29.5,25 31.5,33.5 24,29 16.5,33.5 18.5,25 12,19 20.5,18" />
    \`,
    featured: false
  },
  {
    id: "customer-review-document-stars-icon",
    title: "Customer Review Document with Rating Stars Icon PNG",
    slug: "customer-review-document-stars-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Customer review document sheet with three small five-pointed rating stars on top. Clean vector UI icon for client testimonials and feedback forms.",
    tags: ["review document icon", "star rating document", "customer feedback icon", "testimonial star sheet"],
    searchVolume: "33,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <path d="M 12 4 L 28 4 L 38 14 L 38 44 L 12 44 Z" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" />
      <path d="M 28 4 L 28 14 L 38 14" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" />
      <!-- 3 Small Stars -->
      <g fill="{{STAR_MAIN}}">
        <polygon points="18,22 19.5,25.5 23,26 20.5,28.5 21,32 18,30 15,32 15.5,28.5 13,26 16.5,25.5" />
        <polygon points="25,22 26.5,25.5 30,26 27.5,28.5 28,32 25,30 22,32 22.5,28.5 20,26 23.5,25.5" />
        <polygon points="32,22 33.5,25.5 37,26 34.5,28.5 35,32 32,30 29,32 29.5,28.5 27,26 30.5,25.5" />
      </g>
      <!-- Review Text Lines Below -->
      <line x1="18" y1="37" x2="32" y2="37" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
    \`,
    featured: false
  },
  {
    id: "clean-outline-star-linear-icon",
    title: "Clean Outline Star Linear Interface Icon PNG",
    slug: "clean-outline-star-linear-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Clean outline five-pointed star with uniform thin stroke line art. Essential minimalist interface icon for unselected favorites, bookmarks, and ratings.",
    tags: ["outline star icon", "linear star png", "stroke star icon", "empty star favorite", "hollow star vector"],
    searchVolume: "78,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="24,4 29.5,17 43.5,18.5 33,28 36,42 24,34.5 12,42 15,28 4.5,18.5 18.5,17" />
    \`,
    featured: true
  },
  {
    id: "four-point-sparkle-dust-icon",
    title: "Four-Point Sparkle Twinkle Star Icon PNG",
    slug: "four-point-sparkle-twinkle-icon-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Four-point sparkle star surrounded by motion dust speckles. Magical twinkle vector glyph for AI features, new enhancements, and clean UI badges.",
    tags: ["sparkle twinkle icon", "4 point star icon", "ai sparkle icon", "magic star glyph", "clean sparkle vector"],
    searchVolume: "54,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <path fill="{{STAR_MAIN}}" d="M 24 4 C 24 16, 28 20, 40 24 C 28 28, 24 32, 24 44 C 24 32, 20 28, 8 24 C 20 20, 24 16, 24 4 Z" />
      <circle cx="10" cy="10" r="2" fill="{{STAR_MAIN}}" />
      <circle cx="38" cy="10" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="38" cy="38" r="2" fill="{{STAR_MAIN}}" />
      <circle cx="12" cy="36" r="1.5" fill="{{STAR_MAIN}}" />
    \`,
    featured: false
  },
  {
    id: "clipboard-review-checklist-stars-icon",
    title: "Clipboard Checklist Star Review UI Icon PNG",
    slug: "clipboard-review-checklist-stars-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Clipboard review checklist with three stars and horizontal text lines. Flat UI interface icon for evaluation, QA audits, and product ratings.",
    tags: ["clipboard star icon", "checklist review star", "audit star icon", "rating checklist png", "ui clipboard rating"],
    searchVolume: "26,100/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Clipboard Board -->
      <rect x="10" y="8" width="28" height="36" rx="4" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <!-- Clip Top -->
      <path d="M 18 10 L 18 5 L 30 5 L 30 10 Z" fill="{{STAR_MAIN}}" />
      <!-- 3 Rating Stars -->
      <g fill="{{STAR_MAIN}}">
        <polygon points="17,19 18.2,21.8 21,22.2 19,24.2 19.5,27 17,25.5 14.5,27 15,24.2 13,22.2 15.8,21.8" />
        <polygon points="24,19 25.2,21.8 28,22.2 26,24.2 26.5,27 24,25.5 21.5,27 22,24.2 20,22.2 22.8,21.8" />
        <polygon points="31,19 32.2,21.8 35,22.2 33,24.2 33.5,27 31,25.5 28.5,27 29,24.2 27,22.2 29.8,21.8" />
      </g>
      <!-- Horizontal Checklist Lines -->
      <line x1="16" y1="33" x2="32" y2="33" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
      <line x1="16" y1="38" x2="26" y2="38" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
    \`,
    featured: false
  },
  {
    id: "hand-holding-floating-star-icon",
    title: "Hand Presenting Floating Star Talent Icon PNG",
    slug: "hand-presenting-floating-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Open palm hand holding or presenting a floating five-pointed star. Creative icon representing talent, achievement, bonus reward, and feedback.",
    tags: ["hand holding star", "star in hand icon", "talent star icon", "reward star icon", "give star rating png"],
    searchVolume: "29,500/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Floating Star Above -->
      <polygon fill="{{STAR_MAIN}}" points="24,4 27.5,14 38,14.5 29.5,21 32,31 24,25 16,31 18.5,21 10,14.5 20.5,14" />
      <!-- Open Palm Hand Silhouette Below -->
      <path d="M 6 36 C 14 33, 20 35, 26 33 C 32 31, 38 27, 42 29 C 44 31, 42 34, 38 36 C 30 40, 22 42, 12 42 L 6 42 Z" fill="{{STAR_MAIN}}" />
    \`,
    featured: true
  },
  {
    id: "outlined-shooting-star-speed-lines-icon",
    title: "Outlined Shooting Star with Speed Lines Icon PNG",
    slug: "outlined-shooting-star-speed-lines-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Outlined shooting star with three diagonal trailing motion speed lines. Linear vector interface icon for speed, success, and high-velocity performance.",
    tags: ["shooting star line icon", "linear shooting star", "speed lines star", "fast star icon", "falling star outline"],
    searchVolume: "37,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Linear Star Head -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linejoin="round" points="34,6 37.5,14.5 46.5,15.5 39.5,22 41.5,31 34,26 26.5,31 28.5,22 21.5,15.5 30.5,14.5" />
      <!-- 3 Diagonal Speed Trailing Lines -->
      <line x1="22" y1="26" x2="6" y2="42" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="34" x2="16" y2="46" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" />
      <line x1="18" y1="18" x2="4" y2="32" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" />
    \`,
    featured: false
  },
  {
    id: "nested-dual-stars-rating-icon",
    title: "Nested Dual Stars Rating UI Icon PNG",
    slug: "nested-dual-stars-rating-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Large outlined five-pointed star with a smaller star nested beside it. Minimalist UI rating icon for bookmark collections and premium tier status.",
    tags: ["dual stars icon", "double star png", "nested stars icon", "two stars rating", "favorite stars ui"],
    searchVolume: "21,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Big Outlined Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.8" stroke-linejoin="round" points="20,6 24.5,17 36.5,18 27.5,26 30,38 20,31.5 10,38 12.5,26 3.5,18 15.5,17" />
      <!-- Small Companion Star -->
      <polygon fill="{{STAR_MAIN}}" points="38,24 40,29 45,29.5 41,33 42,38 38,35.5 34,38 35,33 31,29.5 36,29" />
    \`,
    featured: false
  },
  {
    id: "smartphone-app-star-rating-icon",
    title: "Smartphone Screen Star Rating UI Icon PNG",
    slug: "smartphone-app-star-rating-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Smartphone mobile screen displaying three rating stars in the center. App store review feedback and mobile UX evaluation icon.",
    tags: ["mobile star rating", "smartphone review icon", "app rating star png", "phone star icon", "mobile feedback star"],
    searchVolume: "34,800/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Mobile Phone Body -->
      <rect x="13" y="4" width="22" height="40" rx="4" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <line x1="21" y1="8" x2="27" y2="8" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" />
      <circle cx="24" cy="39" r="1.5" fill="{{STAR_MAIN}}" />
      <!-- 3 Rating Stars Centered on Screen -->
      <g fill="{{STAR_MAIN}}">
        <polygon points="18,20 19,22.2 21.5,22.5 19.5,24 20,26.5 18,25 16,26.5 16.5,24 14.5,22.5 17,22.2" />
        <polygon points="24,20 25,22.2 27.5,22.5 25.5,24 26,26.5 24,25 22,26.5 22.5,24 20.5,22.5 23,22.2" />
        <polygon points="30,20 31,22.2 33.5,22.5 31.5,24 32,26.5 30,25 28,26.5 28.5,24 26.5,22.5 29,22.2" />
      </g>
    \`,
    featured: false
  },
  {
    id: "solid-shooting-star-streak-icon",
    title: "Solid Shooting Star Meteor Streak Icon PNG",
    slug: "solid-shooting-star-meteor-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Solid black shooting star silhouette streaking downward with speed trail dashes. Clean vector icon for celestial events, speed, and night sky UI.",
    tags: ["solid shooting star", "meteor silhouette icon", "falling star glyph", "star speed trail png", "space meteor icon"],
    searchVolume: "42,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Star Head Silhouette -->
      <polygon fill="{{STAR_MAIN}}" points="36,4 39,12 47,13 41,18 43,26 36,21 29,26 31,18 25,13 33,12" />
      <!-- Tapered Meteor Tail -->
      <path d="M 28 17 L 8 37 C 6 39, 4 43, 6 44 C 7 45, 11 43, 13 41 L 33 21 Z" fill="{{STAR_MAIN}}" />
      <!-- Dash Accents -->
      <line x1="20" y1="13" x2="10" y2="23" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
      <line x1="33" y1="28" x2="25" y2="36" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" />
    \`,
    featured: false
  },
  {
    id: "geometric-diamond-sparkle-glyph-icon",
    title: "Geometric Diamond Sparkle Star Glyph Icon PNG",
    slug: "geometric-diamond-sparkle-glyph-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Geometric four-pointed diamond sparkle star glyph with solid black fill. Minimalist UI element for AI tools, prompts, and smart features.",
    tags: ["diamond star glyph", "four point star png", "ai prompt star", "geometric sparkle icon", "solid diamond star"],
    searchVolume: "67,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <path fill="{{STAR_MAIN}}" d="M 24 2 C 24 15, 27 21, 44 24 C 27 27, 24 33, 24 46 C 24 33, 21 27, 4 24 C 21 21, 24 15, 24 2 Z" />
    \`,
    featured: true
  },
  {
    id: "shooting-star-parallel-streaks-icon",
    title: "Shooting Star with Parallel Streaks Icon PNG",
    slug: "shooting-star-parallel-streaks-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Solid silhouette shooting star with two clean parallel streak motion lines. High-speed vector interface icon for quick actions and milestone launches.",
    tags: ["parallel streak star", "shooting star icon", "fast star vector", "meteor icon png", "velocity star glyph"],
    searchVolume: "25,400/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Solid 5-Point Star -->
      <polygon fill="{{STAR_MAIN}}" points="36,8 39,17 48,17.5 41,23.5 43.5,32 36,27 28.5,32 31,23.5 24,17.5 33,17" />
      <!-- Two Parallel Horizontal / Diagonal Streaks -->
      <line x1="22" y1="18" x2="4" y2="18" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <line x1="24" y1="28" x2="8" y2="28" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
    \`,
    featured: false
  },
  {
    id: "user-avatar-favorite-star-icon",
    title: "User Profile Avatar with Favorite Star Icon PNG",
    slug: "user-avatar-favorite-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "User profile avatar silhouette next to a small five-pointed star. Standard interface icon for favorite users, VIP members, and top contributors.",
    tags: ["user star icon", "favorite user avatar", "profile star png", "vip member icon", "top user badge"],
    searchVolume: "38,500/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- User Head & Shoulders -->
      <circle cx="20" cy="16" r="8" fill="{{STAR_MAIN}}" />
      <path d="M 6 40 C 6 30, 12 28, 20 28 C 28 28, 34 30, 34 40 Z" fill="{{STAR_MAIN}}" />
      <!-- VIP Star Top-Right -->
      <polygon fill="{{STAR_MAIN}}" points="36,4 38.5,10 45,10.5 40,14.5 41.5,21 36,17.5 30.5,21 32,14.5 27,10.5 33.5,10" />
    \`,
    featured: false
  },
  {
    id: "hand-giving-star-feedback-icon",
    title: "Hand Giving Star Feedback Gesture Icon PNG",
    slug: "hand-giving-star-feedback-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Hand holding a small floating star silhouette, giving feedback or reward gesture. Clean vector icon for user rating input and gratuity tips.",
    tags: ["give star rating", "hand feedback star", "rate app icon", "user rating gesture", "star tip icon"],
    searchVolume: "27,200/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Small Star Pinched Above Hand -->
      <polygon fill="{{STAR_MAIN}}" points="24,4 26,9 31,9.5 27,13 28,18 24,15.5 20,18 21,13 17,9.5 22,9" />
      <!-- Hand Gesture Silhouette Holding Star -->
      <path d="M 12 28 C 16 24, 21 22, 25 22 C 27 22, 28 24, 27 26 C 24 28, 20 30, 16 33 L 14 33 L 4 33 L 4 42 L 28 42 C 34 42, 38 38, 42 34 C 44 32, 42 30, 40 30 C 37 30, 34 32, 32 32 L 26 32 C 29 29, 33 26, 32 23 C 31 20, 26 19, 21 21 C 16 23, 11 26, 8 28 Z" fill="{{STAR_MAIN}}" />
    \`,
    featured: false
  },
  {
    id: "classic-sharp-star-silhouette-icon",
    title: "Classic Sharp Star Silhouette UI Icon PNG",
    slug: "classic-sharp-star-silhouette-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Classic sharp five-pointed star with solid black geometric silhouette. Minimal flat interface glyph for ratings, bookmarks, and UI controls.",
    tags: ["sharp star icon", "classic star silhouette", "flat star glyph", "solid star png", "geometric star icon"],
    searchVolume: "110,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <polygon fill="{{STAR_MAIN}}" points="24,2 30.5,15.5 45.5,17.5 34.5,28 37.5,43 24,35.5 10.5,43 13.5,28 2.5,17.5 17.5,15.5" />
    \`,
    featured: false
  },
  {
    id: "octagram-starburst-badge-icon",
    title: "Eight-Pointed Octagram Starburst Badge Icon PNG",
    slug: "eight-pointed-octagram-starburst-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Eight-pointed faceted starburst badge silhouette, octagram geometric star icon with bold black fill. Ideal for discount seals, sale tags, and verified badges.",
    tags: ["octagram star icon", "8 point starburst", "star badge glyph", "discount star seal", "geometric octagram png"],
    searchVolume: "31,800/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <polygon fill="{{STAR_MAIN}}" points="24,3 29,13 39,9 35,19 45,24 35,29 39,39 29,35 24,45 19,35 9,39 13,29 3,24 13,19 9,9 19,13" />
    \`,
    featured: true
  },
  {
    id: "document-review-checkmark-stars-icon",
    title: "Document Review Star Rating & Checkmark Icon PNG",
    slug: "document-review-checkmarks-stars-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Paper sheet document review with star rating and checkmarks. Minimalist vector glyph for approved contracts, rated resumes, and QA inspections.",
    tags: ["approved document star", "review checkmark icon", "contract rating png", "verified document star", "qa inspection icon"],
    searchVolume: "24,500/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Document Outline -->
      <path d="M 10 4 L 28 4 L 38 14 L 38 44 L 10 44 Z" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" />
      <path d="M 28 4 L 28 14 L 38 14" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linejoin="round" />
      <!-- Star at Top Left of Sheet -->
      <polygon fill="{{STAR_MAIN}}" points="18,16 19.5,19.5 23,20 20.5,22.5 21,26 18,24 15,26 15.5,22.5 13,20 16.5,19.5" />
      <!-- Checkmark List Items -->
      <path d="M 16 32 L 19 35 L 25 29" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="28" y1="32" x2="34" y2="32" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
      <line x1="16" y1="39" x2="32" y2="39" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
    \`,
    featured: false
  },
  {
    id: "outlined-star-accent-floating-icon",
    title: "Outlined Star with Top-Right Accent Star Icon PNG",
    slug: "outlined-star-accent-floating-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Outlined five-pointed star with a smaller accent star floating to the top right. Clean modern line art for favorites, premium tier, and wishlist interactions.",
    tags: ["outline star with accent", "twinkle star linear", "double star lineart", "favorite accent star", "modern star icon"],
    searchVolume: "28,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Main Outlined Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.8" stroke-linejoin="round" points="20,10 24.5,20 35.5,21 27.5,28 30,39 20,33 10,39 12.5,28 4.5,21 15.5,20" />
      <!-- Floating Accent Star -->
      <polygon fill="{{STAR_MAIN}}" points="40,6 41.5,10 45,10.5 42,13 43,16.5 40,14.5 37,16.5 38,13 35,10.5 38.5,10" />
    \`,
    featured: false
  },
  {
    id: "championship-trophy-star-cup-icon",
    title: "Championship Trophy Cup with Embossed Star Icon PNG",
    slug: "championship-trophy-embossed-star-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "Championship trophy cup silhouette with a five-pointed star embossed on the cup. Milestone victory and achievement award vector icon.",
    tags: ["trophy star cup", "championship star icon", "winner cup star", "award trophy icon", "achievement star cup"],
    searchVolume: "46,000/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Trophy Handles -->
      <path d="M 12 12 C 4 12, 4 26, 12 28" stroke="{{STAR_MAIN}}" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M 36 12 C 44 12, 44 26, 36 28" stroke="{{STAR_MAIN}}" stroke-width="3" fill="none" stroke-linecap="round" />
      <!-- Cup Basin -->
      <path d="M 12 8 L 36 8 L 34 26 C 32 34, 16 34, 14 26 Z" fill="{{STAR_MAIN}}" />
      <!-- Embossed Center Star (Hollow Cutout) -->
      <polygon fill="#ffffff" points="24,13 25.8,17.5 30.5,17.8 27,21 28,25.5 24,23 20,25.5 21,21 17.5,17.8 22.2,17.5" />
      <!-- Pedestal Stem & Base -->
      <rect x="22" y="32" width="4" height="6" fill="{{STAR_MAIN}}" />
      <rect x="14" y="38" width="20" height="4" rx="2" fill="{{STAR_MAIN}}" />
    \`,
    featured: true
  },
  {
    id: "user-experience-star-sparkles-icon",
    title: "User Experience Customer Satisfaction Star Icon PNG",
    slug: "user-experience-star-sparkles-png",
    category: "interface",
    categoryName: "UI & Interface Icons",
    level: "basic",
    description: "User experience feedback icon featuring a human face profile with small star sparkles. Minimalist vector for customer happiness and delight.",
    tags: ["customer satisfaction star", "user experience icon", "delighted user star", "cx star feedback", "nps star icon"],
    searchVolume: "23,900/mo",
    defaultColor: "#1E293B",
    viewBox: "0 0 48 48",
    svgContent: \`
      <!-- Smiling Face Profile / Head -->
      <circle cx="20" cy="24" r="16" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <circle cx="16" cy="21" r="2" fill="{{STAR_MAIN}}" />
      <circle cx="24" cy="21" r="2" fill="{{STAR_MAIN}}" />
      <path d="M 16 28 Q 20 34 24 28" stroke="{{STAR_MAIN}}" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Star Sparkle of Delight -->
      <polygon fill="{{STAR_MAIN}}" points="38,8 39.5,12.5 44,13 40.5,16 41.5,20.5 38,18 34.5,20.5 35.5,16 32,13 36.5,12.5" />
      <circle cx="44" cy="26" r="1.5" fill="{{STAR_MAIN}}" />
    \`,
    featured: false
  },
`;

const anchor = '  {\r\n    id: "award-rosette-star-ribbon",';
const unixAnchor = '  {\n    id: "award-rosette-star-ribbon",';

if (content.includes(anchor)) {
  content = content.replace(anchor, newIcons + anchor);
} else if (content.includes(unixAnchor)) {
  content = content.replace(unixAnchor, newIcons + unixAnchor);
} else {
  console.error("Anchor award-rosette-star-ribbon not found!");
  process.exit(1);
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully inserted 21 new UI interface icons into src/data/stars.ts!");
