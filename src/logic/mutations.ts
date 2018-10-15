import { Mutate } from 'overmind';
import { StateImageId, StateImage, OutputMimeType } from './state';

export const removeImage: Mutate<StateImageId> = ({ state, value: fileId }) => {
  const file = state.files.find(f => f.id === fileId);
  if (file) {
    state.files.splice(state.files.indexOf(file), 1);
  }
};

export const addImages: Mutate<Array<StateImage>> = ({ state, value: files }) => {
  state.files.push(...files);
};

export const setSettingType: Mutate<OutputMimeType> = ({ state, value }) => {
  state.settings.type = value;
};

export const setSettingQuality: Mutate<number> = ({ state, value }) => {
  state.settings.quality = value;
};

export const setSettingMaxSize: Mutate<number | null> = ({ state, value }) => {
  state.settings.maxSize = value;
};

export const toggleExpandItem: Mutate<StateImageId> = ({ state, value: fileId }) => {
  const file = state.files.find(f => f.id === fileId);
  if (file) {
    file.expanded = !file.expanded;
  }
};
