export const SOURCES = [
  "primal",
  "arcane",
  "divine",
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
  "artificer",
] as const;
export type SourceName = (typeof SOURCES)[number];
export const isSourceName = (value: unknown): value is SourceName => {
  return SOURCES.includes(value as SourceName);
};
