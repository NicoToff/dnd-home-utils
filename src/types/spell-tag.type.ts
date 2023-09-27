export const SPELL_TAGS = [
  "melee",
  "ranged",
  "area",
  "heal",
  "buff",
  "debuff",
  "summon",
  "control",
  "movement",
];
export type SpellTag = (typeof SPELL_TAGS)[number];
export const isSpellTag = (value: unknown): value is SpellTag => {
  return SPELL_TAGS.includes(value as SpellTag);
};
