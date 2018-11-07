import { Pipe, pipe, TOperator } from 'overmind';
import { StateImage } from './state';
import * as mutations from './mutations';
import * as operations from './operations';

export const addImages: Pipe<Array<File>, Array<StateImage>> = pipe(
  operations.mapFileToStateImage,
  mutations.addImages
);

export const processAndDowloadZip: Pipe<void, any> = pipe(
  mutations.setRunning,
  operations.dowloadZip,
  mutations.setNotRunning
);

export const handleWatermarkCheckbox: Pipe<React.MouseEvent<HTMLInputElement>, boolean> = pipe(
  operations.extractChecked,
  mutations.setWatermarkEnabled
);

export const handleWatermarkText: Pipe<React.ChangeEvent<HTMLInputElement>, string> = pipe(
  operations.extractValue,
  mutations.setWatermarkText
);

// Actions from mutations

const pipeThemAll = <Mutations extends { [key: string]: TOperator<any, any> }>(mutations: Mutations): Mutations => {
  return Object.keys(mutations).reduce<Mutations>(
    (acc, name) => {
      acc[name] = pipe(mutations[name]);
      return acc;
    },
    {} as any
  );
};

export const {
  setSettingType,
  setSettingMaxSize,
  setSettingQuality,
  toggleExpandItem,
  setWaterMarkOpacity,
  setWaterMarkSize,
  removeImage,
} = pipeThemAll(mutations);
