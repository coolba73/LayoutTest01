import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyTaskLayoutComponent } from "./mytasklayout.component";
import { MyTaskComponent } from "./mytask.component";
import { BizRouting } from "./biz.routing";

import { 
    MdCardModule 
    ,MdButtonModule
    ,MdSlideToggleModule
    ,MdRadioModule
    
} from "@angular/material";

@NgModule({
    imports : [
        BizRouting
        ,MdCardModule
        ,MdButtonModule
        ,MdSlideToggleModule
        ,MdRadioModule
        ,CommonModule
    ],
    declarations : [
        MyTaskLayoutComponent
        ,MyTaskComponent
    ]
})
export class BizModule{}
