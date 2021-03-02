import {BSON} from 'realm';

import {Species} from './';
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
    facilityEshtablishmentDate,
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
    this.facilityOwnerPhone = facilityOwnerPhone;
    this.facilityEshtablishmentDate = facilityEshtablishmentDate;
    this.typeOfInspection = typeOfInspection;
    this.registeredSpecies = registeredSpecies
      ? new Species(Species)
      : registeredSpecies;
    this.citesInformationCode = citesInformationCode;
  }
}
