import { Operation } from 'overmind';
import { FileWithPreview } from 'react-dropzone';
import { StateImage } from './state';

export const mapFileToStateImage: Operation.Map<Array<FileWithPreview>, Array<StateImage>> = ({
  effects,
  value: files,
}) => {
  return files.map(inputFile => ({
    id: effects.uuid(),
    input: inputFile,
  }));
};

export const dowloadZip: Operation.Run = ({ state, effects }) => {
  return effects.imageTools.downloadZip(state.files, state.settings);
};
