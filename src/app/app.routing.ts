import { Routes,RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Header_Contents_Component } from "./layout/header_contents.component";

export const routes : Routes = [
    {
        path:'',
        redirectTo:'mytask'
    },
    {
        path:'',
        component : Header_Contents_Component,
        data:{
            title:'Home'
        },
        children:[
            {
                path:'mytask',
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