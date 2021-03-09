import {BSON} from 'realm';

import {StepOne, StepTwo, StepThree, Species} from './';

export default class Inspection {
  constructor({
    _id,
    stepOne,
    stepTwo,
    stepThree,
    registeredSpecies,
    notes,
    photos,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.stepOne = stepOne ? new StepOne(stepOne) : stepOne;
    this.stepTwo = stepTwo ? new StepTwo(stepTwo) : stepTwo;
    this.stepThree = stepThree ? new StepThree(stepThree) : stepThree;
    this.registeredSpecies = Array.isArray(registeredSpecies)
      ? registeredSpecies.map((species) => new Species(species))
      : registeredSpecies;
    this.notes = notes;
    this.photos = photos;
  }
}
