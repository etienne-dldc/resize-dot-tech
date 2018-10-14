import { FileWithPreview } from 'react-dropzone';

/**
 * Parts
 */

export type StateImageId = string;

export type StateImage = {
  id: StateImageId;
  input: FileWithPreview;
};

export enum OutputMimeType {
  jpeg = 'image/jpeg',
  png = 'image/png',
  webp = 'image/webp',
}

export type StateSettings = {
  type: OutputMimeType;
  quality: number;
};

/**
 * State
 */

export type State = {
  files: Array<StateImage>;
  settings: StateSettings;
};

const state: State = {
  files: [],
  settings: {
    type: OutputMimeType.jpeg,
    quality: 90,
  },
};

export default state;
