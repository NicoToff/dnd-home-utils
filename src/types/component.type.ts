export const COMPONENTS = ["v", "s", "m"] as const;
export type ComponentName = (typeof COMPONENTS)[number];
export const isComponentName = (value: unknown): value is ComponentName => {
  return COMPONENTS.includes(value as ComponentName);
};
