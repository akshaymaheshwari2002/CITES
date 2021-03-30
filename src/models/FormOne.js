import {BSON} from 'realm';

import {Phone} from './';
export default class FormOne {
  constructor({
    _id,
    dateOfInspection,
    nameOfInspectionOfficers,
    facilityName,
    facilityAddressLineOne,
    facilityAddressLineTwo,
    city,
    stateProvienceRegion,
    zipCode,
    country,
    facilityOwner,
    facilityOwnerEmail,
    facilityOwnerPhone,
    facilityEstablishmentDate,
    typeOfInspection,
    nationalPermitNumber,
    citesInformationCode,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.dateOfInspection = dateOfInspection;
    this.nameOfInspectionOfficers = nameOfInspectionOfficers;
    this.facilityName = facilityName;
    this.facilityAddressLineOne = facilityAddressLineOne;
    this.facilityAddressLineTwo = facilityAddressLineTwo;
    this.city = city;
    this.stateProvienceRegion = stateProvienceRegion;
    this.zipCode = zipCode;
    this.country = country;
    this.facilityOwner = facilityOwner;
    this.facilityOwnerEmail = facilityOwnerEmail;
    this.facilityOwnerPhone = facilityOwnerPhone
      ? new Phone(facilityOwnerPhone)
      : facilityOwnerPhone;
    this.facilityEstablishmentDate = facilityEstablishmentDate;
    this.typeOfInspection = typeOfInspection;
    this.nationalPermitNumber = nationalPermitNumber;
    this.citesInformationCode = citesInformationCode;
  }
}
