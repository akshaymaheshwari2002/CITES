import {BSON} from 'realm';
export default class FormTwo {
  constructor({
    fullTimeStaffs,
    partTimeStaffs,
    accessToVeterinaryServices,
    veterinarianName,
    veterinarianAddress,
    animalKeptAtOtherLocation,
    addressOfOtherAnimals,
  }) {
    this._id = new BSON.ObjectId();
    this.fullTimeStaffs = fullTimeStaffs;
    this.partTimeStaffs = partTimeStaffs;
    this.accessToVeterinaryServices = accessToVeterinaryServices;
    this.veterinarianName = veterinarianName;
    this.veterinarianAddress = veterinarianAddress;
    this.animalKeptAtOtherLocation = animalKeptAtOtherLocation;
    this.addressOfOtherAnimals = addressOfOtherAnimals;
  }
}
