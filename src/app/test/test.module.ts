import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";
import { TestRouting } from "./test.routing";
import { FincanvasComponent } from "../core/htmlcomponent/fincanvas/fincanvas.component";

import { MdButtonModule, MdInputModule } from "@angular/material";

import { DartTest01Component } from "./darttest01/darttest01.component";
import { FormsModule } from '@angular/forms';
import { ChartTest01Component } from "./ChartTest01/chartTest01.component";
import { NvD3Module } from "ng2-nvd3";

import 'd3';
import 'nvd3';

@NgModule({
    imports:[
        CommonModule,
        TestRouting,
        MdButtonModule,
        MdInputModule,
        FormsModule,
        NvD3Module
    ],
    declarations:[
        Canvastest01Component
        ,FincanvasComponent
        ,DartTest01Component
        ,ChartTest01Component
    ]
})
export class TestModule{}