import { isNumber } from '../../../utils/json.util';
import { InferredMapCardProps } from '../components/InferredMapCard';

const isEveryPropertyNumber = (obj: object, propertyKeys: string[]): boolean => {
  return propertyKeys.every((key: string) => isNumber((obj as any)[key]));
};

const convertInferredMapCardProps = (obj: object, propertyKeys: [string, string]): InferredMapCardProps => {
  const [latPropertyK, lngPropertyK] = propertyKeys;

  return {
    latPropertyK,
    lngPropertyK,
    latLng: [(obj as any)[latPropertyK], (obj as any)[lngPropertyK]],
  };
};

// TODO: Consider UPPERCASE..
/**
 * Case 1.   "latitude" x "longitude"
 * Case 2-1. "lat" x "lng"
 * Case 2-2. "lat" x "long"
 *
 * One object node can have maximum 2 `InferredMapCard`. (Case 1 & Case 2)
 * If both 'Case 2-1' and 'Case 2-2' are met, only 'Case 2-1' is shown.
 */
export const inferMap = (obj: object): InferredMapCardProps[] => {
  const case1: [string, string] = ['latitude', 'longitude'];
  const case2_1: [string, string] = ['lat', 'lng'];
  const case2_2: [string, string] = ['lat', 'long'];

  let inferredMapCardProps: InferredMapCardProps[] = [];

  if (isEveryPropertyNumber(obj, case1)) {
    inferredMapCardProps.push(convertInferredMapCardProps(obj, case1));
  }

  if (isEveryPropertyNumber(obj, case2_1)) {
    inferredMapCardProps.push(convertInferredMapCardProps(obj, case2_1));
    return inferredMapCardProps;
  }

  if (isEveryPropertyNumber(obj, case2_2)) {
    inferredMapCardProps.push(convertInferredMapCardProps(obj, case2_2));
  }

  return inferredMapCardProps;
};
