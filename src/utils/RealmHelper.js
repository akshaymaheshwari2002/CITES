import Realm, {BSON} from 'realm';

import * as Schemas from '@schemas';

const config = {
  path: 'db.realm',
  schema: Object.values(Schemas),
  schemaVersion: 0,
};

let _realm;

export const getInstance = async () => {
  return _realm || (await Realm.open(config));
};

export const upsert = (objectType, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await getInstance();
      realm.write(() => {
        const upsertedData = realm.create(objectType, data, 'modified');
        resolve(JSON.parse(JSON.stringify(upsertedData)));
      });
    } catch (err) {
      reject(err);
    }
  });

export const get = (objectType, _objectId) =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await getInstance();
      const objectId =
        _objectId && typeof _objectId === 'string'
          ? new BSON.ObjectId(_objectId)
          : null;
      realm.write(() => {
        let data;

        if (objectId) {
          data = realm.objectForPrimaryKey(objectType, objectId);
        } else {
          data = realm.objects(objectType);
        }

        resolve(JSON.parse(JSON.stringify(data)));
      });
    } catch (err) {
      reject(err);
    }
  });

export const addSpeciesToForm = (species, formOneId) =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await getInstance();

      if (formOneId) {
        realm.write(() => {
          const formOne = realm.objectForPrimaryKey(
            'FormOne',
            new BSON.ObjectId(formOneId),
          );

          if (Array.isArray(species)) {
            const newSpecies = formOne.registeredSpecies.length
              ? species.filter(({name}) =>
                  formOne.registeredSpecies.some(
                    ({name: _name}) => name !== _name,
                  ),
                )
              : species;

            newSpecies.forEach((item) => {
              formOne.registeredSpecies.push(item);
            });
          } else {
            const alreadyExists = formOne.registeredSpecies.some(
              ({name}) => species.name === name,
            );

            if (!alreadyExists) {
              formOne.registeredSpecies.push(species);
            }
          }
          resolve(JSON.parse(JSON.stringify(formOne)));
        });
      } else {
        reject('No FormOne _id specified');
      }
    } catch (err) {
      reject(err);
    }
  });
