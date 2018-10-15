import { FileWithPreview } from 'react-dropzone';

/**
 * Parts
 */

export type StateImageId = string;

export type StateImage = {
  id: StateImageId;
  expanded: boolean;
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
  maxSize: number | null;
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
    maxSize: 1600,
  },
};

export default state;
