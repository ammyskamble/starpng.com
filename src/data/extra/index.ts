import type { StarAsset } from '../stars.ts';
import { PART1_ASSETS } from './part1.ts';
import { PART2_ASSETS } from './part2.ts';
import { PART3_ASSETS } from './part3.ts';
import { PART4_ASSETS } from './part4.ts';
import { PART5_ASSETS } from './part5.ts';

export const EXTRA_STAR_ASSETS: StarAsset[] = [
  ...PART1_ASSETS,
  ...PART2_ASSETS,
  ...PART3_ASSETS,
  ...PART4_ASSETS,
  ...PART5_ASSETS,
];
