import { Action } from 'overmind';
import { StateImageId } from './state';
import * as mutations from './mutations';
import * as operations from './operations';
import actionsFromMutations from '../utils/actionsFromMutations';

export const removeImage: Action<StateImageId> = ({ mutate }) => mutate(mutations.removeImage);

export const addImages: Action<Array<File>> = ({ map }) =>
  map(operations.mapFileToStateImage).mutate(mutations.addImages);

export const processAndDowloadZip: Action = ({ mutate }) =>
  mutate(mutations.setRunning)
    .run(operations.dowloadZip)
    .mutate(mutations.setNotRunning);

export const { setSettingType, setSettingMaxSize, setSettingQuality, toggleExpandItem } = actionsFromMutations(
  mutations
);
