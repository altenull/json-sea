/**
 * Invalid color value can't be assigned to `style.color` attribute.
 */
const isValidColor = (value: string): boolean => {
  const optionStyle = new Option().style;
  optionStyle.color = value;

  return !!optionStyle.color;
};

export const stringParser = (
  v: string
): {
  isImageUrl: boolean;
  isLink: boolean;
  isDatetime: boolean;
  isColor: boolean;
} => {
  // TODO:
  const isImageUrl: boolean = false;
  const isLink: boolean = false;
  const isDatetime: boolean = false;
  const isColor: boolean = isValidColor(v);

  return {
    isImageUrl: isImageUrl && !isLink && !isDatetime && !isColor,
    isLink: !isImageUrl && isLink && !isDatetime && !isColor,
    isDatetime: !isImageUrl && !isLink && isDatetime && !isColor,
    isColor: !isImageUrl && !isLink && !isDatetime && isColor,
  };
};
