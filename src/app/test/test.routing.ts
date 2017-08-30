import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";
import { DartTest01Component } from "./darttest01/darttest01.component";
import { ChartTest01Component } from "./ChartTest01/chartTest01.component";
import { DxGridTestComponent } from "./dxgridtest/dxgridtest.component";

const routes:Routes = [
    {
        path:'',
        children : [
            {
                path:'canvastest01',
                component:Canvastest01Component
            }
            ,{
                path:'darttest01',
                component:DartTest01Component
            }
            ,{
                path:'charttest01',
                component : ChartTest01Component
            }
            ,{
                path:'dxgridtest',
                component:DxGridTestComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TestRouting{}
