const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../src/data/stars.ts');
const content = fs.readFileSync(targetFile, 'utf8');

const totalAssetsMatches = content.match(/id:\s*["'][^"']+["']/g);
const stickerMatches = content.match(/category:\s*["']stickers["']/g);
const interfaceMatches = content.match(/category:\s*["']interface["']/g);

console.log('Total IDs count:', totalAssetsMatches ? totalAssetsMatches.length : 0);
console.log('Total stickers count:', stickerMatches ? stickerMatches.length : 0);
console.log('Total interface icons count:', interfaceMatches ? interfaceMatches.length : 0);

const expectedSlugs = [
  'solid-black-star-glyph-png',
  'circular-medal-star-icon-png',
  'customer-review-document-stars-png',
  'clean-outline-star-linear-png',
  'four-point-sparkle-twinkle-icon-png',
  'clipboard-review-checklist-stars-png',
  'hand-presenting-floating-star-png',
  'outlined-shooting-star-speed-lines-png',
  'nested-dual-stars-rating-png',
  'smartphone-app-star-rating-png',
  'solid-shooting-star-meteor-png',
  'geometric-diamond-sparkle-glyph-png',
  'shooting-star-parallel-streaks-png',
  'user-avatar-favorite-star-png',
  'hand-giving-star-feedback-png',
  'classic-sharp-star-silhouette-png',
  'eight-pointed-octagram-starburst-png',
  'document-review-checkmarks-stars-png',
  'outlined-star-accent-floating-png',
  'championship-trophy-embossed-star-png',
  'user-experience-star-sparkles-png'
];

let allFound = true;
expectedSlugs.forEach(slug => {
  if (!content.includes(slug)) {
    console.error(`✗ Missing: ${slug}`);
    allFound = false;
  }
});
if (allFound) {
  console.log(`✓ All 21 new UI interface icon slugs found!`);
}
