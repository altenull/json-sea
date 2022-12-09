/**
 * Primitive data type is different between Javascript and JSON areas.
 * @see https://www.w3schools.com/js/js_json_datatypes.asp
 */
export enum NodeType {
  Object = 'object',
  Array = 'array',
  Primitive = 'primitive', // string, number, boolean and null. (not undefined)
}
