import { Injectable } from '@angular/core';

import { User } from '../classes/user'

@Injectable()
export class DataService {
  public userObj;

  constructor() {
    this.userObj = new User();
  }

  /** fill userObj with data of inputs on the first step of registration *//**
* @description  fill userObj with data of inputs on the first step of registration
*/
  fistStep(obj) {
    this.userObj.firstName = obj.firstName;
    this.userObj.lastName = obj.lastName;
    this.userObj.email = obj.email;
    this.userObj.password = obj.password
  }

  /** fill userObj with data of inputs on the second step of registration *//**
* @description  fill userObj with data of inputs on the second step of registration
*/
  secondStep(obj) {
    this.userObj.state = obj.state
    this.userObj.city = obj.city
    this.userObj.postalCode = obj.postalCode
  }

  /** fill userObj with data of inputs on the third step of registration *//**
* @description  fill userObj with data of inputs on the third step of registration
*/
  thirdStep(obj) {
    this.userObj.subscribtion = obj.subscribtion;
    this.userObj.terms = obj.terms;
  }

  /** getter for userObj *//**
* @description  func used to get userObj
* @returns {Object}
*/
  getUserObj() {
    return this.userObj
  }

  /** clear userObj *//**
  * @description  func used to clear userObj when user clicks title in header
  */
  clearObj() {
    for (const prop of Object.keys(this.userObj)) {
      delete this.userObj[prop];
    }
  }
}
