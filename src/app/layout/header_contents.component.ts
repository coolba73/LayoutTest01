import { Component, HostBinding } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'app-root',
    templateUrl : './header_contents.component.html',
    styleUrls : ['./header_contents.component.css']
    
})
export class Header_Contents_Component{
    

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    constructor(private _router:Router){}

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    MyTaskClick(){
        // alert('my task');
        this._router.navigate(['/biz/mytask']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    CanvasTestClick(){
        //alert('canvas test');
        this._router.navigate(['/test/canvastest01']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    DartTestClick(){
        this._router.navigate(['/test/darttest01']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    CorpSearchClick(){
        this._router.navigate(['/corpvalue/corpsearch']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    chartTestClick(){
        this._router.navigate(['/test/ChartTest01']);
    }
    
}//class