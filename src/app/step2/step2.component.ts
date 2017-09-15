import { Component, OnInit, ChangeDetectionStrategy, HostListener, Directive } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms'

import { DataService } from '../services/data.service';
import { ZipCodeService } from '../services/zip-code.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})

export class Step2Component implements OnInit {
  user: FormGroup;
  postalCode;

  constructor(public dataService: DataService, public router: Router, public fb: FormBuilder, public zipService: ZipCodeService) { }

  ngOnInit() {
    this.user = this.fb.group({
      state: [''],
      city: [''],
      postalCode: ['', [Validators.pattern('^[0-9]{5}(-[0-9]{4})?$')]]
    })
    this.postalCode = this.user.controls['postalCode'];
    this.postalCode.valueChanges.subscribe(
      (value: string) => {
        if (!this.user.get('postalCode').hasError('pattern') && this.user.get('postalCode').value != undefined && this.user.get('postalCode').value != '') {
          this.zipService.makeRequest(value).subscribe((data) => {
            console.log(data);
            this.user.patchValue({
              state: data.state,
              city: data.city,
            });
          })
        }
      }
    );
  }

  /** Submit form and navigate to Step 3 *//**
   * @description  submit form and navigate to step 3 if form has no errors
  */
  onSubmit() {
    this.router.navigateByUrl('/step3');
    this.dataService.secondStep(this.user.value);
  }

  ngAfterViewInit() {
    this.user.patchValue({
      state: this.dataService.getUserObj().state,
      city: this.dataService.getUserObj().city,
      postalCode: this.dataService.getUserObj().postalCode
    });
  }
}
