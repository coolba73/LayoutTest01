import { Component, HostBinding } from "@angular/core";

@Component({
    selector : 'app-root',
    templateUrl : './header_contents.component.html',
    styleUrls : ['./header_contents.component.css']
    
})
export class Header_Contents_Component{
    

    MyTaskClick(){
        alert('my task');
    }

    CanvasTestClick(){
        alert('canvas test');
    }
}