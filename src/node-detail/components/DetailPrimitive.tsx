'use client';

import { Badge, Card, Grid } from '@nextui-org/react';
import { isValidElement, memo, ReactElement, useEffect, useMemo, useState } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { isBoolean, isNull, isNumber, isString } from '../../utils/json.util';
import { NumberInspector } from '../primitive/components/NumberInspector';
import { StringInspector } from '../primitive/components/StringInspector';
import { ALL_FALSE_STRING_SUBTYPE_VALIDATOR } from '../primitive/constants/string-subtype.constant';
import { StringSubtypeValidator, validateStringSubtype } from '../primitive/helpers/string-subtype.helper';
import { DataTypeText } from './DataTypeText';

type Props = {
  badge?: ReactElement;
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

const _DetailPrimitive = ({ badge, value }: Props) => {
  const [stringSubtypeValidator, setStringSubtypeValidator] = useState<StringSubtypeValidator>(
    ALL_FALSE_STRING_SUBTYPE_VALIDATOR
  );

  useEffect(() => {
    if (isString(value)) {
      validateStringSubtype(value).then(setStringSubtypeValidator);
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
      <Card.Header>
        <Grid.Container direction="column">
          {isValidElement(badge) && <Grid>{badge}</Grid>}

          <Grid>
            <DataTypeText>{dataTypeText}</DataTypeText>
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: 0, paddingBottom: '$sm' }}>
        {isString(value) && <StringInspector stringSubtypeValidator={stringSubtypeValidator} value={value} />}

        {isNumber(value) && <NumberInspector value={value} />}

        {(isBoolean(value) || isNull(value)) && (
          <Badge css={{ marginLeft: 'auto' }} isSquared variant="flat">
            {JSON.stringify(value)}
          </Badge>
        )}
      </Card.Body>
    </>
  );
};

export const DetailPrimitive = memo(_DetailPrimitive);
