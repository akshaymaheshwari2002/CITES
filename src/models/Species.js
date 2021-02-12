import {BSON} from 'realm';
export default class Species {
  constructor({
    name,
    numberOfSpecimen,
    numberOfBreedingAdults,
    numberOfSpeciemenExportedSinceLastInspection,
    sourceCodeOfPreviousExport,
  }) {
    this._id = new BSON.ObjectId();
    this.name = name;
    this.numberOfSpecimen = numberOfSpecimen;
    this.numberOfBreedingAdults = numberOfBreedingAdults;
    this.numberOfSpeciemenExportedSinceLastInspection = numberOfSpeciemenExportedSinceLastInspection;
    this.sourceCodeOfPreviousExport = sourceCodeOfPreviousExport;
  }
}
