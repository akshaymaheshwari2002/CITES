import {BSON} from 'realm';

import {StaffHours} from './';
export default class FormTwo {
  constructor({
    _id,
    staffHours,
    accessToVeterinaryServices,
    veterinarianName,
    veterinarianAddress,
    animalKeptAtOtherLocation,
    addressOfOtherAnimals,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.staffHours = StaffHours ? new StaffHours(staffHours) : staffHours;
    this.accessToVeterinaryServices = accessToVeterinaryServices;
    this.veterinarianName = veterinarianName;
    this.veterinarianAddress = veterinarianAddress;
    this.animalKeptAtOtherLocation = animalKeptAtOtherLocation;
    this.addressOfOtherAnimals = addressOfOtherAnimals;
  }
}
