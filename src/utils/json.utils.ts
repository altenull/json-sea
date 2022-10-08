export const isValidJson = (code: string): boolean => {
  try {
    return typeof JSON.parse(code) === 'object';
  } catch (error) {
    return false;
  }
};
