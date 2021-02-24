import {BSON} from 'realm';

export default class Inspection {
  constructor({_id, stepOne, stepTwo, stepThree, notes, photos}) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.stepOne = stepOne;
    this.stepTwo = stepTwo;
    this.stepThree = stepThree;
    this.notes = notes;
    this.photos = photos;
  }
}
