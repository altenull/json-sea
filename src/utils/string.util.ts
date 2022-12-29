/**
 * @param {string} v - the value to double quote
 */
export const encloseDoubleQuote = (v: string): string => {
  return `"${v}"`;
};

/**
 * @param {string} index - the index to enclose with square brackets
 */
export const encloseSquareBrackets = (index: number): string => {
  return `[${index}]`;
};
