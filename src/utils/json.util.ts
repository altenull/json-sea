/**
 * Returns true if argument is an 'array' and false otherwise.
 * @param {unknown} v - the value to check
 */
export const isArray = <T extends any[]>(v: unknown): v is T => {
  return Array.isArray(v);
};

/**
 * Returns true if argument is an 'object' and false otherwise.
 * Since the result of 'typeof []' is 'object', checks value with isArray() funciton.
 * And the result of 'typeof null' is 'object' too, validate v is not null.
 * @param {unknown} v - the value to check
 */
export const isObject = (v: unknown): v is object => {
  return v !== null && !isArray(v) && typeof v === 'object';
};

/**
 * Returns true if argument is a 'string' and false otherwise.
 * @param {unknown} v - the value to check
 */
export const isString = (v: unknown): v is string => {
  return typeof v === 'string';
};

/**
 * Returns true if argument is a 'number' and false otherwise.
 * @param {unknown} v - the value to check
 */
export const isNumber = (v: unknown): v is number => {
  return typeof v === 'number';
};

/**
 * Returns true if argument is a 'boolean' and false otherwise.
 * @param {unknown} v - the value to check
 */
export const isBoolean = (v: unknown): v is boolean => {
  return typeof v === 'boolean';
};

/**
 * Returns true if argument is a 'null' and false otherwise.
 * @param {unknown} v - the value to check
 */
export const isNull = (v: unknown): v is null => {
  return v === null;
};

/**
 * Returns true if argument is a valid json code(string) and false otherwise.
 * @param {string} code - the value to check
 */
export const isValidJson = (code: string): boolean => {
  try {
    const parsedCode = JSON.parse(code);
    return isObject(parsedCode) || isArray(parsedCode);
  } catch (error) {
    return false;
  }
};

export const downloadAsJsonFile = (stringifiedJson: string, fileName: string): void => {
  const anchor: HTMLAnchorElement = document.createElement('a');

  anchor.style.display = 'none';
  anchor.href = `data:text/json;charset=utf8,${encodeURIComponent(stringifiedJson)}`;
  anchor.download = fileName;

  anchor.click();
  anchor.remove();
};

export const formatJsonLikeData = (data: object | any[] | string): string => {
  const stringifyTarget = isString(data) ? JSON.parse(data) : data;
  const replacer: (number | string)[] | null = null;
  const space: string | number = 2;

  return JSON.stringify(stringifyTarget, replacer, space);
};
