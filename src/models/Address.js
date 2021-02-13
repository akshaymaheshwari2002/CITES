import {BSON} from 'realm';

export default class Address {
  constructor({addressLineOne, addressLineTwo, addressLineThree}) {
    this._id = new BSON.ObjectId();
    this.addressLineOne = addressLineOne;
    this.addressLineTwo = addressLineTwo;
    this.addressLineThree = addressLineThree;
  }
}
