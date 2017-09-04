import { Component,OnInit } from "@angular/core";

declare var $: any;
@Component({
    selector : 'finsummernote',
    templateUrl : './finsummernote.component.html',
    styleUrls : ['./finsummernote.component.css']
})

export class FinsummernoteComponent implements OnInit{
    
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    ngOnInit(){
          // $ init summernote
      $('#summernote').summernote({
        
      });

      // summernote.change
      $('#summernote').on('summernote.change', function(we, contents, $editable) {
        console.log('summernote\'s content is changed.');
      });
    }

}//class