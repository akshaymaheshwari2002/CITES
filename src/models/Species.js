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
    this.numberOfSpecimen = numberOfSpecimen
      ? parseInt(numberOfSpecimen, 10)
      : numberOfSpecimen;
    this.numberOfBreedingAdults = numberOfBreedingAdults
      ? parseInt(numberOfBreedingAdults, 10)
      : numberOfBreedingAdults;
    this.numberOfSpeciemenExportedSinceLastInspection = numberOfSpeciemenExportedSinceLastInspection
      ? parseInt(numberOfSpeciemenExportedSinceLastInspection, 10)
      : numberOfSpeciemenExportedSinceLastInspection;
    this.sourceCodeOfPreviousExport = sourceCodeOfPreviousExport;
  }
}
