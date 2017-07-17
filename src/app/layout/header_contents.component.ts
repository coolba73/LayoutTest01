import { Component, HostBinding } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'app-root',
    templateUrl : './header_contents.component.html',
    styleUrls : ['./header_contents.component.css']
    
})
export class Header_Contents_Component{
    

    constructor(private _router:Router){}

    MyTaskClick(){
        // alert('my task');
        this._router.navigate(['/biz/mytask']);
    }

    CanvasTestClick(){
        //alert('canvas test');
        this._router.navigate(['/test/canvastest01']);
    }
}