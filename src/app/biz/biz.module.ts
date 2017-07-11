import { NgModule } from "@angular/core";
import { MyTaskLayoutComponent } from "./mytasklayout.component";
import { BizRouting } from "./biz.routing";

@NgModule({
    imports : [
        BizRouting
    ],
    declarations : [
        MyTaskLayoutComponent
    ]
})
export class BizModule{}
