import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ModalModule } from "angular2-modal";
import { BootstrapModalModule } from "angular2-modal/plugins/bootstrap";

import { AppComponent } from './app.component';
import { CandidateModal } from "./modal/modal.component";

import { CandidateService } from "./candidates.service";

@NgModule({
  declarations: [
    AppComponent,
    CandidateModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    CandidateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CandidateModal]
})
export class AppModule { }
