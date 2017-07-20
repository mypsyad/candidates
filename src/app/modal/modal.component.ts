import { Component, OnInit } from "@angular/core";

import { DialogRef, ModalComponent } from "angular2-modal";
import { BSModalContext } from "angular2-modal/plugins/bootstrap";

// import { CandidateService } from "./../candidates.service";

export class CandidateModalData extends BSModalContext {
    public candidate: any[];
}

@Component({
    selector: "modal-component",
    templateUrl: "./modal.component.html",
    styleUrls: ['./modal.component.scss']
})

export class CandidateModal implements ModalComponent<CandidateModalData> {

    context: CandidateModalData;

    constructor(public dialog: DialogRef<CandidateModalData>){
        this.context = dialog.context;
    }

    candidateClose() {
        this.dialog.close();
    }

}