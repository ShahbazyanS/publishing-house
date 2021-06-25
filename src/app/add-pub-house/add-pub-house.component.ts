import {Component, OnInit} from '@angular/core';
import {PubHouseService} from "@app/services/pub-house.service";
import {PublishingHouse} from "@app/model/publishing-house";
import {ContactService} from "@app/services/contact.service";
import {Contact} from "@app/model/contact";

@Component({
  selector: 'app-add-pub-house',
  templateUrl: './add-pub-house.component.html',
  styleUrls: ['./add-pub-house.component.css']
})
export class AddPubHouseComponent implements OnInit {

  contacts: Contact[];
  pubHouse: PublishingHouse = new PublishingHouse();

  constructor(private pubHouseService: PubHouseService, private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.getAllContacts()
  }

  addPubHouse() {
    this.pubHouseService.createPubHouse(this.pubHouse).subscribe(data => {
        console.log(data);
      },
      error => console.log(error))
  }

  onSubmit() {
    this.addPubHouse()
  }

  getAllContacts() {
    this.contactService.allContacts().subscribe(data => {
      this.contacts = data;
    })
  }
}
