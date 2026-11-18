# Module: string-subtype.helper

**File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts`

## Overview

Module `string-subtype.helper` contains 9 analyzed entities.

```
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

    return
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `string-subtype.helper.isValidColor` | function | No description |
| `string-subtype.helper.isValidEmail` | function | No description |
| `string-subtype.helper.isValidHttpUri` | function | No description |
| `string-subtype.helper.isValidDate` | function | No description |
| `string-subtype.helper.isValidImage` | function | No description |
| `string-subtype.helper.hasVideoDimensions` | function | No description |
| `string-subtype.helper.isValidVideo` | function | No description |
| `string-subtype.helper.isValidAudio` | function | No description |
| `string-subtype.helper.validateStringSubtype` | function | No description |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
