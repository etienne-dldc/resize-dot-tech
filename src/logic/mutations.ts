import { mutate } from 'overmind';
import { StateImageId, StateImage, OutputMimeType } from './state';

export const removeImage = mutate<StateImageId>(({ state, value: fileId }) => {
  const fileIndex = state.files.findIndex(f => f.id === fileId);
  // console.log(state.files[0] === state.files[0]);

  if (fileIndex) {
    // console.log({ file, fileId, index: state.files.indexOf(file) });
    // state.files.splice(state.files.indexOf(state.files[0]), 1);
    state.files.splice(fileIndex, 1);
  }
});

export const addImages = mutate<Array<StateImage>>(({ state, value: files }) => {
  state.files.push(...files);
});

export const setSettingType = mutate<OutputMimeType>(({ state, value }) => {
  state.settings.type = value;
});

export const setSettingQuality = mutate<number>(({ state, value }) => {
  state.settings.quality = value;
});

export const setSettingMaxSize = mutate<number>(({ state, value }) => {
  console.log(value);

  state.settings.maxSize = value;
});

export const toggleExpandItem = mutate<StateImageId>(({ state, value: fileId }) => {
  const file = state.files.find(f => f.id === fileId);
  if (file) {
    file.expanded = !file.expanded;
  }
});

export const setRunning = mutate<any>(({ state }) => {
  state.running = true;
});

export const setNotRunning = mutate(({ state }) => {
  state.running = false;
});

export const setWatermarkEnabled = mutate<boolean>(({ state, value }) => {
  state.settings.watermark.enabled = value;
});

export const setWatermarkText = mutate<string>(({ state, value }) => {
  state.settings.watermark.text = value;
});

export const setWaterMarkOpacity = mutate<number>(({ state, value }) => {
  state.settings.watermark.opacity = value;
});

export const setWaterMarkSize = mutate<number>(({ state, value }) => {
  state.settings.watermark.size = value;
});
