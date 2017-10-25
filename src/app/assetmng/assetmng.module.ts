import { NgModule } from "@angular/core";
import { AssetMngRouting } from "./assetmng.routing";
import { MakeAssetFlowComponent } from "./makeassetflow.component";
import { FincanvasComponent } from "../core/htmlcomponent/fincanvas/fincanvas.component";

@NgModule({
    imports:[
        AssetMngRouting
    ],
    declarations:[
         MakeAssetFlowComponent
         ,FincanvasComponent
    ]
})
export class AssetMngModule{}