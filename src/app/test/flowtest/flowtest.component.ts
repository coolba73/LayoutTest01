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
      //   $('#summernote').on('summernote.change', function(we, contents, $editable) {
      //     console.log('summernote\'s content is changed.');
      //   });

      var self = this;
      $('#summernote').on('summernote.change', 
         function(){
                self.Summernote_Change();
            }
        );
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    AddFlow(){

        let flowBox = new FlowBox();

        flowBox.x = 10;
        flowBox.y = 10;

        this.finCanvas.AddObject(flowBox);

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Canvas_MouseUp(){

        // alert('mouse up');
        let obj : BaseObject = this.finCanvas.GetCurrentBox();
        
        if (obj instanceof FlowBox){
            let flowBox = <FlowBox>obj;
            $('#summernote').summernote('code',flowBox.document);
        }
        else{
            
        }
        

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Summernote_Change(){

        //console.log('summernote change');

        let obj : BaseObject  = this.finCanvas.GetCurrentBox();

        if (obj != null && obj instanceof FlowBox){

            let text = $('#summernote').summernote('code');
            let flowBox = <FlowBox>obj;
            flowBox.document = text;
        }

    }

    
}//class