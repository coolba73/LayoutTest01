import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairWise';
import 'rxjs/add/operator/switchMap';

import { BaseObject } from "../../shape/BaseObject";
import { BoxBase } from "../../shape/BoxBase";
import { LineBase } from "../../shape/LineBase";
import { SelectBox } from "../../shape/SelectBox";
import { UUID } from "angular2-uuid";


@Component({
	selector: 'fincanvas',
	templateUrl: 'fincanvas.component.html',
	styleUrls: ['fincanvas.component.css']
})
export class FincanvasComponent implements OnInit {


	// Variable
	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	
	@ViewChild("myCanvas") myCanvasRef : ElementRef;

    pre_x : number;
    pre_y : number;
    currentObj : BaseObject;

    myCanvas : HTMLCanvasElement;
    ctx : CanvasRenderingContext2D;

    objects : BaseObject[] = [];

    message : string = '';
    xpoint : number;
    ypoint : number;

    YesMouseDown : boolean = false;

    saveobject : string;

    yesAddLine : boolean = false;

    KeyDownMessage : string = "";

    YesCanvasMouseOver : boolean = false;

    yesDrawSelectBox : boolean = false;

    selectBox : SelectBox;

    CanvasScale : number = 1;

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	constructor() { }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	ngOnInit() { }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	ngAfterViewInit(){
		this.ctx = this.myCanvasRef.nativeElement.getContext("2d");
		this.myCanvas = <HTMLCanvasElement>this.myCanvasRef.nativeElement;
		this.captureEvents(this.myCanvas);
	}

    
	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    captureEvents(canvasEl:HTMLCanvasElement){
        
        let rect = canvasEl.getBoundingClientRect();

        Observable.fromEvent(canvasEl,'mousemove').subscribe( (res:MouseEvent)=>{

            var re = this.calPoint(canvasEl, res);
            this.Canvas_MouseMove(re.rex, re.rey);

        });

        Observable.fromEvent(canvasEl,'mousedown').subscribe( (res:MouseEvent)=>{

            var re = this.calPoint(canvasEl, res);
            this.YesCanvasMouseOver = true;
            this.Canvas_MouseDown(re.rex, re.rey);

        });

        Observable.fromEvent(canvasEl,'mouseup').subscribe( (res:MouseEvent)=>{

            var re = this.calPoint(canvasEl, res);
            this.Canvas_MouseUp(re.rex, re.rey);
        });

        Observable.fromEvent(canvasEl,'mouseout').subscribe(()=> {
            this.YesCanvasMouseOver = false;
        });

        Observable.fromEvent(canvasEl,'mouseover').subscribe(()=> {
        });


        Observable.fromEvent(document,'keydown').subscribe((e:KeyboardEvent)=>{
            this.Canvas_KeyDown(e);
        });


    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Canvas_KeyDown(e : KeyboardEvent){

        let deleteLines : LineBase[] = [];
        let deleteBoxIdList : string[] = [];
        let deleteObjList : BaseObject[] = [];


        if (this.YesCanvasMouseOver)
        {
            switch(e.keyCode)
            {
                //delete key
                case 46:{

                    console.log('delete');

                    this.objects.forEach(i => {

                        if (i.YesSelected)
                        {
                            if (i.Type === BoxBase.name)
                            {
                                deleteBoxIdList.push(i.Id);
                            }

                            deleteObjList.push(i);
                        }
                    });

                    deleteObjList.forEach(i => {
                        this.DeleteObject(i);
                    });

                    deleteBoxIdList.forEach(i => {
                        this.objects.forEach(obj => {
                            if (obj instanceof LineBase && (obj.Box_1_ID === i || obj.Box_2_ID === i))
                            {
                                deleteLines.push(obj);
                            }
                        });
                    });

                    deleteLines.forEach( line => {
                        this.DeleteObject(line);
                    });

                    this.Draw();

                    break;
                }
            }
        }
            
    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    DeleteObject(obj:BaseObject){

        let index = this.objects.indexOf(obj);
        if (index > -1) this.objects.splice(index,1);
    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    calPoint (canvasEl:HTMLCanvasElement ,res:MouseEvent)  {
        let rect = canvasEl.getBoundingClientRect();

        var rex;
        var rey;


        if (res.pageX || res.pageY) { 
            rex = res.pageX + document.getElementById("container").scrollLeft ;
            rey = res.pageY + document.getElementById("container").scrollTop;
        }
        else { 
            rex = res.clientX + document.body.scrollLeft + document.documentElement.scrollLeft + document.getElementById("container").scrollLeft; 
            rey = res.clientY + document.body.scrollTop + document.documentElement.scrollTop + document.getElementById("container").scrollTop; 
        } 

        rex -= canvasEl.offsetLeft;
        rey -= canvasEl.offsetTop;


        rex = rex / this.CanvasScale;
        rey = rey / this.CanvasScale;

        return {rex,rey};
    }


	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Canvas_MouseMove(x:number, y:number){

        this.xpoint = x;
        this.ypoint = y;

        if (this.currentObj != undefined){
            this.message = this.currentObj.Title;
        }

        if ( this.YesMouseDown )
        {

            if(this.yesDrawSelectBox && this.selectBox != undefined){
                
                this.selectBox.x2 = x;
                this.selectBox.y2 = y;

                this.objects.forEach(i => {
                    i.YesSelected = false;
                });

                this.objects.forEach(i => {
                    i.CheckSelect(
                        this.selectBox.x1,
                        this.selectBox.y1,
                        this.selectBox.x2,
                        this.selectBox.y2
                    );
                });

            }
            else if( this.objects.filter(i=>i.YesSelected).length > 1 ){

                let boxlist : BoxBase[] = [];
                this.objects.filter(i=>i.YesSelected && i.Type === BoxBase.name).forEach(i => {
                    let dx = this.pre_x - x;
                    let dy = this.pre_y - y;
                    (<BoxBase>i).x -= dx;
                    (<BoxBase>i).y -= dy;
                    let circlePoint = (<BoxBase>i).CalMouseOverCirclePoint();
                    boxlist.push(<BoxBase>i);
                });

                boxlist.forEach(box => {
                    this.objects.forEach(i => {
                        if (i instanceof LineBase ){
                            if (i.Box_1_ID === box.Id)
                                i.SetBoxPoint(box, 1);
                            else if(i.Box_2_ID === box.Id)
                                i.SetBoxPoint(box,2);
                        }

                    });    
                });

            }
            else if(this.currentObj != undefined)
            {
                if (this.yesAddLine)
                {
                    this.objects.forEach(i => {
                        i.YesMouseOver = false;
                    });

                    let line : LineBase = <LineBase>this.currentObj;
                    let cirpt;

                    let box = this.objects.filter(i=> i instanceof BoxBase && line.Box_1_ID != i.Id ).find(i=>( 
                            //cirpt = (<BoxBase>i).GetConnectPoint(this.ctx,x,y)).PointIndex > 0 
                            cirpt = (<BoxBase>i).GetConnectPoint2(this.ctx,line.x1, line.y1,x,y)).PointIndex > 0 
                    );

                    if (box != undefined)
                    {
                        line.Box_2_ID = box.Id;
                        line.Box_2_PointIndex = cirpt.PointIndex;
                        line.x2 = cirpt.x;
                        line.y2 = cirpt.y;
                        box.YesMouseOver = true;
                    }
                    else
                    {
                        line.Box_2_ID = '';
                        line.Box_2_PointIndex = 0;
                        line.x2 = x;
                        line.y2 = y;
                    }

                }
                else if ( this.currentObj instanceof BoxBase)
                {
                    let dx = this.pre_x - x;
                    let dy = this.pre_y - y;
                    let box : BoxBase = <BoxBase>this.currentObj;
                    let circlePoint = box.CalMouseOverCirclePoint();

                    (<BoxBase>this.currentObj).x -= dx;
                    (<BoxBase>this.currentObj).y -= dy;

                    this.objects.forEach(i => {
                        if (i instanceof LineBase ){
                            if (i.Box_1_ID === box.Id)
                                i.SetBoxPoint(box, 1);
                            else if(i.Box_2_ID === box.Id)
                                i.SetBoxPoint(box,2);
                        }
                    });
                    
                }
            }
        }
        else{

            this.objects.forEach(i => {

                if (i.CheckMouseOver(this.ctx,x,y))
                {
                    this.message =  "mouse over : " + i.Type;
                }

            });    
        }

        this.pre_x = x;
        this.pre_y = y;
        

        this.Draw();
        
    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Canvas_MouseDown(x:number, y:number){

        this.YesMouseDown = true;


        if ( this.objects.filter(i=>i.YesSelected).length > 1 &&  
             this.objects.filter(i=>i.YesSelected).find(i=>i.CheckMouseOver(this.ctx,x,y)) != undefined )
        {

        }
        else
        {
            this.objects.forEach(element => {
                element.YesSelected = false;
            });
            
            this.objects.forEach(i => {

                if ( i instanceof BoxBase && this.yesAddLine === false ){

                    let re = i.CheckCircleMouseOver(this.ctx, x,y);

                    if (re.x >= 0){

                        this.yesAddLine = true;
                        let myline = new LineBase();

                        myline.x1 = re.x;
                        myline.y1 = re.y;
                        myline.x2 = re.x;
                        myline.y2 = re.y;
                        myline.Title = "Line";
                        myline.Box_1_ID = i.Id;
                        myline.Box_1_PointIndex = re.PointIndex;
                        myline.YesDrawEndArrow = true;
                        this.currentObj = myline;

                        this.objects.push(myline);

                        this.message = "circle down ok";

                    }
                    
                }
            });

            if (this.yesAddLine === false){

                this.currentObj = this.objects.find(i=> i.CheckMouseOver(this.ctx,x,y));

                if (this.currentObj != null) 
                {
                    this.currentObj.YesSelected = true;
                    this.message = 'selected : ' + this.currentObj.Type;
                }
                else{

                    this.yesDrawSelectBox = true;
                    this.selectBox = new SelectBox();

                    this.selectBox.x1 = x;
                    this.selectBox.x2 = x;
                    this.selectBox.y1 = y;
                    this.selectBox.y2 = y;

                    this.objects.push(this.selectBox);

                }

            }

            this.pre_x = x;
            this.pre_y = y;

            if (this.currentObj != undefined) this.Draw();
            
        }

    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Canvas_MouseUp(x:number, y:number){

        if (this.yesAddLine)
        {
            let line:LineBase = <LineBase>this.currentObj;

            if (line.Box_2_ID === "")
            {
                let index = this.objects.indexOf(line);
                if (index > -1) this.objects.splice(index,1);
            }
            else{
                this.SetSeq();
            }
        }
        else if(this.yesDrawSelectBox){

            this.objects.filter(i=>i.Type === SelectBox.name).forEach(i => {
                this.DeleteObject(i);    
            });
            
            this.yesDrawSelectBox = false;
        }

        this.YesMouseDown = false;
        this.currentObj = undefined;
        this.yesAddLine = false;

        this.Draw();

    }
    

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    private AddBox(){
        
        let myBox = new BoxBase();

        myBox.x = 10;
        myBox.y = 10;
        myBox.FillColor = 'lightblue'
        myBox.Width = 100;
        myBox.Height = 50;
        myBox.Title = "Box "+ this.objects.length.toString();
        
        this.objects.push(myBox);

        this.Draw();

	}
	
	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	AddObject(obj:BaseObject)
	{
		this.objects.push(obj);
		this.Draw();
	}

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Draw(){

        this.ctx.clearRect(0,0,this.myCanvas.width, this.myCanvas.height);

        for (let obj of this.objects){
            obj.Draw(this.ctx);
        }

    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Clear(){

        this.objects = [];
        this.Draw();
    }


	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Test(){

        // let test1 = 'aaaa';
        // let test2 = '111aaaa';

        // this.message = ( test1 === test2 ? "equal" : "not");

        console.log( document.getElementById("container").scrollLeft);
        console.log(document.getElementById("container").scrollTop);

    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetSeq(){

        let lineList = <LineBase[]>this.objects.filter(i=> i instanceof LineBase);
        let rootBoxList : BoxBase[] = [];

        this.objects.filter(i=> i instanceof BoxBase).forEach(i => {

            (<BoxBase>i).Seq = 1;

            if ( lineList.find(i=> i.Box_2_ID === i.Id ) === undefined)
            {
                rootBoxList.push(<BoxBase>i);
            }

        });


        rootBoxList.forEach(box => {
            lineList.filter(i=> i.Box_1_ID === box.Id ).forEach(i=>{
                this.Trip(i.Box_2_ID,2);
            });
        });

        this.Draw();


    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Trip(boxId:string, index:number){
        
        let box : BoxBase = <BoxBase>this.objects.find(i=> i.Id === boxId);
        let lineList = <LineBase[]>this.objects.filter(i=> i instanceof LineBase);
        let childList : BoxBase[];
        
        box.Seq = Math.max(box.Seq, index);

        lineList.forEach(i => {
            if (i.Box_1_ID === box.Id)
            {
                this.Trip(i.Box_2_ID, index + 1);
            }
        });

    }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetScale(ScaleType:string){
        
        if (ScaleType === 'up')
        {
            this.CanvasScale += 1;
        }
        else{
            this.CanvasScale -= 1;
        }

        this.ctx.scale(2,2);


    }
	


}//class