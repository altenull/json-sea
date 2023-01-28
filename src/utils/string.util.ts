/**
 * @param {string} v - the value to double quote
 */
export const encloseDoubleQuote = (v: string): string => {
  return `"${v}"`;
};

/**
 * @param {string | number} v - the value to enclose with square brackets
 */
export const encloseSquareBrackets = (v: string | number): string => {
  return `[${String(v)}]`;
};

/**
 * Added to count `object properties` or `array items`.
 *
 * @example
 * '(empty)', '(1 item)', '(32 properties)', ...
 */
export const formatCounting = (total: number, singular: string, plural: string): string => {
  if (total === 0) {
    return '(empty)';
  }

  return total === 1 ? `(1 ${singular})` : `(${total} ${plural})`;
};
