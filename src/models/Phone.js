import {BSON} from 'realm';

export default class Phone {
  constructor({dialCode, contactNo, countryId}) {
    this._id = new BSON.ObjectId();
    this.dialCode = dialCode;
    this.contactNo = contactNo;
    this.countryId = countryId;
  }
}
