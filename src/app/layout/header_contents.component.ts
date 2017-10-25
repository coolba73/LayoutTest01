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
        this._router.navigate(['/test/charttest01']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    DxGridTest(){
        this._router.navigate(['/test/dxgridtest']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SummernoteTestClick()
    {
        this._router.navigate(['/test/summernotetest']);
    }
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    FlowTestClick()
    {
        this._router.navigate(['/test/flowtest']);
    }

    //______________________________________________________________________________________________________________________________________________________
    GridLayoutTestClick()
    {
        this._router.navigate(['/test/gridlayouttest']);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    MakeAssetFlow()
    {
        // alert("Make Asset Flow");
        this._router.navigate(['/test/flowtest02']);
    }
    
}//class