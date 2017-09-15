import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ZipCodeService {
  private apiKey = 'P2swOcVKjHmRgpnm2tprM97XoXw1KJfzLI6zU2jdKG505tm8WMzJWHGkFcmpWBZH'
  public url = 'https://www.zipcodeapi.com/rest/'

  constructor(public http: Http) { }

  /** find city and state depending on zipCOde *//**
  * @description  find city and state which depend on zipCode of place using API
  * @param zipCode {String} contains zipCode of place which we will find using API
  */
  makeRequest(zipCode) {
    return this.http.get(this.url + this.apiKey + "/info.json/" + zipCode).map((res: Response) => res.json())

  }

}
