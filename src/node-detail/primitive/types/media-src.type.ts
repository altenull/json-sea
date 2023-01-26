import { HttpUri } from './http-uri.type';

export type Base64ImageDataUri = `data:image/${string};base64,${string}`;
// Transferring video to data uri is terrible way. So there are very few use cases.
export type Base64VideoDataUri = `data:video/${string};base64,${string}`;
export type Base64AudioDataUri = `data:audio/${string};base64,${string}`;

export type ImageSrc = Base64ImageDataUri | HttpUri;
export type VideoSrc = Base64VideoDataUri | HttpUri;
export type AudioSrc = Base64AudioDataUri | HttpUri;
