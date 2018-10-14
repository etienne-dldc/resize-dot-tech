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

export type Settings = {
  type: OutputMimeType;
  quality: number;
};

/**
 * State
 */

export type State = {
  files: Array<StateImage>;
  settings: Settings;
};

const state: State = {
  files: [],
  settings: {
    type: OutputMimeType.jpeg,
    quality: 0.9,
  },
};

export default state;
