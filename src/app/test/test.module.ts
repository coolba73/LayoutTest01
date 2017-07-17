import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";
import { TestRouting } from "./test.routing";

@NgModule({
    imports:[
        CommonModule,
        TestRouting
    ],
    declarations:[
        Canvastest01Component
    ]
})
export class TestModule{}