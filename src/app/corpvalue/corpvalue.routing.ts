import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

//component import
import { CorpSearchComponent } from "./corpsearch.component";
import { OneResultComponent } from "./oneresult.component";


export const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'corpsearch',
                component:CorpSearchComponent
            },
            {
                path:"oneresult",
                component:OneResultComponent
            }
            
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CorpValueRouting{}