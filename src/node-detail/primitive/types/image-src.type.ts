import { HttpUri } from './http-uri.type';

export type Base64ImageSrc = `data:image/${string};base64,${string}`;

export type ImageSrc = Base64ImageSrc | HttpUri;
