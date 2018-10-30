import { Operation } from 'overmind';
import { StateImage } from './state';

export const mapFileToStateImage: Operation.Map<Array<File>, Array<StateImage>> = ({ uuid, value: files }) => {
  return files.map(
    (inputFile): StateImage => ({
      id: uuid(),
      input: inputFile,
      expanded: false,
    })
  );
};

export const dowloadZip: Operation.Run = ({ state, imageTools }) => {
  return imageTools.downloadZip(state.files, state.settings);
};
