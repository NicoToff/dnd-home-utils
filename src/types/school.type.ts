export const SCHOOLS = [
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",
] as const;
export type SchoolName = (typeof SCHOOLS)[number];
export const isSchoolName = (value: unknown): value is SchoolName => {
  return SCHOOLS.includes(value as SchoolName);
};
