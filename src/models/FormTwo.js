import {createId} from '@utils/RealmHelper';
import {StaffHours} from './';

export default class FormTwo {
  constructor({
    _id,
    staffHours,
    accessToVeterinaryServices,
    veterinarianName,
    veterinarianAddress,
    veterinarianCountry,
    animalKeptAtOtherLocation,
    addressOfOtherAnimals,
  }) {
    this._id = _id || createId('FormTwo');
    this.staffHours = StaffHours ? new StaffHours(staffHours) : staffHours;
    this.accessToVeterinaryServices = accessToVeterinaryServices;
    this.veterinarianName = veterinarianName;
    this.veterinarianAddress = veterinarianAddress;
    this.veterinarianCountry = veterinarianCountry;
    this.animalKeptAtOtherLocation = animalKeptAtOtherLocation;
    this.addressOfOtherAnimals = addressOfOtherAnimals;
  }
}
