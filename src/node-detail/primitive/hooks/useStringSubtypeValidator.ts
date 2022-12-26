import { useEffect, useState } from 'react';
import { allFalseStringSubtypeValidator } from '../constants/string-subtype.constant';
import { StringSubtypeValidator, validateStringSubtype } from '../helpers/string-subtype.helper';

export const useStringSubtypeValidator = (target: string) => {
  const [stringSubtypeValidator, setStringSubtypeValidator] =
    useState<StringSubtypeValidator>(allFalseStringSubtypeValidator);

  useEffect(() => {
    validateStringSubtype(target).then(setStringSubtypeValidator);
  }, [target]);

  return stringSubtypeValidator;
};
