import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FincanvasComponent } from "../../core/htmlcomponent/fincanvas/fincanvas.component";
import { BaseObject } from "../../core/shape/BaseObject"; 
import { FlowBox } from "../../core/shape/FlowBox";

declare var $: any;

@Component({
    selector : 'flowtest',
    templateUrl : './flowtest.component.html',
    styleUrls : ['./flowtest.component.css']
})

export class FlowtestComponent implements OnInit{

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    @ViewChild("fcvs") finCanvas : FincanvasComponent;
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    ngOnInit(){

     // $ init summernote
     $('#summernote').summernote({
        height:300,
        maxHeight:null,
        minHeight:null
      });

      // summernote.change
      $('#summernote').on('summernote.change', function(we, contents, $editable) {
        console.log('summernote\'s content is changed.');
      });
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    AddFlow(){

        let flowBox = new FlowBox();

        flowBox.x = 10;
        flowBox.y = 10;

        this.finCanvas.AddObject(flowBox);

    }
    
}//class