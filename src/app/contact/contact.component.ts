import { Component ,  OnInit , ViewChild , ElementRef} from '@angular/core';
import { ContactInterface, contactModel } from '../models/contact-form-model';
import { ContactService } from '../services/contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model = new contactModel ("RezaAli" , "rai@gmail.com" , "Descriptions");

  @ViewChild('txtName') txtName ?: ElementRef;
  @ViewChild('txtEmail') txtEmail ?: ElementRef;
  @ViewChild('txtDesc') txtDesc ?: ElementRef;


  isSubmitted: boolean = false;
  isCallingAPI: boolean = false;
  name:string = '';
  email:string = '';
  desc:string = '';


  constructor(
    private service: ContactService , 
    private _snackBar:  MatSnackBar){
  }

  ngOnInit():void{}

  sendForm(){
    this.isCallingAPI = true;
    

    this.service.sentContactForm({
      name: this.name,
      email : this.email,
      description : this.desc
    }).subscribe(output => {
      this.isCallingAPI = false;
      if(output.status){
        this.isSubmitted = true;
        this.name = this.txtName?.nativeElement.value;
        this.email = this.txtEmail?.nativeElement.value;
        this.desc = this.txtDesc?.nativeElement.value;

        this._snackBar.open(
          output.message! ,
          'dismiss' , {
          duration : 3000
        });
      }
    }, error => {
      
      this.isCallingAPI = false;
    });
  }

}
