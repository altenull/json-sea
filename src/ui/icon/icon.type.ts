import { tuple } from '../../utils/function.util';

export const iconNames = tuple(
  'file-plus',
  'file-block',
  'file-check',
  'left-arrow-with-bar',
  'right-arrow-with-bar',
  'download',
  'cloud-upload',
  'camera',
  'sun',
  'moon',
  'heart',
  'github',
  'array',
  'object',
  'array-empty',
  'object-empty',
  'settings'
);

export type IconName = typeof iconNames[number];
