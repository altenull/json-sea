/**
 * Returns true if argument is an array and false otherwise.
 * @param {unknown} value - the value to check
 */
export const isArray = (value: unknown): boolean => {
  return Array.isArray(value);
};

/**
 * Returns true if argument is an object and false otherwise.
 * Since the result of 'typeof []' is 'object', checks value with isArray() funciton.
 * @param {unknown} value - the value to check
 */
export const isObject = (value: unknown): boolean => {
  return value !== null && !isArray(value) && typeof value === 'object';
};

/**
 * Returns true if argument is a string and false otherwise.
 * @param {unknown} value - the value to check
 */
export const isString = (value: unknown): boolean => {
  return typeof value === 'string';
};

/**
 * Returns true if argument is a number and false otherwise.
 * @param {unknown} value - the value to check
 */
export const isNumber = (value: unknown): boolean => {
  return typeof value === 'number';
};

/**
 * Returns true if argument is a boolean and false otherwise.
 * @param {unknown} value - the value to check
 */
export const isBoolean = (value: unknown): boolean => {
  return typeof value === 'boolean';
};

/**
 * Returns true if argument is a null and false otherwise.
 * @param {unknown} value - the value to check
 */
export const isNull = (value: unknown): boolean => {
  return value === null;
};

/**
 * Returns true if argument is a valid json code(string) and false otherwise.
 * @param {string} code - the value to check
 */
export const isValidJson = (code: string): boolean => {
  try {
    // TODO: Consider including array type.
    const parsedCode = JSON.parse(code);
    return isObject(parsedCode);
  } catch (error) {
    return false;
  }
};
