import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { CorpSearchComponent } from "./corpsearch.component";

export const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'corpsearch',
                component:CorpSearchComponent
            }
            
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CorpValueRouting{}