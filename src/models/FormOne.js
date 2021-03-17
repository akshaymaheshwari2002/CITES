import {createId} from '@utils/RealmHelper';

import {Phone} from './';
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
    citesInformationCode,
  }) {
    this._id = _id || createId('FormOne');
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
    this.citesInformationCode = citesInformationCode;
  }
}
