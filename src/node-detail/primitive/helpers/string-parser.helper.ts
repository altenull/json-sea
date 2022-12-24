/**
 * Invalid color value can't be assigned to `style.color` attribute.
 */
const isValidColor = (v: string): boolean => {
  const optionStyle = new Option().style;
  optionStyle.color = v;

  return !!optionStyle.color;
};

const isValidImage = (v: string): Promise<boolean> => {
  const img = new Image();
  img.src = v;

  return new Promise((resolve) => {
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
  });
};

export type StringParserReturn = {
  isColor: boolean;
  isDatetime: boolean;
  isEmail: boolean;
  isImage: boolean;
  isLink: boolean;
};

export const stringParser = async (v: string): Promise<StringParserReturn> => {
  const FALSE: boolean = false; // For readability of return statement.

  if (isValidColor(v)) {
    return {
      isColor: true,
      isDatetime: FALSE,
      isEmail: FALSE,
      isImage: FALSE,
      isLink: FALSE,
    };
  }

  if (await isValidImage(v)) {
    // TODO: Check link
    return {
      isColor: FALSE,
      isDatetime: FALSE,
      isEmail: FALSE,
      isImage: true,
      isLink: FALSE,
    };
  } else {
    return {
      isColor: FALSE,
      isDatetime: FALSE,
      isEmail: FALSE,
      isImage: FALSE,
      isLink: FALSE,
    };
  }
};
