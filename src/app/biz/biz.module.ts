import { NgModule } from "@angular/core";
import { MyTaskLayoutComponent } from "./mytasklayout.component";
import { BizRouting } from "./biz.routing";

import { 
    MdCardModule 
    ,MdButtonModule
} from "@angular/material";

@NgModule({
    imports : [
        BizRouting
        ,MdCardModule
        ,MdButtonModule
    ],
    declarations : [
        MyTaskLayoutComponent
    ]
})
export class BizModule{}
