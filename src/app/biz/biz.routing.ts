import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyTaskLayoutComponent } from "./mytasklayout.component";

const routes:Routes=[
    {
        path:'',
        data:{
            title:'biz'
        },
        children:[
            {
                path:'mytask',
                component:MyTaskLayoutComponent,
                data:{
                    title:'My Task'
                }
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class BizRouting{}

