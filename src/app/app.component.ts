import { Component, ViewContainerRef, ViewEncapsulation, OnInit } from '@angular/core';

import { Overlay, overlayConfigFactory } from "angular2-modal";
import { Modal, BSModalContext } from "angular2-modal/plugins/bootstrap";

import { CandidateModal, CandidateModalData } from "./modal/modal.component";

import { CandidateService } from "./candidates.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  candidates;

  constructor(vcRef: ViewContainerRef, public modal: Modal, private candidateService: CandidateService) {

  }
    ngOnInit() {
        this.candidates = this.candidateService.getCandidates();
    }

    CandidateModal(candidate) {
        this.modal.open(CandidateModal, overlayConfigFactory({candidate}, BSModalContext));
        console.log(candidate);

        //  this.modal.open(CandidateModal, overlayConfigFactory({ candidate }, BSModalContext))
        //     .then((resultPromise) => {

        //         return resultPromise.result.then((result) => {
        //             if(result){
                        
        //                  console.log(result);
                        
        //             }
        //         });
        // }); jez code

    }
 }
