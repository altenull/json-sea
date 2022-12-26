import { memo } from 'react';
import { useStringSubtypeValidator } from '../primitive/hooks/useStringSubtypeValidator';

type Props = {
  value: string;
};

/**
 * @returns e.g. '/color', '/image', '/imageUri', etc
 */
const _StringSubtypeText = ({ value }: Props) => {
  const { isColor, isDatetime, isEmail, isImage, isHttpUri } = useStringSubtypeValidator(value);

  return (
    <>
      {isColor && '/color'}
      {isDatetime && '/datetime'}
      {isEmail && '/email'}
      {isImage && !isHttpUri && '/image'}
      {isImage && isHttpUri && '/imageUri'}
      {!isImage && isHttpUri && '/uri'}
    </>
  );
};

export const StringSubtypeText = memo(_StringSubtypeText);
