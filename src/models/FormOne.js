import {BSON} from 'realm';

export default class FormOne {
  constructor({
    dateOfInspection,
    nameOfInspectionOfficers,
    facilityName,
    facilityAddressLineOne,
    facilityAddressLineTwo,
    facilityAddressLineThree,
    facilityOwner,
    facilityOwnerEmail,
    facilityOwnerPhone,
    facilityEshtablishmentDate,
    typeOfInspection,
    registeredSpecies,
  }) {
    this._id = new BSON.ObjectId();
    this.dateOfInspection = dateOfInspection;
    this.nameOfInspectionOfficers = nameOfInspectionOfficers;
    this.facilityName = facilityName;
    this.facilityAddressLineOne = facilityAddressLineOne;
    this.facilityAddressLineTwo = facilityAddressLineTwo;
    this.facilityAddressLineThree = facilityAddressLineThree;
    this.facilityOwner = facilityOwner;
    this.facilityOwnerEmail = facilityOwnerEmail;
    this.facilityOwnerPhone = facilityOwnerPhone;
    this.facilityEshtablishmentDate = facilityEshtablishmentDate;
    this.typeOfInspection = typeOfInspection;
    this.registeredSpecies = registeredSpecies;
  }
}
