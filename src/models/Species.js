import {BSON} from 'realm';
export default class Species {
  constructor({
    _id,
    name,
    numberOfSpecimen,
    numberOfBreedingAdults,
    numberOfSpeciemenExportedSinceLastInspection,
    sourceCodeOfPreviousExport,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.name = name;
    this.numberOfSpecimen = parseInt(numberOfSpecimen, 10);
    this.numberOfBreedingAdults = parseInt(numberOfBreedingAdults, 10);
    this.numberOfSpeciemenExportedSinceLastInspection = parseInt(
      numberOfSpeciemenExportedSinceLastInspection,
      10,
    );
    this.sourceCodeOfPreviousExport = sourceCodeOfPreviousExport;
  }
}
