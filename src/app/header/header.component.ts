import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  /**  clear userObj and navigate user to first step of registration  *//**
  * @description  clear userObj and navigate user to first step of registration
  */
  toMain() {
    this.dataService.clearObj();
  }

}
