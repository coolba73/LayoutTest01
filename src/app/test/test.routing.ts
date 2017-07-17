import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";

const routes:Routes = [
    {
        path:'',
        children : [
            {
                path:'canvastest01',
                component:Canvastest01Component
            }
            
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TestRouting{}
