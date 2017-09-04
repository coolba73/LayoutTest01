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
  
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    constructor(formBuilder: FormBuilder) {
      this._formBuilder = formBuilder;    
      this.savePostForm = this._formBuilder.group({ })
    }
  
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    ngOnInit() {
      // $ init summernote
      $('#summernote').summernote();
    }
  
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
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

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SaveToServer(){

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Open(){

      //test code
      let code = `<p>sdfsdf</p><p>asdf</p><p>asdf</p><p>asdf</p><p><img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAmCAYAAADXwDkaAAAE/0lEQVR4Ae1cXUhbVxz/JakRMtSsiYmEua0MJqRbEIwUqowpg33AeikM9xJ8KB3UDlILsx202Us7cAprk4fuJe1AloHZQ7mDtsokD1stDK/QWVDyMh+63S22kanow80Sy4mmiXLvNUnvRz7OAfHc8//f/8fv/u75IvcYNjc3t0ELRUBFBIwq2qamKQJZBCjJKBFUR4CSTHWIqQNKMsoB1RE4tLS0JOnEZDKhubkZbW1tkjqJRAJra2tIp9OSOpUuIHm2tLTA6XRKhloLeUomp7LAsL29Lbm6TKVS4Hk+SyAxohHgjUYjXC4XGhoaVA5V3Pz8/Dy6urrEhUW25vLMZDKiRKuVPIuEQ1KtXKxlh0tCHEKg9fV1UcekB9OTYKJBldGYy5PkI1ZqJU+x3LRokyUZCYA8AKmhkLTr1YMpDU695Kk0bsXYO5BkxRihOhQBOQQoyeTQoTJFEKAkUwRGakQOAUoyOXSoTBEEDilipSgjhqK08kqSOyt5FVqrCgR07cmSD5yIPjRVBVA0yPIR0LAn2xdk2gJ29BXcsGXQ+/0TuPaJq/JyhcW5j65g9ngA06Fe3Pe/jysP5DLpQeBuEIxDTqc8mbAlwGwxl3ezwnfpR7JHhxHmAfBOTC0+wSm3wpnVrbk42C+/wY0tBj+GGPwd8uLUhDwYvjCH4U55ndKkScS+9uNmfOcunUhmxNwvrRCyMTQifKcJPvcGKuO9Kw3OPdoOBkGOed7EhDjkr543q1zpADM6jGX/ssp+5M1vJOKIL+7o6EOy/6z46bcUXGgE6cyESQdin23gA6t84KVJBcyNv4uhyR0q5+7tvvQzvjtZE4NzLiXZ/x4/B84vq6KC0IbCF0yXiT8/48DTwT8R+DSzm6AV0ZlGhZM1o/vzcQxY8mbN7wQQOKEiwciczOuF188iiSRYvxdeci35dw7sSj6+Wq1p35OlLZia+B9MeAvd7n/hmnRle7OFicOIn/wHHUouNi09GA75MHf6ByxbenDxCwYuJe1XLCs8GA55stEt6DQnYwsWPZqTTODsCLtXMU1WVI5V+N52YewRWQC0geUSuHAs17sp8wTNnWcROD2Hm69+BUbFTiwbbSXMydI8YuPXwfJA95mr8Fg70HHAosquwovX5Mz71ZhkJsRut0KYaUWf98g+FhkRvW3F0LFVNO2TvNilGZ4zEQRfzEj13P34PqaODCE4uIChyB8YGIkgMqh1+Db0X4qgf9ettiRbeRn3FnlEfi8YFoUmjL33JqJbAGYcuPd4FQPtWoOikL9K2Cd7fQBj7UnMfhuF+WhIpxW7XlsY6Uawo+2Y7VzG1cLu2byBvo+B6CR50C/h+jU7esef1sncSSFyF5pJ82BHRhD/JITgcRv0mZMBOmxhJMGef2t39/sN9N1N4Bb3FzxoAOv37NkVF359DSfOA9MhwFYIXjXUK2FOFo+BXbfDfucaLi98iH5d5mR7tzA0Gi6J03mRjcmURHs1MKpCY3T7cCvsKwiuB/2az8kK3APQiGTEKf1VxV7o6+dKl83Y+oGXZkoQoCSjPFAdAUoy1SGmDijJKAdUR+BAkpGvq8ln/GKFtBN5LZR6yVOPZyVLstzn++Q8DLFCzo8gxxhUO9FyeZJ8xEqt5CmWmxZtBo7jJPcW6IEr+UdAD1zJY1FqzUCP8ywVMqpfKgKyw2Wpxqg+RUAMAUoyMVRom6IIPAPOW6pnaK3UawAAAABJRU5ErkJggg==" data-filename="image.png" style="width: 153px;"><br></p>`
      $('#summernote').summernote('code',code);

      


    }
    

}//class