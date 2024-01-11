const isNotNullOrUndefined = (value: any): boolean =>
  value !== null && typeof value !== "undefined";

export default isNotNullOrUndefined;
