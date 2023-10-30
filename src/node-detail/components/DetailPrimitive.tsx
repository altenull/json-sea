'use client';

import { CardBody, CardHeader } from '@nextui-org/card';
import { ReactElement, isValidElement, memo, useEffect, useMemo, useState } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { BooleanChip } from '../../ui/components/BooleanChip';
import { NullChip } from '../../ui/components/NullChip';
import { isBoolean, isNull, isNumber, isString } from '../../utils/json.util';
import { NumberInspector } from '../primitive/components/NumberInspector';
import { StringInspector } from '../primitive/components/StringInspector';
import { ALL_FALSE_STRING_SUBTYPE_VALIDATOR } from '../primitive/constants/string-subtype.constant';
import { StringSubtypeValidator, validateStringSubtype } from '../primitive/helpers/string-subtype.helper';
import { DataTypeText } from './DataTypeText';

type Props = {
  chip?: ReactElement;
  value: string | number | boolean | null;
};

const getStringSubtypeText = (stringSubtypeValidator: StringSubtypeValidator): string => {
  if (stringSubtypeValidator.isColor) return '/color';
  if (stringSubtypeValidator.isDatetime) return '/datetime';
  if (stringSubtypeValidator.isEmail) return '/email';
  if (stringSubtypeValidator.isHttpUri) return '/uri';
  if (stringSubtypeValidator.isImage) return '/image';
  if (stringSubtypeValidator.isImageUri) return '/imageUri';
  if (stringSubtypeValidator.isAudio) return '/audio';
  if (stringSubtypeValidator.isAudioUri) return '/audioUri';
  if (stringSubtypeValidator.isVideo) return '/video';
  if (stringSubtypeValidator.isVideoUri) return '/videoUri';

  return '';
};

const _DetailPrimitive = ({ chip, value }: Props) => {
  const [isStringSubtypeLoading, setIsStringSubtypeLoading] = useState<boolean>(isString(value));
  const [stringSubtypeValidator, setStringSubtypeValidator] = useState<StringSubtypeValidator>(
    ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
  );

  useEffect(() => {
    if (isString(value)) {
      validateStringSubtype(value).then((result: StringSubtypeValidator) => {
        setStringSubtypeValidator(result);
        setIsStringSubtypeLoading(false);
      });
    }
  }, [value]);

  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(value);

    return jsonDataType === JsonDataType.String
      ? jsonDataType.concat(getStringSubtypeText(stringSubtypeValidator))
      : jsonDataType;
  }, [value, stringSubtypeValidator]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">
        {isString(value) && (
          <StringInspector
            stringSubtypeValidator={stringSubtypeValidator}
            value={value}
            isLoading={isStringSubtypeLoading}
          />
        )}

        {isNumber(value) && <NumberInspector value={value} />}

        {isBoolean(value) && <BooleanChip className="ml-auto" value={value} />}

        {isNull(value) && <NullChip className="ml-auto" />}
      </CardBody>
    </>
  );
};

export const DetailPrimitive = memo(_DetailPrimitive);
