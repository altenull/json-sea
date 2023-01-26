import { HttpUri } from './http-uri.type';

// Transferring video to data uri is terrible way. So there are very few use cases.
export type Base64VideoSrc = `data:video/${string};base64,${string}`;

export type VideoSrc = Base64VideoSrc | HttpUri;
