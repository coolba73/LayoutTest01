import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./corpsearch.component.html',
    styleUrls:['./corpsearch.component.css'
    ]
})
export class CorpSearchComponent{
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    constructor(
        private _router : Router
        ,private _activatedRoute : ActivatedRoute
    ){}

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Search()
    {
        this._router.navigate(['../oneresult'] , {relativeTo:this._activatedRoute} );
    }

}//class  