import { Component, OnInit } from '@angular/core';
import {PublishingHouse} from "@app/model/publishing-house";
import {PubHouseService} from "@app/services/pub-house.service";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "@app/services/contact.service";
import {Contact} from "@app/model/contact";

@Component({
  selector: 'app-updat-pub-house',
  templateUrl: './updat-pub-house.component.html',
  styleUrls: ['./updat-pub-house.component.css']
})
export class UpdatPubHouseComponent implements OnInit {

  id: number;
  contacts: Contact[];
  pubHouse: PublishingHouse;
  constructor(private route: ActivatedRoute, private pubHouseService: PubHouseService, private contactService:ContactService) { }

  ngOnInit(): void {
    this.pubHouse = new PublishingHouse();

    this.id = this.route.snapshot.params['id']

    this.pubHouseService.getById(this.id).subscribe(data=>{
      this.pubHouse = data;
    })
    this.getContacts()
  }

  getContacts(){
    this.contactService.allContacts().subscribe(data=>{
      this.contacts = data
    })
  }

  update(){
    this.pubHouseService.update(this.id, this.pubHouse).subscribe(data=>{
      console.log(data)
      this.pubHouse = new PublishingHouse()
    })
  }

  onSubmit(){
    this.update()
  }
}
