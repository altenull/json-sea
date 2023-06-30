import { isNumber } from '../../../utils/json.util';
import { InferredLatLngMapCardProps } from '../components/InferredLatLngMapCard';

const convertInferredLatLngMapCardProps = (
  obj: object,
  nodeId: string,
  propertyKeys: [string, string]
): InferredLatLngMapCardProps => {
  const [latPropertyK, lngPropertyK] = propertyKeys;

  return {
    nodeId,
    latPropertyK,
    lngPropertyK,
    latLng: [(obj as any)[latPropertyK], (obj as any)[lngPropertyK]],
  };
};

type InferMapCase = {
  latWord: string;
  lngWords: string[];
};

export const inferMap = (obj: object, nodeId: string): InferredLatLngMapCardProps[] => {
  const inferMapCases: Record<string, InferMapCase> = {
    // Lowercase
    lowercase1: {
      latWord: 'latitude',
      lngWords: ['longitude'],
    },
    lowercase2: {
      latWord: 'lat',
      lngWords: ['lng', 'long'],
    },
    // Uppercase
    uppercase1: {
      latWord: 'LATITUDE',
      lngWords: ['LONGITUDE'],
    },
    uppercase2: {
      latWord: 'LAT',
      lngWords: ['LNG', 'LONG'],
    },
  };

  let result: InferredLatLngMapCardProps[] = [];

  for (let caseKey in inferMapCases) {
    const { latWord, lngWords } = inferMapCases[caseKey];

    if (isNumber((obj as any)[latWord])) {
      for (let lngWord of lngWords) {
        if (isNumber((obj as any)[lngWord])) {
          result.push(convertInferredLatLngMapCardProps(obj, nodeId, [latWord, lngWord]));
          break;
        }
      }
    }
  }

  return result;
};
