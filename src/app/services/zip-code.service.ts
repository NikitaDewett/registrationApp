import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ZipCodeService {
  private apiKey = 'js-veuMbQOGsXl82rUGIXaZa2f4SQvLZEUvTph4f6LI36Q6yLMhIXgTZwYSntDm8xR1'
  public url = 'https://www.zipcodeapi.com/rest/'

  constructor(public http: Http) { }

  /** find city and state depending on zipCOde *//**
  * @description  find city and state which depend on zipCode of place using API
  * @param zipCode {String} contains zipCode of place which we will find using API
  */
  makeRequest(zipCode) {
    return this.http.get(this.url + this.apiKey + "/info.json/" + zipCode).map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
