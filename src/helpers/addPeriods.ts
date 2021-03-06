/**
 * Add periods to a numeric string value.
 * @param value - A numeric string value.
 */
export const addPeriods = (value: string): string =>
  value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
