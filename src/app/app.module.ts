import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Routes, RouterModule } from '@angular/router';

import { DataService } from './services/data.service';
import { ZipCodeService } from './services/zip-code.service';

const appRoutes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', component: HeaderComponent,
        children: [
          { path: 'step1', component: Step1Component },
          { path: 'step2', component: Step2Component },
          { path: 'step3', component: Step3Component },
          { path: '', redirectTo: 'step1', pathMatch: 'full' },
          { path: '**', component: Step1Component },
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Step1Component,
    Step2Component,
    Step3Component,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [DataService, ZipCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
