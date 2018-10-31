/**
 * Parts
 */

export type StateImageId = string;

export type StateImage = {
  id: StateImageId;
  expanded: boolean;
  input: File;
};

export enum OutputMimeType {
  jpeg = 'image/jpeg',
  png = 'image/png',
  webp = 'image/webp',
}

export type StateSettings = {
  type: OutputMimeType;
  quality: number;
  maxSize: number;
};

/**
 * State
 */

export type State = {
  files: Array<StateImage>;
  settings: StateSettings;
  running: boolean;
};

const state: State = {
  files: [],
  settings: {
    type: OutputMimeType.jpeg,
    quality: 90,
    maxSize: 1600,
  },
  running: false,
};

export default state;
