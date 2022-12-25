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

const isValidHttpUrl = (dirtyHttpUrl: string): boolean => {
  let url: URL | undefined;

  try {
    url = new URL(dirtyHttpUrl);
  } catch (e) {
    return false;
  }

  return ['http:', 'https:'].includes(url.protocol);
};

export type StringParserReturn = {
  isColor: boolean;
  isDatetime: boolean;
  isEmail: boolean;
  isImage: boolean;
  isHttpUrl: boolean;
};

export const stringParser = async (v: string): Promise<StringParserReturn> => {
  const falseProperties: StringParserReturn = {
    isColor: false,
    isDatetime: false,
    isEmail: false,
    isImage: false,
    isHttpUrl: false,
  };

  if (isValidColor(v)) {
    return {
      ...falseProperties,
      isColor: true,
    };
  }

  if (isValidDate(v)) {
    return {
      ...falseProperties,
      isDatetime: true,
    };
  }

  if (isValidEmail(v)) {
    return {
      ...falseProperties,
      isEmail: true,
    };
  }

  if (await isValidImage(v)) {
    return {
      ...falseProperties,
      isImage: true,
      isHttpUrl: isValidHttpUrl(v),
    };
  }

  if (isValidHttpUrl(v)) {
    return {
      ...falseProperties,
      isHttpUrl: true,
    };
  }

  return falseProperties;
};
