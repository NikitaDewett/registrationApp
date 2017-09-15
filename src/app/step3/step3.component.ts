import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})

export class Step3Component implements OnInit {
  public userObj = {
    subscribtion: true,
    terms: false,
  }
  public modal: boolean;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  /** Submit form and console.log userObj, contains data from all three steps of registration and show success modal*//**
   * @description  submit form and log userObj
  */
  logAll() {
    this.dataService.thirdStep(this.userObj)
    this.modal = true;
    setTimeout(() => {
      this.modal = false
    }, 1500);
    console.log(this.dataService.userObj);
  }


}
