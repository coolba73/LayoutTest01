import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";
import { TestRouting } from "./test.routing";
import { FincanvasComponent } from "../core/htmlcomponent/fincanvas/fincanvas.component";

import { MdButtonModule, MdInputModule } from "@angular/material";

import { DartTest01Component } from "./darttest01/darttest01.component";


@NgModule({
    imports:[
        CommonModule,
        TestRouting,
        MdButtonModule,
        MdInputModule
    ],
    declarations:[
        Canvastest01Component
        ,FincanvasComponent
        ,DartTest01Component
    ]
})
export class TestModule{}