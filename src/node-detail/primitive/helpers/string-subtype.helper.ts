import { ALL_FALSE_STRING_SUBTYPE_VALIDATOR } from '../constants/string-subtype.constant';
import { StringSubtype } from '../enums/string-subtype.enum';
import { HttpUri } from '../types/http-uri.type';

/**
 * Invalid color value can't be assigned to `style.color` attribute.
 */
const isValidColor = (dirtyColor: string): boolean => {
  const optionStyle = new Option().style;
  optionStyle.color = dirtyColor;

  return !!optionStyle.color;
};

const isValidDate = (dirtyDate: string): boolean => {
  return new Date(dirtyDate).toString() !== 'Invalid Date';
};

const isValidEmail = (dirtyEmail: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(dirtyEmail.toLowerCase());
};

const isValidHttpUri = (dirtyHttpUri: string): dirtyHttpUri is HttpUri => {
  let url: URL | undefined;

  try {
    url = new URL(dirtyHttpUri);
  } catch (e) {
    return false;
  }

  return ['http:', 'https:'].includes(url.protocol);
};

const isValidImage = (dirtyImage: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyImage.startsWith('data:image/') || isHttpUri) {
    const img = new Image();
    img.src = dirtyImage;

    return new Promise((resolve) => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
    });
  } else {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
};

/**
 * HACK: For now, we consider a video whose width & height are both 0 to be audio.
 */
const hasVideoDimensions = (target: HTMLVideoElement): boolean => {
  return target.videoWidth > 0 && target.videoHeight > 0;
};

const isValidVideo = (dirtyVideo: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyVideo.startsWith('data:video/') || isHttpUri) {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = dirtyVideo;

    return new Promise((resolve) => {
      video.onerror = () => resolve(false);
      video.onloadedmetadata = () => resolve(hasVideoDimensions(video));
    });
  } else {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
};

const isValidAudio = (dirtyAudio: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyAudio.startsWith('data:audio/') || isHttpUri) {
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.src = dirtyAudio;

    return new Promise((resolve) => {
      audio.onerror = () => resolve(false);
      audio.ondurationchange = () => resolve(true);
    });
  } else {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
};

export type StringSubtypeValidator = { [P in keyof typeof StringSubtype as `is${P}`]: boolean };

export const validateStringSubtype = async (v: string): Promise<StringSubtypeValidator> => {
  if (isValidColor(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isColor: true,
    };
  }

  if (isValidDate(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isDatetime: true,
    };
  }

  if (isValidEmail(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isEmail: true,
    };
  }

  const isHttpUri: boolean = isValidHttpUri(v);

  if (await isValidImage(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isImageUri: isHttpUri,
      isImage: !isHttpUri,
    };
  }

  /**
   * @important
   * `isValidVideo` function should be called before `isValidAudio`.
   * Because video and audio are compatible with each otehr.
   */
  if (await isValidVideo(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isVideoUri: isHttpUri,
      isVideo: !isHttpUri,
    };
  }

  if (await isValidAudio(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isAudioUri: isHttpUri,
      isAudio: !isHttpUri,
    };
  }

  if (isHttpUri) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isHttpUri,
    };
  }

  return ALL_FALSE_STRING_SUBTYPE_VALIDATOR;
};
