export const ABILITY_SCORES = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha",
] as const;
export type AbilityScore = (typeof ABILITY_SCORES)[number];
export const isAbilityScore = (value: unknown): value is AbilityScore => {
  return ABILITY_SCORES.includes(value as AbilityScore);
};
