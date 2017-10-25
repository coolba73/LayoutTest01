import { Component, Inject } from "@angular/core";
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { DOCUMENT  } from "@angular/platform-browser"

@Component({
    selector : 'dlgflowlist',
    templateUrl : './dlgflowlist.component.html',
    styleUrls : ['./dlgflowlist.component.css']
})

export class DlgFlowListComponent{
    
    constructor(public dialog:MdDialog, @Inject(DOCUMENT) doc:any){
        dialog.afterOpen.subscribe((ref:MdDialogRef<any>) => {

        })
    }
    
}//class