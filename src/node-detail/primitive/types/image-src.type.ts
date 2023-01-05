import { HttpUri } from './http-uri.type';

export type Base64ImageSrc = `data:image/${string}`;

export type ImageSrc = Base64ImageSrc | HttpUri;
