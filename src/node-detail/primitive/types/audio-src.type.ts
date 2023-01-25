import { HttpUri } from './http-uri.type';

export type Base64AudioSrc = `data:audio/${string};base64,${string}`;

export type AudioSrc = Base64AudioSrc | HttpUri;
