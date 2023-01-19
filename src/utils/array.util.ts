export type Entities<T> = {
  [id: string]: T;
};

export const arrayToEntities = <T>(array: T[], id: string): Entities<T> => {
  return array.reduce((acc: Entities<T>, item: T) => {
    return (item as any)[id] === undefined
      ? acc
      : {
          ...acc,
          [(item as any)[id]]: item,
        };
  }, {});
};

export const isLastItemOfArray = <T extends any[]>(index: number, array: T): boolean => index === array.length - 1;

export const isEmptyArray = <T extends any[]>(array: T): boolean => array.length < 1;
