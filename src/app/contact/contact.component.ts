import { Component, OnInit } from '@angular/core';
import {ContactService} from "@app/services/contact.service";
import {Contact} from "@app/model/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];

  contact: Contact = new Contact();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getAll()
  }

  addContact(){
    this.contactService.addContact(this.contact).subscribe(data=>{
      console.log(data)
    })
  }

  getAll(){
    this.contactService.allContacts().subscribe(data=>{
      this.contacts = data;
    })
  }

  onSubmit(){
    this.addContact()
  }
}
