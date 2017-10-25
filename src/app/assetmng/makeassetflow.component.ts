import { Component,OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FincanvasComponent } from "../core/htmlcomponent/fincanvas/fincanvas.component";
import { BaseObject } from "../core/shape/BaseObject"; 
import { FlowBox } from "../core/shape/FlowBox";
import { LineBase } from "../core/shape/LineBase";
import { DiagramService } from "../service/DiagramService";
import { UUID } from "angular2-uuid";

declare var $: any;

@Component({
    selector : 'makeassetflow',
    templateUrl : './makeassetflow.component.html',
    styleUrls : ['./makeassetflow.component.css']
})

export class MakeAssetFlowComponent implements OnInit {

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
            $('#summernote').summernote('code','');
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