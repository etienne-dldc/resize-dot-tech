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

export const extractChecked: Operation.Map<React.MouseEvent<HTMLInputElement>, boolean> = ({ value }) => {
  return (value.target as any).checked;
};

export const extractValue: Operation.Map<React.ChangeEvent<HTMLInputElement>, string> = ({ value }) => {
  return value.target.value;
};
