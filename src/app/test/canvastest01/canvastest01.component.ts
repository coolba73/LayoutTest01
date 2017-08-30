import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { FincanvasComponent } from "../../core/htmlcomponent/fincanvas/fincanvas.component";
import { BaseObject } from "../../core/shape/BaseObject";
import { BoxBase } from "../../core/shape/BoxBase";



@Component({
	selector: 'canvastest01',
	templateUrl: 'canvastest01.component.html',
	styleUrls: ['canvastest01.component.css'],
	encapsulation : ViewEncapsulation.None
})

export class Canvastest01Component implements OnInit {


	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	@ViewChild("fcvs") finCanvas : FincanvasComponent;

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	constructor() { }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	ngOnInit() { }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	btnAdd_Click(){

		let box : BoxBase = new BoxBase();

		box.x = 10;
		box.y = 10;
		
		this.finCanvas.AddObject(box);
		
	}

}//class