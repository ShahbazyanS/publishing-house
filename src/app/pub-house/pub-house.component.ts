import {Component, OnInit} from '@angular/core';
import {PubHouseService} from "../services/pub-house.service";
import {PublishingHouse} from "../model/publishing-house";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pub-house',
  templateUrl: './pub-house.component.html',
  styleUrls: ['./pub-house.component.css']
})
export class PubHouseComponent implements OnInit {

  id: number;
  pubHouse: PublishingHouse = new PublishingHouse();

  constructor(private route: ActivatedRoute, private pubHouseService: PubHouseService) {
  }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id']
  this.getById()
  }

  getById() {
    this.pubHouseService.getById(this.id).subscribe(data => {
      this.pubHouse = data;
    })
  }
}
