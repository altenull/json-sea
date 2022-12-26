import { allFalseStringSubtypeValidator } from '../constants/string-subtype.constant';
import { StringSubtype } from '../enums/string-subtype.enum';

/**
 * Invalid color value can't be assigned to `style.color` attribute.
 */
const isValidColor = (dirtyColor: string): boolean => {
  const optionStyle = new Option().style;
  optionStyle.color = dirtyColor;

  return !!optionStyle.color;
};

const isValidDate = (dirtyDate: string): boolean => {
  return new Date(dirtyDate).toString() !== 'Invalid Date';
};

const isValidEmail = (dirtyEmail: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(dirtyEmail.toLowerCase());
};

const isValidImage = (dirtyImage: string): Promise<boolean> => {
  const img = new Image();
  img.src = dirtyImage;

  return new Promise((resolve) => {
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
  });
};

const isValidHttpUri = (dirtyHttpUri: string): boolean => {
  let url: URL | undefined;

  try {
    url = new URL(dirtyHttpUri);
  } catch (e) {
    return false;
  }

  return ['http:', 'https:'].includes(url.protocol);
};

export type StringSubtypeValidator = { [P in keyof typeof StringSubtype as `is${P}`]: boolean };

export const validateStringSubtype = async (v: string): Promise<StringSubtypeValidator> => {
  if (isValidColor(v)) {
    return {
      ...allFalseStringSubtypeValidator,
      isColor: true,
    };
  }

  if (isValidDate(v)) {
    return {
      ...allFalseStringSubtypeValidator,
      isDatetime: true,
    };
  }

  if (isValidEmail(v)) {
    return {
      ...allFalseStringSubtypeValidator,
      isEmail: true,
    };
  }

  if (await isValidImage(v)) {
    return {
      ...allFalseStringSubtypeValidator,
      isImage: true,
      isHttpUri: isValidHttpUri(v),
    };
  }

  if (isValidHttpUri(v)) {
    return {
      ...allFalseStringSubtypeValidator,
      isHttpUri: true,
    };
  }

  return allFalseStringSubtypeValidator;
};
