import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";
import { TestRouting } from "./test.routing";
import { FincanvasComponent } from "../core/htmlcomponent/fincanvas/fincanvas.component";

import { MdButtonModule } from "@angular/material";

@NgModule({
    imports:[
        CommonModule,
        TestRouting,
        MdButtonModule
    ],
    declarations:[
        Canvastest01Component
        ,FincanvasComponent
    ]
})
export class TestModule{}