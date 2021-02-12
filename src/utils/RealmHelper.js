import Realm from 'realm';

import * as Schemas from '@schemas';

const config = {
  path: 'db.realm',
  schema: Object.values(Schemas),
  schemaVersion: 0,
};

let realm;

export const getInstance = async () => {
  return realm || (await Realm.open(config));
};
