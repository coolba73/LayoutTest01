import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Canvastest01Component } from "./canvastest01/canvastest01.component";
import { TestRouting } from "./test.routing";
import { MdButtonModule, MdInputModule, MdGridListModule } from "@angular/material";
import { DartTest01Component } from "./darttest01/darttest01.component";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartTest01Component } from "./ChartTest01/chartTest01.component";
import { NvD3Module } from "ng2-nvd3";
import { BubbleChartComponent } from "./ChartTest01/chartTest01.component";
import { DxGridTestComponent } from "./dxgridtest/dxgridtest.component";
import { DevExtremeModule } from "devextreme-angular";
import { SummernoteTest01Component } from "./SummernoteTest/summernotetest01.component";
import { FlowtestComponent } from "./flowtest/flowtest.component";
import { GridLayoutTestComponent } from "./gridlayouttest/gridlayouttest.component";
import { FincanvasComponent } from "../core/htmlcomponent/fincanvas/fincanvas.component";
import { FlowTest02Component } from "./flowtest02/flowtest02.component";



import 'd3';
import 'nvd3';


// TODO: this should go in a shared module. 
import { DomSanitizer } from '@angular/platform-browser'
@Pipe({ name: 'escapeHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value: any, args: any[] = []) {       
        // simple JS inj cleanup that should be done on server side primarly
        if (value.indexOf('<script>') != -1) {
            console.log('JS injection. . . html purified');
            return value.replace('<script>', '').replace('<\/script>', '');
        }
        return this.sanitized.bypassSecurityTrustHtml(value); // so ng2 does not remove CSS
    }
}
// End

@NgModule({
    imports:[
        CommonModule,
        TestRouting,
        MdButtonModule,
        MdInputModule,
        FormsModule,
        NvD3Module,
        DevExtremeModule,
        ReactiveFormsModule,
        MdGridListModule
    ],
    declarations:[
        Canvastest01Component
        ,DartTest01Component
        ,ChartTest01Component
        ,BubbleChartComponent
        ,DxGridTestComponent
        ,SummernoteTest01Component
        ,EscapeHtmlPipe
        ,FlowtestComponent
        ,GridLayoutTestComponent
        ,FincanvasComponent
        ,FlowTest02Component
        
    ]
})
export class TestModule{}