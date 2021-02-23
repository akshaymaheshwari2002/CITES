import {BSON} from 'realm';

export default class FormOne {
  constructor({
    _id,
    dateOfInspection,
    nameOfInspectionOfficers,
    facilityName,
    facilityAddressLineOne,
    facilityAddressLineTwo,
    facilityAddressLineThree,
    facilityOwner,
    facilityOwnerEmail,
    facilityOwnerPhone,
    registeredSpeciesName,
    facilityEshtablishmentDate,
    typeOfInspection,
    registeredSpeciesData,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.dateOfInspection = dateOfInspection;
    this.nameOfInspectionOfficers = nameOfInspectionOfficers;
    this.facilityName = facilityName;
    this.facilityAddressLineOne = facilityAddressLineOne;
    this.facilityAddressLineTwo = facilityAddressLineTwo;
    this.facilityAddressLineThree = facilityAddressLineThree;
    this.facilityOwner = facilityOwner;
    this.facilityOwnerEmail = facilityOwnerEmail;
    this.facilityOwnerPhone = facilityOwnerPhone;
    this.registeredSpeciesName = registeredSpeciesName;
    this.facilityEshtablishmentDate = facilityEshtablishmentDate;
    this.typeOfInspection = typeOfInspection;
    this.registeredSpeciesData = registeredSpeciesData;
  }
}
