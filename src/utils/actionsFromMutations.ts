import { Mutate, Action } from 'overmind';

type ActionsFromMutations<Mutations extends { [key: string]: Mutate }> = {
  [K in keyof Mutations]: Action<Parameters<Mutations[K]>[0]['value']>
};

function actionsFromMutations<Mutations extends { [key: string]: Mutate }>(
  mutations: Mutations
): ActionsFromMutations<Mutations> {
  return Object.keys(mutations).reduce<ActionsFromMutations<Mutations>>(
    (acc, mutationName) => {
      acc[mutationName] = ({ mutate }) => mutate(mutations[mutationName]);
      return acc;
    },
    {} as any
  );
}

export default actionsFromMutations;
