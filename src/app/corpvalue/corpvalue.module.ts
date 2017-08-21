import { NgModule } from "@angular/core";
import { CorpValueRouting } from "./corpvalue.routing";

//component import
import { CorpSearchComponent } from "./corpsearch.component";
import { OneResultComponent } from "./oneresult.component";

import { MaterialModule } from "@angular/material";

@NgModule({
    imports:[
        CorpValueRouting,
        MaterialModule
    ],
    declarations:[
        CorpSearchComponent,
        OneResultComponent
    ]
})
export class CorpValueModule{}