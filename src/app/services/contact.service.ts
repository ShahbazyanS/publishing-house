import { Injectable } from '@angular/core';
import {Contact} from "@app/model/contact";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = 'http://localhost:8080/contact'

  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(`${this.baseUrl}`, contact)
  }

  allContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.baseUrl}`)
  }
}
