import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MakeAssetFlowComponent } from "./makeassetflow.component";

const routes:Routes = [
    {
        path:'',
        children : [
            {
                path:'makeassetflow',
                component:MakeAssetFlowComponent
            }
        ]
    }
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AssetMngRouting{}