import { Component, OnInit } from '@angular/core';
import { DartService } from "../../service/DartService";

@Component({
	selector: 'darttest01',
	templateUrl: 'darttest01.component.html',
	styleUrls: ['darttest01.component.css'],
	providers:[DartService]
})

export class DartTest01Component implements OnInit {

	ReturnValue : string = "";
	cnt : number = 0;

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	constructor(private dartService : DartService) { }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	ngOnInit() { }

	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	Call_Click(){

		this.dartService.GetFinancialReportFromDart().subscribe(
			data => {
				this.cnt++;
				this.ReturnValue = data + this.cnt.toString();
			}
		);
	}
	
	//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	SetText(){

	}

	
}//class