import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'oneresult.component.html',
    styleUrls:['oneresult.component.css']
})
export class OneResultComponent{
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    constructor(
        private _router : Router,
        private _activatedRoute : ActivatedRoute
    ){}

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    ExcelDownload()
    {
        //https://colly.blob.core.windows.net/dartexcel/upload.xls
        // alert('down');

        // window.location.href = "https://colly.blob.core.windows.net/dartexcel/upload.xls";
        window.location.href = "https://colly.blob.core.windows.net/makeexcel/test_make.xlsx";

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    GoDiagram(){
        this._router.navigate(['../../test/canvastest01'], {relativeTo:this._activatedRoute});
    }

}//class