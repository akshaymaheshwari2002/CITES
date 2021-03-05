import {BSON} from 'realm';

import {Phone, Species} from './';
export default class FormOne {
  constructor({
    _id,
    dateOfInspection,
    nameOfInspectionOfficers,
    facilityName,
    facilityAddressLineOne,
    facilityAddressLineTwo,
    country,
    facilityOwner,
    facilityOwnerEmail,
    facilityOwnerPhone,
    facilityEstablishmentDate,
    typeOfInspection,
    registeredSpecies,
    citesInformationCode,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.dateOfInspection = dateOfInspection;
    this.nameOfInspectionOfficers = nameOfInspectionOfficers;
    this.facilityName = facilityName;
    this.facilityAddressLineOne = facilityAddressLineOne;
    this.facilityAddressLineTwo = facilityAddressLineTwo;
    this.country = country;
    this.facilityOwner = facilityOwner;
    this.facilityOwnerEmail = facilityOwnerEmail;
    this.facilityOwnerPhone = facilityOwnerPhone
      ? new Phone(facilityOwnerPhone)
      : facilityOwnerPhone;
    this.facilityEstablishmentDate = facilityEstablishmentDate;
    this.typeOfInspection = typeOfInspection;
    this.registeredSpecies = Array.isArray(registeredSpecies)
      ? registeredSpecies.map((species) => new Species(species))
      : registeredSpecies;
    this.citesInformationCode = citesInformationCode;
  }
}
