import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FincanvasComponent } from "../../core/htmlcomponent/fincanvas/fincanvas.component";
import { BaseObject } from "../../core/shape/BaseObject"; 
import { FlowBox } from "../../core/shape/FlowBox";
import { LineBase } from "../../core/shape/LineBase";
import { DiagramService } from "../../service/DiagramService";
import { UUID } from "angular2-uuid";

declare var $: any;

@Component({
    selector : 'flowtest02',
    templateUrl : './flowtest02.component.html',
    styleUrls : ['./flowtest02.component.css'],
    providers:[DiagramService]
})

export class FlowTest02Component implements OnInit{
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    @ViewChild("fcvs") finCanvas : FincanvasComponent;
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    constructor(private _diagramService : DiagramService){}
    
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

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Save(){

        let saveObj = JSON.stringify(this.finCanvas.objects);

        console.log(saveObj);

        let userId = "f5aaf3e1-da19-db1b-0cf5-879b42e5d943";
        let diagramId = "0692eeb0-ff7c-8568-3262-fee050781678";

        this._diagramService.SaveDiagramByJson(userId, diagramId,'flow Test', saveObj).subscribe(
            data => {
                alert('ok');
            },
            error =>{
                alert('save error');
            }
        );

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Open(){

        let key1 : string = "f5aaf3e1-da19-db1b-0cf5-879b42e5d943";
        let key2 : string = "0692eeb0-ff7c-8568-3262-fee050781678";

        this._diagramService.OpenDiagram(key1,key2).subscribe(
            data =>{

                //alert('ok');
                console.log(data.value);

                let jsonobj = JSON.parse(data.value);

                let myBox : FlowBox;
                let myLine : LineBase;

                for (let obj of jsonobj){

                    if (obj.Type === FlowBox.name)
                    {
                        myBox = new FlowBox();
                        myBox.fillFromJSON(JSON.stringify( obj));
                        this.finCanvas.objects.push(myBox);
                    }
                    else if(obj.Type === LineBase.name)
                    {
                        myLine = new LineBase();
                        myLine.fillFromJSON(JSON.stringify(obj));
                        this.finCanvas.objects.push(myLine);
                    }
                }

                this.finCanvas.Draw();

            }
            ,error =>{
                alert('error');
                console.log(error);
            }
        );
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    OpenList()
    {
        alert('open list');
    }
}