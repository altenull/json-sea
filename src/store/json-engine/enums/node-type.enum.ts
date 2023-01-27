/**
 * Primitive data type is different between Javascript and JSON areas.
 * @see https://www.w3schools.com/js/js_json_datatypes.asp
 */
export enum NodeType {
  Object = 'object',
  Array = 'array',

  /**
   * Primitive node exists to express Array node items only.
   * It can be `string`, `number`, `boolean` or `null`. (`undefined` can't exist in JSON)
   */
  Primitive = 'primitive',
}
