export const tuple = <T extends string[]>(...args: T) => args;

export const noop = () => {};

/**
 * Returns true if argument is a 'function' and false otherwise.
 * @param {unknown} v - the value to check
 */
export const isFunction = (v: unknown): boolean => {
  return typeof v === 'function';
};
