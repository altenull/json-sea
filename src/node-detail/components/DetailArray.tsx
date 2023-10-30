import { CardBody, CardHeader } from '@nextui-org/card';
import { ReactElement, isValidElement, memo, useMemo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { formatCounting } from '../../utils/string.util';
import { ArrayInspector } from '../array/components/ArrayInspector';
import { DataTypeText } from './DataTypeText';

type Props = {
  chip?: ReactElement;
  array: any[];
};

const _DetailArray = ({ chip, array }: Props) => {
  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(array);
    const counting: string = formatCounting(array.length, 'item', 'items');

    return `${jsonDataType} ${counting}`;
  }, [array]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-2">
        <ArrayInspector array={array} />
      </CardBody>
    </>
  );
};

export const DetailArray = memo(_DetailArray);
