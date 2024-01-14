export const isNotNullOrUndefined = (value: any): boolean =>
  value !== null && typeof value !== "undefined";

export const isNotUndefined = (value: any): boolean =>
  typeof value !== "undefined";
