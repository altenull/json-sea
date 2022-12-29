/**
 * @param {string} v - the value to double quote
 */
export const encloseDoubleQuote = (v: string): string => {
  return `"${v}"`;
};

/**
 * @param {string} v - the v to enclose with square brackets
 */
export const encloseSquareBrackets = (v: any): string => {
  return `[${String(v)}]`;
};
