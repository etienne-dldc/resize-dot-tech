import * as createUuid from 'uuid/v4';
import { StateImageId } from './state';
import { FileWithPreview } from 'react-dropzone';

export const uuid = createUuid;

const blobMap = new Map<StateImageId, FileWithPreview>();

export const blobManager = blobMap;

// import algoliasearch from 'algoliasearch';
// import algoliasearchHelper from 'algoliasearch-helper';
// import { SearchHit } from './state';

// const applicationID = 'Y22I53GFTP';
// const apiKey = 'b1a057e32b6b56d9b492373173f86b33';
// const indexName = 'questions';

// function createAlgoliaEffect() {
//   let client: algoliasearch.Client | null = null;
//   let helper: algoliasearchHelper.AlgoliaSearchHelper<SearchHit> | null = null;
//   let initialized: boolean = false;
//   let answersIndex: algoliasearch.Index;

//   function init() {
//     if (initialized) {
//       return;
//     }
//     client = algoliasearch(applicationID, apiKey);
//     answersIndex = client.initIndex('answers');
//     helper = algoliasearchHelper(client, indexName);
//     initialized = true;
//   }

//   function search(query: string) {
//     if (initialized === false || helper === null) {
//       throw new Error('Algolia is not initialized yet');
//     }
//     return helper
//       .searchOnce({
//         query
//       } as any)
//       .then(v => {
//         return v.content;
//       });
//   }

//   function getAnswer(id: string): Promise<any> {
//     return new Promise((resolve, reject) => {
//       answersIndex.getObject(id, (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       });
//     });
//   }

//   return {
//     init,
//     search,
//     getAnswer
//   };
// }

// export const algolia = createAlgoliaEffect();
