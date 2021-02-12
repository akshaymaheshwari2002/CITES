import {BSON} from 'realm';

export default class FormOne {
  constructor({
    dateOfInspection,
    namesOfInspectionOfficers,
    facilityAddress,
    facilityOwner,
    facilityOwnerEmail,
    facilityOwnerPhone,
    facilityEshtablishmentDate,
    typeOfInspection,
    registeredSpecies,
  }) {
    this._id = new BSON.ObjectId();
    this.dateOfInspection = dateOfInspection;
    this.namesOfInspectionOfficers = namesOfInspectionOfficers;
    this.facilityAddress = facilityAddress;
    this.facilityOwner = facilityOwner;
    this.facilityOwnerEmail = facilityOwnerEmail;
    this.facilityOwnerPhone = facilityOwnerPhone;
    this.facilityEshtablishmentDate = facilityEshtablishmentDate;
    this.typeOfInspection = typeOfInspection;
    this.registeredSpecies = registeredSpecies;
  }
}
