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
