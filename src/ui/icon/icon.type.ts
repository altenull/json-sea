import { tuple } from '../../utils/function.util';

export const iconNames = tuple('file-plus', 'download', 'cloud-upload', 'sun', 'moon', 'heart', 'github');

export type IconName = typeof iconNames[number];
