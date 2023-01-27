import { useEffect, useState } from 'react';
import { ALL_FALSE_STRING_SUBTYPE_VALIDATOR } from '../constants/string-subtype.constant';
import { StringSubtypeValidator, validateStringSubtype } from '../helpers/string-subtype.helper';

/**
 * TODO: 2023-01-27
 * `validateStringSubtype` hook is getting heavier. Need to find out how to use this hook only once globally.
 * `StringSubtypeText` & `StringInspector` components are using this hook.
 */
export const useStringSubtypeValidator = (target: string) => {
  const [stringSubtypeValidator, setStringSubtypeValidator] = useState<StringSubtypeValidator>(
    ALL_FALSE_STRING_SUBTYPE_VALIDATOR
  );

  useEffect(() => {
    validateStringSubtype(target).then(setStringSubtypeValidator);
  }, [target]);

  return stringSubtypeValidator;
};
