import { Routes,RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Header_Contents_Component } from "./layout/header_contents.component";

export const routes : Routes = [
    {
        path:'',
        redirectTo:'biz/mytask',
        pathMatch:'full'
    },
    {
        path:'',
        component : Header_Contents_Component,
        data:{
            title:'Home'
        },
        children:[
            {
                path:'biz',
                loadChildren:'./biz/biz.module#BizModule'
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}