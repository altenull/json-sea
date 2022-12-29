import { useEffect, useState } from 'react';
import { ALL_FALSE_STRING_SUBTYPE_VALIDATOR } from '../constants/string-subtype.constant';
import { StringSubtypeValidator, validateStringSubtype } from '../helpers/string-subtype.helper';

export const useStringSubtypeValidator = (target: string) => {
  const [stringSubtypeValidator, setStringSubtypeValidator] = useState<StringSubtypeValidator>(
    ALL_FALSE_STRING_SUBTYPE_VALIDATOR
  );

  useEffect(() => {
    validateStringSubtype(target).then(setStringSubtypeValidator);
  }, [target]);

  return stringSubtypeValidator;
};
