import { Operation } from 'overmind';
import { StateImageId, StateImage, OutputMimeType } from './state';

export const removeImage: Operation.Mutate<StateImageId> = ({ state, value: fileId }) => {
  const file = state.files.find(f => f.id === fileId);
  if (file) {
    state.files.splice(state.files.indexOf(file), 1);
  }
};

export const addImages: Operation.Mutate<Array<StateImage>> = ({ state, value: files }) => {
  state.files.push(...files);
};

export const setSettingType: Operation.Mutate<OutputMimeType> = ({ state, value }) => {
  state.settings.type = value;
};

export const setSettingQuality: Operation.Mutate<number> = ({ state, value }) => {
  state.settings.quality = value;
};

export const setSettingMaxSize: Operation.Mutate<number> = ({ state, value }) => {
  console.log(value);

  state.settings.maxSize = value;
};

export const toggleExpandItem: Operation.Mutate<StateImageId> = ({ state, value: fileId }) => {
  const file = state.files.find(f => f.id === fileId);
  if (file) {
    file.expanded = !file.expanded;
  }
};

export const setRunning: Operation.Mutate = ({ state }) => {
  state.running = true;
};

export const setNotRunning: Operation.Mutate = ({ state }) => {
  state.running = false;
};

export const setWatermarkEnabled: Operation.Mutate<boolean> = ({ state, value }) => {
  state.settings.watermark.enabled = value;
};

export const setWatermarkText: Operation.Mutate<string> = ({ state, value }) => {
  state.settings.watermark.text = value;
};

export const setWaterMarkOpacity: Operation.Mutate<number> = ({ state, value }) => {
  state.settings.watermark.opacity = value;
};

export const setWaterMarkSize: Operation.Mutate<number> = ({ state, value }) => {
  state.settings.watermark.size = value;
};
