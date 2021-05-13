import Realm from 'realm';

import * as Schemas from '@schemas';
import Species from '@models/Species';

const config = {
  path: 'db.realm',
  schema: Object.values(Schemas),
  schemaVersion: 0,
  migration: () => {},
};

let realm;

Realm.open(config).then((_realm) => {
  realm = _realm;
});

export const upsert = (objectType, data) => {
  let _data;

  realm.write(() => {
    _data = realm.create(objectType, data, 'modified');
    _data = JSON.parse(JSON.stringify(_data));
  });

  return _data;
};

export const deleteObject = (objectType, objectId) => {
  realm.write(() => {
    let _object;
    if (objectId) {
      _object = realm.objectForPrimaryKey(objectType, objectId);
    } else {
      _object = realm.objects(objectType);
    }
    realm.delete(_object);
  });
};

export const get = (objectType, objectId) => {
  let data;

  if (objectId) {
    data = realm.objectForPrimaryKey(objectType, objectId);
  } else {
    data = realm.objects(objectType);
  }

  return JSON.parse(JSON.stringify(data));
};

export const addOrUpdateSpecies = (species, inspectionId) => {
  if (inspectionId) {
    let data;

    realm.write(() => {
      const inspection = realm.objectForPrimaryKey('Inspection', inspectionId);

      if (Array.isArray(species)) {
        const newSpecies = [];
        const existingSpecies = [...(inspection?.existingSpecies ?? [])];

        species?.forEach((item) => {
          const savedDataIndex = inspection?.registeredSpecies?.findIndex(
            (savedSpecies) => {
              return (
                savedSpecies._id === item._id || savedSpecies.name === item.name
              );
            },
          );

          if (savedDataIndex !== -1) {
            existingSpecies[savedDataIndex] = {
              ...existingSpecies[savedDataIndex],
              ...item,
            };
          } else {
            newSpecies.push(item);
          }
        });

        inspection.registeredSpecies = existingSpecies;
        newSpecies.forEach((item) => {
          inspection.registeredSpecies.push(new Species(item));
        });
      } else {
        realm.create('Species', new Species(species), 'modified');
      }

      data = JSON.parse(JSON.stringify(inspection.registeredSpecies));
    });

    return data;
  } else {
    throw Error('No Inspection _id specified');
  }
};

export const createId = (objectType) => {
  let id;

  const lastObject = realm.objects(objectType).sorted('_id', true)[0];
  id = lastObject ? lastObject._id + 1 : 1;

  return id;
};
