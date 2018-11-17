import { Operator, pipe, TOperator } from 'overmind';
import { StateImage } from './state';
import * as mutations from './mutations';
import * as operations from './operations';

export const addImages: Operator<Array<File>, Array<StateImage>> = pipe(
  operations.mapFileToStateImage,
  mutations.addImages
);

export const processAndDowloadZip: Operator<void, any> = pipe(
  mutations.setRunning,
  operations.dowloadZip,
  mutations.setNotRunning
);

export const handleWatermarkCheckbox: Operator<React.MouseEvent<HTMLInputElement>, boolean> = pipe(
  operations.extractChecked,
  mutations.setWatermarkEnabled
);

export const handleWatermarkText: Operator<React.ChangeEvent<HTMLInputElement>, string> = pipe(
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
