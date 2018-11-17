import { map } from 'overmind';
import { StateImage } from './state';

export const mapFileToStateImage = map<Array<File>, Array<StateImage>>(({ uuid, value: files }) => {
  return files.map(
    (inputFile): StateImage => ({
      id: uuid(),
      input: inputFile,
      expanded: false,
    })
  );
});

export const dowloadZip = map<any, any>(({ state, imageTools }) => {
  return imageTools.downloadZip(state.files, state.settings);
});

export const extractChecked = map<React.MouseEvent<HTMLInputElement>, boolean>(({ value }) => {
  return (value.target as any).checked;
});

export const extractValue = map<React.ChangeEvent<HTMLInputElement>, string>(({ value }) => {
  return value.target.value;
});
