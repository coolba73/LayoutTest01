import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Jquery declaration
declare var $: any;

@Component({
    selector : 'summernotetest01',
    templateUrl : './summernotetest01.component.html',
    styleUrls : ['./summernotetest01.component.css']
})
export class SummernoteTest01Component implements OnInit{

    postText: string = "";
    errorMessage: string;
    postSaved : boolean = false;
  
    private _formBuilder: FormBuilder;
    savePostForm: FormGroup;  
  
    constructor(formBuilder: FormBuilder) {
      this._formBuilder = formBuilder;    
      this.savePostForm = this._formBuilder.group({ })
    }
  
    ngOnInit() {
      // $ init summernote
      $('#summernote').summernote();
    }
  
    // on submit method
    savePost(event) {
      let text = $('#summernote').summernote('code');
      console.log(text);
      if (text != null && text != '') {
        this.postText = text;
        this.postSaved = true;
        setTimeout(() => this.postSaved = false, 2000);
      }
      else {
        console.error("posts empty");
        this.postSaved = false;
      }
    }
    
}