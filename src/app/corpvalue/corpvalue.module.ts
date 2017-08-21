import { NgModule } from "@angular/core";

import { CorpValueRouting } from "./corpvalue.routing";

//component import
import { CorpSearchComponent } from "./corpsearch.component";
import { OneResultComponent } from "./oneresult.component";

@NgModule({
    imports:[
        CorpValueRouting
    ],
    declarations:[
        CorpSearchComponent,
        OneResultComponent
    ]
})
export class CorpValueModule{}