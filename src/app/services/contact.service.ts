import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFeedbackInterface, ContactInterface } from '../models/contact-form-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  api: string = 'https://angular-test.free.beeceptor.com/api/contact-form';


  constructor(private http: HttpClient) { }

  sentContactForm(data : ContactInterface) : Observable<ContactFeedbackInterface>{
   return this.http.post(this.api, data) as Observable<ContactFeedbackInterface>; 
  }
}
