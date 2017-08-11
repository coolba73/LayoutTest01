import { NgModule } from "@angular/core";
import { CorpSearchComponent } from "./corpsearch.component";
import { CorpValueRouting } from "./corpvalue.routing";

@NgModule({
    imports:[
        CorpValueRouting
    ],
    declarations:[
        CorpSearchComponent
    ]
})
export class CorpValueModule{}