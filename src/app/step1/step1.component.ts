import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms'

import { PasswordValidation } from './passwordValidation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})

export class Step1Component implements OnInit {
  user: FormGroup;

  constructor(public dataService: DataService, public router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  /** Submit form and navigate to Step 2 *//**
  * @description  submit form and navigate to step 2 if form has no errors
  */
  onSubmit() {
    this.router.navigateByUrl('/step2')
    this.dataService.fistStep(this.user.value);
  }

  ngAfterViewInit() {
    this.user.patchValue({
      firstName: this.dataService.getUserObj().firstName,
      lastName: this.dataService.getUserObj().lastName,
      email: this.dataService.getUserObj().email
    });
  }

}
