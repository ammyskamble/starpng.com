import type { StarAsset } from '../stars';

export const PART4_ASSETS: StarAsset[] = [
  // =========================================================================
  // STAR BEARS & MASCOTS (+15 assets) -> Total 18
  // =========================================================================
  {
    id: 'teddy-bear-sleeping-on-moon-star',
    level: 'moderate',
    title: 'Teddy Bear Sleeping on Moon with Star PNG',
    slug: 'teddy-bear-sleeping-on-moon-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Sweet baby teddy bear fast asleep curled on a golden crescent moon, gently hugging a glowing wish star. Heartwarming nursery and baby room clipart.',
    tags: ['bear sleeping on moon', 'teddy bear star png', 'nursery bear moon clipart', 'cute sleeping baby bear'],
    searchVolume: '14,700/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Crescent Moon -->
      <path fill="#FBBF24" d="M140,25 C85,25 40,70 40,125 C40,165 68,190 105,195 C65,170 65,115 100,75 C120,52 145,45 155,42 C150,30 145,25 140,25 Z" />
      <!-- Sleeping Bear Body -->
      <ellipse cx="85" cy="115" rx="22" ry="18" fill="#B45309" />
      <!-- Bear Head -->
      <circle cx="95" cy="95" r="16" fill="#B45309" />
      <circle cx="85" cy="82" r="5" fill="#92400E" />
      <circle cx="108" cy="85" r="5" fill="#92400E" />
      <!-- Muzzle -->
      <ellipse cx="102" cy="100" rx="6" ry="4" fill="#FDE68A" />
      <circle cx="104" cy="99" r="1.5" fill="#451A03" />
      <!-- Closed Eye -->
      <path fill="none" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" d="M92,94 Q95,98 98,94" />
      <!-- Hugged Wish Star -->
      <polygon fill="{{STAR_MAIN}}" points="115,105 119,118 132,119 122,127 125,140 115,132 105,140 108,127 98,119 111,118" />
    `,
  },
  {
    id: 'cute-bunny-reaching-for-star',
    level: 'moderate',
    title: 'Cute Bunny Reaching for Star PNG',
    slug: 'cute-bunny-reaching-for-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Fluffy white baby bunny rabbit standing on tiptoes reaching with both paws toward a sparkling golden star. Adorable children storybook illustration.',
    tags: ['bunny with star png', 'cute rabbit star', 'kawaii bunny reaching star', 'nursery bunny star clipart'],
    searchVolume: '11,400/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 180 220',
    svgContent: `
      <!-- Bunny Long Ears -->
      <ellipse cx="75" cy="65" rx="8" ry="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" transform="rotate(-15 75 65)" />
      <ellipse cx="75" cy="65" rx="4" ry="16" fill="#FBCFE8" transform="rotate(-15 75 65)" />
      <ellipse cx="105" cy="65" rx="8" ry="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" transform="rotate(15 105 65)" />
      <ellipse cx="105" cy="65" rx="4" ry="16" fill="#FBCFE8" transform="rotate(15 105 65)" />
      <!-- Bunny Head -->
      <circle cx="90" cy="110" r="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
      <!-- Eyes & Blushing -->
      <ellipse cx="80" cy="108" rx="3" ry="4" fill="#1E293B" />
      <ellipse cx="100" cy="108" rx="3" ry="4" fill="#1E293B" />
      <ellipse cx="75" cy="118" rx="4" ry="2" fill="#F472B6" opacity="0.6" />
      <ellipse cx="105" cy="118" rx="4" ry="2" fill="#F472B6" opacity="0.6" />
      <polygon points="90,114 88,118 92,118" fill="#F472B6" />
      <!-- Bunny Body -->
      <ellipse cx="90" cy="165" rx="26" ry="32" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
      <!-- Reaching Paws -->
      <ellipse cx="75" cy="140" rx="7" ry="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" transform="rotate(-30 75 140)" />
      <ellipse cx="105" cy="140" rx="7" ry="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" transform="rotate(30 105 140)" />
      <!-- Glowing Star Reached For -->
      <polygon fill="{{STAR_MAIN}}" points="90,15 95,30 110,32 98,42 102,56 90,48 78,56 82,42 70,32 85,30" />
      <circle cx="90" cy="35" r="4" fill="#ffffff" />
    `,
  },
  {
    id: 'cute-panda-sitting-with-star',
    level: 'moderate',
    title: 'Cute Panda Sitting with Star PNG',
    slug: 'cute-panda-sitting-with-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Chubby baby panda bear sitting comfortably holding a big bright yellow star with sparkling eyes. Adorable wildlife animal mascot clipart.',
    tags: ['panda with star png', 'cute baby panda star', 'kawaii panda bear', 'panda bear star sticker'],
    searchVolume: '13,200/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Panda Black Ears -->
      <circle cx="65" cy="55" r="14" fill="#0F172A" />
      <circle cx="135" cy="55" r="14" fill="#0F172A" />
      <!-- Panda Head -->
      <ellipse cx="100" cy="85" rx="42" ry="36" fill="#FFFFFF" stroke="#0F172A" stroke-width="3" />
      <!-- Eye Patches -->
      <ellipse cx="80" cy="85" rx="10" ry="14" fill="#0F172A" transform="rotate(-15 80 85)" />
      <ellipse cx="120" cy="85" rx="10" ry="14" fill="#0F172A" transform="rotate(15 120 85)" />
      <circle cx="82" cy="83" r="3.5" fill="#FFFFFF" />
      <circle cx="118" cy="83" r="3.5" fill="#FFFFFF" />
      <!-- Nose & Mouth -->
      <ellipse cx="100" cy="98" rx="5" ry="3" fill="#0F172A" />
      <path fill="none" stroke="#0F172A" stroke-width="2" stroke-linecap="round" d="M96,104 Q100,108 104,104" />
      <!-- Body & Clutched Star -->
      <ellipse cx="100" cy="148" rx="44" ry="36" fill="#FFFFFF" stroke="#0F172A" stroke-width="3" />
      <!-- Arms Holding Star -->
      <ellipse cx="60" cy="140" rx="12" ry="22" fill="#0F172A" transform="rotate(30 60 140)" />
      <ellipse cx="140" cy="140" rx="12" ry="22" fill="#0F172A" transform="rotate(-30 140 140)" />
      <!-- Star -->
      <polygon fill="{{STAR_MAIN}}" stroke="#D97706" stroke-width="2" points="100,105 108,126 130,128 114,142 118,164 100,152 82,164 86,142 70,128 92,126" />
    `,
  },
  {
    id: 'cute-fox-cub-star-catcher',
    level: 'high',
    title: 'Cute Fox Cub Catching Star PNG',
    slug: 'cute-fox-cub-catching-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Charming woodland orange fox cub happily balancing a sparkling fairy star on its nose. Whimsical forest animal art for autumn cards and storybooks.',
    tags: ['fox with star png', 'cute fox cub clipart', 'woodland star animal', 'baby fox star sticker'],
    searchVolume: '9,900/mo',
    defaultColor: '#EA580C',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Fox Body & Tail -->
      <ellipse cx="90" cy="145" rx="30" ry="24" fill="#EA580C" />
      <!-- Fluffy Tail with White Tip -->
      <path fill="#EA580C" d="M115,145 C155,145 165,115 155,95 C140,110 130,125 115,135 Z" />
      <path fill="#FFFFFF" d="M155,95 C150,105 145,110 140,115 C148,110 152,102 155,95 Z" />
      <!-- Fox Head -->
      <polygon fill="#EA580C" points="85,60 55,95 115,95" />
      <!-- White Cheeks -->
      <polygon fill="#FFFFFF" points="70,95 55,95 85,110" />
      <polygon fill="#FFFFFF" points="100,95 115,95 85,110" />
      <!-- Fox Ears -->
      <polygon fill="#EA580C" points="60,65 50,30 75,55" />
      <polygon fill="#0F172A" points="58,58 50,30 68,52" />
      <polygon fill="#EA580C" points="110,65 120,30 95,55" />
      <polygon fill="#0F172A" points="112,58 120,30 102,52" />
      <!-- Face -->
      <circle cx="72" cy="85" r="3" fill="#0F172A" />
      <circle cx="98" cy="85" r="3" fill="#0F172A" />
      <circle cx="85" cy="108" r="3.5" fill="#0F172A" />
      <!-- Star on Nose -->
      <polygon fill="{{STAR_MAIN}}" points="85,15 89,28 102,29 92,37 95,50 85,42 75,50 78,37 68,29 81,28" />
    `,
  },
  {
    id: 'cute-koala-climbing-star-branch',
    level: 'high',
    title: 'Cute Koala Hugging Star PNG',
    slug: 'cute-koala-hugging-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Sweet grey Australian baby koala bear lovingly clinging to a giant shiny golden star. Adorable nursery graphic for newborn decor and cards.',
    tags: ['koala with star png', 'cute baby koala star', 'australian animal star', 'kawaii koala clipart'],
    searchVolume: '8,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Giant Golden Star -->
      <polygon fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="3" points="110,20 126,65 174,70 136,105 146,155 110,130 74,155 84,105 46,70 94,65" />
      <!-- Koala Fluffy Ears -->
      <circle cx="50" cy="80" r="15" fill="#94A3B8" />
      <circle cx="50" cy="80" r="9" fill="#F1F5F9" />
      <circle cx="85" cy="65" r="15" fill="#94A3B8" />
      <circle cx="85" cy="65" r="9" fill="#F1F5F9" />
      <!-- Koala Head -->
      <circle cx="68" cy="88" r="22" fill="#94A3B8" />
      <!-- Koala Oval Nose -->
      <ellipse cx="68" cy="94" rx="7" ry="11" fill="#334155" />
      <!-- Eyes -->
      <circle cx="58" cy="86" r="2.5" fill="#0F172A" />
      <circle cx="78" cy="86" r="2.5" fill="#0F172A" />
      <!-- Clinging Paws -->
      <ellipse cx="90" cy="98" rx="6" ry="10" fill="#94A3B8" />
      <ellipse cx="78" cy="122" rx="6" ry="10" fill="#94A3B8" />
    `,
  },
  {
    id: 'cute-kitten-playing-with-falling-star',
    level: 'moderate',
    title: 'Cute Kitten Playing with Star PNG',
    slug: 'cute-kitten-playing-with-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Playful calico baby kitten swatting at a dangling celestial star with curious bright eyes. Cute cat lover clipart for stickers and greeting cards.',
    tags: ['cat with star png', 'cute kitten star', 'playful cat star clipart', 'kawaii cat star sticker'],
    searchVolume: '15,600/mo',
    defaultColor: '#FBBF24',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Cat Body Sitting -->
      <ellipse cx="85" cy="145" rx="30" ry="34" fill="#FED7AA" stroke="#EA580C" stroke-width="2.5" />
      <!-- Cat Head -->
      <circle cx="85" cy="95" r="28" fill="#FED7AA" stroke="#EA580C" stroke-width="2.5" />
      <!-- Cat Ears -->
      <polygon fill="#EA580C" points="62,75 55,45 80,68" />
      <polygon fill="#EA580C" points="108,75 115,45 90,68" />
      <!-- Cat Eyes -->
      <ellipse cx="75" cy="92" rx="4" ry="6" fill="#0F172A" />
      <ellipse cx="95" cy="92" rx="4" ry="6" fill="#0F172A" />
      <circle cx="73" cy="90" r="1.5" fill="#ffffff" />
      <circle cx="93" cy="90" r="1.5" fill="#ffffff" />
      <!-- Whiskers & Nose -->
      <polygon points="85,98 83,101 87,101" fill="#F43F5E" />
      <line x1="55" y1="98" x2="70" y2="100" stroke="#0F172A" stroke-width="1.5" />
      <line x1="100" y1="100" x2="115" y2="98" stroke="#0F172A" stroke-width="1.5" />
      <!-- Swatting Raised Paw -->
      <ellipse cx="120" cy="90" rx="8" ry="14" fill="#FED7AA" stroke="#EA580C" stroke-width="2" transform="rotate(-40 120 90)" />
      <!-- Dangling Star -->
      <line x1="140" y1="10" x2="140" y2="65" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3,3" />
      <polygon fill="{{STAR_MAIN}}" points="140,65 144,76 156,77 146,85 149,97 140,90 131,97 134,85 124,77 136,76" />
    `,
  },
  {
    id: 'cute-penguin-holding-ice-star',
    level: 'moderate',
    title: 'Cute Penguin Holding Star PNG',
    slug: 'cute-penguin-holding-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Chubby baby emperor penguin wearing a cozy knit scarf and holding a glowing frosty ice star. Charming winter holiday and Christmas design.',
    tags: ['penguin with star png', 'cute winter penguin', 'christmas penguin star', 'baby penguin clipart'],
    searchVolume: '10,700/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 180 200',
    svgContent: `
      <!-- Penguin Body -->
      <ellipse cx="90" cy="120" rx="42" ry="54" fill="#0F172A" />
      <ellipse cx="90" cy="125" rx="30" ry="42" fill="#FFFFFF" />
      <!-- Flippers -->
      <ellipse cx="50" cy="120" rx="10" ry="24" fill="#0F172A" transform="rotate(25 50 120)" />
      <ellipse cx="130" cy="120" rx="10" ry="24" fill="#0F172A" transform="rotate(-25 130 120)" />
      <!-- Orange Beak & Eyes -->
      <circle cx="80" cy="92" r="3.5" fill="#0F172A" />
      <circle cx="100" cy="92" r="3.5" fill="#0F172A" />
      <polygon points="90,96 84,104 96,104" fill="#F97316" />
      <!-- Red Knit Scarf -->
      <rect x="62" y="105" width="56" height="12" rx="6" fill="#DC2626" />
      <rect x="100" y="112" width="12" height="24" rx="4" fill="#B91C1C" />
      <!-- Frosty Star Held -->
      <polygon fill="{{STAR_MAIN}}" stroke="#0284C7" stroke-width="2" points="90,130 96,145 112,146 99,155 103,170 90,162 77,170 81,155 68,146 84,145" />
    `,
  },
  {
    id: 'cute-star-fairy-mascot-flying',
    level: 'high',
    title: 'Cute Star Fairy Mascot PNG',
    slug: 'cute-star-fairy-mascot-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Little chibi celestial star fairy girl with sparkling star wand, glitter wings, and floating starlight ribbons. Fantasy mascot for children games.',
    tags: ['star fairy png', 'chibi fairy mascot', 'fairy with star wand', 'cute star girl clipart'],
    searchVolume: '11,800/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Fairy Wings -->
      <ellipse cx="70" cy="85" rx="28" ry="16" fill="#FCE7F3" stroke="#F472B6" stroke-width="2" transform="rotate(-30 70 85)" opacity="0.8" />
      <ellipse cx="130" cy="85" rx="28" ry="16" fill="#FCE7F3" stroke="#F472B6" stroke-width="2" transform="rotate(30 130 85)" opacity="0.8" />
      <!-- Fairy Dress & Body -->
      <polygon fill="{{STAR_MAIN}}" points="100,105 80,165 120,165" />
      <!-- Fairy Head -->
      <circle cx="100" cy="82" r="22" fill="#FED7AA" />
      <!-- Blonde Hair with Star Hairclip -->
      <path fill="#FDE047" d="M78,80 C78,60 122,60 122,80 C122,70 100,65 78,80 Z" />
      <polygon fill="#F59E0B" points="82,65 85,71 91,72 86,76 88,82 82,78 76,82 78,76 73,72 79,71" />
      <!-- Smiling Eyes -->
      <circle cx="92" cy="84" r="2.5" fill="#171717" />
      <circle cx="108" cy="84" r="2.5" fill="#171717" />
      <!-- Floating Star Wand -->
      <line x1="115" y1="115" x2="145" y2="85" stroke="#CBD5E1" stroke-width="2.5" />
      <polygon fill="#FBBF24" points="145,85 148,93 156,94 150,100 152,108 145,103 138,108 140,100 134,94 142,93" />
    `,
  },
  {
    id: 'cute-dinosaur-hugging-star',
    level: 'moderate',
    title: 'Cute Dino Baby Holding Star PNG',
    slug: 'cute-dino-baby-holding-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Playful pastel green baby brontosaurus dinosaur hugging a glowing yellow star with blushing cheeks. Cute prehistoric illustration for boys room decor.',
    tags: ['dino with star png', 'cute baby dinosaur star', 'kawaii dino clipart', 'dinosaur nursery star'],
    searchVolume: '12,500/mo',
    defaultColor: '#10B981',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Dino Long Neck & Body -->
      <ellipse cx="85" cy="140" rx="38" ry="30" fill="{{STAR_MAIN}}" />
      <path fill="{{STAR_MAIN}}" d="M90,135 C95,95 125,75 135,55 C145,45 155,55 145,70 C135,85 115,110 110,135 Z" />
      <!-- Dino Head -->
      <ellipse cx="140" cy="55" rx="16" ry="12" fill="{{STAR_MAIN}}" />
      <!-- Eye & Smile -->
      <circle cx="144" cy="52" r="3" fill="#064E3B" />
      <circle cx="143" cy="50.5" r="1" fill="#ffffff" />
      <path fill="none" stroke="#064E3B" stroke-width="1.5" stroke-linecap="round" d="M142,60 Q146,63 150,60" />
      <!-- Dino Back Spikes -->
      <polygon points="120,68 126,60 128,70" fill="#34D399" />
      <polygon points="108,95 114,87 116,97" fill="#34D399" />
      <polygon points="98,118 104,110 106,120" fill="#34D399" />
      <!-- Clutched Star -->
      <polygon fill="#FBBF24" stroke="#D97706" stroke-width="2" points="75,95 82,112 100,114 86,126 90,144 75,134 60,144 64,126 50,114 68,112" />
    `,
  },
  {
    id: 'cute-sleepy-sloth-hanging-star',
    level: 'moderate',
    title: 'Cute Sleepy Sloth on Star PNG',
    slug: 'cute-sleepy-sloth-on-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Chilled sleepy baby sloth hanging upside down peacefully from the horizontal point of a giant star. Adorable relaxation and self-care animal clipart.',
    tags: ['sloth with star png', 'cute sloth clipart', 'sleepy sloth hanging', 'kawaii sloth star sticker'],
    searchVolume: '9,200/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Star Arm as Branch -->
      <polygon fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="3" points="100,20 124,72 180,78 138,118 148,174 100,146 52,174 62,118 20,78 76,72" />
      <!-- Sloth Body Hanging Under Top Right Arm -->
      <ellipse cx="135" cy="115" rx="22" ry="16" fill="#A16207" />
      <!-- Sloth Head -->
      <circle cx="152" cy="120" r="14" fill="#D97706" />
      <ellipse cx="152" cy="122" rx="10" ry="7" fill="#FEF3C7" />
      <!-- Eye Stripes & Closed Eyes -->
      <path fill="#78350F" d="M145,118 L150,122 L145,124 Z" />
      <path fill="#78350F" d="M159,118 L154,122 L159,124 Z" />
      <circle cx="152" cy="123" r="2" fill="#451A03" />
      <!-- Hanging Claws Grabbing Star -->
      <path fill="none" stroke="#451A03" stroke-width="2.5" stroke-linecap="round" d="M125,95 C125,85 130,85 130,95" />
      <path fill="none" stroke="#451A03" stroke-width="2.5" stroke-linecap="round" d="M142,98 C142,88 147,88 147,98" />
    `,
  },
  {
    id: 'cute-puppy-star-bandana',
    level: 'moderate',
    title: 'Cute Puppy with Star Bandana PNG',
    slug: 'cute-puppy-with-star-bandana-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Cheerful golden retriever puppy mascot wearing a star patterned neckerchief bandana and holding a lucky star toy. Heartwarming pet clipart.',
    tags: ['dog with star png', 'cute puppy star', 'golden retriever puppy clipart', 'dog star bandana sticker'],
    searchVolume: '13,900/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Puppy Head & Floppy Ears -->
      <ellipse cx="65" cy="85" rx="14" ry="26" fill="#B45309" transform="rotate(20 65 85)" />
      <ellipse cx="135" cy="85" rx="14" ry="26" fill="#B45309" transform="rotate(-20 135 85)" />
      <circle cx="100" cy="85" r="32" fill="#FBBF24" />
      <!-- Muzzle -->
      <ellipse cx="100" cy="98" rx="14" ry="10" fill="#FEF3C7" />
      <ellipse cx="100" cy="94" rx="6" ry="4" fill="#451A03" />
      <path fill="none" stroke="#451A03" stroke-width="2" stroke-linecap="round" d="M95,102 Q100,106 105,102" />
      <!-- Eyes -->
      <circle cx="86" cy="82" r="4" fill="#451A03" />
      <circle cx="85" cy="80" r="1.5" fill="#ffffff" />
      <circle cx="114" cy="82" r="4" fill="#451A03" />
      <circle cx="113" cy="80" r="1.5" fill="#ffffff" />
      <!-- Star Bandana -->
      <polygon fill="#DC2626" points="75,115 125,115 100,145" />
      <polygon fill="#ffffff" points="100,122 102,126 106,127 103,130 104,134 100,132 96,134 97,130 94,127 98,126" />
      <!-- Toy Star in Paws -->
      <polygon fill="{{STAR_MAIN}}" points="100,148 106,162 120,163 109,172 112,185 100,178 88,185 91,172 80,163 94,162" />
    `,
  },
  {
    id: 'cute-owl-stargazer-night',
    level: 'moderate',
    title: 'Cute Owl Stargazer Mascot PNG',
    slug: 'cute-owl-stargazer-mascot-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Wise little night owl perched under twinkling stars with giant round spectacles and starry plumage. Perfect for graduation cards, teachers, and bookworms.',
    tags: ['owl with star png', 'cute owl clipart', 'wise owl stargazer', 'night owl mascot'],
    searchVolume: '8,700/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Owl Body -->
      <ellipse cx="100" cy="130" rx="36" ry="44" fill="#64748B" />
      <!-- Owl Big Eyes with Spectacles -->
      <circle cx="82" cy="90" r="16" fill="#ffffff" stroke="#EAB308" stroke-width="3" />
      <circle cx="118" cy="90" r="16" fill="#ffffff" stroke="#EAB308" stroke-width="3" />
      <line x1="98" y1="90" x2="102" y2="90" stroke="#EAB308" stroke-width="3" />
      <circle cx="82" cy="90" r="8" fill="#1E293B" />
      <circle cx="80" cy="88" r="2.5" fill="#ffffff" />
      <circle cx="118" cy="90" r="8" fill="#1E293B" />
      <circle cx="116" cy="88" r="2.5" fill="#ffffff" />
      <!-- Beak -->
      <polygon points="100,102 96,110 104,110" fill="#F97316" />
      <!-- Owl Ear Tufts -->
      <polygon points="72,75 60,50 82,65" fill="#475569" />
      <polygon points="128,75 140,50 118,65" fill="#475569" />
      <!-- Perched Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,20 105,35 120,36 108,46 112,60 100,52 88,60 92,46 80,36 95,35" />
    `,
  },
  {
    id: 'cute-unicorn-foal-with-star',
    level: 'high',
    title: 'Cute Unicorn Foal with Star PNG',
    slug: 'cute-unicorn-foal-with-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Charming pastel unicorn foal with rainbow mane and sparkling golden horn admiring a shooting wish star. Magical fantasy art for little girls bedroom decor.',
    tags: ['unicorn with star png', 'cute unicorn foal clipart', 'magical unicorn star', 'rainbow unicorn star sticker'],
    searchVolume: '16,500/mo',
    defaultColor: '#EC4899',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Unicorn Body -->
      <ellipse cx="80" cy="140" rx="34" ry="26" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
      <!-- Unicorn Head -->
      <ellipse cx="125" cy="85" rx="24" ry="18" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
      <!-- Golden Spiral Horn -->
      <polygon fill="#FBBF24" stroke="#D97706" stroke-width="1.5" points="135,70 155,30 142,65" />
      <!-- Pastel Rainbow Mane -->
      <path fill="#F472B6" d="M110,70 C105,85 100,110 105,120" stroke="#F472B6" stroke-width="6" stroke-linecap="round" />
      <path fill="#A78BFA" d="M102,75 C97,90 92,115 97,125" stroke="#A78BFA" stroke-width="6" stroke-linecap="round" />
      <!-- Big Anime Eye with Lashes -->
      <ellipse cx="132" cy="84" rx="4" ry="6" fill="#1E293B" />
      <circle cx="130" cy="82" r="1.5" fill="#ffffff" />
      <path fill="none" stroke="#1E293B" stroke-width="1.5" d="M136,80 L140,78" />
      <!-- Admired Wish Star -->
      <polygon fill="{{STAR_MAIN}}" stroke="#DB2777" stroke-width="1.5" points="165,70 170,82 184,84 173,92 176,105 165,98 154,105 157,92 146,84 160,82" />
    `,
  },
  {
    id: 'cute-hamster-stuffing-star-cheeks',
    level: 'moderate',
    title: 'Cute Hamster with Star PNG',
    slug: 'cute-hamster-with-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Hilariously cute chubby hamster with fully stuffed puffy cheeks holding a tasty star treat. Humorous pet illustration for stickers and social emojis.',
    tags: ['hamster with star png', 'cute hamster clipart', 'chubby hamster cheeks', 'kawaii hamster sticker'],
    searchVolume: '9,800/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Puffy Cheeks Body -->
      <ellipse cx="100" cy="125" rx="48" ry="42" fill="#FED7AA" stroke="#EA580C" stroke-width="2.5" />
      <!-- Round Ears -->
      <circle cx="68" cy="78" r="12" fill="#EA580C" />
      <circle cx="68" cy="78" r="6" fill="#FBCFE8" />
      <circle cx="132" cy="78" r="12" fill="#EA580C" />
      <circle cx="132" cy="78" r="6" fill="#FBCFE8" />
      <!-- Eyes & Nose -->
      <circle cx="82" cy="105" r="4" fill="#171717" />
      <circle cx="81" cy="103" r="1.5" fill="#ffffff" />
      <circle cx="118" cy="105" r="4" fill="#171717" />
      <circle cx="117" cy="103" r="1.5" fill="#ffffff" />
      <polygon points="100,112 97,116 103,116" fill="#F43F5E" />
      <!-- Cheeks Blush -->
      <ellipse cx="64" cy="122" rx="10" ry="6" fill="#F472B6" opacity="0.6" />
      <ellipse cx="136" cy="122" rx="10" ry="6" fill="#F472B6" opacity="0.6" />
      <!-- Nibbled Star Treat -->
      <polygon fill="{{STAR_MAIN}}" points="100,130 105,142 118,144 108,152 111,164 100,158 89,164 92,152 82,144 95,142" />
    `,
  },
  {
    id: 'cute-astronaut-bear-spacewalk',
    level: 'high',
    title: 'Cute Astronaut Bear Spacewalk Star PNG',
    slug: 'cute-astronaut-bear-spacewalk-star-png',
    category: 'characters',
    categoryName: 'Star Bears & Mascots',
    description: 'Brave little cartoon teddy bear astronaut in a bubble helmet floating during an EVA spacewalk to grab a glowing space star. Outer space room art.',
    tags: ['astronaut bear png', 'space bear with star', 'cosmonaut bear clipart', 'kids space star decor'],
    searchVolume: '13,100/mo',
    defaultColor: '#38BDF8',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Space Helmet Bubble -->
      <circle cx="100" cy="85" r="38" fill="#E0F2FE" stroke="#0284C7" stroke-width="3" opacity="0.6" />
      <!-- Bear Head Inside Helmet -->
      <circle cx="80" cy="70" r="10" fill="#B45309" />
      <circle cx="120" cy="70" r="10" fill="#B45309" />
      <ellipse cx="100" cy="88" rx="24" ry="20" fill="#B45309" />
      <ellipse cx="100" cy="94" rx="9" ry="6" fill="#FDE68A" />
      <circle cx="100" cy="92" r="2.5" fill="#451A03" />
      <circle cx="92" cy="85" r="2.5" fill="#451A03" />
      <circle cx="108" cy="85" r="2.5" fill="#451A03" />
      <!-- Spacesuit Body -->
      <rect x="75" y="115" width="50" height="45" rx="14" fill="#FFFFFF" stroke="#0284C7" stroke-width="2.5" />
      <!-- Floating Star in Hand -->
      <polygon fill="{{STAR_MAIN}}" points="150,110 155,124 170,126 158,135 162,148 150,141 138,148 142,135 130,126 145,124" />
      <circle cx="150" cy="130" r="4" fill="#ffffff" />
    `,
  },

  // =========================================================================
  // MOON & CELESTIAL (+16 assets) -> Total 18
  // =========================================================================
  {
    id: 'tarot-celestial-sun-moon-star',
    level: 'high',
    title: 'Tarot Celestial Sun Moon Star PNG',
    slug: 'tarot-celestial-sun-moon-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Mystical esoteric tarot talisman combining the celestial sun face, serene crescent moon, and 8-point guiding star. Core emblem for astrology and boho prints.',
    tags: ['tarot star png', 'sun moon star vector', 'esoteric celestial talisman', 'astrology star art'],
    searchVolume: '16,800/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Concentric Astrological Circles -->
      <circle cx="100" cy="100" r="88" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" stroke-dasharray="4,6" />
      <!-- Crescent Moon Profile Silhouette -->
      <path fill="{{STAR_MAIN}}" d="M100,25 C140,25 170,58 170,100 C170,142 140,175 100,175 C125,155 138,128 138,100 C138,72 125,45 100,25 Z" />
      <!-- Sunburst Rays on Left -->
      <line x1="18" y1="100" x2="40" y2="100" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <line x1="30" y1="45" x2="50" y2="60" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <line x1="30" y1="155" x2="50" y2="140" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <!-- Center Guiding 8-point Star -->
      <polygon fill="#FEF08A" stroke="{{STAR_MAIN}}" stroke-width="1" points="75,80 80,95 95,100 80,105 75,120 70,105 55,100 70,95" />
    `,
  },
  {
    id: 'sleeping-crescent-moon-cradle-star',
    level: 'moderate',
    title: 'Sleeping Crescent Moon with Baby Star PNG',
    slug: 'sleeping-crescent-moon-baby-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Peaceful sleeping crescent moon face gently cradling a small baby star in its lower curve. Dreamy lullaby art for nursery rooms and baby shower invitations.',
    tags: ['crescent moon star', 'sleeping moon png', 'nursery moon stars', 'lullaby celestial art'],
    searchVolume: '15,200/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Sleeping Moon with Face Profile -->
      <path fill="{{STAR_MAIN}}" d="M145,20 C85,20 40,65 40,125 C40,165 65,190 95,195 C68,175 60,135 75,105 C85,85 110,65 145,55 Z" />
      <!-- Moon Sleeping Eye & Lashes -->
      <path fill="none" stroke="#78350F" stroke-width="2.5" stroke-linecap="round" d="M78,110 Q85,118 92,110" />
      <!-- Cradled Baby Star -->
      <polygon fill="#FEF08A" stroke="#B45309" stroke-width="2" points="115,130 120,142 134,144 123,152 126,165 115,158 104,165 107,152 96,144 110,142" />
      <circle cx="115" cy="148" r="3" fill="#ffffff" />
    `,
  },
  {
    id: 'celestial-galaxy-orbit-stars',
    level: 'high',
    title: 'Celestial Galaxy Orbit Stars PNG',
    slug: 'celestial-galaxy-orbit-stars-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Cosmic elliptical planetary orbit rings intersecting around a luminous focal star with satellite planets and stardust specks.',
    tags: ['galaxy orbit star', 'planetary star png', 'cosmic celestial orbit', 'astronomical star vector'],
    searchVolume: '12,900/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Intersecting Orbits -->
      <ellipse cx="110" cy="100" rx="95" ry="34" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2" transform="rotate(-30 110 100)" />
      <ellipse cx="110" cy="100" rx="95" ry="34" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="4,6" transform="rotate(35 110 100)" opacity="0.6" />
      <!-- Satellite Planet Orbs -->
      <circle cx="35" cy="65" r="7" fill="{{STAR_MAIN}}" />
      <circle cx="185" cy="135" r="5" fill="#38BDF8" />
      <circle cx="180" cy="60" r="4" fill="#F472B6" />
      <!-- Center Cosmic Star -->
      <polygon fill="{{STAR_MAIN}}" points="110,50 118,88 155,100 118,112 110,150 102,112 65,100 102,88" />
      <circle cx="110" cy="100" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'celestial-sunburst-crown-star',
    level: 'high',
    title: 'Celestial Sunburst Crown Star PNG',
    slug: 'celestial-sunburst-crown-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Divine radiant celestial sunburst headpiece with alternating flame rays and sharp star needles. Bohemian goddess aesthetic for bridal and festival headpieces.',
    tags: ['celestial sunburst crown', 'halo star png', 'goddess starburst vector', 'boho celestial headpiece'],
    searchVolume: '11,600/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 160',
    svgContent: `
      <!-- Arch Crown Band -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M30,140 C60,110 140,110 170,140" />
      <!-- Radiating Celestial Rays -->
      <line x1="100" y1="120" x2="100" y2="15" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <line x1="75" y1="122" x2="50" y2="35" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
      <line x1="125" y1="122" x2="150" y2="35" stroke="{{STAR_MAIN}}" stroke-width="2.5" stroke-linecap="round" />
      <line x1="55" y1="130" x2="25" y2="65" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" />
      <line x1="145" y1="130" x2="175" y2="65" stroke="{{STAR_MAIN}}" stroke-width="2" stroke-linecap="round" />
      <!-- Star Peak on Center Ray -->
      <polygon fill="{{STAR_MAIN}}" points="100,10 104,22 116,23 107,31 110,42 100,36 90,42 93,31 84,23 96,22" />
    `,
  },
  {
    id: 'witchy-esoteric-pentacle-star',
    level: 'high',
    title: 'Witchy Esoteric Pentacle Star PNG',
    slug: 'witchy-esoteric-pentacle-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Wiccan pentacle star framed by triple moon goddesses and celestial constellation nodes. Pagan protection amulet for altars, grimoires, and crystals.',
    tags: ['pentacle star png', 'wiccan star amulet', 'witchy celestial star', 'triple moon star symbol'],
    searchVolume: '14,300/mo',
    defaultColor: '#9333EA',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Triple Moon Sides -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" d="M35,60 C55,60 65,80 65,100 C65,120 55,140 35,140 C50,125 50,75 35,60 Z" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" d="M185,60 C165,60 155,80 155,100 C155,120 165,140 185,140 C170,125 170,75 185,60 Z" />
      <!-- Central Pentacle Circle -->
      <circle cx="110" cy="100" r="50" fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" />
      <!-- Interwoven Pentacle Star -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" points="110,50 125,95 160,95 132,118 142,150 110,130 78,150 88,118 60,95 95,95" />
      <circle cx="110" cy="100" r="5" fill="{{STAR_MAIN}}" />
    `,
  },
  {
    id: 'cosmic-comet-tail-star-dust',
    level: 'moderate',
    title: 'Cosmic Comet Tail Star Dust PNG',
    slug: 'cosmic-comet-tail-star-dust-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Deep space Halley comet star streaking across the cosmos with radiant ion tail plumes and glowing meteor dust particles.',
    tags: ['comet tail png', 'halley comet star', 'cosmic meteor transparent', 'space shooting star vector'],
    searchVolume: '10,800/mo',
    defaultColor: '#06B6D4',
    viewBox: '0 0 240 160',
    svgContent: `
      <!-- Ion Gas Plume Trails -->
      <path fill="{{STAR_MAIN}}" opacity="0.2" d="M20,130 Q100,100 180,60 Q120,120 20,150 Z" />
      <path fill="{{STAR_MAIN}}" opacity="0.35" d="M40,115 Q110,95 180,60 Q130,110 40,135 Z" />
      <!-- Core Trail Lines -->
      <line x1="60" y1="105" x2="180" y2="60" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
      <!-- Comet Star Head -->
      <polygon fill="{{STAR_MAIN}}" points="190,30 196,54 220,60 196,66 190,90 184,66 160,60 184,54" />
      <circle cx="190" cy="60" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'celestial-hourglass-time-star',
    level: 'high',
    title: 'Celestial Hourglass Time Star PNG',
    slug: 'celestial-hourglass-time-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Astronomical hourglass where cosmic starlight and twinkling stars trickle through the temporal glass chambers. Poetic graphic for philosophical designs.',
    tags: ['hourglass star png', 'cosmic time star', 'celestial hourglass vector', 'astronomical clock star'],
    searchVolume: '7,900/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 160 220',
    svgContent: `
      <!-- Hourglass Frame -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linejoin="round" d="M35,20 L125,20 L80,110 L125,200 L35,200 L80,110 Z" />
      <line x1="25" y1="16" x2="135" y2="16" stroke="{{STAR_MAIN}}" stroke-width="5" stroke-linecap="round" />
      <line x1="25" y1="204" x2="135" y2="204" stroke="{{STAR_MAIN}}" stroke-width="5" stroke-linecap="round" />
      <!-- Trickling Starlight -->
      <polygon fill="{{STAR_MAIN}}" points="80,45 83,55 92,56 85,62 87,70 80,65 73,70 75,62 68,56 77,55" />
      <circle cx="80" cy="95" r="2.5" fill="{{STAR_MAIN}}" />
      <circle cx="80" cy="115" r="3" fill="{{STAR_MAIN}}" />
      <polygon fill="{{STAR_MAIN}}" points="80,155 84,168 98,170 87,178 90,190 80,183 70,190 73,178 62,170 76,168" />
    `,
  },
  {
    id: 'zodiac-constellation-map-star',
    level: 'high',
    title: 'Zodiac Constellation Map Star PNG',
    slug: 'zodiac-constellation-map-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Astronomical star chart constellation web connecting major celestial coordinate nodes with fine starmap lines. Authentic planetarium aesthetics.',
    tags: ['constellation star map', 'zodiac star chart png', 'astronomy coordinates star', 'starmap vector transparent'],
    searchVolume: '13,500/mo',
    defaultColor: '#6366F1',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Constellation Guide Lines -->
      <g stroke="{{STAR_MAIN}}" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6">
        <line x1="45" y1="45" x2="100" y2="30" />
        <line x1="100" y1="30" x2="160" y2="55" />
        <line x1="160" y1="55" x2="140" y2="120" />
        <line x1="140" y1="120" x2="100" y2="165" />
        <line x1="100" y1="165" x2="55" y2="135" />
        <line x1="55" y1="135" x2="45" y2="45" />
        <line x1="45" y1="45" x2="100" y2="100" />
        <line x1="160" y1="55" x2="100" y2="100" />
        <line x1="100" y1="165" x2="100" y2="100" />
      </g>
      <!-- Coordinate Star Nodes -->
      <circle cx="45" cy="45" r="5" fill="{{STAR_MAIN}}" />
      <circle cx="100" cy="30" r="6" fill="{{STAR_MAIN}}" />
      <circle cx="160" cy="55" r="5.5" fill="{{STAR_MAIN}}" />
      <circle cx="140" cy="120" r="4.5" fill="{{STAR_MAIN}}" />
      <circle cx="100" cy="165" r="6" fill="{{STAR_MAIN}}" />
      <circle cx="55" cy="135" r="5" fill="{{STAR_MAIN}}" />
      <!-- Central Alpha Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,85 104,96 115,97 106,103 109,114 100,108 91,114 94,103 85,97 96,96" />
      <circle cx="100" cy="100" r="3" fill="#ffffff" />
    `,
  },
  {
    id: 'celestial-sun-face-woodcut-star',
    level: 'high',
    title: 'Vintage Sun Face Woodcut Star PNG',
    slug: 'vintage-sun-face-woodcut-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: '16th-century renaissance woodcut celestial sun star with dignified human face engraving and alternating wavy solar rays. Classic vintage engraving.',
    tags: ['vintage sun star', 'woodcut celestial face', 'renaissance sun star png', 'engraved celestial art'],
    searchVolume: '12,100/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Alternating Straight and Flame Rays -->
      <g fill="{{STAR_MAIN}}">
        <polygon points="100,12 105,60 95,60" />
        <polygon points="100,188 105,140 95,140" />
        <polygon points="12,100 60,105 60,95" />
        <polygon points="188,100 140,105 140,95" />
      </g>
      <!-- Central Sun Face Circle -->
      <circle cx="100" cy="100" r="48" fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="2" />
      <circle cx="100" cy="100" r="42" fill="#FEF3C7" />
      <!-- Engraved Face Details -->
      <path fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round" d="M82,92 Q88,88 94,92" />
      <path fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round" d="M106,92 Q112,88 118,92" />
      <circle cx="88" cy="95" r="2" fill="#78350F" />
      <circle cx="112" cy="95" r="2" fill="#78350F" />
      <path fill="none" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" d="M100,96 L100,108 L104,108" />
      <path fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round" d="M92,118 Q100,124 108,118" />
    `,
  },
  {
    id: 'eclipse-corona-solar-star',
    level: 'high',
    title: 'Total Eclipse Solar Corona Star PNG',
    slug: 'total-eclipse-solar-corona-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Total solar eclipse diamond ring effect star with dramatic incandescent plasma corona flaring around the dark moon silhouette.',
    tags: ['solar eclipse star', 'eclipse corona png', 'diamond ring eclipse', 'celestial corona vector'],
    searchVolume: '14,600/mo',
    defaultColor: '#F59E0B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Radiant Corona Eruptions -->
      <circle cx="100" cy="100" r="75" fill="{{STAR_MAIN}}" opacity="0.25" />
      <circle cx="100" cy="100" r="62" fill="{{STAR_MAIN}}" opacity="0.4" />
      <!-- Dark New Moon Body -->
      <circle cx="100" cy="100" r="50" fill="#0F172A" />
      <!-- Diamond Ring Flare at Top Edge -->
      <polygon fill="#ffffff" points="100,32 106,46 120,50 106,54 100,68 94,54 80,50 94,46" />
      <circle cx="100" cy="50" r="6" fill="#ffffff" />
    `,
  },
  {
    id: 'mystic-third-eye-celestial-star',
    level: 'high',
    title: 'Mystic Third Eye Celestial Star PNG',
    slug: 'mystic-third-eye-celestial-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'All-seeing mystical third eye centered inside an 8-point celestial starburst. Esoteric spiritual symbol of intuition, consciousness, and clairvoyance.',
    tags: ['third eye star png', 'mystic eye star', 'all seeing star vector', 'esoteric eye celestial'],
    searchVolume: '11,400/mo',
    defaultColor: '#8B5CF6',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- 8-Point Starburst Frame -->
      <polygon fill="{{STAR_MAIN}}" points="100,15 108,82 175,70 118,94 185,100 118,106 175,130 108,118 100,185 92,118 25,130 82,106 15,100 82,94 25,70 92,82" opacity="0.4" />
      <!-- Central Eye Shape -->
      <path fill="#ffffff" stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linejoin="round" d="M45,100 C65,70 135,70 155,100 C135,130 65,130 45,100 Z" />
      <!-- Iris & Pupil -->
      <circle cx="100" cy="100" r="18" fill="{{STAR_MAIN}}" />
      <circle cx="100" cy="100" r="8" fill="#0F172A" />
      <circle cx="96" cy="96" r="3" fill="#ffffff" />
    `,
  },
  {
    id: 'celestial-potion-bottle-starlight',
    level: 'high',
    title: 'Celestial Starlight Potion Bottle PNG',
    slug: 'celestial-starlight-potion-bottle-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Witchy spherical glass potion flask filled with glowing liquid stardust, floating stars, and sealed with a crescent moon cork stopper.',
    tags: ['starlight potion png', 'magic potion bottle', 'witchy star bottle', 'celestial elixir vector'],
    searchVolume: '9,400/mo',
    defaultColor: '#A855F7',
    viewBox: '0 0 160 220',
    svgContent: `
      <!-- Cork Moon Stopper -->
      <path fill="#D97706" d="M80,20 C70,20 62,28 62,38 C62,42 64,46 68,48 L92,48 C96,46 98,42 98,38 C98,28 90,20 80,20 Z" />
      <polygon fill="#FEF08A" points="80,10 82,16 88,17 83,21 85,27 80,23 75,27 77,21 72,17 78,16" />
      <!-- Bottle Neck -->
      <rect x="68" y="48" width="24" height="20" rx="3" fill="#E2E8F0" stroke="#64748B" stroke-width="2" />
      <!-- Spherical Glass Flask Body -->
      <circle cx="80" cy="135" r="55" fill="{{STAR_MAIN}}" opacity="0.25" stroke="#64748B" stroke-width="3" />
      <!-- Glowing Star Liquid Level -->
      <path fill="{{STAR_MAIN}}" opacity="0.75" d="M30,145 C45,135 65,150 85,140 C105,130 120,145 130,145 C130,172 108,190 80,190 C52,190 30,172 30,145 Z" />
      <!-- Captured Glowing Stars Inside -->
      <polygon fill="#ffffff" points="80,105 83,114 92,115 85,121 87,130 80,124 73,130 75,121 68,115 77,114" />
      <circle cx="60" cy="155" r="3.5" fill="#ffffff" />
      <circle cx="95" cy="165" r="4" fill="#ffffff" />
    `,
  },
  {
    id: 'celestial-solar-system-mobile',
    level: 'moderate',
    title: 'Hanging Celestial Mobile Stars PNG',
    slug: 'hanging-celestial-mobile-stars-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Graceful brass celestial mobile balance bar with dangling crescent moons, faceted planets, and glittering stars. Bohemian home decor art.',
    tags: ['celestial mobile png', 'hanging moon stars', 'brass star mobile', 'nursery mobile clipart'],
    searchVolume: '10,100/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 220 200',
    svgContent: `
      <!-- Horizontal Mobile Rod -->
      <line x1="30" y1="40" x2="190" y2="40" stroke="{{STAR_MAIN}}" stroke-width="3" stroke-linecap="round" />
      <circle cx="110" cy="40" r="5" fill="{{STAR_MAIN}}" />
      <line x1="110" y1="10" x2="110" y2="40" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <!-- Left Dangling Moon -->
      <line x1="50" y1="40" x2="50" y2="90" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <path fill="{{STAR_MAIN}}" d="M50,90 C40,90 30,98 30,110 C30,122 40,130 50,130 C42,125 40,115 45,105 Z" />
      <!-- Center Main Dangling Star -->
      <line x1="110" y1="40" x2="110" y2="110" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <polygon fill="{{STAR_MAIN}}" points="110,110 115,125 130,126 118,136 122,150 110,142 98,150 102,136 90,126 105,125" />
      <!-- Right Dangling Star Trio -->
      <line x1="170" y1="40" x2="170" y2="85" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <polygon fill="{{STAR_MAIN}}" points="170,85 173,95 183,96 175,103 177,112 170,107 163,112 165,103 157,96 167,95" />
    `,
  },
  {
    id: 'celestial-zodiac-wheel-star',
    level: 'high',
    title: 'Celestial Zodiac Wheel Star PNG',
    slug: 'celestial-zodiac-wheel-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Complex 12-house astrological horoscope wheel with central multifaceted star compass. Essential for tarot card decks and astrological readings.',
    tags: ['zodiac wheel star', 'horoscope star png', 'astrological wheel vector', '12 houses celestial star'],
    searchVolume: '13,800/mo',
    defaultColor: '#4F46E5',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Concentric Zodiac Circles -->
      <circle cx="100" cy="100" r="88" fill="none" stroke="{{STAR_MAIN}}" stroke-width="2.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="{{STAR_MAIN}}" stroke-width="1" />
      <!-- 12 Radiating House Dividers -->
      <g stroke="{{STAR_MAIN}}" stroke-width="1" opacity="0.6">
        <line x1="100" y1="12" x2="100" y2="30" />
        <line x1="100" y1="170" x2="100" y2="188" />
        <line x1="12" y1="100" x2="30" y2="100" />
        <line x1="170" y1="100" x2="188" y2="100" />
        <line x1="38" y1="38" x2="51" y2="51" />
        <line x1="149" y1="149" x2="162" y2="162" />
        <line x1="38" y1="162" x2="51" y2="149" />
        <line x1="149" y1="51" x2="162" y2="38" />
      </g>
      <!-- Center Star -->
      <polygon fill="{{STAR_MAIN}}" points="100,50 110,85 145,90 115,110 125,145 100,125 75,145 85,110 55,90 90,85" />
      <circle cx="100" cy="100" r="8" fill="#ffffff" />
    `,
  },
  {
    id: 'dreamcatcher-celestial-feather-star',
    level: 'high',
    title: 'Dreamcatcher Celestial Star PNG',
    slug: 'dreamcatcher-celestial-star-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Native inspired sacred dreamcatcher hoop with intricate star web weave and dangling natural feathers and starlight beads.',
    tags: ['dreamcatcher star png', 'sacred dreamcatcher vector', 'boho star dreamcatcher', 'feather star clipart'],
    searchVolume: '11,200/mo',
    defaultColor: '#0D9488',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Hoop -->
      <circle cx="100" cy="80" r="60" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" />
      <!-- Woven Star Web -->
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.8" points="100,22 135,45 158,80 135,115 100,138 65,115 42,80 65,45" />
      <polygon fill="none" stroke="{{STAR_MAIN}}" stroke-width="1.5" points="100,42 125,60 140,80 125,100 100,118 75,100 60,80 75,60" />
      <circle cx="100" cy="80" r="5" fill="#FBBF24" />
      <!-- Hanging Feathers -->
      <line x1="100" y1="140" x2="100" y2="185" stroke="{{STAR_MAIN}}" stroke-width="2" />
      <path fill="{{STAR_MAIN}}" d="M100,185 C92,195 92,215 100,225 C108,215 108,195 100,185 Z" />
      <line x1="70" y1="130" x2="60" y2="175" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <path fill="{{STAR_MAIN}}" opacity="0.75" d="M60,175 C54,185 54,200 60,210 C66,200 66,185 60,175 Z" />
      <line x1="130" y1="130" x2="140" y2="175" stroke="{{STAR_MAIN}}" stroke-width="1.5" />
      <path fill="{{STAR_MAIN}}" opacity="0.75" d="M140,175 C134,185 134,200 140,210 C146,200 146,185 140,175 Z" />
    `,
  },
  {
    id: 'celestial-portal-arch-stars',
    level: 'high',
    title: 'Celestial Portal Archway Stars PNG',
    slug: 'celestial-portal-archway-stars-png',
    category: 'celestial',
    categoryName: 'Moon & Celestial',
    description: 'Mystic Romanesque doorway arch looking out into an infinite starry cosmic portal of planets, starbursts, and constellation pathways.',
    tags: ['celestial portal png', 'cosmic archway star', 'mystic doorway star', 'tarot portal vector'],
    searchVolume: '10,900/mo',
    defaultColor: '#4338CA',
    viewBox: '0 0 180 220',
    svgContent: `
      <!-- Arch Portal Frame -->
      <path fill="{{STAR_MAIN}}" opacity="0.2" d="M25,200 L25,90 C25,45 55,20 90,20 C125,20 155,45 155,90 L155,200 Z" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3.5" d="M25,200 L25,90 C25,45 55,20 90,20 C125,20 155,45 155,90 L155,200 Z" />
      <!-- Cosmic Stars Floating Inside Arch -->
      <polygon fill="#FBBF24" points="90,50 94,62 106,64 97,71 100,82 90,76 80,82 83,71 74,64 86,62" />
      <polygon fill="#ffffff" points="60,110 62,118 70,119 64,124 66,132 60,128 54,132 56,124 50,119 58,118" />
      <polygon fill="#ffffff" points="120,110 122,118 130,119 124,124 126,132 120,128 114,132 116,124 110,119 118,118" />
      <circle cx="90" cy="140" r="14" fill="{{STAR_MAIN}}" opacity="0.6" />
      <circle cx="90" cy="140" r="5" fill="#ffffff" />
    `,
  },

  // =========================================================================
  // BADGES & RIBBONS (+16 assets) -> Total 18
  // =========================================================================
  {
    id: 'first-place-rosette-ribbon-star',
    level: 'high',
    title: 'First Place Rosette Star Ribbon PNG',
    slug: 'first-place-rosette-star-ribbon-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Prestigious 1st place ceremonial pleated rosette ribbon with golden center medal and twin swallowtail ribbon streamers. Award winning emblem.',
    tags: ['rosette ribbon star', 'first place star badge', 'award ribbon transparent', 'championship rosette png'],
    searchVolume: '15,800/mo',
    defaultColor: '#2563EB',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Ribbon Streamers -->
      <polygon fill="#1E40AF" points="80,130 55,225 80,210 95,225 90,130" />
      <polygon fill="#1D4ED8" points="120,130 145,225 120,210 105,225 110,130" />
      <!-- Pleated Rosette Edge -->
      <circle cx="100" cy="85" r="70" fill="{{STAR_MAIN}}" stroke="#1E3A8A" stroke-width="4" />
      <circle cx="100" cy="85" r="58" fill="#FBBF24" stroke="#D97706" stroke-width="3" />
      <!-- Center Gold Star -->
      <polygon fill="#FEF08A" stroke="#B45309" stroke-width="1.5" points="100,45 112,72 142,75 118,95 126,125 100,110 74,125 82,95 58,75 88,72" />
    `,
  },
  {
    id: 'presidential-star-seal-badge',
    level: 'high',
    title: 'Presidential Star Seal Badge PNG',
    slug: 'presidential-star-seal-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Executive presidential seal badge ringed by 13 colonial stars and central heraldic eagle star shield. Official insignia for certifications.',
    tags: ['presidential seal star', 'executive badge png', '13 stars seal transparent', 'official star insignia'],
    searchVolume: '11,200/mo',
    defaultColor: '#1E3A8A',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Roped Rim -->
      <circle cx="100" cy="100" r="88" fill="{{STAR_MAIN}}" stroke="#FBBF24" stroke-width="4" />
      <circle cx="100" cy="100" r="76" fill="none" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="6,4" />
      <!-- Inner Blue Disc -->
      <circle cx="100" cy="100" r="64" fill="#1E40AF" />
      <!-- Ring of Stars -->
      <g fill="#FBBF24">
        <polygon points="100,42 102,48 108,48 103,52 105,58 100,55 95,58 97,52 92,48 98,48" />
        <polygon points="135,52 137,58 143,58 138,62 140,68 135,65 130,68 132,62 127,58 133,58" />
        <polygon points="155,80 157,86 163,86 158,90 160,96 155,93 150,96 152,90 147,86 153,86" />
        <polygon points="155,120 157,126 163,126 158,130 160,136 155,133 150,136 152,130 147,126 153,126" />
        <polygon points="100,158 102,164 108,164 103,168 105,174 100,171 95,174 97,168 92,164 98,164" />
      </g>
      <!-- Center Main Star -->
      <polygon fill="#FBBF24" points="100,75 106,92 125,93 110,105 115,122 100,112 85,122 90,105 75,93 94,92" />
    `,
  },
  {
    id: 'vintage-shield-crest-star-badge',
    level: 'moderate',
    title: 'Vintage Shield Crest Star Badge PNG',
    slug: 'vintage-shield-crest-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Medieval chivalry coat of arms shield with a prominent five-point star on the field. Classic vector for collegiate crests and academy heraldry.',
    tags: ['shield star badge', 'coat of arms star', 'heraldic shield png', 'academy star crest'],
    searchVolume: '9,500/mo',
    defaultColor: '#DC2626',
    viewBox: '0 0 180 200',
    svgContent: `
      <!-- Heraldic Shield -->
      <path fill="{{STAR_MAIN}}" stroke="#991B1B" stroke-width="4" d="M90,15 L160,40 L160,115 C160,160 90,190 90,190 C90,190 20,160 20,115 L20,40 Z" />
      <!-- Inner Shield Border -->
      <path fill="none" stroke="#FDE047" stroke-width="2" d="M90,26 L150,48 L150,112 C150,150 90,178 90,178 C90,178 30,150 30,112 L30,48 Z" />
      <!-- Big Center Star -->
      <polygon fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" points="90,45 102,78 136,80 108,102 118,136 90,118 62,136 72,102 44,80 78,78" />
    `,
  },
  {
    id: 'sheriff-deputy-star-badge',
    level: 'high',
    title: 'Sheriff Deputy Star Badge PNG',
    slug: 'sheriff-deputy-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Classic western deputy sheriff 6-point ball-tipped star badge with circular ring shield. Authentic law enforcement insignia vector.',
    tags: ['deputy star badge', 'western sheriff star', 'ball tip 6 point star', 'police star badge png'],
    searchVolume: '13,400/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Circular Support Ring -->
      <circle cx="100" cy="100" r="70" fill="none" stroke="{{STAR_MAIN}}" stroke-width="5" />
      <!-- 6-Point Star -->
      <g fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2">
        <polygon points="100,18 116,65 168,48 136,92 182,100 136,108 168,152 116,135 100,182 84,135 32,152 64,108 18,100 64,92 32,48 84,65" />
      </g>
      <!-- Ball Tips on 6 Points -->
      <circle cx="100" cy="18" r="8" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
      <circle cx="182" cy="100" r="8" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
      <circle cx="100" cy="182" r="8" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
      <circle cx="18" cy="100" r="8" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
      <circle cx="168" cy="48" r="7" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
      <circle cx="32" cy="48" r="7" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="2" />
      <!-- Center Medallion -->
      <circle cx="100" cy="100" r="24" fill="#FEF3C7" stroke="#B45309" stroke-width="2" />
      <circle cx="100" cy="100" r="6" fill="#B45309" />
    `,
  },
  {
    id: 'curved-banner-ribbon-triple-stars',
    level: 'moderate',
    title: 'Curved Banner Ribbon with 3 Stars PNG',
    slug: 'curved-banner-ribbon-3-stars-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Elegant arched banner scroll ribbon carrying three golden stars. Classic design for header titles, award banners, and anniversary plaques.',
    tags: ['banner ribbon star', 'scroll banner png', '3 stars ribbon vector', 'award banner transparent'],
    searchVolume: '10,700/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 240 140',
    svgContent: `
      <!-- Ribbon Back Ends -->
      <polygon fill="#92400E" points="25,95 45,65 50,105" />
      <polygon fill="#92400E" points="215,95 195,65 190,105" />
      <!-- Main Curved Ribbon Face -->
      <path fill="{{STAR_MAIN}}" stroke="#78350F" stroke-width="2.5" d="M30,85 Q120,45 210,85 L205,115 Q120,75 35,115 Z" />
      <!-- 3 Stars on Banner -->
      <polygon fill="#FEF08A" points="120,60 123,68 132,69 125,75 127,84 120,79 113,84 115,75 108,69 117,68" />
      <polygon fill="#FEF08A" points="80,68 82,75 89,76 83,81 85,88 80,84 75,88 77,81 71,76 78,75" />
      <polygon fill="#FEF08A" points="160,68 162,75 169,76 163,81 165,88 160,84 155,88 157,81 151,76 158,75" />
    `,
  },
  {
    id: 'military-dog-tag-star-badge',
    level: 'moderate',
    title: 'Military Dog Tag Star Badge PNG',
    slug: 'military-dog-tag-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Steel military ID dog tag with rolled rim edge, ball chain hole, and stamped star emblem. Tactical rugged graphic for military games.',
    tags: ['dog tag star png', 'military tag star', 'tactical star badge', 'stamped steel tag png'],
    searchVolume: '8,300/mo',
    defaultColor: '#64748B',
    viewBox: '0 0 160 220',
    svgContent: `
      <!-- Tag Body -->
      <rect x="35" y="25" width="90" height="170" rx="42" fill="{{STAR_MAIN}}" stroke="#334155" stroke-width="4" />
      <!-- Silencer Rolled Rim -->
      <rect x="42" y="32" width="76" height="156" rx="36" fill="none" stroke="#94A3B8" stroke-width="2" />
      <!-- Chain Hole -->
      <circle cx="80" cy="55" r="8" fill="#334155" stroke="#94A3B8" stroke-width="2" />
      <!-- Stamped Embossed Star -->
      <polygon fill="#E2E8F0" stroke="#334155" stroke-width="2" points="80,95 88,118 112,120 92,135 98,160 80,146 62,160 68,135 48,120 72,118" />
    `,
  },
  {
    id: 'rosette-double-medal-ribbon',
    level: 'high',
    title: 'Rosette Double Medal Ribbon PNG',
    slug: 'rosette-double-medal-ribbon-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Double-tiered rosette medal with scalloped outer ring, gold embossed star medallion, and long ceremonial ribbon streamers.',
    tags: ['double rosette ribbon', 'tier award badge png', 'scalloped star ribbon', 'first place medal png'],
    searchVolume: '9,900/mo',
    defaultColor: '#7C3AED',
    viewBox: '0 0 200 240',
    svgContent: `
      <!-- Streamers -->
      <polygon fill="#5B21B6" points="75,130 50,225 75,210 90,225 85,130" />
      <polygon fill="#6D28D9" points="125,130 150,225 125,210 110,225 115,130" />
      <!-- Tier 1 Outer Ring -->
      <circle cx="100" cy="85" r="72" fill="{{STAR_MAIN}}" stroke="#4C1D95" stroke-width="4" />
      <!-- Tier 2 Inner Ring -->
      <circle cx="100" cy="85" r="54" fill="#FBBF24" stroke="#D97706" stroke-width="3" />
      <!-- Center Star -->
      <polygon fill="#FEF08A" stroke="#B45309" stroke-width="2" points="100,50 110,74 135,76 115,92 122,118 100,105 78,118 85,92 65,76 90,74" />
    `,
  },
  {
    id: 'golden-police-shield-star',
    level: 'high',
    title: 'Golden Police Shield Star PNG',
    slug: 'golden-police-shield-star-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Official metallic gold police officer shield badge featuring eagle crest top and engraved 5-point star insignia. Classic law enforcement badge.',
    tags: ['police star badge', 'officer shield png', 'gold police star vector', 'law enforcement badge png'],
    searchVolume: '14,200/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 180 220',
    svgContent: `
      <!-- Shield Body -->
      <path fill="{{STAR_MAIN}}" stroke="#A16207" stroke-width="4" d="M90,15 C135,15 155,30 155,50 C155,120 120,185 90,205 C60,185 25,120 25,50 C25,30 45,15 90,15 Z" />
      <!-- Inner Beveled Ridge -->
      <path fill="none" stroke="#FEF08A" stroke-width="2.5" d="M90,25 C130,25 145,38 145,55 C145,115 115,175 90,195 C65,175 35,115 35,55 C35,38 50,25 90,25 Z" />
      <!-- Center Star on Sunburst Disc -->
      <circle cx="90" cy="115" r="42" fill="#CA8A04" />
      <polygon fill="#FEF08A" stroke="#854D0E" stroke-width="2" points="90,75 100,102 126,105 106,122 112,150 90,136 68,150 74,122 54,105 80,102" />
    `,
  },
  {
    id: 'vintage-hotel-key-fob-star',
    level: 'moderate',
    title: 'Vintage Hotel Key Fob Star PNG',
    slug: 'vintage-hotel-key-fob-star-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Classic diamond-shaped retro motel key tag stamped with five-star luxury hotel rating logo. Nostalgic Americana travel graphic.',
    tags: ['motel key tag png', 'hotel key fob star', 'retro key tag star', 'vintage motel badge'],
    searchVolume: '8,900/mo',
    defaultColor: '#059669',
    viewBox: '0 0 160 220',
    svgContent: `
      <!-- Diamond Rhombus Key Tag -->
      <polygon fill="{{STAR_MAIN}}" stroke="#065F46" stroke-width="4" stroke-linejoin="round" points="80,15 145,110 80,205 15,110" />
      <!-- Inner Border -->
      <polygon fill="none" stroke="#A7F3D0" stroke-width="2" stroke-linejoin="round" points="80,28 135,110 80,192 25,110" />
      <!-- Key Ring Hole -->
      <circle cx="80" cy="45" r="8" fill="#ffffff" stroke="#065F46" stroke-width="2" />
      <!-- 5-Star Row Inside -->
      <polygon fill="#FEF08A" points="80,85 83,92 91,93 85,98 87,106 80,102 73,106 75,98 69,93 77,92" />
      <polygon fill="#FEF08A" points="60,110 62,116 68,117 63,121 65,127 60,124 55,127 57,121 52,117 58,116" />
      <polygon fill="#FEF08A" points="100,110 102,116 108,117 103,121 105,127 100,124 95,127 97,121 92,117 98,116" />
    `,
  },
  {
    id: 'curved-gold-medal-laurel-badge',
    level: 'high',
    title: 'Gold Medal Laurel Star Badge PNG',
    slug: 'gold-medal-laurel-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Gold award plaque framed with classical triumph laurel branches and bold beveled star emblem. Prestigious honor for contests and academics.',
    tags: ['laurel star badge', 'gold honor badge', 'academic star medal', 'triumph star wreath'],
    searchVolume: '12,400/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Laurel Wreath -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="3" d="M40,140 C30,165 65,185 100,185 C135,185 170,165 160,140" />
      <circle cx="100" cy="95" r="55" fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="3" />
      <circle cx="100" cy="95" r="48" fill="#FBBF24" />
      <!-- Center Star -->
      <polygon fill="#FEF08A" stroke="#B45309" stroke-width="1.5" points="100,55 108,80 134,82 114,98 120,124 100,110 80,124 86,98 66,82 92,80" />
    `,
  },
  {
    id: 'champion-cup-trophy-star-badge',
    level: 'high',
    title: 'Champion Trophy Cup Star Badge PNG',
    slug: 'champion-trophy-cup-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Golden tournament trophy cup with ornate handles and stamped championship star medal. Winning emblem for esports, athletics, and gamified apps.',
    tags: ['trophy star badge', 'champion cup star png', 'tournament winner badge', 'esports trophy star'],
    searchVolume: '13,100/mo',
    defaultColor: '#EAB308',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Trophy Base -->
      <rect x="70" y="170" width="60" height="15" rx="3" fill="#78350F" />
      <polygon fill="{{STAR_MAIN}}" points="90,145 110,145 105,170 95,170" />
      <!-- Trophy Cup Body -->
      <path fill="{{STAR_MAIN}}" stroke="#CA8A04" stroke-width="3" d="M60,45 L140,45 L135,115 C135,135 115,145 100,145 C85,145 65,135 65,115 Z" />
      <!-- Handles -->
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linecap="round" d="M60,60 C40,60 40,105 65,105" />
      <path fill="none" stroke="{{STAR_MAIN}}" stroke-width="6" stroke-linecap="round" d="M140,60 C160,60 160,105 135,105" />
      <!-- Center Star on Cup -->
      <polygon fill="#FEF08A" stroke="#A16207" stroke-width="1.5" points="100,65 106,82 124,84 110,96 114,114 100,104 86,114 90,96 76,84 94,82" />
    `,
  },
  {
    id: 'service-star-rank-epaulet',
    level: 'moderate',
    title: 'Military Epaulet Service Star Badge PNG',
    slug: 'military-epaulet-service-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Military shoulder epaulet rank strap adorned with three aligned silver service stars. Uniform insignia for security personnel and officers.',
    tags: ['epaulet star badge', 'military service star', 'rank strap star png', 'shoulder rank stars'],
    searchVolume: '7,700/mo',
    defaultColor: '#334155',
    viewBox: '0 0 160 220',
    svgContent: `
      <!-- Epaulet Shoulder Strap -->
      <polygon fill="{{STAR_MAIN}}" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" points="40,25 120,25 110,195 50,195" />
      <!-- Top Uniform Button -->
      <circle cx="80" cy="45" r="10" fill="#94A3B8" stroke="#1E293B" stroke-width="2" />
      <!-- 3 Aligned Vertical Stars -->
      <g fill="#E2E8F0" stroke="#475569" stroke-width="1">
        <polygon points="80,75 83,83 91,84 85,89 87,97 80,92 73,97 75,89 69,84 77,83" />
        <polygon points="80,115 83,123 91,124 85,129 87,137 80,132 73,137 75,129 69,124 77,123" />
        <polygon points="80,155 83,163 91,164 85,169 87,177 80,172 73,177 75,169 69,164 77,163" />
      </g>
    `,
  },
  {
    id: 'wax-seal-stamp-star',
    level: 'high',
    title: 'Wax Seal Stamp Star PNG',
    slug: 'wax-seal-stamp-star-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Antique melted sealing wax stamp with natural organic drip edges and deeply impressed star monogram. Classic envelope seal for invitations.',
    tags: ['wax seal star', 'melted wax stamp png', 'envelope star seal', 'vintage wax seal vector'],
    searchVolume: '14,400/mo',
    defaultColor: '#991B1B',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Organic Melted Wax Edge -->
      <path fill="{{STAR_MAIN}}" d="M100,15 C135,12 165,30 178,65 C190,105 175,145 160,170 C130,195 85,190 55,175 C20,150 15,110 25,75 C35,40 65,18 100,15 Z" />
      <!-- Inner Stamp Indentation -->
      <circle cx="100" cy="100" r="54" fill="#7F1D1D" stroke="#B91C1C" stroke-width="3" />
      <!-- Impressed Star -->
      <polygon fill="#DC2626" points="100,55 110,84 138,86 116,104 124,134 100,118 76,134 84,104 62,86 90,84" />
      <polygon fill="#F87171" points="100,55 100,118 110,84" opacity="0.4" />
    `,
  },
  {
    id: 'retro-ribbon-badge-star-cockade',
    level: 'moderate',
    title: 'Retro Ribbon Cockade Star Badge PNG',
    slug: 'retro-ribbon-cockade-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Circular patriotic cockade rosette pin button with concentric colored fabric rings and bold center star. Great for political campaigns and rallies.',
    tags: ['cockade star badge', 'patriotic rosette png', 'campaign button star', 'rally badge transparent'],
    searchVolume: '8,500/mo',
    defaultColor: '#DC2626',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Outer Red Ring -->
      <circle cx="100" cy="100" r="85" fill="{{STAR_MAIN}}" stroke="#991B1B" stroke-width="3" />
      <!-- Middle White Ring -->
      <circle cx="100" cy="100" r="65" fill="#FFFFFF" />
      <!-- Inner Blue Disc -->
      <circle cx="100" cy="100" r="45" fill="#1E40AF" />
      <!-- Center White Star -->
      <polygon fill="#FFFFFF" points="100,65 106,85 125,86 110,98 115,118 100,107 85,118 90,98 75,86 94,85" />
    `,
  },
  {
    id: 'golden-key-crest-star-badge',
    level: 'high',
    title: 'Golden Key Crest Star Badge PNG',
    slug: 'golden-key-crest-star-badge-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Crossed antique skeleton keys behind a regal shield with golden star insignia. Classic emblem for concierge services, master keys, and luxury hotels.',
    tags: ['crossed keys star badge', 'hotel concierge crest', 'skeleton key star png', 'regal security crest'],
    searchVolume: '9,100/mo',
    defaultColor: '#D97706',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Crossed Keys in Background -->
      <g stroke="{{STAR_MAIN}}" stroke-width="4" stroke-linecap="round">
        <line x1="30" y1="30" x2="170" y2="170" />
        <line x1="170" y1="30" x2="30" y2="170" />
      </g>
      <circle cx="35" cy="35" r="14" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" />
      <circle cx="165" cy="35" r="14" fill="none" stroke="{{STAR_MAIN}}" stroke-width="4" />
      <!-- Foreground Shield Badge -->
      <path fill="{{STAR_MAIN}}" stroke="#B45309" stroke-width="3" d="M100,55 L145,75 L145,125 C145,155 100,175 100,175 C100,175 55,155 55,125 L55,75 Z" />
      <!-- Center Star -->
      <polygon fill="#FEF08A" points="100,75 106,95 125,97 110,108 115,128 100,117 85,128 90,108 75,97 94,95" />
    `,
  },
  {
    id: 'five-star-general-collar-insignia',
    level: 'high',
    title: 'Five Star General Collar Insignia PNG',
    slug: 'five-star-general-collar-insignia-png',
    category: 'badges',
    categoryName: 'Badges & Ribbons',
    description: 'Legendary military five-star general rank insignia arranged in an unbroken pentagonal circle. The highest rank of leadership and authority.',
    tags: ['five star general png', 'military rank insignia', 'general of the army star', '5 star pentagon badge'],
    searchVolume: '14,900/mo',
    defaultColor: '#94A3B8',
    viewBox: '0 0 200 200',
    svgContent: `
      <!-- Pentagon 5 Stars -->
      <g fill="{{STAR_MAIN}}" stroke="#475569" stroke-width="1.5">
        <!-- Top Star -->
        <polygon points="100,25 105,42 120,43 108,52 112,68 100,58 88,68 92,52 80,43 95,42" />
        <!-- Top Right -->
        <polygon points="160,70 165,87 180,88 168,97 172,113 160,103 148,113 152,97 140,88 155,87" />
        <!-- Bottom Right -->
        <polygon points="140,140 145,157 160,158 148,167 152,183 140,173 128,183 132,167 120,158 135,157" />
        <!-- Bottom Left -->
        <polygon points="60,140 65,157 80,158 68,167 72,183 60,173 48,183 52,167 40,158 55,157" />
        <!-- Top Left -->
        <polygon points="40,70 45,87 60,88 48,97 52,113 40,103 28,113 32,97 20,88 35,87" />
      </g>
    `,
  },
];
